import { MessageCircle, Phone, Mail, Send, Clock, Heart } from 'lucide-react'
import { COURSES, CONTACT } from '../data/courses'
import useScrollReveal from '../hooks/useScrollReveal'

function RevealSection({ children, className = '', delay = 0 }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={className} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

const CONTACT_METHODS = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '9748132517',
    description: 'The quickest way to reach me. Send a message anytime.',
    href: `${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.defaultWhatsappMessage)}`,
    cta: 'Open WhatsApp',
    color: 'bg-green-50 border-green-100',
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
    btnClass: 'bg-green-500 hover:bg-green-600 text-white',
    external: true,
  },
  {
    icon: Phone,
    label: 'Phone / Call',
    value: '+91 97481 32517',
    description: 'Prefer a call? You can reach me directly on this number.',
    href: CONTACT.phone,
    cta: 'Call Now',
    color: 'bg-blue-50 border-blue-100',
    iconColor: 'text-primary-600',
    iconBg: 'bg-primary-100',
    btnClass: 'bg-primary-600 hover:bg-primary-700 text-white',
    external: false,
  },
  {
    icon: Mail,
    label: 'Email',
    value: CONTACT.emailDisplay,
    description: 'For longer queries or introductions, feel free to send an email.',
    href: CONTACT.email,
    cta: 'Send Email',
    color: 'bg-slate-50 border-slate-200',
    iconColor: 'text-slate-600',
    iconBg: 'bg-slate-200',
    btnClass: 'bg-slate-700 hover:bg-slate-800 text-white',
    external: false,
  },
]

export default function Contact() {
  const waUrl = `${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.defaultWhatsappMessage)}`

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-white via-blue-50/30 to-white py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-2xl mb-6">
            <MessageCircle className="w-8 h-8 text-green-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">Get in Touch</h1>
          <p className="text-charcoal/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Have a question about a course? Want to discuss learning options? Or just want to say hello? Reach out — I'm easy to talk to.
          </p>
        </div>
      </section>

      {/* Contact methods */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {CONTACT_METHODS.map(({ icon: Icon, label, value, description, href, cta, color, iconColor, iconBg, btnClass, external }, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className={`card p-6 h-full border ${color}`}>
                  <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${iconColor}`} />
                  </div>
                  <h3 className="font-bold text-navy text-lg mb-1">{label}</h3>
                  <p className="text-primary-600 font-medium text-sm mb-3">{value}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{description}</p>
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className={`inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 font-semibold rounded-xl transition-all duration-200 text-sm shadow-sm ${btnClass}`}
                  >
                    <Send className="w-3.5 h-3.5" />
                    {cta}
                  </a>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* Course-specific WhatsApp links */}
          <RevealSection>
            <div className="bg-soft rounded-2xl border border-slate-100 p-8">
              <h2 className="text-xl font-bold text-navy mb-2">Enquire About a Specific Course</h2>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Tap any course below to open WhatsApp with a pre-filled message about that course.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COURSES.map((course) => {
                  const msg = encodeURIComponent(course.whatsappMessage)
                  return (
                    <a
                      key={course.slug}
                      href={`${CONTACT.whatsapp}?text=${msg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-slate-200 hover:border-green-300 hover:shadow-sm transition-all duration-200 group"
                    >
                      <MessageCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm font-medium text-charcoal group-hover:text-green-700 transition-colors">{course.title}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Info */}
      <section className="py-14 bg-soft">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <RevealSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="card p-6">
                <Clock className="w-6 h-6 text-primary-500 mb-3" />
                <h3 className="font-bold text-navy mb-2">Response Time</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  WhatsApp messages are usually replied to quickly. For calls, feel free to try at any reasonable hour.
                </p>
              </div>
              <div className="card p-6">
                <Heart className="w-6 h-6 text-red-400 mb-3" />
                <h3 className="font-bold text-navy mb-2">No Pressure</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Reaching out doesn't commit you to anything. Just say hello and let's talk about what you want to learn.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary-600">
        <RevealSection className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Start Learning?
          </h2>
          <p className="text-primary-100 mb-7 leading-relaxed">
            The first step is simple — just say hello.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-200 shadow-md text-base"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </RevealSection>
      </section>
    </div>
  )
}

