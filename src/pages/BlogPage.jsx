import { useState } from 'react'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'
import './BlogPage.css'

const blogPosts = [
  {
    title: 'Best practices for showcasing features',
    date: 'Oct 13, 2025',
    slug: 'best-practices-for-showcasing-features',
    image: 'https://framerusercontent.com/images/UpYdm4GAhAy4TlREwNzfPP24MN0.jpg?scale-down-to=1024&width=1400&height=800',
  },
  {
    title: 'Visual storytelling for complex products',
    date: 'Oct 13, 2025',
    slug: 'visual-storytelling-for-complex-products',
    image: 'https://framerusercontent.com/images/1gLOXwPPBbxglRm25gwjVIQNHt4.jpg?scale-down-to=1024&width=1400&height=800',
  },
  {
    title: 'How microinteractions boost user experience',
    date: 'Oct 13, 2025',
    slug: 'how-microinteractions-boost-user-experience',
    image: 'https://framerusercontent.com/images/F2C5Yf6CwPlnsYAlalA7lI2lbiQ.jpg?scale-down-to=1024&width=1400&height=800',
  },
  {
    title: 'Why performance and accessibility matter',
    date: 'Oct 13, 2025',
    slug: 'why-performance-and-accessibility-matter',
    image: 'https://framerusercontent.com/images/9rMiHqwr31qAGJB54MqJ6eNM4.jpg?scale-down-to=1024&width=1400&height=800',
  },
  {
    title: 'From idea to launch: SaaS UI/UX guide',
    date: 'Oct 13, 2025',
    slug: 'from-idea-to-launch-saas-ui-ux-guide',
    image: 'https://framerusercontent.com/images/zfKj6bOFq5JiU7zl0geDsGQ82pY.jpg?scale-down-to=1024&width=1400&height=800',
  },
  {
    title: 'Simplifying user journeys for more signups',
    date: 'Oct 13, 2025',
    slug: 'simplifying-user-journeys-for-more-signups',
    image: 'https://framerusercontent.com/images/IIjQuVoM5lwsVUtCbk8zUUPRX4.jpg?scale-down-to=1024&width=1400&height=800',
  },
]

function BlogCard({ post, className = '' }) {
  return (
    <a href={`/blog/${post.slug}`} className={`blog-card ${className}`}>
      <div className="blog-card__image">
        <img src={post.image} alt={post.title} className="blog-card__img" />
      </div>
      <div className="blog-card__content">
        <span className="blog-card__date">{post.date}</span>
        <h3 className="blog-card__title">{post.title}</h3>
      </div>
    </a>
  )
}

export default function BlogPage() {
  const [visibleCount, setVisibleCount] = useState(6)
  const heroRef = useScrollReveal()
  const gridRef = useStaggerReveal({ stagger: 100 })
  const loadMoreRef = useScrollReveal()

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3)
  }

  return (
    <div className="blog">
      {/* Hero */}
      <section className="blog-hero">
        <div className="blog-hero__bg">
          <div ref={heroRef} className="blog-hero__inner container reveal-up">
            <h1 className="blog-hero__title">SaaS insights & tips</h1>
            <p className="blog-hero__subtitle">
              Practical ideas and trends to help your software brand grow and stand out.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid">
        <div className="blog-grid__inner container">
          <div ref={gridRef} className="blog-grid__cards">
            {blogPosts.slice(0, visibleCount).map((post, i) => (
              <BlogCard key={i} post={post} className="reveal-child" />
            ))}
          </div>

          {visibleCount < blogPosts.length && (
            <div ref={loadMoreRef} className="blog-grid__load-more reveal-up">
              <button className="blog-grid__btn" onClick={handleLoadMore}>
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
