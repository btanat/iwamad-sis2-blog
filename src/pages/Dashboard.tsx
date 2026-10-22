// The protected page. It is only reachable when signed in — ProtectedRoute
// redirects signed-out readers to /login before this ever renders. Its path,
// /dashboard, goes on the Protected: line of the README.

import { useAuth } from '../context/AuthContext'

export default function Dashboard() {
  const { signOut } = useAuth()

  return (
    <section>
      <h1>Reader Dashboard</h1>
      <p>You are signed in. This page is only visible to signed-in readers.</p>
      <p>If you sign out and open /dashboard again, you will be sent to the sign-in page.</p>
      <button className="like-btn" onClick={signOut}>
        Sign out
      </button>
    </section>
  )
}
