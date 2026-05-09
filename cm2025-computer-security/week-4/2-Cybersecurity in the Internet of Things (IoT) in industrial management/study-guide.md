# Study Guide: Cybersecurity in the Internet of Things in Industrial Management
**Raimundo, R.J.; Rosário, A.T. — Applied Sciences, 2022, 12, 1598**

---

## Part 1: Key Topics Summary

---

### 1. Core Definitions

#### 1.1 Internet of Things (IoT)
- A new paradigm integrating the digital and physical universes into a single system
- A **network of machines and devices** capable of communicating and collaborating, driving new processes
- Can be described as the **management of a network of devices, home appliances, and vehicles** linked to the Internet through sensors
- Challenging due to the **dynamic nature of linkages** between devices, actors, and resource constraints involving hardware, software, sensors, and connectivity
- At its core: the **"smart factory"** — comprising person, process, intelligent object, and technological ecosystem
- Related domains: smart homes, smart cities, smart grids, transportation, healthcare, manufacturing

#### 1.2 Industrial Internet of Things (IIoT) / Industry 4.0
- The IIoT operates in **industrial environments**; the general IoT operates in domestic environments
- IIoT equals **Industry 4.0** — a shared term for technologies and theories of value chain organisation
- Industry 4.0 presents a **modular structure** through which computers monitor and manage smart factories and physical processes, creating a **digital copy of physical processes** while making decentralised decisions
- Computer systems interact with one another and with people
- Major concerns: reducing material/energy consumption, managing supply chains, intrusion detection, cloud computing, managing infrastructure complexity (number of entry points)
- Closely linked to **cloud computing, blockchain, and big data analytics**

#### 1.3 Cybersecurity
- Concerned with **protection of electronics, software, and data**, along with procedures by which systems are accessed
- Primary concern relies on **intrusion detection**: monitoring physical or cloud computer activities through analysis of system vulnerabilities and activity patterns
- Attack forms include: DDoS, malicious IPs, data manipulation
- Outcomes of attacks: loss of information, operational losses, health damage

#### 1.4 IIoT Security — Five Core Properties

| Property | Definition |
|----------|-----------|
| **Integrity** | Data protected from modification by unauthorised parties |
| **Authentication** | Data source verified as the pretended identity |
| **Privacy** | Users' identities are non-traceable from their behaviours |
| **Confidentiality** | Information made unintelligible to unauthorised entities |
| **Availability** | System services available only to legitimate users |

---

### 2. Why Traditional Security Does Not Fit IoT

Traditional security models were designed for controlled environments. IoT introduces several structural mismatches:

| Challenge | Explanation |
|-----------|-------------|
| **Distributed environments** | Applications operate across blockchain-type distributed architectures |
| **Varied smart objects** | Heterogeneous devices with different capabilities and protocols |
| **Limited machine resources** | Sensors have sparse computational resources and power constraints |
| **Scale** | Billions of connected devices create an enormous attack surface |
| **Authentication gap** | Demands substantial improvement in authentication from remote systems |
| **Encryption gap** | New sensors require encryption mechanisms not present in legacy designs |
| **Web interface exposure** | Intrusion detection requires web interface and software coverage not covered by traditional security |

> Security for smart homes must protect sensor identities from wireless communication environment networks, while keeping software up to date from trustworthy vendors and cloud providers.

---

### 3. Methodology — LRSB (Systematic Review of Bibliometric Literature)

The article uses a **Systematic Review of Bibliometric Literature (LRSB)**, a qualitative approach that analyses and synthesises documents to expand usable knowledge in decision-making strategies.

#### 3.1 Three Phases and Six Steps

| Phase | Step | Description |
|-------|------|-------------|
| **Exploration** | Step 1 | Problem of research |
| | Step 2 | Search of appropriate literature |
| | Step 3 | Critical precision of the chosen studies |
| | Step 4 | Synthesis of data from individual sources |
| **Interpretation** | Step 5 | Reports and recommendations |
| **Communication** | Step 6 | Presentation of the LRSB report |

#### 3.2 Screening Funnel (Table 2)

| Stage | Criteria | Publications |
|-------|----------|-------------|
| Meta-search | Keyword: "Cyber Security" | 15,748 |
| First inclusion | + keyword: "Internet of Things" | 1,316 |
| Second inclusion | + subject area: Business, Management, and Accounting | 60 |

- **Database**: Scopus (peer-reviewed, up to September 2021)
- **Period covered**: 2014–2021
- **Document types**: 28 conference papers, 24 articles, 4 reviews, 3 books, 1 book chapter/short survey
- **Limitation**: Only Scopus was used; other academic databases were excluded

#### 3.3 Bibliometric Findings
- Peak publication year: **2019** (15 documents in one year)
- Total citations (2014–2021): **568**; peak citations: **217 in 2020**
- H-index basis: 10 documents cited at least 10 times
- Most cited article: "Blockchain technology innovations" (155 citations) — TEMSCON 2017
- Most quoted journal: *International Journal of Information Management* (SJR 2.770, Q1, H-index 114)
- Citation growth: positive net growth, **R² of 80%** for the period

---

### 4. Five Main Discussion Themes

The article organises its findings around five interconnected thematic clusters:

---

#### 4.1 Theme 1 — Cybersecurity

- Focuses on securing data from **physical and cloud threats**
- Addresses cybersecurity threats to digital infrastructure as a concern for maintaining **business growth** amid changing SMAC (Social, Mobility, Analytics, Cloud) technologies and IoT
- Demands validation of new cybersecurity capabilities and focuses on **user susceptibility** to cyber-attack
- Identifies major threat drivers and emerging technologies (encryption, blockchain) that may impact defence and attack capabilities
- Key findings from literature:
  - Smart home systems are platforms for sensors and are exposed to **identity theft**
  - Automated power consumption units (smart systems in IoT-controlled environments) need securing
  - Reviews identify best practices, policies, and security frameworks across government, industry, civil society, and academia
  - Questions arise about whether **cybersecurity law is justified** (e.g., China's cybersecurity regime)
  - There is a recognised **gap in policy direction** and a lack of understanding of user values in IoT cybersecurity — policy has not been guided by key stakeholder values

---

#### 4.2 Theme 2 — Machine Learning

- ML is central to IIoT cybersecurity, particularly for **intrusion detection** and **threat intelligence**
- Key applications:
  - Intelligence for energy management and production systems in Industry 4.0
  - Feature selection and interpretation in ML workflows for **IoT network intrusion detection**
  - AI techniques for **recognising cyber-attacks** in internet-connected systems (smartphones, robotic factories)
  - Data mining approaches for **decision-making** when an incident appears
  - AI improving cyber countermeasures in business contexts
  - AI in disruptive technology strategy (IoT, Blockchain, cloud computing)
- Decision Trees are specifically highlighted for **network intrusion detection**
- Augmented reality (AR) connects real and virtual worlds to develop **industry 4.0 guidelines**

---

#### 4.3 Theme 3 — Internet of Things

- Extends to industry (IIoT) and network/cloud computing
- Literature highlights:
  - **Intrusion detection systems (IDS)** protect data and physical devices via AI (Decision Trees, ML models)
  - **Extended Risk-Based Approach** on Cloud and IoT for enterprise security
  - DDoS attacks on **power grids** and hacking of **industrial control systems (ICS)** are primary concerns
  - Supply chains benefit from **4.0 technologies** (big data, cloud, cybersecurity via improved communication)
  - **IoT device fingerprinting** via ML to unveil compromised IP addresses across geographical areas
  - Smart device growth = **corresponding growth in risks**
  - Lack of clarity on how IoT **public policy** should be developed in terms of stakeholder values
  - New paradigm needed: **proactive antifragility** for cyber defence in distributed, highly complex computing paradigms (e.g., Internet of Battle Things — IoBT)
  - Shift proposed: from "Internet of Things" → **"Internet of Intelligence (IoI)"** for autonomous decision-making
  - **5G and 6G** networks provide new opportunities but IoT systems will still retain the same energy-capacity weaknesses for hackers

---

#### 4.4 Theme 4 — Industry 4.0 / IIoT

- Industry 4.0 is the industrial deployment of IoT, AI, big data, and virtual/augmented reality
- Key literature findings:
  - Influence of critical technologies (AI, big data, AR) on the **circular economy** (recycling, waste reduction)
  - **E-finance** transformation through AI
  - Supply chain management–marketing integration (**SCM-M**)
  - **Oil and gas industry** threats: migration of sensitive business data to cloud platforms; decision-making and procedures exposed; increased entry points
  - Smart factory debate: ICT-based manufacturing must reduce costs/time while reducing security vulnerabilities
  - Securing **electro-energy platforms** as critical infrastructure
  - Need to keep up with technological paradigm shift while introducing measures to **prevent significant expected fatalities**
  - Industry Revolution 4.0 will have **economic, social, and political consequences** globally, including rising unemployment and social stratification

---

#### 4.5 Theme 5 — Blockchain and Cloud Computing

- Blockchain provides decentralised architecture for IoT security across sectors

| Blockchain Capability | Application |
|----------------------|-------------|
| Immutability of users and devices | Smart home cybersecurity support |
| Dynamic/immutable management of blocked malicious IPs | Multi-industry applications (healthcare, finance, government) |
| Privacy, security, non-repudiation of IoT systems | Large-scale sensor and device deployments |
| Scalable, decentralised end-to-end IoT systems | Distributed IIoT infrastructure |
| AI at gateway level | Detecting and classifying suspected activities |
| Blockchain + Cloud + ML | Higher education infrastructure, training opportunities |

- Cloud computing is highly correlated with Blockchain, particularly for preventing attacks on RF hardware, IoT firmware, and wireless protocols
- Smart cities rely on interconnected intelligent devices and public networks — cybersecurity becomes a **major concern** for communication infrastructures, cloud computing, smart health, and energy management
- **Supply chain security**: minimising risks of purchasing and disconnection of key machines from networks
- **5G and 6G** can provide novel communication networks infrastructure, but IoT systems will still have the same energy capacity for hackers to exploit

---

### 5. Key Threat Landscape by Sector

| Sector | Key Threats |
|--------|-------------|
| **Smart homes** | Identity theft, sensor identity spoofing, unauthorised access |
| **Smart cities** | DDoS, communication infrastructure attacks, smart health exposure |
| **Automotive/EVs** | EV battery stack vulnerabilities, CAN-Bus intrusion, network attacks |
| **Healthcare** | DDoS on hospital devices, patient data exposure, weak cyber defences |
| **Industrial/IIoT** | ICS hacking, PLC vulnerabilities, malicious insiders, supply chain attacks |
| **Energy/Smart grids** | Power grid DDoS, SCADA/ICS attacks, electro-energy platform vulnerabilities |
| **Finance/Banking** | E-finance threats, data migration to cloud, insider threats |
| **Unmanned systems** | Unmanned ship vulnerabilities, software radio signalling weaknesses |

---

### 6. Legal and Policy Landscape

- The article highlights a significant gap between the **existence of cybersecurity laws** and their **effectiveness** in protecting stakeholders
- **China's 2016 Cybersecurity Law**: significant impact on foreign technology firms and big data/smart city projects — raises questions about sovereignty, compliance burden, and competitive disadvantage
- **Weber and Studer (2016)** — "Cybersecurity in the Internet of Things: Legal aspects" (51 citations) — most cited legal paper in the review
- Key identified gaps:
  - **Lack of policy direction** in IoT cybersecurity
  - User values **misunderstood** by policy makers
  - Policy **not guided** by key stakeholder values
  - Unclear producer/consumer **liability** in smart devices
  - Changing legal environment in IoT regulatory context not keeping pace with technology
- Keyword clusters in the bibliometric map include: **"laws and legislation," "consumer rights," "information regulations"** — all connected to the cybersecurity/IoT network

---

### 7. Research Gaps and Future Directions

The article explicitly identifies the following as unresolved:

1. **Lack of effective IoT cyber risk management frameworks** — current frameworks insufficient for the full scope of IoT threats
2. **Policy direction gap** — IoT public policy not developed around stakeholder values
3. **Sensor network adequacy** — effective sensor networks needed to protect against malicious internal users and implanted malware
4. **Antifragility** — need for proactive (not just reactive) cyber defence paradigms, especially in distributed complex IIoT environments
5. **Next-generation network security** — 5G and 6G create new attack surfaces not yet fully addressed
6. **Effectiveness gap** in current IoT cyber risk solutions despite technological advances

---

## Part 2: Specific Topic Questions

---

### Topic A: How Legal Compliance Can Fall Short of Ethical Responsibility

**Full answer:**

The article surfaces a recurring tension throughout its literature review: legal compliance establishes a minimum threshold, but that threshold frequently falls below what ethical responsibility to users, citizens, and society would demand. Several dimensions of this gap emerge from the reviewed literature:

**1. The policy-values gap.**
The article explicitly states that there is "a lack of policy direction and a lack of understanding of user values related to cybersecurity in terms of the IoT, while policy has not been guided by key stakeholder values." This is the foundational problem: laws are written by legislators and regulators whose understanding of what IoT users actually value — privacy, autonomy, transparency — is demonstrably incomplete. Legal compliance with a poorly conceived law does not guarantee ethical treatment of users.

**2. The China example as a case study in compliance without protection.**
The article references the impact of China's 2016 Cybersecurity Law on foreign technology firms and big data projects in smart cities. A law can simultaneously be compliant with a sovereign government's requirements and ethically problematic in its effects: it may protect state interests at the expense of user privacy, impose selective compliance burdens on foreign firms, and be used to justify surveillance infrastructure that citizens did not consent to. Complying with the law is legally required; it is not the same as acting ethically toward the people whose data flows through the infrastructure.

**3. Producer and consumer liability in smart devices.**
The literature reviewed in the article (Nash, 2021) examines "the regulation of code and the role of producer and consumer liability in smart devices." Legal frameworks typically assign liability only when harm can be proven and traced. But ethical responsibility exists before harm occurs: manufacturers who ship IoT devices with default credentials, unpatched firmware, or data collection that users cannot meaningfully consent to are acting unethically even if no law currently prohibits it. The legal framework lags technology by years or decades; the ethical obligation does not.

**4. Data collection beyond the scope of disclosed purpose.**
IoT devices — particularly in industrial and smart city contexts — collect vast behavioural and operational data. Legal compliance with data protection laws (e.g., GDPR in Europe) requires disclosure and consent. But ethical responsibility goes further: it demands that data collected for one purpose (e.g., energy management) is not repurposed for employee monitoring, commercial profiling, or state surveillance without renewed, meaningful consent. The legal minimum (disclosure) does not exhaust the ethical obligation (genuine respect for autonomy).

**5. Healthcare as the most acute example.**
The article notes that "healthcare is currently a hot topic because there is an abundance of critical data, cyber defences are on average weak in hospitals, where patients' lives and trust are at risk." A hospital that meets minimum legal standards for data protection while running outdated, unpatched systems is legally compliant and ethically negligent simultaneously. The ethical obligation to protect patients — who cannot meaningfully opt out of hospital IT systems — goes beyond what any checklist compliance can guarantee.

**Summary principle:** Legal compliance answers the question "what must we not do?" Ethical responsibility answers "what should we do, regardless of what we are legally required to do?" In IoT and IIoT contexts, where technology outpaces regulation and where users have limited visibility into or control over the systems they depend on, this gap is not a theoretical concern — it is a structural feature of the regulatory environment.

---

### Topic B: Tensions Between User Privacy, Business Objectives, and Professional Obligations

**Full answer:**

The article's five IIoT security properties — integrity, authentication, **privacy**, confidentiality, and availability — establish privacy as a first-class security concern. But the broader literature reviewed reveals that privacy is also where the sharpest conflicts between user interests, business interests, and professional responsibilities emerge.

**Tension 1: Privacy vs. data-driven business value.**
Industry 4.0's business model depends on data. Smart factories, supply chains, smart cities, and e-commerce all generate value by collecting, processing, and acting on data about people, devices, and behaviours. The article emphasises that IoT "produces huge amounts of information that need to be protected and that is linked to varied security risks." But businesses have a direct financial incentive to collect as much data as possible — the more data, the better the ML models, the better the supply chain optimisation, the better the customer profiling. Privacy-by-design limits this data collection. From the business perspective, privacy is a **cost**; from the user's perspective, it is a **right**. The professional obligation is to mediate this tension rather than simply serve whichever interest is paying.

**Tension 2: Intrusion detection vs. privacy.**
Intrusion detection — the "primary concern" of IoT cybersecurity according to the article — operates by monitoring "physical or cloud computer activities through analysis of system vulnerabilities and **activity patterns**." ML-based IDS systems analyse user behaviour to detect anomalies. This is surveillance, even when its purpose is protective. In industrial environments, this means workers' activities are monitored to detect insider threats. The professional obligation (implement effective security) conflicts with the ethical obligation (respect worker privacy and not create panopticon-style workplaces). Monitoring everything to detect threats is technically effective but ethically problematic. The literature references work on "personality traits and cyber-attack victimisation" — which begins to psychologically profile users as a security measure, a deeply invasive approach.

**Tension 3: Blockchain immutability vs. the right to be forgotten.**
The article identifies Blockchain as a key technology for IIoT security — providing immutability, non-repudiation, and tamper-evident records. But Blockchain's core property — that data, once written, cannot be erased — directly conflicts with user rights like the EU's "right to be forgotten" (GDPR Article 17). Businesses that adopt Blockchain for security and auditability create a permanent record that users may have a legal right to have deleted. The professional obligation (implement best-practice security using immutable ledgers) creates a direct legal and ethical conflict with user privacy rights that no current technical standard fully resolves.

**Tension 4: Smart city infrastructure vs. citizen consent.**
The article discusses smart cities offering services such as "smart parking, environmental, waste, water, and traffic management." These systems necessarily collect location data, behavioural patterns, and infrastructure usage data about citizens — who cannot meaningfully opt out of public infrastructure. The business objective (efficient city management, commercial data monetisation by vendors) conflicts with the citizen's reasonable expectation that using a public road does not constitute consent to continuous surveillance. Professional IoT engineers have an obligation to design systems that collect only the minimum necessary data, but they operate within procurement frameworks set by governments and commercial clients whose interests may not align with that principle.

**Tension 5: Industrial automation and worker displacement.**
The article explicitly acknowledges that "the Industrial Revolution 4.0 will have economic, social, and political consequences at global level, leading to revolutionary changes in the intelligent processes of goods production and services, with associated rising unemployment and social stratification." The business objective of IIoT — maximising automation, reducing labour costs — directly conflicts with the professional ethical obligation not to engineer systems whose foreseeable consequences include significant social harm. This is a tension that cybersecurity professionals working in IIoT environments inherit: implementing systems that are secure is part of their professional obligation, but they are also implementing systems whose deployment context creates broader social harms.

**Summary:** The tensions are structural, not incidental. They cannot be resolved by better technical design alone — they require governance frameworks, ethical guidelines for professionals, and regulatory structures that give genuine weight to user and societal interests rather than treating privacy as a residual consideration after business and security objectives have been satisfied.

---

### Topic C: How This Article's Framework Complements Technical Standards like ISO 27001 or the NIST Cybersecurity Framework

**Full answer:**

This article is a literature review that maps the IIoT cybersecurity landscape across business, management, and accounting research. It does not propose a prescriptive framework in the way ISO 27001 or NIST CSF do. Its value for complementing those standards is precisely in what they leave underspecified: the **strategic, contextual, and emerging-technology dimensions** of IIoT security.

**1. ISO 27001 and the article — what each covers.**

ISO 27001 provides 114 controls in 14 categories designed to implement a certified ISMS. Its controls address information security generically: access management, cryptography, asset management, incident management, compliance. What it does not address:
- The specific security properties of IIoT systems (integrity, authentication, privacy, confidentiality, availability as understood in an industrial sensor-network context)
- Blockchain as a security architecture — ISO 27001 has no blockchain control
- ML/AI-based intrusion detection — ISO 27001 recommends monitoring but does not specify how in an AI-enabled IIoT context
- Autonomous device behaviour — ISO 27001 assumes human actors; IIoT involves devices making autonomous decisions
- 5G/6G network security challenges
- Supply chain cybersecurity from a digital-twin or smart factory perspective

The article maps all five of these areas and provides a literature base for organisations asking: "what do we do after ISO 27001 in an IIoT context?" It identifies Blockchain, ML, and cloud computing as the primary technology clusters that the existing literature has tested as IIoT security mechanisms — providing the practitioner context that ISO 27001 does not supply.

**2. NIST CSF and the article — what each covers.**

The NIST CSF provides five functions: Identify, Protect, Detect, Respond, Recover. These map well to IIoT contexts, but at a high level of abstraction. The article's thematic analysis provides concrete content for each function in an IIoT setting:
- **Identify**: The article maps IIoT threats by sector (smart homes, EVs, healthcare, energy, industrial) — providing the threat landscape needed to populate NIST's "Identify" function
- **Protect**: Blockchain for non-repudiation and immutable audit trails; ML for anomaly detection; encryption for sensors — all identified in the article's Blockchain/Cloud and ML themes
- **Detect**: Decision Tree-based intrusion detection, ML workflows for botnet detection, AI at gateway level — the article's ML theme directly addresses the technology choices for NIST's Detect function
- **Respond**: The article identifies the gap in cyber risk management frameworks and incident response for IIoT as an unresolved research area — pointing to where NIST CSF needs IIoT-specific supplements
- **Recover**: Business continuity in IIoT contexts (supply chain restoration, smart factory restart) is referenced in the Industry 4.0 theme as an emerging challenge

**3. The legal and policy dimension — a gap in both standards.**

Neither ISO 27001 nor NIST CSF addresses the **legal and policy compliance** dimension of IoT security. The article explicitly covers: China's cybersecurity law, producer/consumer liability in smart devices, IoT regulatory context, and the stakeholder values gap in public policy. Both technical standards assume a static, known regulatory environment — the article demonstrates that the regulatory environment for IIoT is dynamic, contested, and fragmented across jurisdictions. An organisation combining ISO 27001 compliance with the article's legal landscape analysis is better positioned to anticipate regulatory changes that will affect its security obligations.

**4. The strategic/management dimension — unique to this article.**

Both ISO 27001 and NIST CSF are technical standards used by security professionals. This article is published in *Applied Sciences* but reviewed in *Business, Management, and Accounting* journals — which means its primary contribution is to **management decision-making**, not technical implementation. It addresses:
- How organisations should adopt a cybersecurity strategy in the IIoT context
- How business growth objectives interact with cyber risk
- How Industry 4.0 economic consequences (unemployment, social stratification) create new threat actors and contexts
- How supply chain integration creates new attack surfaces

These are board-level and C-suite concerns that ISO 27001 and NIST CSF do not address — they assume the security program has already been given mandate and resources.

**5. A complementary relationship, not a replacement.**

The most accurate way to characterise the relationship is:
- ISO 27001 provides the **control framework** (what controls to implement, how to audit them)
- NIST CSF provides the **strategic risk management cycle** (how to identify, protect, detect, respond, recover)
- This article provides the **IIoT-specific threat intelligence and technology landscape** (what the real-world threats look like in industrial IoT contexts, which technologies the research community has validated as mitigations, and where the governance and policy gaps remain)

Organisations implementing ISO 27001 + NIST CSF in IIoT environments should use this article as a **gap analysis tool**: where their standard controls do not speak to IIoT-specific threats (Blockchain attacks, ML-evading intrusions, 5G/6G vulnerabilities, supply chain digital-twin attacks), the article's thematic mapping identifies both the threat and the candidate mitigation technologies from the research literature.

---

## Part 3: Exam Practice Questions

---

### Section A: Definitions and Concepts

**Q1.** How does the article define the IoT, and what are the five core security properties specific to IIoT?

> **Answer:** The IoT is described as a system where the Internet is linked to the physical world through sensors — a network of machines and devices capable of communicating and collaborating, driving new processes. The IoT integrates both domestic and industrial environments. The five core IIoT security properties are: (1) **Integrity** — data protected from modification by unauthorised parties; (2) **Authentication** — data source verified as the pretended identity; (3) **Privacy** — users' identities are non-traceable from their behaviours; (4) **Confidentiality** — information made unintelligible to unauthorised entities; (5) **Availability** — system services available only to legitimate users.

---

**Q2.** What is the IIoT and how does it relate to Industry 4.0?

> **Answer:** The Industrial Internet of Things (IIoT) is the deployment of IoT in industrial environments. IIoT equals Industry 4.0, which is a shared term for technologies and theories of value chain organisation. Industry 4.0 presents a modular structure through which computers monitor and manage smart factories and physical processes, creating a digital copy of physical processes while making decentralised decisions. Both IIoT and Industry 4.0 involve computers and humans interacting in industrial supply chains, optimised by data, Blockchain, cloud computing, and big data analytics. The IIoT also encompasses cybersecurity and IoT concerns: integrity, authentication, privacy, confidentiality, and availability.

---

**Q3.** Why does traditional security not fit IoT systems? Give four reasons.

> **Answer:** Any four of: (1) IoT applications operate in distributed environments such as Blockchain architectures, not controlled central networks; (2) varied smart objects with different capabilities and protocols cannot all be secured by uniform traditional methods; (3) sensors have sparse computational resources and power constraints, making it impossible to run traditional security software; (4) the vast number of connected devices creates an attack surface that traditional security cannot scale to; (5) traditional security assumes human-controlled access patterns — IoT devices often act autonomously with minimal human action; (6) authentication requirements from remote systems and encryption from new sensors are not addressed by legacy security designs.

---

**Q4.** What does the abbreviation SMAC stand for, and in which context does it appear in the article?

> **Answer:** SMAC stands for **Social, Mobility, Analytics, and Cloud**. It appears in the discussion of cybersecurity as a domain of changing technologies within which business growth must be maintained. The article describes cybersecurity as "a concern for the maintenance of business growth amidst a scenario of changing technologies for SMAC domains and the Internet of Things."

---

### Section B: Methodology

**Q5.** What is the LRSB methodology and what are its three phases and six steps?

> **Answer:** LRSB stands for **Systematic Review of Bibliometric Literature**. It is a qualitative approach that analyses and synthesises documents to build new knowledge in a research context. Its three phases and six steps are: **Exploration phase** — Step 1: problem of research; Step 2: search of appropriate literature; Step 3: critical precision of chosen studies; Step 4: synthesis of data from individual sources. **Interpretation phase** — Step 5: reports and recommendations. **Communication phase** — Step 6: presentation of the LRSB report.

---

**Q6.** How many articles were finally selected for analysis, and how did the screening process work?

> **Answer:** **60 articles** were finally selected. The screening process had four stages: (1) a meta-search on Scopus using the keyword "Cyber Security" yielded 15,748 documents; (2) adding the keyword "Internet of Things" reduced this to 1,316; (3) limiting to the subject area "Business, Management, and Accounting" reduced to 60; (4) tracking confirmed 60 publications up to September 2021. Of these 60, there were 28 conference papers, 24 articles, 4 reviews, 3 books, and 1 book chapter/short survey.

---

**Q7.** What was the most cited article in the review and what was its citation count?

> **Answer:** The most cited article was **"Blockchain technology innovations"**, published in the 2017 IEEE Technology and Engineering Management Society Conference (TEMSCON 2017) by Ahram et al. It accumulated **155 citations** across the 2014–2021 period. The most cited journal overall was the *International Journal of Information Management* with an SJR of 2.770, Q1 ranking, and H-index of 114.

---

**Q8.** What is the stated limitation of the methodology?

> **Answer:** The article acknowledges that "the study has the limitation of considering only the Scopus indexing database, excluding other scientific and academic indexing databases" such as Web of Science, IEEE Xplore, or Google Scholar. This means potentially relevant papers indexed only in other databases were not included in the review.

---

### Section C: The Five Discussion Themes

**Q9.** What is the central finding of the cybersecurity theme regarding policy and user values?

> **Answer:** The cybersecurity theme identifies a significant gap: there is "a lack of policy direction and a lack of understanding of user values related to cybersecurity in terms of the IoT, while policy has not been guided by key stakeholder values." This means that despite growing cybersecurity awareness and increasing legislation, the frameworks governing IoT cybersecurity are not being designed around what users actually value. The literature also examines whether cybersecurity law is justified, using China as an example of a country creating new cybersecurity regimes.

---

**Q10.** Describe three specific applications of machine learning in IIoT cybersecurity, as discussed in the article.

> **Answer:** Any three of: (1) **Intrusion detection in IoT networks** — ML workflows integrating feature selection and interpretation steps to detect anomalies in IoT network traffic; (2) **Decision Trees for network intrusion detection** — specifically highlighted as an approach for detecting malicious traffic; (3) **AI for recognising cyber-attacks** in internet-connected systems including smartphones and robotic factories; (4) **Data mining for incident decision-making** — AI improves cyber countermeasures using data mining approaches when an incident appears; (5) **IoT device fingerprinting** — building data-driven ML techniques to unveil compromised IP addresses across geographical areas; (6) **AI at gateway level** in Blockchain-enhanced IoT systems to detect and classify suspected activities.

---

**Q11.** What is "proactive antifragility" in the IoT context and why is it needed?

> **Answer:** Proactive antifragility is a new paradigm for cyber defence in the IoT, particularly in distributed highly complex computing paradigms beyond traditional cyber defence (e.g., the Internet of Battle Things — IoBT). Instead of simply being resilient (surviving attacks) or robust (resisting attacks), an antifragile system improves and adapts in response to attacks — it becomes stronger under stress. It is needed because IoT environments are increasingly distributed, heterogeneous, and dynamic, meaning that traditional perimeter-based or reactive security paradigms cannot cope with the variety and speed of novel threats. The article identifies this as one of the unresolved future research directions.

---

**Q12.** What does the article identify as Industry 4.0's broader social and economic consequences?

> **Answer:** The article states that "the Industrial Revolution 4.0 will have economic, social, and political consequences at global level, leading to revolutionary changes in the intelligent processes of goods production and services, with associated rising unemployment and social stratification." This means that while IIoT creates business efficiency and enables new business models, it also displaces workers through automation at scale, which creates new social risks. The article also notes that Industry 4.0 involves securing sensitive business data migrations to cloud platforms, especially in oil and gas industries, and that the number of entry points for organisations to defend against threats increases with each new digital integration.

---

**Q13.** List four ways Blockchain contributes to IIoT cybersecurity, according to the article.

> **Answer:** Any four of: (1) Immutability of users and devices — supporting smart ecosystem cybersecurity mechanisms; (2) Dynamic and immutable management of blocked malicious IPs across sectors; (3) Contributing to **privacy, security, and non-repudiation** of IoT systems through large sensor/device datasets; (4) Building **scalable and decentralised end-to-end secure IoT systems**; (5) Enabling AI at the gateway level to detect and classify suspected activities; (6) Supporting cloud computing security for supply chains to minimise risk of machine disconnection; (7) Providing accountability, traceability, and identification solutions for global cybersecurity problems.

---

### Section D: Threats and Legal Landscape

**Q14.** What IoT-specific threats are most relevant to the healthcare sector, according to the article?

> **Answer:** The article notes that "healthcare is currently a hot topic because there is an abundance of critical data, cyber defences are on average weak in hospitals, where patients' lives and trust are at risk." Specific threats include: DDoS attacks on hospital IoT devices (medical equipment connected to the Internet); data manipulation affecting clinical decisions; and the general vulnerability of hospital systems due to weak average cyber defences. The article also cites research on DDoS in terms of "classifications and opportunities for attacks, particularly in the health sector, in areas of limited security."

---

**Q15.** What does the article say about the automotive sector's cybersecurity challenges?

> **Answer:** The automotive sector faces challenges in several areas: (1) **Electric vehicle (EV) battery stacks** have cybersecurity vulnerabilities that have been identified but not fully addressed by existing cybersecurity requirements; (2) **CAN-Bus (Controller Area Network)** intrusion detection — an intrusion detection system is needed to analyse traffic on CAN-Bus networks and detect malicious messages in vehicle communication channels; (3) **Unmanned ships** have security vulnerabilities with identified subsequent defence strategies and countermeasures; (4) **Software-defined radios** have signalling vulnerabilities requiring attention. The article also references the growing challenges presented by connected cars broadly.

---

**Q16.** What specific concerns does the article raise about cybersecurity law and foreign technology firms, using China as an example?

> **Answer:** The article references work on "the impact of China's 2016 Cyber Security Law on foreign technology firms, and on China's big data and smart city dreams." This law raises concerns about: sovereign states using cybersecurity law to impose requirements on foreign firms that may disadvantage them competitively; the use of cybersecurity infrastructure to serve state interests (including data access by authorities); and the tension between creating a cybersecurity regime to protect critical infrastructure and imposing restrictions that affect innovation and foreign business operations. The article frames this within a broader concern about whether cybersecurity law is justified and how different countries need different cybersecurity regimes.

---

### Section E: Conclusions and Future Research

**Q17.** According to the article's conclusions, what should organisations' cybersecurity strategies in IIoT environments focus on?

> **Answer:** The conclusions state that cybersecurity must "first focus on the varying weaknesses of IoT objects and further work on its security mechanisms such as privacy, access control, data storage, and authorisation." Organisations need to "keep up with the development of technologies to respond appropriately to cybersecurity threats" and should adopt a cybersecurity strategy. The conclusions also emphasise that Blockchain and ML/AI are likely to play a central role in future IoT cybersecurity, and that "security will become more important in the future because of the increase in the number of cordless-connection objects in the short term."

---

**Q18.** What six research gaps does the article identify as unresolved?

> **Answer:** (1) Lack of effective IoT cyber risk management frameworks; (2) policy direction gap — IoT public policy not developed around stakeholder values; (3) inadequate sensor networks to protect against malicious internal users and implanted malware; (4) need for proactive antifragility in distributed complex IIoT cyber defence paradigms; (5) next-generation network security challenges — 5G and 6G create new attack surfaces not yet fully addressed; (6) general effectiveness gap in current IoT cyber risk solutions despite new technology developments.

---

**Q19.** The article proposes a conceptual shift from "Internet of Things" to "Internet of Intelligence." What does this mean and why is it relevant to cybersecurity?

> **Answer:** The shift from **IoT to Internet of Intelligence (IoI)** refers to systems that not only connect devices but enable them to process knowledge and make decisions autonomously. This is enabled by increasingly capable wireless technologies (5G, 6G) providing connectivity, while maintaining the ability to process knowledge independently. The cybersecurity relevance is significant: autonomous decision-making devices present new challenges for authentication (who authorised the decision?), accountability (who is responsible when an autonomous system takes a harmful action?), and intrusion detection (distinguishing malicious commands from legitimate autonomous decisions). Traditional security models designed for human-directed systems do not map cleanly onto systems where devices act without human instruction.

---

**Q20.** How does the article characterise the relationship between smart device growth and cybersecurity risk?

> **Answer:** The article states plainly: "as smart devices are growing in number, there is a corresponding growth in risks, both to the user and to the Internet as a whole from hacking threats." This establishes a direct proportionality between IoT adoption and attack surface expansion. The conclusion reinforces this: "security will become more important in the future because of the increase in the number of cordless-connection objects in the short term, which extends to virtually all areas of our daily lives." The implication for organisations and policymakers is that cybersecurity investment must scale with IoT deployment — not follow it reactively — and that the societal exposure to cyber risk grows with every new connected device regardless of its individual security level.

---

*End of Study Guide*

> **Exam tip:** This article's core testable knowledge clusters around: (1) the five IIoT security properties (integrity, authentication, privacy, confidentiality, availability — memorise these precisely); (2) the five discussion themes and their key findings — especially ML applications, Blockchain roles, and the policy/user values gap; (3) why traditional security does not fit IoT (distributed architecture, resource constraints, scale); (4) the LRSB methodology and screening funnel numbers (15,748 → 1,316 → 60); and (5) the three Part 2 topic questions — legal vs. ethical gaps, privacy-business-professional tensions, and how this review complements ISO 27001/NIST CSF. The article is more conceptual and landscape-mapping than the SME case study — exam questions are likely to ask about themes, gaps, and implications rather than specific numbers.
