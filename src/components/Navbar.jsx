import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../config/site'
import Logo from './Logo'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const close = () => setIsOpen(false)

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0F]/80 backdrop-blur-lg py-3 border-b border-white/5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Logo />

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#cta"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF2D9B] to-[#8B3FFF] text-white text-sm font-semibold shadow-[0_0_20px_rgba(255,45,155,0.3)] hover:shadow-[0_0_30px_rgba(255,45,155,0.5)] transition-all"
          >
            Hubungi Kami
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0F]/95 backdrop-blur-lg border-t border-white/5 px-6 py-4 flex flex-col space-y-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={close}
              className="text-sm font-medium text-gray-300 hover:text-white py-3 border-b border-white/5 last:border-none transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={close}
            className="mt-3 py-3 text-center rounded-full bg-gradient-to-r from-[#FF2D9B] to-[#8B3FFF] text-white text-sm font-semibold"
          >
            Hubungi Kami
          </a>
        </div>
      )}
    </nav>
  )
}
