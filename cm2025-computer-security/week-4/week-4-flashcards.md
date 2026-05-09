# CM2025 Computer Security — Week 4 Flashcards

60 cards across 5 clusters. Each card references its source document.

---

## Cluster 1 — SMEs: Context, Project & Standard (12 cards)

---

### Card 01
**Q:** Why are SMEs described as a "blind spot" in cybersecurity? List the five intrinsic characteristics that make them vulnerable.

**A:**
1. **Small dimension** — limited financial resources for complex or costly security procedures
2. **Traditional and family structures** — informal governance; absence of formal HR or IT departments
3. **Lack of resident IT staff** — no dedicated security personnel
4. **Difficulty accessing funded projects** — cybersecurity investment is deprioritised
5. **Lower collaborator cyberawareness** — employees are often the weakest link

> Despite their large share of global wealth production, these characteristics leave SMEs systematically under-secured.

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 1.1*

---

### Card 02
**Q:** What was the COVID-19 accelerator effect on SME cybersecurity exposure?

**A:** The COVID-19 pandemic **accelerated digital transformation** in SMEs, with more collaborators working from home. This increased **cybersecurity exposure** and urgency to implement countermeasures, because remote working extends the attack surface beyond the controlled office environment — introducing personal devices, home networks, and reduced direct IT oversight into the threat model.

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 1.2*

---

### Card 03
**Q:** What was the "Log In Innovation" project? Give its key dimensions.

**A:**
| Dimension | Detail |
|-----------|--------|
| **Period** | 2018–2020 |
| **Budget** | ~€1,304,000 (EU regional development funding via IAPMEI) |
| **Promoter** | NERLEI (business association, Leiria region, Portugal) |
| **Entities** | NERLEI + Polytechnic of Leiria + IT consulting company + SMEs |
| **IS/cybersecurity scope** | 50 SMEs, mainly from Leiria district |
| **Other axes** | Lean manufacturing, balanced scorecards, digital marketing, quality management |

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 2*

---

### Card 04
**Q:** What were the two overarching goals of the Log In Innovation project?

**A:**
1. Give SMEs the opportunity to **increase their cyberawareness and competitiveness**, and to mitigate some of their organisational, IT, and human resource flaws using available cybersecurity management funding
2. At a **regional level**, strengthen the cooperation between a **business association, academia, and a consulting team** working together to foster cybersecurity in SMEs and mitigate their information security flaws

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 2*

---

### Card 05
**Q:** What is the structure of ISO 27001:2013 — how many controls and categories? What was it designed for?

**A:**
- **114 controls** grouped into **14 thematic categories** (Annex A.5 through A.18)
- **Designed for:** all organisation types and sizes that collect, process, store, or transmit data
- Related standards referenced in the article: **ISO 27005** (risk management methods) and **ISO 27037** (guidelines for identifying, collecting, acquiring, and preserving digital evidence)

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 3*

---

### Card 06
**Q:** What are the three possible states of an audited ISO 27001:2013 control?

**A:**
| State | Meaning |
|-------|---------|
| **Fail** | Conformity level of 0% — control not met at all |
| **Pass** | Acceptance level above 0% (the higher the better) |
| **Not applicable** | Control is irrelevant to the enterprise's activity or scope |

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 3*

---

### Card 07
**Q:** How does the article describe the collaborative delivery model — what did each entity contribute?

**A:** The project combined three entities, each addressing a distinct barrier:

| Entity | Contribution |
|--------|-------------|
| **NERLEI** (business association) | Trust, regional network access, and funding coordination — removed financial and access barriers |
| **Polytechnic of Leiria** (academia) | Methodology design, research rigour, and expertise — removed knowledge barrier |
| **IT consulting company** | Practical auditing and technical implementation — removed technical capability barrier |

> Together they created a model where no single SME needed to source all three types of support independently.

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Topic C*

---

### Card 08
**Q:** What four types of documents were produced as part of the project methodology?

**A:**
1. **Auditing checklist** — per control; instructions for the auditing team to assess and validate each control within the ISMS scope
2. **Mitigation activities list** — per control; a list of mitigation actions to be implemented by SMEs when a control fails
3. **Templates** — for collecting information about assets and policies (e.g., a template for mobile devices in use at the SME)
4. **Auditing reports** — automatically generated; summarise audit results for management boards; used to evaluate current position and define future improvements

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 7.1*

---

### Card 09
**Q:** What were the three goals and the technical architecture of the web-based auditing application?

**A:** **Three goals achieved by the application:**
1. Harmonising the auditing process across all SMEs
2. Automatically generating auditing and intervention reports
3. Processing and analysing aggregated results

**Technical architecture — three layers:**
| Layer | Technology |
|-------|-----------|
| **Access** | Web browser |
| **Application** | Laravel framework |
| **Data** | MySQL database |

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 7.2 & Q10*

---

### Card 10
**Q:** What were the key characteristics of the 50 SMEs in the study sample?

**A:**
| Dimension | Key Finding |
|-----------|-------------|
| **Geography** | Centre region of Portugal; 43 of 50 from Leiria district |
| **Size distribution** | 48% medium, 38% small, 14% micro |
| **Activity sectors** | Equally distributed: industry (20), commerce (~14), services (16) |
| **Most represented sub-sectors** | Wholesales (13 enterprises), engineering services (5) |
| **Employees** | 70% have >20 employees; 36% have >60 |
| **Exports** | ~50% export only ≤2.5% of revenue — low internationalisation |

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 8*

---

### Card 11
**Q:** What did the project explicitly state it was NOT designed to achieve? Why does this distinction matter?

**A:** Neither Type 1 nor Type 2 intervention was designed to produce **ISO 27001:2013 certified companies** — formal certification was not a project goal.

This distinction matters because **certification requires full compliance across all 114 controls**, which most SMEs in the project could not achieve in one intervention. By targeting **awareness and gradual improvement** rather than certification, the project could engage 50 SMEs at varying maturity levels. Some SMEs were found to be advanced enough to potentially pursue certification, but this was an incidental outcome — not the design intent.

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 5 & Q19*

---

### Card 12
**Q:** What enhancement to the methodology did the authors recommend for future work, and why?

**A:** The authors recommended **adding a re-evaluation step to Type 1 auditing** in future iterations. In the current design, Type 1 had no re-evaluation — countermeasures were applied during the single auditing process, but there was no formal reassessment of results.

The rationale: since **Type 2's re-evaluation proved the most impactful element** (passing controls more than doubled after the second audit), adding this feedback loop to Type 1 would allow even the simpler intervention to demonstrate measurable improvement over time — increasing both SME confidence and the robustness of the methodology.

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 12.3 & Q20*

---

## Cluster 2 — Auditing Types, Threats & Methodology Design (12 cards)

---

### Card 13
**Q:** What are the key differences between Type 1 ("Standard") and Type 2 ("Full") auditing?

**A:**
| Dimension | Type 1 — "Standard" | Type 2 — "Full" |
|-----------|---------------------|-----------------|
| **Controls** | 30 controls | 114 controls (all) |
| **Categories covered** | 8 of 14 | All 14 (A.5–A.18) |
| **ISO 27001 coverage** | ~25% | 100% |
| **Re-evaluation** | None — mitigations applied during auditing | Yes — re-evaluation after first audit |
| **Target** | Initial diagnosis; correct flaws | ≥60% of controls passed |
| **Reports delivered** | One auditing report | Intermediate report + final report |
| **Participant SMEs** | 30 | 20 |

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 4*

---

### Card 14
**Q:** Which ISO 27001:2013 categories were covered in Type 1 auditing? Which were excluded from Type 1 (covered only in Type 2)?

**A:** **Categories covered in Type 1 (8 of 14):**
A.5 Information security policies, A.8 Asset management, A.9 Access control, A.10 Cryptography, A.12 Operations security, A.13 Communications security, A.14 System acquisition/development/maintenance, A.18 Compliance

**Categories covered only in Type 2 (not Type 1):**
- A.6 Organisation of information security
- A.7 Human resource security
- A.11 Physical and environmental security
- A.15 Supplier relationships
- A.16 Information security incident management
- A.17 Information security aspects of BCM

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 4 & Q8*

---

### Card 15
**Q:** What were the six design presuppositions used to select the 30 Type 1 controls?

**A:** The 30 controls were selected because they do not require:

1. Acquiring **infrastructural components** like buildings or specific networking components
2. A **formal corporate or HR structure** — SMEs without HR departments are not excluded
3. They **target the most common cyberattacks** facing SMEs
4. No need to implement **disaster recovery or business continuity** procedures
5. They **do not impose a mandatory formal business process model** on SMEs
6. They allow addressing basic issues without a **complex IT infrastructure** — supporting a preliminary check-up purpose

> Key principle: *Do not reduce the standard's rigour — reduce its activation barrier.*

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 5 & Q7*

---

### Card 16
**Q:** What are the eight cyberthreat categories identified as most relevant to SMEs?

**A:**
| Threat Category | Examples |
|----------------|---------|
| **Social engineering** | Phishing, malware, mobile malware, ransomware |
| **Policy management** | Weak passwords, inadequate authentication, poor access controls |
| **Insider threats** | Employees, former employees, contractors, associates |
| **Hardware threats** | Personal electronic devices, web servers, database servers |
| **Software threats** | Third-party applications in the SME's information system |
| **DDoS** | Higher impact on SMEs with significant online presence |
| **Privilege/data abuse** | Employees exploiting privileged access to company resources |
| **Unintentional exposure** | Failure to comply with security procedures leading to inadvertent exposure |

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 6 & Q11*

---

### Card 17
**Q:** Why are SMEs particularly vulnerable to DDoS attacks compared to large enterprises?

**A:** The article identifies DDoS as having **higher impact on SMEs that have a significant online presence**. This is because SMEs typically have:
- Fewer redundancy measures
- Less network bandwidth capacity to absorb volumetric attacks
- Fewer technical resources to deflect attacks

Their reliance on online presence for **business continuity** means a successful DDoS attack can directly disrupt revenue — an impact that larger enterprises with redundant infrastructure are better equipped to absorb.

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 6 & Q12*

---

### Card 18
**Q:** What does the article say about the role of cyberawareness as a factor in SME security? What did the project do about it?

**A:** The article identifies **lower collaborator cyberawareness** as one of the five intrinsic SME vulnerabilities. It states that *"training and certification of SMEs collaborators are essential in mitigating the risks in cybersecurity."*

In the project, the consortium provided **training seminars** as a core component of the intervention — not as an afterthought. SMEs that promoted educational activities had better audit outcomes. The conclusion explicitly frames training and cyberawareness as **essential, not optional**, for any SME cybersecurity programme.

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 1.1 & Topic B*

---

### Card 19
**Q:** What does the article say about relying solely on ISO 27001:2013 for SME cybersecurity?

**A:** The authors conclude that ISO 27001:2013 **alone may not cover all of an SME's information security needs**. They state that *"other best practices and frameworks should be addressed, implemented, and compared, in order to identify the fully appropriateness of ISO-27001:2013 to all of the intervened SMEs."*

The **NIST Cybersecurity Framework** is specifically named as a complementary option to explore. This reflects the broader finding from the literature: no single standard universally suffices, and combinations are often needed.

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 12.2 & Q21*

---

### Card 20
**Q:** What does the article's CIA triad grounding mean for how ISO 27001 controls are structured?

**A:** The article explicitly grounds its approach in the CIA triad:

| CIA Principle | How Addressed in the Project |
|---------------|------------------------------|
| **Confidentiality** | Procedures defining who has access to data — addressed by access control (A.9) |
| **Integrity** | Data trustworthiness and accuracy for authorised users — addressed by operations security (A.12) and cryptography (A.10) |
| **Availability** | Systems remain accessible and operational — addressed by backup (A.12.3), network management (A.13.1), and BCM (A.17 in Type 2) |

ISO 27001 is described as being *"grounded on the implementation of policies and controls, to manage security and risks at an organisational level"* — which operationalises the CIA triad across all 114 controls.

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Q23*

---

### Card 21
**Q:** What are the three dimensions of conclusions presented by the authors?

**A:**
1. **Project development and management** — the aims were well-defined *a priori* and grounded in embodying SMEs with better cybersecurity tools; the ISO 27001 methodology aligns with the literature and the scope is SMEs and micro enterprises

2. **Impact on participating SMEs** — observed improvements were substantial, especially in Type 2; training, adoption of auditing processes, and continuous improvement are essential for mitigating cybersecurity risks

3. **Global results** — the project had a clear positive impact across the SMEs, even though full success in all controls was not expected; the variation in results reflects the different organisational, HR, IT, and cyberawareness levels of the intervened SMEs

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Q24*

---

### Card 22
**Q:** How does the article describe insider threats in the SME context? Who counts as an insider?

**A:** The article categorises **insider threats** as one of the eight cyberthreat types most relevant to SMEs. Insiders include:
- **Current employees**
- **Former employees**
- **Business contractors**
- **Associates**

A separate threat category — **privilege/data abuse** — covers employees exploiting privileged access to company resources, or stealing/disrupting the business. In the SME context, insider threats are particularly acute because the **absence of formal HR structures and access controls** means that privileged access is often poorly defined, monitored, or revoked after employment ends.

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 6*

---

### Card 23
**Q:** What does the article mean by "unintentional exposure" as a cyberthreat? Why is it relevant to SMEs specifically?

**A:** **Unintentional exposure** refers to situations where an employee **fails to comply with security procedures**, inadvertently exposing the organisation to cyberattack. It is not a deliberate act — it is the result of ignorance, poor training, or unclear policies.

It is particularly relevant to SMEs because:
- SMEs have **lower collaborator cyberawareness** as a structural characteristic
- Absence of **formal security policies** means employees may not know what the correct procedure is
- Without dedicated security staff to monitor and correct behaviour, mistakes go undetected longer

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 6*

---

### Card 24
**Q:** What is the article's key principle for scaling ISO 27001 to SMEs, and why is it important?

**A:** The key principle is:

> *"Do not reduce the standard's rigour — reduce its activation barrier."*

This means the **subset approach (30 controls)** maintains the spirit of ISO 27001:2013 without watering down its requirements. It acknowledges that SMEs **cannot implement all 114 controls simultaneously** and need a structured entry point. By reducing what the SME needs to have *in place before starting* (no infrastructure, no HR department, no formal business process model), the methodology makes the standard accessible — without compromising what the controls themselves demand once an SME reaches them.

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Topic A*

---

## Cluster 3 — Audit Results & Organisational Factors (12 cards)

---

### Card 25
**Q:** What was the overall average acceptance rate in Type 1 auditing, and what does it indicate?

**A:** The average acceptance rate (positive evaluation) for Type 1 auditing was **78.06%**. Most controls scored above 50%, confirming **baseline conformity** across most SMEs.

This result is notable because it suggests that even SMEs with no prior formal cybersecurity programme could achieve meaningful compliance with a carefully selected subset of ISO 27001 controls — particularly process-based ones — without requiring significant technical infrastructure.

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 9.1*

---

### Card 26
**Q:** Which control categories performed best in Type 1 auditing and why?

**A:** The best-performing categories were **A.9.4 (System and application access control)**, **A.14.1**, and **A.14.2**.

**Reason:** These are **process-based controls** — they require no prior technical knowledge, no additional equipment, and no specialist expertise to implement. SME managers can comply through **awareness and documentation effort alone**. The ease of process-based controls explains why they outperformed technical controls consistently across all SME profiles.

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 9.2 & Q13*

---

### Card 27
**Q:** Which control categories performed worst in Type 1 auditing and why?

**A:**
| Category | Reason for Poor Performance |
|----------|-----------------------------|
| **A.10.1 — Cryptographic controls** | Technical complexity in implementing and validating cryptographic mechanisms — requires specialist knowledge and tooling |
| **A.12.1 — Operational procedures and responsibilities** | Difficulty specifying and validating strict operational and responsibility procedures within the SME scope — requires formal process documentation that SMEs often lack |

These represent the two ends of the problem: **technical complexity** and **organisational formality** — both are scarce resources in SMEs.

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 9.2 & Q13*

---

### Card 28
**Q:** What were the Type 1 results broken down by company size? What correlation emerges?

**A:**
| Size Classification | Controls above 76% | Controls below 50% |
|--------------------|-------------------|-------------------|
| **Medium** | 84.55% | Lower |
| **Small** | 72.50% | Moderate |
| **Micro** | 64.76% | 27.14% |

A **direct positive correlation** exists between company size and control compliance: larger companies have more dedicated capacity for implementing mitigation tasks. Micro enterprises are the most under-resourced and therefore the lowest performers across all dimensions.

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 9.3 & Q14*

---

### Card 29
**Q:** Which activity sector performed best in Type 1 auditing, which performed worst, and why?

**A:**
- **Best: Industry sector** — 88.18% of controls above 76%; lowest proportion below 50% (9.09%). The industry sector's reliance on **standardised processes and regulatory compliance** creates a culture already aligned with structured security control implementation.
- **Worst: Services sector** — 35.15% of controls below 50%. Service-sector SMEs have the highest proportion of low-conformity controls, reflecting a culture less accustomed to formal procedure documentation and compliance.

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 9.3 & Q15*

---

### Card 30
**Q:** What correlation was found between employee count and cybersecurity compliance?

**A:** A **direct positive correlation** exists between number of employees and control compliance:

| Employee Count | Controls above 76% | Controls below 50% |
|----------------|-------------------|-------------------|
| **>60 employees** | 84.58% | Lower |
| **≤10 employees** | Lower | 25.33% |

More employees means more **human capacity** to implement, document, and sustain security controls. Small enterprises with very few staff cannot dedicate people to security tasks that run alongside their primary work.

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 9.3 & Topic B*

---

### Card 31
**Q:** What correlation was found between revenue and cybersecurity compliance?

**A:** Higher-revenue SMEs consistently achieved better conformity across all auditing dimensions:

| Revenue Band | Controls above 76% |
|--------------|-------------------|
| **>€5.5M** | 87%+ |
| **≤€2M** | 25.45% below 50% |

Greater **financial resources** allow investment in security tools, training, and consulting. The article concludes that the *"wealthiness"* of an enterprise is a predictor of cybersecurity readiness — not because wealth directly creates security, but because it removes the resource constraint that prevents SMEs from implementing mitigation tasks.

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 9.3 & Topic B*

---

### Card 32
**Q:** What correlation was found between export activity and cybersecurity compliance? What explains it?

**A:**
| Export Level | Controls above 76% |
|--------------|-------------------|
| **>60% of revenue** | 88.33% — best of any export group |
| **≤2.5% of revenue** | 21.19% below 50% — worst group |

**Explanation:** The article states that *"global market presence brings out an obligation to these enterprises concerning cyberawareness and cybersecurity."* International partners and clients impose **external cybersecurity expectations** — requirements from global supply chains, contractual obligations, and partner standards — that domestically focused SMEs do not face. This external pressure drives internal security maturity.

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 9.3 & Q16*

---

### Card 33
**Q:** Describe the key finding comparing Type 2 first auditing to second auditing results.

**A:**
| Metric | First Audit | Second Audit |
|--------|-------------|--------------|
| Controls failing | More than 40% more than passing | Substantially reduced |
| Controls passing | Lower | **More than double** those failing |
| Enterprises passing zero controls | 6 | 0 |
| Enterprises passing >100 controls | 2 | More |
| Average overall | Most controls failing | ~60% positively evaluated |

All **14 ISO 27001 categories** improved between the first and second auditing. The results demonstrate that the **diagnose → mitigate → re-evaluate cycle** produces concrete, measurable improvement.

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 10 & Q17*

---

### Card 34
**Q:** What was the key finding about process-based controls versus technical controls in terms of compliance?

**A:** Controls relying on **processes and documentation** are significantly easier to comply with than controls requiring **additional equipment or refined technical procedures**.

- **Process-based controls** (e.g. access control policies, backup documentation) can be implemented through awareness and documentation effort alone — no equipment investment required
- **Technical controls** (e.g. cryptographic controls A.10.1) require specialist knowledge, tooling, and validation — all scarce in SMEs

**Implication:** Any SME cybersecurity programme should **sequence process-based controls first** to build compliance confidence before tackling technical controls.

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 10.2 & Q18*

---

### Card 35
**Q:** What are the five organisational factors identified as direct correlates of cybersecurity control compliance?

**A:**
| Factor | Effect |
|--------|--------|
| **Company size** | Medium > Small > Micro; larger companies have more resources for mitigation tasks |
| **Activity sector** | Industry performs best (standardised processes); services sector performs worst |
| **Number of employees** | More employees → more human capacity to implement and sustain controls |
| **Business revenue/volume** | Higher revenue → greater financial resources for tools, training, and consulting |
| **Export/internationalisation level** | More internationally active SMEs perform better — global markets impose cybersecurity obligations |

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Section 11*

---

### Card 36
**Q:** What does the article conclude about why organisations that lack formal processes struggle most with certain controls?

**A:** Organisations without formal processes struggle disproportionately with controls that require **documentation, defined responsibilities, or accountability chains**. This explains why:
- **Cryptographic controls** (technical complexity) performed worst
- **Operational procedures** (structural formality) also performed worst

The study concludes that *"training and certification of SMEs collaborators are essential in mitigating the risks in cybersecurity"* — and that the **absence of formal HR structure, formal business process models, and dedicated IT staff** creates a structural barrier that is harder to overcome than any individual technical control requirement.

*Source: [1-Information security and cybersecurity management: a case study with SMEs in Portugal/study-guide.md](1-Information%20security%20and%20cybersecurity%20management:%20a%20case%20study%20with%20SMEs%20in%20Portugal/study-guide.md) — Topic B*

---

## Cluster 4 — IoT/IIoT: Definitions, Methodology & Why Traditional Security Fails (12 cards)

---

### Card 37
**Q:** How does the article define the Internet of Things (IoT)? What domains does it extend to?

**A:** The article defines the IoT as:
- A **new paradigm** integrating the digital and physical universes into a single system
- A **network of machines and devices** capable of communicating and collaborating, driving new processes
- The **management of a network of devices, home appliances, and vehicles** linked to the Internet through sensors
- Challenging due to the **dynamic nature of linkages** between devices, actors, and resource constraints

**Related domains:** smart homes, smart cities, smart grids, transportation, healthcare, and manufacturing. At its core: the **"smart factory"** — comprising person, process, intelligent object, and technological ecosystem.

*Source: [2-Cybersecurity in the Internet of Things (IoT) in industrial management/study-guide.md](2-Cybersecurity%20in%20the%20Internet%20of%20Things%20%28IoT%29%20in%20industrial%20management/study-guide.md) — Section 1.1*

---

### Card 38
**Q:** What is the IIoT and how does it relate to Industry 4.0?

**A:** The **Industrial Internet of Things (IIoT)** operates in industrial environments; the general IoT operates in domestic environments. **IIoT equals Industry 4.0** — a shared term for technologies and theories of value chain organisation.

Industry 4.0 presents a **modular structure** through which computers monitor and manage smart factories and physical processes, creating a **digital copy of physical processes** while making **decentralised decisions**. Computer systems interact with one another and with people. It is closely linked to **cloud computing, blockchain, and big data analytics**.

*Source: [2-Cybersecurity in the Internet of Things (IoT) in industrial management/study-guide.md](2-Cybersecurity%20in%20the%20Internet%20of%20Things%20%28IoT%29%20in%20industrial%20management/study-guide.md) — Section 1.2*

---

### Card 39
**Q:** What are the five core IIoT security properties defined in the article?

**A:**
| Property | Definition |
|----------|-----------|
| **Integrity** | Data protected from modification by unauthorised parties |
| **Authentication** | Data source verified as the pretended identity |
| **Privacy** | Users' identities are non-traceable from their behaviours |
| **Confidentiality** | Information made unintelligible to unauthorised entities |
| **Availability** | System services available only to legitimate users |

> Note: This extends the classical CIA triad by explicitly adding **Authentication** and **Privacy** as first-class security properties in the IIoT context.

*Source: [2-Cybersecurity in the Internet of Things (IoT) in industrial management/study-guide.md](2-Cybersecurity%20in%20the%20Internet%20of%20Things%20%28IoT%29%20in%20industrial%20management/study-guide.md) — Section 1.4*

---

### Card 40
**Q:** Why does traditional security not fit IoT systems? Give four reasons.

**A:** Any four of:
1. **Distributed environments** — IoT operates across distributed architectures (including blockchain-type), not controlled central networks
2. **Heterogeneous devices** — varied smart objects with different capabilities and protocols cannot all be secured uniformly by traditional methods
3. **Resource constraints** — sensors have sparse computational resources and power constraints, making it impossible to run traditional security software
4. **Scale** — billions of connected devices create an attack surface that traditional security cannot scale to
5. **Authentication gap** — authentication requirements from remote systems demand substantial improvement beyond legacy designs
6. **Encryption gap** — new sensors require encryption mechanisms not present in legacy device designs
7. **Web interface exposure** — intrusion detection requires web interface and software coverage not provided by traditional perimeter security

*Source: [2-Cybersecurity in the Internet of Things (IoT) in industrial management/study-guide.md](2-Cybersecurity%20in%20the%20Internet%20of%20Things%20%28IoT%29%20in%20industrial%20management/study-guide.md) — Section 2 & Q3*

---

### Card 41
**Q:** What does SMAC stand for and in which context does it appear?

**A:** **SMAC** stands for **Social, Mobility, Analytics, and Cloud**. It appears in the cybersecurity discussion as a descriptor of the changing technology landscape within which business growth must be maintained. The article describes cybersecurity as *"a concern for the maintenance of business growth amidst a scenario of changing technologies for SMAC domains and the Internet of Things."*

*Source: [2-Cybersecurity in the Internet of Things (IoT) in industrial management/study-guide.md](2-Cybersecurity%20in%20the%20Internet%20of%20Things%20%28IoT%29%20in%20industrial%20management/study-guide.md) — Section 4.1 & Q4*

---

### Card 42
**Q:** What is the LRSB methodology and what are its three phases and six steps?

**A:** **LRSB** stands for **Systematic Review of Bibliometric Literature**. It is a qualitative approach that analyses and synthesises documents to expand usable knowledge in decision-making strategies.

| Phase | Step | Description |
|-------|------|-------------|
| **Exploration** | 1 | Problem of research |
| | 2 | Search of appropriate literature |
| | 3 | Critical precision of chosen studies |
| | 4 | Synthesis of data from individual sources |
| **Interpretation** | 5 | Reports and recommendations |
| **Communication** | 6 | Presentation of the LRSB report |

*Source: [2-Cybersecurity in the Internet of Things (IoT) in industrial management/study-guide.md](2-Cybersecurity%20in%20the%20Internet%20of%20Things%20%28IoT%29%20in%20industrial%20management/study-guide.md) — Section 3 & Q5*

---

### Card 43
**Q:** Describe the screening funnel used in the LRSB review. How many articles were finally selected?

**A:**
| Stage | Criteria Added | Publications |
|-------|----------------|-------------|
| Meta-search | "Cyber Security" | 15,748 |
| First inclusion | + "Internet of Things" | 1,316 |
| Second inclusion | + Business, Management & Accounting | **60** |

- **Database:** Scopus (peer-reviewed); period: 2014–2021
- **Document types:** 28 conference papers, 24 articles, 4 reviews, 3 books, 1 book chapter/short survey
- **Stated limitation:** Only Scopus was used — other academic databases were excluded

*Source: [2-Cybersecurity in the Internet of Things (IoT) in industrial management/study-guide.md](2-Cybersecurity%20in%20the%20Internet%20of%20Things%20%28IoT%29%20in%20industrial%20management/study-guide.md) — Section 3.2 & Q6*

---

### Card 44
**Q:** What were the key bibliometric findings of the LRSB review?

**A:**
- **Peak publication year:** 2019 — 15 documents in a single year
- **Total citations (2014–2021):** 568; peak citations in one year: 217 (2020)
- **H-index basis:** 10 documents cited at least 10 times
- **Most cited article:** "Blockchain technology innovations" (155 citations) — TEMSCON 2017, by Ahram et al.
- **Most cited journal:** *International Journal of Information Management* (SJR 2.770, Q1, H-index 114)
- **Citation growth:** Positive net growth; R² of 80% for the period

*Source: [2-Cybersecurity in the Internet of Things (IoT) in industrial management/study-guide.md](2-Cybersecurity%20in%20the%20Internet%20of%20Things%20%28IoT%29%20in%20industrial%20management/study-guide.md) — Section 3.3*

---

### Card 45
**Q:** What does the article mean by the conceptual shift from "Internet of Things" to "Internet of Intelligence"? Why is it relevant to cybersecurity?

**A:** The shift from **IoT to Internet of Intelligence (IoI)** refers to systems that not only connect devices but enable them to **process knowledge and make decisions autonomously**. This is enabled by increasingly capable wireless technologies (5G, 6G).

**Cybersecurity relevance:**
- **Authentication:** Who authorised the autonomous decision?
- **Accountability:** Who is responsible when an autonomous system causes harm?
- **Intrusion detection:** Distinguishing malicious commands from legitimate autonomous decisions becomes far harder

Traditional security models designed for human-directed systems do not map cleanly onto systems where devices act without human instruction.

*Source: [2-Cybersecurity in the Internet of Things (IoT) in industrial management/study-guide.md](2-Cybersecurity%20in%20the%20Internet%20of%20Things%20%28IoT%29%20in%20industrial%20management/study-guide.md) — Section 4.3 & Q19*

---

### Card 46
**Q:** What does the article identify as the primary concern of IoT cybersecurity?

**A:** The article states that the **primary concern of cybersecurity in IIoT** relies on **intrusion detection**: monitoring physical or cloud computer activities through analysis of system vulnerabilities and activity patterns. Attack forms include: DDoS, malicious IPs, and data manipulation. Outcomes of attacks include: loss of information, operational losses, and health damage.

*Source: [2-Cybersecurity in the Internet of Things (IoT) in industrial management/study-guide.md](2-Cybersecurity%20in%20the%20Internet%20of%20Things%20%28IoT%29%20in%20industrial%20management/study-guide.md) — Section 1.3*

---

### Card 47
**Q:** How does the article characterise the relationship between smart device growth and cybersecurity risk?

**A:** The article states plainly: *"as smart devices are growing in number, there is a corresponding growth in risks, both to the user and to the Internet as a whole from hacking threats."*

The conclusion reinforces this: *"security will become more important in the future because of the increase in the number of cordless-connection objects in the short term, which extends to virtually all areas of our daily lives."*

The implication: cybersecurity investment must **scale with IoT deployment** — not follow it reactively — and societal exposure to cyber risk grows with every new connected device.

*Source: [2-Cybersecurity in the Internet of Things (IoT) in industrial management/study-guide.md](2-Cybersecurity%20in%20the%20Internet%20of%20Things%20%28IoT%29%20in%20industrial%20management/study-guide.md) — Q20*

---

### Card 48
**Q:** What specific security concern does the article raise about smart home systems?

**A:** Smart home systems are described as **platforms for sensors** exposed particularly to **identity theft** and sensor identity spoofing from **wireless communication environment networks**. Specific guidance given: software must be kept up to date from **trustworthy vendors and cloud providers**. The article notes that sensor identities in smart homes must be protected from wireless network threats — a problem traditional perimeter-based security does not address.

*Source: [2-Cybersecurity in the Internet of Things (IoT) in industrial management/study-guide.md](2-Cybersecurity%20in%20the%20Internet%20of%20Things%20%28IoT%29%20in%20industrial%20management/study-guide.md) — Section 2 & 4.1*

---

## Cluster 5 — IIoT Themes, Threats, Legal Landscape & Gaps (12 cards)

---

### Card 49
**Q:** What is the central finding of Theme 1 (Cybersecurity) regarding policy and user values in IoT?

**A:** The central finding is that there is *"a lack of policy direction and a lack of understanding of user values related to cybersecurity in terms of the IoT, while policy has not been guided by key stakeholder values."*

Despite growing cybersecurity awareness and increasing legislation, IoT cybersecurity frameworks are **not being designed around what users actually value**. The literature also examines whether cybersecurity law is justified, using **China's 2016 Cybersecurity Law** as an example of a country creating new cybersecurity regimes with potentially problematic effects on foreign firms and user rights.

*Source: [2-Cybersecurity in the Internet of Things (IoT) in industrial management/study-guide.md](2-Cybersecurity%20in%20the%20Internet%20of%20Things%20%28IoT%29%20in%20industrial%20management/study-guide.md) — Section 4.1 & Q9*

---

### Card 50
**Q:** Describe three specific applications of Machine Learning (Theme 2) in IIoT cybersecurity from the article.

**A:** Any three of:
1. **IoT network intrusion detection** — ML workflows integrating feature selection and interpretation steps to detect anomalies in IoT network traffic
2. **Decision Trees for network intrusion detection** — specifically highlighted as an approach for classifying malicious traffic
3. **AI recognising cyber-attacks** in internet-connected systems including smartphones and robotic factories
4. **Data mining for incident decision-making** — AI improves cyber countermeasures using data mining when an incident occurs
5. **IoT device fingerprinting** — ML techniques to unveil compromised IP addresses across geographical areas
6. **AI at gateway level** within blockchain-enhanced IoT to detect and classify suspected activities

*Source: [2-Cybersecurity in the Internet of Things (IoT) in industrial management/study-guide.md](2-Cybersecurity%20in%20the%20Internet%20of%20Things%20%28IoT%29%20in%20industrial%20management/study-guide.md) — Section 4.2 & Q10*

---

### Card 51
**Q:** What is "proactive antifragility" in the IIoT context and why is it needed?

**A:** Proactive antifragility is a **new paradigm for cyber defence** in IoT, particularly in distributed, highly complex computing paradigms (e.g., the Internet of Battle Things — IoBT). Instead of simply being resilient (surviving attacks) or robust (resisting attacks), an **antifragile system improves and adapts in response to attacks** — it becomes stronger under stress.

It is needed because IoT environments are increasingly **distributed, heterogeneous, and dynamic**, meaning that traditional perimeter-based or reactive security paradigms cannot cope with the variety and speed of novel threats. The article identifies this as one of the **unresolved future research directions**.

*Source: [2-Cybersecurity in the Internet of Things (IoT) in industrial management/study-guide.md](2-Cybersecurity%20in%20the%20Internet%20of%20Things%20%28IoT%29%20in%20industrial%20management/study-guide.md) — Section 4.3 & Q11*

---

### Card 52
**Q:** What does Theme 4 (Industry 4.0) identify as the broader social and economic consequences of IIoT?

**A:** The article states that *"the Industrial Revolution 4.0 will have economic, social, and political consequences at global level, leading to revolutionary changes in the intelligent processes of goods production and services, with associated **rising unemployment and social stratification**."*

Additional concerns identified:
- Sensitive business data migration to cloud platforms (especially oil and gas industry) — increasing exposure and entry points
- ICT-based manufacturing must reduce costs and time **while** reducing security vulnerabilities
- Need to keep up with the technological paradigm shift while **preventing significant expected fatalities** from insecure industrial systems

*Source: [2-Cybersecurity in the Internet of Things (IoT) in industrial management/study-guide.md](2-Cybersecurity%20in%20the%20Internet%20of%20Things%20%28IoT%29%20in%20industrial%20management/study-guide.md) — Section 4.4 & Q12*

---

### Card 53
**Q:** List four ways Blockchain contributes to IIoT cybersecurity (Theme 5).

**A:** Any four of:
1. **Immutability of users and devices** — supporting smart ecosystem cybersecurity mechanisms (e.g., smart homes)
2. **Dynamic and immutable management of blocked malicious IPs** across multiple industries (healthcare, finance, government)
3. **Privacy, security, and non-repudiation** of IoT systems through large sensor/device deployments
4. **Scalable, decentralised end-to-end secure IoT systems** — distributed IIoT infrastructure
5. **AI at gateway level** to detect and classify suspected activities
6. Supporting cloud computing security for supply chains to **minimise risk of machine disconnection**

*Source: [2-Cybersecurity in the Internet of Things (IoT) in industrial management/study-guide.md](2-Cybersecurity%20in%20the%20Internet%20of%20Things%20%28IoT%29%20in%20industrial%20management/study-guide.md) — Section 4.5 & Q13*

---

### Card 54
**Q:** What tension exists between Blockchain as a security tool and GDPR user rights?

**A:** Blockchain's core security property — **immutability** — directly conflicts with the EU's **"right to be forgotten"** (GDPR Article 17). Blockchain provides tamper-evident, non-repudiable records by design: once data is written, it **cannot be erased**.

This creates a conflict: businesses that adopt Blockchain for security and auditability create a permanent record that users may have a legal right to have deleted. This is a tension that **no current technical standard fully resolves** — professional IoT engineers and organisations must navigate an inherent incompatibility between best-practice security (Blockchain) and best-practice privacy law (GDPR erasure).

*Source: [2-Cybersecurity in the Internet of Things (IoT) in industrial management/study-guide.md](2-Cybersecurity%20in%20the%20Internet%20of%20Things%20%28IoT%29%20in%20industrial%20management/study-guide.md) — Topic B*

---

### Card 55
**Q:** What specific IoT threats are identified for the healthcare sector?

**A:** The article notes that *"healthcare is currently a hot topic because there is an abundance of critical data, cyber defences are on average weak in hospitals, where patients' lives and trust are at risk."*

Specific threats include:
- **DDoS attacks on hospital IoT devices** (medical equipment connected to the Internet)
- **Data manipulation** affecting clinical decisions
- **Weak average cyber defences** in hospitals — below average compared to other sectors
- The article also cites research on DDoS classifications and attack opportunities *"particularly in the health sector, in areas of limited security"*

*Source: [2-Cybersecurity in the Internet of Things (IoT) in industrial management/study-guide.md](2-Cybersecurity%20in%20the%20Internet%20of%20Things%20%28IoT%29%20in%20industrial%20management/study-guide.md) — Section 5 & Q14*

---

### Card 56
**Q:** What automotive and vehicle cybersecurity challenges does the article identify?

**A:**
1. **EV battery stacks** — cybersecurity vulnerabilities identified but not fully addressed by existing requirements
2. **CAN-Bus intrusion detection** — an IDS is needed to analyse traffic on Controller Area Network channels and detect malicious messages in vehicle communication
3. **Unmanned ships** — security vulnerabilities with identified defence strategies and countermeasures needed
4. **Software-defined radios** — signalling vulnerabilities requiring attention

*Source: [2-Cybersecurity in the Internet of Things (IoT) in industrial management/study-guide.md](2-Cybersecurity%20in%20the%20Internet%20of%20Things%20%28IoT%29%20in%20industrial%20management/study-guide.md) — Section 5 & Q15*

---

### Card 57
**Q:** What does the article say about China's 2016 Cybersecurity Law and what broader concern does it illustrate?

**A:** The article references the **impact of China's 2016 Cybersecurity Law on foreign technology firms** and on China's big data and smart city projects. It raises questions about:
- Sovereign states using cybersecurity law to impose requirements that **disadvantage foreign firms** competitively
- The use of cybersecurity infrastructure to **serve state interests** (including data access by authorities)
- The tension between creating a cybersecurity regime to protect critical infrastructure and **restricting innovation and foreign business**

**Broader concern illustrated:** A law can simultaneously be compliant with a sovereign government's requirements and **ethically problematic** in its effects — protecting state interests at the expense of user privacy, with citizens not having consented to the surveillance infrastructure being built.

*Source: [2-Cybersecurity in the Internet of Things (IoT) in industrial management/study-guide.md](2-Cybersecurity%20in%20the%20Internet%20of%20Things%20%28IoT%29%20in%20industrial%20management/study-guide.md) — Section 6 & Q16*

---

### Card 58
**Q:** What are the six research gaps identified in the article as unresolved?

**A:**
1. **Lack of effective IoT cyber risk management frameworks** — current frameworks insufficient for the full scope of IoT threats
2. **Policy direction gap** — IoT public policy not developed around stakeholder values
3. **Sensor network adequacy** — effective sensor networks needed to protect against malicious internal users and implanted malware
4. **Antifragility** — need for proactive (not just reactive) cyber defence paradigms, especially in distributed complex IIoT environments (e.g. IoBT)
5. **Next-generation network security** — 5G and 6G create new attack surfaces not yet fully addressed
6. **Effectiveness gap** — current IoT cyber risk solutions remain insufficient despite technological advances

*Source: [2-Cybersecurity in the Internet of Things (IoT) in industrial management/study-guide.md](2-Cybersecurity%20in%20the%20Internet%20of%20Things%20%28IoT%29%20in%20industrial%20management/study-guide.md) — Section 7 & Q18*

---

### Card 59
**Q:** What does the article say about the legal compliance vs. ethical responsibility gap in IoT?

**A:** The article surfaces a structural tension: **legal compliance establishes a minimum threshold**, but that threshold frequently falls below what ethical responsibility to users, citizens, and society would demand.

Key dimensions:
- **Policy-values gap:** Laws are written by legislators whose understanding of what IoT users actually value (privacy, autonomy, transparency) is incomplete — compliance with a poorly conceived law does not guarantee ethical treatment
- **Producer/consumer liability:** Manufacturers shipping IoT devices with default credentials or inadequate consent mechanisms are acting unethically even if no law currently prohibits it — the legal framework lags technology by years
- **Healthcare example:** A hospital meeting minimum legal standards while running unpatched systems is **legally compliant and ethically negligent simultaneously**

> Legal compliance answers "what must we not do?" Ethical responsibility answers "what should we do, regardless of what we are legally required to do?"

*Source: [2-Cybersecurity in the Internet of Things (IoT) in industrial management/study-guide.md](2-Cybersecurity%20in%20the%20Internet%20of%20Things%20%28IoT%29%20in%20industrial%20management/study-guide.md) — Topic A*

---

### Card 60
**Q:** How does the IIoT review article complement ISO 27001 and the NIST CSF? What does each provide that the others do not?

**A:**
| | What It Covers | What It Does NOT Cover |
|--|----------------|------------------------|
| **ISO 27001** | 114 controls for ISMS; generic information security | IIoT-specific properties, Blockchain security, ML-based IDS, autonomous devices, 5G/6G |
| **NIST CSF** | 5 functions: Identify, Protect, Detect, Respond, Recover | Concrete IIoT threat intelligence to populate each function; legal/policy landscape |
| **This article** | IIoT threat landscape by sector, Blockchain and ML mitigations, legal gaps, management decision-making context | Prescriptive controls or implementation steps |

**The complementary relationship:**
- ISO 27001 → **control framework** (what controls, how to audit)
- NIST CSF → **strategic risk management cycle**
- This article → **IIoT-specific threat intelligence and technology landscape** (what the research community has validated as mitigations, and where governance gaps remain)

*Source: [2-Cybersecurity in the Internet of Things (IoT) in industrial management/study-guide.md](2-Cybersecurity%20in%20the%20Internet%20of%20Things%20%28IoT%29%20in%20industrial%20management/study-guide.md) — Topic C*

---

*End of Week 4 Flashcards — 60 cards across 5 clusters*
