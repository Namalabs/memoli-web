---
applyTo: "**/*.jsx,**/*.tsx"
---

# Senior React Skill

Use this skill for **production-ready React applications**: **hooks** (useState, useEffect, useCallback, useMemo, useReducer), **rules of hooks**, **dependency arrays**, **effect cleanup**, **custom hooks**, **React.memo**, and **Context** for shared state.

## Stack Rules

- **Hooks**: Call only at the top level of components or custom hooks; never inside loops, conditions, or nested functions.
- **Effects**: Use for synchronizing with external systems; include all reactive values in the dependency array; return a cleanup function when needed.
- **State**: Prefer useState for simple state; useReducer for complex state; lift state when siblings need to share it.
- **Performance**: Use useMemo for expensive computations; useCallback for stable callback references; memo() to skip re-renders.
- **Context**: Combine with useReducer for global state; memoize context value and callbacks.

## 1. useState and useEffect

- **useState(initial)**: Returns [value, setValue]; setValue can take updater function.
- **useEffect(setup, deps?)**: Runs setup after commit; [] runs once on mount; [a, b] runs when a or b change.
- **Dependencies**: Every reactive value read inside the effect must be in the dependency array.
- **Cleanup**: Always return a cleanup function when the effect subscribes, connects, or sets listeners.

```javascript
useEffect(() => {
  const connection = createConnection(serverUrl, roomId);
  connection.connect();
  return () => connection.disconnect();
}, [serverUrl, roomId]);
```

## 2. useCallback and useMemo

- **useMemo(compute, deps)**: Caches the result; recomputes only when deps change.
- **useCallback(fn, deps)**: Same as useMemo(() => fn, deps); use for callbacks passed to memoized children.
- **memo(Component)**: Skips re-render when props are shallowly equal.

```javascript
const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
const handleSubmit = useCallback((orderDetails) => {
  post('/product/' + productId + '/buy', { referrer, orderDetails });
}, [productId, referrer]);
```

## 3. useReducer and Context

- **useReducer(reducer, initialArg, init?)**: For state with multiple sub-values. Returns [state, dispatch]. dispatch is stable.
- **Context + useReducer**: Create context; wrap tree in Provider that holds useReducer state; memoize context value.

```javascript
const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
const contextValue = useMemo(() => ({ tasks, dispatch }), [tasks]);
return <TasksContext.Provider value={contextValue}>{children}</TasksContext.Provider>;
```

## 4. Custom hooks

- Extract repeated state/effect logic into **custom hooks** (name must start with use). Each call gets its own state.
- Return callbacks wrapped in useCallback so callers can depend on them safely.

```javascript
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const handleChange = useCallback((e) => setValue(e.target.value), []);
  return { value, onChange: handleChange };
}
```

## 5. Senior mindset

- **When to use Effect**: Only for synchronizing with something outside React (network, DOM, timers, subscriptions).
- **Strict Mode**: In development, React double-invokes render and effect setup/cleanup to surface bugs.
- **useLayoutEffect**: Use when the effect must run before browser paint.
- **Testing**: Test with React Testing Library; mock external systems; assert on rendered output and user events.

## Reference — useEffect dependency array

- **No array**: Effect runs after every commit.
- **[]**: Runs once after mount (and cleanup on unmount).
- **[a, b]**: Runs after mount and whenever `a` or `b` change (Object.is).

## Reference — Rules of hooks

- Call hooks only at the top level of a component or custom hook (not in loops, conditions, or nested functions). For conditional logic, use conditions inside the hook or split into two components and conditionally render.

## Quick reference

| Need | Use |
|------|-----|
| Simple state | useState(initial) |
| Side effects | useEffect(setup, deps) |
| Expensive compute | useMemo(fn, deps) |
| Stable callback | useCallback(fn, deps) |
| Skip re-render | memo(Component) |
| Complex state | useReducer(reducer, init) |
| Shared state | Context + useReducer |
| Reusable logic | Custom hook (useSomething) |
