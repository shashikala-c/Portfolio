import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navigation, portfolio } from '../data/portfolio.js'
import { useActiveSection } from '../hooks/useActiveSection.js'

const sectionIds = navigation.map(({ href }) => href.slice(1))

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds)
  const reduceMotion = useReducedMotion()

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#home" className="brand" aria-label={`${portfolio.name}, home`} onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">SC<span>.</span></span>
          <span className="brand-name">{portfolio.name}</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(({ label, href }) => {
            const isActive = activeSection === href.slice(1)
            return (
              <a
                key={href}
                href={href}
                className={`nav-link${isActive ? ' is-active' : ''}`}
                aria-current={isActive ? 'location' : undefined}
              >
                {label}
              </a>
            )
          })}
        </nav>

        <a className="header-contact" href="#contact">
          Let’s connect <ArrowUpRight size={14} />
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          >
            {navigation.map(({ label, href }) => {
              const isActive = activeSection === href.slice(1)
              return (
                <a
                  key={href}
                  href={href}
                  className={`mobile-nav-link${isActive ? ' is-active' : ''}`}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              )
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
