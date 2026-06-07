import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'
import './PowerUpsPage.css'

const comparisonData = [
  { feature: 'All-in-one workspace', draftr: true, others: 'partial' },
  { feature: 'Real-time collaboration', draftr: true, others: 'partial' },
  { feature: 'Built-in prototyping', draftr: true, others: true },
  { feature: 'Easy setup', draftr: true, others: false },
  { feature: 'Clean handoff', draftr: true, others: false },
  { feature: 'No plugin dependency', draftr: true, others: false },
  { feature: 'Simple, focused interface', draftr: true, others: false },
]

const steps = [
  {
    number: '01',
    title: 'Start your project',
    desc: 'Create a new design or import files with just a click. Set up your workspace effortlessly.',
    dark: true,
  },
  {
    number: '02',
    title: 'Design with ease',
    desc: 'Use our intuitive drag-and-drop editor, smart tools stunning designs.effortlessly.',
    dark: false,
  },
  {
    number: '03',
    title: 'Export & Share',
    desc: 'Easily integrate with your favorite tools to launch your project effortlessly.',
    dark: false,
  },
]

const features = [
  {
    title: 'Auto layout',
    desc: 'Spacing and alignment automatically adapt as content changes, ensuring layouts remain clean, consistent, and visually balanced without any manual adjustments.',
    image: 'https://framerusercontent.com/images/a10UODxItFxwYQcTXzFTruDZTCY.jpg?width=800&height=613',
    featureImage: 'https://framerusercontent.com/images/tmsYe1GrZozzSnn0do1Qdafeg.png?width=690&height=734',
  },
  {
    title: 'Version history',
    desc: 'Compare versions, restore past work, and clearly understand what changed without guessing.',
    image: 'https://framerusercontent.com/images/Z4UjUYnq7wBPqe9wISSWbuYqI.jpg?width=800&height=481',
    featureImage: 'https://framerusercontent.com/images/jfoEHjxJaOTGzCAvLUO0gZ3mYk.png?width=956&height=542',
  },
  {
    title: 'Reusable components',
    desc: 'Create shared components and keep designs consistent across projects automatically.',
    image: 'https://framerusercontent.com/images/cTMt9sGO8qONQhB2Wq9cujkXCk.jpg?scale-down-to=1024&width=1200&height=669',
    featureImage: 'https://framerusercontent.com/images/9n3veC1kb3MloDurktz13UHuA0.png?scale-down-to=1024&width=1536&height=802',
    bullets: [
      '1 update syncs across all screens',
      'Up to 40% faster UI updates',
      'Fewer layout inconsistencies as designs scale',
    ],
  },
  {
    title: 'Developer handoff',
    desc: 'Share complete design details, assets, and layout structure so developers can build accurately without unnecessary back-and-forth.',
    image: 'https://framerusercontent.com/images/3IBeYkfb1yVerABW2MPzjR3aW0.jpg?width=800&height=480',
    featureImage: 'https://framerusercontent.com/images/GDQRImJTRL8jXilxZtXx1qPlgA.png?width=969&height=622',
  },
  {
    title: 'Team permissions',
    desc: 'Control who can view, edit, or review work with clear permissions that keep collaboration simple and efficient across teams.',
    image: 'https://framerusercontent.com/images/Pu3Gy5nfAVtqFULtw2Zg5ybNY4s.jpg?width=736&height=395',
    featureImage: 'https://framerusercontent.com/images/fFohMSzQR2E3vZwFiKxtG9XQ1QQ.png?width=507&height=500',
  },
]

const aiFeatures = [
  { title: 'Auto spacing', desc: 'Detects uneven gaps and adjusts spacing to keep layouts clean and balanced.' },
  { title: 'Smart conversion', desc: 'Turns static frames into structured Auto Layout without breaking your design.' },
  { title: 'Consistent layouts', desc: 'Keeps alignment and structure consistent across screens as content changes.' },
  { title: 'Workflow friendly', desc: 'Assists when needed and stays out of the way when you don\'t.' },
]

const testimonials = [
  { name: 'Maya Zong', role: 'Product Designer, Pixio', text: 'We spend less time fixing layouts 🚀 and more time shipping.', avatar: 'https://framerusercontent.com/images/hYfCvJ3IVdEznEOwIQiiAxWOsPY.jpg?width=150&height=150' },
  { name: 'Ethan Miller', role: 'UI Designer, Bright', text: 'Handoff is clear and predictable now. Developers don\'t have to guess spacing or styles anymore. Real-time collaboration made reviews smoother and faster.', avatar: 'https://framerusercontent.com/images/X0ECJ5xGgYrCVgHB8RYd3RABTQ.jpg?width=150&height=150' },
  { name: 'Hannah Lee', role: 'UI Designer, Novaa', text: 'Version history gives us confidence to experiment without fear.', avatar: 'https://framerusercontent.com/images/rCI59ZX0ZR56eQvkNscJuMxvaKE.jpg?width=150&height=150' },
  { name: 'Daniel Perez', role: 'Frontend Developer, Coden', text: 'Auto Layout saved us a lot of cleanup time. Layout changes finally behave the way you expect.', avatar: 'https://framerusercontent.com/images/dujzU5kSm2vU1NuhwLmE5qacAt8.jpg?width=150&height=150' },
  { name: 'Laura Kim', role: 'Engineering Lead, Flow', text: 'Draftr feels focused 🎯 no clutter.', avatar: 'https://framerusercontent.com/images/qGUi2X5PZI5zMmaPEt895svrgN8.jpg?width=150&height=150' },
  { name: 'Priya Shah', role: 'Product Manager, Workly', text: 'Everything lives in one place now. That alone changed how we work.', avatar: 'https://framerusercontent.com/images/Ky2gFmrngrPCGRkq3vmMLs9NGbg.jpg?width=150&height=150' },
  { name: 'Andre Lewis', role: 'Operations Lead, Teamly', text: 'Permissions are simple and easy to manage, even with a growing team', avatar: 'https://framerusercontent.com/images/UQK9nK25dDlqFXJ6Cb5LrZik.jpg?width=150&height=150' },
  { name: 'Kevin Brooks', role: 'Startup Founder, Launch', text: 'We reduced tool switching and that alone made the team faster.', avatar: 'https://framerusercontent.com/images/1d3VmmKfMjOwv8Gx0fb354Y80Q.jpg?width=150&height=150' },
  { name: 'Sofia Martinez', role: 'Product Manager, Collab', text: 'Real-time collaboration made reviews smoother and faster.', avatar: 'https://framerusercontent.com/images/mk21gOTOdvfX5KnyLebdCmKJ62c.jpg?width=150&height=150' },
]

const workflowBullets = [
  'Replace multiple design tools with one focused platform',
  'Reduce review cycles and feedback delays',
  'Keep design, prototyping, and delivery aligned',
  'Scale smoothly from solo work to team collaboration',
]

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="#1a1a1a" />
      <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PartialIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="#6b7280" />
      <path d="M6 10H14" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="#6b7280" />
      <path d="M7 7L13 13M13 7L7 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function PowerUpsPage() {
  const heroRef = useScrollReveal()
  const altHeroContentRef = useScrollReveal()
  const altHeroVisualRef = useScrollReveal({ threshold: 0.2 })
  const compareRef = useScrollReveal()
  const bannerRef = useScrollReveal()
  const howRef = useScrollReveal()
  const howMockupRef = useScrollReveal()
  const howStepsRef = useStaggerReveal({ stagger: 150 })
  const toolkitRef = useScrollReveal()
  const toolkitGridRef = useStaggerReveal({ stagger: 120 })
  const aiRef = useScrollReveal()
  const reviewsHeaderRef = useScrollReveal()
  const reviewsGridRef = useStaggerReveal({ stagger: 80 })
  const workflowsRef = useScrollReveal()

  return (
    <div className="powerups">
      {/* Hero */}
      <section className="powerups-hero">
        <div ref={heroRef} className="powerups-hero__inner container reveal-up">
          <div className="powerups-hero__icon">
            <img src="https://framerusercontent.com/images/vxKH5mtutc3UqhMLKDfzHaJ0Txo.svg" alt="Power-Ups" width="40" height="40" />
          </div>
          <h1 className="powerups-hero__title">Power-Ups</h1>
          <p className="powerups-hero__subtitle">
            This is not another homepage. These are additional and alternative
            sections designed for when your website or message needs more flexibility.
          </p>
          <p className="powerups-hero__desc">
            Copy any section, paste it into your page, and customize it as needed. Add only
            what supports your goal. Skip the rest. Nothing breaks the original structure.
            Need more sections? <a href="#" className="powerups-hero__link">Request them here</a>.
          </p>
        </div>
      </section>

      {/* Alt Hero - Build designs without friction */}
      <section className="powerups-alt-hero">
        <div className="powerups-alt-hero__bg">
          <div className="powerups-alt-hero__inner container">
            <div ref={altHeroContentRef} className="powerups-alt-hero__content reveal-left">
              <div className="powerups-alt-hero__badge">
                <span className="powerups-alt-hero__badge-new">New</span>
                <span>Revolutionize your design workflow</span>
              </div>
              <h2 className="powerups-alt-hero__title">
                Build designs<br />without friction.
              </h2>
              <p className="powerups-alt-hero__text">
                Work faster with <strong>real-time collaboration, smart tools</strong>, and a
                <strong> clean interface</strong> that removes extra steps from your workflow.
              </p>
              <div className="powerups-alt-hero__actions">
                <a href="/contact" className="powerups-alt-hero__cta">
                  Get Started • it's free
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                <a href="#" className="powerups-alt-hero__demo">Watch a 2-min demo</a>
              </div>
              <div className="powerups-alt-hero__meta">
                <div className="powerups-alt-hero__platforms">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" /></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                  <span>Available on Windows & Mac</span>
                </div>
                <div className="powerups-alt-hero__rating">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  <span>4.6/5 stars</span>
                </div>
              </div>
            </div>
            <div ref={altHeroVisualRef} className="powerups-alt-hero__visual reveal-right">
              <div className="powerups-alt-hero__mockup">
                <img src="https://framerusercontent.com/images/eKS0KEkPf4QiU3IiHORWYygVUI.jpg?scale-down-to=1024&width=2400&height=1900" alt="Draftr app" className="powerups-alt-hero__mockup-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="powerups-compare">
        <div ref={compareRef} className="powerups-compare__inner container reveal-up">
          <h2 className="powerups-compare__title">Built to replace tool stacks</h2>
          <div className="powerups-compare__table">
            <div className="powerups-compare__header">
              <span className="powerups-compare__header-feature"></span>
              <span className="powerups-compare__header-draftr">
                <img src="https://framerusercontent.com/images/k1nDp5coKhmkbZjPAmSKhLZETA.svg" alt="Draftr" width="16" height="14" />
                Draftr
              </span>
              <span className="powerups-compare__header-others">Others</span>
            </div>
            {comparisonData.map((row, i) => (
              <div key={i} className={`powerups-compare__row ${i % 2 === 0 ? 'powerups-compare__row--shaded' : ''}`}>
                <span className="powerups-compare__feature">{row.feature}</span>
                <span className="powerups-compare__check">
                  {row.draftr && <CheckIcon />}
                </span>
                <span className="powerups-compare__check">
                  {row.others === true && <CheckIcon />}
                  {row.others === 'partial' && <PartialIcon />}
                  {row.others === false && <CrossIcon />}
                </span>
              </div>
            ))}
          </div>
          <blockquote className="powerups-compare__quote">
            <p>"We built Draftr to remove friction. Fewer tools, clearer workflows, faster decisions."</p>
            <div className="powerups-compare__quote-author">
              <img src="https://framerusercontent.com/images/X0ECJ5xGgYrCVgHB8RYd3RABTQ.jpg?width=150&height=150" alt="Ethan Walker" className="powerups-compare__quote-avatar" />
              <cite>Ethan Walker, CEO & Founder</cite>
            </div>
          </blockquote>
        </div>
      </section>

      {/* New Feature Banner */}
      <section className="powerups-banner">
        <div className="powerups-banner__inner container">
          <div ref={bannerRef} className="powerups-banner__card reveal-scale">
            <div className="powerups-banner__content">
              <span className="powerups-banner__badge">New Feature</span>
              <p className="powerups-banner__text">
                Auto layout is here, along with improvements to alignment and structure.
              </p>
              <a href="#" className="powerups-banner__btn">Explore auto layout</a>
            </div>
            <div className="powerups-banner__visual">
              <img src="https://framerusercontent.com/images/zsnMrky5RRWawpymSDWmg3T1JE8.jpg?scale-down-to=1024&width=1600&height=929" alt="Auto layout feature" className="powerups-banner__img" />
            </div>
          </div>
        </div>
      </section>

      {/* How Draftr Works */}
      <section className="powerups-how">
        <div className="powerups-how__inner container">
          <h2 ref={howRef} className="powerups-how__title reveal-up">How draftr works</h2>
          <p className="powerups-how__subtitle">
            See how Draftr helps teams create, collaborate, and ship in one smooth flow.
          </p>
          <div ref={howMockupRef} className="powerups-how__mockup reveal-scale">
            <img src="https://framerusercontent.com/images/QldZ1mcX8m1CmIJHG2aYu2t3pU.jpg?width=2400&height=1160" alt="How Draftr works" className="powerups-how__mockup-img" />
          </div>
          <div ref={howStepsRef} className="powerups-how__steps">
            {steps.map((step, i) => (
              <div key={i} className={`powerups-how__step reveal-child ${step.dark ? 'powerups-how__step--dark' : ''}`}>
                <span className="powerups-how__step-number">{step.number}</span>
                <h3 className="powerups-how__step-title">{step.title}</h3>
                <p className="powerups-how__step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ultimate Toolkit */}
      <section className="powerups-toolkit">
        <div className="powerups-toolkit__inner container">
          <h2 ref={toolkitRef} className="powerups-toolkit__title reveal-up">
            The ultimate toolkit<br />for designers & teams
          </h2>
          <p className="powerups-toolkit__subtitle">
            Everything you need to create, prototype, and collaborate—all in a single, easy-to-use platform.
          </p>
          <div ref={toolkitGridRef} className="powerups-toolkit__grid">
            {features.map((feature, i) => (
              <div key={i} className="powerups-toolkit__card reveal-child">
                <div className="powerups-toolkit__card-visual">
                  <img src={feature.image} alt={feature.title} className="powerups-toolkit__card-bg" />
                  {feature.featureImage && (
                    <img src={feature.featureImage} alt={`${feature.title} feature`} className="powerups-toolkit__card-overlay" />
                  )}
                </div>
                <h3 className="powerups-toolkit__card-title">{feature.title}</h3>
                <p className="powerups-toolkit__card-desc">{feature.desc}</p>
                {feature.bullets && (
                  <ul className="powerups-toolkit__card-bullets">
                    {feature.bullets.map((b, j) => (
                      <li key={j}>
                        <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M5 10L9 14L15 6" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Layout Optimizer */}
      <section className="powerups-ai">
        <div ref={aiRef} className="powerups-ai__inner container reveal-up">
          <div className="powerups-ai__badge">
            <span className="powerups-ai__badge-new">New</span>
            <span>AI-powered assistance</span>
          </div>
          <h2 className="powerups-ai__title">AI Layout optimizer</h2>
          <p className="powerups-ai__subtitle">
            Automatically clean spacing, alignment, and structure as designs
            evolve, keeping layouts consistent without manual rework.
          </p>
          <div className="powerups-ai__grid">
            <div className="powerups-ai__features-left">
              {aiFeatures.slice(0, 2).map((f, i) => (
                <div key={i} className="powerups-ai__feature">
                  <div className="powerups-ai__feature-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" /><circle cx="10" cy="10" r="3" fill="currentColor" /></svg>
                  </div>
                  <h4 className="powerups-ai__feature-title">{f.title}</h4>
                  <p className="powerups-ai__feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="powerups-ai__visual">
              <img src="https://framerusercontent.com/images/1glwHhZyC5rxTa4iIePhgoI30fs.png?scale-down-to=1024&width=2400&height=1780" alt="AI Layout optimizer" className="powerups-ai__visual-img" />
            </div>
            <div className="powerups-ai__features-right">
              {aiFeatures.slice(2).map((f, i) => (
                <div key={i} className="powerups-ai__feature">
                  <div className="powerups-ai__feature-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" /><circle cx="10" cy="10" r="3" fill="currentColor" /></svg>
                  </div>
                  <h4 className="powerups-ai__feature-title">{f.title}</h4>
                  <p className="powerups-ai__feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="powerups-ai__tagline">Clean layouts by default, not by constant fixing.</p>
          <a href="/contact" className="powerups-ai__cta">See AI layout optimizer in action</a>
        </div>
      </section>

      {/* Designed for Real Team Workflows - Testimonials */}
      <section className="powerups-reviews">
        <div className="powerups-reviews__inner container">
          <div ref={reviewsHeaderRef} className="powerups-reviews__header reveal-up">
            <h2 className="powerups-reviews__title">
              Designed for real<br />team workflows
            </h2>
            <div className="powerups-reviews__rating">
              <div className="powerups-reviews__rating-score">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#f59e0b"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                <span className="powerups-reviews__rating-number">4.8</span>
                <span className="powerups-reviews__rating-total">/5.0</span>
              </div>
              <p className="powerups-reviews__rating-label">Review by 356 users worldwide</p>
            </div>
          </div>
          <div ref={reviewsGridRef} className="powerups-reviews__grid">
            {testimonials.map((t, i) => (
              <div key={i} className="powerups-reviews__card reveal-child">
                <div className="powerups-reviews__card-header">
                  <img className="powerups-reviews__avatar" src={t.avatar} alt={t.name} />
                  <div>
                    <p className="powerups-reviews__name">{t.name}</p>
                    <p className="powerups-reviews__role">{t.role}</p>
                  </div>
                </div>
                <p className="powerups-reviews__text">{t.text}</p>
              </div>
            ))}
          </div>
          <div className="powerups-reviews__view-all">
            <a href="#" className="powerups-reviews__view-all-btn">View all Reviews</a>
          </div>
        </div>
      </section>

      {/* Built for Modern Design Workflows */}
      <section className="powerups-workflows">
        <div className="powerups-workflows__inner container">
          <div ref={workflowsRef} className="powerups-workflows__grid reveal-up">
            <div className="powerups-workflows__mockup">
              <img src="https://framerusercontent.com/images/xjOkuvgkbtBrlVO8Tx5kdM6Zw.jpg?scale-down-to=1024&width=2000&height=1359" alt="Draftr workflow" className="powerups-workflows__device-img" />
            </div>
            <div className="powerups-workflows__content">
              <h2 className="powerups-workflows__title">Built for modern design workflows</h2>
              <ul className="powerups-workflows__list">
                {workflowBullets.map((item, i) => (
                  <li key={i} className="powerups-workflows__item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8H12M12 8L9 5M12 8L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="powerups-workflows__actions">
                <a href="/contact" className="powerups-workflows__cta">See it in action</a>
                <div className="powerups-workflows__avatars">
                  <div className="powerups-workflows__avatar-stack">
                    <img src="https://framerusercontent.com/images/mk21gOTOdvfX5KnyLebdCmKJ62c.jpg?width=64&height=64" alt="Avatar" />
                    <img src="https://framerusercontent.com/images/rCI59ZX0ZR56eQvkNscJuMxvaKE.jpg?width=63&height=63" alt="Avatar" />
                    <img src="https://framerusercontent.com/images/dujzU5kSm2vU1NuhwLmE5qacAt8.jpg?width=63&height=63" alt="Avatar" />
                    <img src="https://framerusercontent.com/images/Ky2gFmrngrPCGRkq3vmMLs9NGbg.jpg?width=63&height=63" alt="Avatar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
