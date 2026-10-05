# 🖖 MATHEMATICAL GHERKIN USER STORIES & ACCEPTANCE CRITERIA
## LawRJ Global Venture Architecture & Legal Tech Platform
**Document Reference:** `US-PRJ02-WEB-001`  
**Author:** Commander Spock (`»Spock`), First Officer & Chief Science Officer (Agent 02 \| AIPMM Product Manager)  
**Assigned QA Diagnostic Analyst:** Nurse Christine Chapel (`»Chapel`), Agent 10  
**Bound Project ID:** `[PRJ-02] LawRJ` (Entity ID: `ENT-09`)  
**Base Priority:** `2` (3-Tier Sub-Project: `SUB-014` \| Matrix: `2-4-T`)  
**Repository:** `https://github.com/PragnaKiran/LawRj.git` (`dev` branch)  
**Status:** `RATIFIED ACCEPTANCE SPECIFICATION FOR AUTOMATED QA COMPILATION`

---

## 1. Traceability & Prioritization Matrix

| Story ID | 3-Tier Matrix | Title & Capability | Target Component | QA Priority |
| :--- | :---: | :--- | :--- | :---: |
| **`US-IT-001`** | **`2-4-1`** | Jurisdiction-Agnostic Hero Banner & Metrics | `BannerOne.jsx` | Critical (M) |
| **`US-IT-002`** | **`2-4-2`** | 4 Core Practice Pillars Presentation | `ServiceOne.jsx` | Critical (M) |
| **`US-IT-003`** | **`2-4-3`** | Structured Founder Scoping Intake Pipeline | `ContactOne.jsx` | Critical (M) |
| **`US-IT-004`** | **`2-4-4`** | Confidential WhatsApp Advisory Routing | `ContactOne.jsx` / Header | High (S) |
| **`US-IT-005`** | **`2-4-5`** | India-Global Cross-Border Technology Bridge | `AboutOne.jsx` / `IndiaBridgeOne.jsx` | High (S) |
| **`US-IT-006`** | **`2-4-6`** | Statutory Regulatory Transparency Disclaimer | `FooterOne.jsx` / Forms | Critical (M) |
| **`US-IT-007`** | **`2-4-7`** | Technical SEO & Schema.org JSON-LD | `app/layout.js` / `head.js` | High (S) |
| **`US-IT-008`** | **`2-4-8`** | Zero-Bloat Static Export & Edge CDN Caching | `next.config.mjs` / `firebase.json` | Critical (M) |
| **`US-IT-009`** | **`2-4-9`** | Automated Accessibility & Diagnostic QA Gates | Test Suites (`tests/`) | High (S) |

---

## 2. Gherkin User Stories & Acceptance Criteria

### US-IT-001: Jurisdiction-Agnostic Hero Banner & Verified Metrics
* **Matrix:** `2-4-1` \| **Component:** `src/components/banner/BannerOne.jsx`
* **Narrative:**
  * **As a** cross-border startup founder evaluating corporate structuring options,
  * **I want to** see clear, objective global venture architecture positioning and verified transaction metrics,
  * **So that** I know LawRJ is not biased exclusively toward Delaware C-Corps and has proven expertise across international venture jurisdictions.

```gherkin
Feature: Jurisdiction-Agnostic Hero Positioning

  Background:
    Given a visitor navigates to the LawRJ home page at "/"

  Scenario: Eradication of Delaware-only lock-in copy
    Then the hero banner text must not contain "exclusive Delaware focus"
    And the hero headline must display "Jurisdiction-Agnostic Corporate Structuring for High-Growth Startups Worldwide"
    And the sub-headline must explicitly mention "Singapore", "UAE (ADGM/DIFC)", "United Kingdom", "United States", and "India"

  Scenario: Display verified transaction and institutional metrics
    Then the hero metric panel must render exactly three verifiable metrics:
      | Metric Label                     | Metric Value |
      | International Transactions       | $150M+       |
      | Entity Domiciles Structured      | Global Reach |
      | Enterprise MSAs & Agreements     | 300+         |

  Scenario: Verified primary and secondary conversion actions
    When the visitor views the hero call-to-action area
    Then a primary button labelled "Schedule Strategy Call" must link to "/Contact"
    And a secondary button labelled "Confidential WhatsApp Line" must link to "https://wa.me/919327000022" with "rel=noopener noreferrer"

  Scenario: Removal of anonymous template filler
    Then the hero carousel must not contain anonymous attribution cards such as "Techstars Alum" or "Venture Founder"
```

---

### US-IT-002: Four Core Practice Pillars Presentation
* **Matrix:** `2-4-2` \| **Component:** `src/components/service/ServiceOne.jsx`
* **Narrative:**
  * **As an** institutional founder or corporate executive,
  * **I want to** navigate through LawRJ's 4 distinct commercial practice pillars,
  * **So that** I can assess specialized legal engineering capabilities relevant to my startup's stage.

```gherkin
Feature: Four Core Practice Pillars Architecture

  Background:
    Given a visitor views the Practice Areas section at "/Service" or on the homepage

  Scenario: Complete rendering of 4 practice pillars
    Then exactly 4 distinct practice pillar cards must be rendered:
      | Pillar ID | Pillar Title                                        | Core Focus                                      |
      | PIL-01    | Global Corporate Structuring & Holding Architecture | Singapore, ADGM, UK, US, Cayman, IP Assignment  |
      | PIL-02    | Venture Capital Financing & Cap-Table Governance    | YC Post-Money SAFEs, KISS, Series A, Vesting    |
      | PIL-03    | Enterprise B2B SaaS Contracts & Global Privacy      | MSAs, SLAs, DPDP Act 2023, GDPR, CCPA           |
      | PIL-04    | Cross-Border Market Expansion & Inbound Tech Hubs   | India GCC Hubs, Inbound FDI, Global Scaling     |

  Scenario: Verification of Cap-Table financing instruments
    When the visitor inspects Pillar 2 ("Venture Capital Financing")
    Then the card details must list:
      | Instrument Type              | Detail Specification                       |
      | YC Post-Money SAFE           | Valuation Cap and Discount terms           |
      | 500 Global KISS              | Convertible equity and debt instruments    |
      | Priced Equity Rounds         | Shareholders' Agreements (SHA/SSA)         |
      | Founder Equity Protection    | 4-year vesting, 1-year cliff, acceleration |

  Scenario: Navigation to detailed practice briefs
    When the visitor clicks "Explore Practice Details" on any pillar
    Then the application must navigate smoothly to "/ServiceDetails?pillar={PillarID}" without page reloads
```

---

### US-IT-003: Structured Founder Scoping Intake Pipeline
* **Matrix:** `2-4-3` \| **Component:** `src/components/contact/ContactOne.jsx`
* **Narrative:**
  * **As a** startup founder seeking legal counsel,
  * **I want to** submit a structured, confidential project scoping briefing with my venture's specific stage, jurisdictions, and requirements,
  * **So that** the advisory call is immediately focused and productive.

```gherkin
Feature: Structured Founder Scoping Intake Form

  Background:
    Given a founder navigates to the Consultation page at "/Contact"

  Scenario: Rendering of mandatory founder scoping fields
    Then the intake form must display the following input controls:
      | Field Name            | Input Type    | Mandatory | Validation Rule               |
      | founder_name          | text          | true      | Minimum 2 characters          |
      | company_name          | text          | true      | Minimum 2 characters          |
      | work_email            | email         | true      | Valid RFC 5322 email syntax   |
      | company_stage         | select        | true      | One of Idea/Pre-Seed/Seed/A+  |
      | primary_requirement   | select        | true      | One of 5 defined legal tracks |
      | target_jurisdictions  | select/multi  | true      | At least one jurisdiction     |
      | execution_timeline    | select        | true      | Immediate/30-Days/Exploring   |
      | mutual_nda_requested  | checkbox      | false     | Boolean flag                  |
      | regulatory_disclaimer | checkbox      | true      | Must be checked to submit     |

  Scenario: Form validation on empty submission
    When the founder clicks "Submit Strategy Briefing" with empty fields
    Then the form must not submit
    And visual validation errors must highlight missing mandatory fields
    And focus must be set to the first invalid field with accessible aria-invalid="true"

  Scenario: Successful confidential submission
    Given all mandatory fields are validly populated
    And the regulatory disclaimer checkbox is checked
    When the founder clicks "Submit Strategy Briefing"
    Then the form must transition into the "Submitting..." loading state
    And an encrypted payload must dispatch to the verified intake handler
    And the form must transition to a "Briefing Received" confirmation banner
    And a direct link to the WhatsApp line must appear for immediate escalation
```

---

### US-IT-004: Confidential WhatsApp Advisory Routing
* **Matrix:** `2-4-4` \| **Component:** `HeaderOne.jsx`, `ContactOne.jsx`, `FooterOne.jsx`
* **Narrative:**
  * **As an** active venture founder in a fast-moving financing round,
  * **I want to** initiate a direct WhatsApp chat with Advocate Viral Vyas,
  * **So that** urgent time-sensitive terms (e.g. SAFE closing) can be escalated immediately.

```gherkin
Feature: Direct WhatsApp Advisory Routing

  Scenario: Header quick-dial interaction
    Given a user on any page on mobile or desktop
    When the user clicks the "WhatsApp Advisory" badge
    Then a new window or app must open to "https://wa.me/919327000022"
    And the pre-filled message must be URI-encoded: "Hello Adv. Vyas, I would like to schedule a confidential Founder Strategy Briefing with LawRJ."

  Scenario: Security and referrer isolation
    When any WhatsApp anchor tag is rendered
    Then it must have attributes 'target="_blank"' and 'rel="noopener noreferrer"'
```

---

### US-IT-005: India-Global Cross-Border Technology Bridge
* **Matrix:** `2-4-5` \| **Component:** `src/components/about/AboutOne.jsx`
* **Narrative:**
  * **As an** international technology company or venture capitalist,
  * **I want to** understand LawRJ's bilateral bridge between India and global markets,
  * **So that** we can establish an Indian engineering GCC while keeping global investor governance clean.

```gherkin
Feature: Bilateral Tech Hub Bridge

  Scenario: Dual inbound/outbound narrative display
    Given a visitor reads the About section
    Then the platform must detail:
      | Trajectory        | Strategic Focus                                           |
      | Inbound to India  | Tech GCC incorporation, transfer pricing, FEMA compliance |
      | Outbound to World | Cap-table flips, international IP holding, global funding |
```

---

### US-IT-006: Statutory Regulatory Transparency Disclaimer
* **Matrix:** `2-4-6` \| **Component:** `src/components/footer/FooterOne.jsx`, `ContactOne.jsx`
* **Narrative:**
  * **As the** Principal Advocate and Managing Director,
  * **I want** the website to prominently display statutory disclaimers under the Advocates Act, 1961 and Bar Council rules,
  * **So that** our commercial advisory practice operates with total regulatory compliance and zero ambiguity regarding attorney-client relationships.

```gherkin
Feature: Advocates Act Regulatory Compliance

  Scenario: Prominent footer disclaimer presence
    Given a visitor views the website footer on any page
    Then the footer must contain the complete statutory notice:
      """
      LawRJ operates as a strategic commercial venture architecture consultancy and cross-border corporate advisory practice. The materials on this website are provided for general informational purposes only and do not constitute formal legal solicitation, advertisement, or an attorney-client relationship. Visitors requiring formal litigation representation before the High Court of Gujarat or Indian district courts must engage through direct individual vakalatnama in compliance with Bar Council regulations.
      """

  Scenario: Form submission disclaimer gating
    Given a user is filling out the Contact intake form
    When the user attempts to submit without checking the statutory disclaimer box
    Then the form must prevent submission
    And alert the user: "You must acknowledge the commercial advisory disclaimer prior to submission."
```

---

### US-IT-007: Technical SEO & Schema.org JSON-LD Structured Data
* **Matrix:** `2-4-7` \| **Component:** `src/app/layout.js` / HTML Head
* **Narrative:**
  * **As a** search engine crawler indexing legal services,
  * **I want to** ingest structured JSON-LD data conforming to Schema.org `LegalService`,
  * **So that** LawRJ ranks for global corporate structuring, SAFEs, and enterprise SaaS contracts.

```gherkin
Feature: Technical SEO and Structured Data

  Scenario: Schema.org LegalService validation
    Given a web crawler requests any public page on "https://law-rj.web.app"
    Then the HTML head must contain a script tag of type "application/ld+json"
    And the parsed JSON must contain:
      | JSON Property | Expected Value                                            |
      | @context      | https://schema.org                                        |
      | @type         | LegalService                                              |
      | name          | LawRJ                                                     |
      | telephone     | +919327000022                                             |
      | url           | https://law-rj.web.app                                    |
      | priceRange    | $$$$                                                      |
      | areaServed    | Global, India, Singapore, United States, United Kingdom   |

  Scenario: Social OpenGraph and Twitter tags
    Then the head must contain 'og:title', 'og:description', and 'og:image'
    And no sensitive client data or private internal routes may be referenced
```

---

### US-IT-008: Zero-Bloat Static Export & Edge CDN Caching
* **Matrix:** `2-4-8` \| **Component:** `next.config.mjs`, `firebase.json`
* **Narrative:**
  * **As a** site visitor on a mobile connection,
  * **I want** instantaneous page loads served from edge cache,
  * **So that** high-value advisory materials load within 1.8 seconds.

```gherkin
Feature: Static Export and Performance Gating

  Scenario: Static compilation verification
    Given the project source code in "/Users/viki/Developer/Websites/LawRj"
    When "npm run build" is executed
    Then the build must exit with code 0
    And the output directory "out/" must contain pre-rendered HTML files
    And zero dynamic Node.js server dependencies may be required

  Scenario: Firebase edge caching headers
    When an asset matching "**/*.@(jpg|png|webp|svg|css|js)" is requested from Firebase Hosting
    Then the response header "Cache-Control" must equal "max-age=31536000, immutable"
    And the response header "X-Content-Type-Options" must equal "nosniff"
    And the response header "X-Frame-Options" must equal "SAMEORIGIN"
```

---

### US-IT-009: Automated Accessibility & Diagnostic QA Gates
* **Matrix:** `2-4-9` \| **Component:** Test Automation Suites (`»Chapel`)
* **Narrative:**
  * **As** Nurse Christine Chapel (`»Chapel`), Chief Diagnostic Analyst,
  * **I want** automated verification suites covering all Gherkin criteria,
  * **So that** I can enforce the Starfleet 80% coverage testing gate prior to production release.

```gherkin
Feature: Diagnostic QA and Accessibility Gate

  Scenario: Color contrast ratio audit
    Given the rendered DOM on desktop and mobile viewports
    When an automated axe-core accessibility audit is executed
    Then zero contrast violations with ratio < 7:1 (AAA) may exist on body text
    And all interactive form inputs must have associated <label> elements

  Scenario: Automated testing gate threshold
    When the full test suite runs via CI/CD
    Then statement test coverage must meet or exceed 80%
    And zero critical diagnostic errors may remain unresolved
```

---

*Compiled with mathematical precision by Commander Spock (`»Spock`) for direct execution by Lieutenant Vincent DeSalle (`»DeSalle`) and verification by Nurse Christine Chapel (`»Chapel`).*
