# Study Guide: Information Security and Cybersecurity Management: A Case Study with SMEs in Portugal
**Antunes et al., Journal of Cybersecurity and Privacy, 2021, 1, 219–238**

---

## Part 1: Key Topics Summary

---

### 1. Context and Problem Statement

#### 1.1 Why SMEs Are a "Blind Spot" in Cybersecurity

Small and Medium-sized Enterprises (SMEs) play a key role in the global economy, representing a large share of worldwide wealth production. However, their intrinsic characteristics make them particularly vulnerable:

- **Small dimension** — limited financial resources for complex/costly security procedures
- **Traditional and family structures** — informal governance, absence of formal HR or IT departments
- **Lack of resident IT staff** — no dedicated security personnel
- **Difficulty accessing funded projects** — cybersecurity investment is deprioritised
- **Lower collaborator cyberawareness** — employees are often the weakest link

> Even with minimal IT infrastructure, SMEs can act on a preliminary phase to gradually improve their security level by implementing policies, processes, and workforce behaviours that minimise and mitigate information systems risks.

#### 1.2 COVID-19 Accelerator Effect

The COVID-19 pandemic accelerated digital transformation in SMEs, with more collaborators working from home — increasing cybersecurity exposure and the urgency to implement countermeasures.

---

### 2. The "Log In Innovation" Project

| Dimension | Detail |
|-----------|--------|
| **Name** | Log In Innovation |
| **Period** | 2018–2020 |
| **Budget** | ~€1,304,000 (EU regional development funding via IAPMEI) |
| **Promoter** | NERLEI (Núcleo Empresarial da Região de Leiria) |
| **Entities** | NERLEI + Polytechnic of Leiria + consulting company + SMEs |
| **Scope** | 80 eligible SMEs across North, Center, and Alentejo regions of Portugal |
| **IS/Cybersecurity scope** | 50 SMEs, mainly from Leiria district (center region) |
| **Additional axes** | Lean manufacturing, balanced scorecards, digital marketing, quality management |

**Two overarching goals:**
1. Give SMEs the opportunity to increase their cyberawareness, competitiveness, and mitigate organisational, IT, and human resource flaws
2. Strengthen regional cooperation between a business association, academia, and a consulting team to foster cybersecurity in SMEs

---

### 3. ISO-27001:2013 — Standard Overview

ISO-27001:2013 is an international standard that defines a list of controls for implementing an Information Security Management System (ISMS).

- **Total controls**: **114**, grouped into **14 thematic categories** (Annex A.5 through A.18)
- **Designed for**: all organisation types and sizes that collect, process, store, or transmit data
- **Three control states**:

| State | Meaning |
|-------|---------|
| **Fail** | Conformity level of 0% — control not met at all |
| **Pass** | Acceptance level above 0% (higher = better) |
| **Not applicable** | Control is irrelevant to the organisation's activity or scope |

**Related standards** referenced in the article:
- **ISO-27005**: risk management methods
- **ISO-27037**: guidelines for identifying, collecting, acquiring, and preserving digital evidence

---

### 4. The Two Auditing Types (Table 1)

The project defined two intervention paths based on each SME's profile and goals:

| Dimension | Type 1 — "Standard" | Type 2 — "Full" |
|-----------|---------------------|-----------------|
| **Controls** | 30 controls | 114 controls (all) |
| **Categories covered** | 8 of 14 (A.5, A.8, A.9, A.10, A.12, A.13, A.14, A.18) | All 14 categories (A.5–A.18) |
| **ISO-27001:2013 coverage** | ~25% | 100% |
| **Re-evaluation** | None — mitigations applied during auditing | Yes — re-evaluation after first audit |
| **Target** | Initial diagnosis; correct flaws | ≥60% of controls passed |
| **Reports delivered** | One auditing report | Intermediate report + final report |
| **Participant SMEs** | 30 | 20 |

**Categories covered only in Type 2 (not Type 1):**
- A.6 Organisation of information security
- A.7 Human resource security
- A.11 Physical and environmental security
- A.15 Supplier relationships
- A.16 Information security incident management
- A.17 Information security aspects of BCM

---

### 5. How ISO-27001:2013 Was Scaled to Fit SMEs (Type 1 Design Rationale)

The selection of the 30 Type 1 controls was based on six key presuppositions that adapted the standard to SME realities:

1. **No infrastructure investment required** — controls do not require buildings or specific networking components
2. **No formal HR structure required** — SMEs without HR departments are not excluded
3. **Focused on most common cyberattacks** — controls directly address the highest-probability threats
4. **No disaster recovery/business continuity required** — small businesses rarely have these as priority
5. **No formal business process model required** — methodology avoids imposing formal organisational structures that SMEs may not have
6. **Preliminary check-up purpose** — allows basic diagnosis without requiring a formal organisation or complex IT infrastructure

> Neither Type 1 nor Type 2 intervention was designed to produce ISO-27001:2013 certified companies — formal certification was not a project goal. However, some intervened SMEs were in an advanced stage to pursue certification.

---

### 6. Cyberthreats Specific to SMEs

The following cyberthreat categories are identified as most relevant to SMEs and are what the methodology aimed to mitigate:

| Threat Category | Examples |
|----------------|---------|
| **Social engineering** | Phishing, malware, mobile malware, ransomware |
| **Policy management** | Weak passwords, inadequate authentication mechanisms, poor access controls |
| **Insider threats** | Employees, former employees, business contractors, associates |
| **Hardware threats** | Personal electronic devices used by collaborators, web servers, database servers |
| **Software threats** | Third-party applications installed in the SME's information system |
| **DDoS** | Higher impact on SMEs with a significant online presence |
| **Privilege/data abuse** | Employees exploiting privileged access to company resources |
| **Unintentional exposure** | Failure to comply with security procedures leading to inadvertent cyberattack exposure |

---

### 7. Methodology Documents and Tools

#### 7.1 Four Document Types Produced
1. **Auditing checklist** — per control; instructions for the auditing team to assess and validate each control within the ISMS scope
2. **Mitigation activities list** — per control; a list of mitigation actions to be implemented by SMEs in a control failure scenario
3. **Templates** — for collecting information about assets and policies (e.g., a template for mobile devices in use at the SME)
4. **Auditing reports** — automatically generated; summarise audit results for management; used to evaluate current position and define future improvements

#### 7.2 Web-Based Application Architecture
The auditing process was managed through a custom web application with three layers:

| Layer | Technology |
|-------|-----------|
| **Access** | Web browser |
| **Application** | Laravel framework |
| **Data** | MySQL database |

---

### 8. SME Characterisation (Study Sample)

#### 8.1 Overview
- **Total**: 50 SMEs and micro enterprises affiliated with NERLEI
- **Geographic location**: Centre region of Portugal, mostly Leiria district (43/50)
- **Size distribution**: 48% medium, 38% small, 14% micro

#### 8.2 Key Dimensions

| Dimension | Key Findings |
|-----------|-------------|
| **Activity sector** | Equally distributed: industry (20), commerce (~14), services (16) |
| **Sub-sectors** | Most representative: wholesales (13 enterprises), engineering services (5) |
| **Company age** | Equally distributed across four quartile groups |
| **Employees** | 70% have >20 employees; 36% have >60 |
| **Revenue** | Equally distributed across four scales (≤2M to >10M €) |
| **Exports** | ~50% export only ≤2.5% of revenue — low internationalisation |

---

### 9. Type 1 Auditing Results

#### 9.1 Overall Performance
- **Average acceptance rate (positive evaluation)**: **78.06%**
- Most controls scored above 50%, confirming baseline conformity across most SMEs

#### 9.2 Best and Worst Performing Categories

| Performance | Category | Reason |
|-------------|----------|--------|
| **Best** | 9.4 (System/application access control), 14.1, 14.2 | Process-based — no prior knowledge required to implement mitigations |
| **Worst** | 10.1 (Cryptographic controls) | Technical complexity in implementing and validating cryptographic controls |
| **Worst** | 12.1 (Operational procedures and responsibilities) | Difficulty specifying and validating strict operational/responsibility procedures in SME scope |

#### 9.3 Results by Organisational Dimension (Table 2)

| Dimension | Best Performer | Worst Performer |
|-----------|---------------|-----------------|
| **Size** | Medium (84.55% >76%) | Micro (27.14% <50%) |
| **Activity sector** | Industry (88.18% >76%) | Services (35.15% <50%) |
| **Employees** | >60 employees (84.58% >76%) | ≤10 employees (25.33% <50%) |
| **Revenue** | >5.5M€ (87%+ >76%) | ≤2M€ (25.45% <50%) |
| **Exports** | >60% of revenue (88.33% >76%) | ≤2.5% exports (21.19% <50%) |

---

### 10. Type 2 Auditing Results

#### 10.1 First Audit vs. Second Audit (Figure 5 comparison)

| Metric | First Audit | Second Audit |
|--------|-------------|--------------|
| Controls failing (0–50%) | Significantly higher (>40% more than passing) | Substantially reduced |
| Controls passing (76–100%) | Lower | More than double those failing |
| Overall trend | Most controls failing | Most controls passing |

- **6 enterprises** did not pass any of the 114 controls in the first audit
- Only **2 enterprises** achieved more than 100 controls positively validated in the first audit
- After second audit: average **~60% of controls** positively evaluated
- All **14 ISO-27001:2013 categories** improved between first and second auditing

#### 10.2 Key Insight
Controls relying on **processes and documentation** are significantly easier to comply with than controls requiring **additional equipment or refined technical procedures**.

---

### 11. Organisational Factors Influencing Cybersecurity Implementation

Five organisational factors emerge as direct correlates of cybersecurity control compliance:

| Factor | Effect |
|--------|--------|
| **Company size** | Medium > Small > Micro; larger companies have more resources for mitigation tasks |
| **Activity sector** | Industry performs best (most reliant on standard compliance); services sector performs worst |
| **Number of employees** | More employees correlates with better conformity; larger teams have dedicated capacity |
| **Business revenue/volume** | Higher revenue → higher conformity; wealthier enterprises adopt good practices more easily |
| **Export/internationalisation level** | More internationally active SMEs perform better; global markets impose cybersecurity obligations |

> Key insight: *"The enterprises' wealthiness and the exportation level are related with the level of preparation to adopt good practices of cybersecurity and cyberawareness. The global market presence brings out an obligation to these enterprises concerning cyberawareness and cybersecurity."*

---

### 12. Conclusions and Lessons for SMEs

#### 12.1 Project-Level Findings
- ISO-27001:2013 can be **successfully adapted** for SMEs using a subset (Type 1) approach without requiring full formal organisational structures
- A **collaborative model** (business association + academia + consulting team) is effective for SME cybersecurity improvement
- Collaborator **training and seminars** are essential for sustained cyberawareness
- The **Type 2 two-phase approach** (audit → mitigate → re-audit) demonstrates concrete and measurable improvement

#### 12.2 Limitations Identified
- ISO-27001:2013 alone may not cover all an SME's information security needs
- Other frameworks (e.g., **NIST Cybersecurity Framework**) should be explored and compared
- The study is limited to one geographic region and one standard — broader applicability requires further validation
- The consulting team faced challenges applying a standard designed for larger organisations to SMEs

#### 12.3 Recommended Enhancement
> Adding a **re-evaluation step to Type 1 auditing** was identified as a way to enhance the overall methodology, since Type 1 SMEs did not have a formal re-evaluation despite implementing countermeasures.

---

## Part 2: Specific Topic Questions

---

### Topic A: How to Scale International Standards like ISO 27001 to Fit Small Organisations

**Full answer:**

ISO-27001:2013 was designed for organisations of any size, but its **114 controls across 14 categories** create a compliance burden that micro and small enterprises typically cannot absorb at once. This study demonstrates a viable scaling methodology:

**Step 1 — Create a tiered subset of controls.**
Select a subset (~25–30% of controls) that covers the most common and highest-risk cyberthreats without requiring complex organisational infrastructure. The 30 Type 1 controls were chosen because they:
- Do not require infrastructure investment (buildings, dedicated networks)
- Do not presuppose formal HR or IT departments
- Target the specific cyberthreats SMEs face most frequently
- Avoid business continuity and disaster recovery requirements that SMEs rarely have in place

**Step 2 — Define explicit presuppositions for SME applicability.**
Be transparent about what the organisation does NOT need to have: this reduces perceived complexity and avoids excluding SMEs who lack formal processes.

**Step 3 — Separate auditing paths by maturity level.**
Offer two distinct intervention paths — a standard/entry-level path for initial diagnosis (Type 1) and a full path for more mature or committed organisations (Type 2). This prevents a one-size-fits-all failure where neither path works well.

**Step 4 — Prioritise process-based controls first.**
Process and documentation controls (e.g., access control policies, system access management) have the highest compliance rate because they require awareness and documentation rather than technical infrastructure. Starting with these builds momentum.

**Step 5 — Build in re-evaluation for full path.**
The Type 2 re-audit proved that a **diagnose → mitigate → re-evaluate** cycle yields measurable improvement (passing controls more than doubled after the second audit). This feedback loop is essential for standards adoption in resource-limited environments.

**Step 6 — Provide concrete tools and templates.**
Abstract standards become actionable when accompanied by auditing checklists per control, mitigation action lists, and ready-made templates for data collection. This reduces the expertise barrier for SME managers.

> The key principle: *Do not reduce the standard's rigour — reduce its activation barrier.* The subset approach maintains the spirit of ISO-27001:2013 while acknowledging that SMEs cannot implement all 114 controls simultaneously and need a structured entry point.

---

### Topic B: What Organisational Factors Most Influence the Ability to Implement Cybersecurity Controls

**Full answer:**

The study's quantitative results across multiple organisational dimensions reveal five primary influencing factors:

**1. Company size and classification (most impactful)**
Medium enterprises significantly outperform small and micro enterprises. Medium-sized companies achieve 84.55% of controls above 76% conformity in Type 1, compared to 72.50% for small and 64.76% for micro. Larger companies have more dedicated capacity for implementing mitigation tasks.

**2. Activity sector**
Industry achieves the highest conformity rate (88.18% of controls above 76%), while service-sector SMEs have the highest proportion of controls below 50% (35.15%). The industry sector's reliance on standardised processes and regulatory compliance creates a culture more receptive to systematic control adoption.

**3. Number of employees**
A direct positive correlation exists between employee count and control compliance. Enterprises with >60 employees achieve 84.58% of controls above 76%; those with ≤10 employees have 25.33% of controls below 50%. More employees means more human capacity to implement, document, and sustain security controls.

**4. Business revenue and volume**
Higher-revenue SMEs consistently achieve better conformity across all auditing dimensions. Enterprises with >5.5M€ revenue achieve 87%+ of controls above 76%, compared to lower quartiles. Greater financial resources allow investment in security tools, training, and consulting.

**5. Export/internationalisation level**
Enterprises exporting more than 60% of revenue achieve 88.33% of controls above 76% — the best performance of any export group. International presence imposes cybersecurity obligations from global partners and markets, creating external pressure that drives internal security maturity.

**Secondary factor: Cyberawareness culture**
The study identifies collaborator cyberawareness as a critical but hard-to-quantify factor. SMEs that promoted educational activities had better outcomes. The conclusion explicitly states that *"training and certification of SMEs collaborators are essential in mitigating the risks in cybersecurity."*

**Structural implication:**
Organisations that lack formal processes (no HR structure, no formal business process model) struggle disproportionately with controls that require documentation, defined responsibilities, or accountability chains. This explains why cryptographic (technical) and operational procedure (structural) controls performed worst.

---

### Topic C: What Lessons Can Be Drawn to Support SMEs in Other Contexts

**Full answer:**

**Lesson 1: A two-tier approach beats a binary choice.**
Offering an entry-level intervention (Type 1) alongside a full intervention (Type 2) allows SMEs to self-select based on their maturity. This prevents the all-or-nothing failure mode where organisations either pursue full certification (too complex) or do nothing. Other contexts should replicate this graduated pathway.

**Lesson 2: Collaborative delivery models are effective.**
The combination of a **regional business association** (NERLEI), **academic institution** (Polytechnic of Leiria), and an **IT consulting team** leveraged complementary strengths — convening power, research expertise, and technical implementation. Solo academic or government-led programs often fail to achieve real-world uptake; the business association provided trust and network access.

**Lesson 3: External funding is a catalyst, not a substitute.**
The project was externally funded (€1.3M from EU regional development funds). This lowered the financial barrier for individual SMEs but was not sufficient alone — the methodology, tools, and team expertise were what delivered results. Other contexts should combine funding access with structured methodology, not just fund awareness campaigns.

**Lesson 4: Cyberawareness must precede technical controls.**
Many SMEs in the first audit failed controls not because of technical inability but due to a lack of awareness about security procedures, policies, and responsibilities. Seminars and educational activities as a precursor to auditing improve outcomes. Training should be embedded in the intervention, not added as an afterthought.

**Lesson 5: Process-based controls should come first.**
Across all SME profiles, process and documentation controls (access control, backup, network management) were the easiest to comply with and required no equipment investment. Any SME cybersecurity program should sequence process-based controls early to build compliance confidence before tackling technical controls.

**Lesson 6: Measure twice — re-evaluation demonstrates and motivates improvement.**
The Type 2 re-audit showed that controls passed more than doubled after the second evaluation. The act of measurement, intervention, and re-measurement creates a feedback loop that motivates action. Even the simpler Type 1 approach was identified as needing a re-evaluation step added in future iterations.

**Lesson 7: Sector and size targeting improves impact.**
Industry-sector SMEs performed best; service-sector worst. Programs targeting SMEs in sectors with low existing compliance culture (services, consulting) should allocate more resources and simpler entry points. Micro enterprises need the most support and the most simplified toolset.

**Lesson 8: No single standard suffices.**
The authors acknowledge that ISO-27001:2013 alone may not cover all of an SME's needs, and that other frameworks (NIST CSF) should be considered. A multi-framework approach — where ISO 27001 provides the control structure and NIST CSF provides strategic guidance — offers a more complete coverage, especially for SMEs with diverse digital exposure.

---

## Part 3: Exam Practice Questions

---

### Section A: Context, Project, and Definitions

**Q1.** Why are SMEs described as a "blind spot" in information security and cybersecurity management?

> **Answer:** SMEs are considered a blind spot mainly due to their size, traditional and family-based structures, and limited financial resources. They often lack resident IT staff, face difficulty accessing funded cybersecurity projects, and have lower levels of collaborator cyberawareness. These characteristics mean that even though SMEs play a key economic role, they are often unable to afford complex security procedures and have fewer controls inside the organisation than larger enterprises.

---

**Q2.** What was the "Log In Innovation" project, and who were its key participants?

> **Answer:** "Log In Innovation" was an information security and cybersecurity management project funded by IAPMEI (EU regional development funding) and promoted by NERLEI, a business association in Leiria, Portugal. It ran from 2018–2020 with a budget of approximately €1,304,000. The four key entities were: NERLEI, the Polytechnic of Leiria, a consulting company, and the SMEs themselves. Beyond cybersecurity, the project had four additional axes: lean manufacturing, balanced scorecards, digital marketing, and quality management.

---

**Q3.** How does ISO-27001:2013 define the three possible states of an audited control?

> **Answer:** A control can be in three distinct states: (1) **Fail** — the control has a conformity level of 0%, meaning it is not met at all; (2) **Pass** — the control is accepted with an acceptance level above 0% (the higher the better); (3) **Not applicable** — the control is not relevant to the enterprise being audited, either because it is outside the scope of its activity or organisation.

---

**Q4.** What is the total number of controls and categories in ISO-27001:2013?

> **Answer:** ISO-27001:2013 defines **114 controls**, grouped into **14 thematic categories** (from Annex A.5 to A.18). Each control is analysed and scored according to its level of conformity.

---

**Q5.** What were the two overall goals of the project regarding participating SMEs?

> **Answer:** (1) To give companies the opportunity to increase their level of cyberawareness and competitiveness, and to help mitigate some of their organisational, IT, and human resources flaws using available cybersecurity management funding. (2) At a regional level, to strengthen the cooperation between a business association, academia, and a consulting team working together to foster cybersecurity in SMEs and mitigate their information security flaws.

---

### Section B: Auditing Types and Methodology

**Q6.** What is the difference between Type 1 and Type 2 auditing in this project?

> **Answer:** **Type 1 ("Standard")** covers **30 controls** from 8 of the 14 ISO-27001:2013 categories (~25% of controls). It has no re-evaluation process — all identified flaws are mitigated during the auditing itself. It delivers a single auditing report and targets enterprises seeking an initial diagnosis. **Type 2 ("Full")** covers all **114 controls** from all 14 categories. It includes a re-evaluation after the first audit, with the aim of achieving at least **60% of controls passed**. It delivers both an intermediate and a final report. 30 SMEs chose Type 1 and 20 chose Type 2.

---

**Q7.** Why were the 30 Type 1 controls specifically chosen? List the six design rationale presuppositions.

> **Answer:** The 30 Type 1 controls were chosen based on six presuppositions: (1) no need to acquire infrastructural components like buildings or networking infrastructure; (2) SMEs do not have to have a formal corporate or HR structure; (3) the controls target the most common cyberattacks; (4) no need to implement disaster recovery or business continuity procedures; (5) the controls try not to impose a mandatory formal organisation on SMEs; (6) the controls allow addressing basic issues without requiring a formal business or complex IT infrastructure — supporting a preliminary check-up purpose.

---

**Q8.** List the eight ISO-27001:2013 categories covered by Type 1 auditing (and not by Type 2 only).

> **Answer:** The eight categories covered in Type 1 are: (A.5) Information security policies; (A.8) Asset management; (A.9) Access control; (A.10) Cryptography; (A.12) Operations security; (A.13) Communications security; (A.14) System acquisition, development and maintenance; (A.18) Compliance.

---

**Q9.** What four types of documents were produced as part of the project methodology?

> **Answer:** (1) An auditing checklist per control — instructions for the auditing team to assess and validate each control inside the ISMS scope; (2) A list of mitigation activities per control — proposed mitigation actions for SMEs when a control fails; (3) Templates for addressing mitigation measures — to collect information about assets and policies (e.g., a mobile devices template); (4) Auditing reports that summarise auditing results, generated automatically by the web application, for use by management boards.

---

**Q10.** What three goals did the web-based application achieve, and what was its technical architecture?

> **Answer:** The web-based application achieved: (1) harmonising the auditing process; (2) automatically generating auditing and intervention reports; (3) processing and analysing aggregated results. Its architecture comprised three layers: a **web browser** (access layer), an **application layer** developed in **Laravel**, and a **data layer** implemented in a **MySQL** database.

---

### Section C: Cyberthreats Specific to SMEs

**Q11.** List the eight categories of cyberthreats the ISO-27001:2013 methodology was designed to mitigate in SMEs.

> **Answer:** (1) Social engineering attacks — phishing, malware, mobile malware, ransomware; (2) Policy management threats — weak passwords, inadequate authentication and access controls; (3) Insider threats — employees, former employees, business contractors, associates; (4) Hardware-based threats — personal electronic devices and IT equipment like web servers and database servers; (5) Software threats — third-party applications in the SME's information system; (6) DDoS — higher impact on SMEs with an online presence; (7) Employee privilege abuse — accessing company resources or stealing/disrupting the business; (8) Unintentional exposure — failing to comply with security procedures, inadvertently exposing the organisation to attack.

---

**Q12.** Why are SMEs particularly vulnerable to DDoS attacks compared to large enterprises?

> **Answer:** The article identifies DDoS as having a **higher impact in SMEs that have a big online presence**. This is because SMEs typically have fewer redundancy measures, less network bandwidth capacity, and fewer technical resources to absorb or deflect volumetric attacks compared to large enterprises. Their reliance on online presence for business continuity means a successful DDoS attack can directly disrupt revenue.

---

### Section D: Results and Analysis

**Q13.** What was the average acceptance rate for Type 1 auditing, and which control categories performed best and worst?

> **Answer:** The average acceptance rate for Type 1 auditing was **78.06%**. The **best-performing** categories were process-based controls — specifically 9.4 (System and application access control), 14.1, and 14.2 — because they require no prior knowledge or equipment to implement. The **worst-performing** categories were **10.1 (Cryptographic controls)**, due to technical complexity in implementing and validating cryptographic mechanisms, and **12.1 (Operational procedures and responsibilities)**, due to difficulty in specifying and validating strict operational and responsibility procedures in the SME context.

---

**Q14.** How did the results differ across company size classifications in Type 1 auditing?

> **Answer:** Medium-sized enterprises performed best, with 84.55% of controls achieving conformity above 76%. Small enterprises achieved 72.50% above 76%. Micro enterprises had the worst performance, with 27.14% of controls below 50% conformity. This reflects a direct correlation between company size, available resources, and the capacity to implement mitigation tasks.

---

**Q15.** Which activity sector performed best in Type 1 auditing, and why?

> **Answer:** The **industry sector** performed best, with 88.18% of controls achieving above 76% conformity and the lowest proportion of controls below 50% (9.09%). The article suggests this is because industry enterprises are the most reliant on standard compliance — industry processes often require documented procedures and quality controls, creating a culture already aligned with structured security control implementation.

---

**Q16.** What correlation was found between export activity and cybersecurity compliance, and why?

> **Answer:** Enterprises with a higher proportion of exports relative to revenue achieved better cybersecurity compliance. Enterprises exporting more than 60% of revenue achieved 88.33% of controls above 76% — the best result of any export group. The interpretation is that **global market presence imposes cybersecurity obligations** — international partnerships and clients create external pressure and expectations around information security, motivating investment in compliance. This is consistent with the finding that revenue and exports together indicate enterprise "wealthiness" as a predictor of cybersecurity readiness.

---

**Q17.** Describe the key finding comparing Type 2 first auditing to second auditing results.

> **Answer:** In the **first auditing**, controls that failed represented more than 40% more than those that passed, with six enterprises not passing any of the 114 controls and only two passing more than 100. In the **second auditing** (after mitigations were applied), the controls that passed were **more than double** those that failed, and on average **~60% of controls** were positively evaluated. All 14 ISO-27001:2013 categories improved between the first and second auditing. The proportion of controls failing above 30% in the first audit was reduced below 30% in the second, demonstrating clear and measurable improvement.

---

**Q18.** What type of controls were easiest to comply with and why? What type were hardest?

> **Answer:** Controls relying on **processes and documentation** were significantly easier to comply with. These do not require additional equipment or refined technical procedures — SME managers can implement them with awareness and documentation effort alone. By contrast, controls that require **additional equipment installation or more refined technical procedures** (such as cryptographic controls) had the worst compliance rates. This reflects the resource and expertise gap in SMEs — organisational and policy-level security is more accessible than technical security implementation.

---

### Section E: Scaling and Lessons

**Q19.** The project did not aim to make SMEs ISO-27001:2013 certified. What were the actual goals, and why is this distinction important?

> **Answer:** The actual goals were: to give SMEs an initial diagnosis of cybersecurity risk; to apply mitigation actions; to increase cyberawareness among collaborators; and to demonstrate a methodology applicable across a range of SME profiles. The distinction is important because **certification requires full compliance across all 114 controls** — a standard that most SMEs in the project could not achieve in one intervention. By targeting awareness and improvement rather than certification, the project could engage 50 SMEs at varying levels of maturity. Some SMEs were found to be advanced enough to potentially pursue certification, but this was an incidental outcome, not the design intent.

---

**Q20.** What enhancement to the methodology did the authors identify for future work, and why?

> **Answer:** The authors identified that **Type 1 auditing should include a re-evaluation step** in future iterations. In the current design, Type 1 had no re-evaluation — countermeasures were applied during the single auditing process, but there was no formal reassessment of results. Since Type 2's re-evaluation proved the most impactful element (passing controls more than doubled), adding this step to Type 1 would allow even the simpler intervention to demonstrate measurable improvement over time, increasing both SME confidence and the robustness of the methodology.

---

**Q21.** What does this study suggest about relying solely on ISO-27001:2013 for SME cybersecurity?

> **Answer:** The study's conclusion acknowledges that ISO-27001:2013 is a single tool and represents a limitation of the study. The authors state that "other best practices and frameworks should be addressed, implemented, and compared, in order to identify the fully appropriateness of ISO-27001:2013 to all of the intervened SMEs." Other frameworks such as the **NIST Cybersecurity Framework** are named as complementary options. This reflects the broader literature finding (from the week 3 study) that no single standard universally suffices and combinations are often needed.

---

**Q22.** How does the collaborative model used in this project (business association + academia + consulting) address the typical barriers SMEs face in cybersecurity?

> **Answer:** Each entity in the collaboration addressed a distinct barrier: **NERLEI** (business association) provided trust, regional network access, and funding coordination — removing the financial and access barriers; the **Polytechnic of Leiria** provided academic expertise, methodology design, and research rigour — removing the knowledge barrier; the **consulting team** provided practical IT auditing and implementation expertise — removing the technical capability barrier. Together, they created a model where no single SME needed to source all three types of support independently, which is typically the failure point for SMEs attempting self-directed standards adoption.

---

**Q23.** How does this case study link to the CIA triad as a foundation for information security?

> **Answer:** The article explicitly grounds its approach in the CIA triad: **Confidentiality** — requiring procedures to define who has access to data and information (addressed by access control categories A.9); **Integrity** — focusing on data trustworthiness and accuracy accessed by authorised people (addressed by operations security A.12 and cryptography A.10); **Availability** — ensuring systems remain accessible and operational (addressed through backup A.12.3, network management A.13.1, and BCM A.17 in Type 2). The ISO-27001:2013 standard and ISMS framework are described as being "grounded on the implementation of policies and controls, to manage security and risks at an organisational level" — which operationalises the CIA triad across all 114 controls.

---

**Q24.** Summarise the three dimensions of conclusions presented by the authors.

> **Answer:** The conclusions are grouped into three dimensions: (1) **Project development and management** — the aims were well-defined *a priori* and grounded in embodying SMEs with better cybersecurity tools; the ISO-27001:2013 methodology aligns with the literature and the scope is SMEs and micro enterprises; (2) **Impact on participating SMEs** — observed improvements were substantial, especially in Type 2 auditing; training, adoption of auditing processes, and continuous improvement are essential for mitigating cybersecurity risks; (3) **Global results** — the project had a clear positive impact across the SMEs, even though full success in all controls was not expected; the variation in results reflects the different organisational, HR, IT, and cyberawareness levels of the intervened SMEs.

---

*End of Study Guide*

> **Exam tip:** This article's testable knowledge clusters around: (1) the two-tier auditing design and its rationale for SME contexts; (2) the ISO-27001:2013 control structure (114 controls, 14 categories, three states); (3) quantitative results by organisational dimension — size, sector, revenue, and exports; (4) the process-vs-technical controls finding; and (5) the three specific topic questions in Part 2 — scaling, organisational factors, and transferable lessons. Pay particular attention to why medium enterprises and industry-sector companies outperform others, and how the Type 2 two-phase audit cycle produced the most significant improvement.
