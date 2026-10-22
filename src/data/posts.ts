// The blog's data lives in a local, typed array — no API (that is Week 10).
// Adding one more object here adds a card on the Posts page and a page at
// /posts/<id> automatically, without touching any component.

export type Post = {
  id: number
  title: string
  author: string
  date: string // ISO date, e.g. "2026-10-01"
  summary: string
  body: string[] // each string is one paragraph
  tags: string[]
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'Getting Started with React Router',
    author: 'Batyr',
    date: '2026-10-01',
    summary: 'Why a single-page app still needs routing, and how the router keeps the layout while the page changes.',
    body: [
      'React Router lets one page behave like many. Instead of the browser asking the server for a new document, the router swaps which component is shown while the shared layout — the header and footer — stays in place.',
      'The key pieces are Routes and Route. Each Route maps a URL path to a component. A layout route wraps the others and renders an Outlet where the child page appears.',
    ],
    tags: ['react', 'routing'],
  },
  {
    id: 2,
    title: 'Typing Props with TypeScript',
    author: 'Batyr',
    date: '2026-10-03',
    summary: 'A small type for a post removes a whole class of bugs before the app even runs.',
    body: [
      'When the shape of a post is described by a type, the editor knows every field. Passing the wrong thing into a component becomes a compile error instead of a blank screen.',
      'The same type is reused everywhere: the data array, the card props, and the detail page all agree on what a Post is.',
    ],
    tags: ['typescript'],
  },
  {
    id: 3,
    title: 'Local State with useState',
    author: 'Batyr',
    date: '2026-10-05',
    summary: 'A like button is the smallest possible example of state that reacts to the reader.',
    body: [
      'useState gives a component a value and a function to change it. When the value changes, React re-renders just that component.',
      'Because each card owns its own useState, liking one post does not touch any other post.',
    ],
    tags: ['react', 'state'],
  },
  {
    id: 4,
    title: 'Protecting a Route',
    author: 'Batyr',
    date: '2026-10-07',
    summary: 'Hiding a link is not security. Real protection checks before it renders the page.',
    body: [
      'A protected area is a layout route that checks a condition before rendering its Outlet. If the reader is signed out, it renders a Navigate that sends them to the sign-in page instead.',
      'Typing the URL directly still hits the check, which is the whole point — the guard is on the route, not on the link.',
    ],
    tags: ['react', 'routing'],
  },
  {
    id: 5,
    title: 'Testing Components with Vitest',
    author: 'Batyr',
    date: '2026-10-09',
    summary: 'A good component test renders the component, acts like a user, and checks what the user would see.',
    body: [
      'React Testing Library renders a component into a virtual DOM. userEvent clicks and types the way a person would.',
      'The test then asserts on visible text, not on internal variables, so it keeps passing even if the implementation changes.',
    ],
    tags: ['testing'],
  },
]

// Helper used by the detail page: find a post by its numeric id, or undefined.
export function findPost(id: number): Post | undefined {
  return posts.find((p) => p.id === id)
}
