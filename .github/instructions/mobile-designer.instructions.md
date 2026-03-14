---
applyTo: "**/*.swift,**/*.dart,**/*.tsx,**/*.jsx"
---

# Interactive Mobile Designer Skill

Use this skill for **interactive mobile app design**: layout, typography, touch targets, **Dynamic Type**, accessibility, and platform-appropriate patterns (Apple Human Interface Guidelines, Material Design principles).

## Design Principles

- **Touch-first**: Minimum 44pt (iOS) touch targets; adequate spacing between tappable elements.
- **Single source of truth**: One canonical layout/spec; adapt for size classes and orientation.
- **Clarity**: Clear hierarchy, readable text, semantic fonts that scale (Dynamic Type).
- **Feedback**: Immediate visual/haptic feedback for taps and state changes.
- **Consistency**: Use system components and platform patterns before custom ones.

## 1. Layout and structure

- **Safe areas**: Respect safe area insets (notch, home indicator, keyboard).
- **Grid and spacing**: Use 4pt/8pt grid; consistent padding and margins (e.g. 16pt, 24pt).
- **Scroll**: Prefer native scroll behavior; avoid nested scrolls unless necessary.
- **Orientation**: Design for portrait first; support landscape where the app benefits.
- **Size classes**: Adapt layout for compact vs regular.

## 2. Typography

- **Semantic styles**: Use system text styles (e.g. `.body`, `.headline`, `.caption`) so they scale with Dynamic Type.
- **Line count**: Allow text to wrap for important content so large-type users see full text.
- **Platform**: iOS — San Francisco; Android — Roboto.
- **Contrast**: Meet WCAG contrast ratios for body and small text.

## 3. Touch and interaction

- **Target size**: Minimum ~44×44pt (iOS HIG); larger for primary actions.
- **Spacing**: Enough space between tappable elements to avoid mis-taps.
- **Gestures**: Use platform-standard gestures; avoid custom gestures for critical actions.
- **Loading states**: Show spinners or skeletons; disable or show progress for long actions.
- **Haptics**: Use light/medium impact for buttons, selection for pickers.

## 4. Accessibility

- **Labels**: Every interactive element has an accessibility label (and hint if needed).
- **Images**: Decorative → hidden from VoiceOver; meaningful → descriptive label.
- **Dynamic Type**: Support user text size; avoid clipping.
- **Reduce Motion**: Honor system setting; shorten or skip animations.
- **Focus order**: Logical tab/switch order for keyboard and switch control.

## 5. Platform patterns

| Area | iOS (HIG) | Android (Material) |
|------|-----------|---------------------|
| Nav | Tab bar, nav stack, back swipe | Top app bar, back, bottom nav |
| Lists | List, swipe actions, pull-to-refresh | Lists, swipe, pull-to-refresh |
| Input | Keyboards, pickers, date/time | Same concepts, different visuals |
| Feedback | Haptics, system alerts | Toasts, snackbars, haptics |

## Reference — SwiftUI accessibility

- **Label**: `.accessibilityLabel("Favorites")` (e.g. for Tab).
- **Hint**: `.accessibilityHint("Purchases the item")` for outcome of action.
- **Identifier**: `.accessibilityIdentifier("loginButton")` for UI tests.
- **Labels hidden**: Use `.labelsHidden()` only when label still exists for a11y.

## Quick reference

| Need | Use |
|------|-----|
| Touch target | ≥44pt, padding around control |
| Text scaling | Semantic styles / Dynamic Type |
| Labels | accessibilityLabel, accessibilityHint |
| Decorative image | accessibilityHidden(true) |
| Reduce motion | Check reduceMotion, shorten/skip animation |
| Safe layout | Safe area insets / SafeAreaView |
