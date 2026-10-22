// The sign-in page. There are no passwords — signing in just flips the one
// boolean in the auth context. If the reader is already signed in, we send them
// straight to the protected Dashboard with <Navigate>.

import { Navigate, useNavigate } from 'react-router'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { isAuthed, signIn } = useAuth()
  const navigate = useNavigate()

  if (isAuthed) {
    return <Navigate to="/dashboard" replace />
  }

  function handleSignIn() {
    signIn()
    navigate('/dashboard') // go to the protected page after signing in
  }

  return (
    <section>
      <h1>Sign in</h1>
      <p>This page is a demo: there is no password. Click to sign in.</p>
      <button className="like-btn" onClick={handleSignIn}>
        Sign in as reader
      </button>
    </section>
  )
}
