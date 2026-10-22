// A single post's page at /posts/:id. useParams() gives the id from the URL as
// a STRING, so we convert it with Number() before comparing. If no post matches
// (for example /posts/999) we show a clear message instead of a blank page.
//
// This page also has a second piece of local state: a comment toggle built with
// useState, to show/hide the comments section without a reload.

import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { findPost } from '../data/posts'

export default function Post() {
  const { id } = useParams() // string | undefined
  const post = findPost(Number(id))

  const [showComments, setShowComments] = useState(false)

  // Handle a missing post (bad or non-existent id).
  if (!post) {
    return (
      <section>
        <h1>Post not found</h1>
        <p>There is no post with id “{id}”.</p>
        <p>
          <Link className="read-more" to="/posts">
            ← Back to all posts
          </Link>
        </p>
      </section>
    )
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p className="card-meta">
        {post.author} · {post.date} · {post.tags.join(', ')}
      </p>

      {post.body.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}

      <button className="like-btn" onClick={() => setShowComments(!showComments)}>
        {showComments ? 'Hide comments' : 'Show comments'}
      </button>

      {showComments && (
        <div className="comments">
          <p>💬 Comments are a demo of local state — they reset on refresh.</p>
        </div>
      )}

      <p style={{ marginTop: '1.5rem' }}>
        <Link className="read-more" to="/posts">
          ← Back to all posts
        </Link>
      </p>
    </article>
  )
}
