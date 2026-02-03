
---

## 1️⃣ Our tiny dataset (mental model)

Assume we have **one table** called `sales`:

```sql
sales
------------------------------------------------
id | product | category | price | quantity
------------------------------------------------
1  | Pen     | Office   | 2.00  | 10
2  | Pen     | Office   | 2.00  | 5
3  | Notebook| Office   | 5.00  | 3
4  | Apple   | Food     | 1.50  | 20
5  | Apple   | Food     | 1.50  | 10
6  | Bread   | Food     | 3.00  | 4
```

Think of **each row as a single sale**.

---

## 2️⃣ Aggregate functions: the basics

Aggregate functions **collapse multiple rows into a single value**.

### `COUNT` – how many rows?

```sql
SELECT COUNT(*) FROM sales;
```

➡️ “How many sales exist?”

---

### `MIN` / `MAX` – smallest / largest value

```sql
SELECT MIN(price), MAX(price)
FROM sales;
```

➡️ “What’s the cheapest and most expensive product price?”

---

### `SUM` – total

```sql
SELECT SUM(quantity)
FROM sales;
```

➡️ “How many items were sold in total?”

---

### `AVG` – average (mean)

```sql
SELECT AVG(price)
FROM sales;
```

➡️ “What is the **mean price** across all sales?”

> ⚠️ `AVG` = **arithmetic mean**, not weighted unless you make it so.

---

## 3️⃣ Grouping data with `GROUP BY`

Without `GROUP BY` → **one result**
With `GROUP BY` → **one result per group**

---

### Example: total quantity sold per product

```sql
SELECT product, SUM(quantity) AS total_quantity
FROM sales
GROUP BY product;
```

Result (conceptually):

| product  | total_quantity |
| -------- | -------------- |
| Pen      | 15             |
| Notebook | 3              |
| Apple    | 30             |
| Bread    | 4              |

➡️ “For each product, how many units were sold?”

---

### Example: number of sales per category

```sql
SELECT category, COUNT(*) AS sales_count
FROM sales
GROUP BY category;
```

➡️ “How many sales happened per category?”

---

## 4️⃣ Common statistical metrics (and how to derive them)

### 🔹 Mean (average)

Already built-in:

```sql
SELECT AVG(quantity) AS mean_quantity
FROM sales;
```

➡️ “Average number of items per sale”

---

### 🔹 Weighted mean (very common in real life)

Example: **average price weighted by quantity sold**

```sql
SELECT
  SUM(price * quantity) / SUM(quantity) AS weighted_mean_price
FROM sales;
```

➡️ “What was the *true* average price considering volume?”

---

### 🔹 Min / Max per group

```sql
SELECT category, MIN(price), MAX(price)
FROM sales
GROUP BY category;
```

➡️ “Price range inside each category”

---

### 🔹 Count distinct values

```sql
SELECT COUNT(DISTINCT product)
FROM sales;
```

➡️ “How many different products were sold?”

---

## 5️⃣ Median (important, slightly trickier)

### Why median is special

Median = **middle value when ordered**, not just math.

For prices:

```
1.50, 1.50, 2.00, 2.00, 3.00, 5.00
Median = (2.00 + 2.00) / 2 = 2.00
```

---

### PostgreSQL example (has built-in support)

```sql
SELECT PERCENTILE_CONT(0.5)
WITHIN GROUP (ORDER BY price)
FROM sales;
```

➡️ Median price

---

### If your DB doesn’t support median

You usually:

* Sort
* Pick the middle row(s)
* Average if even count

(Implementation varies by database, so don’t memorize one hack—understand the concept.)

---

## 6️⃣ Grouped statistics (very common in analytics)

### Average quantity per product

```sql
SELECT product, AVG(quantity) AS avg_quantity
FROM sales
GROUP BY product;
```

---

### Median quantity per category (Postgres example)

```sql
SELECT category,
       PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY quantity) AS median_quantity
FROM sales
GROUP BY category;
```

---

## 7️⃣ Filtering aggregated results with `HAVING`

Important rule:

> `WHERE` filters **rows**
> `HAVING` filters **groups**

---

### Example: products with more than 10 items sold

```sql
SELECT product, SUM(quantity) AS total_quantity
FROM sales
GROUP BY product
HAVING SUM(quantity) > 10;
```

➡️ “Only keep groups that meet a condition”

---

## 8️⃣ Mental cheat-sheet 🧠

| Goal               | Function                          |
| ------------------ | --------------------------------- |
| Count rows         | `COUNT(*)`                        |
| Smallest / largest | `MIN`, `MAX`                      |
| Total              | `SUM`                             |
| Mean               | `AVG`                             |
| Median             | `PERCENTILE_CONT(0.5)` (Postgres) |
| Group rows         | `GROUP BY`                        |
| Filter groups      | `HAVING`                          |

---

## 9️⃣ How this shows up in real systems

In real projects (dashboards, reports, admin panels), you’ll constantly answer questions like:

* “Average order value per day”
* “Top 5 products by revenue”
* “Median transaction amount per user”
* “Categories with low sales volume”

All of those are **just combinations of**:
👉 `GROUP BY` + aggregate functions.

---

