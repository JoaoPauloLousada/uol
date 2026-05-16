# Integrating Visual Aids into Written Communication

## Overview

This lecture uses the **FAST Project** (Fusing Semantic Audio Technologies, ~£6M, EPSRC-funded) as a real case study for turning complex qualitative field research into clear, actionable visualizations. The core challenge: raw data from field studies has high volume and high complexity — it doesn't automatically yield design goals or system specifications.

---

## 1. The Problem: Complex Data Lacks Immediate Meaning

Field-based research generates large documents (300–500 pages) that:
- Describe **actions** (what people do) and **motivations** (why they do it)
- Are hard to read and extract patterns from
- Cannot be directly turned into design requirements without translation

> Example: A participant clicks on track 2 and adjusts the microphone → says "the bass response is better." This single observation hints at a design opportunity (e.g., automated mic positioning) but is not yet generalizable or actionable on its own.

**Key challenge:** You must report *everything* during fieldwork, then filter for meaning afterwards.

---

## 2. What to Look For in Field Reports

When reading through complex field reports, you extract three categories of insight:

| Category | Description | Example |
|---|---|---|
| **Best Practice** | Things that already work well — emulate them | Blue underlined hyperlinks as web conventions |
| **Opportunities for Improvement** | Existing inefficiencies that can be made better | Automating a manual adjustment |
| **Opportunities for Innovation** | Novel ideas that don't exist yet (novelty proposition) | A robot that repositions microphones automatically |

---

## 3. Two Dimensions of Information

Every system or process can be described along two axes:

- **Actions & Intents** — what a person *does* and what they *want to achieve* (manifests as use cases, activity diagrams, user stories)
- **State of the Process** — where things are at any given moment (manifests as sequence diagrams, dashboards)

> Driving analogy: pressing the accelerator = action+intent; knowing your location and how late you are = state.

Both are equally important for designing systems people actually need.

---

## 4. The Abstraction Process — From Raw Data to Visual

The lecture walks through a step-by-step process of increasing abstraction:

### Step 1 — Identify Concerns and Practices
- **Concerns/Preoccupations (O):** what participants worry about or focus on
- **Practices (P):** specific activities they carry out

Map these against each other in a table. Example: Project Initiation → O3, O4, O5, O7 mapped to P3, P16, P17, P19, P29.

### Step 2 — Generalize into Stages
Group observations into generalizable production phases:

```
Project Initiation → Pre-Production → Production → Post-Production → Delivery/Distribution
```

Use **colour coding** and **numerical schemes** to make the phases visually distinct and navigable.

### Step 3 — Abstract to High-Level Visual
Thousands of pages of reports → **five steps** in a clean diagram. Each step contains nested detail you can drill into, while the top level gives an at-a-glance overview.

### Step 4 — Embed Design Interventions
With the abstracted structure in place, designers and developers can identify which parts of the system to build, improve, or innovate on — without re-reading all the raw data.

---

## 5. The Digital Music Object — A Research Output Example

One output of the FAST project was the concept of a **Digital Music Object (DMO)**: the idea that music is not a static artifact but an evolving one.

A composition can go through many transformations over its lifecycle:

```
Original composition → Recording → YouTube video → Remix → Acoustic version → Re-remix...
```

This led to three categories of activities around music artifacts:

| Category | Description |
|---|---|
| **Tagging / Indexing / Linking** | Making music storable, retrievable, and findable (metadata) |
| **Signing the Sound** | The personal creative signature of a producer/engineer — branding through style |
| **Legality / Provenance** | Copyright, IP ownership, reusability rights |

---

## 6. The Two Core Visualization Techniques

The lecture concludes with clear guidance on the two most important visualization types for research communication:

### Tabular Visualizations (X/Y Tables)
- Map one set of items against another
- Great for showing relationships, patterns, and complexity in structured data
- Easy to scan and interpret

### Figures / Visual Structures
- Diagrams, flowcharts, process maps
- Ideal for interrelated concepts and sequential processes
- Help readers grasp structure at a glance

> "When you're producing research reports... you want to rely heavily on visualizations."

---

## Key Takeaways

1. **Raw qualitative data needs translation** — field reports alone cannot drive design decisions; abstraction is essential.
2. **Abstraction is a layered process** — go from specific observations → coded themes → generalizable stages → high-level visual.
3. **Always capture both dimensions** — actions/intents AND state of the process give a complete picture.
4. **Three design lenses** — every analysis should identify best practices, improvement opportunities, and innovation opportunities.
5. **Two visualization tools** — tables (X/Y mapping) and figures (visual structures) are your primary weapons for communicating complex research clearly.
6. **Generalizability matters** — a single observation is not a design requirement; patterns across multiple participants are.
7. **Accessibility is the goal** — every visualization decision should make complex information easier for your audience to understand and act on.
