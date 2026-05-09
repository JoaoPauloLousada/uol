# Study Guide: A Comprehensive Review Study of Cyber-Attacks and Cyber Security
**Li & Liu, Energy Reports 7 (2021) 8176–8186**

---

## Part 1: Key Topics Summary

---

### 1. Fundamental Concepts

#### 1.1 Key Definitions (Table 1)

| Term | Definition |
|------|------------|
| **Cyber space** | Interconnected networks (IT infrastructures, communication networks, computer systems, embedded processors, vital industry controllers, information virtual environment) and the interaction between this environment and human beings |
| **Cyber capital** | A vital (or sensitive) infrastructure of a country, a vital cyber system, key information, or individuals belonging to a country |
| **Cyber vulnerability** | A weakness within an asset, security procedures or internal controls, or the implementation of a national cyber asset that can be exploited by internal or external threats |
| **Cyber threats** | Any event with the ability to strike a blow to missions, tasks, images, national cyber assets or personnel through an information system, through unauthorized access, destruction, disclosure, alteration of information, or obstruction of service delivery |
| **Cyber threat level** | Transnational, national, institutional, provincial, critical, and critical levels of infrastructure |
| **Probability of cyber threats** | Very high (imminent), high (probable), low (unlikely), very low (very unlikely) |
| **Intensity of cyber threat** | Very high (disaster), high (crisis), moderate (major security incident), low (security incident), very low (security incident) |
| **Cyber attack** | Any unauthorized cyber act aimed at violating the security policy of a cyber-asset and causing damage, disruption or denial of services/access to information |
| **Cyber weapon** | A system designed and manufactured to change the structure or operation of other cyber systems (bot networks, logic bombs, cyber vulnerability exploitation software, malware, traffic generation systems) |
| **Cyber warfare** | The highest level and most complex type of cyber-attack (cyber operation) carried out against national cyber interests with the most severe consequences |
| **Cyber defense** | Utilization of all unarmed cyber and non-cyber facilities to create deterrence, prevention, timely detection, effective and deterrent response to any cyber attack |
| **Virus** | A self-replicating program that spreads to other documents and programs by duplicating itself; popular viruses include NIMDA, SLAMMER, and SASSER |
| **Hacker** | A person who enters a system without permission or who increases his/her access to information to browse, copy, replace, delete or destroy it |

#### 1.2 Anatomy of a Cyber-Attack (Fig. 1)

The USNM Strategy for cyberspace operations describes four sequential steps:

```
Target Identification → Data Collection → Perform a Cyber-Attack → Investigation
```

| Step | Description |
|------|-------------|
| **Target identification** | Identifying the specific system, network, or individual to attack |
| **Data collection** | Gathering intelligence about the target's vulnerabilities, systems, and defences |
| **Perform a cyber-attack** | Executing the attack using the chosen method and tools |
| **Investigation** | Analysing results, establishing persistence, or covering tracks |

> Computer network operations include **attack**, **defense**, and **utilization enabling**. Utilization enabling focuses on collection and analysis of information from networks — it may be the prelude to an attack rather than an interruption of networks.

#### 1.3 Distinguishing Cyber-Crime, Cyber-Warfare, and Cyber-Attack (Table 2, Fig. 2)

| Type | Nature and Characteristics |
|------|---------------------------|
| **Cyber-crime** | Cyber actions taken only by non-governmental attackers; the action is carried out by a computer system and is merely in violation of criminal law |
| **Cyber-attack and cyber-warfare** | The purpose is to destroy and disrupt the operation of a computer network; the attack must have political or security purposes |
| **Cyber-warfare** | The effects of a cyber-attack are the same as an armed attack, or the cyber act took place in the context of an armed attack |

> Cyber-crime and cyber-warfare **overlap** — cyber-attack sits in the intersection (Fig. 2). A distinction: cyber-crime is result-neutral (the action itself is the violation); cyber-attack is result-oriented (it is an attack *if* it leads to injury or financial damage).

#### 1.4 Definitions of Cyber-Attack from Specialists

Four widely cited definitions, each with a different focus:

1. **Richard Clark:** Actions taken by countries to infiltrate computers or computer networks to cause damage or disruption — limited to state actors; excludes non-governmental groups.
2. **Michael Hayden:** Any intentional attempt to disrupt or destroy another country's computer networks — broad but lacks distinction between cybercrime and cyber-attack.
3. **Martin Libicki:** Digital attacks on computer systems that make attacked systems appear normal while producing untrue responses — excludes a wide range of potential national security threats.
4. **Tallinn Manual Group:** An offensive or defensive cyber operation that can cause injury or death, or damage or destruction of property — result-oriented; uses *effects* (not actions) as the criterion.

> No universally accepted definition exists. The absence of a clear definition obscures legal paths, leads to diverse interpretations, and can produce contradictory legal conclusions.

#### 1.5 Encryption as a Defence Tool

Encryption is a **reversible method** of encrypting data requiring a key to decrypt. It can be used in conjunction with encryption to provide an additional level of confidentiality. Uses include:
- Protecting important and private information from strangers and criminals
- Hiding unauthorized activities from law enforcement

> **Trap Doors** permit external user access to software without the knowledge of the computer user. **Sniffers** steal usernames and passwords by examining each packet in the data stream.

---

### 2. Cyber Space Threats

#### 2.1 Sources of Cyber Threats (Fig. 3)

Six distinct source categories:

| Source | Description |
|--------|-------------|
| **Foreign countries** | Intelligence services using cyber tools for intelligence gathering and espionage; responsible for misuse and destruction of countries' information infrastructures |
| **Hackers** | Individuals who infiltrate networks with minimum knowledge and skills using downloaded programs and protocols |
| **Organized hackers** | Groups (including Hacktivism) with political motives that attack popular web pages or e-mail hosts, imposing increased loads and announcing political messages |
| **Sabotage groups** | Groups that attack cyber systems to make money; their attacks are increasing |
| **Terrorists** | Seek to destroy, disable, or maliciously exploit vital infrastructure to menace national security, inflict losses, weaken the economy, and undermine public trust |
| **Internal dissatisfied factors** | Operating within organizations; do not need significant knowledge of cyber-attacks — their target system awareness allows unlimited access |

> The nature of cyberspace means there is currently **no technical ability** to assign activities to individuals or groups with a high degree of confidence. Basic threats are: foreign threats, internal threats, supply chain threats, and threats from insufficient operational capability of local forces.

#### 2.2 Characteristics That Make Cyberspace Uniquely Threatening

- **Low cost of entry** — very little investment required to launch attacks
- **Anonymity** — attacker identity is difficult to confirm
- **Geographical uncertainty** — threats have no fixed physical location
- **Lack of public transparency** — attacks occur invisibly
- **Scalability** — cyber threats have a very wide range of effects compared to physical weapons
- **Asymmetry** — a small number of individuals can effectively control or manage cyber warfare

> A bomb has a limited physical range; cyber threats have a very wide range of effects. Whoever controls cyberspace can control real-world operations.

---

### 3. Cyber-Attack Types

#### 3.1 Eight Main Cyber-Attack Types (Fig. 4)

| Attack Type | How It Works |
|-------------|--------------|
| **Denial of Service (DoS)** | Attacker immerses target computers in messages, blocking the legal flow of data and preventing any system from using the Internet or communicating with other systems |
| **Distributed DoS (DDoS)** | Instead of a single source, attacks from a large number of distributed systems simultaneously; often uses worms multiplied across many computers |
| **Logic bomb** | A programmer enters code into a program that automatically performs a destructive activity when a specific event occurs |
| **Abuse tools** | Publicly available tools that detect and enter vulnerabilities in networks with different skill levels |
| **Sniffer** | Eavesdrops on routed information; looks for specific information such as passwords by examining each packet in the data stream |
| **Trojan horse** | Hides dangerous code inside a program that commonly looks helpful; the user is willing to run it |
| **Virus** | Self-replicating program that befouls system files by inserting a copy into those files; requires human intervention to spread |
| **Worm** | An autonomous system program that regenerates itself by copying from one computer to another in the network; does **not** require human intervention |
| **Botnet** | A network of infected remote control systems used to distribute malware, coordinate attacks, send spam and steal messages; secretly installed on target computers; also called **electronic soldiers** |
| **Spyware** | Software that secretly monitors and collects user information |
| **Frequent counting (Cream)** | Methods for counting system access or connection attempts; used to identify patterns of attacks |

> **Virus vs Worm distinction:** Viruses require human intervention to spread; worms are autonomous and self-propagating across networks.

---

### 4. Cyber-Security

#### 4.1 The CIA Triad (Fig. 6)

The security of any organization begins with three core principles — referred to as the **security triangle** or **CIA**:

| Principle | Definition | Example |
|-----------|------------|---------|
| **Confidentiality** | Only authorized sources can access sensitive information and functions | Military secrets |
| **Integrity** | Only authorized individuals and resources can modify, add or remove sensitive information and functions | A user enters incorrect data into a database |
| **Availability** | Systems, functions, and data must be available on demand based on SLA service levels | Service outage |

> Any advanced hacker can bypass the CIA triad as a basic defence. As an organization grows, cyber-security becomes more difficult to maintain.

#### 4.2 Seven Types of Cyber Security (Fig. 5)

| Type | What It Protects |
|------|-----------------|
| **Network security** | Protects the computer network from disruptors (malware, hacking); keeps networks out of reach of hackers, organized attackers, and malware |
| **Infrastructure security** | Protects critical infrastructure components |
| **Application security** | Uses hardware and software (anti-virus, encryption, firewalls) to protect against external threats that may interfere with application development |
| **Information security** | Protects physical and digital data against unauthorized access, disclosure, misuse, unauthorized changes, and deletion |
| **Operational security** | Includes processes and decisions to control and protect data; defines user permissions and when/where information may be stored or shared |
| **Cloud security** | Protects information stored in the cloud; monitors to remove on-site attack risks |
| **End-user training** | Addresses unpredictable aspects of cyber-security — the human element. Teaches users to remove suspicious attachments, avoid anonymous USBs, and follow corporate security plans |

#### 4.3 Cybercrime Methods (Table 3)

| Method | Description |
|--------|-------------|
| **Denial of Service** | A hacker consumes all server resources so access to the service is not possible for system users |
| **Man-in-the-Middle** | A hacker puts himself between the victim device and the router to eavesdrop on or change data packets |
| **Malware** | Victims come into contact with worms or viruses and their devices become infected |
| **Phishing** | A hacker sends a seemingly legitimate email asking users to disclose confidential information |

> Two types of cybercrime: **(1)** crimes that use a system as a target, and **(2)** crimes that a system unknowingly plays a role in creating.

---

### 5. Cyber-Security Policy

#### 5.1 What Is Cyber-Security Policy?

Cyber-security policy refers to **information distribution rules and regulations**, private sector goals for data conservation, and system operations strategies for technology control. There is no fixed definition — the term is used for different purposes across contexts.

#### 5.2 National vs Corporate Cyber-Security Policy

| Level | Scope | Who It Covers |
|-------|-------|---------------|
| **National** | All citizens and foreign businessmen in its field | Broader and more comprehensive |
| **Corporate** | Employees employed or with a legal contract | Limited to the domain; cannot govern resource providers without a formal contract |

> Corporate security objectives can be very different from national objectives. In government, goals become policies through legislation. In companies, a centralized security unit sets standards and solutions — which become the internal guide for regulations.

#### 5.3 Limitations of Cyber-Security Policy

- Organizations need a **security perspective** on how cyber-security works; you must always be one step ahead of hackers
- The challenge in cyber-security is the absence of **eligible occupational** staff to do the work
- Many people are at the lower extremity of the vision of cyber-security with only general skills
- Investment in cyber-security systems and services is enhancing; three major companies: **McAfee, Cisco, and Trend Micro**

> Policies are created to guide and decide on laws and regulations. However, cyber-security enforcement orders, rules and regulations can be provided **without** creating a formal cyber-security policy.

---

### 6. Consequences of Cyber Warfare

Cyber warfare consequences include:
- Overthrow of the system of government or catastrophic national security threat
- Simultaneous initiation of physical warfare or groundwork to facilitate physical warfare
- Catastrophic destruction or damage to the country's image at the international level
- Catastrophic destruction or damage to political and economic relations
- Extensive human casualties or danger to public health and safety
- Internal chaos and widespread disruption of administration
- Severe damage to the national economy
- Destruction or disruption of the performance of national cyber assets

Five cyber warfare scenarios:
1. Government-sponsored espionage to plan future attacks
2. A cyber-attack aimed at laying groundwork for unrest or uprising
3. Cyber-attack aimed at disabling equipment and facilitating physical aggression
4. Cyber-attack as a complement to physical aggression
5. Cyber-attack with the aim of widespread destruction (cyber warfare as the ultimate goal)

---

## Part 2: Specific Topic Questions

---

### Topic A: The Distinction Between Cyber-Crime, Cyber-Attack, and Cyber-Warfare

**Full answer:**

The paper highlights that the lack of universally accepted definitions creates significant legal and policy confusion — yet the distinctions matter because they determine which legal frameworks apply.

**Cyber-crime** refers to actions carried out exclusively by non-governmental actors, in violation of criminal law. The action itself constitutes the violation regardless of outcome. Cyber-crime and cyber-warfare overlap but are distinct categories.

**Cyber-attack** sits at the intersection of cyber-crime and cyber-warfare (Fig. 2). It is result-oriented: an action qualifies as a cyber-attack if it leads to damage, disruption, or denial of services/access. Any unauthorized cyber act aimed at violating the security policy of a cyber-asset is a cyber-attack. Intentional use of a cyber-weapon against an information system in a manner that causes a cyber-incident is also considered a cyber-attack.

**Cyber-warfare** is the highest level and most complex form of cyber-attack. It operates at the national level against national cyber interests and has the most severe consequences — effects equivalent to an armed attack. Cyber-warfare is distinguished by: political or security purpose, state-level actors, and consequences comparable to armed conflict.

The four specialist definitions each draw the boundary differently: Clark limits attackers to states (excluding private groups); Hayden draws no distinction between cyber-crime and cyber-attack; Libicki excludes attacks that have not yet caused effects on systems; the Tallinn Manual Group focuses on effects (injury or property damage). Each definition has gaps. The paper concludes there should be a comprehensive definition that includes attacks by private and non-governmental groups — currently these fall outside many legal frameworks, creating a vacuum.

---

### Topic B: The Relationship Between Cyber-Attack Types and the CIA Triad

**Full answer:**

Each of the main cyber-attack types (Fig. 4) can be mapped against which pillar of the CIA triad — Confidentiality, Integrity, Availability — it primarily targets, which helps in designing appropriate countermeasures.

**Availability attacks:** Denial of Service (DoS) and Distributed DoS (DDoS) are the clearest availability attacks — they do not steal or alter data but instead overwhelm resources so legitimate users cannot access services. DDoS distributes the attack across many compromised systems simultaneously, making it harder to block from a single source.

**Confidentiality attacks:** Sniffers, Spyware, and Trojan horses primarily target confidentiality. Sniffers examine each packet in the data stream to extract usernames and passwords. Trojan horses disguise themselves as legitimate programs to gain user trust, then exfiltrate data or create backdoors. Spyware silently monitors user activity.

**Integrity attacks:** Logic bombs compromise integrity — they lie dormant within legitimate code until triggered by a specific event, then perform a destructive activity (altering or deleting data). Worms and Viruses can also compromise integrity by inserting copies of themselves into legitimate system files.

**Cross-pillar threats:** Botnets are a platform for multiple attack types simultaneously: they distribute spam (confidentiality), coordinate DDoS (availability), and can install additional malware that compromises integrity. Abuse tools are exploited across all three pillars depending on how they are used.

Understanding which CIA pillar each attack targets directs the appropriate response: availability attacks require redundancy and rate-limiting; confidentiality attacks require encryption and access controls; integrity attacks require checksums, audit logs, and code-signing.

---

### Topic C: Why Human Behaviour and Policy Are as Critical as Technical Controls

**Full answer:**

The paper identifies **end-user training** as one of the seven explicit types of cyber security (Fig. 5), which reflects a key finding: technical controls alone are insufficient because humans are both a primary vulnerability and a critical defensive layer.

**The human as vulnerability:** Cybercrime categories include crimes that a system *unknowingly plays a role in* — these depend on user error rather than technical flaws. Phishing and Man-in-the-Middle attacks succeed primarily through user behaviour: a user who clicks a legitimate-looking email or connects to a rogue access point bypasses technical defences. Internal dissatisfied factors (Fig. 3) are particularly dangerous because they require no specialized knowledge — authorized insiders can access systems freely.

**The limits of policy:** The paper makes an important distinction between policy and enforcement. Cyber-security policy (rules and regulations about how data is handled) can exist without cyber-security enforcement orders — and enforcement can exist without formal policy. In corporate environments, policies that require middle managers to incorporate security indicators at the departmental level work only if those managers understand and prioritize security. The paper notes that many organizations face a skills shortage — "many people are at the lower extremity of the vision of cyber-security with only general skills."

**The national/corporate policy gap:** The paper draws an important boundary: national cyber-security policy can cover all citizens, but corporate policy only binds employees and those with legal contracts. Resource providers and supply chain partners are not automatically covered, even when they handle sensitive data. This creates a structural vulnerability that policy alone cannot close.

**The implication:** Effective cyber-security requires the combination of technical controls (network security, application security, infrastructure security), organizational process controls (operational security, information security policy), and human-centred controls (end-user training). Neglecting any one layer — as the paper notes the CIA triad can be bypassed by any advanced hacker without deeper defence — leaves the organization exposed.

---

## Part 3: Exam Practice Questions

---

### Section A: Fundamental Concepts

**Q1.** Define "cyber threat" and "cyber vulnerability" as used in the paper.

> **Answer:** A **cyber threat** is any event with the ability to strike a blow to missions, tasks, images, national cyber assets, or personnel through an information system — through unauthorized access, destruction, disclosure, alteration of information, or obstruction of service delivery. A **cyber vulnerability** is a weakness within an asset, security procedures, or internal controls, or the implementation of a national cyber asset that can be exploited or activated by internal or external threats to conduct cyber warfare.

---

**Q2.** Describe the four stages in the anatomy of a cyber-attack.

> **Answer:** According to the USNM Strategy for cyberspace operations, a cyber-attack proceeds through: **(1) Target identification** — identifying the specific system, network, or individual to attack; **(2) Data collection** — gathering intelligence about the target's vulnerabilities and defences; **(3) Perform a cyber-attack** — executing the attack; **(4) Investigation** — analysing results, establishing persistence, or covering tracks. Computer network operations also include a distinct category of *utilization enabling* — collecting and analysing network information — which may be a prelude to an attack rather than an attack itself.

---

**Q3.** What is the difference between a virus and a worm?

> **Answer:** A **virus** is a self-replicating program that spreads to other documents and programs by inserting copies of itself into those files; it **requires human intervention** to spread (e.g., a user opens an infected file). A **worm** is an autonomous system program that **regenerates itself** by copying from one computer to another in the network without human intervention. Both befouls system files, but the key distinction is autonomy: a worm is self-propagating.

---

**Q4.** Distinguish between cyber-crime, cyber-attack, and cyber-warfare.

> **Answer:** **Cyber-crime** involves actions taken only by non-governmental attackers in violation of criminal law — the action itself is the violation, carried out by a computer system. **Cyber-attack** is an unauthorized cyber act aimed at violating the security policy of a cyber-asset and causing damage, disruption, or denial of services/access; its purpose is to destroy and disrupt a computer network. **Cyber-warfare** is the highest and most complex form of cyber-attack, carried out against national cyber interests with political or security purposes; its effects are equivalent to an armed attack. The three overlap: cyber-attack sits at the intersection of cyber-crime and cyber-warfare.

---

**Q5.** Why is the absence of a universally accepted definition of "cyber-attack" problematic?

> **Answer:** Without a clear and comprehensive definition, the legal path is obscured, there is diversity in interpretation and practice, and contradictory legal conclusions can be reached. For example, Clark's definition limits perpetrators to states, excluding private and non-governmental groups — meaning attacks by such groups fall outside the legal framework, creating a vacuum. The paper argues that the existence of a comprehensive definition would have a direct impact on the legal environment, enabling identification of consequences and guiding international law (including the right to appeal to coercion, the law of war, and the law of international responsibility).

---

### Section B: Cyber Space Threats

**Q6.** List the six sources of cyber threats identified in the paper.

> **Answer:** **(1) Foreign countries** — using cyber tools for intelligence gathering and espionage; **(2) Hackers** — individuals infiltrating networks with minimum knowledge, using downloaded tools; **(3) Organized hackers** — groups (including Hacktivist groups) with political motives, attacking websites and e-mail hosts; **(4) Sabotage groups** — groups that attack cyber systems for financial gain; **(5) Terrorists** — seeking to destroy or maliciously exploit vital infrastructure to menace national security, inflict losses, and undermine public trust; **(6) Internal dissatisfied factors** — agents within organizations who, due to their target system awareness, can access systems with unlimited freedom and do not need significant technical knowledge.

---

**Q7.** What features of cyberspace make it uniquely difficult to defend?

> **Answer:** Several properties distinguish cyber threats from traditional threats: **(1) Low cost of entry** — minimal investment is needed to launch attacks; **(2) Anonymity** — attacker identity is hard to confirm; **(3) Geographical uncertainty** — no fixed physical location; **(4) Lack of public transparency** — attacks occur invisibly; **(5) Asymmetry** — a small number of individuals can effectively control or manage cyber warfare; **(6) Wide range of effects** — unlike a bomb with a limited physical range, cyber threats have a very wide range of effects. There is also currently no technical ability to assign activities to individuals or groups with a high degree of confidence.

---

### Section C: Cyber-Attack Types

**Q8.** Explain how a Denial of Service (DoS) attack works. How does a Distributed DoS (DDoS) differ?

> **Answer:** In a **DoS attack**, the attacker immerses the target computers in messages, blocking the legal flow of data and preventing any system from using the Internet or communicating with other systems. This typically consumes all server resources so access to the service is not possible for legitimate system users. In a **DDoS attack**, instead of launching from a single source, the attacker attacks from a large number of distributed systems simultaneously — often by using worms multiplied on multiple computers (a botnet). This makes DDoS harder to block because the attack has no single source to filter.

---

**Q9.** What is a botnet and why is it particularly dangerous?

> **Answer:** A botnet is a network of infected remote control systems used to distribute malware, coordinate attacks, send spam, and steal messages. Botnets are usually secretly installed on target computers, allowing unauthorized users to remotely control those systems to achieve malicious goals. They are also referred to as **electronic soldiers**. Botnets are particularly dangerous because: they scale attacks (one operator controls many machines), they provide the platform for DDoS attacks by distributing load across thousands of infected systems, and they can simultaneously perform multiple attack types (spam, data theft, DDoS), making them a cross-pillar threat against Confidentiality, Integrity, and Availability.

---

**Q10.** Distinguish between a Trojan horse and a virus.

> **Answer:** A **Trojan horse** hides dangerous code inside what commonly looks like a helpful program — the user is willing to run it. It does not self-replicate but relies on the user executing it willingly. A **virus** is a self-replicating program that befouls system files by inserting a copy of itself into those files; once loaded into memory, these versions run and allow the virus to infect other files. Unlike Trojan horses (which rely on deception), viruses rely on replication; unlike worms, viruses require human intervention to spread.

---

### Section D: Cyber-Security

**Q11.** Name and describe the three principles of the CIA triad.

> **Answer:** The CIA triad is the standard for systems security since the first computer systems: **(1) Confidentiality** — only authorized sources can access sensitive information and functions (e.g., military secrets); **(2) Integrity** — only authorized individuals and resources can modify, add, or remove sensitive information and functions (e.g., preventing incorrect data from being entered into a database); **(3) Availability** — systems, functions, and data must be available on demand based on agreed SLA service level parameters (e.g., preventing service outages).

---

**Q12.** List the seven types of cyber security from the paper and state what each protects.

> **Answer:** **(1) Network security** — protects the computer network from disruptors (malware, hacking); **(2) Infrastructure security** — protects critical infrastructure; **(3) Application security** — uses hardware and software (anti-virus, encryption, firewalls) to protect applications against external threats; **(4) Information security** — protects physical and digital data against unauthorized access, disclosure, misuse, unauthorized changes, and deletion; **(5) Operational security** — processes and decisions to control and protect data, defining when and where information may be stored or shared; **(6) Cloud security** — protects information in the cloud and monitors for on-site attack risks; **(7) End-user training** — addresses the human element; teaches users to handle suspicious attachments, avoid anonymous USBs, and follow corporate security plans.

---

**Q13.** What are the four cybercrime methods described in Table 3? Define each.

> **Answer:** **(1) Denial of Service** — a hacker consumes all server resources so access to the service is not possible for system users; **(2) Man-in-the-Middle** — a hacker puts himself between the victim device and the router to eavesdrop on or change data packets; **(3) Malware** — victims come into contact with worms or viruses and their devices become infected; **(4) Phishing** — a hacker sends a seemingly legitimate email asking users to disclose confidential information.

---

### Section E: Cyber-Security Policy

**Q14.** What is cyber-security policy and why is there no fixed definition?

> **Answer:** Cyber-security policy refers to information distribution rules and regulations, private sector goals for data conservation, and system operations strategies for technology control. There is no fixed definition because — like the phrase "cyberspace" — the term is used for different purposes across different contexts. When used as an adjective in the field of policy, a common concept is intended. The cyber-security policy is accepted by the regulatory framework and is officially applied only to the relevant areas of the regulator. The manner of interpretation, registration, and approval is determined by the implementing organizations, the regulatory board, and the components concerned.

---

**Q15.** What is the key difference between a national and a corporate cyber-security policy?

> **Answer:** **National cyber-security policy** includes all citizens and perhaps foreign businessmen working in its field — it is broad and comprehensive. **Corporate cyber-security policy** applies only to employees who are employed or have a legal contract; it is limited to the domain. It is not even possible to expect resource providers to adhere to corporate policy unless a formal contract is in place. This distinction is important because organizations depend on suppliers and third parties whose practices may not meet the same security standards — creating a structural gap that policy alone cannot close without formal contractual requirements.

---

**Q16.** The paper notes that cyber-security enforcement can exist without a formal cyber-security policy. Why is this significant?

> **Answer:** This is significant because it means organizations can be held to enforceable standards even in the absence of explicit policy documentation — through laws, regulations, and enforcement orders. However, the reverse is also true: having a policy does not guarantee enforcement. The paper notes that in the corporate environment, different departments are expected to follow rules for fear of sanctions, but policy leaves the assessment of data risk to individual managers who may prioritize cost reduction. In the public sector, any type of organizational subdivision faces governance constraints. The implication is that policy without culture, accountability, and enforcement mechanisms is largely ineffective.

---

*End of Study Guide*

> **Exam tip:** This paper's testable content clusters around four areas: **(1)** Key definitions from Table 1 (especially cyber attack, cyber weapon, cyber warfare, cyber defense) and the Table 2 distinction between cyber-crime, cyber-attack, and cyber-warfare; **(2)** The four-step anatomy of a cyber-attack (Target identification → Data collection → Perform → Investigation) and the six sources of cyber threats (Fig. 3); **(3)** The eight main attack types (Fig. 4) and how each maps to the CIA triad; **(4)** The seven types of cyber security (Fig. 5), the CIA triad, and the four cybercrime methods (Table 3). The paper's central argument is that cyberspace's low cost of entry, anonymity, and asymmetry make it uniquely difficult to defend, and that effective protection requires technical, organizational, and human-centred controls working together.
