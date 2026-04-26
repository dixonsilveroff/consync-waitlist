# 🏗️ ConSync — DESIGN.md
---
# 1. 🎯 Design Philosophy

### Core Principles
- **Clarity over decoration** — every element must serve a purpose.
- **Structure first** — layouts should feel engineered, not artistic.
- **Trust through consistency** — predictable UI builds confidence.
- **Data is the product** — emphasize readability and hierarchy.
- **Field + Office parity** — usable both on-site and in offices.

---

# 2. 🧠 Brand Interpretation in UI

| Trait | UI Translation |
|------|----------------|
| Transparency | Clear layouts, visible system states, no hidden actions |
| Intelligence | Data visualization, smart grouping, hierarchy |
| Reliability | Stable layouts, minimal animation noise |
| Modern | Clean typography, subtle depth, soft shadows |
| Construction-rooted | Grid systems, structured spacing, blueprint cues |

---

# 3. 🎨 Color System

## Primary Colors
- **Blueprint Blue** → `#1E4E8C`
- **Deep Steel Blue (Gradient Base)** → `#163A6B`
- **Highlight Blue** → `#2F6FD6`

## Secondary Colors
- **Concrete White** → `#F5F6F7`
- **Steel Grey** → `#2C2F33`
- **Graphite Black** → `#1A1C1E`

## Accent Colors
- **Growth Green** → `#4CAF50`
- **Signal Yellow** → `#F9C74F`
- **Alert Red** → `#E63946`

## Usage Rules
- Blue = Primary actions & identity
- Green = Success / progress
- Yellow = Warnings
- Red = Critical actions only

---

# 4. ✨ Logo Design System

## Current Direction (Refined)
- Infinity loop = **continuous workflow + lifecycle**
- Dual-tone flow = **synchronization between stakeholders**
- Blue body = **structure + trust**
- Green/yellow edges = **progress + energy**

## Refinement Rules
- Use **subtle gradients**, not flat fills
- Add **inner shadows + highlights** for depth
- Avoid excessive gloss (no "plastic" look)
- Maintain scalability (must work flat at small sizes)

## Logo Variants
- Full (symbol + wordmark)
- Symbol-only (favicon)
- Monochrome (black/white)
- Dark mode version

---

# 5. 🔤 Typography System

## Font Stack
- **Headings:** Poppins (SemiBold / Bold)
- **Body:** Inter (Regular / Medium)
- **Optional:** JetBrains Mono (for technical data)

## Scale
- H1: 36px
- H2: 28px
- H3: 22px
- Body: 16px
- Caption: 14px

## Rules
- Avoid excessive weights
- Maintain strong contrast
- Prioritize readability over style

---

# 6. 🧱 Layout System

## Grid
- 8px base grid system
- Max width: 1200–1440px
- Consistent padding: 16px / 24px / 32px

## Structure
- Sidebar navigation (primary)
- Top bar (secondary actions)
- Content = card-based layout

## Spacing Philosophy
- Tight for data
- Loose for decision areas

## Elevation

- Precision Shadows: `0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)`. Crisp and structured.
- Hierarchy: Prefer subtle borders and tonal shifts over heavy shadows to maintain a "flat, digital ledger" feel.
- Borders: Thin and defined (`#e2e8f0`). Everything feels architectural and "built".


---

# 7. 🧩 Component System

## Buttons
### Primary
- Background: Blueprint Blue
- Text: White
- Radius: 8px
- Hover: Slight lighten + elevation

### Secondary
- Outline style
- Hover: Filled

### States
- Disabled: Greyed out
- Loading: Spinner inside button

---

## Cards
- Background: White
- Border: `#E5E7EB`
- Radius: 12px
- Shadow: subtle (0 2px 8px rgba(0,0,0,0.05))

---

## Tables
- Clean, minimal borders
- Alternating row shading
- Hover highlight

---

## Forms
- Input height: 44px
- Border: light grey
- Focus: Blueprint Blue outline

---

# 8. 📊 Data Visualization

## Principles
- Data must be scannable in <3 seconds
- Avoid clutter
- Always label clearly

## Chart Colors
- Primary: Blueprint Blue
- Positive: Growth Green
- Warning: Signal Yellow
- Negative: Red

## Chart Types
- Line → Progress over time
- Bar → Comparisons
- Donut → Distribution

---

# 9. 🧭 Navigation System

## Sidebar (Primary Navigation)
- Projects
- Tasks
- Materials
- Reports
- Documents
- Settings

## Top Bar
- Search
- Notifications
- Profile

## Rules
- Always visible (desktop)
- Collapsible (tablet/mobile)

---

# 10. 📱 Responsive Design

## Mobile Principles
- Prioritize **actions over data**
- Use **stacked cards**
- Large touch targets (min 44px)
- Bottom navigation preferred

---

# 11. 🎞️ Motion & Interaction

## Motion Rules
- Subtle and functional only
- 150–250ms transitions
- Avoid distracting animations

## Examples
- Hover elevation on cards
- Slide-in panels for notifications
- Smooth page transitions

---

# 12. 🖼️ Imagery & Visual Style

## Photography
- Real construction environments
- Engineers using digital tools
- Authentic, not staged

## Illustrations
- Minimal line-based
- Blueprint-inspired
- Low color saturation

---

# 13. 🧪 Design Tokens (Dev Ready)

```css
:root {
  --color-primary: #1E4E8C;
  --color-primary-dark: #163A6B;
  --color-accent: #4CAF50;
  --color-bg: #F5F6F7;
  --color-text: #2C2F33;

  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;

  --radius: 8px;
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.05);
}