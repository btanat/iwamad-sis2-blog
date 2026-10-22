// The route table. One layout route wraps every page so the header and footer
// are shared. The protected Dashboard sits behind ProtectedRoute, and the "*"
// route catches every unknown URL and shows the 404 page.

import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Post from './pages/Post'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<Post />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />

        {/* Protected area: ProtectedRoute checks auth before rendering Dashboard. */}
        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        {/* Catch-all: any unknown URL shows the custom 404 inside the layout. */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
