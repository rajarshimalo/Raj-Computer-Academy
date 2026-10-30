import { Link } from 'react-router-dom'
import {
  Monitor, MapPin, CheckCircle2, MessageCircle, Phone,
  Wifi, Clock, Users, Home as HomeIcon, ArrowRight,
} from 'lucide-react'
import { CONTACT } from '../data/courses'
import useScrollReveal from '../hooks/useScrollReveal'

function RevealSection({ children, className = '', delay = 0 }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={className} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

const ONLINE_FEATURES = [
  { icon: Wifi, label: 'Live interactive sessions via video call' },
  { icon: Monitor, label: 'Learn from any device — laptop, tablet or phone' },
  { icon: HomeIcon, label: 'Study from the comfort of your home' },
  { icon: Clock, label: 'Flexible scheduling around your routine' },
  { icon: MessageCircle, label: 'Ask questions freely during sessions' },
  { icon: Users, label: 'Personal one-on-one attention' },
]

const OFFLINE_FEATURES = [
  { icon: HomeIcon, label: 'Classes conducted at the student\'s home' },
  { icon: Users, label: 'Face-to-face, personalised learning' },
  { icon: Clock, label: 'Sessions scheduled at your convenience' },
  { icon: CheckCircle2, label: 'Hands-on help with practical exercises' },
  { icon: MessageCircle, label: 'Immediate doubt clearing during class' },
  { icon: ArrowRight, label: 'Learn at your own pace' },
]

const FAQ = [
  {
    q: 'Which mode is better for me?',
    a: 'Both modes provide the same quality of teaching and personal attention. Online is great for convenience and flexibility. Offline home tuition is ideal if you prefer face-to-face interaction.',
  },
  {
    q: 'Do I need special software for online classes?',
    a: 'No special software is required. A stable internet connection and any device (laptop, tablet or smartphone) is sufficient.',
  },
  {
    q: 'Can I switch between online and offline?',
    a: 'Yes, you can discuss this when you reach out. Flexibility is always considered.',
  },
  {
    q: 'Are group classes available?',
    a: 'Currently, sessions are conducted individually (one student at a time). Group batches may be introduced in the future.',
  },
  {
    q: 'What areas are covered for offline home tuition?',
    a: 'Please reach out via WhatsApp or phone to discuss whether your location is feasible for offline sessions.',
  },
]

export default function TeachingModes() {
  const waUrl = `${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.defaultWhatsappMessage)}`

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-white via-blue-50/30 to-white py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">How We Learn Together</span>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">Teaching Modes</h1>
          <p className="text-charcoal/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Two flexible ways to learn — both offering the same friendly, personalised teaching. Choose what works best for you.
          </p>
        </div>
      </section>

      {/* Modes */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Online */}
            <RevealSection>
              <div className="card p-8 h-full border-2 border-primary-100">
                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Monitor className="w-8 h-8 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-navy mb-2">Online Classes</h2>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Learn from the comfort of your home through live online sessions. All you need is a device and an internet connection — no travel required.
                </p>
                <ul className="space-y-3 mb-8">
                  {ONLINE_FEATURES.map(({ icon: Icon, label }, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-charcoal">
                      <div className="w-7 h-7 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3.5 h-3.5 text-primary-600" />
                      </div>
                      {label}
                    </li>
                  ))}
                </ul>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full justify-center">
                  <MessageCircle className="w-4 h-4" />
                  Enquire About Online Classes
                </a>
              </div>
            </RevealSection>

            {/* Offline */}
            <RevealSection delay={100}>
              <div className="card p-8 h-full border-2 border-orange-100">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <MapPin className="w-8 h-8 text-orange-500" />
                </div>
                <h2 className="text-2xl font-bold text-navy mb-2">Offline Home Tuition</h2>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Personalised, face-to-face learning conducted at the student's home. Ideal for students who prefer direct, in-person guidance.
                </p>
                <ul className="space-y-3 mb-8">
                  {OFFLINE_FEATURES.map(({ icon: Icon, label }, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-charcoal">
                      <div className="w-7 h-7 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3.5 h-3.5 text-orange-500" />
                      </div>
                      {label}
                    </li>
                  ))}
                </ul>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full justify-center">
                  <MessageCircle className="w-4 h-4" />
                  Enquire About Home Tuition
                </a>
              </div>
            </RevealSection>
          </div>

          <RevealSection className="mt-10 p-5 bg-amber-50 rounded-2xl border border-amber-100 text-center">
            <p className="text-amber-800 text-sm">
              <span className="font-semibold">Note:</span> Group batches may be introduced in the future. Currently, all sessions are conducted on a one-to-one basis.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-soft">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <RevealSection className="text-center mb-12">
            <h2 className="section-heading mb-4">Common Questions</h2>
            <p className="section-sub">Quick answers to things students usually ask.</p>
          </RevealSection>

          <div className="space-y-4">
            {FAQ.map(({ q, a }, i) => (
              <RevealSection key={i} delay={i * 60}>
                <div className="card p-6">
                  <h3 className="font-semibold text-navy mb-2">{q}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600">
        <RevealSection className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Not Sure Which Mode to Choose?
          </h2>
          <p className="text-primary-100 mb-7 leading-relaxed">
            Just reach out and we'll figure out what works best for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-200 shadow-md">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a href={CONTACT.phone}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-200 shadow-md">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </RevealSection>
      </section>
    </div>
  )
}

