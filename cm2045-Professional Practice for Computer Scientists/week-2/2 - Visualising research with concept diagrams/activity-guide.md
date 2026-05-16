# Activity Guide: Visualising Research with Concept Diagrams

## What You Are Building

An **A4 poster** that applies the concept diagram notation from McGrath et al. (2022) to a topic of your choice. The poster is then shared on the discussion forum for peer feedback.

---

## Understanding the Paper First (Non-Negotiable)

Before any design decision, you need to understand two things from the paper: **the notation** and **the key finding**.

### The Concept Diagram Notation

Concept diagrams use a small set of visual primitives to express logical statements about classes and their relationships:

| Visual Element | What It Means | Example |
|---|---|---|
| Circle inside another circle | **Subset** — all A are B | All Korrigans are Spirits |
| Two non-overlapping circles in the **same** box | **Disjoint** — no A is a B | Demon and Elf share no members |
| Two circles in **separate** boxes | **Nothing** — no relationship expressed | |
| Solid arrow from circle to circle | **Some** — A relates to at least one B | Elves chase at least one Fairy |
| Solid arrow with restriction label | **Only** — A relates only to B | Selkies hate only Goblins |
| Dashed arrow annotated with `≥1` | **Some** (cardinality version) | Giants like at least one Halfling |
| Arrow from the enclosing **box** | **Domain** — only A p things | Only Demons scare things |
| Arrow to a specific circle, sourced from box | **Range** — things p only A | Things annoy only Fairies |

> Why this matters: Your poster must use at least some of these elements correctly, and the feedback criteria explicitly checks for **accuracy** against the paper.

### The Paper's Key Finding

The study tested three colour treatments on 261 participants:
- **Monochrome** — everything black
- **Dichrome** — sets in blue, binary relations (arrows) in green
- **Polychrome** — every set and arrow has a unique colour (needed 18 colours)

**Result: no overall significant difference between the three treatments.** The headline finding is:

> Monochrome = Dichrome = Polychrome

Why it happened: concept diagrams are more complex than Euler diagrams. Once you need more than ~8–10 colours, the human eye can no longer reliably distinguish them, so the expected advantage of polychrome disappears. The paper also notes that circles and arrows already have sufficiently different shapes, so colour adds no extra separating power in the dichrome case either.

> Why this matters: you are expected to make an **informed** colour choice for your poster. You should be able to justify why you chose monochrome, dichrome, or a custom palette — not just "it looks nice."

---

## Step-by-Step Guide

---

### Step 1 — Pick Your Subject Domain

Choose a concept that has **classes, subsets, and relationships** between them. The notation is designed for this kind of complexity.

Good candidates for a CS student:
- **OOP class hierarchy** — Animal → Mammal → Dog, with relationships like "Dog chases Cat"
- **Data structures** — Stack ⊆ List, Queue ⊆ List, "Stack stores only elements"
- **Network roles** — Client, Server, Proxy, "Client requests at least one Server"
- **Software actors** — Admin ⊆ User, Guest, "Admin manages only Databases"
- **Something personal** — a music genre hierarchy, a sports team structure, how pets interact

> **Why:** The paper explicitly says these techniques suit "complex relationships — the types of things you work on in data mining, set theory and other complex computing domains." Picking the right domain ensures you have enough material to fill the poster meaningfully.

> **Avoid** subjects with fewer than four or five named classes — the diagram will be too sparse to be interesting or demonstrate the notation properly.

---

### Step 2 — List the Statements You Want to Express

Before drawing anything, write out the **logical statements** your diagram will express, in plain English, one per line. Target 8–14 statements (that is the complexity level used in the paper's study diagrams).

Identify which **statement type** each one is:

```
e.g. (OOP example)
- All Dogs are Mammals          → Subset
- No Cat is a Dog               → Disjoint
- Dogs chase only Cats          → Only
- Cats like at least one Human  → Some
- Only Mammals breathe things   → Domain
- Things feed only Puppies      → Range
```

> **Why:** This forces you to think in the language of concept diagrams *before* worrying about layout. It is much easier to draw a circle-and-arrow diagram when you already know exactly what each element must communicate. It also ensures your poster will be **accurate** — the hardest feedback criterion to satisfy.

---

### Step 3 — Map Statements to Visual Elements

For each statement from Step 2, decide which visual element from the notation table represents it:

- Subset → draw the inner circle inside the outer circle, **in the same box**
- Disjoint → two circles side by side, **in the same box**, not touching
- Only → solid arrow, with the property name as the label
- Some → solid arrow, or dashed with `≥1` annotation
- Domain → solid arrow originating from the **enclosing box** (universal set)
- Range → arrow from the box, pointing *to* the target circle

Also decide which elements share a box (same box = relationship exists; separate boxes = no relationship implied).

> **Why:** This is the translation step — the same abstraction process described in the Week 2 lecture. You are moving from a text list to a structured visual grammar. Getting this right ensures your poster is readable and not just decorative.

---

### Step 4 — Sketch the Layout on Paper First

Before opening any design tool, sketch on paper (or a whiteboard). Map out:
- How many boxes you need
- Where the circles sit inside each box
- Where the arrows go (arrows can cross boxes)
- Where the text labels sit (keep them minimal — inside or near the relevant element)

Check your sketch against these rules from the paper:
- Circles inside the **same box** express a relationship; circles in **separate boxes** do not
- Non-overlapping curves in a single box = disjoint; do not put them in separate boxes if you mean disjoint
- Keep the number of colours ≤ 10 if using polychrome (the paper found 18 colours caused performance degradation)

> **Why:** The activity instructions explicitly say *"sketch out your poster design and plan your layout before creating the final version."* Skipping this step typically results in a cluttered diagram where arrows cross awkwardly and the spatial logic breaks down — which hurts the **clarity** and **visual appeal** feedback criteria.

---

### Step 5 — Choose and Justify Your Colour Scheme

Pick one of three informed options:

| Option | How to Apply | When to Choose It |
|---|---|---|
| **Monochrome** | All curves and arrows in black, no fill | Simplest; the paper shows it performs equal to colour. Good if your domain is already complex |
| **Dichrome** | Curves (sets) in one colour, arrows in a contrasting colour | Matches the paper's *de facto* standard; reinforces the semantic separation between sets and relations |
| **Custom polychrome** | Unique colour per named set, unique colour per arrow; use ColorBrewer or similar | Visually rich but only works if you have ≤10 sets and ≤8 arrows; beyond that, perceptual distinction degrades |

> **Why:** The paper's central contribution is precisely about this decision. An informed colour choice demonstrates that you understood the research, not just the notation. The activity instructions say *"the choice of colours is up to you"* but also say to *"choose a colour scheme that enhances readability"* — these two requirements are in tension and require you to apply the paper's findings.

---

### Step 6 — Create the Poster

Use any tool you are comfortable with: PowerPoint, Keynote, Figma, Inkscape, Canva, draw.io, etc.

Set the canvas to **A4 portrait or landscape** (210 × 297 mm).

Structure the poster with three zones:

```
┌─────────────────────────────────────────┐
│  TITLE + 1-sentence description         │  ~10% of height
├─────────────────────────────────────────┤
│                                         │
│   CONCEPT DIAGRAM(S) — main visual      │  ~70% of height
│                                         │
├─────────────────────────────────────────┤
│  LEGEND (notation key) + colour key     │  ~20% of height
└─────────────────────────────────────────┘
```

Design checklist:
- [ ] Title is short and descriptive
- [ ] Each named class (circle) has a label inside or next to it
- [ ] Each arrow has a property name label
- [ ] A legend explains the notation (subset = circle inside circle, etc.)
- [ ] Colour key is included if using dichrome or polychrome
- [ ] No large paragraphs of text — the diagram must do the communicating
- [ ] Spatial logic is correct (same box = relationship, separate boxes = no claim)

> **Why:** The feedback your peers will use has four criteria — clarity, visual appeal, originality, and accuracy. Each zone of the poster directly addresses one or more of these. Keeping text minimal is specifically called out in the activity instructions ("do not use excessive amounts of text").

---

### Step 7 — Self-Review Against the Paper

Before exporting, verify each statement from your Step 2 list is correctly encoded in the diagram. Read the diagram back to plain English and check it matches your intended meaning.

Specifically test:
- **Indirect statements** — e.g. if A ⊆ B and B ⊆ C, then A ⊆ C is an *indirect* subset statement the diagram implicitly expresses. Make sure you haven't accidentally expressed something false.
- **Disjoint vs. non-disjoint** — circles in separate boxes do NOT claim disjointness; only non-overlapping circles in the *same* box do.
- **Arrow directionality** — "A chases B" and "B chases A" are different; check arrow heads.

> **Why:** The paper found that **Disjoint-false** checkboxes had an error rate of 27.78% among participants — the most common misreading was confusing "in separate boxes" with "disjoint." If this confused trained participants, it will confuse poster readers too. Accuracy is one of the four peer-feedback criteria.

---

### Step 8 — Export and Post to the Forum

Export the poster as a PNG or JPG (most forum platforms don't embed PDFs).

When posting, include a short (2–3 sentence) description:
- What concept you chose and why
- Which colour treatment you used and why (reference the paper's finding here)
- One thing you found difficult or surprising about using this notation

> **Why:** The description gives your peers context for giving good feedback, and referencing the paper's finding in your colour justification demonstrates you engaged with the research — which is the whole point of the activity.

---

### Step 9 — Give Peer Feedback

Review at least one classmate's poster using the four official criteria:

| Criterion | What to Look For |
|---|---|
| **Clarity** | Can you read the diagram back into plain English statements? Is the notation used consistently? |
| **Visual appeal** | Is the layout balanced? Does the colour scheme help or hinder? Is it uncluttered? |
| **Originality** | Did they choose an interesting domain? Did they use the notation creatively (e.g. multiple boxes, domain/range arrows)? |
| **Accuracy** | Cross-check their diagram against the notation rules. Are circles in the same box only when a relationship is intended? Are arrow types (solid vs. dashed) used correctly? |

Write 2–4 sentences per criterion. Be specific: name the element you're commenting on, not just "the diagram looks nice."

> **Why:** Giving structured feedback is itself a learning objective of the module — professional practice includes peer review. It also forces you to re-read the notation rules, which deepens your own understanding.

---

## Summary Checklist

| Task | Done? |
|---|---|
| Read the paper and understood the six statement types | |
| Identified the paper's main finding about colour | |
| Chosen a subject domain with 8–14 expressible statements | |
| Listed statements and labelled each with its type | |
| Mapped statements to visual elements (circles, arrows, boxes) | |
| Sketched the layout on paper | |
| Chosen a colour scheme with a justification | |
| Created the A4 poster in a design tool | |
| Self-reviewed accuracy against the notation rules | |
| Exported and posted to the forum with a short description | |
| Reviewed at least one peer's poster using the four criteria | |
