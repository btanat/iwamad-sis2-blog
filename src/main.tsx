import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext'

// BrowserRouter provides routing to the whole app. basename uses Vite's BASE_URL
// so the same code works locally ("/") and on GitHub Pages ("/iwamad-sis2-blog/").
// AuthProvider makes the sign-in state available to every page.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
