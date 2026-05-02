# 🖥️ [Project Name - Web OS Framework]

## 👋 Introduction

Welcome to **[Project Name]**, a highly complex, interactive Web OS frontend framework. This project isn't just another component library; it is a foundational architecture designed to bring a true desktop-like operating system experience directly into the browser. By combining the reactive power of Svelte with the blazing speed of Vite, we are building a platform capable of handling complex windowing, global state management, and dense data displays with uncompromising performance.

At the heart of this project lies our **"Friendly Data-Dense"** design philosophy. We believe that professional, data-heavy applications don't have to feel intimidating or sterile. By carefully balancing strict typography, precise spacing, and purposeful color application, we ensure that the interface remains welcoming and highly legible, even when displaying thousands of data points or multiple overlapping interactive windows.

---

## ✨ Key Features & Aesthetic

Our framework is engineered to support professional-grade applications with a comprehensive, robust feature set:

*   **Friendly Data-Dense Aesthetic:**
    *   **Purposeful Color Palette:** Cobalt blue for primary actions, warning yellow for alerts, keeping the visual hierarchy crystal clear.
    *   **Precise Geometry:** A strict 6px border-radius standard across components for a soft yet professional feel.
    *   **Tabular Data Styling:** Optimized typography and spacing specifically tailored for dense data tables and complex forms.
*   **True OS-Level Mechanics:**
    *   **Window Management:** Fully draggable, resizable windows with complex constraints and boundaries.
    *   **Strict Z-Index Governance:** A deterministic stacking context system to flawlessly manage overlapping windows, modals, and tooltips.
    *   **Global Reactive State:** Robust context and store management to handle application-wide data, focus, and active states.
*   **Atomic Component Library:** Includes a massive, rigorously tested 50+ item component library, strictly built utilizing Atomic Design principles (Atoms, Molecules, Organisms, Templates, Pages).

---

## 🛠️ Tech Stack

We leverage a modern, lightning-fast frontend stack to deliver an exceptional developer and user experience:

*   **[Svelte](https://svelte.dev/):** Our core UI framework, chosen for its true reactivity and zero-virtual-DOM performance.
*   **[Vite](https://vitejs.dev/):** Next-generation frontend tooling for an instantaneous development server and highly optimized production builds.
*   **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapid UI development and strict enforcement of our design tokens.
*   **TypeScript:** Ensuring type safety, self-documenting code, and robust developer tooling.
*   **Utility Libraries:** Essential tools including `tailwind-merge` and `clsx` for intelligent, conflict-free dynamic class composition.

---

## 🚀 Getting Started

Ready to boot up the OS? Follow these steps to get your local development environment running:

```bash
# 1. Clone the repository
git clone https://github.com/your-org/your-repo-name.git

# 2. Navigate into the project directory
cd your-repo-name

# 3. Install the dependencies
npm install

# 4. Start the Vite development server
npm run dev
```

*The application will now be running on `http://localhost:5173` (or the port specified in your terminal).*

---

## 🤖 AI-Driven Architecture & Documentation

This repository is uniquely engineered for **Human-AI Collaboration**. To maintain strict architectural integrity across our massive component library, we rely on a pair of foundational documents.

**⚠️ CRITICAL: Whether you are a human developer or an AI coding agent, you MUST read the following files before proposing or making any code changes:**

*   **`AGENTS.md` (The Constitution):** This is the absolute source of truth for the project. It dictates our tech rules, enforces the "Friendly Data-Dense" design tokens (colors, 6px radii, typography), and outlines the strict component contribution guidelines. **Always consult `AGENTS.md` first.**
*   **`TASK_BREAKDOWN.md` (The Roadmap):** Our Agile tracking document. This file maps out the progress of our 50+ Atomic components, detailing what has been built, what is in progress, and the exact specifications for upcoming tasks.

---

## 📂 Project Structure

Our repository is meticulously organized following Atomic Design principles and clear separation of concerns:

```text
├── src/
│   ├── lib/
│   │   ├── components/       # The 50+ Component Library
│   │   │   ├── atoms/        # Buttons, Inputs, Icons (Base elements)
│   │   │   ├── molecules/    # Form groups, Search bars, Window headers
│   │   │   ├── organisms/    # Full Windows, Navbars, Data Tables
│   │   │   ├── templates/    # Page layouts
│   │   │   └── pages/        # Fully assembled OS screens
│   │   ├── stores/           # Global Svelte stores (OS State, Window Z-Index)
│   │   ├── actions/          # Svelte actions (e.g., draggable, click-outside)
│   │   └── utils/            # Helper functions (tailwind-merge, formatting)
│   ├── routes/               # SvelteKit/Vite routing configuration
│   ├── app.html              # Main HTML entry point
│   └── app.css               # Global Tailwind directives & CSS variables
├── public/                   # Static assets (fonts, icons)
├── AGENTS.md                 # AI Constitution & Tech Rules [MUST READ]
├── TASK_BREAKDOWN.md         # Agile Roadmap & Component Tracker
├── tailwind.config.js        # Design tokens & 6px radii configuration
├── svelte.config.js          # Svelte preprocessor setup
├── vite.config.ts            # Build tool configuration
└── package.json              # Project dependencies & scripts
```

---

## 🤝 Contribution & Next Steps

We are building something incredibly ambitious, and we'd love your help to make it a reality. Whether you're squashing a bug, refining our tabular data styling, or building out the next molecule in our component library, your contributions are warmly welcomed.

**Where to start?**
Head over to the `TASK_BREAKDOWN.md` to see our current sprint and pick up an unassigned component. Ensure you've read `AGENTS.md`, and let's build the future of the web desktop together!

Happy Coding! 🎉
