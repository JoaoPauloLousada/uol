# Study Guide: A Comprehensive Review of Cyber Security Vulnerabilities, Threats, Attacks, and Solutions
**Aslan et al., Electronics 2023, 12, 1333**

---

## Part 1: Key Topics Summary

---

### 1. Cyber Security Fundamentals

#### 1.1 Definitions
- **Data security**: protects data from unauthorised access/modification throughout its lifecycle.
- **Information security**: prevents unauthorised access, use, disclosure, or destruction of physical/electronic information.
- **Network security**: safeguards confidentiality, integrity, and accessibility of networks and data in transit.
- **Cyber security**: the broadest scope — protects computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks; covers end-to-end information flows.

#### 1.2 History of Cybercrime by Decade (Table 2)

| Period | Milestone |
|--------|-----------|
| 1940s | No computer crime |
| 1950s | Phone phreaking |
| 1960s | "Hacking" and "vulnerability" terms emerge; first IBM CTSS vulnerability (1965) |
| 1970s | Foundation of computer security; ARPANET; first virus "Creeper" (1971) |
| 1980s | TCSEC "Orange Book" (DoD, 1985); commercial antivirus (1987); cyber espionage |
| 1990s | Internet growth; Melissa & ILOVEYOU viruses; SSL introduced (Netscape, 1995) |
| 2000s | Organised hacker groups; MyDoom worm (DDoS, 2004); Zeus Trojan (2007) |
| 2010s | Mirai IoT malware (2016); WannaCry ransomware affecting 150 countries (2017) |
| 2020s | Cybercrime as an industry; hacking-as-a-service platforms |

#### 1.3 The CIA Triad — Principles of Information Security

| Principle | Definition | Tools to Achieve It |
|-----------|------------|---------------------|
| **Confidentiality** | Protecting information from unauthorised users | Encryption, authentication, access control |
| **Integrity** | Ensuring data accuracy, consistency, and completeness over its lifecycle | Hashing, data consistency checks, validation |
| **Availability** | Ensuring data is accessible when an authorised user needs it | Backups, redundancy, system resiliency, eliminating single points of failure |

> The CIA triad is the "Principle of Information Security." Three dimensions of cyber security: security principles (CIA), information states (storage/processing/transmission), countermeasures (policies, technologies, users).

#### 1.4 AAA Framework
- **Authentication**: verifying user identities (username/password)
- **Authorisation**: identifying which resources users can access and what operations they can perform
- **Accounting**: monitoring users' activities and resources accessed

#### 1.5 Why Cyber Attacks Are Increasing (5 Reasons)

1. **System errors** — hardware deficiencies, software-based bugs, network protocol vulnerabilities
   - Hardware: difficult to detect; Trojans cause excessive resource consumption
   - Software: input validation errors, buffer overflow, SQL injection, XSS, improper auth
   - Network: TCP, IP, ARP, DHCP, DNS vulnerabilities; misconfigured switches/routers
2. **Emerging technologies** — ~6 billion smartphones; IoT devices predicted to reach 50 billion; cloud computing shared infrastructure; critical infrastructure systems (SCADA)
3. **Increase in knowledge** — attack tools lowered the skill bar; "script kiddies"; cyber-attacks-as-a-service platforms; attack complexity increases while attacker knowledge required *decreases* (Figure 3)
4. **Digitalisation of daily life** — social media, financial transactions, meetings, education, news all moved online (COVID-19 accelerated this)
5. **No geographical boundaries** — attackers operate 24/7 from anywhere; absence of consistent international cyber law

---

### 2. Threats, Vulnerabilities, Exploits, and Attacks

#### 2.1 Threats (Figure 4: Virus, Worm, Trojan, Rootkit, Hacker)

| Threat | Key Characteristics |
|--------|---------------------|
| **Computer Virus** | Needs to be "run" to activate; nests in other files; does NOT activate just from inserting infected media |
| **Computer Worm** | Self-replicating without user action; spreads via email attachments, shared files; utilises bandwidth; more complex than viruses |
| **Trojan Horse** | Disguised as legitimate software; creates backdoors; opens ports; not self-replicating; hard to detect |
| **Rootkit** | Authorises hackers to control victims' devices; conceals its presence; used for DDoS, spam, data theft |
| **Hacker/Predator** | Human threat; installs malicious software; uses phishing and spam; employees are often the weakest link |

#### 2.2 Risks

| Risk Type | Description |
|-----------|-------------|
| **Spyware** | Collects data without consent; records keystrokes, browsing, disk contents; installed with user "consent" (hidden) |
| **Scareware** | "Rogueware"; fake virus alerts scare users into buying bogus software |
| **Joke Programs** | No malicious intent but can trigger user panic causing data damage |
| **Ransomware** | Encrypts files; demands payment (usually cryptocurrency); spread via malicious attachments or links |
| **Hacking Tools** | Programs assisting hacking (e.g. Hacktool:Win32/Keygen); often bundled with malware |
| **Remote Access** | Legitimate technology abused; attackers exploit vulnerable remote connections to steal data or install malware |

#### 2.3 Vulnerabilities

| Type | Example Attacks |
|------|-----------------|
| Software | Buffer overflow, race conditions |
| Firewall | Misconfigurations allow attacks on trusted networks |
| TCP/IP | ARP attacks, fragmentation attacks |
| Wireless | SSID issues, WEP weaknesses, rogue access points |
| Operating System | Windows, macOS, Unix misconfiguration |
| Web Server | Sniffing, spoofing (design/engineering errors) |

#### 2.4 Vulnerability Scanning Tools

| Tool | Key Feature |
|------|-------------|
| **Netsparker** | Web app/API scanner; no false positives |
| **Acunetix** | Detects 4500+ web vulnerabilities including SQL injection and XSS |
| **Intruder** | Proactive scanner; 10,000+ checks; integrates with Slack/Jira/AWS |
| **SolarWinds** | Network configuration monitoring |
| **Apptrana** | Web app scanner; integrates with Indusface WAF |
| **OpenVAS** | Open-source; centralized scanning under GPL |
| **Nexpose** | Rapid7; integrates with Metasploit; real-time threat monitoring |
| **Nikto** | Open-source web server scanner; HTTP/HTTPS/HTTPD |
| **MBSA** | Microsoft Baseline Security Analyzer; Windows systems; HOTFIX checks |
| **Wireshark** | Network protocol analyzer; real-time and offline; widely used by professionals |

#### 2.5 Attack Types (Figure 5)

| Attack | Description |
|--------|-------------|
| **Social Engineering** | Exploits human vulnerability; tricks people into revealing info or granting access |
| **Application Attack** | Targets application layer code; exploits frameworks, legacy certificates, auth flaws |
| **Cryptography Attack** | Passive (unauthorised access without disruption) or active (modifying data); targets cipher/key weaknesses |
| **Hijacking** | Takes control of systems/sessions; types: browser, session, domain, clipboard, DNS, IP, page hijacking |
| **Computer Network Attack (CNA)** | Manipulates/corrupts/destroys data in networks to gain control; relies on data stream to execute |
| **Phishing** | Fraud via email from fake known source; obtains credentials; prevention: HTTPS, security awareness |
| **Malware** | Umbrella term: viruses, worms, Trojans, rootkits, Stuxnet; can gather info, sabotage, extort |
| **Bots & Botnets** | Bot = automated program; botnet = network of thousands of "zombie" computers controlled remotely; used for spam and DDoS |
| **Password Attack** | Seizes passwords; facilitated by easy passwords and social media info sharing |
| **Man-in-the-Middle (MitM)** | Oldest attack type; attacker secretly intercepts and reads/modifies traffic between two parties; free Wi-Fi is most vulnerable |

---

### 3. Network Security — The OSI Model

#### 3.1 OSI Model Overview
- Announced by ISO in **1984**
- Divides communication into **7 layers**
- **Upper Layers** (5, 6, 7): application work
- **Lower Layers** (1, 2, 3, 4): transportation functions

#### 3.2 OSI Layers, Protocols, and Attacks

| Layer | Name | Protocols | Key Attacks |
|-------|------|-----------|-------------|
| 7 | **Application** | DHCP, DNS, FTP, HTTP, IMAP, POP3, SMTP, TELNET, SNMP | DoS/DDoS, SMTP attacks, FTP bounce, browser hijacking, buffer overflow, malware |
| 6 | **Presentation** | SSL, LPP, AFP, ICA, NCP, NDR | SSL stripping, CCS manipulation, malformed SSL |
| 5 | **Session** | SCP, ZIP, RTCP, PAP, ISO-SP | Session hijacking (active, passive, hybrid), session ID stealing |
| 4 | **Transport** | TCP, UDP | TCP SYN flooding, UDP flooding, TCP sequence prediction |
| 3 | **Network** | IPv4, IPv6, ICMP | Smurf attack (DDoS via ICMP), IP spoofing, hijacking |
| 2 | **Data Link** | ARP, STP, SLIP | MAC/CAM table flooding, STP attacks (forged BPDU), ARP poisoning |
| 1 | **Physical** | Fiber optics, twisted-pair, copper, Wi-Fi | Wiretapping, jamming (severe on WSNs), tampering |

#### 3.3 Key Protocol Details

- **DHCP (Application Layer)**: 4-step process — Discovery → Offer → Request → Acknowledgment (DORA). Main vulnerability: no authentication mechanism; vulnerable to starvation attacks and rogue DHCP servers.
- **DNS (Application Layer)**: Translates hostnames to IP addresses. 8-step resolution process. Vulnerable to fake servers (responses not verified).
- **TCP (Transport Layer)**: Connection-oriented; prioritises data quality. Three threats: TCP SYN flooding, UDP flooding, TCP sequence prediction.
- **ARP (Data Link Layer)**: Maps IP addresses to MAC addresses. ARP poisoning (GARP packets) lets attackers intercept traffic.

#### 3.4 Wireless Network Security

- Threats: malicious association (fake AP), accidental association, MAC spoofing, Caffe Latte attack (targets WEP)
- Protection: encryption, antivirus/firewall, change default router credentials, disable SSID broadcasting, MAC filtering, update firmware

---

### 4. Cyber Security Solutions

#### 4.1 Two Main Categories (Figure 9)

**Technical Solutions**
- Technologies & Platforms: Access Control, Big Data, Blockchain, Cloud, Encryption, Virtualization
- Used Tools: TLS, SSL, VPN, IPsec, WSA, ESA, IPS, IDS, Firewall, Antivirus, Vulnerability Scanners, ACLs
- AI & Data Science: Statistics, Probability, Data Mining, Machine Learning

**Non-Technical Solutions**
- Physical: Workstation area protection, data disaster recovery plan, computing device control, backup storage
- Administrative: User/developer training, risk assessment, vendor management, policies/procedures/standards, incident response

#### 4.2 Machine Learning in Cyber Security

ML application areas include:
- Malware detection & classification
- Spam identification
- Fraud detection
- Anomaly detection
- DDoS detection
- Phishing detection
- Botnet detection
- Zero-day detection
- APT detection
- Vulnerability detection

**ML limitations**: prone to bias; assume data properties; cannot handle outliers consistently; ML-based attacks are increasing; intelligent attacks bypass ML detection systems.

#### 4.3 Key Challenges in Cyber Security

- Security professionals must fix ALL vulnerabilities; attackers need to find only ONE
- Attacks are increasingly automated via cyber-attacks-as-a-service
- Intelligent attacks bypass detection systems
- Classifying millions of network connections is challenging
- Protection of multiple components simultaneously is complex
- Insider attacks and outdated hardware
- Social engineering techniques continue to evolve
- Loss of control over cloud data
- Ransomware complexity is increasing

---

## Part 2: Exam Practice Questions

---

### Section A: Definitions and Fundamentals

**Q1.** What is the difference between data security, information security, network security, and cyber security?

> **Answer:** *Data security* protects digital data from unauthorised access throughout its lifecycle. *Information security* prevents unauthorised access, use, or destruction of physical or electronic information. *Network security* safeguards confidentiality, integrity, and accessibility of networks and data transmitted in them. *Cyber security* is the broadest — it covers end-to-end protection of computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks.

---

**Q2.** Define the CIA triad and give one method to achieve each property.

> **Answer:** The CIA triad is the core principle of information security:
> - **Confidentiality** — protecting data from unauthorised users. Achieved via encryption, access control, or authentication.
> - **Integrity** — ensuring data accuracy and completeness throughout its lifecycle. Achieved via hashing and data validation checks.
> - **Availability** — ensuring data is accessible when authorised users need it. Achieved via system backups, redundancy, and eliminating single points of failure.

---

**Q3.** What are the three services provided by the AAA framework?

> **Answer:**
> - **Authentication**: verifies user identities, typically through username/password.
> - **Authorisation**: determines which resources users can access and what operations they can perform.
> - **Accounting**: monitors user activities, resources accessed, and changes made.

---

**Q4.** According to the article, when did the first computer vulnerability appear, and where?

> **Answer:** The first vulnerability for computer systems was found in the IBM 7094 Compatible Time-Sharing System (CTSS) machine in 1965.

---

**Q5.** What was the significance of the "Creeper" and "Reaper" programs?

> **Answer:** In 1971, Bob Thomas created "Creeper," the first virus, which could move over the ARPANET. Ray Tomlinson then created "Reaper," which could cross ARPANET and delete the Creeper — making Reaper the first example of an antivirus program.

---

**Q6.** What was TCSEC and why was it significant?

> **Answer:** The Trusted Computer System Evaluation Criteria (TCSEC), also known as the "Orange Book," was created by the US Department of Defense in 1985. It was the first security guide for computer systems, establishing standards for evaluating the security of computer systems.

---

### Section B: Why Cyber Attacks Are Increasing

**Q7.** List the five main reasons cyber attacks are increasing according to the article.

> **Answer:**
> 1. Causes arising from existing system errors (hardware, software, network vulnerabilities)
> 2. Causes arising from emerging technologies (smartphones, IoT, cloud, critical infrastructure)
> 3. Reasons arising from the increase in knowledge (easier access to attack tools, cyber-attacks-as-a-service)
> 4. Transferring daily life into the digital environment (social media, online banking, COVID-19 acceleration)
> 5. Attacks have no geographical boundaries, making detection challenging

---

**Q8.** How does Figure 3 in the article (attacker knowledge vs. attack complexity) challenge a common assumption about cyber attackers?

> **Answer:** Figure 3 shows that over time, attack complexity has *increased* while the technical knowledge required by attackers has *decreased*. This is because widespread attack tools, cyber-attacks-as-a-service platforms, and easily shareable knowledge allow "script kiddies" — people with little technical understanding — to launch sophisticated attacks. The assumption that more complex attacks require more skilled attackers is therefore incorrect.

---

**Q9.** Name three software-based vulnerability causes listed in the article.

> **Answer:** Any three of: input validation errors; problems with user access control; incomplete or incorrect authentication; buffer overflow; SQL injection; cross-site scripting (XSS); using components with known vulnerabilities; issues with web services and APIs; improper security testing.

---

**Q10.** What are the three categories of attacks caused by system errors?

> **Answer:**
> 1. Attacks caused by hardware deficiencies (e.g., Trojans causing excessive resource consumption)
> 2. Attacks caused by software-based bugs (e.g., buffer overflow, SQL injection)
> 3. Attacks caused by vulnerabilities in computer networks (e.g., exploiting TCP, IP, ARP, DHCP, DNS protocols)

---

**Q11.** Why does cloud computing raise specific security concerns?

> **Answer:** The article identifies five main reasons: (a) companies lose control over their data; (b) the same physical resources are shared between different companies; (c) security concerns around data storage in shared environments; (d) vulnerabilities in virtual machine monitors (VMMs) such as Xen, VMware, and Hyper-V; (e) attacks that occur while data is being moved over the network. When data is in the cloud, users have no visibility over where data is stored or what security measures protect it.

---

### Section C: Threats, Risks, and Vulnerabilities

**Q12.** What is the key difference between a virus and a worm?

> **Answer:** A virus requires a user to "run" an infected file to activate — it nests into other programs and is user-triggered. A worm is more autonomous: it self-replicates and spreads across networks without requiring user action, using resources like email address lists to deliver copies to others and consuming bandwidth in the process.

---

**Q13.** What are the two files contained in a Trojan horse, and what does each do?

> **Answer:** The first file is sent to the user and, when opened, allows an attacker to access the user's computer by automatically opening a port. The second file, when run by the attacker, gives full remote access to the victim's computer, enabling theft of passwords, credit card information, and other sensitive documents.

---

**Q14.** What is ransomware, and why is paying the ransom not a guaranteed solution?

> **Answer:** Ransomware is malware that encrypts files, documents, applications, operating systems, networks, or servers, making them inaccessible. Victims are asked to pay a ransom (usually in cryptocurrency) to have their data restored. Paying is not guaranteed to work because criminals may keep copies of the data for use in fraud or phishing attempts, and it is impossible to verify that all encrypted files will actually be decrypted.

---

**Q15.** How does spyware differ from a virus?

> **Answer:** Spyware is not explicitly designed for direct illegal harm, it does not copy itself between computers, and it is typically installed with some form of user "consent" (even if that consent is obtained without the user being fully informed). It collects data covertly (keystrokes, browsing, disk data) rather than damaging systems. A virus, by contrast, is explicitly malicious, self-replicating, and harmful to host systems.

---

**Q16.** What is ARP poisoning and at which OSI layer does it operate?

> **Answer:** ARP poisoning (also called ARP spoofing) is an attack carried out at the **Data Link Layer (Layer 2)**. When an attacker sends a gratuitous ARP (GARP) packet announcing spoofed MAC and IP address combinations, devices on the local network update their ARP caches. The attacker can then force traffic to flow through their device, enabling traffic interception.

---

### Section D: Network Security and the OSI Model

**Q17.** List all 7 OSI layers from top to bottom and give one protocol for each.

> **Answer:**
> 7. Application — HTTP (or DNS, DHCP, FTP, SMTP)
> 6. Presentation — SSL (or LPP, AFP)
> 5. Session — SCP (or PAP, RTCP)
> 4. Transport — TCP (or UDP)
> 3. Network — IPv4 (or IPv6, ICMP)
> 2. Data Link — ARP (or STP, SLIP)
> 1. Physical — Fiber optics (or twisted-pair, Wi-Fi)

---

**Q18.** Describe the DHCP DORA process.

> **Answer:** DORA is the four-step process by which a client gets an IP address:
> 1. **Discovery** — client broadcasts to find a DHCP server
> 2. **Offer** — server responds with an IP address and configuration (gateway, DNS, etc.)
> 3. **Request** — client broadcasts back requesting the offered configuration
> 4. **Acknowledgment** — server confirms and the client can use the network

---

**Q19.** What is a TCP SYN flooding attack and at which OSI layer does it occur?

> **Answer:** A TCP SYN flooding attack (also called TCP flooding) occurs at the **Transport Layer (Layer 4)**. It is the most common attack on the Internet. In a normal TCP connection, a sender sends a TCP Reset (TCP RST) packet after confirming the receiver is not listening. In a SYN spoofing attack, the sender sends the TCP RST packet even when the receiver *is* listening, disrupting the connection and exhausting server resources.

---

**Q20.** What is a Smurf attack?

> **Answer:** A Smurf attack is a type of Distributed Denial-of-Service (DDoS) attack that occurs at the **Network Layer (Layer 3)**. The attacker spoofs the victim's IP address and sends forged ICMP echo requests to computers on the same broadcast network. The computers all reply with ICMP echo-replies directed to the victim, flooding and overwhelming the victim's computer.

---

**Q21.** Describe the three types of session hijacking.

> **Answer:**
> - **Active session hijacking**: the attacker directly attacks an active session, taking control of it.
> - **Passive session hijacking**: the attacker positions themselves between the user and server, monitoring (but not modifying) the traffic without taking over the session.
> - **Hybrid session hijacking**: the attacker uses both active and passive techniques depending on the goal.

---

**Q22.** What is MAC flooding (CAM Table Flooding) and what is its effect?

> **Answer:** MAC flooding (a.k.a. CAM Table Flooding) is a Data Link Layer attack that forces a switch to operate like a hub. By overwhelming the switch's Content Access Memory (CAM) table with fake MAC addresses, the switch can no longer map MAC addresses to specific ports and instead floods all packets to all ports — allowing the attacker to intercept traffic.

---

**Q23.** Why is the main reason for DHCP security issues, and what attacks does it enable?

> **Answer:** The main reason is the **lack of an authentication mechanism** in DHCP. This enables two attacks: (1) a **starvation attack**, where a malicious DHCP client requests all available IP addresses to prevent legitimate assignment; and (2) a **rogue DHCP server attack**, where an attacker deploys a fake DHCP server to provide incorrect configuration information to network clients (e.g., directing them to a malicious gateway or DNS server).

---

### Section E: Solutions and Future Challenges

**Q24.** What are the two main categories of cyber security solutions? Give two examples of each.

> **Answer:**
> - **Technical solutions**: TLS/SSL encryption, firewalls, IDS/IPS, VPNs, ACLs, antivirus scanners, machine learning-based detection, blockchain for data integrity, cloud platforms.
> - **Non-technical solutions**: Physical — workstation area protection, data disaster recovery plans, backup storage. Administrative — user/developer training, risk assessment, vendor management, incident response policies.

---

**Q25.** List five areas where Machine Learning is applied in cyber security.

> **Answer:** Any five of: malware detection, malware classification, spam identification, fraud detection, anomaly detection, DDoS detection, phishing detection, botnet detection, zero-day detection, APT detection, DNS classification, hidden channel detection, vulnerability detection, cryptographic attack detection.

---

**Q26.** The article identifies a fundamental asymmetry in cyber security. What is it?

> **Answer:** "Security professionals must identify and fix *all* vulnerabilities — an attacker only needs to find *one*." This asymmetry means defenders are perpetually at a disadvantage, as a single missed vulnerability can be enough for an attacker to gain access to the entire system.

---

**Q27.** What are the limitations of ML-based cyber security solutions mentioned in the article?

> **Answer:** ML-based solutions: (1) are prone to bias; (2) make assumptions about data; (3) cannot always handle outliers; (4) are increasingly targeted by adversarial/ML-based attacks designed to evade them; (5) struggle with classifying millions of network connections; (6) deal poorly with high-dimensional data; (7) require consistent and up-to-date datasets that are often not available.

---

**Q28.** What is the role of blockchain in cyber security, as discussed in the article?

> **Answer:** Blockchain technology helps to **validate the consistency of data** and can **detect some complex attacks**. It provides a tamper-evident, distributed ledger structure that makes data manipulation detectable, contributing to data integrity and transparency in security operations.

---

**Q29.** How does the Security Development Lifecycle (SDL) reduce software vulnerabilities? Give a real-world example from the article.

> **Answer:** SDL makes security testing mandatory at every stage of software development rather than as an afterthought, requiring all code blocks to be tested manually and automatically. The real-world example given is **Windows Vista**: developed using SDL, it contained approximately **45% fewer errors and vulnerabilities** than Windows XP, which was developed without SDL.

---

**Q30.** According to the conclusion, what are three future challenges in the cyber security domain?

> **Answer:** Any three of: attacks becoming automated via cyber-attacks-as-a-service; intelligent attacks bypassing detection systems; increasing complexity of attacks; ransomware becoming more complicated; social engineering techniques evolving; IoT-based threats expanding; loss of control over cloud data; insider attacks; outdated hardware; insufficient consistent datasets for testing ML models.

---

### Section F: Notable Real-World Examples (Likely Scenario/Context Questions)

**Q31.** What was the WannaCry ransomware attack, and what vulnerability did it exploit?

> **Answer:** WannaCry was ransomware that in 2017 encrypted computer hard drives and demanded payment. It exploited a **Windows vulnerability** and affected systems in **150 countries** across the globe, making it one of the most widespread ransomware campaigns in history.

---

**Q32.** What was the Mirai malware attack and what was novel about its attack vector?

> **Answer:** In 2016, Mirai malware exploited vulnerabilities in **IoT devices** (smart devices connected to the Internet) to launch large-scale **DDoS attacks**. It was notable because it was one of the first major attacks to weaponise the Internet of Things infrastructure rather than traditional computers.

---

**Q33.** What was the Stuxnet worm and what made it significant?

> **Answer:** Stuxnet (2010) attacked **programmable logic units** by stealing source codes, effectively taking **control of industrial processes**. It is widely considered the first major example of a cyber weapon targeting critical infrastructure (specifically industrial control systems/SCADA), demonstrating that cyber attacks could have real-world physical consequences.

---

**Q34.** What is a Man-in-the-Middle (MitM) attack, and why is public Wi-Fi particularly vulnerable?

> **Answer:** In a MitM attack, a malicious actor secretly inserts themselves into the communication between two parties, reading and potentially modifying the transmitted data without either party knowing. Public Wi-Fi areas are particularly vulnerable because the contents of unencrypted packets can be easily read. Attackers direct network traffic to pass through themselves, allowing them to capture personal data or passwords from all users on that network.

---

*End of Study Guide*

> **Tip for the exam:** The article's structure maps directly to question types: definitions (Section 2), threat/attack descriptions with examples (Section 3), OSI layer protocols and attacks (Section 4), and solutions/challenges (Section 5). Pay particular attention to the CIA triad, the OSI model layer-by-layer breakdowns, and the distinction between different malware types.
