# Context

This repo demo the error of using code-hike. It can run normally when developing but failed when build it to next.js standalone bundle.

```
error running remarkCodeHike [Error: ENOENT: no such file or directory, open '/app/node_modules/.pnpm/shiki@0.10.1/node_modules/shiki/languages/abap.tmLanguage.json'] {
code-hike-test-2 |   errno: -2,
code-hike-test-2 |   code: 'ENOENT',
code-hike-test-2 |   syscall: 'open',
code-hike-test-2 |   path: '/app/node_modules/.pnpm/shiki@0.10.1/node_modules/shiki/languages/abap.tmLanguage.json'
code-hike-test-2 | }
```

