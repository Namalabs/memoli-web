---
applyTo: "**/*.html,**/*.css,**/*.scss,**/*.less"
---

# Interactive Website Designer Skill

Use this skill for **interactive website design**: responsive layout, grids and breakpoints, **forms** (validation, layout), reusable components, and design-system patterns (e.g. Ant Design). Focus on production-ready, accessible web UIs.

## Design Principles

- **Responsive first**: Design for mobile breakpoint, then scale up (xs → sm → md → lg → xl → xxl).
- **Consistency**: Use a design system or component library for spacing, type, and patterns.
- **Accessibility**: Semantic HTML, labels for controls, keyboard and screen reader support.
- **Performance**: Lazy load below-the-fold content; optimize images and critical path.
- **Interactivity**: Clear feedback (loading, success, error); avoid dead clicks.

## 1. Layout and grid

- **Breakpoints** (common): xs <576px, sm ≥576px, md ≥768px, lg ≥992px, xl ≥1200px, xxl ≥1600px.
- **Grid**: Use 12- or 24-column grid; `span` and `offset` for alignment.
- **Gutter**: Consistent spacing between columns (e.g. 16px, 24px).
- **Containers**: Max-width + margin auto for readable line length on large screens.
- **Flexbox/Grid**: Use CSS Grid for page structure, Flexbox for components and alignment.

## 2. Forms

- **Labels**: Every field has a visible label.
- **Validation**: Inline and on submit; clear error messages.
- **State**: Loading (submit), success, error; disable submit while loading.
- **Form instance**: For complex forms, use a form instance and pass down or use context to avoid prop drilling.
- **Layout**: Horizontal or vertical; consistent alignment and spacing.

## 3. Components and patterns

- **Lists and grids**: Use list/grid components with responsive column counts.
- **Navigation**: Clear primary nav (tabs, menu); breadcrumbs for depth.
- **Feedback**: Toasts/snackbars for success; inline or modal for errors; skeletons for loading.
- **Modals/Drawers**: Focus trap and escape key; aria labels.
- **Tables**: Sortable, filterable; responsive (scroll or card layout on small screens).

## 4. Responsive and performance

- **Responsive columns**: Define columns per breakpoint.
- **Images**: Responsive (srcset/sizes), lazy load; avoid layout shift.
- **Critical CSS**: Above-the-fold styles inline or loaded first; defer non-critical.

## 5. Accessibility

- **Semantic HTML**: Use `<button>`, `<label>`, `<input>`, `<nav>`, `<main>`, etc.
- **Labels**: Associate labels with controls (`for`/`id` or aria-label).
- **Focus**: Visible focus ring; logical tab order; no focus trap except in modals.
- **Contrast**: Meet WCAG AA for text and interactive elements.
- **Motion**: Respect prefers-reduced-motion.

## Reference — Ant Design Form

- **Form instance**: `const [form] = Form.useForm();` then `<Form form={form}>`. Children get instance via `Form.useFormInstance()`.
- **Layout**: `labelCol` / `wrapperCol` accept span/offset or responsive objects. `labelAlign`: 'left' | 'right'.
- **Validation**: Rules on Form.Item; validate on change or submit.

## Reference — Ant Design List grid

- Use `grid` prop on List for responsive columns: `gutter`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`.

## Quick reference

| Need | Use |
|------|-----|
| Breakpoints | xs/sm/md/lg/xl/xxl (576, 768, 992, 1200, 1600) |
| Form layout | labelCol, wrapperCol, labelAlign |
| Form instance | useForm(), useFormInstance() in children |
| Grid list | grid={{ gutter, xs, sm, md, ... }} |
| Feedback | Toasts, inline errors, loading states |
