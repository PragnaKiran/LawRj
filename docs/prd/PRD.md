# 🖖 PRODUCT REQUIREMENTS DOCUMENT (PRD)
## LawRJ Global Venture Architecture & Legal Tech Platform
**Document Reference:** `PRD-PRJ02-WEB-001`  
**Author:** Commander Spock (`»Spock`), First Officer & Chief Science Officer (Agent 02 \| AIPMM Product Manager)  
**Commanding Officer:** Captain James T. Kirk (`»Kirk`), Agent 01  
**Executive Authority:** Fleet Admiral Viral Vyas (ViKi Vyas)  
**Bound Project ID:** `[PRJ-02] LawRJ` (Entity ID: `ENT-09`)  
**Base Priority:** `2` (3-Tier Formula: `2-S-T`)  
**Workspace Root:** `/Users/viki/Developer/Websites/LawRj`  
**Remote Repository:** `https://github.com/PragnaKiran/LawRj.git` (Active Branch: `dev`)  
**Deployment Target:** `https://law-rj.web.app` (Firebase Hosting: `law-rj`)  
**Status:** `RATIFIED PHASE 1 SPECIFICATION — AWAITING HARD GATE SIGN-OFF`

---

## 1. Executive Summary & Mission Objective

### 1.1 Purpose
This document establishes the deterministic functional, non-functional, and architectural requirements for the digital web platform of **LawRJ** (`https://law-rj.web.app`).

### 1.2 The Problem
Previous web iterations and generic agency templates exhibited critical positioning flaws:
1. **Delaware / US Confirmation Bias:** The firm was inaccurately depicted as exclusively servicing US Delaware C-Corporations, conflicting with its core mandate of architecting multi-jurisdiction global structures (Singapore, UAE/DIFC/ADGM, UK, Netherlands, Cayman Islands, India).
2. **Template AI-Filler & Low Gravitas:** Anonymous client quotes (e.g., "Techstars Alum") and generic theme tropes compromised institutional credibility.
3. **Missing High-Velocity Intake:** Lack of a structured founder scoping funnel and direct confidential communication channels hindered client qualification.
4. **Scope Conflation with Offline Practice:** Physical litigation matters (Anand District Court probate hearings, Naroda SRO deed registrations) were conflated with software deliverables, cluttering IT sprint capacity.

### 1.3 Strategic Solution
Re-engineer the platform into a high-authority, zero-bloat, jurisdiction-agnostic web portal presenting LawRJ's **4 Core Practice Pillars**, equipped with a structured founder scoping intake form, direct WhatsApp advisory routing, statutory regulatory disclaimers, and zero-tracker privacy standards compliant with the Digital Personal Data Protection (DPDP) Act 2023.

---

## 2. Fleet Scope Boundary (Enterprise IT vs. Offline Legal Domain)

Per explicit directive of the Fleet Admiral, the USS Enterprise (NCC-1701) IT Projects Fleet operates under a strict **Scope Demarcation Boundary**:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    [PRJ-02] LawRJ — MASTER DOMAIN BOUNDARY                   │
├────────────────────────────────────────┬────────────────────────────────────┤
│  ENTERPRISE IT FLEET PREVIEW (ACTIVE)  │  OFFLINE PRACTICE TRACK (EXCLUDED) │
│  Supervised by: »Kirk & Bridge Crew    │  Handled Directly by: Viral Vyas   │
├────────────────────────────────────────┼────────────────────────────────────┤
│ • Next.js 14 Static Export Web Platform│ • Anand Court Probate Hearings     │
│ • 4 Core Practice Pillars Architecture │ • SRO Naroda Sale Deed Executions  │
│ • Structured Founder Scoping Intake    │ • Physical Collector/Mamlatdar Vis.│
│ • Direct WhatsApp Advisory Routing     │ • Mehsana Court Fee Refund Trials  │
│ • DPDP Act 2023 Privacy Compliance     │ • Satish Yadav Case Pleadings      │
│ • Automated QA Testing Gates (Chapel)  │ • Physical Stamp & Registry Duties │
│ • Firebase Hosting CI/CD (Uhura)       │ • Court Paper Notices & Summonses  │
└────────────────────────────────────────┴────────────────────────────────────┘
```

> **Mandatory Fleet Rule:** All offline court hearings, SRO deed collection, and manual litigation tasks remain preserved in the external operational master ledger (`tasks.json` / Google Sheet), but are **strictly removed from the USS Enterprise bridge backlog, sprint velocity, and PRD preview**. The fleet focuses 100% of engineering bandwidth on the software product vehicle.

---

## 3. Ideal Customer Profiles (ICPs) & Personas

| Persona ID | Title / Role | Organizational Context | Core Need & Pain Point |
| :--- | :--- | :--- | :--- |
| **`ICP-01`** | **Cross-Border Tech Founder** | High-growth startups scaling across 2+ nations (e.g., India dev team + US/SG parent). | Needs objective, multi-entity holding/subsidiary architecture without Delaware lock-in bias. |
| **`ICP-02`** | **Fundraising Founder (Seed / Series A)** | Institutional venture-backed or angel-backed tech venture. | Cap-table governance, clean founder vesting, YC Post-Money SAFEs, and dilution protection. |
| **`ICP-03`** | **B2B SaaS Scale-Up Executive** | Enterprise software companies selling to US/EU enterprises. | Procurement-ready Master Services Agreements (MSAs), SLAs, and DPDP/GDPR data processing addenda. |
| **`ICP-04`** | **Global Tech Inbound Sponsor** | International enterprise or fund establishing tech engineering hubs in India. | Setting up Global Capability Centers (GCCs), transfer pricing compliance, and inbound structuring. |

---

## 4. Functional Requirements (FR)

### FR-01: Hero Banner & Venture Architecture Positioning
* **FR-01.1:** The hero section (`src/components/banner/BannerOne.jsx`) must prominently display the flagship positioning:
  * *Headline:* `Jurisdiction-Agnostic Corporate Structuring for High-Growth Startups Worldwide`.
  * *Sub-copy:* Clear emphasis on tailored entity architecture across Singapore, UAE (DIFC/ADGM), UK, Netherlands, US, Cayman Islands, and India.
* **FR-01.2:** Eradicate all anonymous theme filler quotes (e.g., "Techstars Alum", "Venture Founder").
* **FR-01.3:** Display verified transaction metrics:
  * Metric 1: `$150M+` — International Venture Transactions Structured.
  * Metric 2: `Global Reach` — Multi-Jurisdiction Holding & Operating Entities.
  * Metric 3: `300+` — Enterprise MSAs & Commercial Agreements Negotiated.
* **FR-01.4:** Dual call-to-action buttons:
  * Primary: `Schedule Strategy Call` (routes to `/Contact` or `#strategy-call`).
  * Secondary: `Confidential WhatsApp Line` (direct link to `https://wa.me/919327000022`).

### FR-02: The 4 Core Practice Pillars
The platform must structure all service presentations around four immutable pillars:
* **FR-02.1 — Pillar 1: Global Corporate Structuring & Holding Architecture**
  * Multi-jurisdiction holding and subsidiary entity formation (Singapore, ADGM, DIFC, UK Ltd, Delaware C-Corp, Netherlands B.V., Cayman).
  * Intellectual Property (IP) assignment, consolidation, and licensing agreements.
  * Cross-border corporate governance and international banking integrations.
* **FR-02.2 — Pillar 2: Venture Capital Financing & Cap-Table Governance**
  * Y-Combinator Post-Money SAFEs (Valuation Cap & Discount).
  * 500 Global KISS convertible instruments and bridge debt notes.
  * Priced Seed & Series A institutional equity rounds and Shareholders' Agreements (SHA/SSA).
  * Founder vesting acceleration schedules, unvested share repurchase, and ESOP pool creation.
* **FR-02.3 — Pillar 3: Enterprise B2B SaaS Contracts & Global Privacy**
  * Sales-enabling, procurement-ready Master Services Agreements (MSAs).
  * Service Level Agreements (SLAs) with 99.9% uptime and credit penalty formulas.
  * Data Processing Agreements (DPAs) compliant with Indian DPDP Act 2023, GDPR (EU), and CCPA (US).
* **FR-02.4 — Pillar 4: Cross-Border Market Expansion & Inbound Tech Hubs**
  * Advisory for international ventures establishing engineering Global Capability Centers (GCCs) in India.
  * Inbound foreign direct investment (FDI) advisory under RBI/FEMA regulations.
  * Domestic Indian technology scale-ups expanding abroad into EMEA, APAC, and North America.

### FR-03: Strategic Practice Advisory & About Module
* **FR-03.1:** Refactor `src/components/about/AboutOne.jsx` to establish LawRJ as an objective advisory firm that systematically evaluates tax residency, funding requirements, and operational footprints before recommending an entity domicile.
* **FR-03.2:** Explicitly present the **India-Global Cross-Border Bridge** narrative, eliminating any mono-jurisdictional bias.

### FR-04: Structured Founder Intake & Scoping Funnel
* **FR-04.1:** Refactor `src/components/contact/ContactOne.jsx` into a high-density, professional scoping questionnaire:
  1. *Founder Full Name* (Required, string, 2–100 chars).
  2. *Corporate / Startup Name* (Required, string, 2–100 chars).
  3. *Work Email* (Required, valid email format).
  4. *Current Company Stage* (Single select: `Idea / Bootstrapped`, `Pre-Seed`, `Seed`, `Series A+`, `Enterprise`).
  5. *Primary Advisory Requirement* (Single select: `Global Holding Structuring`, `Venture Capital / SAFE Financing`, `Enterprise SaaS MSAs & Privacy`, `Inbound India GCC Setup`, `General Corporate Counsel`).
  6. *Target Domicile Jurisdictions* (Multi-select or text: `Singapore`, `UAE (ADGM/DIFC)`, `United States`, `United Kingdom`, `European Union`, `India`, `Other`).
  7. *Anticipated Execution Horizon* (Single select: `Immediate (<14 Days)`, `Within 30 Days`, `Exploring Options`).
  8. *Confidentiality Checkbox:* `Request Mutual Non-Disclosure Agreement (M-NDA) Prior to Call`.
* **FR-04.2:** Direct confidential escalation badge linking directly to `https://wa.me/919327000022` with pre-filled message: `Hello LawRJ Team, I would like to schedule a confidential Founder Strategy Briefing.`

### FR-05: Regulatory Transparency & Statutory Disclaimers
* **FR-05.1:** In accordance with the Advocates Act, 1961, and Bar Council of India rules, prominently display the statutory disclaimer in the footer and consultation intake:
  > *"LawRJ operates as a strategic commercial venture architecture consultancy and cross-border corporate advisory practice. The materials on this website are provided for general informational purposes only and do not constitute formal legal solicitation, advertisement, or an attorney-client relationship. Visitors requiring formal litigation representation before the High Court of Gujarat or Indian district courts must engage through direct individual vakalatnama in compliance with Bar Council regulations."*
* **FR-05.2:** Provide explicit checkboxes confirming client acknowledgment prior to consultation submission.

---

## 5. Non-Functional Requirements (NFR)

### NFR-01: Performance & Zero-Bloat Static Export
* **NFR-01.1:** The entire application must compile via `npm run build` using Next.js 14 static export (`output: 'export'`) outputting to `out/`.
* **NFR-01.2:** Zero Node.js runtime server dependencies in production. All assets must serve purely from Firebase Hosting CDN edge nodes.
* **NFR-01.3:** Largest Contentful Paint (LCP) must remain under `1.8 seconds` on standard 4G mobile emulation.
* **NFR-01.4:** Desktop and mobile Google Lighthouse Performance scores must achieve $\ge 90$.

### NFR-02: Zero-Tracker Data Privacy (DPDP Act 2023 & GDPR)
* **NFR-02.1:** Absolutely zero third-party commercial ad trackers, Facebook Meta pixels, or surveillance telemetry scripts may be included.
* **NFR-02.2:** No client intake form submission data may be leaked to external analytics.
* **NFR-02.3:** All form submissions must route via secure, encrypted serverless webhooks or authenticated EmailJS tokens adhering to strict payload validation.

### NFR-03: Visual Aesthetics & UI State Governance
* **NFR-03.1:** Maintain the executive advisory color palette:
  * Primary Deep Navy: `#071126`
  * Secondary Legal Gold: `#D4AF37` / `#F3C644`
  * Surface Neutral: `#0D1B3E`
  * Slate Text Neutrals: `#F8FAFC` and `#64748B`
* **NFR-03.2:** Maintain minimum WCAG 2.1 AAA contrast ratio ($\ge 7:1$) for all body typography and CTAs.
* **NFR-03.3:** Responsive breakpoints:
  * Mobile: `320px – 767px`
  * Tablet: `768px – 1023px`
  * Desktop: `1024px – 1920px+`

### NFR-04: Technical SEO & Schema.org Structured Data
* **NFR-04.1:** Inject JSON-LD structured data on all pages specifying `@type: "LegalService"` with entity name `LawRJ`, telephone `+91-9327000022`, and service types mapped to the 4 Core Pillars.
* **NFR-04.2:** Provide clean OpenGraph (`og:title`, `og:description`, `og:image`) and Twitter Card tags with zero client PII.
* **NFR-04.3:** Provide automated `robots.txt` allowing public indexing of practice pages while blocking search engine crawling of private intake endpoints.

---

## 6. 3-Tier Priority Matrix (`P-S-T`) for Enterprise IT Backlog

All software engineering tasks for LawRJ fall under Sub-Project `SUB-014` (`LawRJ Web Platform & Legal Tech Infrastructure`) with intra-project priority `T`:

| Task ID | 3-Tier Matrix | Feature / Component | Spoke Owner | Est. | Status |
| :--- | :---: | :--- | :---: | :---: | :---: |
| `TSK-IT-001` | **`2-4-1`** | **Hero Banner Refactor & Delaware De-Biasing** (`BannerOne.jsx`) | `»DeSalle` | 2.0h | To Do |
| `TSK-IT-002` | **`2-4-2`** | **4 Core Practice Pillars Integration** (`ServiceOne.jsx`) | `»DeSalle` | 3.0h | To Do |
| `TSK-IT-003` | **`2-4-3`** | **Structured Founder Scoping Intake Form** (`ContactOne.jsx`) | `»DeSalle` | 3.0h | To Do |
| `TSK-IT-004` | **`2-4-4`** | **About Section & India-Global Bridge Copy** (`AboutOne.jsx`) | `»DeSalle` | 1.5h | To Do |
| `TSK-IT-005` | **`2-4-5`** | **Statutory Disclaimers & DPDP Footer** (`FooterOne.jsx`) | `»Cogley` | 1.5h | To Do |
| `TSK-IT-006` | **`2-4-6`** | **Schema.org LegalService JSON-LD & SEO** | `»Rand` | 1.5h | To Do |
| `TSK-IT-007` | **`2-4-7`** | **QA Automated Test Suites (Gherkin Scenarios)** | `»Chapel` | 3.0h | To Do |
| `TSK-IT-008` | **`2-4-8`** | **Firebase Hosting Production Deployment (`law-rj`)** | `»Uhura` | 1.0h | To Do |

---

## 7. Downstream Bridge Officer Execution Protocol

Upon ratification of this PRD:
1. **`»Sulu` (UI/UX Designer):** Translate FR-01 through FR-04 into flat 2D horizontal wireframes in `design-docs/` mapping the 5 UI states (`Loading`, `Empty`, `Partial`, `Populated`, `Error`).
2. **`»Daystrom` (Solutions Architect):** Blueprint Stage-1 lightweight Markdown architecture in `architecture-docs/draft-lightweight/`.
3. **`»Chekov` (Cloud Data):** Verify intake webhook security rules and zero-cost quota isolation.
4. **`»Cogley` (Legal Counsel):** Audit statutory disclaimer text against the Advocates Act, 1961 and DPDP Act 2023.
5. **The Hard Gate:** Halt and report the complete Phase 1 documentation package to the Fleet Admiral for authorization before unlocking Phase 2 code execution.

*Document compiled with Starfleet logical rigor by Commander Spock (`»Spock`).*
