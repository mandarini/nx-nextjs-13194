# Trying out the fix

1. Installed local build of Nx
2. Change `withNx` in [`packages/server-components-app/next.config.js`](pacages/../packages/server-components-app/next.config.js) to use `withNxNew`
3. Changed `build` target in [`packages/server-components-app/project.json`](packages/server-components-app/project.json) to `build-base` so that `withNxNew` can find it
4. Uncommented commented out components and imports in [`packages/server-components-app/src/app/page.tsx`](packages/server-components-app/src/app/page.tsx)
5. Uncommented commented out export in [`packages/shared-lib/src/index.ts`](packages/shared-lib/src/index.ts)

Then ran

```
npx nx serve server-components-app
```

and got the following error:

```
You're importing a component that needs useState. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.

   ,-[1:1]
 1 | import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
 2 | import { useEffect, useState } from "react";
   :                     ^^^^^^^^
 3 | export const ClientComponent = ()=>{
 4 |     const [counter, setCounter] = useState(0);
 5 |     useEffect(()=>{
   `----

Maybe one of these should be marked as a client entry with "use client":
  ../client-components/src/lib/ClientComponent.tsx
  ../client-components/src/index.ts
  src/components/ReExportedComponent.tsx
  src/app/page.tsx
info  - automatically enabled Fast Refresh for 2 custom loaders
wait  - compiling /_error (client and server)...
error - ../client-components/src/lib/ClientComponent.tsx
```
