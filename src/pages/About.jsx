import { Link } from 'react-router-dom'
import {
  GraduationCap, MessageCircle, Phone, Mail, Heart,
  BookOpen, Lightbulb, HelpCircle, Smile, Target, Code2,
} from 'lucide-react'
import { COURSES, CONTACT } from '../data/courses'
import useScrollReveal from '../hooks/useScrollReveal'

const DP_IMAGE = `${import.meta.env.BASE_URL}DP_IMAGE/DP2.jpeg`

function RevealSection({ children, className = '', delay = 0 }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={className} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

const VALUES = [
  { icon: BookOpen, title: 'Basics First', desc: 'Every topic is explained from the ground up. No assumptions, no shortcuts.' },
  { icon: HelpCircle, title: 'Questions Welcome', desc: 'No question is too small. Students are always encouraged to ask.' },
  { icon: Lightbulb, title: 'Understanding Over Memorisation', desc: 'The focus is on understanding how and why things work, not just rote learning.' },
  { icon: Smile, title: 'Friendly Atmosphere', desc: 'Learning should feel comfortable — not stressful or intimidating.' },
  { icon: Target, title: 'Practical Examples', desc: 'Real examples that make abstract concepts click.' },
  { icon: Code2, title: 'Hands-On Practice', desc: 'Concepts are reinforced through practice, exercises and mini-projects.' },
]

export default function About() {
  const waUrl = `${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.defaultWhatsappMessage)}`

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-white via-blue-50/30 to-white py-20 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Photo */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-200 rounded-3xl -rotate-2 opacity-40" />
                <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src={DP_IMAGE}
                    alt="Raj — Computer Science & AI Educator"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="hidden w-full h-full bg-primary-50 items-center justify-center">
                    <GraduationCap className="w-24 h-24 text-primary-200" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-slate-100">
                  <p className="text-xs text-slate-500 font-medium">Currently pursuing</p>
                  <p className="text-sm font-bold text-navy">B.Sc. Computer Science</p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">About the Educator</span>
              <h1 className="text-4xl md:text-5xl font-bold text-navy mb-3 leading-tight">
                Hi, I'm Raj. 👋
              </h1>
              <p className="text-primary-600 font-semibold text-lg mb-6">Computer Science & AI Educator</p>

              <div className="space-y-4 text-charcoal/80 leading-relaxed">
                <p>
                  I am a third-year B.Sc. Computer Science student with a strong interest in programming, computer science and artificial intelligence. Alongside my academic studies, I am pursuing additional courses in Artificial Intelligence and Data Analysis.
                </p>
                <p>
                  I believe learning becomes easier when students feel comfortable asking questions and exploring concepts without hesitation. My approach is to explain topics from the basics, use practical examples and encourage students to understand how things work rather than simply memorising them.
                </p>
                <p>
                  My goal is to make computer science accessible, interesting and enjoyable for students.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-7">
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <MessageCircle className="w-4 h-4" />
                  Say Hello on WhatsApp
                </a>
                <Link to="/courses" className="btn-secondary">
                  Explore Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <RevealSection className="text-center mb-12">
            <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Teaching Philosophy</span>
            <h2 className="section-heading mb-4">How I Teach</h2>
            <p className="section-sub max-w-2xl mx-auto">
              A few principles that guide every session.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <RevealSection key={i} delay={i * 70}>
                <div className="card p-6 h-full">
                  <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="font-bold text-navy mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects section */}
      <section className="py-16 bg-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <RevealSection className="text-center mb-10">
            <h2 className="section-heading mb-4">Subjects I Teach</h2>
            <p className="section-sub">
              All courses are tailored for school students in Classes 8–12.
            </p>
          </RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {COURSES.map((course, i) => (
              <RevealSection key={course.slug} delay={i * 50}>
                <Link
                  to={`/courses/${course.slug}`}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-primary-200 hover:shadow-sm transition-all duration-200 group"
                >
                  <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                    <BookOpen className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="font-medium text-charcoal group-hover:text-primary-600 transition-colors text-sm">{course.title}</span>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600">
        <RevealSection className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Let's Connect
          </h2>
          <p className="text-primary-100 mb-7 leading-relaxed">
            Have a question about a course, or just want to say hello? I'm easy to reach.
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
            <a href={CONTACT.email}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-400 transition-all duration-200 shadow-md border border-primary-400">
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>
        </RevealSection>
      </section>
    </div>
  )
}

