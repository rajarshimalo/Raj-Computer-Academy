import { Link } from 'react-router-dom'
import { GraduationCap, MessageCircle, Phone, Mail, Heart } from 'lucide-react'
import { COURSES, CONTACT } from '../data/courses'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white mt-20 pb-20 md:pb-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Raj Computer Academy Logo"
                className="w-10 h-10 object-contain rounded-xl bg-white p-1 shadow-sm"
              />
              <div>
                <p className="font-bold text-lg leading-tight">Raj Computer</p>
                <p className="text-primary-400 text-sm leading-tight">Academy</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Making computer science, programming and artificial intelligence accessible, interesting and enjoyable for school students.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/courses', label: 'Courses' },
                { to: '/about', label: 'About Me' },
                { to: '/teaching-modes', label: 'Teaching Modes' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Courses</h3>
            <ul className="space-y-2">
              {COURSES.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/courses/${c.slug}`}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.defaultWhatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-green-400 text-sm transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  WhatsApp: 9748132517
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.phone}
                  className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.email}
                  className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {CONTACT.emailDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {year} Raj Computer Academy. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> for students
          </p>
        </div>
      </div>
    </footer>
  )
}

