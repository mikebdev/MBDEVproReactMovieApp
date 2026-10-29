# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## React Hooks

React provides a powerful set of built-in Hooks to manage state, lifecycles, and performance within functional components. The official built-in React Hooks are organized below by their primary functional category:

📦 State Hooks

Manage data that changes over time and triggers component re-renders.
• useState: Declares a local state variable that you can update directly.
• useReducer: Declares a local state variable updated via a reducer function (ideal for complex state logic).

🌐 Context Hooks

Read and subscribe to context without explicit prop drilling.
• useContext: Reads and subscribes to a context provider value from the nearest ancestor.

🪟 Ref Hooks

Hold persistent values or DOM nodes that do not trigger a re-render when changed.
• useRef: Accesses a DOM node directly or holds any mutable value in its .current property.
• useImperativeHandle: Customizes the instance value exposed to parent components when using a ref.

⚡ Effect Hooks

Connect components to and synchronize them with external systems or APIs.
• useEffect: Synchronizes a component with an external system (runs after paint/render).
• useLayoutEffect: Fires synchronously after all DOM mutations but before the browser repaints.
• useInsertionEffect: Fires before layout effects and before DOM mutations; strictly for injecting dynamic styles.

🚀 Performance Hooks

Optimize re-renders and cache expensive computations across renders.
• useMemo: Caches the result of an expensive calculation so it isn't recomputed needlessly.
• useCallback: Caches a function definition itself to prevent unnecessary child re-renders.
• useTransition: Marks state updates as non-blocking transitions so the UI stays responsive.
• useDeferredValue: Defers updating a non-critical part of the UI to keep input typing smooth.

🛠️ Other / Library Hooks

Utility hooks for specialized framework development or unique edge cases.
• useId: Generates stable, unique IDs primarily for linking form fields and labels.
• useSyncExternalStore: Subscribes to and safely reads data from external, non-React data stores.
• useActionState: Designed to track the status, error handling, and result of form action executions.
• useDebugValue: Adds a custom diagnostic label to custom hooks inside React DevTools.

