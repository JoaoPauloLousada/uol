# Cyber Threat Analysis Guideline

A structured guide for writing a cyber threat analysis based on an intelligence threat report.

---

## Purpose

A cyber threat analysis translates raw threat intelligence into actionable insight. It answers three questions:
- **What is happening?** (threat characterisation)
- **How credible and relevant is the intelligence?** (source assessment)
- **What should be done about it?** (mitigation)

Target length: **500–800 words** for a standard exercise response.

---

## Required Sections

### 1. Threat Analysis Summary

This is the core analytical section. It has four sub-parts.

#### 1a. Threat Overview

Summarise the threat in 2–4 sentences. Cover:
- Who the threat actor is (name, suspected origin, motivation)
- What the attack does (attack type, payload, end goal)
- Who is targeted (sector, geography)

> **Example:** _"The report outlines a ransomware campaign by Vulcan Hydra, targeting UK higher education institutions through HR-impersonating phishing emails. The goal is credential theft followed by deployment of HydraCrypt, which encrypts data and disables recovery tools."_

---

#### 1b. Types of Intelligence Present

Classify the intelligence in the report into the four CTI categories. Every real threat report will contain some mix of all four — identify which sections map to which type.

| Type | What it covers | Where to find it in the report |
|---|---|---|
| **Strategic** | Attacker motivation, historical patterns, long-term trends | Threat actor profile, history section |
| **Tactical** | Attack techniques, TTPs (Tactics, Techniques, Procedures) | Attack vector section, lateral movement description |
| **Operational** | Real-time or near-real-time activity, timelines, active infrastructure | Timeline of activity, active C2 nodes |
| **Technical** | Concrete, machine-readable artefacts | IOC section: domains, IPs, file hashes |

For each type present, name it and cite a specific example from the report.

---

#### 1c. Intelligence Source Assessment

Evaluate the reliability of each intelligence source cited in the report. Use two dimensions:

- **Confidence level**: High / Medium / Low
- **Reasoning**: Why is it reliable or not?

Common source types and how to assess them:

| Source | Typical reliability | Notes |
|---|---|---|
| Internal logs / SIEM data | High | First-party, directly observed |
| Government advisories (e.g. NCSC, CISA) | High | Validated, authoritative |
| Sector OSINT / peer sharing | Medium | Useful breadth, needs correlation |
| Commercial threat feeds | Medium | Timely but may have false positives |
| Dark web forums | Low–Medium | Unverified, adversarial environment |
| Anonymous tips | Low | Requires corroboration |

---

#### 1d. Identified Vulnerabilities and Weaknesses

From the attack description, infer what weaknesses in the targeted organisation made the attack possible or effective. These are not listed in the report — you must derive them from the attack narrative.

Ask: _"What security control, if present, would have stopped or limited this step?"_

Common patterns:
- Phishing succeeded → lack of MFA, insufficient email filtering, low security awareness
- Lateral movement succeeded → flat network, weak segmentation, no EDR
- Ransomware had high impact → unreliable or untested backups
- Recovery tools were disabled → no offline/immutable backup strategy
- Data exfiltration occurred → no DLP, inadequate egress monitoring

---

### 2. Recommended Mitigation Strategies

List **at least three** concrete mitigations. Each must follow this structure:

```
[Letter]. [Mitigation Name]

Layer: [which defence layer this addresses]
Purpose: [what it achieves]
Justification: [why it specifically counters this threat]
Challenges: [realistic implementation obstacles]
```

**Defence layers** (pick the most accurate one per mitigation):
- Access control / identity management
- Perimeter defence / network boundary
- Human layer / security awareness
- Endpoint security / EDR
- Data protection / DLP
- Business continuity / backup and recovery
- Monitoring / detection and response
- Network segmentation

**Ordering tip:** Lead with the mitigation that would have had the highest impact on the specific attack described. Justify your choices by explicitly linking back to the threat report's attack narrative.

---

### 3. Reflection: Organisational Context and Limitations *(optional extension)*

Address two sub-questions:

#### 3a. Different Organisational Context

Pick a different sector (e.g. healthcare, finance, critical infrastructure) and explain how the priorities would shift. Consider:
- Different regulatory requirements (GDPR, HIPAA, PCI-DSS)
- Different asset criticality (patient data vs. financial records)
- Different threat tolerance (availability vs. confidentiality emphasis)

#### 3b. Triage Under Limited Resources

If time and budget are constrained, which mitigations give the highest return? Prioritise actions that are:
- Low cost, high impact (e.g. blocking known IOCs immediately)
- Targeting the widest attack surface (e.g. MFA for admin accounts first)
- Rapidly deployable without significant infrastructure change

---

## Writing Checklist

Before submitting, verify each item:

- [ ] Threat actor, motivation, and target sector are identified
- [ ] All four CTI types (strategic, tactical, operational, technical) are addressed — note which are present and which are absent or weak
- [ ] Each intelligence source is assessed with a confidence level and reasoning
- [ ] Vulnerabilities are **inferred from the attack narrative**, not just copied from the report
- [ ] At least three mitigations, each with layer / purpose / justification / challenges
- [ ] Mitigations are directly tied to the specific threats described — avoid generic advice
- [ ] Word count: 500–800 words

---

## Common Mistakes to Avoid

| Mistake | Why it's wrong | Fix |
|---|---|---|
| Summarising the report without analysing it | The task asks for analysis, not paraphrasing | Add your own inference: what does this mean? what does it imply? |
| Generic mitigations with no link to the threat | "Use antivirus" adds no insight | Justify each mitigation by referencing the specific attack step it would counter |
| Listing IOCs without assessing their value | Technical detail without analytical value | State what the IOC tells you and how it should be operationalised |
| Ignoring source reliability | Not all intelligence is equal | Every source cited in the report should be assessed for confidence |
| Overstating certainty | Attribution is often probabilistic | Use hedged language: "attributed to", "suspected", "with high confidence" |

---

## Quick Reference: CTI Type Identifiers

When reading a report, use these signals to classify intelligence type:

- **Strategic**: words like _"motivation"_, _"historically"_, _"geopolitical"_, _"financially motivated"_, _"long-term campaign"_
- **Tactical**: words like _"phishing"_, _"lateral movement"_, _"credential theft"_, _"TTPs"_, _"attack pattern"_
- **Operational**: words like _"current campaign"_, _"timeline"_, _"active infrastructure"_, _"observed on [date]"_
- **Technical**: file hashes, IP addresses, domain names, malware names, CVE numbers, registry keys
