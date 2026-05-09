# CM2025 Computer Security — Week 3 Flashcards

60 cards across 5 clusters. Each card references its source document.

---

## Cluster 1 — GRC: Governance, Risk Management & Compliance (10 cards)

---

### Card 01
**Q:** What does GRC stand for, and what does each component mean?

**A:**
| Component | Definition |
|-----------|-----------|
| **Governance** | How an organisation is directed and controlled — leadership, roles, accountability, and policy |
| **Risk Management** | Identifying potential threats and taking proactive steps to reduce them |
| **Compliance** | Meeting legal, regulatory, or contractual requirements (e.g. GDPR, ISO standards, PCI DSS) |

Together, GRC ensures that **security decisions align with business goals and legal responsibilities**.

*Source: [1-Introduction to governance, risk management and compliance (GRC)/subtitle.txt](1-Introduction%20to%20governance,%20risk%20management%20and%20compliance%20%28GRC%29/subtitle.txt)*

---

### Card 02
**Q:** Why does governance matter in cybersecurity? What does poor governance lead to?

**A:** Governance ensures cybersecurity is a **business priority**, not just a technical issue. Good governance:
- Aligns security strategy with the wider goals of the organisation
- Sets out who is responsible for making decisions and taking action
- Creates clear policies for acceptable use, data protection, and incident response
- Promotes transparency, ethical behaviour, and accountability

**Without governance:** cybersecurity efforts become disorganised, reactive, and potentially risky — no clear ownership, no consistent policy, no strategic direction.

*Source: [1-Introduction to governance, risk management and compliance (GRC)/subtitle.txt](1-Introduction%20to%20governance,%20risk%20management%20and%20compliance%20%28GRC%29/subtitle.txt)*

---

### Card 03
**Q:** What are the four steps of risk management? What is its core principle?

**A:** Risk management is **proactive rather than reactive**:

1. **Identify** — threats such as system vulnerabilities, human error, or supply chain weaknesses
2. **Assess** — how likely they are and how damaging they would be
3. **Mitigate** — add controls, training, or redesign systems; or **accept** the risk if it is low and manageable
4. **Monitor** — continuously review the risk landscape

> Good risk management ensures resources are focused on the **most serious threats**.

*Source: [1-Introduction to governance, risk management and compliance (GRC)/subtitle.txt](1-Introduction%20to%20governance,%20risk%20management%20and%20compliance%20%28GRC%29/subtitle.txt)*

---

### Card 04
**Q:** What is compliance in cybersecurity? Give three real-world examples.

**A:** Compliance means **meeting the rules** — whether imposed by law, industry bodies, or internal policies.

| Example | Applies To |
|---------|-----------|
| **GDPR** | Any organisation handling personal data of EU citizens |
| **NIST / ISO standards** | Critical infrastructure providers |
| **PCI DSS** | Financial institutions handling payment card data |

> Compliance protects organisations from fines, reputational harm, and lawsuits — and builds trust with customers and partners.

*Source: [1-Introduction to governance, risk management and compliance (GRC)/subtitle.txt](1-Introduction%20to%20governance,%20risk%20management%20and%20compliance%20%28GRC%29/subtitle.txt)*

---

### Card 05
**Q:** How do the three GRC components work together to produce a secure environment?

**A:**
```
Governance  → defines roles and policies
Risk Mgmt   → identifies and mitigates threats
Compliance  → enforces legal and regulatory requirements
Result      → trust, resilience, and business continuity
```

> Security is no longer left to chance — it is embedded in operations and aligned with long-term success.

*Source: [1-Introduction to governance, risk management and compliance (GRC)/subtitle.txt](1-Introduction%20to%20governance,%20risk%20management%20and%20compliance%20%28GRC%29/subtitle.txt)*

---

### Card 06
**Q:** Using a healthcare provider, illustrate how each GRC component applies in practice.

**A:**
| GRC Component | Healthcare Example |
|---------------|-------------------|
| **Governance** | Appointing a Chief Information Security Officer (CISO) to lead security strategy |
| **Risk Management** | Assessing what would happen if patient data were leaked — likelihood and impact |
| **Compliance** | Following GDPR and NHS cybersecurity standards as legal obligations |

This example shows GRC is not abstract — each component has a concrete organisational owner and output.

*Source: [1-Introduction to governance, risk management and compliance (GRC)/subtitle.txt](1-Introduction%20to%20governance,%20risk%20management%20and%20compliance%20%28GRC%29/subtitle.txt)*

---

### Card 07
**Q:** What is the role of a CISO and why is appointing one an example of governance?

**A:** A **Chief Information Security Officer (CISO)** is the senior executive responsible for leading an organisation's security strategy. Appointing a CISO is an act of **governance** because it:
- Establishes a **named accountability** for security decisions
- Elevates security to **board/executive level**
- Ensures a dedicated leader is responsible for aligning security with business goals
- Creates a clear reporting line for risk and compliance matters

*Source: [1-Introduction to governance, risk management and compliance (GRC)/subtitle.txt](1-Introduction%20to%20governance,%20risk%20management%20and%20compliance%20%28GRC%29/subtitle.txt)*

---

### Card 08
**Q:** What is the relationship between GRC and an organisation's long-term resilience?

**A:** GRC builds **structural resilience** rather than just point-in-time protection:

- **Governance** ensures security decisions survive personnel changes — roles and policies outlast individuals
- **Risk management** keeps the organisation ahead of threats by continuously reassessing the landscape
- **Compliance** creates external accountability that forces consistent standards over time

Without all three, an organisation may have good security *today* but no mechanism to maintain or improve it — making it brittle under sustained or evolving attack.

*Source: [1-Introduction to governance, risk management and compliance (GRC)/subtitle.txt](1-Introduction%20to%20governance,%20risk%20management%20and%20compliance%20%28GRC%29/subtitle.txt)*

---

### Card 09
**Q:** What is the difference between accepting risk and mitigating risk in GRC risk management?

**A:**
- **Mitigating risk:** Adding controls, redesigning systems, or providing training to **reduce** the likelihood or impact of a threat. Preferred when the cost of the control is proportionate to the risk.
- **Accepting risk:** Acknowledging a risk exists but choosing **not to act** — appropriate when the risk is **low probability, low impact**, or when the cost of mitigation exceeds the potential damage.

Risk acceptance must be a **deliberate, documented decision** — not the result of ignorance or inaction.

*Source: [1-Introduction to governance, risk management and compliance (GRC)/subtitle.txt](1-Introduction%20to%20governance,%20risk%20management%20and%20compliance%20%28GRC%29/subtitle.txt)*

---

### Card 10
**Q:** What are the three outputs of effective GRC working together?

**A:**
1. **Trust** — customers, partners, and regulators can rely on the organisation's security posture
2. **Resilience** — the organisation can withstand, absorb, and recover from cyber incidents
3. **Business continuity** — security is embedded in operations so disruptions are minimised

> GRC transforms security from a reactive cost centre into a **strategic business enabler**.

*Source: [1-Introduction to governance, risk management and compliance (GRC)/subtitle.txt](1-Introduction%20to%20governance,%20risk%20management%20and%20compliance%20%28GRC%29/subtitle.txt)*

---

## Cluster 2 — Standards vs. Frameworks (12 cards)

---

### Card 11
**Q:** How does the Taherdoost (2022) article define a cybersecurity standard?

**A:** A cybersecurity standard is a **set of practices or technical methods** that help organisations secure their cyber environment. It:
- Specifies **exactly what must be done** — methods step-by-step
- Clarifies what is expected to complete a process
- Can be open (applicable to all organisations) or closed (specific industries only)
- Is validated by a legal entity or formal standards body
- May be mandatory (PCI DSS) or voluntary (ISO 27001 certification)

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 1*

---

### Card 12
**Q:** How does Taherdoost (2022) define a cybersecurity framework (CSF)? How does it differ from a standard?

**A:** A cybersecurity framework is a **general guideline** covering many components or domains that does **not specify the exact steps** to be taken. It:
- Provides a general structure and methodology for protecting critical digital assets
- Describes scope, implementation, and evaluation
- Offers *suggested* guidelines that can be adopted in full or in part
- Guides organisations on *how* to implement standards

> **Key difference:** Standards explain methods one by one (*what* is expected). Frameworks provide flexible structure (*how* to approach the space). Frameworks guide implementation of standards.

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 1*

---

### Card 13
**Q:** What is the critical insight about the relationship between standards and frameworks?

**A:**

> *"Effective implementation of cybersecurity standards is not possible without the relevant cybersecurity framework."*

- **Standards** define *what* must be achieved
- **Frameworks** guide *how* to achieve it
- They are **complementary**, not competing — a standard without a framework leads to poor or inconsistent implementation; a framework without a standard provides guidance but no verifiable target

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 2*

---

### Card 14
**Q:** What are the two main categories of cybersecurity standards and frameworks covered in Taherdoost (2022)?

**A:**
**Information Security Standards:**
- ISO 27000 series
- ISF Standard of Good Practice (SoGP)
- BSI IT-Grundschutz
- Industry-specific: IEC 62443, ISO/SAE 21434, ETSI EN 303 645, FIPS 140-2

**Information Security Frameworks:**
- NIST SP800 series (CSF, RMF, Privacy Framework, SP800-12/30/37/39/53/14)
- COBIT

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 3*

---

### Card 15
**Q:** When should an organisation choose a standard over a framework? Give three reasons.

**A:**
1. You need a formal **certification** (e.g. ISO/IEC 27001 ISMS certification)
2. You operate in a **regulated industry** where compliance is legally required (e.g. PCI DSS for payment cards, FIPS 140-2 for US/Canadian federal systems)
3. You need **externally verifiable, auditable** requirements to demonstrate to customers, partners, or regulators

Additional reasons: you need specific, measurable controls; you face legal/contractual compliance requirements.

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Question A*

---

### Card 16
**Q:** When should an organisation choose a framework over a standard? Give three reasons.

**A:**
1. You want **flexibility** — adopt only the parts relevant to your organisation at reduced cost
2. You need a **broad, organisation-wide governance model** (e.g. COBIT for IT governance)
3. You want to **identify gaps** in your existing cybersecurity programme (e.g. NIST CSF gap analysis)

Additional reasons: building a *new* programme and needing a foundation; sector where frameworks are encouraged but not mandated; needing to *combine* multiple standards under one structure.

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Question A*

---

### Card 17
**Q:** What is the difference between an "open" and a "closed" standard?

**A:**
- **Open standard:** Available to **all** types of businesses and government organisations, regardless of industry (e.g. ISO 17799/27001)
- **Closed standard:** Applicable only to **certain industries** or businesses (e.g. PCI DSS for the payment card industry; FIPS 140-2 for US/Canadian federal agencies)

Some standards can also be **proprietary or local regulatory standards** for a specific country or company.

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Q4*

---

### Card 18
**Q:** Why might an organisation need to use more than one standard?

**A:** Because *"in some cases, the application of one standard may not fulfil all the demands of an organisation."*

Reasons:
- Different standards cover **different aspects or domains** — none is comprehensive alone
- Studies on smart grids found **no single standard guarantees complete security**
- An organisation may need ISO 27001 for ISMS certification, ISO 27002 for specific controls, and ISO 27005 for risk management — three separate standards working together
- Industry-specific requirements (e.g. ePHI, payment cards) may sit outside a general standard's scope

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Q3 & Q32*

---

### Card 19
**Q:** What are the 8 benefits of implementing cybersecurity standards, according to Taherdoost (2022)?

**A:**
1. Saving time
2. Decreasing costs
3. Increasing profits
4. Improving user awareness
5. Minimising risks
6. Offering business continuity
7. Facilitating compliance with industry best practices
8. Ability to compare security systems on an **international level**

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 11*

---

### Card 20
**Q:** What is the difference between a cybersecurity standard and a cybersecurity policy?

**A:**
| | Standard | Policy |
|--|----------|--------|
| **Origin** | External — formal bodies (ISO, NIST, BSI) | Internal — created by the organisation |
| **Purpose** | Model for building security controls; compliance benchmarking | Specific, enforceable operational rules |
| **Audience** | Industry-wide; externally verifiable | Internal staff and systems |
| **Nature** | Sets the target and structure | Controls the behaviour to achieve it |

> *"Standards guide the structure. Policies control the behaviour."*

*Source: [4-Cybersecurity standards and policies/subtitle.txt](4-Cybersecurity%20standards%20and%20policies/subtitle.txt)*

---

### Card 21
**Q:** What is an Information Security Management System (ISMS)?

**A:** An ISMS is a **systematic, documented framework** for managing an organisation's information security risks. It defines:
- Policies, procedures, and controls for protecting information assets
- Roles, responsibilities, and accountability for security decisions
- Processes for identifying, assessing, and treating risks
- Mechanisms for monitoring, reviewing, and continuously improving security

The international standard for implementing a certified ISMS is **ISO/IEC 27001**, which specifies its 7 key elements.

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 4*

---

### Card 22
**Q:** What does the Taherdoost (2022) article mean when it says standards and frameworks are "complementary"?

**A:** Neither is sufficient alone:
- A **standard** without a framework: the organisation knows *what* it must achieve but has no structured methodology for *how* to get there — leading to inconsistent or failed implementation
- A **framework** without a standard: the organisation has a flexible improvement structure but no verifiable, auditable compliance target to demonstrate to external parties

Together: the **framework guides the implementation** of the **standard's requirements** — each fills the other's gap. For example, ISO 27001 (standard) defines requirements; NIST CSF or BSI 100-2 (frameworks) guide how to meet them.

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 2 & Question A*

---

## Cluster 3 — ISO/IEC 27000 Series & Other Standards (14 cards)

---

### Card 23
**Q:** What is ISO/IEC 27001 and what are its 7 key elements?

**A:** ISO/IEC 27001 is the **internationally recognised standard** for implementing a certified ISMS. Its main approach is **risk-based**.

**7 key elements:**
1. Specifications for installation
2. Performance
3. Operation
4. Controlling and monitoring
5. Review
6. Maintenance
7. Improvement

Used alongside ISO 27002 (which provides the specific controls to achieve these requirements).

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 4.1 & Q5*

---

### Card 24
**Q:** What is the relationship between ISO/IEC 27001 and ISO/IEC 27002?

**A:**
- **ISO/IEC 27001** defines the *requirements* for an ISMS — the "what must be achieved" — but does **not** list specific security controls
- **ISO/IEC 27002** is the *code of practice* that provides a structured list of controls to comply with ISO 27001 — the "specific actions to achieve it"
- Controls **not listed** in ISO 27002 are **not mandatory**
- The two are used together: 27001 for the framework requirements, 27002 for the implementation controls

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Q6*

---

### Card 25
**Q:** What is ISO/IEC 27005 and what are its 7 steps?

**A:** ISO/IEC 27005:2018 provides guidelines for **risk-based implementation of information security risk management**. It supports ISO 27001 and builds on ISO 27002 knowledge.

**7-step risk management process:**
1. Installation of context
2. Assessing risk
3. Treating risk
4. Accepting risk
5. Communicating risk
6. Consulting risk
7. Monitoring and reviewing risk

Applicable to organisations of different sizes and sectors.

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 4.3 & Q7*

---

### Card 26
**Q:** What is ISO/IEC 27006 and why does it matter?

**A:** ISO/IEC 27006:2015 determines the **formal processes and requirements for third-party bodies** that provide ISMS auditing and certification services. It matters because:
- It ensures that certification bodies are **recognised as trustworthy and reliable**
- Without ISO 27006, the value of ISO 27001 certification could not be guaranteed — any auditor could claim to certify compliance
- It provides the **external verification layer** that makes ISO 27001 certificates internationally credible

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 4.4 & Q8*

---

### Card 27
**Q:** When was ISO/IEC 27001 first published and under what name? What is its original lineage?

**A:**
- Originally known as **BS7799** (British Standard)
- Introduced as ISO/ISMS standards in **2005** as ISO/IEC 27001:2005
- Major revision: **ISO/IEC 27001:2013** — the version most widely referenced today
- Further updated in **2022**

The BS7799 lineage means the standard has roots in UK industry practice before becoming an internationally recognised ISO standard.

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 4 & Q9*

---

### Card 28
**Q:** How does ISO/IEC 27001 address insider threats specifically?

**A:** According to Humphreys, ISO/IEC 27001 can be employed in organisations of different sizes to address **insider threat risks** through the **PDCA cycle** (Plan-Do-Check-Act) and specific controls:

- **Training** personnel on security practices
- **Access controls** to limit exposure
- **Separation of duties** to prevent single-point abuse
- **Regular backups** to enable recovery
- **Social engineering awareness** training
- **Mobile device controls**

> The key insight: ISO 27001 treats the *human factor* — not just technical controls — as a core risk management domain.

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Q27*

---

### Card 29
**Q:** What is the ISF Standard of Good Practice (SoGP) and what are its six major aspects?

**A:** The SoGP was published in **1996** by the **Information Security Forum (ISF)** — a non-profit, independent, international organisation (London HQ + NYC). It is revised every **two years** to reflect current best practices.

**Six major aspects:**
1. Installing computers
2. Application of critical business processes
3. Managing security and networks
4. Developing systems
5. Securing the environment for the end user
6. User awareness and training

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 5 & Q10*

---

### Card 30
**Q:** What are the three BSI IT-Grundschutz standards and what does each cover?

**A:** Published by Germany's federal security agency (Bundesamt für Sicherheit in der Informationstechnik — BSI):

| Standard | Focus |
|----------|-------|
| **BSI Standard 100-1** | Main requirements for implementing an ISMS; full conformity with ISO 27001 |
| **BSI Standard 100-2** | IT security management step-by-step; selection of appropriate measures; interprets ISO 27001, 27002, and 13335 with notes and examples |
| **BSI Standard 100-3** | Risk analysis based on IT-Grundschutz principles |

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 6 & Q11*

---

### Card 31
**Q:** What is FIPS 140-2 and what are its four security levels?

**A:** **FIPS 140-2** (Federal Information Processing Standards) was published by **NIST** and jointly developed with Canada's **Communications Security Establishment (CSE)**. It specifies hardware and software requirements to **protect cryptographic modules** (which contain information requiring integrity and confidentiality).

- Defines **4 security levels** — from lowest (Level 1) to highest (Level 4)
- Products meeting its requirements are accepted by **US and Canadian federal agencies**

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 7 & Q12*

---

### Card 32
**Q:** What is ETSI EN 303 645 and who does it target?

**A:** ETSI EN 303 645 is a cybersecurity standard targeting **all parties involved in manufacturing and developing IoT devices and appliances**. It:
- Collects best practices and requirements for **internet-connected products**
- Establishes **organisational policies and technical controls** applicable to all IoT devices
- Is focused on ensuring consumer data security

Notable because IoT is one of the fastest-growing attack surfaces — this standard fills the gap left by general-purpose standards that do not address device-level security for embedded systems.

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 7 & Q13*

---

### Card 33
**Q:** What is IEC 62443 and what makes it distinctive?

**A:** IEC 62443 is an international series of cybersecurity standards for **Industrial Automation and Control Systems (IACSs)**. Initially established by the **ISA99 committee**, then adopted by IEC.

**Distinctive features:**
- It is **not limited to the technology sector** — it also addresses cybersecurity regarding **processes, employees, and countermeasures**
- It covers **both current and future** cybersecurity concerns in industrial automation
- Relevant to critical infrastructure (energy, water, manufacturing) where cyber attacks can have **physical consequences**

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 7 & Q14*

---

### Card 34
**Q:** How do PCI DSS and ISO 17799 compare in scope and applicability?

**A:** According to Rowlingson and Winsborrow:
- Both have **similar aims** (protecting sensitive data) but differ **significantly in scope**
- **ISO 17799** is a **general standard** applicable to a wide range of organisations across all industries
- **PCI DSS** is applicable to a **limited range** — specifically information systems handling credit, debit, and pre-paid cards issued by Discover, American Express, MasterCard, Visa, and JCB International
- PCI DSS is **not compulsory in the US**, but market forces (card network agreements) strongly motivate compliance
- ISO is "almost mandatory" in the retail industry; its absence can lead to penalty

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Q24 & Q30*

---

### Card 35
**Q:** What is ISO/SAE 21434 and why does it exist?

**A:** ISO/SAE 21434 is a cybersecurity standard specifically for **road vehicle cybersecurity engineering**. It covers:
- Production, operation, development, and maintenance of **vehicle electronic systems**
- Addresses cybersecurity across the full vehicle lifecycle

It exists because modern vehicles are increasingly networked and software-driven — making them vulnerable to cyber attacks that can have **safety-critical physical consequences** (e.g. attacking braking systems, steering, or remote access features). The standard applies to automotive manufacturers and their supply chains.

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 7*

---

### Card 36
**Q:** What does the ISO/IEC 27000 series explicitly acknowledge about its own limitations?

**A:** Taherdoost (2022) notes that the ISO 27000 series **"has NOT been shown to successfully work as a complete ISM solution to be integrated into larger systems."**

This implies:
- ISO 27000 works well for scoped ISMS implementation but struggles as an **enterprise-wide integrator**
- It often needs to be **combined with other standards or frameworks** (e.g. ISO 20000 for IT service management, or NIST CSF for gap analysis)
- ISO 27013 exists specifically to address **integrated implementation** of ISO 27001 and ISO 20000-1

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 4*

---

## Cluster 4 — COBIT & NIST Frameworks (12 cards)

---

### Card 37
**Q:** What is COBIT, who developed it, and when was it first released?

**A:** **COBIT** (Control Objectives for Information and Related Technologies) is a high-level IT standard in a **governance and management** framework.

- **Developer:** ISACA (Information Systems Audit and Control Association), founded **1967** in the USA
- **First released:** **1996**
- **Nature:** Concentrates on **broad concepts of decision-making** in IT management — does NOT provide implementation details
- **Purpose:** Help users and decision makers in IT systems by developing authoritative IT control objectives

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 8 & Q15*

---

### Card 38
**Q:** Describe the internal structure of COBIT — how many processes, objectives, and categories?

**A:**
- **34** main IT processes
- Each process contains a series of high-level **Detailed Control Objectives (DCOs)**
- Total: **318 DCOs** across all 34 processes
- All DCOs are classified into **4 categories:**
  1. **Planning**
  2. **Implementing**
  3. **Supporting**
  4. **Monitoring and evaluating**

> This creates a comprehensive top-down map from strategic intent to operational control objectives.

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 8 & Q16*

---

### Card 39
**Q:** When is COBIT the best choice, and when is it NOT the best choice?

**A:**
**Best for:** Implementing an **integrated governance solution across an entire organisation** — because of its breadth covering process, infrastructure, resource, responsibility, and control management.

**Not best for:** Cases where the **appropriate implementation of specific security controls** is the first priority. COBIT does **NOT provide guidelines on how to achieve predefined control objectives** — it sets out what they are, but not how to meet them.

> An organisation that needs clear implementation guidance for specific controls should use a more prescriptive standard like ISO 27001.

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 8 & Q17*

---

### Card 40
**Q:** What triggered the creation of the NIST Cybersecurity Framework (CSF) and what does it do?

**A:** The NIST CSF was created following an **executive order signed by President Obama in 2014**; NIST's role was further codified by the **Cybersecurity Enhancement Act of 2014 (CEA)**.

**What it does:**
- Covers identification and development of cybersecurity risk frameworks for **critical infrastructure** operators
- Provides an **integrated organising structure** drawing from best practices, standards, and recommendations
- Can be used as a foundation for a **new** cybersecurity programme or to **improve an existing** one
- **Points out gaps** in an organisation's current cybersecurity practices

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 9.1 & Q18*

---

### Card 41
**Q:** What are the 5 core functions of the NIST Cybersecurity Framework (CSF)?

**A:**
```
Identify → Protect → Detect → Respond → Recover
```

| Function | Purpose |
|----------|---------|
| **Identify** | Understand assets, risks, and governance |
| **Protect** | Implement safeguards to limit the impact of an attack |
| **Detect** | Develop capabilities to identify cybersecurity events |
| **Respond** | Take action when an incident is detected |
| **Recover** | Restore capabilities and services after an incident |

The **Recover** function is particularly critical for ransomware defence — an area where HIPAA alone is insufficient.

*Source: [3-Which cybersecurity framework?/answer.md](3-Which%20cybersecurity%20framework%3F/answer.md) — Section 3*

---

### Card 42
**Q:** What are the 7 steps of the NIST Risk Management Framework (RMF)?

**A:**
1. **Preparing** — establish context and preconditions
2. **Categorising** — classify information and systems by impact level
3. **Selecting** — choose appropriate security and privacy controls
4. **Implementing** — put selected controls in place
5. **Assessing** — evaluate whether controls are implemented correctly and operating effectively
6. **Authorising** — senior official formally accepts residual risk
7. **Monitoring** — continuously track control effectiveness

The RMF is designed to be **comprehensive, measurable, and repeatable** — applicable to IoT-based environments as well.

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 9.2 & Q19*

---

### Card 43
**Q:** What are the 5 major functions of the NIST Privacy Framework?

**A:**
1. **Identifying** — understand privacy risks across the organisation
2. **Governing** — establish governance structures for privacy management
3. **Controlling** — implement controls to manage privacy risks
4. **Communicating** — share privacy-related information with relevant stakeholders
5. **Protecting** — apply safeguards to prevent privacy incidents

The Privacy Framework helps detect and respond to privacy concerns and supports innovative services. It is applicable to **IoT environments**.

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 9.3 & Q20*

---

### Card 44
**Q:** What is the difference between NIST SP800-30 and NIST SP800-39?

**A:**
| | SP800-30 | SP800-39 |
|--|----------|----------|
| **Focus** | Developing **information systems risk assessment** plans | Managing information security risks integrated with **organisational mission** |
| **Audience** | Decision makers needing to evaluate risks against available budget | Entire organisation — missions, operations, reputation, functions, assets |
| **Scope** | Specific risk assessments | Enterprise-wide risk management programme |
| **Purpose** | Understand specific cyber risks for smart resource decisions | Develop a structured, flexible, integrated approach to organisational risk |

> SP800-39 is **not** a replacement for SP800-30 — they operate at different levels of scope.

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Q22*

---

### Card 45
**Q:** What does NIST SP800-53 cover and why is it significant?

**A:** NIST SP800-53 covers **privacy and security controls in information systems**. It is significant because it explicitly addresses a wide range of threat types:
- Human error
- Hostile attacks
- Structural failures
- Natural disasters
- Foreign intelligence threats

Unlike standards that focus primarily on deliberate cyber attacks, SP800-53 acknowledges that **accidental and environmental threats** are equally valid security concerns requiring systematic controls.

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 9.4 & Q21*

---

### Card 46
**Q:** What is NIST SP800-12 and what topics does it cover?

**A:** NIST SP800-12 covers the **core principles of cybersecurity**. Topics include:
- The role of computer security in supporting the **business mission**
- The importance of **cost-effective security**
- Clearly defining **accountability and responsibilities**
- The role of system owners outside the organisation
- The importance of an **integrated, comprehensive approach**
- Assessing security **regularly**
- The relationship between computer security and **societal factors**

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 9.4 & Q21*

---

### Card 47
**Q:** What restriction applies when using NIST SP800 publications for national security systems?

**A:** To employ NIST SP800 publications for **national security systems**, it is **mandatory to get approval from the relevant federal authority**. The SP800 series was initially developed for **federal information systems** — but was later also adopted by non-federal organisations. The national security restriction reflects the higher sensitivity and different governance requirements of classified or national defence systems.

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Section 9 & Q33*

---

### Card 48
**Q:** How do NIST and ISO/IEC 27000 each translate broad security goals into practical controls?

**A:** Both use a **hierarchical decomposition** approach — from abstract goals to auditable steps:

**ISO 27000 path:**
- 27001 → requirements for an ISMS (7 elements)
- 27002 → specific controls for each requirement
- 27005 → 7-step risk management workflow
- 27006 → external verification (certification)

**NIST path:**
- CSF → gap analysis and integrated organising structure (5 functions)
- RMF → 7-step measurable risk management process
- SP800-53 → specific privacy and security controls
- SP800-30 → risk assessment methodology for decision makers

> Both convert abstract aims into structured, layered hierarchies of processes, controls, and evaluation criteria.

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Question B*

---

## Cluster 5 — Policies, Case Study & Key Findings (12 cards)

---

### Card 49
**Q:** What is a cybersecurity policy and what topics might it cover?

**A:** A cybersecurity policy is an **internal document** that defines how an organisation and its staff must behave to protect digital assets. Topics may include:
- Acceptable use of systems
- Password management
- Email and internet usage
- Access control
- Data classification
- Incident response procedures

Policies must: reflect current industry standards and legal obligations, be clearly communicated to all employees, and be **regularly updated**.

*Source: [4-Cybersecurity standards and policies/subtitle.txt](4-Cybersecurity%20standards%20and%20policies/subtitle.txt)*

---

### Card 50
**Q:** What are the six common types of internal cybersecurity policies? What does each cover?

**A:**
| Policy | Purpose |
|--------|---------|
| **Acceptable Use Policy (AUP)** | Defines what staff can and cannot do on company systems |
| **Access Control Policy** | Details how access to systems and data is granted |
| **Data Classification Policy** | Outlines how data is labelled based on sensitivity |
| **Incident Response Policy** | Explains what to do if a breach occurs |
| **BYOD Policy** | Sets expectations for employees using personal devices for work |
| **Password Policy** | Ensures strong and secure authentication practices |

> Each policy must be **clear, enforceable, and regularly updated**.

*Source: [4-Cybersecurity standards and policies/subtitle.txt](4-Cybersecurity%20standards%20and%20policies/subtitle.txt)*

---

### Card 51
**Q:** Comparing the three options — HIPAA, ISO/IEC 27000, and NIST CSF — what type of thing is each?

**A:**
| Option | Type | Voluntary? | Healthcare-specific? |
|--------|------|------------|----------------------|
| **NIST CSF** | Cybersecurity framework | Yes — voluntary | No, but official HIPAA mapping exists |
| **ISO/IEC 27000** | Information security standard | Mostly voluntary | No — general purpose |
| **HIPAA** | US federal law / regulation | **No — legally mandatory** for covered entities | Yes — built specifically for healthcare |

> This distinction is critical: HIPAA is not a framework *choice* — it is a legal obligation. Comparing it to NIST or ISO as alternatives conflates compliance with security strategy.

*Source: [3-Which cybersecurity framework?/answer.md](3-Which%20cybersecurity%20framework%3F/answer.md) — Preliminary Clarification*

---

### Card 52
**Q:** What is HIPAA's Security Rule and what does it mandate?

**A:** HIPAA's Security Rule requires **administrative, physical, and technical safeguards** to protect electronic Protected Health Information (ePHI). It mandates:
- A formal **risk assessment**
- **Access controls** and audit controls
- **Transmission security** (encryption)
- **Incident response** procedures
- **Workforce training** on security policies

> HIPAA is a *regulatory floor*, not a comprehensive cybersecurity programme. It defines *what* must be protected but is largely silent on *how* to build a resilient security posture.

*Source: [3-Which cybersecurity framework?/answer.md](3-Which%20cybersecurity%20framework%3F/answer.md) — Section 1*

---

### Card 53
**Q:** Why is HIPAA alone insufficient for a small healthcare organisation wanting to strengthen its cybersecurity?

**A:**
1. HIPAA describes **minimum protections** for a specific data category (ePHI) — not a comprehensive security posture
2. It provides **no structured methodology** for identifying gaps, prioritising investments, or measuring improvement
3. It was last significantly updated in **2013** — it does not address modern threats such as ransomware, supply chain attacks, or cloud security
4. It is a **binary pass/fail** compliance check — not a continuous improvement framework

> An organisation can be **HIPAA compliant and still severely vulnerable**.

*Source: [3-Which cybersecurity framework?/answer.md](3-Which%20cybersecurity%20framework%3F/answer.md) — Section 1*

---

### Card 54
**Q:** Why is ISO/IEC 27001 not ideal for a small healthcare organisation?

**A:**
1. **Resource-intensive:** Implementing and maintaining ISO 27001 certification requires significant investment in time, expertise, and money — typically better suited to medium-to-large organisations
2. **Not healthcare-specific:** ISO 27000 is a general-purpose standard and does not directly address ePHI, HIPAA requirements, or clinical systems
3. **Certification overhead:** The audit and certification process may be disproportionate for a small organisation that simply wants to improve its practical security posture
4. **Standards need frameworks:** ISO 27001 defines *requirements* but, as Taherdoost (2022) notes, *"standards do not include how to achieve the standard requirements"* — a framework is still needed for implementation

*Source: [3-Which cybersecurity framework?/answer.md](3-Which%20cybersecurity%20framework%3F/answer.md) — Section 2*

---

### Card 55
**Q:** Why is NIST CSF recommended for a small healthcare organisation? Give four reasons.

**A:**
1. **Free** — no certification cost or licensing fee; proportionate for a resource-constrained organisation
2. **Flexible and scalable** — adopt incrementally, starting with critical gaps; not required to implement everything at once
3. **Official HIPAA crosswalk exists** — NIST has published a mapping from CSF to the HIPAA Security Rule; adopting NIST CSF *accelerates* HIPAA compliance rather than duplicating effort
4. **Addresses modern threats** — includes a *Recover* function critical for ransomware defence that HIPAA alone underemphasises; healthcare is the most targeted sector for ransomware

*Source: [3-Which cybersecurity framework?/answer.md](3-Which%20cybersecurity%20framework%3F/answer.md) — Section 3 & Recommendation*

---

### Card 56
**Q:** What is the relationship between HIPAA and the NIST CSF for a healthcare organisation?

**A:**
> *"HIPAA sets the floor; NIST CSF builds the ceiling."*

- **HIPAA** tells the organisation *what* data it must protect — it is the legal obligation and minimum baseline
- **NIST CSF** tells the organisation *how* to build a structured, continuously improving security programme around those obligations
- NIST has published an explicit **crosswalk** mapping NIST CSF controls to HIPAA Security Rule requirements — the two are **designed to complement each other**
- Adopting NIST CSF as the implementation methodology for HIPAA is more practical than pursuing ISO 27001 separately

*Source: [3-Which cybersecurity framework?/answer.md](3-Which%20cybersecurity%20framework%3F/answer.md) — Recommendation*

---

### Card 57
**Q:** What does Fumy (2004) conclude about the main security challenge in organisations?

**A:**

> *"The main security challenge in organisations is its application by people, which should be addressed by training."*

Even technically sound security standards and frameworks are ineffective if users and employees are not adequately trained. This reinforces the **human factor** as the most critical and often most neglected security control — and explains why user training appears across virtually every standard and framework (ISO 27001, NIST CSF, Cyber Essentials, 10 Steps to Cyber Security).

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Q23*

---

### Card 58
**Q:** According to Broderick, what are the most popular information security frameworks and standards?

**A:** Broderick concluded that the four most popular are:

1. **BS-7799** (the predecessor to ISO 27001)
2. **ISO-17799** (now absorbed into ISO 27002)
3. **ISO-27001**
4. **COBIT**

Additionally, Broderick noted that ISO-17799:2005 **does not include any guide to implement network physical isolation** — only to audit it. This is a specific gap practitioners should be aware of.

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Q25*

---

### Card 59
**Q:** What is CIMF and what is its main purpose?

**A:** **CIMF** (Cybersecurity Incident Management Framework) was analysed by Srinivas et al. (2019). Its main purpose is to develop an **integrated management mechanism to respond to cyber threats and incidents**. It was studied in the context of **government cybersecurity regulations, standards, and architecture**.

CIMF represents an example of a domain-specific framework — built for incident response rather than ISMS or governance — demonstrating that frameworks can be scoped to specific organisational functions, not just enterprise-wide security.

*Source: [2-Cybersecurity frameworks/study-guide.md](2-Cybersecurity%20frameworks/study-guide.md) — Q26*

---

### Card 60
**Q:** What is the key distinction between compliance and security, and why does it matter?

**A:**
- **Compliance** = meeting a defined set of legal or regulatory requirements — a **binary, auditable outcome** (pass/fail)
- **Security** = an ongoing state of resilience against evolving threats — a **continuous process** requiring adaptation

An organisation can be **fully compliant and still vulnerable** if:
- The standard it complies with is outdated (e.g. HIPAA, last significantly updated 2013)
- It meets the *letter* of requirements without the *spirit* (e.g. documented policies that no one follows)
- New threats emerge faster than compliance requirements are updated (e.g. ransomware, supply chain attacks)

> Compliance provides a *floor*; frameworks like NIST CSF provide the *methodology for continuous improvement* above that floor.

*Source: [3-Which cybersecurity framework?/answer.md](3-Which%20cybersecurity%20framework%3F/answer.md) — Engaging with Counterarguments*

---

*End of Week 3 Flashcards — 60 cards across 5 clusters*
