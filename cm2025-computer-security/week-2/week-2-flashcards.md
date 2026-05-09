# CM2025 Computer Security — Week 2 Flashcards

60 cards across 5 clusters. Each card references its source document.

---

## Cluster 1 — Cyber Threat Intelligence (12 cards)

---

### Card 01
**Q:** What is Cyber Threat Intelligence (CTI)?

**A:** The process of **collecting and analysing data to understand potential or active threats** targeting your systems. Rather than just reacting to incidents, CTI provides contextual, timely information that enables an organisation to predict attacks and prepare effective defences. It answers: who is the attacker, why are they attacking, how do they execute attacks, and what indicators can be used to detect them early.

*Source: [1-Cyber-threat-intelligence-and-mitigation-strategies/subtitle.txt](1-Cyber-threat-intelligence-and-mitigation-strategies/subtitle.txt)*

---

### Card 02
**Q:** What are the four types of CTI and who is each aimed at?

**A:**
| Type | Audience | Content |
|------|----------|---------|
| **Strategic** | Senior leadership | Broad trends, emerging risks, long-term planning |
| **Tactical** | Security analysts | Attacker TTPs (tools, techniques, procedures) |
| **Operational** | Incident responders | Real-time insight into ongoing campaigns |
| **Technical** | SOC / blue team | Malware hashes, malicious IPs, phishing domains |

*Source: [1-Cyber-threat-intelligence-and-mitigation-strategies/subtitle.txt](1-Cyber-threat-intelligence-and-mitigation-strategies/subtitle.txt)*

---

### Card 03
**Q:** What distinguishes Strategic CTI from the other three types?

**A:** Strategic intelligence is at the **highest level** and aimed at **senior leadership**. It covers broad trends and emerging risks to support long-term planning and resource decisions. It is the least granular — it does not contain IOCs or specific TTPs. Its value is in informing policy and investment, not day-to-day operational response.

*Source: [1-Cyber-threat-intelligence-and-mitigation-strategies/subtitle.txt](1-Cyber-threat-intelligence-and-mitigation-strategies/subtitle.txt)*

---

### Card 04
**Q:** What is Tactical CTI and why is it valuable to security analysts?

**A:** Tactical intelligence focuses on **how attackers operate** — their tools, techniques, and procedures (TTPs). It enables security analysts to understand the methods used in campaigns, configure detection rules, update playbooks, and anticipate attacker behaviour before and during an incident. It bridges strategic awareness and operational response.

*Source: [1-Cyber-threat-intelligence-and-mitigation-strategies/subtitle.txt](1-Cyber-threat-intelligence-and-mitigation-strategies/subtitle.txt)*

---

### Card 05
**Q:** What is Operational CTI and when is it most useful?

**A:** Operational intelligence provides **real-time insight into ongoing campaigns** — often derived from active threat actor infrastructure monitoring, ISAC sharing, or government advisories. It is most useful when an incident is suspected or active, allowing defenders to **immediately adjust defences** based on what is currently happening, not what happened historically.

*Source: [1-Cyber-threat-intelligence-and-mitigation-strategies/subtitle.txt](1-Cyber-threat-intelligence-and-mitigation-strategies/subtitle.txt)*

---

### Card 06
**Q:** What is Technical CTI and what does it include?

**A:** Technical intelligence is the **most granular form** and the most directly actionable for blocking threats. It includes machine-readable artefacts known as Indicators of Compromise (IOCs):
- Malware file hashes
- Malicious IP addresses
- Phishing domains
- CVE numbers and registry keys

It is directly useful to tools like SIEMs, firewalls, and endpoint protection platforms.

*Source: [1-Cyber-threat-intelligence-and-mitigation-strategies/subtitle.txt](1-Cyber-threat-intelligence-and-mitigation-strategies/subtitle.txt)*

---

### Card 07
**Q:** What are the main internal and external sources of CTI?

**A:**
**Internal:**
- System logs
- Incident reports
- User activity monitoring

**External:**
- Government advisories — NCSC (UK), CISA (US)
- OSINT — open-source platforms and forums
- ISACs — sector-specific peer threat-sharing communities
- Commercial intelligence feeds from security vendors

> The most effective CTI strategies combine multiple sources for a fuller picture.

*Source: [1-Cyber-threat-intelligence-and-mitigation-strategies/subtitle.txt](1-Cyber-threat-intelligence-and-mitigation-strategies/subtitle.txt)*

---

### Card 08
**Q:** What is the CTI action cycle and what are its five steps?

**A:** The cycle converts raw data into actionable defence:

```
Collect → Analyse → Correlate → Act → Review & Refine
```

- **Collect:** Gather data from trusted internal and external sources
- **Analyse:** Assess relevance and accuracy
- **Correlate:** Match intelligence against the organisation's own environment
- **Act:** Block domains, update firewall rules, issue alerts, patch
- **Review & Refine:** Continuously improve — the threat landscape changes daily

*Source: [1-Cyber-threat-intelligence-and-mitigation-strategies/subtitle.txt](1-Cyber-threat-intelligence-and-mitigation-strategies/subtitle.txt)*

---

### Card 09
**Q:** Why does CTI matter beyond simply gathering data?

**A:** Raw data has no value until it is contextualised and acted upon. CTI enhances organisational decision-making by:
- Enabling **earlier detection** of attacks
- Supporting **more accurate risk assessment**
- Allowing **precision responses** tailored to the specific attacker's methods
- Shifting posture from reactive (responding to incidents) to **proactive** (anticipating and preparing)

*Source: [1-Cyber-threat-intelligence-and-mitigation-strategies/subtitle.txt](1-Cyber-threat-intelligence-and-mitigation-strategies/subtitle.txt)*

---

### Card 10
**Q:** What signal words help identify each CTI type when reading a threat report?

**A:**
| Type | Signal Words |
|------|-------------|
| **Strategic** | "motivation", "historically", "geopolitical", "financially motivated", "long-term campaign" |
| **Tactical** | "phishing", "lateral movement", "credential theft", "TTPs", "attack pattern" |
| **Operational** | "current campaign", "timeline", "active infrastructure", "observed on [date]" |
| **Technical** | File hashes, IP addresses, domain names, malware names, CVE numbers, registry keys |

*Source: [week-2-summary.md](week-2-summary.md) — Section 1*

---

### Card 11
**Q:** How does CTI directly inform mitigation strategy? List the six mitigation layers from outermost to innermost.

**A:**
1. **MFA** — blocks unauthorised access even after credential theft
2. **Endpoint protection and firewalls** — reduce attack surface
3. **Security awareness training** — prevents social engineering attacks
4. **Regular patching and updates** — closes known vulnerabilities
5. **Secure, tested backups** — enables recovery without paying ransoms
6. **Continuous network monitoring** — detects lateral movement and anomalies

> No single measure is sufficient — layered defence is the only reliable model.

*Source: [1-Cyber-threat-intelligence-and-mitigation-strategies/subtitle.txt](1-Cyber-threat-intelligence-and-mitigation-strategies/subtitle.txt)*

---

### Card 12
**Q:** What is the coordinated approach to ransomware defence informed by CTI?

**A:**
| Defence | Purpose |
|---------|---------|
| Email filters + user training | Block phishing before users see it |
| Principle of least privilege | Prevent free lateral movement post-breach |
| Off-site backups | Recover without paying ransom |
| Tested incident response plan | Reduce chaos during an active attack |
| Monitoring tools | Detect lateral movement in real time |

> Each layer adds resilience. No single control is sufficient.

*Source: [1-Cyber-threat-intelligence-and-mitigation-strategies/subtitle.txt](1-Cyber-threat-intelligence-and-mitigation-strategies/subtitle.txt)*

---

## Cluster 2 — Cyber Security Fundamentals & History (12 cards)

---

### Card 13
**Q:** What is the difference between data security, information security, network security, and cyber security?

**A:**
| Term | Scope |
|------|-------|
| **Data security** | Protects data from unauthorised access/modification throughout its lifecycle |
| **Information security** | Prevents unauthorised access, use, disclosure, or destruction of physical or electronic information |
| **Network security** | Safeguards confidentiality, integrity, and accessibility of networks and data in transit |
| **Cyber security** | Broadest — end-to-end protection of computers, servers, mobile devices, systems, networks, and data from malicious attacks |

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Section 1.1*

---

### Card 14
**Q:** Define the CIA triad and give one method to achieve each property.

**A:**
| Principle | Definition | How to Achieve |
|-----------|------------|----------------|
| **Confidentiality** | Protecting information from unauthorised users | Encryption, authentication, access control |
| **Integrity** | Ensuring data accuracy, consistency, and completeness over its lifecycle | Hashing, data validation, consistency checks |
| **Availability** | Ensuring authorised users can access data when needed | Backups, redundancy, eliminating single points of failure |

> The CIA triad is the foundational "Principle of Information Security."

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Section 1.3*

---

### Card 15
**Q:** What are the three services provided by the AAA framework?

**A:**
- **Authentication:** Verifies user identities — typically through username/password.
- **Authorisation:** Determines which resources users can access and what operations they can perform.
- **Accounting:** Monitors user activities, resources accessed, and changes made.

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Section 1.4*

---

### Card 16
**Q:** When did the first computer vulnerability appear and where? What was TCSEC?

**A:**
- The first vulnerability was found in the **IBM 7094 Compatible Time-Sharing System (CTSS)** in **1965**.
- **TCSEC** (Trusted Computer System Evaluation Criteria), also known as the **"Orange Book"**, was created by the US Department of Defense in **1985**. It was the **first security guide for evaluating computer systems**, establishing standards that remain foundational.

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Section 1.2*

---

### Card 17
**Q:** What was the significance of the "Creeper" and "Reaper" programs?

**A:**
- **Creeper (1971):** Created by Bob Thomas — the **first virus**. It could move over the ARPANET and displayed the message "I'm the creeper, catch me if you can."
- **Reaper (1971):** Created by Ray Tomlinson — could traverse ARPANET and delete Creeper. It was the **first antivirus program**.

Together, they established the fundamental dynamic of malware vs. defence that characterises cyber security to this day.

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Section 1.2*

---

### Card 18
**Q:** What was the Mirai malware attack and why was it significant?

**A:** In **2016**, Mirai malware exploited vulnerabilities in **IoT devices** (internet-connected smart devices) to build a massive botnet that launched large-scale **DDoS attacks**. It was significant because it was one of the **first major attacks to weaponise IoT infrastructure** rather than traditional computers — demonstrating that any internet-connected device, however trivial, can become a weapon.

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Section 1.2*

---

### Card 19
**Q:** What was the Stuxnet worm and what made it historically significant?

**A:** **Stuxnet (2010)** attacked **programmable logic controllers (PLCs)** in industrial control systems, effectively taking control of physical industrial processes. It is widely considered the **first major cyber weapon targeting critical infrastructure** (specifically Iran's uranium enrichment facilities). It demonstrated that cyber attacks can have **real-world physical consequences** — making it a landmark event in the history of cyber warfare.

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Section F*

---

### Card 20
**Q:** What are the five reasons cyber attacks are increasing, according to Aslan et al.?

**A:**
1. **System errors** — hardware deficiencies, software bugs (buffer overflow, SQL injection, XSS), network protocol vulnerabilities (TCP, ARP, DHCP, DNS)
2. **Emerging technologies** — IoT (~50 billion devices forecast), smartphones, cloud shared infrastructure, SCADA/critical infrastructure
3. **Increase in knowledge** — attack tools lower the skill bar; "script kiddies"; cyber-attacks-as-a-service platforms
4. **Digitalisation of daily life** — banking, social media, education all online; COVID-19 dramatically accelerated this
5. **No geographical boundaries** — attackers operate 24/7 from anywhere; absence of consistent international cyber law

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Section 1.5*

---

### Card 21
**Q:** How does Figure 3 in Aslan et al. challenge a common assumption about cyber attackers?

**A:** Figure 3 shows that over time **attack complexity has increased** while the **technical knowledge required by attackers has decreased**. This is because widespread attack tools, cyber-attacks-as-a-service platforms, and easily shareable knowledge allow "script kiddies" to launch sophisticated attacks. The assumption that more complex attacks require more skilled attackers is therefore **incorrect**.

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Section 1.5 & Q8*

---

### Card 22
**Q:** Why does cloud computing raise specific security concerns?

**A:**
1. Companies **lose control** over where their data is stored
2. The same **physical resources are shared** between different companies
3. Vulnerabilities in **virtual machine monitors** (VMMs) such as Xen, VMware, and Hyper-V
4. **Attacks during data transit** over the network
5. **No visibility** for users over what security measures protect their data

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Q11*

---

### Card 23
**Q:** What is the fundamental asymmetry in cyber security that puts defenders at a perpetual disadvantage?

**A:**

> "Security professionals must identify and fix **all** vulnerabilities. An attacker only needs to find **one**."

This asymmetry means defenders are perpetually disadvantaged — a single missed vulnerability can be enough for full system compromise. It makes patching and proactive vulnerability management the most critical continuous obligations in security operations.

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Q26*

---

### Card 24
**Q:** Name three software-based vulnerability causes listed by Aslan et al.

**A:** Any three of:
- Input validation errors
- Buffer overflow
- SQL injection
- Cross-site scripting (XSS)
- Problems with user access control
- Incomplete or incorrect authentication
- Using components with known vulnerabilities
- Issues with web services and APIs
- Improper security testing

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Q9*

---

## Cluster 3 — Threats, Risks & Vulnerabilities (14 cards)

---

### Card 25
**Q:** What is the key difference between a virus and a worm?

**A:**
- **Virus:** Requires a user to **run an infected file** to activate; nests into other programs; does **not** activate from inserting infected media alone; requires human intervention to spread.
- **Worm:** **Self-replicating** and autonomous; spreads across networks **without user action** via email address lists, shared files, or network connections; consumes bandwidth; more complex than viruses.

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Q12*

---

### Card 26
**Q:** What are the two files contained in a Trojan horse and what does each do?

**A:**
- **File 1 (sent to user):** When opened, **automatically opens a port** on the victim's computer, allowing attacker access.
- **File 2 (run by attacker):** Gives the attacker **full remote control** of the victim's machine — enabling theft of passwords, credit card data, and sensitive documents.

Trojans are disguised as legitimate software; they do **not** self-replicate.

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Q13*

---

### Card 27
**Q:** What is a rootkit and what makes it particularly dangerous?

**A:** A rootkit **authorises hackers to control a victim's device while concealing its own presence**. It is dangerous because:
1. It is very hard to detect — it hides from the OS and security tools
2. Once installed, it gives the attacker persistent, privileged access
3. It is used as a platform for DDoS, spam distribution, and data theft

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Section 2.1*

---

### Card 28
**Q:** What is ransomware, and why is paying the ransom not a guaranteed solution?

**A:** Ransomware is malware that **encrypts files, applications, operating systems, or entire networks**, making them inaccessible. Victims are asked to pay a ransom (usually in cryptocurrency) to restore access.

Paying is **not guaranteed** because:
- Criminals may keep copies of data for future fraud or phishing
- It is impossible to verify that **all** encrypted files will be decrypted
- Payment funds and incentivises further attacks

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Q14*

---

### Card 29
**Q:** How does spyware differ from a virus?

**A:**
| | Spyware | Virus |
|---|---------|-------|
| **Intent** | Covert data collection — not designed for direct illegal harm | Explicitly malicious — damages systems |
| **Spread** | Does not copy itself between computers | Self-replicating |
| **Installation** | Installed with hidden user "consent" | Spread without consent |
| **Effect** | Records keystrokes, browsing, disk contents | Damages or disrupts host systems |

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Q15*

---

### Card 30
**Q:** What is a botnet, and what makes it particularly dangerous?

**A:** A botnet is a **network of compromised "zombie" computers** controlled remotely by an attacker. It is particularly dangerous because:
1. One operator can scale an attack across **thousands of machines simultaneously**
2. It is the primary platform for **DDoS attacks**
3. It is used for **spam distribution, data theft, and malware delivery**
4. It simultaneously threatens all three CIA pillars — Confidentiality, Integrity, and Availability

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Section 2.5*

---

### Card 31
**Q:** What is social engineering and why is it effective?

**A:** Social engineering **exploits human psychology** rather than technical vulnerabilities. The attacker tricks a target into revealing confidential information or granting access — for example by impersonating tech support, HR, or a trusted authority. It is effective because:
- Humans are often the weakest link in a security chain
- It bypasses technical controls entirely
- It requires no technical skill to execute
- Employees are generally the most vulnerable entry point

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Section 2.5*

---

### Card 32
**Q:** What is a Man-in-the-Middle (MitM) attack, and why is public Wi-Fi particularly vulnerable?

**A:** In a MitM attack, a malicious actor **secretly intercepts and potentially modifies traffic** between two communicating parties without either knowing. It is the oldest attack type.

Public Wi-Fi is particularly vulnerable because:
- Packets are often **unencrypted**
- Attackers can direct all network traffic through their own device
- **All users on the same network** are exposed simultaneously

Prevention: use HTTPS, VPNs, and avoid sensitive activity on public Wi-Fi.

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Q34*

---

### Card 33
**Q:** What is ARP poisoning, at which OSI layer does it operate, and how does it work step by step?

**A:** ARP poisoning (ARP spoofing) operates at **Layer 2 — Data Link**. Steps:

1. Attacker sends a **gratuitous ARP (GARP) packet** announcing a spoofed MAC/IP combination
2. Devices on the local network **update their ARP caches** with the false mapping
3. Traffic intended for the real host is now routed through the **attacker's machine**
4. Attacker reads/modifies traffic — becoming a **man-in-the-middle on the LAN**

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Q16*

---

### Card 34
**Q:** What is a TCP SYN flooding attack, at which OSI layer does it occur, and what does it do?

**A:** TCP SYN flooding occurs at **Layer 4 — Transport**. It is the most common attack on the Internet.

- In a normal TCP connection, a **TCP Reset (RST)** packet is sent if the receiver is not listening
- In a SYN spoofing attack, the attacker sends TCP RST packets even when the **receiver is listening**, disrupting the connection
- This fills the server's **connection table** with half-open connections, **exhausting server resources** and denying service to legitimate users

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Q19*

---

### Card 35
**Q:** What is a Smurf attack, at which OSI layer does it occur, and how does it work?

**A:** A Smurf attack is a DDoS attack at **Layer 3 — Network**:

1. Attacker **spoofs the victim's IP address**
2. Sends forged **ICMP echo requests** to computers on a broadcast network
3. All hosts on the network **reply with ICMP echo-replies directed at the victim**
4. The flood of replies **overwhelms the victim's computer**, denying service

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Q20*

---

### Card 36
**Q:** What is MAC/CAM table flooding and what is its effect?

**A:** MAC flooding (CAM Table Flooding) is a **Layer 2 — Data Link** attack:

1. Attacker overwhelms the switch's Content Access Memory (CAM) table with **fake MAC addresses**
2. The switch **can no longer map MAC addresses to specific ports**
3. The switch degrades to **hub behaviour — flooding all packets to all ports**
4. Attacker can now **intercept all traffic** on the network segment

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Q22*

---

### Card 37
**Q:** What is the main reason for DHCP security issues and what two attacks does it enable?

**A:** The main reason is the **absence of an authentication mechanism** in DHCP. This enables:

1. **Starvation attack** — a malicious DHCP client requests all available IP addresses, preventing legitimate assignment to other devices
2. **Rogue DHCP server attack** — an attacker deploys a fake DHCP server to provide incorrect configuration to clients (e.g. directing them to a malicious gateway or DNS server)

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Q23*

---

### Card 38
**Q:** Describe the three types of session hijacking.

**A:**
- **Active:** The attacker directly attacks an active session and **takes full control** of it.
- **Passive:** The attacker positions themselves between user and server, **monitoring traffic** without taking over — a covert observation mode.
- **Hybrid:** The attacker uses both active and passive techniques **depending on the goal** — observing to gather data, then acting when ready.

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Q21*

---

## Cluster 4 — OSI Model & Network Security (12 cards)

---

### Card 39
**Q:** List all 7 OSI layers from top (Layer 7) to bottom (Layer 1) with one protocol for each.

**A:**
| Layer | Name | Protocol |
|-------|------|----------|
| 7 | **Application** | HTTP (or DNS, DHCP, FTP, SMTP) |
| 6 | **Presentation** | SSL (or LPP, AFP) |
| 5 | **Session** | SCP (or PAP, RTCP) |
| 4 | **Transport** | TCP (or UDP) |
| 3 | **Network** | IPv4 (or IPv6, ICMP) |
| 2 | **Data Link** | ARP (or STP, SLIP) |
| 1 | **Physical** | Fiber optics (or twisted-pair, Wi-Fi) |

The OSI model was announced by ISO in **1984**.

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Q17*

---

### Card 40
**Q:** What attacks target the Application Layer (Layer 7) and the Presentation Layer (Layer 6)?

**A:**
**Layer 7 (Application):** DoS/DDoS, SMTP attacks, FTP bounce, browser hijacking, buffer overflow, malware delivery

**Layer 6 (Presentation):** SSL stripping, CCS (ChangeCipherSpec) manipulation, malformed SSL packets

> Layer 6 attacks typically target the cryptographic layer to downgrade or intercept encrypted communications.

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Section 3.2*

---

### Card 41
**Q:** What attacks target the Transport Layer (Layer 4)?

**A:**
- **TCP SYN flooding** — exhausts server resources by flooding with half-open connections
- **UDP flooding** — sends massive volumes of UDP packets to overwhelm a host
- **TCP sequence prediction** — attacker predicts TCP sequence numbers to inject packets into an existing session or terminate it

All three exploit the stateful nature of the TCP transport protocol.

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Section 3.2 & 3.3*

---

### Card 42
**Q:** What attacks target the Network Layer (Layer 3)?

**A:**
- **Smurf attack** — DDoS via spoofed ICMP broadcast amplification
- **IP spoofing** — falsifying source IP addresses to impersonate hosts or hide identity
- **Hijacking** — taking over a network path by corrupting routing information

All three exploit the fact that IP packets carry a source address that is not verified by routers.

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Section 3.2*

---

### Card 43
**Q:** What attacks target the Data Link Layer (Layer 2)?

**A:**
- **MAC/CAM table flooding** — overwhelms switch memory, forcing hub behaviour and enabling traffic interception
- **STP attacks** (Spanning Tree Protocol) — forged BPDU packets manipulate the network topology, redirecting traffic through the attacker
- **ARP poisoning** — GARP packets poison ARP caches, enabling man-in-the-middle attacks on the LAN

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Section 3.2*

---

### Card 44
**Q:** What attacks target the Physical Layer (Layer 1) and what environments are most vulnerable?

**A:**
- **Wiretapping** — physically intercepting signals from cables
- **Jamming** — disrupting wireless signals (particularly severe on wireless sensor networks / WSNs)
- **Tampering** — physically accessing and altering hardware

Physical layer attacks require **physical access** to infrastructure, making them most relevant in environments with inadequate physical security (e.g. unsecured server rooms, exposed network cabling, shared office spaces).

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Section 3.2*

---

### Card 45
**Q:** Describe the DHCP DORA process.

**A:** DORA is the four-step process by which a client obtains an IP address:

1. **Discovery** — client broadcasts to find a DHCP server
2. **Offer** — server responds with an available IP address and configuration (gateway, DNS)
3. **Request** — client broadcasts back requesting the offered configuration
4. **Acknowledgment** — server confirms; client can now use the network

The lack of authentication at any step is the root cause of DHCP-based attacks.

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Q18*

---

### Card 46
**Q:** How does DNS work and what is its main security vulnerability?

**A:** DNS (Domain Name System) translates **hostnames to IP addresses** via an 8-step resolution process involving recursive queries to authoritative name servers.

**Main vulnerability:** DNS responses are **not verified** — a client accepts the first response it receives. This allows an attacker to:
- Deploy a **fake DNS server** that returns malicious IP addresses
- Redirect traffic from legitimate domains to attacker-controlled servers
- Conduct **DNS spoofing / cache poisoning**

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Section 3.3*

---

### Card 47
**Q:** What are the main wireless network threats and what controls mitigate them?

**A:**
**Threats:**
- Malicious association — fake access points (rogue APs)
- Accidental association — devices connecting to unintended networks
- MAC spoofing — impersonating authorised devices
- Caffe Latte attack — targets WEP encryption

**Controls:**
- Encryption (WPA2/WPA3)
- Antivirus and firewall on endpoints
- Change default router credentials
- Disable SSID broadcasting
- MAC filtering
- Keep firmware updated

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Section 3.4*

---

### Card 48
**Q:** Why is the Session Layer (Layer 5) a high-value attack target and what are the two main attack techniques?

**A:** The Session Layer manages authenticated sessions between applications — attacking it allows an adversary to **inherit an already-authenticated user's privileges** without needing credentials.

**Two main techniques:**
1. **Session hijacking** — taking control of an active session (active, passive, or hybrid)
2. **Session ID stealing** — capturing the session token (often from cookies or URLs) to replay it and impersonate the user

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Section 3.2*

---

### Card 49
**Q:** What are the two categories of vulnerability scanning tools and give three examples of each.

**A:**
**Web application scanners:**
- **Netsparker** — web app/API scanner; no false positives
- **Acunetix** — detects 4,500+ web vulnerabilities including SQL injection and XSS
- **Nikto** — open-source web server scanner; HTTP/HTTPS

**Network/infrastructure scanners:**
- **OpenVAS** — open-source; centralised scanning under GPL
- **Nexpose** (Rapid7) — integrates with Metasploit; real-time threat monitoring
- **Wireshark** — network protocol analyser; real-time and offline; widely used

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Section 2.4*

---

### Card 50
**Q:** What is a password attack and what conditions make it easier to execute?

**A:** A password attack attempts to **seize or guess credentials** to gain unauthorised access. Conditions that facilitate it:
- **Weak or reused passwords** — common words, predictable patterns
- **Social media oversharing** — attackers profile targets to guess passwords (birthdays, pet names, etc.)
- **Lack of account lockout** — allows unlimited guessing (brute force or dictionary attack)
- **Credential dumps** — previously breached password databases sold on the dark web

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Section 2.5*

---

## Cluster 5 — Solutions, SDL & Key Challenges (10 cards)

---

### Card 51
**Q:** What are the two main categories of cyber security solutions? Give two examples of each.

**A:**
**Technical solutions:**
- TLS/SSL encryption, firewalls, IDS/IPS
- VPNs, ACLs, antivirus, ML-based detection

**Non-technical solutions:**
- *Physical:* Workstation area protection, backup storage, disaster recovery plans
- *Administrative:* User/developer training, risk assessment, vendor management, incident response policies

> Effective security requires both categories — technical controls alone are insufficient without supporting policies and people.

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Q24*

---

### Card 52
**Q:** What is the Security Development Lifecycle (SDL) and what real-world result demonstrates its effectiveness?

**A:** SDL makes **security testing mandatory at every stage of software development** (not as an afterthought). All code blocks must be tested both manually and automatically for security issues before release.

**Real-world result:** **Windows Vista**, developed using SDL, contained approximately **45% fewer errors and vulnerabilities** than Windows XP, which was developed without SDL.

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Q29*

---

### Card 53
**Q:** List five areas where Machine Learning is applied in cyber security.

**A:** Any five of:
- Malware detection and classification
- Spam identification
- Fraud detection
- Anomaly detection
- DDoS detection
- Phishing detection
- Botnet detection
- Zero-day detection
- APT (Advanced Persistent Threat) detection
- DNS classification
- Vulnerability detection

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Q25*

---

### Card 54
**Q:** What are the limitations of ML-based cyber security solutions?

**A:**
1. Prone to **bias** — results depend heavily on training data quality
2. Make **assumptions** about data that may not hold in production
3. Cannot consistently **handle outliers** or novel attack patterns
4. Increasingly targeted by **adversarial/ML-based evasion attacks** designed to bypass them
5. Struggle to classify **millions of network connections** in real time
6. Require **large, consistent, up-to-date datasets** — often unavailable
7. **High-dimensional data** is difficult to process accurately

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Q27*

---

### Card 55
**Q:** What is the role of blockchain in cyber security?

**A:** Blockchain provides a **tamper-evident, distributed ledger structure** that:
- **Validates the consistency of data** — any modification is detectable
- **Detects some complex attacks** by exposing unauthorised changes in the data chain
- Contributes to **data integrity and transparency** in security operations

It is not a standalone security tool but a supporting technology for verifying that data has not been altered.

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Q28*

---

### Card 56
**Q:** What is an Intrusion Detection System (IDS) vs. an Intrusion Prevention System (IPS)? What is their role?

**A:**
- **IDS:** Monitors network or system activity for malicious activity and **alerts** administrators — passive, detection only
- **IPS:** Monitors and also **actively blocks or prevents** detected threats — active, prevention mode

Both are technical security controls that operate within network infrastructure. They are most effective when fed with current threat intelligence (e.g. known malicious IPs, signatures from CTI feeds) and combined with continuous monitoring.

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Section 4.1*

---

### Card 57
**Q:** What are the three categories of attacks caused by system errors?

**A:**
1. **Hardware deficiencies** — e.g. Trojans exploit resource-intensive hardware weaknesses; difficult to detect
2. **Software-based bugs** — e.g. buffer overflow, SQL injection, XSS, improper authentication
3. **Vulnerabilities in network protocols** — e.g. exploiting TCP, IP, ARP, DHCP, DNS design weaknesses and misconfigured switches/routers

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Q10*

---

### Card 58
**Q:** What are the cryptography attack types and how do they differ?

**A:**
| Type | Method | CIA Target |
|------|--------|-----------|
| **Passive** | Unauthorised access to encrypted data without disrupting it — eavesdropping | Confidentiality |
| **Active** | Modifying, replaying, or forging encrypted data — altering the communication | Integrity |

Both target weaknesses in **cipher algorithms** or **key management**. Passive attacks are harder to detect; active attacks alter data and may be detected via integrity checks.

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Section 2.5*

---

### Card 59
**Q:** What are the future challenges in cyber security identified by Aslan et al.?

**A:** Any three of:
- Attacks becoming automated via **cyber-attacks-as-a-service**
- **Intelligent attacks** bypassing ML detection systems
- **Ransomware** becoming more complex
- **Social engineering** techniques continuing to evolve
- **IoT-based threats** expanding dramatically
- **Loss of control over cloud data**
- **Insider attacks** from trusted employees
- **Outdated hardware** that cannot be patched
- Insufficient consistent datasets for training ML models

*Source: [2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md](2-Best-practices-for-identifying-and-preventing-cyber-threats/study-guide.md) — Q30*

---

### Card 60
**Q:** What are the key signal words that identify each CTI type when reading a threat report, and which mitigation maps to which attack stage?

**A:**
**CTI type signal words (quick reference):**
- **Strategic:** motivation, geopolitical, historically, long-term
- **Tactical:** TTPs, lateral movement, phishing, credential theft
- **Operational:** current campaign, observed on [date], active infrastructure
- **Technical:** IP addresses, file hashes, domain names, CVE numbers

**Mitigation to attack stage mapping:**
| Attack Stage | Primary Mitigations |
|-------------|---------------------|
| Initial access (phishing) | Email filtering, phishing-resistant MFA, awareness training |
| Lateral movement | Least privilege, network segmentation, monitoring |
| Ransomware payload | EDR, endpoint protection, patching |
| Recovery | Off-site backups, tested incident response plan |

*Source: [week-2-summary.md](week-2-summary.md) — Sections 1 & 2*

---

*End of Week 2 Flashcards — 60 cards across 5 clusters*
