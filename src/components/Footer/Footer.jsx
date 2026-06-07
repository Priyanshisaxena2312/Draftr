import { Link, useLocation } from 'react-router-dom'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import Logo from '../Logo'
import './Footer.css'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Download', href: '#' },
]

const allPages = [
  { label: 'Power-Ups', href: '/power-ups', badge: 'New' },
  { label: 'About us', href: '/about' },
  { label: 'Contact us', href: '/contact' },
  { label: 'Blog', href: '/blog' },
  { label: 'Waitlist', href: '#' },
  { label: 'Changelog', href: '/changelog' },
  { label: 'Privacy Policy', href: '#' },
  { label: '404', href: '#' },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://www.x.com/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path
  const topRef = useScrollReveal({ threshold: 0.1 })
  const bottomRef = useScrollReveal()

  return (
    <footer className="footer">
      <div className="footer__inner container">
        {/* Top Section */}
        <div ref={topRef} className="footer__top reveal-up">
          {/* Logo + Social */}
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <Logo size={28} />
              <span className="footer__logo-text">Draftr</span>
            </a>

            <div className="footer__social">
              <p className="footer__social-label">Follow us on:</p>
              <div className="footer__social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="footer__social-link"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__column">
            <h4 className="footer__column-title">Quick Links</h4>
            <ul className="footer__links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link to={link.href} className={`footer__link ${isActive(link.href) ? 'footer__link--active' : ''}`}>
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="footer__link">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* All Pages */}
          <div className="footer__column">
            <h4 className="footer__column-title">All Pages</h4>
            <ul className="footer__links">
              {allPages.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className={`footer__link ${isActive(link.href) ? 'footer__link--active' : ''}`}
                    >
                      {link.label}
                      {link.badge && (
                        <span className="footer__badge">{link.badge}</span>
                      )}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="footer__link"
                    >
                      {link.label}
                      {link.badge && (
                        <span className="footer__badge">{link.badge}</span>
                      )}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider" />

        {/* Bottom */}
        <div ref={bottomRef} className="footer__bottom reveal-fade">
          <p className="footer__credits">
            Designed by <a href="https://www.webestica.com/" target="_blank" rel="noopener noreferrer" className="footer__credits-link">Webestica</a>, Powered by <a href="https://framer.com/" target="_blank" rel="noopener noreferrer" className="footer__credits-link">Framer</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
