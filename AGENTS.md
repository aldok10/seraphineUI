# 🤖 AI Agent Constitution & Tech Blueprint

## 🌐 1. Project Identity
This project is a highly complex, interactive **"Friendly Data-Dense" Web OS frontend**.
The aesthetic is pragmatic, energetic, and highly readable, prioritizing data density without sacrificing friendliness.

### Master Component Inventory (58 Components)
You must build, maintain, and interact with the following components:
Accordion, Alert, Alert Dialog, Aspect Ratio, Avatar, Badge, Breadcrumb, Button, Button Group, Calendar, Card, Carousel, Chart, Checkbox, Collapsible, Combobox, Command, Context Menu, Data Table, Date Picker, Dialog, Direction, Drawer, Dropdown Menu, Empty, Field, Hover Card, Input, Input Group, Input OTP, Item, Kbd, Label, Menubar, Native Select, Navigation Menu, Pagination, Popover, Progress, Radio Group, Resizable, Scroll Area, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner, Spinner, Switch, Table, Tabs, Textarea, Toast, Toggle, Toggle Group, Tooltip, Typography.

## 🛠 2. Tech Stack & Design Rules

### Core Stack
- **Framework:** Svelte (via Vite)
- **Styling:** Tailwind CSS

### Svelte Rules
- Strictly maintain proper Svelte reactivity.
- Always use `tailwind-merge` and `clsx` for dynamic class assignment and resolution.

### Typography
- **UI Text:** `Matter`
- **Tabular Data & Metrics:** `Matter Mono`

### Visual Constraints
- **Border Radius:** strictly `6px` globally.
- **Borders:** `1px` using the `--border` CSS variable.
- **Action Color:** `--accent` (cobalt blue) for primary interactive elements.
- **Personality Color:** `--warning` (energetic yellow) for highlights and personality.
- **Shadows:** STRICTLY AVOID card shadows.
- **Modals Only:** Modals are the only elements permitted to have shadows. Use exactly: `box-shadow: 0 8px 24px rgba(0,0,0,0.12)`.

### Z-Index Architecture
Follow this precise Web OS z-index scale:
- Desktop: `z-0`
- Active Window: `z-40`
- Taskbar: `z-50`
- Modals: `z-100`

## 🧠 3. AI Behavioral Constraints
- **Always** think step-by-step.
- **Always** use tabular figures (`Matter Mono`) for metrics and numeric data.
- **Never** use deprecated Svelte syntax. Adhere strictly to the latest stable paradigms.
- **Always** verify your visual output against the strict design token constraints.
