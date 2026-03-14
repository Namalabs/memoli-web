---
applyTo: "**/*.dart"
---

# Senior Flutter Skill

Use this skill for **production-ready Flutter apps** (mobile, web, desktop): **state management** (ephemeral vs app state, setState, InheritedWidget/Provider), **performance** (const, keys, splitting build), **navigation** (go_router), **dependency injection**, and **testing**.

## Stack Rules

- **State**: Ephemeral (UI-only) in StatefulWidget + setState; app/shared state via InheritedWidget, Provider, or Riverpod.
- **Build**: Keep build() cheap; use const; split large widgets; avoid heavy work in build().
- **Navigation**: Prefer **go_router** for routing, deep links, and declarative navigation.
- **Keys**: Use ValueKey/ObjectKey for list identity (Dismissible, tests, list reorder); unique per item.
- **DI**: Pass dependencies (repositories, services) from the top (e.g. main() or root widget); use for testability.

## 1. State management

### Ephemeral (local) state

- **StatefulWidget** + **State**: Two classes—widget is immutable config, State holds mutable data and calls **setState()** to trigger rebuild.

```dart
class _MyHomepageState extends State<MyHomepage> {
  int _index = 0;

  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      currentIndex: _index,
      onTap: (newIndex) => setState(() => _index = newIndex),
    );
  }
}
```

### App / shared state

- **InheritedWidget** (and **InheritedModel**): Low-level way to provide data to descendants; many packages (e.g. Provider) build on this.
- For shared state: use **Provider**, **Riverpod**, or similar; avoid passing state through many layers by hand.

### Dependency injection

- Create repositories/services in **main()** (or root) and pass down via constructor (or Provider).
- Enables testing with fakes/mocks.

## 2. Performance

- **const**: Use const constructors everywhere possible so Flutter can short-circuit rebuilds.
- **build() cost**: build() can run often; avoid expensive work, large single build() methods.
- **Lists**: Use **ListView.builder** for long lists; use **ValueKey(item.id)** for list items.
- **RepaintBoundary**: Use for offscreen or expensive subtrees to isolate repaints.

## 3. Navigation (go_router)

```dart
final router = GoRouter(
  routes: [
    GoRoute(
      path: '/',
      builder: (_, __) => Scaffold(appBar: AppBar(title: const Text('Home'))),
      routes: [
        GoRoute(path: 'details', builder: (_, __) => DetailsScreen()),
      ],
    ),
  ],
);
// MaterialApp.router(routerConfig: router)
// Navigate: context.go('/second'); context.push('/details');
```

## 4. Keys

- **ValueKey(value)**: When the value (e.g. id) uniquely identifies the widget.
- **ObjectKey(object)**: When identity is object identity.
- **GlobalKey**: When you need to access state of another widget (use sparingly).
- **Dismissible**: Must have a key; use **ValueKey(item.id)**.

## 5. Senior mindset

- **Separation**: Put business logic in repositories/services/ViewModels; widgets handle UI and call them.
- **ListenableBuilder**: When using a Listenable, wrap only the subtree that needs to rebuild.
- **Testing**: Use keys for finders; unit-test repositories and ViewModels with fakes; widget tests with pumpWidget and find/tap.
- **Accessibility**: Semantic labels, sufficient touch targets, and test with screen readers.

## Quick reference

| Need | Use |
|------|-----|
| Local UI state | StatefulWidget + setState() |
| Shared state | InheritedWidget, Provider, Riverpod |
| Navigation | go_router: GoRouter, context.go/push |
| List item identity | ValueKey(id) for lists, Dismissible, tests |
| Expensive list | ListView.builder, SliverList.builder |
| Cheaper rebuilds | const, split build(), RepaintBoundary |
| DI | Pass from main() or root; inject repositories/ViewModels |
