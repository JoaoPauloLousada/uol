Nested `SELECT` (a.k.a. **subqueries**) are just **queries inside other queries**. They let you compute a set of values (a scalar, a list, or a table) and then use that result as input to another query.

Below are the common *shapes*, *why/when you need them*, *impacts*, and *alternatives*—with simple examples.

---

## 1) Scalar subquery (returns one value)

**Use case:** “Compare every row against a single computed value” (max, avg, etc.)

### Example: employees earning above the company average

```sql
SELECT id, name, salary
FROM employees
WHERE salary > (
  SELECT AVG(salary)
  FROM employees
);
```

**Why/when needed**

* The threshold (AVG) is derived from the same table and you don’t want to hardcode it.

**Alternatives**

* **Window function** (often clearer and can be faster):

```sql
SELECT id, name, salary
FROM (
  SELECT e.*, AVG(salary) OVER () AS avg_salary
  FROM employees e
) x
WHERE salary > avg_salary;
```

---

## 2) Subquery with `IN` (returns a list of values)

**Use case:** “Filter rows using a list produced by another query.”

### Example: customers who have at least one order

```sql
SELECT c.id, c.name
FROM customers c
WHERE c.id IN (
  SELECT o.customer_id
  FROM orders o
);
```

**Why/when needed**

* You need a “membership” test: is this customer ID in the set of customers who ordered?

**Impacts**

* Depending on DB and indexes, this can be fine—or slower if the subquery returns a huge set.
* `IN` + `NULL` can behave in surprising ways if the subquery column can be `NULL`.

**Alternatives (often preferred)**

* **`EXISTS`** (great for “at least one related row” and avoids some `NULL` pitfalls):

```sql
SELECT c.id, c.name
FROM customers c
WHERE EXISTS (
  SELECT 1
  FROM orders o
  WHERE o.customer_id = c.id
);
```

* **Join + distinct**:

```sql
SELECT DISTINCT c.id, c.name
FROM customers c
JOIN orders o ON o.customer_id = c.id;
```

---

## 3) Correlated subquery (inner query depends on outer row)

**Use case:** “For each row, compute something relative to that row.”

### Example: customers whose latest order is in 2026

```sql
SELECT c.id, c.name
FROM customers c
WHERE (
  SELECT MAX(o.created_at)
  FROM orders o
  WHERE o.customer_id = c.id
) >= DATE '2026-01-01';
```

**Why/when needed**

* The inner query needs the outer row’s `c.id`.

**Impacts**

* Can be expensive if executed “per row” (though many DBs optimize this into joins/aggregations—don’t assume).
* Indexes matter a lot (`orders(customer_id, created_at)` would help here).

**Alternatives**

* **Join with aggregation**:

```sql
SELECT c.id, c.name
FROM customers c
JOIN (
  SELECT customer_id, MAX(created_at) AS last_order_at
  FROM orders
  GROUP BY customer_id
) lo ON lo.customer_id = c.id
WHERE lo.last_order_at >= DATE '2026-01-01';
```

* **Window function** (often the cleanest for “latest row per group”):

```sql
SELECT id, name
FROM (
  SELECT c.id, c.name,
         MAX(o.created_at) OVER (PARTITION BY c.id) AS last_order_at
  FROM customers c
  JOIN orders o ON o.customer_id = c.id
) x
WHERE last_order_at >= DATE '2026-01-01';
```

---

## 4) Subquery in the `FROM` clause (derived table)

**Use case:** “Make a temporary result set (like a mini table) and query it.”

### Example: revenue per customer, then filter

```sql
SELECT t.customer_id, t.total_spent
FROM (
  SELECT customer_id, SUM(amount) AS total_spent
  FROM orders
  GROUP BY customer_id
) t
WHERE t.total_spent > 1000;
```

**Why/when needed**

* You need a grouped/aggregated result before applying another filter.

**Alternative**

* Same idea but often cleaner with a **CTE**:

```sql
WITH totals AS (
  SELECT customer_id, SUM(amount) AS total_spent
  FROM orders
  GROUP BY customer_id
)
SELECT customer_id, total_spent
FROM totals
WHERE total_spent > 1000;
```

(CTEs can improve readability; performance depends on the DB—some inline them, some materialize.)

---

## 5) Subquery with `NOT EXISTS` / anti-join

**Use case:** “Find rows with *no* related rows” (very common).

### Example: customers with no orders

```sql
SELECT c.id, c.name
FROM customers c
WHERE NOT EXISTS (
  SELECT 1
  FROM orders o
  WHERE o.customer_id = c.id
);
```

**Why/when needed**

* Correct “absence” logic is tricky with joins; `NOT EXISTS` is typically robust.

**Alternative**

* `LEFT JOIN ... WHERE o.customer_id IS NULL` (works, but can get messy with multiple joins):

```sql
SELECT c.id, c.name
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id
WHERE o.customer_id IS NULL;
```

---

# Why & when nested SELECT is needed

You reach for subqueries when you need to:

1. **Use a computed value/set** (avg/max/list) to filter or compute results.
2. **Express “exists / not exists”** relationships clearly.
3. **Do multi-step logic** (aggregate first, then filter).
4. **Keep a query localized** without creating views/temp tables.

---

# Impacts (what to watch)

### 1) Performance

* **Correlated subqueries** can be costly if not optimized.
* Large `IN (subquery)` sets can be heavy.
* Correct indexes often matter more than the query style.

### 2) Readability & maintainability

* A small subquery can be very readable.
* Deeply nested subqueries can become hard to reason about—CTEs often help.

### 3) `NULL` semantics

* `IN` and `NOT IN` with `NULL` can surprise you.

  * Many teams prefer `EXISTS` / `NOT EXISTS` for that reason.

---

# Common alternatives (when to prefer them)

1. **JOINs**
   Good for combining related tables, especially when you want columns from both sides.

2. **CTEs (`WITH`)**
   Great for readability when logic is naturally multi-step.

3. **Window functions (`OVER (...)`)**
   Often best for:

   * “Top N per group” / “latest row per group”
   * Running totals / rank / percentiles
   * Comparing a row to group aggregates without extra joins

4. **Views / materialized views**
   When the derived result is reused often.

---
