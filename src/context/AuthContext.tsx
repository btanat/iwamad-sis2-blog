// A tiny authentication context. "Signed in" is just one boolean kept in React
// state — no passwords and no server (real auth is Week 13). Any component can
// read it or change it through the useAuth hook.

import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type AuthValue = {
  isAuthed: boolean
  signIn: () => void
  signOut: () => void
}

// The context starts as undefined so that using it outside the provider is an
// obvious error instead of a silent wrong value.
const AuthContext = createContext<AuthValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthed, setIsAuthed] = useState(false)

  const value: AuthValue = {
    isAuthed,
    signIn: () => setIsAuthed(true),
    signOut: () => setIsAuthed(false),
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Custom hook so components can call useAuth() instead of importing the context.
export function useAuth(): AuthValue {
  const ctx = useContext(AuthContext)
  if (ctx === undefined) {
    throw new Error('useAuth must be used inside an AuthProvider')
  }
  return ctx
}
