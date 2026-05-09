# CM2025 Computer Security — Week 3 Summary

## Overview

Week 3 shifts from threats to **governance and structure**: how organisations manage cyber risk at an institutional level. Content covers GRC (Governance, Risk Management, and Compliance), the landscape of cybersecurity frameworks and standards (Taherdoost, *Electronics* 2022), a real-world framework selection case study (small healthcare organisation), and the practical distinction between standards and internal policies.

---

## 1. Governance, Risk Management, and Compliance (GRC)

### What Is GRC?

GRC represents the **three areas of institutional responsibility** for cybersecurity operations:

| Component | Definition |
|-----------|-----------|
| **Governance** | How an organisation is directed and controlled — leadership, roles, accountability, and policy |
| **Risk Management** | Identifying potential threats and taking proactive steps to reduce them |
| **Compliance** | Meeting legal, regulatory, or contractual requirements (e.g. GDPR, ISO standards, PCI DSS) |

> Without governance, cybersecurity efforts become disorganised, reactive, or risky.

### Why Each Component Matters

**Governance** ensures security is a business priority, not just a technical one. It:
- Aligns security strategy with organisational goals
- Sets out who is responsible for decisions and actions
- Creates clear policies for acceptable use, data protection, and response
- Promotes transparency, ethical behaviour, and accountability

**Risk Management** is proactive rather than reactive:
1. **Identify** threats — system vulnerabilities, human error, supply chain weaknesses
2. **Assess** likelihood and potential damage
3. **Mitigate** — add controls, training, or redesign systems
4. **Accept** risk if it is low and manageable
5. **Monitor** continuously

**Compliance** protects organisations from fines, reputational harm, and lawsuits — and builds trust with customers and partners. Examples:
- **GDPR** — for any organisation handling personal data of EU citizens
- **NIST / ISO standards** — for critical infrastructure providers
- **PCI DSS** — for financial institutions handling payment card data

### GRC Working Together

```
Governance defines roles and policies
    ↓
Risk Management identifies threats
    ↓
Compliance enforces requirements
    ↓
Result: trust, resilience, business continuity
```

### Real-World Example — Healthcare Provider

| GRC Component | Applied Example |
|---------------|----------------|
| **Governance** | Appointing a CISO to lead security strategy |
| **Risk Management** | Assessing the impact of a patient data leak |
| **Compliance** | Following GDPR and NHS cybersecurity standards |

---

## 2. Standards vs. Frameworks — Core Distinction

### Definitions

- **Cybersecurity standard:** A prescriptive document that specifies *exactly* what must be done — methods step-by-step, with minimum requirements. Can be mandatory for certification or legal compliance.
- **Cybersecurity framework (CSF):** A flexible general guideline covering many domains. Does **not** specify exact steps — provides scope, structure, and methodology. Organisations may adopt all or part of it.

### Side-by-Side Comparison

| Dimension | Standard | Framework |
|-----------|----------|-----------|
| **Prescriptiveness** | Specifies exactly what must be done | Does not specify exact steps; flexible adoption |
| **Flexibility** | Some open (all orgs), some closed (specific industries) | Can use parts or the whole model |
| **Goal** | Compliance with legal/regulatory provisions | Determines quality standards; defines scope and evaluation |
| **Cost** | Can be costly to implement and certify | Implementation costs reduced due to flexibility |
| **Relationship** | Requires a framework to be effectively implemented | Guides HOW to implement the WHAT that standards define |

> **Critical insight:** *Effective implementation of cybersecurity standards is not possible without the relevant cybersecurity framework.* They are complementary, not competing.

### When to Choose a Standard
- You need formal **certification** (e.g. ISO/IEC 27001 ISMS)
- You operate in a **regulated industry** where compliance is legally required (e.g. PCI DSS, FIPS 140-2)
- You need **externally verifiable, auditable** requirements
- You need to demonstrate compliance to customers, partners, or regulators

### When to Choose a Framework
- You want **flexibility** to adopt only the relevant parts
- You need a **broad, organisation-wide** governance model (e.g. COBIT)
- You want to **identify gaps** in your existing cybersecurity programme (e.g. NIST CSF)
- You are building a **new** security programme and need a foundation
- You want to **combine multiple standards** under one structure

---

## 3. Cybersecurity Standards

### ISO/IEC 27000 Series

Published by ISO and IEC. Originally known as BS7799. The series covers Information Security Management Systems (ISMS).

| Standard | Purpose |
|----------|---------|
| **ISO/IEC 27001:2013** | Requirements for implementing a certified ISMS; 7 key elements; risk-based approach |
| **ISO/IEC 27002:2013** | Code of practice — specific controls to comply with 27001 |
| **ISO/IEC 27005:2018** | 7-step risk management process for information security |
| **ISO/IEC 27006:2015** | Requirements for third-party ISMS auditing and certification bodies |
| ISO/IEC 27000:2018 | Overview and vocabulary |
| ISO/IEC 27003:2017 | Guidance for ISMS implementation |
| ISO/IEC 27004:2016 | Monitoring, measurement, analysis, evaluation |
| ISO/IEC 27018:2019 | Protection of PII in public clouds |

#### ISO/IEC 27001 in Detail
- Internationally recognised; risk-based approach
- **7 key elements:** installation, performance, operation, controlling & monitoring, review, maintenance, improvement
- Addresses **insider threats** via PDCA cycle, access controls, separation of duties, training, mobile device controls
- Used *with* ISO 27002 (which provides the specific controls)

#### ISO/IEC 27005 — 7-Step Risk Management Process
1. Installation of context
2. Assessing risk
3. Treating risk
4. Accepting risk
5. Communicating risk
6. Consulting risk
7. Monitoring and reviewing risk

### ISF Standard of Good Practice (SoGP)

- Published: **1996** by the Information Security Forum (ISF), a non-profit based in London
- Revised every **two years** to reflect current best practices
- Six major aspects: installing computers, application of critical business processes, managing security and networks, developing systems, securing the end-user environment, user awareness

### BSI IT-Grundschutz

Published by Germany's federal security agency (BSI):

| Standard | Focus |
|----------|-------|
| **BSI 100-1** | ISMS requirements; full conformity with ISO 27001 |
| **BSI 100-2** | IT security management step-by-step; interprets ISO 27001/27002 with examples |
| **BSI 100-3** | Risk analysis based on IT-Grundschutz principles |

### Industry-Specific Standards

| Standard | Domain | Key Characteristics |
|----------|--------|---------------------|
| **IEC 62443** | Industrial automation and control systems (IACS) | Covers processes, employees, countermeasures; not limited to technology sector |
| **ISO/SAE 21434** | Road vehicle cybersecurity | Covers production, operation, development, maintenance of vehicle electronic systems |
| **ETSI EN 303 645** | IoT devices | Targets manufacturers/developers; best practices and requirements for internet-connected products |
| **FIPS 140-2** | Cryptographic modules | 4 security levels (lowest to highest); jointly developed by NIST (USA) and CSE (Canada); accepted by US and Canadian federal agencies |

---

## 4. Cybersecurity Frameworks

### COBIT

- **Developer:** ISACA (Information Systems Audit and Control Association), founded 1967 (USA)
- **Released:** 1996
- **Nature:** High-level IT governance and management framework; concentrates on broad decision-making concepts, NOT implementation details
- **Structure:** 34 main IT processes → 318 Detailed Control Objectives (DCOs) → 4 categories: planning, implementing, supporting, monitoring & evaluating
- **Best for:** Integrated governance solution across an entire organisation
- **Not best for:** Cases where appropriate implementation of specific security controls is the first priority — COBIT does **not** provide guidelines to achieve predefined control objectives

### NIST SP800 Series

- **NIST:** National Institute of Standards and Technology; non-regulatory US federal agency; founded 1901
- **SP800 first published:** 1990 — initially for federal information systems; later adopted by non-federal organisations
- **Note:** Using SP800 for national security systems requires approval from the relevant federal authority

#### NIST Cybersecurity Framework (CSF)
- Established after President Obama's executive order (**2014**); updated by the Cybersecurity Enhancement Act of 2014
- Covers identification and development of risk frameworks for **critical infrastructure** operators
- **5 core functions:**

```
Identify → Protect → Detect → Respond → Recover
```

- Can serve as foundation for a **new** security programme or improve an **existing** one
- Effectively **identifies gaps** in current cybersecurity practices
- Explicitly maps to HIPAA Security Rule requirements

#### NIST Risk Management Framework (RMF)
- **7-step process:** preparing → categorising → selecting → implementing → assessing → authorising → monitoring
- Comprehensive, measurable, and **repeatable**; applicable to IoT environments

#### NIST Privacy Framework
- **5 major functions:** identifying, governing, controlling, communicating, protecting
- Helps detect and respond to privacy concerns; applicable to IoT environments

#### Key SP800 Standards

| Standard | Focus |
|----------|-------|
| **SP800-12** | Core cybersecurity principles; cost-effective security; accountability |
| **SP800-53** | Privacy and security controls; covers human error, hostile attacks, natural disasters |
| **SP800-30** | Risk assessment guidance for decision makers |
| **SP800-37** | RMF guidelines; privacy and security best practices; top management responsibility |
| **SP800-39** | Integrated organisational risk management; structured and flexible approach |
| **SP800-14** | Common security principles; policies; readiness benchmarks |

---

## 5. Case Study — Which Framework for a Small Healthcare Organisation?

### The Three Options Compared

| Option | Type | Voluntary? | Healthcare-specific? |
|--------|------|------------|----------------------|
| **NIST CSF** | Cybersecurity framework | Yes — voluntary | No — but official HIPAA mapping exists |
| **ISO/IEC 27000** | Information security standard | Mostly voluntary | No — general purpose |
| **HIPAA** | US federal law / regulation | No — legally mandatory | Yes — built specifically for healthcare |

### HIPAA — Legal Baseline, Not a Strategy

HIPAA is not a choice — for qualifying US healthcare organisations it is a **legal requirement**. Its Security Rule mandates administrative, physical, and technical safeguards for electronic Protected Health Information (ePHI).

**Limitations:** HIPAA is a *regulatory floor*, not a comprehensive security programme. It defines *what* must be protected but is largely silent on *how* to build resilience. It was last significantly updated in **2013** and does not address modern threats such as ransomware or supply chain attacks.

### ISO/IEC 27001 — International Standard, Disproportionate for Small Orgs

- Internationally recognised; systematic risk-based approach
- **Limitation:** Resource-intensive — implementing and maintaining certification requires significant investment in time, expertise, and money; typically better suited to medium-to-large organisations
- Does not directly address healthcare data regulations or ePHI

### NIST CSF — Recommended for Small Healthcare Organisations

**Strengths:**
- **Free** — no certification cost or licensing fee
- **Flexible and scalable** — adopt incrementally, starting with critical gaps
- **HIPAA crosswalk** — NIST has published an official mapping from CSF to the HIPAA Security Rule; adopting NIST CSF *accelerates* HIPAA compliance
- **Gap analysis tool** — surfaces shortfalls in existing security practices
- **Risk-prioritised** — allows resource-constrained organisations to focus on highest-risk areas first
- **Covers Recover function** — critical given healthcare is the most targeted sector for ransomware

### Recommendation Summary

| Criterion | NIST CSF | ISO/IEC 27000 | HIPAA |
|-----------|----------|---------------|-------|
| Cost to adopt | Free | High (cert costs) | Mandatory (no choice) |
| Suitable for small org | Yes | Difficult | N/A |
| Healthcare-specific | Indirectly (official mapping) | No | Yes |
| Legal requirement (US) | No | No | Yes |
| Improvement methodology | Yes | Requires framework too | No |
| Gap analysis capability | Yes | Limited | No |
| Best use | Building & improving security programme | Certification & international compliance | Regulatory baseline |

> **Conclusion:** HIPAA sets the floor; NIST CSF builds the ceiling. For a small healthcare organisation, use NIST CSF as the *implementation methodology* for HIPAA obligations. ISO/IEC 27001 can be pursued later as the organisation grows.

---

## 6. Cybersecurity Standards vs. Internal Policies

### Standards — External Best Practices

Cybersecurity **standards** are:
- Developed by **formal external bodies** (ISO, NIST, BSI)
- Used to **measure compliance, maturity, or benchmarking**
- A model for building effective security controls
- Not always mandatory but widely adopted to demonstrate commitment

Common standards: ISO/IEC 27001, NIST CSF, PCI DSS, GDPR (regulation, not technically a standard)

### Policies — Internal Rules and Procedures

Cybersecurity **policies** are:
- Created **internally** by the organisation
- Specific, operational, and **enforceable** rules
- Ensure staff and systems align with broader external standards
- Must be clearly communicated to all employees and regularly updated

> **Standards guide the structure. Policies control the behaviour.**

### Common Types of Internal Cybersecurity Policies

| Policy | Purpose |
|--------|---------|
| **Acceptable Use Policy (AUP)** | Defines what staff can and cannot do on company systems |
| **Access Control Policy** | Details how access to systems and data is granted |
| **Data Classification Policy** | Outlines how data is labelled based on sensitivity |
| **Incident Response Policy** | Explains what to do if a breach occurs |
| **BYOD Policy** | Sets expectations for employees using personal devices for work |
| **Password Policy** | Ensures strong, secure authentication practices |

### Why Both Matter

Standards and policies together:
- Create structure and protect data
- Define responsibility at every level
- Reduce the risk of errors, insider threats, and legal trouble
- Prove to regulators and customers that the organisation is serious about security

---

## 7. Benefits of Implementing Cybersecurity Standards

Implementing cybersecurity standards provides:
1. Saving time
2. Decreasing costs
3. Increasing profits
4. Improving user awareness
5. Minimising risks
6. Offering business continuity
7. Facilitating compliance with industry best practices
8. Ability to compare security systems on an international level

---

## 8. Key Literature Findings (Taherdoost, 2022)

| Finding | Implication |
|---------|------------|
| No single standard guarantees complete security (e.g. smart grids) | Combination of standards often needed |
| The main security challenge in organisations is *application by people* (Fumy, 2004) | Training is the most critical non-technical control |
| ISO/IEC 27001 can address insider threats via PDCA cycle and access controls (Humphreys) | 27001 is effective for people-based risks, not just technical ones |
| PCI DSS and ISO 17799 have similar aims but different scope (Rowlingson & Winsborrow) | Industry-specific standards and general standards are not interchangeable |
| BS-7799, ISO-17799, ISO-27001, and COBIT are the most popular frameworks/standards (Broderick) | These four form the de facto baseline of the field |
| ISO 27500 and ISO 31000 complement each other but make no explicit cross-reference (Everett) | Integration across ISO standards requires manual alignment effort |

---

## 9. Key Themes

| Theme | Core Insight |
|-------|-------------|
| **GRC as a unified system** | Governance, risk, and compliance are interdependent — weakness in one undermines the others |
| **Standards ≠ frameworks** | Standards prescribe what; frameworks guide how — both are needed |
| **No single standard is sufficient** | Organisations typically need a combination tailored to their sector and size |
| **Human factor in compliance** | The biggest implementation challenge is people, not technology — training is essential |
| **Proportionality** | Framework/standard choice must match organisational size and resources — ISO 27001 may be excessive for small organisations |
| **NIST CSF as integrator** | The CSF can organise compliance with multiple standards (including HIPAA) under one structure |
| **Standards vs. policies** | External standards define the target; internal policies define the behaviour that achieves it |
| **COBIT for governance** | Best when the priority is IT governance breadth; not suitable when specific security controls are the first need |
| **Compliance ≠ security** | Meeting HIPAA (or any regulatory floor) does not guarantee a resilient security posture — structured improvement frameworks are also required |
