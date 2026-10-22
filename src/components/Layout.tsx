// The shared layout. The header (with navigation) and the footer stay on screen
// while the <Outlet /> in the middle is replaced by the current page. Because
// the links are NavLink/Link, clicking them changes the page with no reload.

import { NavLink, Outlet } from 'react-router'
import { useAuth } from '../context/AuthContext'

// NavLink adds an "active" class to the link of the page you are on. We turn
// that into a bold style so only the current page's link is marked.
function navClass({ isActive }: { isActive: boolean }) {
  return isActive ? 'nav-link active' : 'nav-link'
}

export default function Layout() {
  const { isAuthed, signOut } = useAuth()

  return (
    <div className="app">
      <header className="header">
        <div className="brand">Batyr&apos;s Blog</div>
        <nav className="nav">
          <NavLink to="/" className={navClass} end>
            Home
          </NavLink>
          <NavLink to="/posts" className={navClass}>
            Posts
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
          <NavLink to="/dashboard" className={navClass}>
            Dashboard
          </NavLink>
          {isAuthed ? (
            <button className="link-btn" onClick={signOut}>
              Sign out
            </button>
          ) : (
            <NavLink to="/login" className={navClass}>
              Sign in
            </NavLink>
          )}
        </nav>
      </header>

      <main className="content">
        {/* The current page renders here. */}
        <Outlet />
      </main>

      <footer className="footer">
        <small>IWaMAD SIS 2 · Component-based blog · {new Date().getFullYear()}</small>
      </footer>
    </div>
  )
}
