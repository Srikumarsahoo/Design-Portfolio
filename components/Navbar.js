'use client'
import { useState, useEffect } from 'react'
import { config } from '../config/portfolio'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['About', 'Work', 'Process', 'Testimonials', 'Contact']

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-glass py-3' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-[17px] font-semibold tracking-tight text-[#0d0d0d] hover:opacity-70 transition-opacity">
          {config.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[14px] text-[#555] font-medium hover:text-[#0d0d0d] transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href={`mailto:${config.email}`} className="btn-dark text-[13px] px-5 py-2.5">
            Get In Touch →
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 mobile-menu p-5">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[15px] font-medium py-1 border-b border-[#f0f0ea]"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a href={`mailto:${config.email}`} className="btn-dark text-center mt-2">
              Get In Touch →
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
