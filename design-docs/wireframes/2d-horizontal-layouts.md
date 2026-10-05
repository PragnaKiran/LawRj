# 📐 STRICTLY FLAT 2D HORIZONTAL LAYOUT WIREFRAMES
## LawRJ Global Venture Architecture & Legal Tech Platform
**Document Reference:** `WIRE-PRJ02-2D-001`  
**Chief Helmsman & UI/UX Designer:** Lieutenant Hikaru Sulu [Agent 11]  
**Commanding Officer:** Captain James T. Kirk (`»Kirk`), Agent 01  
**Aesthetic Mandate:** Strictly flat 2D horizontal schematics. Zero 3D mockups, zero angled device frames, zero decorative dropshadow renders. Pure structural grid geometry.

---

## 1. Global Viewport Breakpoint Standards

* **Mobile Viewport (`320px – 767px`):** 1-column stacked flow, sticky WhatsApp float, touch tap targets $\ge 48\text{px}$.
* **Tablet Viewport (`768px – 1023px`):** 2-column responsive layout, 16px spatial padding.
* **Desktop Viewport (`1024px – 1920px+`):** 12-column horizontal grid (`maxWidth: 1280px`), 24px gutter, 2-column intake form split.

---

## 2. Component Wireframe Schematics

### 2.1 Navigation Header (`src/components/header/HeaderOne.jsx`)

```
====================================================================================================
DESKTOP VIEWPORT (12-COLUMN GRID | 1024px - 1440px)
====================================================================================================
+--------------------------------------------------------------------------------------------------+
| [LOGO: LawRJ]      Home   Practice Areas (v)   The Bridge   About   Insights   [WhatsApp Line]  |
| (Gold #D4AF37)     ----   ------------------   ----------   -----   --------   [+91-9327000022] |
+--------------------------------------------------------------------------------------------------+
MOBILE VIEWPORT (320px - 767px)
+--------------------------------------------------------------------------------------------------+
| [LOGO: LawRJ]                                                      [WhatsApp Quick]  [HAMBURGER] |
+--------------------------------------------------------------------------------------------------+
```

---

### 2.2 Hero Section (`src/components/banner/BannerOne.jsx`)

```
====================================================================================================
DESKTOP VIEWPORT (12 COLUMNS | ZERO DELAWARE BIAS | 100vh / Max-Height: 820px)
====================================================================================================
+--------------------------------------------------------------------------------------------------+
| [BADGE: GLOBAL VENTURE ARCHITECTURE & STRATEGIC LEGAL COUNSEL]                                   |
|                                                                                                  |
| Jurisdiction-Agnostic Corporate Structuring for                                                  |
| High-Growth Startups Worldwide                                                                   |
|                                                                                                  |
| We architect optimized multi-entity corporate holding and operating structures across            |
| premier international venture jurisdictions—tailored precisely to founder tax residency,         |
| investor mandates, and cross-border IP protection (SG, UAE/ADGM, UK, US, Cayman, IN).           |
|                                                                                                  |
| +----------------------------------+  +-------------------------------------+                    |
| | [> Schedule Strategy Call]       |  | [O Confidential WhatsApp Advisory] |                    |
| | (Primary Gold Fill /Contact)     |  | (Outline Slate /+91-9327000022)     |                    |
| +----------------------------------+  +-------------------------------------+                    |
|                                                                                                  |
| ------------------------------------------------------------------------------------------------ |
| [STAT 1] $150M+                   | [STAT 2] Global Reach              | [STAT 3] 300+           |
| International Transactions        | Multi-Jurisdiction Entities        | Enterprise MSAs Drafted |
+--------------------------------------------------------------------------------------------------+
```

---

### 2.3 Four Core Practice Pillars Grid (`src/components/service/ServiceOne.jsx`)

```
====================================================================================================
DESKTOP VIEWPORT (12-COLUMNS | 4 EQUAL-WIDTH HORIZONTAL CARDS: 3 COLUMNS EACH)
====================================================================================================
+--------------------------------------------------------------------------------------------------+
| [SUB-TITLE: CORE PRACTICE TAXONOMY]                                                              |
| Institutional Venture Infrastructure Across Four Strategic Pillars                              |
+--------------------------------------------------------------------------------------------------+
| PILLAR 1 (Col 1-3)        | PILLAR 2 (Col 4-6)        | PILLAR 3 (Col 7-9)        | PILLAR 4 (10-12)     |
| [ICON: Global Globe]      | [ICON: Venture Cap-Table] | [ICON: Shield Contract]   | [ICON: Bilateral Hub]|
| Global Corporate          | Venture Capital Financing | Enterprise B2B SaaS       | Cross-Border Market  |
| Structuring & Holding     | & Cap-Table Governance    | Contracts & Data Privacy  | Expansion & Tech Hub |
| ------------------------- | ------------------------- | ------------------------- | -------------------- |
| * Multi-Entity Setups     | * YC Post-Money SAFEs     | * Sales-Enabling MSAs     | * India Tech GCC Hubs|
| * Singapore, ADGM, UK, US | * 500 Global KISS         | * Enterprise SLAs (99.9%) | * Inbound FDI (FEMA) |
| * IP Assignment & Holding | * Seed/Series A Rounds    | * DPDP Act 2023 Addenda   | * Outbound Flips     |
| * Cross-Border Governance | * Founder Vesting & ESOP  | * GDPR & CCPA Compliance  | * Banking & Taxation |
|                           |                           |                           |                      |
| [Explore Structuring ->]  | [Explore Financing ->]    | [Explore Contracts ->]    | [Explore Bridge ->]  |
+---------------------------+---------------------------+---------------------------+----------------------+
```

---

### 2.4 India-Global Cross-Border Technology Bridge (`src/components/about/AboutOne.jsx`)

```
====================================================================================================
DESKTOP VIEWPORT (2 EQUAL COLUMNS: 6 COLUMNS + 6 COLUMNS)
====================================================================================================
+--------------------------------------------------------------------------------------------------+
| COLUMN A: STRATEGIC BILATERAL NARRATIVE (6 COLUMNS)  | COLUMN B: COMPARATIVE JURISDICTION MATRIX |
|                                                      |                                          |
| Objective Advisory vs. Confirmation Bias             | +--------------------------------------+ |
| Rather than forcing every venture into Delaware,     | | JURISDICTION | PRIMARY USE-CASE       | |
| we objectively evaluate:                             | |--------------|-----------------------| |
| 1. Founder Tax Residency (India / Global)            | | Singapore    | APAC & SEA Holding     | |
| 2. Target Institutional Investor Domicile            | | UAE (ADGM)   | Middle East & Tax Opt. | |
| 3. Commercial Sales Geography (US, EU, APAC)         | | UK Ltd       | European Operations    | |
|                                                      | | Delaware     | US Institutional VCs   | |
| Inbound Bridge: We assist US/EU tech ventures        | | Netherlands  | EU IP Consolidation    | |
| establishing engineering GCCs in India under RBI.    | | India (Pvt)  | Operating Entity & GCC | |
|                                                      | +--------------------------------------+ |
+------------------------------------------------------+------------------------------------------+
```

---

### 2.5 Structured Founder Scoping Intake Form (`src/components/contact/ContactOne.jsx`)

```
====================================================================================================
DESKTOP VIEWPORT (SPLIT LAYOUT: 5 COLUMNS ADVISORY BRIEF + 7 COLUMNS FORM CONTROLS)
====================================================================================================
+--------------------------------------------------------------------------------------------------+
| ADVISORY COORDINATES (Col 1-5)    | STRUCTURED FOUNDER SCOPING INTAKE (Col 6-12)                |
|                                   |                                                              |
| Direct Strategic Briefing         | [Founder Full Name *]          [Corporate / Startup Name *]  |
| Meet directly with Advocate Viral | -----------------------------  ----------------------------  |
| Vyas to evaluate cross-border     |                                                              |
| structures and financing rounds.  | [Work Email Address *]         [Direct Phone / WhatsApp]     |
|                                   | -----------------------------  ----------------------------  |
| * Confidential Strategic Intake   |                                                              |
| * Mutual NDA Available on Request | [Current Startup Stage (Select) *]                          |
| * Zero Public Data Storage        | [ Idea / Bootstrapped | Pre-Seed | Seed | Series A+ | Ent. ] |
|                                   |                                                              |
| Direct Line:                      | [Primary Requirement (Select) *]                             |
| +91-9327000022                    | [ Global Holding | VC Financing | SaaS MSAs | India GCC ]   |
|                                   |                                                              |
| Location:                         | [Target Domicile Jurisdictions (Multi-select) *]             |
| Ahmedabad / High Court of Gujarat | [ [x] Singapore  [x] UAE  [x] US  [x] UK  [ ] Other ]        |
|                                   |                                                              |
| [DIRECT WHATSAPP BADGE]           | [Execution Horizon (Select) *]                               |
| (Opens 256-bit Encrypted Chat)    | [ Immediate (<14 Days) | Within 30 Days | Exploring ]        |
|                                   |                                                              |
|                                   | [ ] Request Mutual Non-Disclosure Agreement (M-NDA)          |
|                                   | [x] Acknowledge Commercial Advisory & Non-Litigation Notice* |
|                                   |                                                              |
|                                   | +----------------------------------------------------------+ |
|                                   | | [ SUBMIT CONFIDENTIAL FOUNDER BRIEFING -> ]              | |
|                                   | +----------------------------------------------------------+ |
+-----------------------------------+--------------------------------------------------------------+
```

---

### 2.6 Statutory Footer & Advocates Act Disclaimer (`src/components/footer/FooterOne.jsx`)

```
====================================================================================================
DESKTOP VIEWPORT (12 COLUMNS)
====================================================================================================
+--------------------------------------------------------------------------------------------------+
| [LOGO: LawRJ]        | PRACTICE PILLARS    | GLOBAL HUBS           | CONFIDENTIAL CONTACT        |
| Global Venture       | * Holding Entities  | * Ahmedabad (HQ)      | Direct: +91-9327000022      |
| Architecture &       | * SAFE Financing    | * High Court Chamber  | WhatsApp: wa.me/91932700... |
| Strategic Counsel    | * SaaS MSAs / DPDP  | * Singapore Desk      | Email: contact@lawrj.biz    |
|                      | * Inbound India GCC | * UAE / ADGM Desk     |                             |
|--------------------------------------------------------------------------------------------------|
| STATUTORY REGULATORY NOTICE (Advocates Act, 1961 Compliance):                                    |
| LawRJ operates as a strategic commercial venture architecture consultancy and cross-border       |
| corporate advisory practice. The materials on this website are provided for general informational|
| purposes only and do not constitute formal legal solicitation, advertisement, or an attorney-    |
| client relationship. Visitors requiring formal litigation representation before the High Court   |
| of Gujarat or Indian district courts must engage through direct individual vakalatnama in        |
| compliance with Bar Council regulations. Zero client intake data is monetized or tracked.        |
|--------------------------------------------------------------------------------------------------|
| (c) 2026 LawRJ. All Rights Reserved. Entity ID: ENT-09. DPDP Act 2023 Compliant.                |
+--------------------------------------------------------------------------------------------------+
```

---

*Compiled with 2D geometric precision by Lieutenant Hikaru Sulu [Agent 11].*
