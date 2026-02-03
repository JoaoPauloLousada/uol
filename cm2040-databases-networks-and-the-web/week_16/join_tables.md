
---

## 1️⃣ The setup (simple tables)

Imagine two tables:

### `users`

| id | name  |
| -- | ----- |
| 1  | Alice |
| 2  | Bob   |
| 3  | Carol |

### `orders`

| id | user_id | product |
| -- | ------- | ------- |
| 10 | 1       | Book    |
| 11 | 1       | Pen     |
| 12 | 2       | Laptop  |

👉 **Important observation**

* Alice has **2 orders**
* Bob has **1 order**
* Carol has **0 orders**

We’ll join them using:

```sql
users.id = orders.user_id
```

---

## 2️⃣ INNER JOIN (only matching rows)

### Definition (plain English)

> **Give me only rows where BOTH tables have a match.**

### SQL

```sql
SELECT users.name, orders.product
FROM users
INNER JOIN orders ON users.id = orders.user_id;
```

### Result

| name  | product |
| ----- | ------- |
| Alice | Book    |
| Alice | Pen     |
| Bob   | Laptop  |

### What happened?

* ✅ Alice → included (has orders)
* ✅ Bob → included (has orders)
* ❌ Carol → **excluded** (no orders)

### Mental model

🧠 **Intersection**
“Only what overlaps”

---

## 3️⃣ LEFT JOIN (everything from the left table)

### Definition (plain English)

> **Give me ALL rows from the LEFT table, even if there’s no match on the right.**

### SQL

```sql
SELECT users.name, orders.product
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
```

### Result

| name  | product |
| ----- | ------- |
| Alice | Book    |
| Alice | Pen     |
| Bob   | Laptop  |
| Carol | NULL    |

### What happened?

* ✅ Alice → orders shown
* ✅ Bob → orders shown
* ✅ Carol → **kept**, but `product = NULL`

### Mental model

🧠 **Left table is the boss**
“Never drop a row from the left side”

---

## 4️⃣ RIGHT JOIN (everything from the right table)

### Definition (plain English)

> **Give me ALL rows from the RIGHT table, even if there’s no match on the left.**

### SQL

```sql
SELECT users.name, orders.product
FROM users
RIGHT JOIN orders ON users.id = orders.user_id;
```

### Result

| name  | product |
| ----- | ------- |
| Alice | Book    |
| Alice | Pen     |
| Bob   | Laptop  |

### What happened?

* Every order **must appear**
* If an order had no user → user columns would be `NULL`

### Mental model

🧠 **Right table is the boss**

> ⚠️ In practice, many developers **avoid RIGHT JOIN** and just swap tables + use LEFT JOIN (clearer).

---

## 5️⃣ Side-by-side comparison

| Join Type | Keeps unmatched rows from |
| --------- | ------------------------- |
| INNER     | ❌ None (only matches)     |
| LEFT      | ✅ Left table              |
| RIGHT     | ✅ Right table             |

---

## 6️⃣ Super-important pattern (filtering with LEFT JOIN)

### “Users with NO orders”

```sql
SELECT users.name
FROM users
LEFT JOIN orders ON users.id = orders.user_id
WHERE orders.id IS NULL;
```

### Result

| name  |
| ----- |
| Carol |

🧠 Trick:

* `LEFT JOIN` keeps all users
* `WHERE orders.id IS NULL` filters **only those without matches**

This is a **very common interview + real-world query**.

---

## 7️⃣ One-sentence intuition

* **INNER JOIN** → “Only who matches”
* **LEFT JOIN** → “Everyone on the left, matched or not”
* **RIGHT JOIN** → “Everyone on the right, matched or not”

---

