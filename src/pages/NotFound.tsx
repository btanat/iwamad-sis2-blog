// The custom 404 page. It matches the "*" route, so any unknown URL (for
// example /banana) renders this inside the layout, with a link back to a real
// page. The header and footer stay because this is a child of the layout route.

import { Link } from 'react-router'

export default function NotFound() {
  return (
    <section>
      <h1>404 — Page not found</h1>
      <p>That page does not exist.</p>
      <p>
        <Link className="read-more" to="/">
          ← Back to Home
        </Link>
      </p>
    </section>
  )
}
