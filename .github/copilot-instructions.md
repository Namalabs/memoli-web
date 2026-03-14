# GitHub Copilot Instructions - Memoli Web (iOS App Landing Site)

## �� Project Overview

**Project**: Marketing Website for Memoli iOS App  
**Base Path**: `/Users/dev/Developer/memoli-web/`  
**Language**: JavaScript/TypeScript + React + Next.js 16  
**Build Target**: Static HTML/CSS/JavaScript (CSR-only, no SSR)  
**Deployment**: Nginx static file serving from `./out/` folder  
**Design Reference**: `/External/Figma/New Design/` (ALWAYS refer here!)  
**Key Skills**: 
- Next.js, React, TypeScript, Hooks
- Responsive Web Design (Mobile-First)
- Interactive Website Designer patterns
- Static site generation & deployment

---

## 🎨 DESIGN REFERENCE - NEW DESIGN FOLDER (CRITICAL!)

**All design decisions must reference**: `/External/Figma/New Design/`

### Design Files Available
The "New Design" folder contains complete mockups for:

| Device | Home Page | About Page |
|--------|-----------|-----------|
| **Mobile** (393×852px) | mobile-home.png | mobile- about us.png |
| **Tablet** (1366×1024px) | tablet - home.png | tablet - about us.png |
| **Desktop** (1728×1117px) | desktop - home.png | desktop - about us.png |

### Design Standards to Follow
- **Mobile-First Responsive**: Start with mobile (393px), scale to tablet (1366px), then desktop (1728px)
- **Consistent Spacing**: Follow the grid system shown in design mockups
- **Typography**: Match font sizes, weights, and colors from designs
- **Component Layouts**: Use layout patterns exactly as shown in the mockups
- **Color Palette**: Extract and maintain colors from the design files
- **Interactive Elements**: Buttons, CTAs, and forms match design specifications

### How to Use Design Files
1. **Before coding any section**: Open `/External/Figma/New Design/[page]-(device).png`
2. **Extract design tokens**: Colors, spacing, typography, shadows
3. **Implement to match**: Build components that look exactly like the mockups
4. **Responsive approach**: Mobile design first, then tablet breakpoints, then desktop
5. **Reference continuously**: Check design file at each development stage

---

## 🚀 Senior React Skills Required

### Core Concepts
- **Hooks**: useState, useEffect, useCallback, useMemo, useReducer, useContext
- **Rules of Hooks**: Call only at top level of components or custom hooks
- **Dependency Arrays**: Every reactive value must be included
- **Effect Cleanup**: Return cleanup functions for subscriptions, connections, listeners
- **Custom Hooks**: Extract reusable state/effect logic (name must start with `use`)
- **Performance**: Use React.memo, useMemo, useCallback to optimize rendering
- **Context & State Management**: Memoize context values and callbacks to prevent unnecessary re-renders

### Hook Guidelines
| Need | Use | Notes |
|------|-----|-------|
| Simple state | `useState(initial)` | Returns [value, setValue] |
| Side effects | `useEffect(setup, deps)` | Sync with external systems |
| Expensive compute | `useMemo(fn, deps)` | Cache expensive calculations |
| Stable callback | `useCallback(fn, deps)` | For memoized children |
| Skip re-render | `memo(Component)` | Shallow prop comparison |
| Complex state | `useReducer(reducer, init)` | Multiple state values |
| Shared state | Context + useReducer | Global state management |

### Best Practices
1. **Never** call hooks inside loops, conditions, or nested functions
2. **Always** return cleanup functions when effects subscribe or connect
3. **Include all** reactive values in dependency arrays
4. **Memoize** context values and callbacks to prevent unnecessary re-renders
5. **Use conditional logic** inside hooks, not conditionally calling hooks
6. **Test** with React Testing Library; mock external systems
7. **Use useLayoutEffect** only when effect must run before browser paint

### Code Examples

**useState & useEffect**:
```typescript
useEffect(() => {
  const connection = createConnection(serverUrl, roomId);
  connection.connect();
  return () => connection.disconnect();
}, [serverUrl, roomId]);
```

**useMemo & useCallback**:
```typescript
const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
const handleSubmit = useCallback((orderDetails) => {
  post('/product/' + productId + '/buy', { referrer, orderDetails });
}, [productId, referrer]);
```

**useReducer & Context**:
```typescript
const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
const contextValue = useMemo(() => ({ tasks, dispatch }), [tasks]);
return <TasksContext.Provider value={contextValue}>{children}</TasksContext.Provider>;
```

**Custom Hooks**:
```typescript
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const handleChange = useCallback((e) => setValue(e.target.value), []);
  return { value, onChange: handleChange };
}
```

---

## 🎨 Interactive Website Designer Skills Required

### Design Principles (from `/External/Figma/New Design/`)
- **Responsive First**: Design for mobile breakpoint, then scale up (Mobile → Tablet → Desktop)
- **Consistency**: Follow the design system shown in the mockups
- **Accessibility**: WCAG 2.1 compliant (semantic HTML, contrast, keyboard support)
- **Performance**: Optimize images, lazy load below-the-fold content
- **Interactivity**: Clear feedback (loading, success, error states)

### Layout and Grid
- **Responsive Breakpoints**: 
  - Mobile: 393px (design reference)
  - Tablet: 1366px (design reference)
  - Desktop: 1728px (design reference)
- **Grid System**: Use CSS Grid for page structure
- **Gutter Spacing**: Match spacing shown in `/External/Figma/New Design/` mockups
- **Containers**: Max-width constraints for readable line length on large screens
- **Flexbox/Grid**: CSS Grid for layouts, Flexbox for component alignment

### Responsive Web Design
- **Mobile-First Approach**: 
  - Start with mobile.css or mobile-first Tailwind classes
  - Build for 393px viewport first
  - Add tablet breakpoints (@media min-width: 1366px)
  - Add desktop breakpoints (@media min-width: 1728px)
- **Typography Scaling**: Text sizes scale appropriately for each breakpoint
- **Images**: Responsive with srcset; lazy load non-critical images
- **Touch-Friendly**: Minimum 44pt touch targets on mobile

### Components and Patterns (from Design Mockups)
- **Navigation**: Clear primary nav matching design
- **Hero Section**: Large compelling headline and CTA
- **Feature Cards**: Responsive grid layout
- **CTAs/Buttons**: Prominent, clear, matching design style
- **Modals/Forms**: Accessible focus management and escape key
- **Responsive Tables/Lists**: Card layout on mobile, table on larger screens

### Forms and Validation (if applicable)
- **Labels**: Every field has visible label (accessibility + design)
- **Validation**: Inline feedback for errors; clear error messages
- **Loading State**: Show loading spinner during submission
- **Success/Error**: Provide clear feedback to user

### Accessibility Standards
- **Semantic HTML**: Use `<button>`, `<label>`, `<input>`, `<nav>`, `<main>`, etc.
- **Labels**: Associate labels with controls (`for`/`id` or aria-label)
- **Keyboard Navigation**: All interactive elements keyboard accessible
- **Color Contrast**: WCAG AA minimum contrast ratios
- **Screen Readers**: Proper aria-labels for decorative vs functional images

---

## 📱 Mobile-First Responsive Design Principles

### Touch and Interaction
- **Minimum 44×44px** touch targets (44pt on iOS, 48dp on Android)
- **Adequate Spacing**: Between tappable elements to avoid mis-taps
- **Platform Patterns**: Use standard mobile patterns
- **Loading States**: Show spinners/skeletons for async operations
- **Reduce Motion**: Honor system setting for animations

### Safe Areas
- **Notch & Status Bar**: Respect safe area insets on mobile
- **Home Indicator**: Account for home indicator space on bottom

### Typography on Mobile
- **Semantic Styles**: Use relative sizing for Dynamic Type support
- **Line Length**: Short lines for readability on small screens
- **Contrast**: High contrast text for readability in daylight

### Orientation
- **Portrait First**: Primary design in portrait orientation
- **Landscape Support**: Ensure usability in landscape (if applicable)

---

## 📂 Build & Deployment Configuration

### Static Export Setup
- **Output Format**: `output: "export"` in Next.js config
- **Output Directory**: `./out/` (not `.next/`)
- **Build Command**: `npm run build`
- **Deployment**: Copy entire `./out/` folder to nginx
- **Rendering**: Client-side only (CSR, no SSR)
- **Images**: Unoptimized static images
- **Size**: ~1.0 MB total

### Nginx Deployment
```nginx
root /var/www/memoli-web/out;
location / {
    try_files $uri $uri/ /index.html;
}
location ~* /_next/static/ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

---

## 📂 Folder Locations (CRITICAL)

| Content | Location | Format |
|---------|----------|--------|
| **Design Reference** | `/External/Figma/New Design/` | ⭐ ALWAYS REFER HERE! PNG mockups |
| **Code** | `/src/app/` | Next.js App Router |
| **Components** | `/src/components/` | React TSX components |
| **Pages** | `/src/app/` | Next.js pages (page.tsx) |
| **Styles** | `/src/app/` or component level | Tailwind CSS + module.scss |
| **Public Assets** | `/public/` | SVG, images, favicon |
| **Build Output** | `/out/` | Static HTML + JS (after build) |
| **Figma Assets** | `/External/Figma/New Design/` | Design mockups (PRIMARY REFERENCE) |
| **Design Docs** | `/External/Development/Design/` | Markdown design specifications |
| **Deployment Guides** | `/External/Development/` | Nginx configs, deployment docs |
| **API Docs** | `/External/Development/API/` | Backend integration docs |

---

## 🚫 Documentation & Code Structure Rules (MANDATORY)

### Documentation Location
**ALL markdown (`.md`) and documentation files MUST be created ONLY in `/External/Development/`**

- ✅ Create: `/External/Development/Feature_Name_v1.0.md`
- ✅ Create subdirectories: `/External/Development/Design/`, `/External/Development/API/`, etc.
- ✅ Examples: `CSR_ONLY_CONVERSION.md`, `NGINX_STATIC_DEPLOYMENT.md`, `STATIC_BUILD_SETUP.md`
- ❌ Never create: `/.github/instructions/Feature.md`
- ❌ Never create: `/docs/Feature.md`
- ❌ Never create: `/Feature.md` (at root)
- ❌ Never create anywhere outside `/External/Development/`

### Code Structure - Next.js App Router
- ✅ Layout components in `/src/app/` as `layout.tsx` with `"use client"` directive
- ✅ Page components in `/src/app/[route]/` as `page.tsx` with `"use client"` directive
- ✅ React components in `/src/components/` as `[ComponentName].tsx` with `"use client"` directive
- ✅ Custom hooks in `/src/hooks/` as `use[HookName].ts`
- ✅ Utilities in `/src/utils/` as `[utilityName].ts`
- ✅ Styles with Tailwind CSS or co-located as `[ComponentName].module.scss`
- ✅ Public assets in `/public/` (images, icons, SVG, favicon)

### Client-Side Only Requirements
**THIS PROJECT IS CSR-ONLY (No Server-Side Rendering)**

- ✅ MUST add `"use client"` directive at top of every component file
- ✅ NO Server Components allowed
- ✅ NO Server-side rendering features
- ✅ NO API routes in `/api/`
- ✅ NO `getServerSideProps` or `getStaticProps`
- ✅ NO `metadata` exports (use HTML head tag instead)
- ✅ All data fetching must happen from browser
- ✅ All dynamic features must be client-side (useState, useEffect, etc.)

**These rules have NO EXCEPTIONS. All future AI agents must follow this strictly.**

---

## 🎨 Memoli iOS App Landing Site - Content Guidelines

### Website Purpose
Marketing and informational website for the **Memoli iOS application**. The site should attract potential users, explain features, and drive downloads.

### Key Sections to Implement
1. **Hero Section** - App overview with compelling headline and main value proposition (see `/External/Figma/New Design/home`)
2. **Features** - Highlight key iOS app capabilities and benefits
3. **Screenshots/Demo** - Visual showcase of app interface and user experience
4. **Benefits** - Detailed explanation of why users should download
5. **Call-to-Action** - Prominent download buttons linking to App Store
6. **About** - Company/developer information and story (see `/External/Figma/New Design/about`)
7. **FAQ** - Answers to common questions about the app
8. **Contact/Support** - Customer support and feedback channels

### Design Implementation
**ALWAYS check `/External/Figma/New Design/` for each section before coding:**
- Mobile-home.png → Mobile home page layout
- Tablet - home.png → Tablet home page layout
- Desktop - home.png → Desktop home page layout
- Mobile- about us.png → Mobile about page layout
- Tablet - about us.png → Tablet about page layout
- Desktop - about us.png → Desktop about page layout

### Design Principles
- **Mobile-First**: App users browse on mobile, design accordingly (start with mobile design from `/External/Figma/New Design/`)
- **Fast Performance**: Quick loading times for app store visitors
- **Accessibility**: WCAG 2.1 compliant for all users
- **SEO-Friendly**: Proper meta tags for search visibility (static HTML is perfect)
- **Responsive**: Works beautifully on all devices (follows design mockups)
- **Styling**: Tailwind CSS with optional dark mode support (match design colors)
- **Engagement**: Clear navigation, strong CTAs, engaging copy (match design layouts)

### Asset Organization
- App screenshots: `/public/screenshots/` or `/public/app-images/`
- App icons: `/public/icons/`
- Marketing imagery: `/public/images/`
- Design mockups/references: `/External/Figma/New Design/` (PRIMARY REFERENCE)
- Logo & branding: `/public/brand/`

### Content Best Practices
- Use clear, user-focused language
- Focus on benefits, not just features
- Include social proof (reviews, testimonials if available)
- Mobile screenshots should show actual app UI
- CTAs should be visible and compelling
- Loading performance is critical for user retention
- **All designs must match `/External/Figma/New Design/` mockups**

---

## 📐 Responsive Breakpoints (from Design Mockups)

| Breakpoint | Width | Target Device | Design Reference |
|------------|-------|---------------|------------------|
| Mobile | 393px | iPhone/Android | `mobile-*.png` files |
| Tablet | 1366px | iPad/Tablets | `tablet - *.png` files |
| Desktop | 1728px | Large monitors | `desktop - *.png` files |

### Implementing Breakpoints
```typescript
// Mobile-first (default)
// Default styles for 393px

// Tablet (@media min-width: 1024px)
// Adjust layout for 1366px

// Desktop (@media min-width: 1728px)
// Optimize for 1728px
```

---

## 📋 Development Workflow

1. **Before Starting**: Check `/External/Figma/New Design/` for the section you're building
2. **Extract Design Tokens**: Colors, spacing, typography from the mockup
3. **Build Mobile First**: Implement for mobile (393px) using the mockup
4. **Add Responsive**: Add tablet breakpoint changes
5. **Add Desktop**: Add desktop breakpoint changes
6. **Verify Match**: Compare your implementation against the design file
7. **Test All Breakpoints**: Test on actual mobile, tablet, and desktop sizes

---

**Last Updated**: March 4, 2026  
**Version**: 6.0  
**Build System**: Next.js 16.1.6 with Static Export (CSR-only)  
**Deployment**: Nginx Static Serving from `./out/` folder  
**Design Reference**: `/External/Figma/New Design/` ⭐ PRIMARY REFERENCE  
**Total Output Size**: ~1.0 MB
