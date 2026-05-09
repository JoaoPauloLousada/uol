# Study Guide: Common Cyber Attacks — Reducing the Impact
**NCSC Cyber Attacks White Paper, January 2016**

---

## Part 1: Key Topics Summary

---

### 1. The Threat Landscape

#### 1.1 Key Definitions

> **Risk** = the potential for a **threat** (a person or thing likely to cause damage) to exploit a **vulnerability** (a flaw, feature, or user error) that may result in negative impact.

The impact on your business depends on three factors:
1. The **opportunities** you present to an attacker (your vulnerabilities)
2. The **capabilities** of the attacker to exploit those vulnerabilities
3. The **motivation** of the attacker

> You have **no control** over attacker capabilities or motivations — but you **can** make it harder by reducing your vulnerabilities.

#### 1.2 Commodity vs Bespoke Capabilities

| Type | Definition | Examples | Key Characteristic |
|------|------------|----------|--------------------|
| **Commodity capability** | Off-the-shelf tools and techniques openly available on the Internet | Poison Ivy RAT, scanning tools designed for security testers | Cheap, simple to use, effective when basics are not followed |
| **Bespoke capability** | Tools and techniques developed for specific purposes, requiring more specialist knowledge | Zero-day exploits, malicious code targeting undocumented software features | More capable, harder to defend against; eventually becomes commodity once discovered |

> Bespoke capabilities often become commodity capabilities within days of their use being discovered.

#### 1.3 Who Might Be Attacking You?

| Attacker Type | Motivation |
|---------------|------------|
| **Cyber criminals** | Financial gain through fraud or from the sale of valuable information |
| **Industrial competitors / foreign intelligence services** | Economic or diplomatic advantage |
| **Hackers** | Personal enjoyment or challenge |
| **Hacktivists** | Political or ideological motives |
| **Employees / insiders** | Personal gain, grievances, or accidental misuse |

> **Insider threat note:** Insiders may use legitimate access to compromise systems, leverage social engineering, or — in worst cases — introduce bespoke tools deep within an organisation. Insider risk must be part of every organisation's risk assessment.

#### 1.4 Un-targeted vs Targeted Attacks

| Type | Description | Common Techniques |
|------|-------------|-------------------|
| **Un-targeted** | Attackers cast a wide net; victim identity is irrelevant; they exploit whoever is vulnerable | Phishing, water holing, ransomware, scanning |
| **Targeted** | Attacker has specific interest in your organisation; tailored attack; often more damaging | Spear-phishing, deploying a botnet (DDoS), subverting the supply chain |

**Un-targeted attack techniques:**
- **Phishing** — bulk emails asking for sensitive information (bank details) or directing victims to fake websites
- **Water holing** — compromising a legitimate website that target users regularly visit
- **Ransomware** — malware that encrypts data and demands payment
- **Scanning** — automated probing of the Internet for vulnerable systems

**Targeted attack techniques:**
- **Spear-phishing** — tailored emails to specific individuals with malicious attachments or links
- **Deploying a botnet** — for DDoS attack against the specific organisation
- **Subverting the supply chain** — attacking equipment or software being delivered to the organisation

#### 1.5 Every Organisation Is a Potential Victim

> "If you openly demonstrate weaknesses in your approach to cyber security by failing to do the basics, **you will experience some form of cyber attack**."

- Every organisation connected to the Internet should assume it will be the victim of an un-targeted attack
- Organisations likely to be specifically targeted require a more holistic, defence-in-depth approach
- Basic security controls should be implemented **consistently** across the organisation regardless of perceived risk

---

### 2. Understanding Vulnerabilities

Vulnerabilities provide the opportunities for attackers to gain access to systems. They occur through **three sources**, which attackers may combine:

#### 2.1 Three Sources of Vulnerabilities

| Source | Definition | Examples |
|--------|------------|---------|
| **Flaws** | **Unintended** functionality — poor design or implementation mistakes | Nearly 8,000 unique and verified software vulnerabilities disclosed in the US National Vulnerability Database (NVD) in the preceding 12 months |
| **Features** | **Intended** functionality that can be misused | Microsoft Office macros (Melissa worm, 1999; Dridex banking Trojan, 2014); JavaScript used to divert browsers to malicious sites |
| **User error** | Mistakes by administrators or users that undermine carefully designed systems | Enabling vulnerable features, leaving default passwords unchanged, choosing weak passwords, leaving devices unattended, being deceived by social engineering |

#### 2.2 Zero-Day Vulnerabilities

- A **zero-day** is a recently discovered flaw that is **not yet publicly known** — making it very valuable (sometimes fetching hundreds of thousands of pounds)
- Primarily used in **bespoke attacks** by well-resourced attackers
- Once publicly known, reusable exploits are quickly developed, turning zero-days into **commodity capabilities**
- This poses a risk to any system that has **not applied the relevant patch** or updated its antivirus

---

### 3. Common Cyber Attacks: Stages and Patterns

Regardless of whether an attack is targeted or un-targeted, most attacks share a common set of stages. The NCSC adopts a simplified four-stage model (derived from the Lockheed Martin Cyber Kill Chain):

#### 3.1 The Four-Stage Attack Model

```
Survey → Delivery → Breach → Affect
```

| Stage | Description | Attacker Goal |
|-------|-------------|---------------|
| **Survey** | Investigating and analysing available information about the target to identify potential vulnerabilities | Find an exploitable weakness |
| **Delivery** | Getting to the point in a system where a vulnerability can be exploited | Position malicious code or commands to reach the target |
| **Breach** | Exploiting the vulnerability to gain some form of unauthorised access | Get inside the target system |
| **Affect** | Carrying out activities within a system that achieve the attacker's goal | Exfiltrate data, disrupt operations, establish persistence |

#### 3.2 Survey Stage — Detail

Attackers use **any means available** to find technical, procedural, or physical vulnerabilities:

- **Open source information**: LinkedIn, Facebook, domain management tools, social media
- **Commodity toolkits and network scanning tools**: scanning for open ports, open services, default settings, vulnerable applications/OS, network equipment makes and models
- **User error**: staff releasing network information on technical forums, documents containing hidden metadata (author, software version, file save location)
- **Social engineering**: exploiting user naivety on social media to obtain further information

> Default system settings broadcast a wide range of information that should be removed or secured.

#### 3.3 Delivery Stage — Detail

The attacker selects the best delivery path to reach the target vulnerability:

- Attempting to access online services directly
- Sending emails containing links to malicious websites or malicious attachments
- Giving away infected USB sticks (e.g., at a trade fair)
- Creating fake websites in the hope that a user visits
- For DDoS: making multiple connections to a computer to deny others access

#### 3.4 Breach Stage — Detail

Once delivered, the exploit may allow the attacker to:

- Make changes to the system's operation
- Gain access to online accounts
- Achieve full control of a user's computer, tablet, or smartphone

The attacker can then impersonate the victim to move laterally and access other systems.

> Breaches succeed due to an **unfixed flaw**, a **misused feature**, or **user error** — attackers do not need novel techniques if basics are not in place.

#### 3.5 Affect Stage — Detail

Depending on motivation, the attacker may:

- **Retrieve information** — intellectual property or commercially sensitive information
- **Make changes for financial benefit** — e.g., creating fraudulent payments
- **Disrupt normal business operations** — e.g., DDoS overloading internet connection, deleting operating systems
- **Establish consolidation/persistence** — taking over administrator accounts, installing scanning tools, disabling monitoring
- **Exit cleanly** — removing all evidence of presence
- **Create noise** — making as much noise as possible to advertise their success

> Taking over an administrator account is the attacker's "Holy Grail" — administration access to one system enables discovery of more.

---

### 4. Reducing Exposure to Cyber Attack

#### 4.1 The Strategic Principle: Breaking the Attack Pattern

Even highly motivated attackers typically start with **commodity tools** because they are cheaper and easier to use. Security controls that disrupt any stage of the attack model can prevent the attack from succeeding. A **defence-in-depth** approach (multiple layered security mechanisms) provides resilience even when one layer is bypassed.

> "Doing nothing is no longer an option; protect your organisation and your reputation by establishing some basic cyber defences."

#### 4.2 Essential Security Controls (Cyber Essentials Scheme)

| Control | Purpose |
|---------|---------|
| **Boundary firewalls and internet gateways** | Network perimeter defences; web proxy, web filtering, content checking, firewall policies; block executable downloads and access to known malicious domains |
| **Malware protection** | Detect and respond to known attack code; block malicious emails; prevent malware downloads |
| **Patch management** | Apply patches at earliest opportunity to prevent exploitation of known software flaws |
| **Whitelisting and execution control** | Prevent unknown software from running or installing; disable AutoRun on USB/CD drives |
| **Secure configuration** | Restrict device/OS/application functionality to minimum needed for business operation |
| **Password policy** | Enforce strong passwords; lock accounts after failed attempts |
| **User access control** | Limit normal user execution permissions; enforce principle of least privilege |

#### 4.3 Additional Controls: 10 Steps to Cyber Security

For organisations likely to be specifically targeted by technically capable attackers:

| Control | Purpose |
|---------|---------|
| **Security monitoring** | Identify unexpected or suspicious activity |
| **User training, education, and awareness** | Staff understand their role in security and report unusual activity |
| **Security incident management** | Plans in place to deal with an attack and reduce business impact |

#### 4.4 Security Controls Mapped to Attack Stages

| Attack Stage | Primary Controls |
|---|---|
| **Survey** | User education and awareness; Secure configuration (limit information disclosed by internet-facing systems) |
| **Delivery** | Network perimeter defences; Malware protection; Password policy; Secure configuration |
| **Breach** | Patch management; Monitoring; Malware protection (at gateway); Secure configuration; User access controls; User training |
| **Affect** | All breach-stage controls + Security monitoring; Defence-in-depth; 10 Steps to Cyber Security |

> **Key statistic:** £600K–£1.15m is the average cost of a security breach. **81%** of large companies have reported a breach.

#### 4.5 Incident Response

> There is no such thing as 100% security. Having an effective **security incident response plan** can reduce the impact, enable cleanup, and get the business back up and running within a short time.

---

### 5. Case Studies

#### 5.1 Case Study 1: Espionage Campaign Against the UK Energy Sector

**Attack type:** Watering hole attack / espionage campaign
**Attack stages completed:** Survey → Delivery → Breach → (Affect **blocked** by security monitoring)

**What happened:**
- Attackers targeted websites of energy sector companies managed by a single web design company
- Scripts were added to legitimate websites; visitors' browsers were automatically redirected to download malware from an attacker-owned server
- Malware targeted known/patchable vulnerabilities in Java, older browsers, and older versions of Windows
- A RAT was installed, disguised as a common web script, and began sending 'beacons' to attacker-controlled domains
- Security monitoring detected the command-and-control messages — the attack was broken before the Affect stage

**Controls that would have prevented it:**

| Control | How it would have helped |
|---------|--------------------------|
| Network perimeter defences | Prevent executable downloads and access to known malicious domains |
| Malware protection | Detect commodity attack code exploiting the victim's browser |
| Patching | Prevent the script from succeeding and malware from running |
| Whitelisting and execution control | Prevent any unknown software from running |
| User access control | Restrict malware capabilities |
| Security monitoring | Did identify suspicious activity in this case |

---

#### 5.2 Case Study 2: Hundreds of Computers Infected by Remote Access Malware

**Attack type:** Supply chain / corporate website compromise
**Attack stages completed:** Survey → Delivery → Breach → Affect (detected early in Affect)

**What happened:**
- Attackers discovered that a large UK company's corporate website was hosted by a service provider with a known vulnerability
- A specialised exploit delivery script was added to the corporate website
- The script identified visitors from the target company's IP range and downloaded a RAT to their computers via a known software flaw in a directory that allowed file execution
- Over **300 computers** were infected, beaconing network information to attacker-controlled domains
- Detected in the early Affect stage by **network security monitoring**; an incident response plan enabled investigation via system and network logs and forensic examination

**Controls that would have prevented it:**

| Control | How it would have helped |
|---------|--------------------------|
| Patching | Corporate website and users' computers would not have been compromised |
| Network perimeter defences | Malware download and command-and-control traffic blocked by web filtering, content checking, firewall policies |
| Whitelisting and execution control | Exploration tools and executables from temporary/personal folders would not have run |
| Security monitoring | Earlier detection of compromise |

> **Key lesson:** Third-party/supplier security matters — contract terms must ensure suppliers meet equivalent security standards.

---

#### 5.3 Case Study 3: Spear-Phishing Attack Targets System Administrator

**Attack type:** Spear-phishing / targeted social engineering
**Attack stages completed:** Survey → Delivery → Breach → (Affect limited — detected before significant damage)

**What happened:**
- Attackers identified a system administrator and their personal interests via publicly available information (survey)
- A socially-engineered email was sent to the administrator's **personal** email address; a Trojanised document was downloaded from a file sharing service
- The user was repeatedly prompted to run an executable until they clicked OK (exploiting poor security awareness)
- First-stage malware hid itself as a legitimate file, persisted across reboots, and began communicating with attacker-controlled domains
- Days later, a second-stage RAT was downloaded; the malware began exfiltrating screenshots covertly for **nearly a week**
- Appropriate security monitoring and logging detected the transfers; the machine was disconnected for forensic analysis

**Controls that would have prevented it:**

| Control | How it would have helped |
|---------|--------------------------|
| User training, education, and awareness | Staff suspicious of unsolicited email with unexpected attachments; understand risks of running unknown executables |
| User access controls (least privilege) | Restricting admin computer browsing could have protected the privileged account |
| Network perimeter defences | Firewall policies, filtering web proxy, and corporate malware protection should have detected/blocked the Trojan |
| Secure configuration | Would have prevented the malware from being able to run |

> **Key lesson:** Privileged accounts (admins) are high-value targets. Least-privilege principles must apply even to administrators' day-to-day browsing and email activities.

---

## Part 2: Specific Topic Questions

---

### Topic A: How the Four-Stage Attack Model Applies Across Different Attack Types

**Full answer:**

The NCSC's Survey → Delivery → Breach → Affect model is a simplified version of the Lockheed Martin Cyber Kill Chain. Its value is that it applies regardless of whether an attack is targeted or un-targeted, and regardless of whether commodity or bespoke tools are used.

**Survey** always occurs first, even if minimally. In an un-targeted attack, survey may simply mean running an automated scanner across broad IP ranges looking for any exploitable system. In a targeted attack, the attacker may spend weeks or months gathering open-source intelligence from social media, LinkedIn, domain registrars, and technical forums — as seen in Case Study 3, where the system administrator's personal interests were identified to craft a convincing spear-phishing email.

**Delivery** is where the attack path diverges most sharply. Un-targeted attacks use cheap, scalable methods: phishing emails sent to thousands of addresses, drive-by download scripts embedded in legitimate websites (watering hole), or infected USB sticks distributed at conferences. Targeted attacks use tailored methods: spear-phishing to specific individuals (Case Study 3), or exploiting a supply chain relationship to inject a script onto a corporate website (Case Study 2).

**Breach** is the point of exploitation. In all three case studies, the breach was made possible not by novel bespoke techniques but by known and patchable vulnerabilities: Java flaws, older browser vulnerabilities, known software bugs in web servers. This reflects the broader document argument that commodity techniques are effective precisely because organisations fail to apply basic controls consistently.

**Affect** determines the attacker's end goal. The attacker who achieves full access can: exfiltrate data covertly (Case Study 3 — a week of screenshot exfiltration); consolidate access across hundreds of machines (Case Study 2 — 300+ infected computers); or establish persistent presence for future intelligence gathering (Case Study 1 — ongoing espionage campaign). The "consolidation" sub-phase — where the attacker moves laterally and establishes persistence — is what makes timely detection critical: once consolidated, the attacker is much harder to eradicate.

The model's practical utility is that **each stage presents an opportunity to disrupt the attack** — this is the logic underlying the controls mapped to each stage in the NCSC infographic. Preventing survey limits target information; disrupting delivery prevents the payload from reaching the target; stopping breach prevents exploitation; detecting early in affect limits damage.

---

### Topic B: Why Commodity Capability Is Such an Effective Threat

**Full answer:**

Commodity capability — off-the-shelf tools and techniques freely available on the Internet — represents the primary threat to most organisations, and its effectiveness is counterintuitive: these are simple, widely known tools, yet they succeed daily against organisations of all sizes.

**Reason 1: Basic controls are consistently not followed.**
The white paper explicitly states: "Openly available commodity capabilities are effective because basic cyber security principles, such as those described in Cyber Essentials and 10 Steps to Cyber Security, are not properly followed." This is the core finding: the tools are not sophisticated, but the defences are not in place.

**Reason 2: Commodity tools are the first resort even for sophisticated attackers.**
Even technically capable, motivated adversaries use commodity tools first because they are cheaper and easier. They only escalate to bespoke techniques if commodity approaches fail. This means preventing commodity attacks (via Cyber Essentials-level controls) is the single highest-value defensive investment, as it defeats the vast majority of attacks and raises the cost for determined adversaries.

**Reason 3: The attack surface continuously expands.**
Nearly 8,000 unique and verified software vulnerabilities were disclosed in the US National Vulnerability Database in a single 12-month period. Each unpatched vulnerability is a potential commodity attack vector — exploit kits are rapidly developed once vulnerabilities are published, as illustrated by the energy sector case study, where known and patchable Java and browser vulnerabilities were exploited.

**Reason 4: Zero-days quickly become commodity.**
Bespoke capabilities (including zero-day exploits) become commodity tools within days of their use being discovered. This means the boundary between bespoke and commodity capability is not static — yesterday's targeted weapon becomes today's publicly available tool kit.

**Reason 5: Commodity tools scale massively.**
Un-targeted attacks using commodity tools — phishing campaigns sent to millions, automated internet-wide scanning — require minimal attacker investment while reaching enormous numbers of potential victims. Even a 0.01% success rate against millions of targets produces thousands of compromised systems.

**The implication for defence:**
Consistently applying Cyber Essentials controls — particularly patch management, malware protection, firewalls, secure configuration, and access controls — would defeat the majority of commodity attacks. All three case studies in the white paper identify patching and network perimeter defences as the controls that would have disrupted the attacks at multiple stages.

---

### Topic C: The Role of User Behaviour as Both a Vulnerability and a Defence

**Full answer:**

Users appear in the NCSC model in two opposing roles: as a primary source of vulnerability, and as a critical component of effective defence.

**Users as a vulnerability source:**
The document classifies "user error" as one of the three fundamental vulnerability sources alongside flaws and features. User errors include: choosing common or easily guessed passwords; leaving laptops or mobile phones unattended; being deceived into giving away passwords, installing malware, or divulging organisational information (role, schedule, system details). These errors can undermine even carefully designed and implemented systems — a technically sound architecture is defeated by an administrator who responds to a repeated executable prompt.

The case studies illustrate this concretely. In Case Study 3, the system administrator — a privileged user with extensive access — accessed personal webmail from their work computer, downloaded a Trojanised document, and clicked through repeated warnings until running the malicious executable. No technical control can fully substitute for user judgment. In Case Study 1, users posting on technical support forums released information about their organisation's network that assisted attackers in the survey stage.

**Social engineering amplifies user vulnerability:**
Attackers exploit "user naivety and goodwill" through social engineering — on social media, in phishing emails, in phone calls. The attacker need not find a software vulnerability if they can manipulate a user into creating one. The survey stage actively harvests open-source information about individuals to craft convincing social engineering attacks. Metadata in published documents (author, software version, file save location) provides further intelligence.

**Users as a defence mechanism:**
The same users who represent vulnerabilities are also a critical defensive layer. The 10 Steps to Cyber Security includes "user training, education, and awareness" as an explicit control. In the context of the attack model:

- At the **survey stage**, trained users filter what they publish online and are aware of metadata in documents
- At the **delivery stage**, suspicious users do not open unexpected attachments or click unknown links; they report phishing attempts
- At the **breach stage**, aware users do not run unknown executables or respond to social engineering requests for credentials
- At the **affect stage**, alert users notice and report unusual system behaviour, contributing to security monitoring

However, the document also acknowledges a realistic limitation: "User training, education, and awareness are extremely valuable to reduce the likelihood of 'social engineering' being successful. However, with the pressures of work and the sheer volume of communications, you cannot rely on this as a control to mitigate even a commodity attack." User training is necessary but not sufficient — it must be combined with technical controls, particularly for delivery and breach stage protection.

---

## Part 3: Exam Practice Questions

---

### Section A: Threat Landscape

**Q1.** Define "risk" in cyber security terms as used by the NCSC.

> **Answer:** In cyber security, **risk** is the potential for a **threat** (a person or thing likely to cause damage) to exploit a **vulnerability** (a flaw, feature, or user error) that may result in some form of negative impact. Risk depends on three factors: the opportunities you present to an attacker (your vulnerabilities), the capabilities of attackers to exploit those vulnerabilities, and their motivation to attack you.

---

**Q2.** What is the difference between commodity and bespoke capability? Give one example of each.

> **Answer:** **Commodity capability** involves tools and techniques that are openly available on the Internet, relatively simple to use, and do not require specialist knowledge — for example, Poison Ivy, a widely used Remote Access Tool. **Bespoke capability** involves tools and techniques developed for specific purposes requiring more specialist knowledge — for example, zero-day exploits that take advantage of vulnerabilities not yet known to vendors. Bespoke capabilities typically become commodity capabilities within days of their discovery, as reusable exploits are quickly developed and shared.

---

**Q3.** List the five categories of potential attacker identified by the NCSC.

> **Answer:** (1) **Cyber criminals** — motivated by financial gain through fraud or from the sale of valuable information; (2) **Industrial competitors and foreign intelligence services** — seeking economic or diplomatic advantage; (3) **Hackers** — motivated by the personal challenge and enjoyment of interfering with computer systems; (4) **Hacktivists** — seeking to attack companies for political or ideological motives; (5) **Employees or insiders** — those with legitimate access who act accidentally or deliberately through misuse.

---

**Q4.** What is the key difference between un-targeted and targeted attacks? Give two techniques used in each.

> **Answer:** In an **un-targeted attack**, attackers indiscriminately target as many devices or users as possible; victim identity is irrelevant. Techniques include phishing and water holing. In a **targeted attack**, the attacker has a specific interest in the victim organisation and tailors the attack specifically to its systems, personnel, and processes; it is often more damaging. Techniques include spear-phishing and subverting the supply chain.

---

**Q5.** Why does the NCSC say that "every organisation is a potential victim"?

> **Answer:** Every organisation has something of value — information, systems, or infrastructure — that is worth something to others. If an organisation openly demonstrates weaknesses by failing to apply basic security controls, it will experience some form of cyber attack. Every organisation connected to the Internet should assume it will be the victim of an un-targeted attack, as there will always be systems or services with exploitable vulnerabilities that attackers will seek out indiscriminately.

---

### Section B: Understanding Vulnerabilities

**Q6.** What are the three sources of vulnerabilities, and how does each arise?

> **Answer:** (1) **Flaws** — unintended functionality arising from poor design or implementation mistakes; these are the vulnerability type most commonly exploited by attackers today. (2) **Features** — intended functionality that can be misused by an attacker, such as macros in Microsoft Office (exploited by Melissa worm and Dridex Trojan) and JavaScript (used to redirect browsers to malicious sites). (3) **User error** — mistakes by administrators or users that undermine carefully designed systems, such as enabling vulnerable features, leaving default passwords unchanged, choosing weak passwords, or being socially engineered.

---

**Q7.** What is a zero-day vulnerability, why is it valuable, and what happens once it is discovered?

> **Answer:** A zero-day vulnerability is a recently discovered flaw that is not yet publicly known — vendors and anti-malware companies are unaware of it. It is extremely valuable (fetching hundreds of thousands of pounds) because it cannot yet be patched or detected by security tools. Zero-days are primarily used in bespoke attacks by well-resourced attackers. Once a zero-day becomes publicly known, reusable exploits are rapidly developed and the vulnerability transitions from a bespoke to a commodity capability — posing a risk to any system that has not applied the relevant patch or updated its antivirus software.

---

**Q8.** Give two examples of how features — intended functionality — have been misused in real attacks.

> **Answer:** (1) **Microsoft Office macros**: introduced to improve user experience, macros became a major attack vector with the Melissa worm (1999) and are still exploited by the Dridex banking Trojan, which uses spam emails containing malicious macro code in Word documents to download malware. (2) **JavaScript**: widely used in dynamic web content, JavaScript is used by attackers to divert users' browsers to malicious websites and silently download malware, or to hide malicious code that passes through basic web filters.

---

### Section C: The Four-Stage Attack Model

**Q9.** Name and describe the four stages of a cyber attack as defined in the NCSC white paper.

> **Answer:** (1) **Survey** — the attacker investigates and analyses available information about the target to identify potential vulnerabilities, using open-source intelligence, network scanning tools, and social engineering. (2) **Delivery** — the attacker gets to the point where a vulnerability can be exploited, for example by sending malicious email attachments, creating fake websites, or giving away infected USB drives. (3) **Breach** — the attacker exploits the identified vulnerability to gain some form of unauthorised access to the target system. (4) **Affect** — the attacker carries out activities inside the system that achieve their goal, such as exfiltrating data, making fraudulent transactions, disrupting operations, or establishing a persistent presence.

---

**Q10.** What does an attacker look for during the survey stage? List four specific pieces of information.

> **Answer:** During survey, an attacker scans for: (1) open ports; (2) open services; (3) default settings that have not been changed; (4) vulnerable applications and operating systems. They also seek to identify the makes and models of network equipment. Beyond technical scanning, attackers use open-source intelligence (LinkedIn, Facebook, domain registration services) and social engineering to identify personnel, roles, schedules, and any information published by users on technical forums or hidden in document metadata (author, software version, file save location).

---

**Q11.** What is "consolidation" in the context of the Affect stage?

> **Answer:** Consolidation is the process by which an attacker — having breached a system — establishes a persistent and expanding presence. This typically involves taking over a user account (guaranteeing continued access), installing automated scanning tools to discover more about the network, identifying additional systems to access, and potentially disabling monitoring processes to avoid detection. Taking over an administrator account is described as the attacker's "Holy Grail" as it provides administration access to multiple systems. Determined attackers continue this process until they have achieved their end goals.

---

### Section D: Reducing Exposure

**Q12.** List the seven essential security controls from the Cyber Essentials scheme.

> **Answer:** (1) Boundary firewalls and internet gateways — establish network perimeter defences; (2) Malware protection — detect and respond to known attack code; (3) Patch management — apply patches at earliest opportunity to prevent exploitation of known software flaws; (4) Whitelisting and execution control — prevent unknown software from running, including AutoRun on USB/CD; (5) Secure configuration — restrict device/OS/application functionality to the minimum needed for business operation; (6) Password policy — enforce strong passwords and lock accounts after failed attempts; (7) User access control — limit user execution permissions and enforce least privilege.

---

**Q13.** What three additional controls does the 10 Steps to Cyber Security add beyond Cyber Essentials?

> **Answer:** (1) **Security monitoring** — to identify any unexpected or suspicious activity on the network; (2) **User training, education, and awareness** — so staff understand their role in keeping the organisation secure and report unusual activity; (3) **Security incident management** — plans in place to deal with an attack effectively and reduce its business impact.

---

**Q14.** Which security controls primarily mitigate the delivery stage, and how does each help?

> **Answer:** (1) **Malware protection** — may block malicious emails and prevent malware from being downloaded from websites; (2) **Firewalls and proxy servers** — block unsecure or unnecessary services and maintain lists of known malicious websites; (3) **Password policy** — prevents users from selecting easily guessed passwords, and locks accounts after a specified number of failed login attempts; (4) **Secure configuration** — limits system functionality to the minimum needed, reducing the attack surface available for delivery.

---

**Q15.** Why is patch management particularly important for mitigating the breach stage?

> **Answer:** All commodity malware depends on **known and predominantly patchable software flaws**. Effective patch management ensures that patches are applied at the earliest opportunity, which directly limits the time an organisation is exposed to known software vulnerabilities. If patches had been applied in all three case studies, the known vulnerabilities in Java, browsers, and web servers would not have been exploitable. Patching is the single most direct control against commodity attacks that exploit software flaws, and its absence was a contributing factor in each case study breach.

---

**Q16.** What is a "defence-in-depth" approach, and why is it recommended?

> **Answer:** Defence-in-depth is the strategy of establishing multiple layers of security mechanisms such that an attacker who bypasses one layer still faces additional barriers. The NCSC recommends it because even the most motivated, persistent attackers typically use commodity tools first. Multiple controls applied consistently — firewalls, patching, malware protection, access controls, monitoring — mean that failure of any single control does not result in a successful attack. The 10 Steps to Cyber Security outlines many features of a complete cyber risk management regime that supports a defence-in-depth strategy.

---

### Section E: Case Studies

**Q17.** Describe the watering hole technique used in Case Study 1 and explain how the attack progressed through the four stages.

> **Answer:** In a watering hole attack, the attacker compromises a legitimate website that target users regularly visit — effectively turning the trusted site into a trap. In Case Study 1, attackers discovered that a single web design company hosted multiple UK energy sector companies' websites (**survey**). They compromised the web server and inserted an iFrame pointing to malicious content, causing their own website to load automatically when the legitimate site was visited (**delivery**). Visitors' browsers were breached through known flaws in Java and common internet browsers (**breach**). A RAT was installed, disguised as a web script, which began sending beacons to attacker-controlled domains and capturing keystrokes and clipboard data as the attacker moved towards the affect stage — but **security monitoring** detected command-and-control traffic before the attack could fully affect the targets.

---

**Q18.** What does Case Study 2 illustrate about supply chain security?

> **Answer:** Case Study 2 demonstrates that an organisation's security is only as strong as its suppliers'. The attacker discovered that the target company's corporate website was hosted by a service provider with a known vulnerability. By exploiting the service provider — not the target company directly — the attacker gained a delivery mechanism into the target's internal network, ultimately infecting over 300 computers. The remediation required renegotiating contract terms with the website provider to ensure they met equivalent security standards. The lesson is that **vendor and supplier security must be assessed as part of an organisation's overall risk management**, and third-party contracts should require adequate security standards.

---

**Q19.** In Case Study 3, why was a system administrator a particularly valuable target?

> **Answer:** A system administrator is a high-value target because of their **privileged access** — administrators typically have access to multiple systems, network configuration details, and sensitive credentials. By compromising the administrator's account, the attackers in Case Study 3 were able to exfiltrate information about the network and details for multiple business-critical systems. Administrator accounts are described in the white paper as the attacker's "Holy Grail" — access to one administrator account can provide access to many systems. This also explains why the principle of least privilege is particularly important for high-privilege accounts: the administrator's browsing from their administration computer — including accessing personal webmail — was an open security weakness.

---

**Q20.** Across all three case studies, which two security controls appear most consistently as mitigations? What does this pattern tell us?

> **Answer:** **Patching** and **network perimeter defences** (firewalls, web proxy, content checking, web filtering) appear as key mitigations in all three case studies. This pattern reinforces the central argument of the white paper: the majority of attacks — including multi-stage, targeted attacks against large organisations — exploit **known and patchable vulnerabilities** that are deliverable via **network-accessible pathways**. Consistently applying these two controls alone would have disrupted each attack at either the breach or delivery stage. This demonstrates that the challenge is not knowing what to do — it is **consistently doing it** across the entire organisation and across third-party suppliers.

---

*End of Study Guide*

> **Exam tip:** This white paper's testable content clusters around four areas: (1) the Risk equation (threat × vulnerability × opportunity) and the commodity vs. bespoke distinction; (2) the three vulnerability sources (flaws, features, user error); (3) the four-stage attack model (Survey → Delivery → Breach → Affect) and which controls mitigate each stage; (4) the three case studies and their specific attack techniques and mitigations. For the case studies, be ready to map each stage of the attack to a concrete event, and to match each mitigation back to a Cyber Essentials control.
