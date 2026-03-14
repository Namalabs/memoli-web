---
applyTo: "src/**/*.ts,src/**/*.html,src/**/*.scss"
---

# Senior Modern Angular Skill

Use this skill for **production-ready Angular applications**: **standalone components**, **Signals** for reactive state, **new control flow** (@if, @for, @switch, @defer), **inject()** for DI, typed forms, and modern migration patterns.

## Stack Rules

- **Components**: Prefer standalone (`standalone: true`) with dependencies imported in the component; avoid NgModules for new code where possible.
- **State**: Use **Signals** (`signal()`, `computed()`, `effect()`) for reactive state; fine-grained change detection.
- **Templates**: Use **@if**, **@for**, **@switch**, **@defer**, **@let** instead of *ngIf, *ngFor, *ngSwitch where applicable.
- **DI**: Prefer **inject()** in constructor or field initializer over constructor injection when migrating.
- **Forms**: Use **typed** reactive forms (`FormGroup<T>`, `FormControl<T>`) for complex forms; use **template-driven** forms (`FormsModule` + `[(ngModel)]`) for simple forms where the template is the source of truth.

## 1. Signals (reactive state)

- **signal(initialValue)**: Creates a writable signal. Read by calling: `count()`. Update: `count.set(1)` or `count.update(v => v + 1)`.
- **computed(computation)**: Derived value from other signals; updates automatically when dependencies change.
- **effect(callback)**: Side effect that runs when read signals change; runs immediately and on dependency changes.
- **untracked(callback)**: Run code without registering signal reads as dependencies (e.g. in effects).
- **input()** / **output()**: Declare component inputs and outputs as signals.

```typescript
import { Component, signal, computed, effect } from '@angular/core';

@Component({...})
export class CounterComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  constructor() {
    effect(() => {
      console.log('count:', this.count(), 'double:', this.doubleCount());
    });
  }

  increment() {
    this.count.update(value => value + 1);
  }
}
```

- Prefer signals over RxJS for local component state when fine-grained reactivity is needed; combine with RxJS (e.g. `toSignal()`) for HTTP/streams.

## 2. Control flow directives

| Directive | Purpose | Example |
|-----------|---------|---------|
| **@if** | Conditional block | `@if (isLoggedIn) { <p>Welcome</p> } @else { <p>Login</p> }` |
| **@for** | Iteration (use track) | `@for (item of items; track item.id) { <div>{{ item.name }}</div> }` |
| **@switch** | Multi-branch | `@switch (role) { @case ('admin') { ... } @default { ... } }` |
| **@defer** | Lazy load | `@defer { <app-heavy /> } @placeholder { <p>Loading...</p> }` |
| **@let** | Local template variable | `@let fullName = firstName + ' ' + lastName;` |

- Always use **track** with **@for** (e.g. `track item.id`) for performance.
- Use **@defer** for heavy or below-the-fold content to improve initial load.

## 3. Standalone components and inject()

- Declare component with `standalone: true` and import what you need:

```typescript
@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-dashboard',
  template: `...`
})
export class DashboardComponent {}
```

- Use **inject()** for DI instead of constructor params when convenient:

```typescript
export class MyComponent {
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);
}
```

- Migrations: Angular provides automated migrations for standalone, control flow, and inject(); run schematics for the version you target.

## 4. Template-driven forms (ngModel)

Use **FormsModule** and **`[(ngModel)]`** for simple forms where the template is the source of truth. For complex or dynamic forms, prefer typed reactive forms (`FormGroup<T>`).

### Setup

- Import `FormsModule` in the standalone component's `imports` array.
- Use `[(ngModel)]="property"` for two-way binding ("banana in a box" syntax).
- Every `ngModel` control inside a `<form>` **must** have a `name` attribute so `NgForm` can register it.

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Hello {{ firstName }}!</h2>
    <input type="text" [(ngModel)]="firstName" />
  `,
})
export class GreetingComponent {
  firstName = 'Ada';
}
```

### ngModel with Signals

`[(ngModel)]` works with signals — bind directly to a signal property:

```typescript
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  template: `Favorite Color: <input type="text" [(ngModel)]="favoriteColor" />`,
})
export class FavoriteColorComponent {
  favoriteColor = signal('');
}
```

### Form with NgForm, validation, and submit

- Export `NgForm` with `#f="ngForm"` to access form-level state (`f.value`, `f.valid`).
- Export `NgModel` with `#name="ngModel"` to access control-level state (`name.valid`, `name.dirty`, `name.touched`, `name.errors`).
- Use `(ngSubmit)="onSubmit(f)"` on the `<form>` element for submission.
- Use HTML validators (`required`, `minlength`, `maxlength`, `pattern`) or custom validator directives.

```html
<form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
  <label for="name">Name</label>
  <input
    type="text"
    id="name"
    name="name"
    required
    minlength="4"
    [(ngModel)]="model.name"
    #name="ngModel"
  />
  @if (name.invalid && (name.dirty || name.touched)) {
    <div class="alert">
      @if (name.hasError('required')) {
        <div>Name is required.</div>
      }
      @if (name.hasError('minlength')) {
        <div>Name must be at least 4 characters long.</div>
      }
    </div>
  }

  <label for="email">Email</label>
  <input
    type="email"
    id="email"
    name="email"
    required
    [(ngModel)]="model.email"
    #email="ngModel"
  />

  <button type="submit" [disabled]="f.invalid">Submit</button>
</form>
```

```typescript
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './my-form.component.html',
})
export class MyFormComponent {
  model = { name: '', email: '' };

  onSubmit(form: NgForm) {
    console.log(form.value);  // { name: '...', email: '...' }
    console.log(form.valid);  // true/false
  }
}
```

### ngModel rules

- **Inside a `<form>`**: every `ngModel` control needs a `name` attribute.
- **Standalone (no `<form>`)**: use `[ngModelOptions]="{ standalone: true }"` or just bind without a form.
- **One-way read**: `[ngModel]="value"` (no banana box) — pushes to the input but doesn't write back.
- **Event only**: `(ngModelChange)="onChange($event)"` — listen to value changes without binding.
- **Combine**: `[ngModel]="value" (ngModelChange)="onChange($event)"` — split two-way binding for custom logic.

## 5. Senior mindset

- **Change detection**: Signals enable fine-grained updates; prefer OnPush with signals for predictable performance.
- **Lazy loading**: Use @defer or lazy routes to reduce initial bundle size.
- **Typed forms**: Use `FormGroup<{ name: string }>`, `FormControl<string>` etc. for validation and IDE support.
- **Testing**: Test components with signals by updating signals and asserting on DOM or emitted values; use TestBed with standalone components and provide dependencies.
- **Accessibility**: Bind labels to controls, use semantic HTML, and ensure keyboard and screen reader support for custom components.

## Reference — Signals API

- **signal(initialValue)**: Writable signal. Read: `s()`. Write: `s.set(x)`, `s.update(fn)`.
- **computed(fn)**: Derived signal; recomputes when dependencies change.
- **effect(fn)**: Runs when read signals change. Use for side effects (logging, focus, etc.).
- **untracked(fn)**: Execute without tracking signal reads.
- **input()**, **output()**: Component input/output as signals.
- **isSignal(value)**: Type guard for signals.

## Reference — Control flow (full syntax)

```html
@if (condition) {
  ...
} @else if (other) {
  ...
} @else {
  ...
}

@for (item of items; track item.id; let i = $index) {
  ...
}

@switch (value) {
  @case (a) { ... }
  @case (b) { ... }
  @default { ... }
}

@defer (when condition; on viewport(ref); on idle; on immediate; on timer(500)) {
  <heavy />
} @placeholder {
  ...
} @loading (min 200ms) {
  ...
} @error {
  ...
}

@let x = expr;
```

## Reference — Migrations (common)

- **Standalone**: Add `standalone: true`, move declarations to component imports.
- **Control flow**: Replace *ngIf with @if, *ngFor with @for (with track), *ngSwitch with @switch.
- **inject()**: Replace constructor parameter injection with `private x = inject(X)`.
- **Lazy routes**: Update route config to use `loadComponent` or `loadChildren` returning dynamic import.

## Reference — Performance

- Prefer **OnPush** with signals.
- Use **@defer** for below-the-fold or heavy components.
- Use **track** in @for to avoid unnecessary DOM churn.

## Quick reference

| Need | Use |
|------|-----|
| Reactive state | signal(), computed(), effect() |
| Conditional UI | @if / @else |
| List | @for (item of items; track item.id) |
| Multi-branch | @switch / @case / @default |
| Lazy content | @defer + @placeholder |
| DI | inject(Service) |
| Component deps | standalone: true, imports: [...] |
| Typed reactive forms | FormGroup<T>, FormControl<T> |
| Template-driven forms | FormsModule + [(ngModel)]="prop" |
| Form validation (template) | #name="ngModel", name.invalid, name.hasError('required') |
| Form submit (template) | #f="ngForm" (ngSubmit)="onSubmit(f)" |
| Two-way binding (input) | [(ngModel)]="property" (requires name attr in form) |
