import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, GraduationCap } from 'lucide-react'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/about', label: 'About Me' },
  { to: '/teaching-modes', label: 'Teaching Modes' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Raj Computer Academy Logo"
              className="w-10 h-10 object-contain rounded-xl shadow-sm"
            />
            <div className="hidden sm:block">
              <span className="font-bold text-navy text-base leading-tight block">Raj Computer</span>
              <span className="text-primary-600 text-xs font-medium leading-tight block">Academy</span>
            </div>
            <span className="sm:hidden font-bold text-navy text-base">Raj Computer Academy</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-charcoal hover:text-primary-600 hover:bg-slate-50'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="https://wa.me/919748132517?text=Hello%20Raj%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20computer%20science%20courses."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-xl hover:bg-green-600 transition-all duration-200 shadow-sm"
            >
              WhatsApp
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-charcoal hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-slate-100 px-4 py-3 space-y-1 shadow-lg">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-charcoal hover:text-primary-600 hover:bg-slate-50'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="pt-2 pb-1">
            <a
              href="https://wa.me/919748132517?text=Hello%20Raj%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20computer%20science%20courses."
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-4 py-3 bg-green-500 text-white text-sm font-semibold rounded-xl hover:bg-green-600 transition-all duration-200"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

