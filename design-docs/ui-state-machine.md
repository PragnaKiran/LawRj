# 🎛️ UI STATE MACHINE & INTERACTION RULEBOOK
## LawRJ Global Venture Architecture & Legal Tech Platform
**Document Reference:** `STATE-PRJ02-001`  
**Chief Helmsman & UI/UX Designer:** Lieutenant Hikaru Sulu [Agent 11]  
**Primary Implementer:** Lieutenant Vincent DeSalle [Agent 08], Vanilla Web Engineer  
**Mandate:** Define deterministic visual and interaction behaviors for all 5 mandatory UI states per component.

---

## 1. Five Mandatory UI State Definitions

Every interactive component across the LawRJ platform must explicitly implement five discrete states:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           5-STATE UI MACHINE MATRIX                         │
├─────────┬───────────────────┬───────────────────────────────────────────────┤
│ STATE   │ STATE DESIGNATION │ VISUAL & INTERACTIVE BEHAVIOR                 │
├─────────┼───────────────────┼───────────────────────────────────────────────┤
│ State 1 │ Initial / Loading │ Skeleton shimmer pulse, disabled buttons      │
├─────────┼───────────────────┼───────────────────────────────────────────────┤
│ State 2 │ Empty / Zero-Data │ Structured fallback card with guidance CTA    │
├─────────┼───────────────────┼───────────────────────────────────────────────┤
│ State 3 │ Partial / Active  │ Interactive filter chip toggled, active focus │
├─────────┼───────────────────┼───────────────────────────────────────────────┤
│ State 4 │ Populated / Success│ Full data render, submission confirmation     │
├─────────┼───────────────────┼───────────────────────────────────────────────┤
│ State 5 │ Error / Retry     │ Red border, inline aria alert, retry action   │
└─────────┴───────────────────┴───────────────────────────────────────────────┘
```

---

## 2. Component State Specifications

### 2.1 Component A: Founder Scoping Intake Form (`ContactOne.jsx`)

#### State 1: Initial / Idle State
* **Visual Presentation:** Clean input fields with slate placeholder text (`#64748B`), borders at `rgba(148, 163, 184, 0.2)`.
* **CTA Button:** Primary Gold fill (`#D4AF37`) with text: `"Submit Confidential Founder Briefing"`.
* **State Trigger:** Page load complete.

#### State 2: Active User Input State (Partial)
* **Visual Presentation:** Focused input highlights with 1px solid `#D4AF37` and subtle gold glow (`box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.2)`).
* **Validation Behavior:** Real-time syntax check on `work_email` without intrusive premature error banners.

#### State 3: Submitting / Loading State
* **Visual Presentation:** All form inputs set to `disabled`. The submit button transitions to surface neutral `#0D1B3E`, displaying a clean CSS spinner and label `"Encrypting & Transmitting Briefing..."`.
* **State Trigger:** User clicks submit after passing front-end validation.

#### State 4: Populated / Success State
* **Visual Presentation:**
  * Form inputs fade out smoothly over 200ms.
  * Replaced by an executive confirmation card:
    * *Icon:* Green Checkmark Circle (`#10B981`).
    * *Title:* `"Founder Briefing Received"` (Gold `#D4AF37`).
    * *Copy:* `"Your strategic scoping dossier has been transmitted directly to Advocate Viral Vyas under strict attorney-client confidentiality. Our chambers will review your materials and respond within 12 hours."`
    * *Escalation Action:* Direct high-visibility button: `[ Initiate Direct WhatsApp Follow-up ]` linking to `https://wa.me/919327000022`.

#### State 5: Error / Validation Failure State
* **Visual Presentation:**
  * Invalid input borders transition to Alert Red (`#EF4444`).
  * Inline error message renders directly below the input: `<p class="field-error" role="alert">Work email address must be in a valid corporate format.</p>`.
  * If network failure occurs during transmission, a sticky red toast appears at the top of the form with a `[ Retry Transmission ]` button.

---

### 2.2 Component B: Practice Area Taxonomy & Pillar Cards (`ServiceOne.jsx`)

#### State 1: Initial Skeleton Loading
* **Visual Presentation:** 4 horizontal card containers rendering a `#0D1B3E` surface with a subtle 1.5s CSS linear shimmer gradient.

#### State 2: Populated / Default Render
* **Visual Presentation:** 4 distinct pillar cards rendered with gold-bordered icons, high-contrast titles (`#F8FAFC`), structured bullet points, and `"Explore Practice Details ->"` links.

#### State 3: Filtered / Tab Selection State
* **Visual Presentation:** When a user selects a practice tab (e.g., `Venture Financing`), the target card elevates with an active gold border (`border: 1px solid #D4AF37`) while non-selected cards maintain subtle slate borders (`opacity: 0.85`).

#### State 4: Error State (Asset Loading Failure)
* **Visual Presentation:** If custom SVG icons fail to load, graceful CSS fallback badges render using pure typography initials (e.g., `[GCS]`, `[VCF]`, `[EBS]`, `[CBM]`) with zero layout shift.

---

*Authored by Lieutenant Hikaru Sulu [Agent 11] for implementation by Lieutenant Vincent DeSalle [Agent 08].*
