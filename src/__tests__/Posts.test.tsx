// Test 1: the posts list renders exactly one card per post in the data array.
// Test 2: clicking a card's like button increments only that card.

import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import Posts from '../pages/Posts'
import { posts } from '../data/posts'

function renderPosts() {
  // Posts contains <Link>s, so it must render inside a router.
  return render(
    <MemoryRouter>
      <Posts />
    </MemoryRouter>,
  )
}

describe('Posts list', () => {
  it('renders one card per post in the data array', () => {
    renderPosts()
    // Each PostCard renders the post title as a heading.
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(posts.length)
  })

  it('like button increments only the card that was clicked', async () => {
    const user = userEvent.setup()
    renderPosts()

    const likeButtons = screen.getAllByRole('button', { name: /like/i })
    expect(likeButtons[0]).toHaveTextContent('Like (0)')
    expect(likeButtons[1]).toHaveTextContent('Like (0)')

    // Click the first card's like button once.
    await user.click(likeButtons[0])

    // Only the first card changed; the second stayed at 0.
    expect(likeButtons[0]).toHaveTextContent('Like (1)')
    expect(likeButtons[1]).toHaveTextContent('Like (0)')
  })
})

describe('PostCard links', () => {
  it('links each card to its own post page', () => {
    renderPosts()
    const firstCard = screen.getAllByRole('article')[0]
    const link = within(firstCard).getByRole('link', { name: /read more/i })
    expect(link).toHaveAttribute('href', `/posts/${posts[0].id}`)
  })
})
