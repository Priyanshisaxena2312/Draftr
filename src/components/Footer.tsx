import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/#feature' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Download', href: '/#cta' },
]

const allPages = [
  { name: 'Power-Ups', href: '/power-ups', badge: 'New' },
  { name: 'About us', href: '/about' },
  { name: 'Contact us', href: '/contact' },
  { name: 'Blog', href: '/blog' },
  { name: 'Waitlist', href: '/waitlist' },
  { name: 'Changelog', href: '/changelog' },
  { name: 'Privacy Policy', href: '/legal-pages/privacy-policy' },
]

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/' },
  { icon: Twitter, href: 'https://www.x.com/' },
  { icon: Instagram, href: 'https://www.instagram.com/' },
  { icon: Linkedin, href: 'https://www.linkedin.com/' },
  { icon: Youtube, href: 'https://www.youtube.com/' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" opacity="0.9"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-white">Draftr</span>
            </a>

            <p className="mt-4 text-sm text-white/40">Follow us on:</p>
            <div className="flex items-center gap-3 mt-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-purple-500/20 hover:border-purple-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* All Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-white mb-4">All Pages</h3>
            <ul className="space-y-3">
              {allPages.map((link) => (
                <li key={link.name} className="flex items-center gap-2">
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                  {link.badge && (
                    <span className="px-1.5 py-0.5 text-[9px] font-semibold bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white">
                      {link.badge}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold text-white mb-4">Get Started</h3>
            <p className="text-sm text-white/50 mb-4">
              Create a free website with Framer, the website builder loved by startups, designers and agencies.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-violet-600 rounded-full btn-glow"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get it for FREE</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-sm text-white/30">
            Designed by{' '}
            <a href="https://www.webestica.com/" className="text-white/50 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              Webestica
            </a>
            , Powered by{' '}
            <a href="https://framer.com/" className="text-white/50 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              Framer
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
