# Starfleet Production Backlog: lawrj.com
**Domain:** `lawrj.com` | **Hosting Target:** Firebase `lawrj-legal` | **Primary Email:** `i@lawrj.com`  
**Legal Practice:** LawRJ Legal Advisory Network & Corporate Litigation Practice  
**Key Practice Domains:** High-Stakes Property Title Disputes, Testamentary Probate (Sec 276 ISA), Revenue Court & Sec 135-D Mutations, Commercial Contracts  
**Statutory Framework:** Advocates Act 1961 (Bar Council of India Rule 36 Compliance) | India DPDP Act 2023 | Indian Evidence Act  

---

## 1. MoSCoW Prioritization Matrix

### 🔴 MUST HAVE (Priority 0 — Critical Non-Negotiables)
- [x] **M-01 (Uptime & SSL):** Live resolution via Cloudflare `kay`/`rob` with HTTP/2 `200 OK` response.
- [x] **M-02 (Branded Inbound Email):** Zero `@gmail.com` leakage; direct confidential communications routed via `i@lawrj.com`.
- [x] **M-03 (Bar Council Non-Solicitation Disclaimers):** Strictly compliant non-advertisement notice and voluntary informational access acknowledgment per BCI rules.
- [ ] **M-04 (Security Hardening):** Strict Transport Security (`max-age=63072000; includeSubDomains; preload`), `X-Content-Type-Options: nosniff`.
- [ ] **M-05 (5 Quality Gates):** Mandatory automated pass on Website Sanity, DOM Sanity, Config, Smoke Testing, and Viewport Regression.

### 🟡 SHOULD HAVE (Priority 1 — High Impact Enhancements)
- [ ] **S-01 (Litigation Practice Overview):** Detailed procedural breakdown of Gujarat High Court, City Civil Court, and Mamlatdar/Collectorate revenue proceedings.
- [ ] **S-02 (Probate & Estate Diligence Dossier):** Educational walkthrough on Sec 276 Indian Succession Act testamentary petitions and citation procedures.
- [ ] **S-03 (Performance Budget):** Next.js static export bundle under 220 KB gzip, LCP < 1.0s, CLS = 0 across mobile and desktop.
- [ ] **S-04 (Legal Knowledge Base):** Structured legal commentary articles on land tenure, encumbrance certificates, and partition suits.

### 🟢 COULD HAVE (Priority 2 — Desirable Value-Adds)
- [ ] **C-01 (Court Case Stage Glossary):** Interactive legal glossary explaining stages from Plaint admission to Final Decree.
- [ ] **C-02 (Statutory Court Fee Calculator):** Gujarat Court Fees Act estimator for civil suits and probate petitions.
- [ ] **C-03 (Encrypted Consultation Scheduler):** Confidential consultation request flow with automated conflict-of-interest check.

### ⚪ WON'T HAVE (Out of Scope for Current Sprint)
- [ ] **W-01 (Commercial Legal Advertising):** Strictly zero commercial solicitation, touting, or promotional marketing prohibited by Bar Council of India.
- [ ] **W-02 (Unsolicited Case Outcome Guarantees):** Zero guarantees of judicial or administrative outcomes.
- [ ] **W-03 (Third-Party Analytics Trackers):** Strictly zero tracking beacons, retargeting pixels, or surveillance cookies.

---

## 2. 15-Agent Task & Responsibility Grid

| Agent ID | Starfleet Officer & Role | Specific Deliverable & Operational Mandate |
| :---: | :--- | :--- |
| **Agent 01** | **»Kirk** (PM & Central Hub Router) | Govern legal network roadmap, enforce Bar Council ethics, and approve The Hard Gate. |
| **Agent 02** | **»Spock** (Product Manager & Science Officer) | Formulate algorithmic court fee calculations and procedural statutory limitation flows. |
| **Agent 03** | **»Bones** (Scrum Master & Chief Delivery Officer) | Manage sprint velocity, prevent burnout, and coordinate legal practice deliverables. |
| **Agent 04** | **»Daystrom** (Solutions Architect) | Blueprint zero-knowledge legal document architecture and secure static hosting topology. |
| **Agent 05** | **»Chekov** (Cloud Data Architect) | Configure Firebase Hosting headers, custom CSP directives, and immutable static caching. |
| **Agent 06** | **»Kyle** (Flutter / Cross-Platform Developer) | Audit UI component reusability and optimize touch interactions across mobile viewports. |
| **Agent 07** | **»Scotty** (Chief Engineer & Python Developer) | Implement backend static form handlers, legal intake routers, and automated dispatchers. |
| **Agent 08** | **»DeSalle** (Web Engineer & Vanilla Specialist) | Optimize Next.js static HTML export, eliminate unnecessary scripts, and ensure zero layout shift. |
| **Agent 09** | **»Uhura** (DevOps Lead & Communications) | Enforce Cloudflare DNS proxying, SSL/TLS strict encryption, and SPF/DKIM/DMARC routing. |
| **Agent 10** | **»Chapel** (QA Test Engineer) | Validate the 5 Quality Gates, test cross-browser compliance, and verify 0 console errors. |
| **Agent 11** | **»Sulu** (UI/UX Designer & Helmsman) | Maintain Classical Judicial Navy & Gold palette tokens (`#1e3a8a`, `#cda52b`) and legal typography. |
| **Agent 12** | **»Rand** (Marketing & SEO Specialist) | Author educational legal articles strictly conforming to Bar Council of India dignity guidelines. |
| **Agent 13** | **»Cogley** (Legal Counsel & Statutory Audit) | Ensure strict compliance with Advocates Act 1961, Bar Council Rules, and India DPDP Act 2023. |
| **Agent 14** | **»Leslie** (GitHub Admin & Quantum Archivist) | Manage `PragnaKiran/LawRj` repository, branch protections, and commit logs on `dev`. |
| **Agent 15** | **»Wishu** (Chief of Staff & Operational Orchestrator) | Synchronize legal practice deliverables with master Starfleet operational work logs. |
