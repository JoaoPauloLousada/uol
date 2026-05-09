# CM2025 Computer Security — Week 4 Summary

## Overview

Week 4 applies the concepts from previous weeks to two real-world contexts: **cybersecurity management in Small and Medium-sized Enterprises (SMEs)** and **cybersecurity in the Industrial Internet of Things (IIoT)**. The first paper (Antunes et al., 2021) reports a field study in Portugal showing how ISO 27001 can be scaled for resource-constrained organisations. The second (Raimundo & Rosário, 2022) surveys the IIoT cybersecurity literature, mapping threats, emerging defences, and the governance gaps that technical standards do not yet fill.

---

## Part 1 — Cybersecurity in SMEs (Antunes et al., 2021)

### 1.1 Why SMEs Are a "Blind Spot" in Cybersecurity

Small and Medium-sized Enterprises make up a large share of global wealth production, yet their structural characteristics make them systematically under-secured:

| Characteristic | Security Implication |
|----------------|---------------------|
| Small dimension | Limited financial resources for complex/costly security procedures |
| Traditional/family structures | Informal governance; absence of formal HR or IT departments |
| No resident IT staff | No dedicated security personnel |
| Difficulty accessing funded projects | Cybersecurity investment is deprioritised |
| Lower collaborator cyberawareness | Employees are often the weakest link |

> **COVID-19 accelerator:** The pandemic forced more employees to work from home, dramatically increasing SME cybersecurity exposure and the urgency to implement countermeasures.

### 1.2 The "Log In Innovation" Project

| Dimension | Detail |
|-----------|--------|
| **Period** | 2018–2020 |
| **Budget** | ~€1,304,000 (EU regional development funding via IAPMEI) |
| **Promoter** | NERLEI (regional business association, Leiria, Portugal) |
| **Entities** | NERLEI + Polytechnic of Leiria + IT consulting company + participating SMEs |
| **SMEs in scope** | 50 SMEs (IS/cybersecurity), mainly from Leiria district |

**Two overarching goals:**
1. Give SMEs the opportunity to increase cyberawareness, competitiveness, and mitigate organisational, IT, and HR flaws
2. Strengthen regional cooperation between a business association, academia, and a consulting team to foster SME cybersecurity

The collaborative delivery model addressed the three barriers SMEs face independently:
- **NERLEI** → trust, regional network, and funding coordination
- **Polytechnic of Leiria** → methodology design and research rigour
- **Consulting team** → practical IT auditing and implementation expertise

### 1.3 ISO 27001:2013 — Adapted for SMEs

ISO 27001:2013 defines **114 controls** across **14 thematic categories** (Annex A.5 through A.18). Each control has three possible states:

| State | Meaning |
|-------|---------|
| **Fail** | Conformity level of 0% — control not met at all |
| **Pass** | Acceptance level above 0% (higher = better) |
| **Not applicable** | Control is irrelevant to the organisation's scope or activity |

### 1.4 Two Auditing Types — Standard vs. Full

| Dimension | Type 1 — "Standard" | Type 2 — "Full" |
|-----------|---------------------|-----------------|
| **Controls** | 30 controls | 114 controls (all) |
| **Categories covered** | 8 of 14 | All 14 (A.5–A.18) |
| **ISO 27001 coverage** | ~25% | 100% |
| **Re-evaluation** | None | Yes — after first audit |
| **Target** | Initial diagnosis; correct flaws | ≥60% of controls passed |
| **Reports delivered** | One auditing report | Intermediate + final report |
| **Participant SMEs** | 30 | 20 |

**Categories covered only in Type 2** (absent from Type 1):
- A.6 Organisation of information security
- A.7 Human resource security
- A.11 Physical and environmental security
- A.15 Supplier relationships
- A.16 Information security incident management
- A.17 Information security aspects of BCM

### 1.5 Why Those 30 Type 1 Controls? — Six Design Presuppositions

The subset was chosen to be accessible to SMEs without formal organisational infrastructure:

1. **No infrastructure investment** — no need for dedicated buildings or networking components
2. **No formal HR structure** — SMEs without HR departments are not excluded
3. **Focused on most common cyberattacks** — directly addresses highest-probability threats
4. **No disaster recovery/BCM required** — small businesses rarely have these in place
5. **No formal business process model** — avoids imposing structures SMEs may not have
6. **Preliminary check-up purpose** — allows basic diagnosis without complex IT infrastructure

> The key principle: *Do not reduce the standard's rigour — reduce its activation barrier.*

### 1.6 Cyberthreats Specific to SMEs

| Threat Category | Examples |
|----------------|---------|
| **Social engineering** | Phishing, malware, mobile malware, ransomware |
| **Policy management** | Weak passwords, inadequate authentication, poor access controls |
| **Insider threats** | Employees, former employees, contractors, associates |
| **Hardware threats** | Personal devices, web servers, database servers |
| **Software threats** | Third-party applications in the SME's information system |
| **DDoS** | Higher impact on SMEs with significant online presence |
| **Privilege/data abuse** | Employees exploiting privileged access |
| **Unintentional exposure** | Failure to follow security procedures inadvertently causing exposure |

### 1.7 Type 1 Auditing Results

- **Average acceptance rate: 78.06%** — most controls scored above 50%, confirming baseline conformity
- **Best-performing:** A.9.4 (System/application access control), A.14.1, A.14.2 — process-based; require no prior technical knowledge
- **Worst-performing:** A.10.1 (Cryptographic controls) — technical complexity; A.12.1 (Operational procedures) — difficulty specifying responsibilities in SME scope

**Results by organisational dimension:**

| Dimension | Best Performer | Worst Performer |
|-----------|---------------|-----------------|
| **Size** | Medium (84.55% above 76%) | Micro (27.14% below 50%) |
| **Activity sector** | Industry (88.18% above 76%) | Services (35.15% below 50%) |
| **Employees** | >60 employees (84.58% above 76%) | ≤10 employees (25.33% below 50%) |
| **Revenue** | >€5.5M (87%+ above 76%) | ≤€2M (25.45% below 50%) |
| **Exports** | >60% of revenue (88.33% above 76%) | ≤2.5% exports (21.19% below 50%) |

### 1.8 Type 2 Auditing Results

| Metric | First Audit | Second Audit |
|--------|-------------|--------------|
| Controls failing (0–50%) | >40% more than passing | Substantially reduced |
| Controls passing (76–100%) | Lower | More than double those failing |
| Overall average | Most controls failing | ~60% positively evaluated |

- **6 enterprises** did not pass a single control in the first audit
- After the second audit: all **14 ISO 27001 categories** improved
- Key finding: **process and documentation controls** are significantly easier to comply with than controls requiring additional equipment or refined technical procedures

### 1.9 Five Organisational Factors Influencing Cybersecurity Compliance

| Factor | Effect |
|--------|--------|
| **Company size** | Medium > Small > Micro; larger companies have more capacity for mitigation |
| **Activity sector** | Industry performs best (culture of standard compliance); services worst |
| **Number of employees** | More employees → more human capacity to implement and sustain controls |
| **Business revenue** | Higher revenue → more financial resources for tools, training, and consulting |
| **Export/internationalisation** | More internationally active SMEs perform better — global markets impose cybersecurity obligations |

> *"The enterprises' wealthiness and exportation level are related with the level of preparation to adopt good practices of cybersecurity."*

### 1.10 Lessons for Scaling ISO 27001 to Small Organisations

1. **Two-tier approach beats a binary choice** — entry-level (Type 1) and full (Type 2) paths allow self-selection by maturity
2. **Collaborative delivery is effective** — business association + academia + consulting team each address a distinct barrier
3. **Cyberawareness must precede technical controls** — training and seminars as a precursor to auditing improve outcomes
4. **Process-based controls first** — easiest to comply with; build confidence before tackling technical controls
5. **Re-evaluation demonstrates improvement** — the Type 2 diagnose → mitigate → re-evaluate cycle is the most impactful element
6. **No single standard suffices** — the authors recommend complementing ISO 27001 with NIST CSF

---

## Part 2 — IoT/IIoT Cybersecurity (Raimundo & Rosário, 2022)

### 2.1 Core Definitions

**Internet of Things (IoT):** A network of machines and devices capable of communicating and collaborating, integrating the digital and physical universes. Managed through sensors linked to the Internet. Related domains include smart homes, smart cities, smart grids, transportation, healthcare, and manufacturing.

**Industrial Internet of Things (IIoT) / Industry 4.0:** IoT deployed in industrial environments. IIoT = Industry 4.0 — a modular structure through which computers monitor and manage smart factories, create digital copies of physical processes, and make decentralised decisions. Closely linked to cloud computing, blockchain, and big data analytics.

### 2.2 Five Core IIoT Security Properties

| Property | Definition |
|----------|-----------|
| **Integrity** | Data protected from modification by unauthorised parties |
| **Authentication** | Data source verified as the pretended identity |
| **Privacy** | Users' identities are non-traceable from their behaviours |
| **Confidentiality** | Information made unintelligible to unauthorised entities |
| **Availability** | System services available only to legitimate users |

### 2.3 Why Traditional Security Does Not Fit IoT

| Challenge | Explanation |
|-----------|-------------|
| **Distributed environments** | IoT operates across distributed architectures (including blockchain-type), not controlled central networks |
| **Heterogeneous devices** | Varied smart objects with different capabilities and protocols cannot all be secured uniformly |
| **Resource constraints** | Sensors have sparse computational resources and power constraints — cannot run traditional security software |
| **Scale** | Billions of connected devices create an enormous attack surface |
| **Authentication gap** | Remote system authentication demands substantial improvement beyond legacy designs |
| **Encryption gap** | New sensors require encryption not present in legacy device designs |
| **Web interface exposure** | Intrusion detection requires coverage that traditional perimeter security does not provide |

### 2.4 Methodology — LRSB Systematic Review

The article uses a **Systematic Review of Bibliometric Literature (LRSB)**, a qualitative approach that analyses and synthesises documents to expand usable knowledge.

**Three phases and six steps:**

| Phase | Steps |
|-------|-------|
| **Exploration** | (1) Problem of research → (2) Literature search → (3) Critical precision → (4) Synthesis of data |
| **Interpretation** | (5) Reports and recommendations |
| **Communication** | (6) Presentation of the LRSB report |

**Screening funnel:**

| Stage | Criteria | Publications |
|-------|----------|-------------|
| Meta-search | "Cyber Security" | 15,748 |
| First inclusion | + "Internet of Things" | 1,316 |
| Second inclusion | + Business, Management & Accounting | **60** |

- **Database:** Scopus; period covered: 2014–2021
- **Peak publication year:** 2019 (15 documents)
- **Most cited article:** "Blockchain technology innovations" (155 citations, TEMSCON 2017)
- **Limitation:** Only Scopus was used — other databases excluded

### 2.5 Five Main Discussion Themes

#### Theme 1 — Cybersecurity
- Focuses on securing data from physical and cloud threats
- Key gap: **lack of policy direction** and failure to understand user values — IoT policy has not been guided by key stakeholder values
- Smart home systems are exposed to **identity theft** and sensor spoofing
- Examines whether cybersecurity law is justified (China's 2016 Cybersecurity Law as case study)

#### Theme 2 — Machine Learning
- ML is central to IIoT cybersecurity, particularly for **intrusion detection** and **threat intelligence**
- Applications: IoT network intrusion detection (feature selection and interpretation), **Decision Trees** for network intrusion detection, AI recognising cyber-attacks in robotic factories, **IoT device fingerprinting** via ML to unveil compromised IPs, AI at gateway level within blockchain-enhanced IoT

#### Theme 3 — Internet of Things
- Extends to IIoT, network, and cloud computing
- Primary concerns: **DDoS on power grids**, hacking of industrial control systems (ICS)
- Supply chains benefit from Industry 4.0 technologies (big data, cloud, cybersecurity)
- Proposed conceptual shift: **IoT → Internet of Intelligence (IoI)** — autonomous decision-making devices
- 5G and 6G provide new connectivity but IoT systems retain the same energy-capacity weaknesses for attackers
- New paradigm needed: **proactive antifragility** — systems that improve and adapt under attack rather than just surviving

#### Theme 4 — Industry 4.0 / IIoT
- Industry 4.0 is the industrial deployment of IoT, AI, big data, and virtual/augmented reality
- Oil and gas threats: sensitive data migration to cloud; increased entry points for attack
- IIoT will have **economic, social, and political consequences** — including rising unemployment and social stratification
- Challenge: reduce costs/time while also reducing security vulnerabilities

#### Theme 5 — Blockchain and Cloud Computing

| Blockchain Capability | Application |
|----------------------|-------------|
| Immutability of users and devices | Smart home cybersecurity |
| Dynamic management of blocked malicious IPs | Multi-industry (healthcare, finance, government) |
| Privacy, security, non-repudiation of IoT systems | Large-scale sensor deployments |
| Scalable, decentralised end-to-end IoT | Distributed IIoT infrastructure |
| AI at gateway level | Detecting and classifying suspected activities |

> **Tension:** Blockchain's immutability directly conflicts with GDPR's "right to be forgotten" (Article 17) — a legal and ethical conflict that no current standard fully resolves.

### 2.6 Threat Landscape by Sector

| Sector | Key Threats |
|--------|-------------|
| **Smart homes** | Identity theft, sensor spoofing, unauthorised access |
| **Smart cities** | DDoS on communication infrastructure, smart health exposure |
| **Automotive/EVs** | EV battery vulnerabilities, CAN-Bus intrusion, software-defined radio weaknesses |
| **Healthcare** | DDoS on hospital devices, data manipulation, weak average cyber defences |
| **Industrial/IIoT** | ICS hacking, PLC vulnerabilities, malicious insiders, supply chain attacks |
| **Energy/Smart grids** | Power grid DDoS, SCADA/ICS attacks |
| **Finance/Banking** | E-finance threats, cloud data migration, insider threats |
| **Unmanned systems** | Software radio signalling, unmanned ship vulnerabilities |

### 2.7 Legal and Policy Landscape

- Significant gap between **existence of cybersecurity laws** and their **effectiveness** in protecting stakeholders
- **China's 2016 Cybersecurity Law:** significant impact on foreign tech firms; raises questions about sovereignty, compliance burden, and competitive disadvantage
- Key identified gaps:
  - **Lack of policy direction** — IoT public policy not developed around stakeholder values
  - **Producer/consumer liability** unclear for smart devices
  - **Regulatory environment** not keeping pace with technology
  - User values **misunderstood** by policymakers

### 2.8 Research Gaps and Future Directions

1. Lack of effective **IoT cyber risk management frameworks** — current frameworks insufficient
2. **Policy direction gap** — IoT public policy not guided by stakeholder values
3. **Sensor network adequacy** — effective sensor networks needed against malicious internal users and implanted malware
4. **Antifragility** — need for proactive cyber defence paradigms in distributed IIoT environments
5. **5G and 6G security** — new attack surfaces not yet fully addressed
6. **Effectiveness gap** — current IoT cyber risk solutions still insufficient despite technological advances

---

## Part 3 — Cross-Cutting Themes

### 3.1 Legal Compliance vs. Ethical Responsibility

The IoT paper surfaces a recurring tension throughout its literature review:

- **Legal compliance** answers: *"What must we not do?"* — a minimum threshold
- **Ethical responsibility** answers: *"What should we do, regardless of legal requirements?"*

In IoT and IIoT contexts, this gap is structural:
1. **Policy-values gap:** Laws are written by legislators whose understanding of what IoT users actually value (privacy, autonomy, transparency) is incomplete — compliance with a poorly conceived law does not guarantee ethical treatment of users
2. **Producer/consumer liability:** Manufacturers shipping IoT devices with default credentials or without consent mechanisms are acting unethically even if no law currently prohibits it — the legal framework lags technology by years or decades
3. **Healthcare:** A hospital meeting minimum legal standards while running outdated, unpatched systems is legally compliant and ethically negligent simultaneously

### 3.2 Privacy Tensions in IIoT

| Tension | Nature of Conflict |
|---------|--------------------|
| **Privacy vs. business value** | Industry 4.0 monetises data — privacy-by-design limits collection but is seen as a business cost |
| **Intrusion detection vs. privacy** | ML-based IDS analyses user behaviour patterns — this is surveillance, even when protective |
| **Blockchain vs. right to be forgotten** | Blockchain's immutability conflicts with GDPR Article 17 (right to erasure) |
| **Smart city vs. citizen consent** | Citizens cannot meaningfully opt out of public infrastructure data collection |
| **Automation vs. employment** | IIoT automation creates efficiency but also rising unemployment and social stratification |

### 3.3 How Both Articles Complement ISO 27001 and NIST CSF

| Standard/Framework | What It Covers | What These Articles Add |
|--------------------|---------------|------------------------|
| **ISO 27001** | 114 controls for ISMS; generic information security | SME scaling methodology (Antunes); IIoT-specific threats that 27001 does not address (Raimundo) |
| **NIST CSF** | Identify → Protect → Detect → Respond → Recover | SME implementation lessons (Antunes); threat landscape populating each CSF function for IIoT (Raimundo) |
| **Both standards** | Technical/operational controls | Legal and policy landscape, stakeholder values gap, ethical obligations beyond compliance (Raimundo) |

**The complementary relationship:**
- ISO 27001 provides the **control framework** (what controls, how to audit)
- NIST CSF provides the **strategic risk management cycle** (identify, protect, detect, respond, recover)
- Antunes et al. provide a **scaling methodology** for resource-constrained organisations
- Raimundo & Rosário provide the **IIoT-specific threat intelligence** and technology landscape (Blockchain, ML, 5G/6G gaps) that standards leave underspecified

---

## Key Themes

| Theme | Core Insight |
|-------|-------------|
| **SMEs as a security blind spot** | Size, revenue, sector, and internationalisation directly predict cybersecurity compliance — smaller and more domestically focused organisations are structurally under-secured |
| **Scaling standards to SMEs** | Full certification is not the only goal — a tiered subset approach (30 controls first, 114 later) enables meaningful improvement in resource-constrained contexts |
| **Process before technology** | Process and documentation controls are consistently easier to comply with than technical controls — sequence matters |
| **Two-phase audit loop** | Diagnose → mitigate → re-evaluate is the most impactful improvement mechanism; re-evaluation nearly doubled passing controls in Type 2 |
| **Collaborative delivery** | Business association + academia + consulting team each address a distinct barrier SMEs cannot overcome alone |
| **IoT as a new attack surface** | Billions of resource-constrained, heterogeneous devices create a threat landscape that traditional perimeter security cannot address |
| **Five IIoT security properties** | Integrity, Authentication, Privacy, Confidentiality, Availability — the classical CIA triad expanded to meet IIoT realities |
| **Blockchain and ML as emerging defences** | The most-cited IIoT security mechanisms in the literature; both fill gaps that ISO 27001/NIST CSF leave unspecified |
| **Compliance ≠ ethical responsibility** | Legal frameworks lag technology by years; organisations have ethical obligations that extend beyond current regulatory requirements |
| **Antifragility as the new paradigm** | Resilience (surviving attacks) and robustness (resisting attacks) are insufficient for IIoT — systems must improve under adversity |
| **Policy gap in IoT governance** | IoT public policy is not being developed around user values — a structural governance failure that technical standards alone cannot fix |
