// Route protection. This is a layout route: it checks the auth state BEFORE it
// renders its children. If the reader is signed out, it renders <Navigate>,
// which redirects to the sign-in page. If signed in, it renders <Outlet />,
// which is the protected page. Typing the protected URL directly still hits
// this check — hiding a link would not be real protection.

import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute() {
  const { isAuthed } = useAuth()

  if (!isAuthed) {
    // replace: don't leave the protected URL in the history back-stack.
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
