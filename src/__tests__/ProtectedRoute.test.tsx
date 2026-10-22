// Test 3: route protection. Signed out, visiting /dashboard must show the
// sign-in page instead. We start the MemoryRouter directly at /dashboard and
// render the real route table, so this exercises the actual guard.

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import App from '../App'
import { AuthProvider } from '../context/AuthContext'

describe('Protected route', () => {
  it('redirects a signed-out reader from /dashboard to the sign-in page', () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </MemoryRouter>,
    )

    // The guard redirects to /login, so the sign-in heading is shown and the
    // Dashboard heading is not.
    expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: /reader dashboard/i })).not.toBeInTheDocument()
  })

  it('shows the custom 404 page for an unknown URL', () => {
    render(
      <MemoryRouter initialEntries={['/banana']}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </MemoryRouter>,
    )
    expect(screen.getByRole('heading', { name: /404/i })).toBeInTheDocument()
  })
})
