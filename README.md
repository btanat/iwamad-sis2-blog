# iwamad-sis2-blog

A small component-based blog built with React, TypeScript and React Router for
the IWaMAD SIS 2 project.

```
Pages: https://btanat.github.io/iwamad-sis2-blog/
Tests: Test Files  2 passed (2) · Tests  5 passed (5)
Protected: /dashboard
```

## What it does

- **React Router** navigation between Home, Posts, Contact and a protected
  Dashboard, all inside one shared layout (header + footer stay, no reload).
- **Dynamic posts**: five typed posts in `src/data/posts.ts`, drawn as cards
  with `.map()`; each opens at `/posts/<id>` via `useParams()`.
- **Local state**: a like button on each post card, and a comment toggle on the
  post page — each keeps its own value.
- **Custom 404** for unknown URLs, and a "post not found" message for a bad id.
- **Route protection**: `/dashboard` is only for a signed-in reader; signed out,
  the URL shows the sign-in page.
- **Tests** with Vitest + React Testing Library (including a userEvent click).

## Project structure

```
src/
  main.tsx                     # BrowserRouter + AuthProvider
  App.tsx                      # route table
  data/posts.ts                # typed Post[] + findPost()
  context/AuthContext.tsx      # sign-in boolean in React state
  components/
    Layout.tsx                 # header/footer + <Outlet/>
    PostCard.tsx               # typed props, like button (local state)
    ProtectedRoute.tsx         # guard: checks auth before <Outlet/>
  pages/                       # Home, Posts, Post, Contact, Login, Dashboard, NotFound
  __tests__/                   # Posts.test.tsx, ProtectedRoute.test.tsx
```

## Run locally

Requires Node 18+.

```bash
npm install
npm run dev      # start the dev server
npm test         # run the tests
npm run build    # type-check + build into docs/ (+ 404.html for Pages)
```

## Deployment

Published with GitHub Pages from `main` → `/docs`. The `base` in
`vite.config.ts` is `/iwamad-sis2-blog/`; `postbuild` copies `index.html` to
`404.html` so refreshing a deep link (e.g. `/posts/1`) still loads the app.

## Task lifecycle note

"Signed in" is a single boolean in React state (no server, no passwords — real
auth is a later week). Likes and sign-in reset on refresh, which is expected.
