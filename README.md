# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

```npm install```

```npm run dev```

There are 2 routers. After 2 seconds the effect change the selected router from blue to red. The Provider does not update to the new router. Forcing an update via key makes it work again

This issue was introduced in 7.1.4, but is also present in the current 7.4.1

https://reactrouter.com/changelog#v714