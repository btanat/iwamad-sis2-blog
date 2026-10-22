// The posts list. It draws the typed posts array with .map() through the
// PostCard component, giving each card a stable key. Adding one object to the
// array adds one card here automatically.

import PostCard from '../components/PostCard'
import { posts } from '../data/posts'

export default function Posts() {
  return (
    <section>
      <h1>Posts</h1>
      <div className="post-list">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
