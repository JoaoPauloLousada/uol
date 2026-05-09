# CM2025 Computer Security — Week 1 Summary

## Overview

Week 1 introduces the cyber threat landscape: what threats are, how to classify them, how attacks progress, and how to defend against them. Content spans lecture material, an NCSC-aligned study guide, a research paper, a real-world case study (Uber 2022), and a threat investigation simulation exercise.

---

## 1. What Are Cyber Threats?

Cyber threats are **unauthorized attempts to access systems or networks with intent to cause harm**.

**Common threat types:**
- Malware, ransomware, phishing
- Social engineering and information manipulation
- Supply chain attacks

**Notable examples:**
- **WannaCry (2017):** Infected 200,000+ computers across 150+ countries
- **Equifax breach:** Exposed 150 million Social Security Numbers

---

## 2. Classifying Cyber Threats

### By Source
| Type | Description |
|------|-------------|
| **Insider** | Malicious or negligent internal actors (e.g. Tesla 2020) |
| **External** | Criminals, nation-states, hacktivists, opportunistic hackers |

### By Attack Vector
| Vector | Examples |
|--------|---------|
| **Network-based** | DDoS, man-in-the-middle, port scanning |
| **Endpoint-based** | Phishing, keyloggers, ransomware |

### By Impact
- **Financial:** Immediate costs, ransom payments, recovery expenses
- **Reputational:** Loss of trust, brand damage (often harder to recover from)

---

## 3. Cyber Threat Landscape

### The Risk Equation

> **Risk = Threat × Vulnerability × Opportunity**

You cannot control threats or opportunities — only your **vulnerabilities**.

### Attacker Categories

| Attacker Type | Motivation |
|---------------|-----------|
| Cyber criminals | Financial gain |
| Industrial competitors / foreign intelligence | Economic or diplomatic advantage |
| Hackers | Personal challenge |
| Hacktivists | Political or ideological causes |
| Insiders | Personal gain or grievances |

### Attack Targeting

| Type | Characteristics |
|------|----------------|
| **Un-targeted** | Wide net, low sophistication — phishing, watering holes, ransomware, scanning |
| **Targeted** | Specific victim, high damage — spear-phishing, botnets, supply chain manipulation |

### Commodity vs. Bespoke Capabilities

- **Commodity:** Off-the-shelf tools (e.g. Poison Ivy RAT) — cheap, widely available, effective
- **Bespoke:** Custom tools for specific targets (e.g. zero-days) — expensive, sophisticated
- Bespoke tools typically become commodity within days of discovery

---

## 4. Vulnerability Sources

| Source | Description |
|--------|-------------|
| **Flaws** | Unintended functionality — 8,000+ disclosed annually |
| **Features** | Intended functionality misused (e.g. Office macros, JavaScript) |
| **User error** | Admin/user mistakes — weak passwords, falling for social engineering |

**Zero-day vulnerabilities:** Recently discovered flaws unknown to vendors and AV companies. Extremely valuable on the market; quickly become commodity once disclosed.

---

## 5. The Four-Stage Attack Model (NCSC)

```
Survey → Delivery → Breach → Affect
```

| Stage | Description |
|-------|-------------|
| **Survey** | Reconnaissance using OSINT, scanning, social engineering, metadata analysis |
| **Delivery** | Getting malicious code to target via email, fake websites, USB drives, or direct access |
| **Breach** | Exploiting vulnerabilities to gain unauthorized access |
| **Affect** | Exfiltrating data, making fraudulent transactions, disrupting operations, establishing persistence |

---

## 6. Reducing Exposure — Essential Controls

### Cyber Essentials (7 controls)
1. Boundary firewalls and internet gateways
2. Malware protection
3. Patch management
4. Whitelisting and execution control
5. Secure configuration
6. Password policy
7. User access control

### 10 Steps to Cyber Security (3 additional)
8. Security monitoring
9. User training, education, and awareness
10. Security incident management

**Defence-in-depth:** Layered controls so that failure of one layer does not mean a full breach.

---

## 7. Case Studies

### Case Study 1: UK Energy Sector Espionage Campaign
- **Method:** Watering hole attack via a web design company serving energy sector sites
- **Outcome:** RAT detected by security monitoring before damage occurred
- **Key lesson:** Security monitoring is critical; supply chain/third-party exposure matters

### Case Study 2: 300+ Computers Infected by Remote Access Malware
- **Method:** Supply chain compromise of a corporate website hosting provider; known software flaw exploited
- **Outcome:** Early detection limited damage
- **Key lesson:** Third-party and supplier security must meet equivalent standards; patching is the highest-impact control

### Case Study 3: Spear-Phishing on a System Administrator
- **Method:** Targeted attack via personal email with Trojanised document; admin credentials compromised
- **Outcome:** Damage limited by monitoring; privileged access exploited
- **Key lesson:** Least privilege applies even to admins' day-to-day activities; privileged accounts are prime targets

---

## 8. Peer-Graded Assignment — Uber Data Breach (2022)

### What Happened
- **Attacker:** 18-year-old affiliated with the Lapsus$ group
- **Initial access:** Purchased stolen employee credentials from the dark web
- **Exploitation:** MFA fatigue attack — flooded employee with approval requests for ~1 hour until one was approved
- **Escalation:** Found hardcoded admin credentials in an internal network share
- **Scope:** Access to AWS, G-Suite, Slack, internal dashboards, bug bounty reports
- **Discovery:** Attacker announced the breach on the company's own Slack

### Classification
| Dimension | Assessment |
|-----------|-----------|
| Source | External (criminal group, Lapsus$) |
| Vector | Endpoint + network (employee device → lateral movement) |
| Impact | Operational disruption, reputational damage, regulatory scrutiny |

### Root Cause & Prevention
- **Core failure:** Human element (employee fatigue) defeated technical protections
- **Key mistakes:** No phishing-resistant MFA, hardcoded credentials, insufficient employee training
- **Prevention:** Hardware security keys, number-matching MFA, credential management tooling, phishing awareness training

---

## 9. Threat Investigation Simulation — Vulcan Hydra Campaign

### Threat Actor Profile
- **Group:** Vulcan Hydra (Eastern European, financially motivated)
- **Target:** UK higher education institutions
- **Timeline:** July 2025

### Attack Chain
1. Phishing emails impersonating university HR departments ("Updated payroll systems verification")
2. Payload delivery: **HydraCrypt** ransomware
3. HydraCrypt capabilities: encrypts drives, steals browser credentials, disables recovery tools

### Indicators of Compromise (IOCs)
- Domains: `university-payroll-check[.]com`, `hrportal-verify[.]org`
- C2 IPs: `185.203.119.74`, `92.118.160.22`
- File hashes: HydraCrypt v3.2 and phishing attachment

### Impact at Peer Institution
- Partial encryption of research archives
- 3-day outage of internal file-sharing
- Loss of 6 months of unbacked-up admin records
- £50,000 ransom demanded (not paid)

### Recommended Mitigations

| Mitigation | Defence Layer | Justification |
|------------|--------------|---------------|
| Enforce MFA (phishing-resistant) | Access control / identity | Blocks credential-based access even after phishing succeeds |
| Advanced email filtering + phishing simulations | Perimeter + human | Addresses the initial attack vector both technically and behaviourally |
| Harden EDR + verified backup strategy | Endpoint + business continuity | Detects ransomware; enables recovery without paying ransom |

### CTI Intelligence Types Present in the Report
| Type | Content |
|------|---------|
| **Strategic** | Attacker motivation (financial), historical patterns |
| **Tactical** | TTPs: phishing → credential theft → lateral movement → ransomware |
| **Operational** | Timeline, peer institution impact |
| **Technical** | IOCs (domains, IPs, file hashes) |

---

## 10. Key Themes

| Theme | Core Insight |
|-------|-------------|
| **Threat landscape** | Every organisation is a potential target; commodity tools are highly effective |
| **Vulnerability control** | You cannot control threats — only reduce your own vulnerabilities |
| **Attack predictability** | All attacks follow Survey → Delivery → Breach → Affect |
| **Defence-in-depth** | Layered controls; no single control is sufficient |
| **Human factor** | Both the most common vulnerability and a critical layer of defence |
| **Patching** | Consistently the highest-impact and most actionable control |
| **Third-party risk** | Supplier/partner security must be contractually enforced |
| **Classification framework** | Source → Vector → Impact provides a structured way to analyse any attack |
