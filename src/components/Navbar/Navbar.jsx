import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../Logo'
import './Navbar.css'

const navLinks = [
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Changelog', path: '/changelog' },
  { label: 'Contact', path: '/contact' },
  { label: 'Power-Ups', path: '/power-ups' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <Logo size={28} />
          <span className="navbar__logo-text">Draftr</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__nav">
          {navLinks.map((link) =>
            link.path.startsWith('/') ? (
              <Link
                key={link.label}
                to={link.path}
                className={`navbar__link ${isActive(link.path) ? 'navbar__link--active' : ''}`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.path}
                className="navbar__link"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Login Button */}
        <a href="#" className="navbar__cta">
          Login now
        </a>

        {/* Mobile Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        <nav className="navbar__mobile-nav">
          {navLinks.map((link) =>
            link.path.startsWith('/') ? (
              <Link
                key={link.label}
                to={link.path}
                className="navbar__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.path}
                className="navbar__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
          <a href="#" className="navbar__mobile-cta">
            Login now
          </a>
        </nav>
      </div>
    </header>
  )
}
