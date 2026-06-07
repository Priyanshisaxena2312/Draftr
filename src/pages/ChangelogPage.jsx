import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'
import './ChangelogPage.css'

const changelogData = [
  {
    version: 'Version 1.2.0',
    sections: [
      {
        heading: 'New Pages Added:',
        items: [
          'Power-Ups page: A collection of additional and alternative UI sections designed for when your website or message needs more flexibility. Includes 9 ready-to-use sections, with more coming soon.',
        ],
      },
      {
        heading: 'Improvements:',
        items: [
          'Homepage: Improved feature card animations for smoother interaction.',
        ],
      },
    ],
  },
  {
    version: 'Version 1.1.1',
    sections: [
      {
        heading: 'Added:',
        items: ['Figma file added'],
      },
    ],
  },
  {
    version: 'Version 1.1.0',
    sections: [
      {
        heading: 'New Pages Added:',
        items: [
          'Changelog page',
          'Waitlist page',
          'Privacy Policy (CMS)',
          'Blog (CMS)',
          'Blog Detail (CMS)',
        ],
      },
      {
        heading: 'Fixes:',
        items: [
          'Improved Contact Form button animation for smoother interaction',
        ],
      },
      {
        heading: 'Updates:',
        items: [
          'About Page: Added CTA in the team section',
          'Navbar: Updated links for better navigation',
          'Footer: Updated links and layout consistency',
          'Framer Components: Updated to the latest version for better performance',
        ],
      },
    ],
  },
  {
    version: 'Version 1.0.0',
    sections: [
      {
        heading: null,
        items: ['Initial release'],
      },
    ],
  },
]

export default function ChangelogPage() {
  const heroRef = useScrollReveal()
  const entriesRef = useStaggerReveal({ stagger: 200 })

  return (
    <div className="changelog">
      {/* Hero */}
      <section className="changelog-hero">
        <div className="changelog-hero__bg">
          <div ref={heroRef} className="changelog-hero__inner container reveal-up">
            <h1 className="changelog-hero__title">Draftr changelog</h1>
            <p className="changelog-hero__subtitle">
              Stay up to date with the <strong>latest improvements, fixes,</strong> and <strong>new features.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Changelog Entries */}
      <section className="changelog-entries">
        <div ref={entriesRef} className="changelog-entries__inner container">
          {changelogData.map((entry, i) => (
            <div key={i} className="changelog-entry reveal-child">
              <div className="changelog-entry__header">
                <h2 className="changelog-entry__version">{entry.version}</h2>
              </div>
              <div className="changelog-entry__body">
                {entry.sections.map((section, j) => (
                  <div key={j} className="changelog-section">
                    {section.heading && (
                      <h3 className="changelog-section__heading">{section.heading}</h3>
                    )}
                    <ul className="changelog-section__list">
                      {section.items.map((item, k) => (
                        <li key={k} className="changelog-section__item">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
