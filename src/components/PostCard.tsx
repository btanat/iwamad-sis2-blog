// One card in the posts list. Its props are typed (it receives a Post), and it
// owns a small piece of local state: the like count. Because every card has its
// own useState, liking one card does not change any other card.

import { useState } from 'react'
import { Link } from 'react-router'
import type { Post } from '../data/posts'

export default function PostCard({ post }: { post: Post }) {
  const [likes, setLikes] = useState(0)

  return (
    <article className="card">
      <h3 className="card-title">
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h3>
      <p className="card-meta">
        {post.author} · {post.date}
      </p>
      <p className="card-summary">{post.summary}</p>

      <div className="card-footer">
        <button className="like-btn" onClick={() => setLikes(likes + 1)}>
          ♥ Like ({likes})
        </button>
        <Link className="read-more" to={`/posts/${post.id}`}>
          Read more →
        </Link>
      </div>
    </article>
  )
}
