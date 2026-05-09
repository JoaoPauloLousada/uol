# Study Guide: Understanding Cybersecurity Frameworks and Information Security Standards
**Taherdoost, H., Electronics 2022, 11, 2181**

---

## Part 1: Key Topics Summary

---

### 1. Core Definitions

- **Standard**: An ideal condition with a minimum achievement limit; technical specifications required to be applied to enable maximum function, purpose, or profit. Standards are documents or rules made based on general agreement and validated by a legal entity.
- **Cybersecurity standard**: Sets of practices or technical methods that help organisations secure their cyber environment; cover security features in applications and cryptographic algorithms, providing perspective toward security controls, processes, procedures, guidelines, and baselines.
- **Cybersecurity framework (CSF)**: A general guideline covering many components or domains in organisations; does NOT specify the exact steps to be taken; provides a general structure and methodology for protecting critical digital assets.

**Key distinction**: Standards explain and provide methods one by one, specifying *what is expected* to complete a process. A framework is a general guideline that describes scope, implementation, and evaluation, offering *suggested* guidelines that can be adopted in full or in part.

---

### 2. Standards vs. Frameworks — Side-by-Side (Table 1)

| Dimension | Standard | Framework |
|-----------|----------|-----------|
| **Nature** | Documents that determine procedures, specifications, and guidelines for safety, reliability, and consistency | General guidelines covering a wide range of domains and components |
| **Prescriptiveness** | Specifies exactly what must be done (methods one by one) | Does not specify exact steps; flexible adoption |
| **Origin** | Can be developed by a company, country, or standards body | Developed by academic institutions, international organizations, countries, corporations |
| **Flexibility** | Some are open (all organisations); others are closed (specific industries) | Can use some parts or the entire model as needed |
| **Goal** | Compliance with legal/regulatory provisions | Determines quality standards to be achieved; defines scope and evaluation |
| **Cost** | Can be costly to implement and certify | Implementation costs can be reduced due to flexibility |
| **Standards vs. frameworks relationship** | Requires a framework to be effectively implemented | Guides organisations on how to implement standards |

> **Critical insight**: *Effective implementation of cybersecurity standards is not possible without the relevant cybersecurity framework.* Standards and frameworks work together — frameworks guide HOW to implement the WHAT that standards define.

---

### 3. Two Main Categories of Cybersecurity Standards/Frameworks

**Information Security Standards** (Figure 1)
- ISO 27000 series
- ISF Standard of Good Practice (SoGP)
- BSI IT-Grundschutz
- Industry Related: IEC 62443, ISO/SAE 21434, ETSI EN 303 645, FIPS 140-2

**Information Security Frameworks** (Figure 3)
- NIST SP800 series (including CSF, RMF, Privacy Framework, SP800-12/30/37/39/53/14)
- COBIT

---

### 4. Cybersecurity Standards — ISO/IEC 27000 Series

**Published by**: International Organization for Standardization (ISO) and International Electro Technical Commission (IEC).
**Origin**: Initially recognized as BS7799, then introduced as ISO/ISMS standards.
**Focus**: Security in Information Systems Management (ISM).
**Key concern**: ISO 27000 series has NOT been shown to successfully work as a complete ISM solution to be integrated into larger systems.

#### 4.1 ISO/IEC 27001:2013
- Internationally recognized; determines requirements to implement a certified **Information Security Management System (ISMS)**
- Built on **7 key elements**: specifications for installation, performance, operation, controlling and monitoring, review, maintenance, and improvement
- Main approach: **risk-based** (stressing risk approaches to accomplish managerial and organisational objectives)
- Used alongside ISO 27002 (which provides the specific controls)
- Helps organisations: manage and protect employee/client information, manage information risks, protect and develop brands
- Can address **insider threats** in organisations of all sizes via PDCA cycle, access controls, separation of duties, training, mobile device controls

#### 4.2 ISO/IEC 27002:2013
- **Code of practice** for information security controls
- Lists a structured series of controls to comply with ISO 27001
- Controls not listed are NOT mandatory
- Best practice areas include:
  - Managing assets
  - Securing human resources
  - Managing operations and communications
  - Physical and environmental aspects
  - Business continuity
  - Compliance and information security incident management

#### 4.3 ISO/IEC 27005:2018
- Guidelines for **risk-based implementation** of cyber security risk management
- Supports concepts in ISO 27001; builds on ISO 27002 knowledge
- **7-element risk management process**: (1) installation of context, (2) assessing risk, (3) treating risk, (4) accepting risk, (5) communicating risk, (6) consulting risk, (7) monitoring and reviewing risk
- Can implement a satisfactory risk-based information system in organisations of different sizes and sectors

#### 4.4 ISO/IEC 27006:2015
- Determines formal processes and requirements for **third-party bodies** that provide ISMS auditing and certification services
- Helps certification bodies be recognised as trustworthy and reliable

#### 4.5 Other notable ISO/IEC 27000 standards
| Standard | Focus |
|----------|-------|
| ISO/IEC 27000:2018 | Overview and vocabulary |
| ISO/IEC 27003:2017 | Guidance for information security management systems |
| ISO/IEC 27004:2016 | Monitoring, measurement, analysis, and evaluation |
| ISO/IEC 27007:2017 | Guidance for auditing |
| ISO/IEC 27013:2015 | Integrated implementation of ISO 27001 and ISO 20000-1 |
| ISO/IEC 27018:2019 | Protection of personally identifiable information in public clouds |
| ISO/IEC 27019:2017 | Information security controls for the energy utility industry |

---

### 5. ISF Standard of Good Practice (SoGP)

- **Initially published**: 1996 by the Information Security Forum (ISF)
- **ISF**: Non-profit, independent, international organisation (London HQ + NYC)
- **Revision cycle**: Every **two years** to cover the most recent best practices
- **Six major aspects**:
  1. Installing computers
  2. Application of critical business processes
  3. Managing security and networks
  4. Developing systems
  5. Securing the environment for the end user
  6. (Cross-cutting: user awareness and training)

---

### 6. BSI IT-Grundschutz

- **Published by**: German government agency — Bundesamt für Sicherheit in der Informationstechnik (BSI)
- **Focus**: Security of computers and communication for the German government; computer applications, cryptography, internet security, security products, test laboratories

| Standard | Focus |
|----------|-------|
| **BSI Standard 100-1** | Main requirements to implement ISMS; full conformity with ISO 27001 |
| **BSI Standard 100-2** | IT security management step-by-step; selecting appropriate measures; interprets ISO 27001, 27002, and 13335 with notes/examples |
| **BSI Standard 100-3** | Risk analysis based on IT-Grundschutz principles |

---

### 7. Industry-Related Standards

| Standard | Domain | Key Characteristics |
|----------|--------|---------------------|
| **IEC 62443** | Industrial automation and control systems (IACSs) | Established by ISA99 committee; adopted by IEC; covers processes, employees, countermeasures; not limited to technology sector |
| **ISO/SAE 21434** | Road vehicle cybersecurity | Covers production, operation, development, maintenance; addresses cybersecurity in engineering of electronic systems in vehicles |
| **ETSI EN 303 645** | IoT devices | Targets manufacturers/developers of IoT products; best practices and requirements for internet-connected products; focuses on organisational policies and technical controls for all IoT devices |
| **FIPS 140-2** | Cryptographic modules | Published by NIST; 4 security levels (lowest to highest); jointly developed by CSE (Canada) and NIST (USA); hardware and software requirements; accepted by US and Canadian federal agencies |

---

### 8. Cybersecurity Frameworks — COBIT

- **Developed by**: ISACA (Information Systems Audit and Control Association); founded **1967** in USA
- **Initially released**: **1996**
- **Nature**: High-level IT standard in a **governance and management** framework; concentrates on broad concepts of decision-making in IT management, NOT details
- **Structure**:
  - **34** main IT processes
  - Each process includes a series of high-level Detailed Control Objectives (**DCOs**) — total **318 DCOs**
  - Control objectives classified into **4 categories**: planning, implementing, supporting, and monitoring and evaluating
- **Best for**: Integrated governance solution across an entire organisation due to its broadness
- **NOT best for**: Cases where appropriate implementation of security controls is the first priority, because COBIT does NOT provide guidelines to achieve predefined control objectives

---

### 9. Cybersecurity Frameworks — NIST SP800 Series

- **NIST**: National Institute of Standards and Technology; non-regulatory federal agency under the US Department of Commerce; founded **1901**
- **SP800 group published**: **1990** (oldest publication in NIST's information security standards)
- **Initially for**: Federal information systems; later adopted by non-federal organisations
- **To use for national security systems**: Must get approval from the relevant federal authority

#### 9.1 NIST Cybersecurity Framework (CSF)
- Established after executive order by **President Obama in 2014**
- Updated by the **Cybersecurity Enhancement Act of 2014 (CEA)**
- Covers: identification and development of cybersecurity risk frameworks for **critical infrastructure** operators and owners
- Provides an **integrated organising structure** for different approaches in cybersecurity by collecting best practices, standards, and recommendations
- Can be used as a **foundation** for a new cybersecurity program or to improve an existing one
- Can point out **gaps** in an organisation's cybersecurity practices

#### 9.2 NIST Risk Management Framework (RMF)
- **7-step** process: preparing, categorising, selecting, implementing, assessing, authorising, monitoring
- Comprehensive, measurable, **repeatable** process
- Can also be employed in **IoT-based environments**

#### 9.3 NIST Privacy Framework
- **5 major functions**: identifying, governing, controlling, communicating, protecting
- Helps detect and respond to privacy concerns and establish innovative services
- Applicable to **IoT environments**

#### 9.4 Other NIST SP800 Standards

| Standard | Focus |
|----------|-------|
| **SP800-12** | Core principles of cybersecurity; role of computer security in supporting business mission; cost-effective security; accountability and responsibilities |
| **SP800-53** | Privacy and controls in information systems; threats including human error, hostile attacks, structural failures, natural disasters, foreign intelligence |
| **SP800-30** | Risk assessment guidance; understanding cyber risks for decision makers based on available resources and budget |
| **SP800-37** | Risk management framework guidelines for information systems; privacy and security risks best practices; responsibility at top management level |
| **SP800-39** | Managing information security risks integrated with organisational mission, operations, reputation; structured and flexible approach to assessing and monitoring risks |
| **SP800-14** | Common security principles; policies in cybersecurity; readiness of IT security solutions against cyber threats |

---

### 10. Literature Review Findings (Table 2 — 17 Papers, 2000–2022)

Key conclusions extracted from the 17-paper narrative review:

| Finding | Source/Context |
|---------|---------------|
| No single standard is sufficient to guarantee security for a smart grid; combination of standards needed | Smart grid studies |
| BS ISO/IEC 17799, BS7799, SSE-CMM, GASPP/GAISP are universal/generic standards applicable to all organisation types | Siponen and Willison |
| ISO/IEC 27001 effectively addresses insider threats via PDCA cycle, access controls, separation of duties, training | Humphreys |
| PCI DSS and ISO 17799 have similar aims but differ significantly in scope; PCI DSS applicable to a limited range; ISO17799 is general | Rowlingson and Winsborrow |
| The main security challenge in organisations is application by people — must be addressed by training | Fumy |
| BS-7799, ISO-17799, ISO-27001, and COBIT are the most popular information security frameworks/standards | Broderick |
| ISO 27500 and ISO 31000 complement each other but make no explicit reference to each other | Everett |
| CIMF (cybersecurity incident management framework) develops an integrated management mechanism to respond to threats | Srinivas et al. |
| Security, e-mail usage, internal networks, privacy, and software standards are most reviewed in US states | Gil-García |
| For electromagnetic shielding emission security: MIL STD 285 and IEEE-299-2006 are appropriate standards | Breda and Kiss |

---

### 11. Benefits of Implementing Cybersecurity Standards

Implementing cybersecurity standards provides:
1. Saving time
2. Decreasing costs
3. Increasing profits
4. Improving user awareness
5. Minimising risks
6. Offering business continuity
7. Facilitating compliance to industry best practices
8. Ability to compare security systems on an international level

---

## Part 2: Answering Your Specific Questions

---

### Question A: What are the key differences between a cybersecurity framework and a standard, and why might an organisation choose one over the other?

**Key differences** (from Table 1 and throughout the article):

A **standard** is a prescriptive document that defines specific requirements, procedures, and guidelines — it specifies *exactly* what must be done and provides methods step-by-step. Standards can be open (all organisations) or closed (specific industries), and some are mandatory for legal/regulatory compliance or certification (e.g., ISO 27001 certification, PCI DSS for payment card handling). Standards are controlled by external stakeholders and auditors.

A **framework** is a flexible, general-purpose guideline covering many domains and components. It does NOT prescribe specific steps — instead it describes scope, defines evaluation criteria, and summarises objectives. Organisations can adopt all or part of it. Frameworks guide HOW to implement standards; without a framework, effective implementation of a standard is not possible.

**Why choose a standard:**
- You need a formal **certification** (e.g., ISO/IEC 27001 ISMS certification)
- You operate in a **regulated industry** where compliance is legally required (e.g., PCI DSS for payment cards, FIPS 140-2 for US/Canadian federal systems)
- You need **externally verifiable, auditable** requirements
- You want **specific, measurable** security controls
- You need to demonstrate compliance to customers, partners, or regulators

**Why choose a framework:**
- You want **flexibility** to adopt only the parts relevant to your organisation
- You want to **reduce implementation costs** (frameworks allow partial adoption)
- You need a **broad, organisation-wide** governance model (e.g., COBIT for IT governance)
- You want to **identify gaps** in your existing cybersecurity program (e.g., NIST CSF)
- You are building a **new** cybersecurity program and need a foundation
- You operate in a sector where frameworks are **encouraged by regulators** but not legally mandated
- A single standard does not meet all your needs — a framework allows **combining** standards

**Important caveat**: In some cases, one approach alone is insufficient. The article states that in some cases "employment of a single standard does not suffice to meet expectations," and that standards and frameworks are complementary — frameworks guide the implementation of standards.

---

### Question B: How do frameworks like NIST or ISO/IEC 27000 help organisations translate broad security goals into practical controls and processes?

**The translation mechanism**:

Broad security goals (e.g., "protect our data," "manage risk") are abstract. Standards and frameworks provide the structures to make them operational:

**ISO/IEC 27000 — Translation Path:**
1. **ISO 27001** defines the *requirement* to implement an ISMS — turning the goal of "managing information security" into 7 documented, auditable elements: installation, performance, operation, monitoring, review, maintenance, and improvement.
2. **ISO 27002** turns those requirements into *specific controls* across domains (asset management, human resources security, operations, physical security, business continuity, compliance). Each control is a practical action an organisation can implement.
3. **ISO 27005** translates the goal of "managing risk" into a *7-step operational process*: install context → assess risk → treat risk → accept risk → communicate risk → consult risk → monitor and review. This converts a vague aim into a repeatable workflow.
4. **ISO 27006** ensures that the entire process can be *externally verified*, translating internal implementation into certifiable, trustworthy proof of compliance.

The article notes that ISO 27001 specifically turns cybersecurity policies into **measurable actions**: "by relying on cybersecurity standards, an organisation can turn its cybersecurity policies into measurable actions."

**NIST — Translation Path:**
1. **NIST CSF** takes the broad goal of "improving cybersecurity" and provides an *integrated organising structure* drawn from best practices, standards, and recommendations. It expresses cybersecurity requirements in a way that can identify *gaps* — bridging from aspiration to visible shortfall.
2. **NIST RMF** translates risk management goals into a *7-step, repeatable, measurable process* (prepare → categorise → select → implement → assess → authorise → monitor). Each step has defined inputs, outputs, and responsibilities.
3. **NIST SP800-53** translates the broad goal of "controlling threats" into specific *privacy and security controls* covering threats as diverse as human error, hostile attacks, structural failures, natural disasters, and foreign intelligence.
4. **NIST SP800-30** translates "understanding risk" into *risk assessment plans* that decision makers can use to make smart resource and budget decisions.
5. **NIST SP800-14** translates cybersecurity principles into *policies* and *readiness benchmarks*, ensuring organisations can evaluate whether their IT security solutions are prepared for real threats.

**COBIT — Translation Path:**
COBIT translates governance goals into **34 IT processes**, each with its own set of **318 Detailed Control Objectives (DCOs)**, organised into 4 operational categories (plan, implement, support, monitor). This creates a comprehensive, top-down map from strategic intent to implementable controls.

**Summary**: Both NIST and ISO/IEC 27000 work through the same principle — they decompose abstract security goals into structured, layered hierarchies of processes, controls, and evaluation criteria. Each layer is more specific than the last, until the organisation reaches actionable, auditable steps. The key mechanisms are: risk-based approaches (turning threats into manageable processes), control frameworks (mapping goals to specific technical/administrative actions), and maturity/assessment models (enabling organisations to measure progress).

---

## Part 3: Exam Practice Questions

---

### Section A: Definitions and Distinctions

**Q1.** How does the article define a cybersecurity standard, and how is it different from a cybersecurity framework?

> **Answer:** A cybersecurity standard is a set of practices or technical methods that help organisations secure their cyber environment; it specifies requirements, procedures, and guidelines, explaining methods one by one and clarifying exactly what is expected. A cybersecurity framework is a general guideline covering many components or domains that does NOT specify the exact steps to be taken. Standards are prescriptive and compliance-focused; frameworks are flexible and guidance-focused. Effective implementation of standards is not possible without a relevant framework — they are complementary.

---

**Q2.** What are the two main categories of cybersecurity standards and frameworks covered in this article?

> **Answer:**
> - **Information Security Standards**: ISO 27000 series, ISF Standard of Good Practice (SoGP), BSI IT-Grundschutz, and Industry Related standards (IEC 62443, ISO/SAE 21434, ETSI EN 303 645, FIPS 140-2)
> - **Information Security Frameworks**: NIST SP800 series (including CSF, RMF, Privacy Framework, and various SP800 documents) and COBIT

---

**Q3.** Why might an organisation need to use more than one standard?

> **Answer:** The article states that "employment of a single standard does not suffice to meet expectations of a business" in some cases. Different standards cover different aspects or industries — for example, studies on smart grids found no single standard guarantees complete security, requiring combinations. Additionally, organisations may need one standard for general ISMS certification (ISO 27001), another for specific controls (ISO 27002), and another for risk management (ISO 27005).

---

**Q4.** What is the difference between an "open" and a "closed" standard?

> **Answer:** An "open" standard is available to all types of businesses and government organisations (e.g., ISO 17799). A "closed" standard is applicable only to certain industries or businesses (e.g., PCI DSS for the payment card industry). Some standards can also be developed as proprietary or local regulatory standards for a specific country or company.

---

### Section B: ISO/IEC 27000 Series

**Q5.** What is ISO/IEC 27001 and what are its 7 key elements?

> **Answer:** ISO/IEC 27001 is an internationally recognised standard that determines requirements to implement a certified Information Security Management System (ISMS). Its 7 key elements are: (1) specifications for installation, (2) performance, (3) operation, (4) controlling and monitoring, (5) review, (6) maintenance, and (7) improvement of the system. Its main approach is through stressing risk-based methods to accomplish managerial and organisational objectives.

---

**Q6.** What is the relationship between ISO/IEC 27001 and ISO/IEC 27002?

> **Answer:** ISO/IEC 27001 defines the *requirements* for an ISMS but does NOT list specific security controls. ISO/IEC 27002 is the *code of practice* that provides a structured list of security controls designed to help organisations comply with ISO 27001. Security controls not specifically listed in ISO 27002 are NOT mandatory. They are commonly used together: 27001 provides the "what must be achieved" and 27002 provides the "specific controls to achieve it."

---

**Q7.** What are the 7 elements of the risk management process in ISO/IEC 27005?

> **Answer:** (1) Installation of context, (2) assessing risk, (3) treating risk, (4) accepting risk, (5) communicating risk, (6) consulting risk, and (7) monitoring and reviewing risk.

---

**Q8.** What is the purpose of ISO/IEC 27006?

> **Answer:** ISO/IEC 27006 determines the formal processes and requirements that should be respected by third-party bodies that provide information security auditing and certifying services for other organisations. Employing ISO/IEC 27006 helps certification bodies be recognised as trustworthy and reliable organisations to operate ISMS certification.

---

**Q9.** When was the ISO/IEC 27001 standard first published, and what was it originally known as?

> **Answer:** The first series of ISO/IEC 27000 standards (ISO 27001) dates back to **2005**. The family was initially recognised as **BS7799** before being introduced as ISO/ISMS standards.

---

### Section C: Other Standards

**Q10.** What is the ISF Standard of Good Practice (SoGP) and what are its six major aspects?

> **Answer:** The SoGP was initially published in **1996** by the Information Security Forum (ISF), a non-profit international organisation. It is revised every **two years**. Its six major aspects are: (1) installing computers, (2) application of critical business processes, (3) managing security and networks, (4) developing systems, (5) securing the environment for the end user, and (6) user awareness.

---

**Q11.** What are the three BSI IT-Grundschutz standards and what does each cover?

> **Answer:**
> - **BSI Standard 100-1**: Main requirements for implementing ISMS; full conformity with ISO 27001
> - **BSI Standard 100-2**: IT security management step-by-step; selection of appropriate measures; interprets ISO 27001, 27002, and 13335 using notes and examples
> - **BSI Standard 100-3**: Risk analysis conducted based on IT-Grundschutz principles

---

**Q12.** What is FIPS 140-2 and what are its four security levels?

> **Answer:** FIPS 140-2 (Federal Information Processing Standards) was initially published by NIST. It specifies hardware and software requirements to protect cryptography modules (which include valuable information requiring integrity and confidentiality). It defines **4 security levels** from lowest to highest. It was jointly developed by the Canadian Communications Security Establishment (CSE) and NIST, and products meeting its requirements are accepted by US and Canadian federal agencies.

---

**Q13.** What is ETSI EN 303 645 and who does it target?

> **Answer:** ETSI EN 303 645 is a cybersecurity standard targeting all parties involved in manufacturing and developing **IoT devices and appliances**. It collects best practices and requirements for internet-connected products and appliances to ensure consumer data security. Its main focus is establishing organisational policies and technical controls applicable to all IoT devices.

---

**Q14.** What is IEC 62443 and what makes it distinctive?

> **Answer:** IEC 62443 is an international series of cybersecurity standards for **industrial automation and control systems (IACSs)**. Initially established by the ISA99 committee and adopted by IEC, it addresses current and future cybersecurity concerns in industrial automation. Distinctively, it is not limited to the technology sector — it also considers mitigating cyber threats regarding processes, employees, and countermeasures.

---

### Section D: Cybersecurity Frameworks

**Q15.** What is COBIT, who developed it, and when was it released?

> **Answer:** COBIT (Control Objectives for Information and Related Technologies) is a high-level information technology standard in a governance and management framework. It was developed by **ISACA** (Information Systems Audit and Control Association), an organisation founded in **1967** in the USA. It was initially released in **1996** to help users and decision makers in IT systems by developing authoritative IT control objectives.

---

**Q16.** Describe the structure of COBIT and its four categories of control objectives.

> **Answer:** COBIT includes **34 main IT processes**. Each IT process includes a series of high-level Detailed Control Objectives (DCOs) — a total of **318 DCOs** — plus broader control objectives (COs). These control objectives are classified into four categories: (1) **planning**, (2) **implementing**, (3) **supporting**, and (4) **monitoring and evaluating**.

---

**Q17.** When is COBIT the best choice, and when is it NOT the best choice?

> **Answer:** COBIT is the best choice when implemented as an **integrated governance solution** across an organisation, because of its breadth covering process, infrastructure, resource, responsibility, and control management. It is NOT the best choice when the appropriate implementation of specific security controls is the first priority, because COBIT does NOT provide guidelines to achieve predefined control objectives.

---

**Q18.** What triggered the creation of the NIST Cybersecurity Framework (CSF), and what is its primary use?

> **Answer:** The NIST CSF was established after an **executive order signed by President Obama in 2014**. NIST's role was further updated by the **Cybersecurity Enhancement Act of 2014 (CEA)**. Its primary purpose is to cover critical infrastructure operators and owners, providing an integrated organising structure for different cybersecurity approaches by collecting best practices, standards, and recommendations. It can serve as a foundation for a new cybersecurity program or improve an existing one, and it can point out gaps in an organisation's cybersecurity practices.

---

**Q19.** What are the 7 steps of the NIST Risk Management Framework (RMF)?

> **Answer:** (1) Preparing, (2) categorising, (3) selecting, (4) implementing, (5) assessing, (6) authorising, and (7) monitoring. This is designed to be a comprehensive, measurable, and repeatable process at different times.

---

**Q20.** What are the 5 major functions of the NIST Privacy Framework?

> **Answer:** (1) Identifying, (2) governing, (3) controlling, (4) communicating, and (5) protecting. It helps organisations detect and respond to privacy concerns and establish innovative services while considering individual privacy.

---

**Q21.** What is NIST SP800-12 and what topics does it cover?

> **Answer:** NIST SP800-12 covers the core principles of cybersecurity. It includes: the role of computer security in supporting the business mission, the importance of cost-effective security, clearly defining accountability and responsibilities, the role of system owners outside the organisation, the importance of an integrated/comprehensive approach, assessing security regularly, and the relationship between computer security and societal factors.

---

**Q22.** What is the difference between NIST SP800-30 and NIST SP800-39?

> **Answer:** **SP800-30** focuses specifically on providing guidance for developing **information systems risk assessment** plans, facilitating the understanding of cyber risks for decision makers so they can make smart decisions based on available resources and budget. **SP800-39** is broader — it guides organisations to develop an integrated program for managing information security risks in relation to the entire **organisational mission**, operations, reputation, functions, individuals, image, and assets. SP800-39 is not intended to replace other risk-related measures.

---

### Section E: Literature Review and Comparative Analysis

**Q23.** According to the literature review, what is the most significant challenge in implementing cybersecurity in organisations?

> **Answer:** According to Fumy (2004), "the main security challenge in organisations is its application by people, which should be addressed by training." Even technically sound security standards and frameworks are ineffective if the users and employees of the system are not adequately trained.

---

**Q24.** How do PCI DSS and ISO 17799 compare according to the article's literature review?

> **Answer:** According to Rowlingson and Winsborrow, although both PCI DSS and ISO 17799 have a lot in common in terms of aims and objectives, they differ significantly in scope. **ISO 17799 is a general standard** applicable to a wide range of organisations. **PCI DSS is applicable to a limited range** of information systems (specifically finance and banking for credit/debit/pre-paid cards issued by Discover, American Express, MasterCard, Visa, and JCB International). PCI DSS implication costs depend on the maturity of the systems and security processes within a system. Additionally, PCI DSS is not compulsory in the U.S., but market forces motivate compliance.

---

**Q25.** What conclusion did Broderick reach about the most popular information security frameworks and standards?

> **Answer:** Broderick concluded that **BS-7799, ISO-17799, ISO-27001, and COBIT** are recognised as the most popular information security frameworks and standards. Additionally, Broderick noted that ISO-17799:2005 does not include any guide to implement network physical isolation, only auditing network physical isolation.

---

**Q26.** What is CIMF and what is its main purpose?

> **Answer:** CIMF is the **Cybersecurity Incident Management Framework**. Analysed by Srinivas et al. (2019), its main purpose is to develop an **integrated management mechanism to respond to cyber threats and incidents**. It was discussed in the context of government cybersecurity regulations, standards, and architecture.

---

**Q27.** What did Humphreys conclude about ISO/IEC 27001 in relation to insider threats?

> **Answer:** Humphreys concluded that ISO/IEC 27001 can be employed in organisations of different sizes and natures to address the risks of insider threats. Specifically, following the management **PDCA cycle** and controls including training personnel regarding security, handling critical information, access controls, separation of duties, regular back-ups, social engineering awareness, and mobile device controls are recognised as major ISO 27001 controls to deal with insider threats.

---

**Q28.** What did Siponen and Willison conclude about BS ISO/IEC 17799, BS7799, SSE-CMM, and GASPP/GAISP?

> **Answer:** These standards are **universal or generic** in scope — they do NOT consider the special requirements of different industries. This means they can be employed in organisations of different sizes and natures, making them broadly applicable but potentially insufficient for industry-specific requirements.

---

### Section F: Application and Critical Thinking

**Q29.** An organisation wants to become certified for information security management. Which standard should they pursue, and what would they also need?

> **Answer:** They should pursue **ISO/IEC 27001** certification, as it is the internationally recognised standard for implementing a certified ISMS. They would also need **ISO/IEC 27002** to identify the specific security controls required to achieve and demonstrate compliance, since ISO 27001 does not list specific controls by itself. For risk management, they would benefit from **ISO/IEC 27005**. For implementation guidance, a framework like the **NIST CSF** or **BSI 100-2** would help guide the practical steps.

---

**Q30.** Why might an organisation in the payment card industry need a different standard than one implementing general ISMS?

> **Answer:** The payment card industry has specific requirements covered by **PCI DSS** (Payment Card Industry Data Security Standard), which applies to credit, debit, and pre-paid cards issued by Discover, American Express, MasterCard, Visa, and JCB International. While ISO 17799 is general and applicable to all organisations, PCI DSS is specifically designed for the limited range of systems handling payment cards. The article notes that ISO is "almost mandatory" in the retail industry and its absence will lead to penalty, while PCI DSS, though not compulsory in the US, is strongly motivated by market forces.

---

**Q31.** What benefits does implementing cybersecurity standards provide according to the article?

> **Answer:** The article lists: (1) saving time, (2) decreasing costs, (3) increasing profits, (4) improving user awareness, (5) minimising risks, (6) offering business continuity, (7) facilitating compliance with industry best practices and procedures, and (8) providing the opportunity to compare a security system on an international level.

---

**Q32.** According to the article's conclusions, can one standard always meet all of an organisation's security needs?

> **Answer:** No. The article concludes that "in some cases, the application of one standard may not fulfill all the demands of an organisation, and it may be necessary to employ a combination of standards in order to ensure security against cyber threats and data loss." This was especially evident in studies of smart grids, where no single standard was found sufficient. However, some standards like ISO 17799 are applicable to all types of organisations regardless of size and type.

---

**Q33.** NIST SP800 was initially developed for federal information systems. What restriction applies when using it for national security systems?

> **Answer:** To employ NIST SP800 publications for national security systems, it is **mandatory to get approval from the relevant federal authority**. The series was initially developed to address privacy and security requirements in federal information systems, but was later also used by non-federal organisations.

---

**Q34.** What is the timeline of key cybersecurity standard/framework releases covered in this article?

> **Answer:**
> - **2001**: FIPS 140-2
> - **2004**: BSI Standard 100-3
> - **2005**: BSI Standards 100-1 and 100-2; ISO/IEC 27001 (first in the 27000 series)
> - **2009**: IEC 62443
> - **2011**: SoGP (though originally 1996; as a reference year for major revision)
> - **2013**: ISO/IEC 27001:2013 and ISO/IEC 27002:2013 (major revisions)
> - **2014**: NIST CSF (following President Obama's executive order)
> - **2015**: ISO/IEC 27006:2015, ISO/IEC 27007:2015
> - **2018**: ISO/IEC 27005:2018
> - **2020**: ETSI EN 303 645
> - **2021**: ISO/SAE 21434

---

*End of Study Guide*

> **Exam tip:** This article's core testable knowledge clusters around: (1) the standard vs. framework distinction and when to use each; (2) the ISO 27000 series and what each numbered standard does; (3) the NIST framework ecosystem (CSF, RMF, SP800 variants); (4) COBIT's governance structure; and (5) the conclusion that no single standard is universally sufficient and combinations are often needed. The two specific questions your course raises — standard vs. framework differences, and how NIST/ISO translate goals into controls — are answered directly in Part 2 of this guide.
