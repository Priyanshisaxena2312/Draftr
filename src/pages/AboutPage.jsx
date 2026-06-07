import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'
import './AboutPage.css'

const whyWeExist = [
  'Design is too complicated. We strip away unnecessary complexity.',
  'Workflow is too fragmented. We combine essential tools into one experience.',
  'Speed matters. We optimize for fast execution without compromising quality.',
  'Collaboration is non-negotiable. We make it seamless.',
  'Creativity thrives on constraints. We provide structure without stifling innovation.',
  'Tools should work for people—not the other way around. We design with empathy and clarity.',
]

const stats = [
  { value: '98%', label: 'Customer satisfaction score across all users' },
  { value: '12x', label: 'Faster design-to-launch time compared to traditional tools' },
  { value: '60+', label: 'Projects launched using Draftr' },
  { value: '85%', label: 'Teams that switched to Draftr now use it as their primary design tool' },
]

const logos = [
  { name: 'Logo 1', src: 'https://framerusercontent.com/images/VBINO0uPEBBtdnw2H556ai5y8.svg' },
  { name: 'Logo 2', src: 'https://framerusercontent.com/images/ammBtYeCqDQpQX01AIdTTAJIX0s.svg' },
  { name: 'Logo 3', src: 'https://framerusercontent.com/images/ev7o2fuywuHbshQIcSZ4Gj0vJs8.svg' },
  { name: 'Logo 4', src: 'https://framerusercontent.com/images/RdY39UphF55oveWjwUW7nUVG0A.svg' },
  { name: 'Logo 5', src: 'https://framerusercontent.com/images/qOnYNwclE4tZchSq2SGRZNe99A.svg' },
  { name: 'Logo 6', src: 'https://framerusercontent.com/images/tApNdViJOVngDYaNMdpLNMWrE.svg' },
  { name: 'Logo 7', src: 'https://framerusercontent.com/images/G2Zgz5YhqI9hCVQM2ZbkVjTyDc.svg' },
  { name: 'Logo 8', src: 'https://framerusercontent.com/images/DbetTKBspAjyP9DPnteU3FLeaHQ.svg' },
]

const team = [
  {
    name: 'Jane Lin',
    role: 'Co-Founder',
    image: 'https://framerusercontent.com/images/uHdnVRTHm13no6nk3Ipm2HuVs.jpg?scale-down-to=512',
  },
  {
    name: 'Sofia Mendes',
    role: 'Design Lead',
    image: 'https://framerusercontent.com/images/1d3VmmKfMjOwv8Gx0fb354Y80Q.jpg?scale-down-to=512',
  },
  {
    name: 'Liam Chen',
    role: 'Marketing & Growth',
    image: 'https://framerusercontent.com/images/sYlCdwHA9SQgqMmPglnHbNYKMtc.jpg?scale-down-to=512',
  },
  {
    name: 'Ethan Ross',
    role: 'Lead Engineer',
    image: 'https://framerusercontent.com/images/aUU2oWZTnGJSkZucLFR8TjVH50.jpg?scale-down-to=512',
  },
]

export default function AboutPage() {
  const heroImageRef = useScrollReveal()
  const missionRef = useScrollReveal()
  const whyVisualRef = useScrollReveal({ threshold: 0.2 })
  const whyContentRef = useScrollReveal({ threshold: 0.2 })
  const statsRef = useScrollReveal()
  const logosRef = useScrollReveal()
  const teamHeaderRef = useScrollReveal()
  const teamGridRef = useStaggerReveal({ stagger: 150 })
  const teamJoinRef = useScrollReveal()
  const ctaRef = useScrollReveal()

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__bg">
          <div className="about-hero__inner container">
            <h1 className="about-hero__title">
              Design isn't just what we do — it's how we think.
            </h1>
            <p className="about-hero__subtitle">
              At Draftr, we're <strong>building the next generation</strong> of design tools — <strong>simple, collaborative, and lightning fast.</strong> Our mission is to empower teams to move from idea to execution without friction.
            </p>
          </div>
        </div>
        <div ref={heroImageRef} className="about-hero__image-wrapper container reveal-scale">
          <img
            src="https://framerusercontent.com/images/wS6rtfG8W5jA7CMDfuRpk25jAvc.jpg?scale-down-to=1024&width=1400&height=700"
            alt="Draftr Team"
            className="about-hero__image"
          />
        </div>
      </section>

      {/* From Idea to Impact */}
      <section className="about-mission">
        <div ref={missionRef} className="about-mission__inner container reveal-up">
          <h2 className="about-mission__title">From Idea to Impact</h2>
          <div className="about-mission__text">
            <p>
              At Draftr, we're building the next generation of design tools — simple,
              collaborative, and lightning fast. Our mission is to empower teams to move from idea to
              execution without friction.
            </p>
            <p>
              Design is no longer just about aesthetics — it's about speed, clarity, and
              collaboration. At Draftr, we're redefining how design happens in modern teams. We
              believe that anyone with an idea should be able to bring it to life without getting
              lost in complexity.
            </p>
            <p>
              Born out of frustration with bloated, rigid design tools, Draftr was created to
              give creators a smarter, simpler way to design. Whether you're building an
              interface, presenting an idea, or refining a brand concept, Draftr is the space where
              clarity meets creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="about-why">
        <div className="about-why__inner container">
          <div className="about-why__grid">
            <div ref={whyVisualRef} className="about-why__visual reveal-left">
              <img
                src="https://framerusercontent.com/images/lMSZKDPhVBBllLKnGtf5WALEkoU.png?scale-down-to=1024&width=1600&height=995"
                alt="Draftr App Interface"
                className="about-why__image"
              />
            </div>
            <div ref={whyContentRef} className="about-why__content reveal-right">
              <h2 className="about-why__title">Why we exist</h2>
              <ul className="about-why__list">
                {whyWeExist.map((item, i) => (
                  <li key={i} className="about-why__item">
                    <span className="about-why__arrow">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="about-stats__inner container">
          <div ref={statsRef} className="about-stats__card reveal-scale">
            {stats.map((stat, i) => (
              <div key={i} className="about-stats__item">
                <span className="about-stats__value">{stat.value}</span>
                <p className="about-stats__label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="about-logos">
        <div className="about-logos__inner container">
          <div ref={logosRef} className="about-logos__track reveal-fade">
            {logos.map((logo, i) => (
              <img key={i} className="about-logos__item" src={logo.src} alt={logo.name} />
            ))}
            {/* Duplicate for seamless scroll */}
            {logos.map((logo, i) => (
              <img key={`dup-${i}`} className="about-logos__item" src={logo.src} alt={logo.name} />
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="about-team">
        <div className="about-team__inner container">
          <div ref={teamHeaderRef} className="reveal-up">
            <h2 className="about-team__title">Meet the team</h2>
            <p className="about-team__subtitle">
              At Draftr, we're a small but passionate team of designers and product
              thinkers who believe that great tools create great outcomes.
            </p>
          </div>
          <div ref={teamGridRef} className="about-team__grid">
            {team.map((member, i) => (
              <div key={i} className="about-team__card reveal-child">
                <div className="about-team__photo">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3 className="about-team__name">{member.name}</h3>
                <p className="about-team__role">{member.role}</p>
                <div className="about-team__socials">
                  <a href="#" aria-label="Facebook">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="#" aria-label="Instagram">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  <a href="#" aria-label="X">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Join us CTA */}
          <div ref={teamJoinRef} className="about-team__join reveal-up">
            <p className="about-team__join-text">
              Join us in building tools that make teamwork faster, clearer, and more connected.
            </p>
            <a href="https://www.framer.com/careers/" className="about-team__join-btn" target="_blank" rel="noopener noreferrer">
              Open positions
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div ref={ctaRef} className="about-cta__inner container reveal-up">
          <h2 className="about-cta__title">
            Take your creative workflow<br />to the next level
          </h2>
          <p className="about-cta__subtitle">
            Supercharge your workflow with powerful design tools and effortless
            collaboration—perfect for freelancers and teams.
          </p>
          <div className="about-cta__actions">
            <a href="/contact" className="about-cta__btn">Get Started</a>
            <a href="https://www.microsoft.com/" className="about-cta__platform" aria-label="Windows">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>
            </a>
            <a href="https://www.apple.com/" className="about-cta__platform" aria-label="Mac">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
