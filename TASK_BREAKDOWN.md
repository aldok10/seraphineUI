# 🗺 Web OS Frontend Roadmap

## ⚛️ Atoms
Foundational, irreducible UI elements.

### Typography
**Requirement:** Consistent text styling matching the "Friendly Data-Dense" aesthetic.
**Plan:** Implement a Typography component with variants for headers, paragraphs, and specialized metrics using `Matter` and `Matter Mono`.
- [x] Task: Build `<Typography>` with `Matter` for standard text and `Matter Mono` for metric props.

### Button
**Requirement:** Primary interactive element with action and warning states.
**Plan:** Build a Button component with strict 6px radius, using `--accent` for primary and `--warning` for special actions. Use `clsx` and `twMerge`.
- [x] Task: Build `<Button>` with solid, outline, and ghost variants.

### Badge
**Requirement:** Small status indicators.
**Plan:** Implement tiny inline blocks with 6px radius.
- [x] Task: Build `<Badge>` component for status labels.

### Avatar
**Requirement:** User or entity representation.
**Plan:** Create an image/fallback container.
- [ ] Task: Build `<Avatar>` component handling image loading and text fallbacks.

### Checkbox
**Requirement:** Boolean input.
**Plan:** Style native checkbox using `--accent` color and 6px focus rings.
- [ ] Task: Build `<Checkbox>` with custom SVG checkmarks.

### Radio Group
**Requirement:** Single-choice input set.
**Plan:** Create accessible radio buttons.
- [ ] Task: Build `<RadioGroup>` and `<RadioItem>` components.

### Switch
**Requirement:** Toggle input.
**Plan:** Create a pill-shaped toggle using `--accent` when active.
- [x] Task: Build `<Switch>` component for boolean toggles.

### Separator
**Requirement:** Visual division.
**Plan:** Simple 1px line using the `--border` color.
- [ ] Task: Build `<Separator>` component (horizontal and vertical).

### Spinner
**Requirement:** Loading indicator.
**Plan:** Animated SVG using `--accent` color.
- [x] Task: Build `<Spinner>` component.

### Skeleton
**Requirement:** Loading placeholder.
**Plan:** Pulsing gray blocks with 6px radius.
- [x] Task: Build `<Skeleton>` component.

### Label
**Requirement:** Input labels.
**Plan:** Text label styled with `Matter` font, linked to input IDs.
- [ ] Task: Build `<Label>` component.

### Kbd
**Requirement:** Keyboard shortcut indicators.
**Plan:** Small styled blocks for key strokes.
- [ ] Task: Build `<Kbd>` component.

### Empty
**Requirement:** Empty state placeholder.
**Plan:** Centered container for "no data" messages.
- [x] Task: Build `<Empty>` state component.

### Direction
**Requirement:** Layout direction provider.
**Plan:** Wrapper for LTR/RTL support (often headless).
- [ ] Task: Build `<Direction>` context wrapper.

### Native Select
**Requirement:** Standard HTML select.
**Plan:** Styled native `<select>` element.
- [ ] Task: Build `<NativeSelect>` with 1px border and 6px radius.

### Input
**Requirement:** Standard text input.
**Plan:** Text field with 1px border, 6px radius, and `--accent` focus ring.
- [x] Task: Build `<Input>` component.

### Textarea
**Requirement:** Multiline text input.
**Plan:** Textarea with 1px border, 6px radius.
- [x] Task: Build `<Textarea>` component.

### Item
**Requirement:** Generic list item.
**Plan:** Base item component for menus and lists.
- [ ] Task: Build `<Item>` structural component.

### Field
**Requirement:** Form field wrapper.
**Plan:** Wrapper to bind Label, Input, and Error messages.
- [ ] Task: Build `<Field>` context wrapper.


## 🧬 Molecules
Combinations of atoms that form relatively simple UI components.

### Button Group
**Requirement:** Contiguous buttons.
**Plan:** Wrap buttons, removing inner borders and adjusting radii so only outer edges are 6px.
- [x] Task: Build `<ButtonGroup>` container.

### Input Group
**Requirement:** Input with add-ons (icons/buttons).
**Plan:** Wrap input with prefix/suffix elements, maintaining 6px outer radius.
- [ ] Task: Build `<InputGroup>` component.

### Alert
**Requirement:** Static inline message.
**Plan:** 1px border box, 6px radius, no shadow. Colored based on intent (e.g., `--warning` for alerts).
- [x] Task: Build `<Alert>` component.

### Breadcrumb
**Requirement:** Navigational path.
**Plan:** List of links separated by chevrons.
- [ ] Task: Build `<Breadcrumb>` component.

### Card
**Requirement:** Standard content container.
**Plan:** 1px `--border`, 6px radius. STRICTLY NO SHADOWS.
- [ ] Task: Build `<Card>` component with Header, Content, and Footer sub-components.

### Hover Card
**Requirement:** Detail popover on hover.
**Plan:** Tooltip-like card that appears on hover, utilizing `z-100` (modal level).
- [ ] Task: Build `<HoverCard>` component.

### Tooltip
**Requirement:** Tiny informational popover.
**Plan:** Small black box with white `Matter` text, 6px radius.
- [x] Task: Build `<Tooltip>` component.

### Progress
**Requirement:** Progress bar.
**Plan:** Track and indicator using `--accent`.
- [x] Task: Build `<Progress>` component.

### Slider
**Requirement:** Range input.
**Plan:** Draggable handle on a track.
- [ ] Task: Build `<Slider>` component.

### Tabs
**Requirement:** Tabbed content navigation.
**Plan:** Tab list and tab panels. Active state indicated by `--accent` underline or background.
- [x] Task: Build `<Tabs>` component with Triggers and Content.

### Toggle
**Requirement:** Two-state button.
**Plan:** Button that retains active state visually.
- [ ] Task: Build `<Toggle>` component.

### Toggle Group
**Requirement:** Mutually exclusive or multi-select toggles.
**Plan:** Group of toggle buttons.
- [ ] Task: Build `<ToggleGroup>` component.

### Aspect Ratio
**Requirement:** Box with fixed proportions.
**Plan:** Utility wrapper forcing aspect ratio.
- [ ] Task: Build `<AspectRatio>` component.

### Collapsible
**Requirement:** Expandable content area.
**Plan:** Trigger and content area with smooth height transition.
- [ ] Task: Build `<Collapsible>` component.

### Accordion
**Requirement:** Stacked collapsibles.
**Plan:** Group of collapsibles where only one (or multiple) can be open.
- [ ] Task: Build `<Accordion>` component.

### Input OTP
**Requirement:** One-time password input.
**Plan:** Segmented input fields for codes.
- [ ] Task: Build `<InputOTP>` component.

### Pagination
**Requirement:** Page navigation.
**Plan:** Row of buttons indicating pages.
- [ ] Task: Build `<Pagination>` component.

### Scroll Area
**Requirement:** Custom scrollbars.
**Plan:** Cross-browser styled scrollbars using Svelte actions.
- [ ] Task: Build `<ScrollArea>` component.

### Resizable
**Requirement:** Draggable resizing handles.
**Plan:** Panels with dragging logic to adjust width/height.
- [ ] Task: Build `<Resizable>` panel group component.

### Dropdown Menu
**Requirement:** Click-triggered menu.
**Plan:** Menu list appearing below trigger, strictly utilizing z-100 scale.
- [ ] Task: Build `<DropdownMenu>` component.

### Context Menu
**Requirement:** Right-click menu.
**Plan:** Menu triggered by contextmenu event.
- [ ] Task: Build `<ContextMenu>` component.

### Menubar
**Requirement:** Desktop-style top menu.
**Plan:** Horizontal row of dropdown triggers.
- [ ] Task: Build `<Menubar>` component.

### Select
**Requirement:** Custom select dropdown.
**Plan:** Custom UI for select replacing native select, using dropdown mechanics.
- [ ] Task: Build custom `<Select>` component.

### Toast / Sonner
**Requirement:** Transient notifications.
**Plan:** Stacking alerts usually at bottom right. z-100.
- [ ] Task: Build `<Toast>` / `<Sonner>` notification system.


## 🦠 Organisms
Complex, composite components forming major sections of the UI.

### Alert Dialog
**Requirement:** Interruptive modal asking for confirmation.
**Plan:** Centered modal with `0 8px 24px rgba(0,0,0,0.12)` shadow. `z-100`. Overlay behind it.
- [ ] Task: Build `<AlertDialog>` component.

### Dialog
**Requirement:** Standard modal window.
**Plan:** Window for arbitrary content. Must use exact modal shadow and `z-100`.
- [ ] Task: Build `<Dialog>` component.

### Sheet / Drawer
**Requirement:** Slide-out side panel.
**Plan:** Panel sliding from screen edge. `z-100`.
- [ ] Task: Build `<Sheet>` / `<Drawer>` component.

### Sidebar
**Requirement:** App layout navigation sidebar.
**Plan:** Collapsible/resizable side navigation column.
- [ ] Task: Build `<Sidebar>` layout component.

### Calendar
**Requirement:** Date grid.
**Plan:** Monthly grid of days for selection.
- [ ] Task: Build `<Calendar>` component.

### Date Picker
**Requirement:** Input that opens a calendar.
**Plan:** Combine Input/Popover with Calendar.
- [ ] Task: Build `<DatePicker>` component.

### Command / Combobox
**Requirement:** Searchable select/command palette.
**Plan:** Input with filtering dropdown (often a modal command palette).
- [ ] Task: Build `<Command>` / `<Combobox>` component.

### Navigation Menu
**Requirement:** Complex top-level navigation.
**Plan:** Menus with wide dropdowns (mega-menus).
- [ ] Task: Build `<NavigationMenu>` component.

### Table
**Requirement:** Standard HTML table.
**Plan:** Styled `<table>` elements. Use `Matter Mono` for numeric columns.
- [ ] Task: Build base `<Table>` components (Header, Row, Cell).

### Data Table
**Requirement:** Complex table with sorting/filtering.
**Plan:** Table integrated with state management for sorting, filtering, and pagination.
- [ ] Task: Build `<DataTable>` organism.

### Carousel
**Requirement:** Sliding content gallery.
**Plan:** Horizontal scrollable area with snap points and next/prev buttons.
- [ ] Task: Build `<Carousel>` component.

### Chart
**Requirement:** Data visualization.
**Plan:** Wrapper for charting library (e.g., using SVG/Canvas) adhering to `--accent` and `--warning` colors. Tabular figures for axes.
- [ ] Task: Build `<Chart>` wrapper component.
