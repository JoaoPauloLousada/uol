# CM2025 Computer Security — Week 2 Summary

## Overview

Week 2 deepens understanding of the threat landscape through two lenses: **Cyber Threat Intelligence (CTI)** and a comprehensive academic review of cyber security vulnerabilities, threats, attacks, and solutions. The lecture covers how to turn raw threat data into actionable defence, while the study guide (Aslan et al., *Electronics* 2023) provides a structured survey of the field from fundamentals to future challenges.

---

## 1. Cyber Threat Intelligence (CTI)

### What Is CTI?

CTI is the process of **collecting and analysing data to understand potential or active threats** targeting your systems. Rather than simply reacting to incidents, CTI provides contextual, timely intelligence that enables organisations to:

- Predict attacks and prepare defences proactively
- Identify **who** the attacker is and **why** they are attacking
- Understand **how** attacks are executed
- Surface **indicators** for early detection

### The Four Types of CTI

| Type | Audience | Content |
|------|----------|---------|
| **Strategic** | Senior leadership | Broad trends, emerging risks, long-term planning |
| **Tactical** | Security analysts | Attacker TTPs (tools, techniques, procedures) |
| **Operational** | Incident responders | Real-time insight into ongoing campaigns |
| **Technical** | SOC / blue team | Malware hashes, malicious IPs, phishing domains |

### Intelligence Sources

**Internal sources:**
- System logs
- Incident reports
- User activity monitoring

**External sources:**
- Government advisories (NCSC in the UK; CISA in the US)
- OSINT — open-source platforms and forums
- ISACs — sector-specific communities for peer threat-sharing
- Commercial intelligence feeds from security vendors

> The most effective CTI strategies combine multiple sources for a fuller picture.

### Turning Intelligence into Action

CTI value is realised through a continuous cycle:

```
Collect → Analyse → Correlate → Act → Review & Refine
```

**Acting** includes: blocking malicious domains, updating firewall rules, issuing internal alerts, and patching based on newly surfaced IOCs.

### Mitigation Layers (Informed by CTI)

From outermost to innermost layer:

1. **Multi-factor authentication (MFA)** — blocks unauthorised access
2. **Endpoint protection and firewalls** — reduce attack surface
3. **Security awareness training** — prevents social engineering
4. **Regular patching and updates** — closes known vulnerabilities
5. **Secure, tested backups** — enables recovery without paying ransoms
6. **Continuous network monitoring** — detects lateral movement and anomalies

> No single measure is sufficient. Layered defence is the only reliable approach.

### Ransomware Defence — Coordinated Approach

| Defence | Purpose |
|---------|---------|
| Email filters + user training | Block phishing before users see it |
| Least privilege | Prevent free lateral movement post-breach |
| Off-site backups | Recover without paying ransom |
| Tested incident response plan | Reduce chaos during an active attack |
| Monitoring tools | Detect lateral movement in real time |

---

## 2. Cyber Security Fundamentals (Aslan et al., 2023)

### 2.1 Defining the Field

| Term | Scope |
|------|-------|
| **Data security** | Protects data from unauthorised access/modification throughout its lifecycle |
| **Information security** | Prevents unauthorised access, use, disclosure, or destruction of physical/electronic information |
| **Network security** | Safeguards confidentiality, integrity, and accessibility of networks and data in transit |
| **Cyber security** | Broadest — end-to-end protection of computers, servers, mobile devices, systems, networks, and data |

### 2.2 The CIA Triad

| Principle | Definition | How to Achieve |
|-----------|------------|----------------|
| **Confidentiality** | Protect information from unauthorised users | Encryption, authentication, access control |
| **Integrity** | Ensure data accuracy and completeness over its lifecycle | Hashing, data validation, consistency checks |
| **Availability** | Ensure authorised users can access data when needed | Backups, redundancy, eliminating single points of failure |

### 2.3 The AAA Framework

- **Authentication:** Verifying user identities (e.g. username/password)
- **Authorisation:** Determining which resources users can access and what operations they can perform
- **Accounting:** Monitoring user activities and resources accessed

### 2.4 History of Cybercrime (Key Milestones)

| Period | Milestone |
|--------|-----------|
| 1965 | First computer vulnerability — IBM CTSS |
| 1971 | "Creeper" (first virus) and "Reaper" (first antivirus) on ARPANET |
| 1985 | TCSEC "Orange Book" — first security evaluation standard (DoD) |
| 1995 | SSL introduced by Netscape |
| 2016 | Mirai — first major IoT-based DDoS malware |
| 2017 | WannaCry ransomware — 150 countries affected |
| 2020s | Cybercrime-as-a-service platforms emerge |

---

## 3. Why Cyber Attacks Are Increasing (5 Reasons)

1. **System errors** — hardware deficiencies, software bugs (buffer overflow, SQL injection, XSS), network protocol vulnerabilities (TCP, ARP, DHCP, DNS)
2. **Emerging technologies** — IoT (~50 billion devices forecast), smartphones, cloud shared infrastructure, SCADA/critical infrastructure
3. **Increased attacker knowledge** — attack tools lower the skill bar; "script kiddies"; cyber-attacks-as-a-service. Attack complexity **increases** while required attacker knowledge **decreases**
4. **Digitalisation of daily life** — banking, social media, meetings, education all online (COVID-19 accelerated this)
5. **No geographical boundaries** — attackers operate 24/7 from anywhere; absence of consistent international cyber law

---

## 4. Threats, Risks, and Vulnerabilities

### Malware Taxonomy

| Type | Key Characteristics |
|------|---------------------|
| **Virus** | Requires user to run an infected file to activate; nests in other programs |
| **Worm** | Self-replicating; spreads autonomously via email/shared files; consumes bandwidth |
| **Trojan Horse** | Disguised as legitimate software; opens backdoor ports; not self-replicating |
| **Rootkit** | Hides its presence; gives attacker remote control; used for DDoS, spam, data theft |
| **Ransomware** | Encrypts files/drives; demands cryptocurrency ransom; spread via malicious attachments |
| **Spyware** | Collects data covertly (keystrokes, browsing); installed with hidden "consent" |
| **Botnet** | Network of compromised "zombie" computers controlled remotely; used for DDoS and spam |

### Attack Types

| Attack | Description |
|--------|-------------|
| **Social Engineering** | Exploits human psychology to extract information or access |
| **Phishing** | Fraudulent emails impersonating trusted sources to steal credentials |
| **Man-in-the-Middle (MitM)** | Attacker secretly intercepts/modifies traffic between two parties |
| **Password Attack** | Seizes credentials via brute force, dictionary, or social media profiling |
| **Session Hijacking** | Takes over an authenticated session (active, passive, or hybrid) |
| **DDoS** | Floods target with traffic from many sources to deny service |
| **Cryptography Attack** | Targets cipher or key weaknesses (passive: intercept; active: modify) |

### Vulnerability Sources

| Type | Examples |
|------|---------|
| **Software** | Buffer overflow, SQL injection, XSS, improper authentication |
| **Network protocols** | ARP poisoning, DHCP starvation, TCP SYN flooding, DNS spoofing |
| **Wireless** | WEP weaknesses, rogue access points, MAC spoofing |
| **Firewall misconfiguration** | Allows attacks on trusted networks |
| **Operating system** | Windows/Unix misconfiguration |

---

## 5. Network Security — OSI Model

### OSI Layers, Protocols, and Attacks

| Layer | Name | Key Protocols | Notable Attacks |
|-------|------|---------------|-----------------|
| 7 | **Application** | HTTP, DNS, DHCP, FTP, SMTP | DoS/DDoS, FTP bounce, browser hijacking, malware |
| 6 | **Presentation** | SSL | SSL stripping, CCS manipulation |
| 5 | **Session** | SCP, PAP | Session hijacking, session ID theft |
| 4 | **Transport** | TCP, UDP | TCP SYN flooding, UDP flooding |
| 3 | **Network** | IPv4, ICMP | Smurf attack (DDoS via ICMP), IP spoofing |
| 2 | **Data Link** | ARP, STP | ARP poisoning, MAC/CAM table flooding |
| 1 | **Physical** | Fiber, Wi-Fi | Wiretapping, jamming, tampering |

### Key Protocol Vulnerabilities

- **DHCP (Layer 7):** No authentication mechanism → enables starvation attacks (exhausting IP pool) and rogue DHCP server attacks
- **ARP (Layer 2):** No verification of GARP packets → ARP poisoning allows traffic interception
- **TCP (Layer 4):** TCP SYN flooding exhausts server resources by exploiting the 3-way handshake
- **DNS (Layer 7):** Responses not verified → fake DNS servers can redirect traffic

### Notable Attack Mechanics

- **Smurf Attack:** Attacker spoofs victim IP → sends ICMP echo requests to broadcast network → all hosts reply to victim, flooding it (Layer 3 DDoS)
- **MAC/CAM Table Flooding:** Overflows switch memory with fake MAC addresses → switch degrades to hub behaviour → attacker can intercept all traffic (Layer 2)
- **ARP Poisoning:** GARP packets poison ARP caches → attacker becomes man-in-the-middle on LAN (Layer 2)

---

## 6. Cyber Security Solutions

### Technical Solutions

| Category | Examples |
|----------|---------|
| **Network** | Firewalls, IDS/IPS, VPN, ACLs |
| **Cryptography** | TLS, SSL, IPsec |
| **Endpoint** | Antivirus, vulnerability scanners |
| **Infrastructure** | Cloud, virtualisation, blockchain (data integrity validation) |
| **AI/ML** | Malware detection, anomaly detection, phishing detection, DDoS detection |

### Non-Technical Solutions

| Category | Examples |
|----------|---------|
| **Physical** | Workstation area protection, backup storage, disaster recovery plans |
| **Administrative** | User/developer training, risk assessment, vendor management, incident response policies |

### Security Development Lifecycle (SDL)

Integrates security testing at every stage of software development (rather than post-hoc). Real-world result: **Windows Vista** had ~45% fewer errors and vulnerabilities than Windows XP, which was developed without SDL.

### ML Limitations in Cyber Security

- Prone to bias; makes assumptions about data
- Cannot always handle outliers
- Increasingly targeted by adversarial/ML-based evasion attacks
- Requires large, consistent, up-to-date datasets — often unavailable

---

## 7. Key Asymmetry in Cyber Security

> "Security professionals must identify and fix **all** vulnerabilities. An attacker only needs to find **one**."

This fundamental asymmetry means defenders are perpetually at a disadvantage — a single missed vulnerability can be enough for full compromise.

---

## 8. Key Themes

| Theme | Core Insight |
|-------|-------------|
| **CTI as decision tool** | Raw data is worthless without analysis, correlation, and action |
| **Four CTI types** | Strategic → Tactical → Operational → Technical, each for a different audience |
| **CIA triad** | Confidentiality, Integrity, Availability — the foundational security framework |
| **Layered mitigation** | No single control is sufficient; defence-in-depth is the only viable model |
| **Attacker asymmetry** | Defenders must fix everything; attackers only need one gap |
| **Human factor** | Social engineering and phishing exploit people, not systems — training is essential |
| **OSI model** | Attacks occur at every layer; defence must match the layer being exploited |
| **Patching and SDL** | Eliminating vulnerabilities at the source (development) is the most durable control |
| **Third-party intelligence** | NCSC, CISA, ISACs, and commercial feeds are force-multipliers for smaller security teams |
