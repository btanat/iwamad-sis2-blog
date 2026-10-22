// The landing page. Static content plus a link into the posts list.

import { Link } from 'react-router'
import { posts } from '../data/posts'

export default function Home() {
  return (
    <section>
      <h1>Welcome to Batyr&apos;s Blog</h1>
      <p>
        A small blog built with React, TypeScript and React Router for the IWaMAD
        SIS 2 project. There {posts.length === 1 ? 'is' : 'are'} currently{' '}
        {posts.length} posts.
      </p>
      <p>
        <Link className="read-more" to="/posts">
          Browse all posts →
        </Link>
      </p>
    </section>
  )
}
