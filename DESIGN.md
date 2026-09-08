---
name: CreditBird Sovereign Ledger
aesthetic: Architectural Cyanotype Blueprint
colors:
  surface: '#16295c'
  surface-dim: '#101e44'
  surface-bright: '#1c3575'
  surface-container-lowest: '#0a1329'
  surface-container-low: '#101e44'
  surface-container: '#16295c'
  surface-container-high: '#1c3575'
  surface-container-highest: '#22439c'
  on-surface: '#ffffff'
  on-surface-variant: '#cbd5e1'
  outline: 'rgba(74, 144, 226, 0.35)'
  outline-variant: 'rgba(50, 135, 255, 0.2)'
  primary: '#22439c'
  on-primary: '#ffffff'
  primary-container: '#16295c'
  on-primary-container: '#93c5fd'
  secondary: '#3287ff'
  on-secondary: '#ffffff'
  secondary-container: '#0c2b5e'
  tertiary: '#60a5fa'
  on-tertiary: '#0a1329'
  error: '#f43f5e'
  background: '#16295c'
  on-background: '#ffffff'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-md:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.03em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.15em
spacing:
  base: 4px
  xs: 6px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 72px
  gutter: 24px
  margin-desktop: 24px
---

# Design System Specification: CreditBird (creditbirdtech.com)

> **Standard:** OpenDesign / Stitch Semantic Design System  
> **Source Benchmark:** Formance Architecture ([formance.com](https://www.formance.com/))  
> **Brand Asset Origin:** [`creditbird-logo.png`](file:///home/arch/Project/creditbird-website/creditbird-logo.png)  
> **Version:** 1.0.0 (Production Release)

---

## 1. Visual Theme & Sectional Rhythm Architecture

CreditBird is a mission-critical financial infrastructure platform — a programmable ledger and credit movement operating system for fintechs, lending networks, and global payment rails. 

To prevent oppressive dark mode fatigue while preserving high-tech institutional authority, CreditBird adheres strictly to Formance's signature **Dual-Tone Sectional Rhythm**, elevated with the **Architectural Cyanotype Blueprint Aesthetic**:

```
┌────────────────────────────────────────────────────────────────────────┐
│ SECTION 1: DARK CYANOTYPE COBALT ATMOSPHERE (Acquiring Hero, Cockpit)  │
│ Deep Cobalt Primary (#16295c) + Canvas particles + Blueprint telemetry  │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 2: CRISP LIGHT BLUEPRINT GRID (Why, By The Numbers, Fund Flows)│
│ Crisp pearl canvas (#ffffff / #f8fafc) + 32px graph paper grid +       │
│ Hairline .grid-ring cards + High-contrast code & metrics cards         │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 3: DARK CYANOTYPE ARCHITECTURAL BLUEPRINT MODULES              │
│ (The Problem, Capabilities, CreditScript Split, Voices, Resources, CTA)│
│ Deep Cobalt Primary (#16295c) + 32px strict-grid + Electric Azure glow │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 4: THE ULTRA-TALL ARCHITECTURAL FOOTER                         │
│ Deep Sovereign Navy (#0a1329) + 4 massive columns + 14 categorized     │
│ domains + Giant embossed brand watermark peeking at bottom-right       │
└────────────────────────────────────────────────────────────────────────┘
```

### 1.1 The 4 Core Pillars of Architectural Blueprint Aesthetic

CreditBird's visual language embodies the authentic **Cyanotype Blueprint Aesthetic** (kỹ thuật bản vẽ kiến trúc cyanotype):

1. **📐 Nền lưới toạ độ kỹ thuật (Architectural Grid Matrix — `.strict-grid`):**
   - Lưới ô vuông 32px (`--grid-unit: round(clamp(22px, 2cqi, 32px), 1px)`) dạng *graph paper / millimeter paper*.
   - Tạo bằng `conic-gradient` với đường nét mảnh 1px (`--_grid-line`), bắt dính (pixel-snap) mọi module, typography và khoảng cách.
2. **🔲 Khung viền Hairline mô-đun (`.grid-ring`):**
   - Các khối mô-đun liền kề nhau như mặt bằng CAD (*floor plan*).
   - Triệt tiêu hoàn toàn viền đôi (`zero double-borders`), các cạnh chung một đường nét hairline 1px tinh tế.
3. **🔷 Nền Xanh đậm Cyanotype Blueprint (`#16295c` — Cobalt Primary):**
   - Kế thừa bản chất in ảnh Cyanotype truyền thống (muối sắt Prussian/Cobalt Blue với nét vẽ trắng sáng).
   - Thay thế toàn bộ nền đen xì thông thường bằng sắc xanh Cobalt đậm có chiều sâu, tương phản cao với chữ trắng `#ffffff` và đường lưới `rgba(74, 144, 226, 0.35)`.
4. **🏷️ Ký hiệu học & Typography kỹ thuật (Technical Monospace & Tag Syntax):**
   - Cú pháp gắn nhãn bản vẽ: Tiền tố gạch dưới và hậu tố gạch chéo: `_THE PROBLEM/`, `_CAPABILITIES/`, `_CREDITSCRIPT/`, `_BY THE NUMBERS/`, `_PROOF/`.
   - Font Monospace (`JetBrains Mono` / `Geist Mono`) với số thứ tự tabular 2 chữ số (`01`, `02`, `03`, `04`).

### Aesthetic Dials:
- **Density:** `Cockpit Technical (7/10)` — High information fidelity, strict hairline grid containment, tabular figures, and visible modular boundaries.
- **Variance:** `Offset Asymmetric (6/10)` — Rhythmic tension between strict geometric grids, 2-column comparative ledgers, code execution blocks, and dynamic topology schematics.
- **Motion:** `Restrained Mechanical (5/10)` — Snappy spring dynamics (`stiffness: 120, damping: 22`), subtle data stream pulses, zero decorative floaters, zero bouncy cartoon physics.

---

## 2. Color Palette & Roles (Calibrated to CreditBird Logo)

The palette is directly extracted and mathematically expanded from [`creditbird-logo.png`](file:///home/arch/Project/creditbird-website/creditbird-logo.png), featuring the sovereign cobalt disc and the aerodynamic electric azure wing feather.

```
                  CREDITBIRD CORE BRAND TRIAD
┌──────────────────────────┬──────────────────────────┬──────────────────────────┐
│  Deep Royal Cobalt       │  Electric Azure Wing     │  Crisp Sovereign White   │
│  #22439c                 │  #3287ff                 │  #ffffff                 │
│  RGB(34, 67, 156)        │  RGB(50, 135, 255)       │  RGB(255, 255, 255)      │
│  Foundational Substrate  │  Luminous Vector Rail    │  Foreground Contrast     │
└──────────────────────────┴──────────────────────────┴──────────────────────────┘
```

### 2.1 Dark Mode (Architectural Cyanotype Cobalt Engine)
Evolved from Formance's signature `theme-emerald` dark structure into CreditBird's sovereign **Cyanotype Blueprint** domain:

| Token Name | Value | Contrast / HSL | Functional Role |
|---|---|---|---|
| `--background` / `--color-canvas-base` | `#16295c` | HSL(224, 61%, 23%) | Root blueprint background, deep cobalt canvas |
| `--card-background` / `--color-canvas-surface` | `#16295c` | Seamless with base | Card substrate, seamless modular container |
| `--card-element-background` / `--color-canvas-raised` | `rgba(50, 135, 255, 0.15)` | Luminous tint | Hover states, card sub-elements, elevated pills |
| `--color-canvas-overlay` | `#1c3575` | HSL(224, 61%, 28%) | Dropdowns, popovers, elevated code headers |
| `--grid-line-color` / `--color-border-hairline`| `rgba(74, 144, 226, 0.35)` | Blueprint hairline | 32px coordinate grid lines, card edges, `.grid-ring` |
| `--color-border-active`  | `#60a5fa` | Sky Azure | Focused rings, active rail nodes, accent borders |
| `--foreground` / `--color-text-primary`   | `#ffffff` | 10.5:1 on base | Headings, hero statements, primary metrics |
| `--muted-foreground` / `--color-text-secondary` | `#cbd5e1` | 6.8:1 on base | Explanations, architectural descriptions |
| `--color-text-muted`     | `#94a3b8` | 4.5:1 on base | Metadata, technical labels, telemetry timestamps |
| `--color-brand-primary`  | `#22439c` | Core Cobalt | Primary buttons, badge backgrounds, brand accents |
| `--section-accent` / `--color-brand-accent` | `#60a5fa` | Sky Azure Glow | Flow indicators, inline links, active terminal tokens |
| `--eyebrow-background`   | `rgba(50, 135, 255, 0.2)` | Translucent Blue | Pill container for `_TAG/` badges |
| `--eyebrow-foreground`   | `#93c5fd` | High Contrast | Label text for `_TAG/` badges |

### 2.2 Light Mode (Enterprise Day Mode)
Used for whitepaper exports, enterprise compliance dashboards, and daylight audits:

| Token Name | Value | Functional Role |
|---|---|---|
| `--color-canvas-base` | `#f8fafc` | Clean pearl white canvas |
| `--color-canvas-surface` | `#ffffff` | Pure white cards with hairline borders |
| `--color-border-hairline`| `#e2e8f0` | 1px clean architectural grid separators |
| `--color-text-primary`   | `#090e1f` | Ultra-deep navy text |
| `--color-text-secondary` | `#475569` | Mid-slate body text |
| `--color-brand-primary`  | `#22439c` | Deep Cobalt brand primary |
| `--color-brand-accent`   | `#2563eb` | High-contrast accessible azure link & active state |

---

## 3. Typographic Architecture

Like Formance, CreditBird establishes authority through the contrast between **architectural geometric sans-serifs** and **monospaced system telemetry**.

### 3.1 Font Stacks
1. **Display & Headings:** `Geist Sans`, `Cabinet Grotesk`, or `Plus Jakarta Sans`
   - *Characteristics:* High geometric legibility, tight tracking (`letter-spacing: -0.035em`), tabular number support.
2. **Technical Telemetry & Code:** `JetBrains Mono` or `Geist Mono`
   - *Characteristics:* Fixed-pitch tabular alignment, zero ligature confusion in ledger math, distinctive slashed zeros.
3. **Body & Prose:** `Geist Sans` or `Inter Variable`
   - *Characteristics:* Relaxed leading (`1.6`), max 68 characters per line.

### 3.2 Scale & Hierarchy
```css
--text-hero:        clamp(2.75rem, 5.5vw, 4.75rem); /* line-height: 1.05; tracking: -0.04em */
--text-h1:          clamp(2.25rem, 4vw, 3.5rem);    /* line-height: 1.1;  tracking: -0.03em */
--text-h2:          clamp(1.75rem, 3vw, 2.5rem);    /* line-height: 1.2;  tracking: -0.025em */
--text-h3:          1.5rem;                         /* line-height: 1.3;  tracking: -0.02em */
--text-body-lg:     1.25rem;                        /* line-height: 1.5;  tracking: -0.01em */
--text-body-md:     1rem;                           /* line-height: 1.6;  tracking: normal */
--text-body-sm:     0.875rem;                       /* line-height: 1.5;  tracking: normal */
--text-mono-badge:  0.75rem;                        /* uppercase; tracking: 0.15em; font-mono */
--text-mono-code:   0.8125rem;                      /* line-height: 1.65; font-mono */
```

---

## 4. Formance Architectural Grid System (`--grid-unit`)

Formance structures the entire layout using a **Strict Grid** bound to a fundamental atomic unit:
- **Base Grid Unit:** `--grid-unit: round(clamp(22px, 2cqi, 32px), 1px);` (Desktop base `32px`, responsive `22px` on mobile)
- **Container Max Width:** `max-w-50gu` (`50 * 32px = 1600px` on desktop)
- **Spacing Scale:**
  * `0.5gu` = 16px
  * `1gu` = 32px
  * `2gu` = 64px
  * `3gu` = 96px
  * `4gu` = 128px
  * `50gu` = 1600px (Max Container Width)

### 4.1 The `.grid-ring` Pattern
Every card, logo box, and modular container shares hairlines rather than doubled margins.
```css
.grid-ring {
  box-shadow: 0 0 0 1px var(--color-border-hairline);
  background-color: var(--color-canvas-surface);
  transition: box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1),
              background-color 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.grid-ring:hover {
  box-shadow: 0 0 0 1px var(--color-border-active);
  background-color: var(--color-canvas-raised);
}
```

---

## 5. Core Design Patterns (Formance Parity)

### Pattern 1: Monospace Eyebrow Badge (`_TAG/`)
All section signposts and subheads follow Formance's signature syntax:
- **Format:** `_{SECTION_NAME}/` (Uppercase monospace, leading underscore, trailing slash)
- **Examples:**
  * `_TRUSTED BY TEAMS MOVING MONEY/`
  * `_WHY CREDITBIRD/`
  * `_BUILD VS BUY/`
  * `_CREDIT_LEDGER/`
  * `_ORCHESTRATION_FLOWS/`
  * `_CONNECTIVITY/`
  * `_RECONCILIATION/`
- **Styling:**
  ```css
  .snap-badge {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--color-brand-accent);
    background: rgba(50, 135, 255, 0.08);
    border: 1px solid rgba(50, 135, 255, 0.2);
    padding: 4px 10px;
    display: inline-flex;
    align-items: center;
  }
  ```

### Pattern 2: Hero Header & Announcement Bar
- **Top Announcement Bar:**
  * Monospace pill: `NEW` (`bg-brand-accent text-white px-2 py-0.5 text-xs font-mono`)
  * Headline: "CreditBird Ledger Engine v2.4 is live. See programmable credit automation →"
  * Action button / dismiss cross.
- **Main Nav Bar:**
  * Left: CreditBird circular logo icon + bold wordmark `CreditBird`.
  * Center: Dropdown links (`Platform`, `Solutions`, `Developers`, `Docs`, `Pricing`).
  * Right: GitHub star counter (`★ 1.8k`), Secondary CTA (`Start building` outline), Primary CTA (`Book a demo` solid).

### Pattern 3: The Technical Hero Section
- Centered or asymmetric bold typography:  
  **"The programmable credit ledger your money deserves"**
- Supporting paragraph in muted slate:  
  *"The open-source programmable ledger and credit movement engine. Model any loan, line of credit, or payout flow in CreditScript, track every cent in real time, and close your books continuously."*
- Dual Call to Action Buttons:
  1. `Start building` — Monospace uppercase, 1px border, hover elevation.
  2. `Book a demo` — High contrast ice-lilac fill `#e0e7ff` with deep navy text `#070b19`.
- **Centerpiece Artifact:** Live code sandbox / interactive credit routing diagram.

### Pattern 4: Strict Hairline Logo Grid
- 5-column grid bordered by 1px hairlines (`grid-cols-2 md:grid-cols-5`).
- Each client/partner logo sits inside a `.grid-ring` cell of height `3gu` (72px).
- Low-contrast monochrome SVG logos that illuminate on hover.

### Pattern 5: Build vs Buy Comparative Ledger Matrix
Two-column symmetric comparative breakdown:
1. **Left Card (`_BUILD IN-HOUSE/`):**
   - Muted, dimmed slate background.
   - Numbered items `01` to `05` in tabular monospace:
     - `01` *Balances drift when ledger writes aren't atomic.*
     - `02` *Manual reconciliation scripts that finance babysits daily.*
     - `03` *Every new bank or credit card rail is a bespoke integration.*
     - `04` *Engineering, risk, and accounting read disparate numbers.*
     - `05` *Audits become terrifying fire drills; mutable database logs.*
2. **Right Card (`_WITH CREDITBIRD/`):**
   - High-contrast cobalt surface with electric azure hairline border.
   - Highlighted white text and azure indicators:
     - `01` *Double-entry, atomic by construction: debits strictly equal credits.*
     - `02` *Continuous 24/7 reconciliation with sub-second drift detection.*
     - `03` *One normalized credit schema across all banking & card providers.*
     - `04` *Single immutable source of truth trusted across departments.*
     - `05` *Append-only cryptographic hash log; SOC2 Type II, ISO 27001 aligned.*

### Pattern 6: Shiki-Style Code & DSL Showcase (`CreditScript`)
Formance uses `Numscript`. CreditBird provides `CreditScript` for modeling credit facilities, disbursements, interest accruals, and fee splits:
```numscript
// CreditBird CreditScript: Automated Merchant Loan Drawdown
send [USD 50000] (
  source = @credit:facility:acme_growth
  destination = {
    97.5% to @merchants:acme_retail:disbursement
    2.0%  to @creditbird:origination_fee
    0.5%  to @risk:reserve_buffer
  }
)
```
- Code window features a clean monospace status bar: `creditscript`, status pill dots, and syntax highlighting.

### Pattern 7: Topological Schematic Diagrams (Vector SVG)
Formance connects providers (Stripe, Adyen, Wise) into a normalized core.
CreditBird visualizes:
- Originating Rails (`STRIPE`, `PLAID`, `ACH / WIRE`, `SWIFT`) →
- Precision SVG circuit lines with vector arrows →
- **`CreditBird Normalized Ledger Core`** →
- Disbursal & Capital Providers.

### Pattern 8: The Ultra-Tall Architectural Footer Matrix
As shown in the Formance production reference, the footer is an authoritative architectural index, not an afterthought:
- **Vertical Extent:** Ultra-tall height (> 750px) with generous `--gu-4` padding.
- **4 Master Columns & 14 Categorized Domains:**
  1. `PLATFORM`: Modules, Architecture, Build, Trust
  2. `SOLUTIONS`: Corporate & Treasury, Vertical SaaS, AI, Teams
  3. `RESOURCES`: Developers, Company, Learn
  4. `FINTECH & DIGITAL ASSETS & MORE`: Fintech, Digital Assets, More, Contact Us
- **Sub-Category Hierarchy:** Uppercase monospace domain titles (`font-mono text-xs tracking-widest text-slate-500`) followed by clean vertical links.
- **Embossed Watermark Emblem:** A giant brand mark (CreditBird disc & soaring bird) watermark rendered in the bottom-right corner at `5%` opacity, anchoring the page with subtle institutional permanence.

---

## 6. Motion & Interaction Specifications

1. **Spring Transitions:**
   ```css
   --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
   --duration-snappy: 180ms;
   --duration-smooth: 320ms;
   ```
2. **Tactile Push Feedback:**
   Buttons depress `-1px` on active click with an immediate, non-squishy feel:
   ```css
   .btn:active {
     transform: translateY(1px);
   }
   ```
3. **Scanline / Hairline Glow:**
   Interactive cards generate an electric azure gradient along the 1px border when hovered.
4. **Data Stream Animations:**
   SVG schematic dashes move sequentially along connection paths to simulate real-time credit transactions (`stroke-dashoffset` animation).

---

## 7. Explicit Anti-Patterns (Enforced Bans)

To protect CreditBird from generic "AI-slop" design tropes:
1. **NO Generic AI-Purple/Pink Gradients:** No violet radial glows or candy gradients. Strictly sovereign cobalt (`#22439c`) and luminous electric azure (`#3287ff`).
2. **NO Pure Black (`#000000`) or Dead Charcoal (`#070b19`):** Use Cyanotype Cobalt Primary (`#16295c`) for dark architectural blueprint sections to preserve authentic blueprint cyanotype heritage and avoid generic dark-void fatigue.
3. **NO Floating 3D Orbs / Glassmorphism Blobs:** Strictly architectural grid lines and geometric surfaces.
4. **NO Generic Inter Font Default:** Use `Geist Sans` + `JetBrains Mono` for distinct technical identity.
5. **NO Unpadded Grid Cells:** Strict adherence to `--grid-unit` multiples.
6. **NO Emojis in Technical UI:** Use crisp SVG stroke icons (1.5px stroke weight).
7. **NO AI Cliché Buzzwords:** Ban words like "Elevate", "Unleash", "Game-changing", "Seamless magic". Use rigorous fintech terms: "Continuous reconciliation", "Double-entry atomicity", "Cryptographic immutability", "Sub-second settlement".

---

## 8. File Structure & Deliverables

- [`DESIGN.md`](file:///home/arch/Project/creditbird-website/DESIGN.md) — This master design specification.
- [`src/styles/tokens.css`](file:///home/arch/Project/creditbird-website/src/styles/tokens.css) — 3-layer CSS custom properties system.
- [`tailwind.config.js`](file:///home/arch/Project/creditbird-website/tailwind.config.js) — Tailwind CSS token integration.
- [`preview/index.html`](file:///home/arch/Project/creditbird-website/preview/index.html) — Production-grade interactive prototype showcasing the full Formance-inspired experience with the CreditBird logo.
