import { useParams, Link, Navigate } from 'react-router-dom'
import {
  ArrowLeft, CheckCircle2, MessageCircle, Phone, Mail,
  Users, Monitor, MapPin, Code2, Brain, Terminal,
  GitBranch, Database, BookOpen,
} from 'lucide-react'
import { COURSES, COURSE_COLORS, CONTACT } from '../data/courses'
import useScrollReveal from '../hooks/useScrollReveal'

const ICON_MAP = {
  Code2, Brain, Terminal, GitBranch, Database, Monitor, BookOpen,
}

function RevealSection({ children, className = '', delay = 0 }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={className} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function CourseDetail() {
  const { slug } = useParams()
  const course = COURSES.find((c) => c.slug === slug)

  if (!course) return <Navigate to="/courses" replace />

  const colors = COURSE_COLORS[course.color] || COURSE_COLORS.blue
  const Icon = ICON_MAP[course.icon] || Code2

  const waMessage = encodeURIComponent(course.whatsappMessage)
  const waUrl = `${CONTACT.whatsapp}?text=${waMessage}`

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className={`py-16 ${colors.bg} border-b border-slate-100`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-primary-600 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>

          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm mb-5`}>
            <Icon className={`w-8 h-8 ${colors.icon}`} />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">{course.title}</h1>

          <div className="flex flex-wrap gap-2 mb-5">
            <span className={`inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full ${colors.badge}`}>
              <Users className="w-3.5 h-3.5" />
              {course.audience}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full bg-white text-slate-600 border border-slate-200">
              <Monitor className="w-3.5 h-3.5" />
              {course.availability}
            </span>
            {course.prerequisite && (
              <span className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                <BookOpen className="w-3.5 h-3.5" />
                Prerequisite: {course.prerequisite}
              </span>
            )}
          </div>

          <p className="text-charcoal/80 text-lg leading-relaxed max-w-2xl">
            {course.shortIntro}
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Main */}
            <div className="lg:col-span-2 space-y-10">
              {/* About */}
              <RevealSection>
                <h2 className="text-2xl font-bold text-navy mb-4">About This Course</h2>
                <div className="prose text-charcoal/80 leading-relaxed space-y-3">
                  {course.description.trim().split('\n').map((para, i) => (
                    <p key={i}>{para.trim()}</p>
                  ))}
                </div>
              </RevealSection>

              {/* Topics */}
              <RevealSection>
                <h2 className="text-2xl font-bold text-navy mb-4">What You Will Learn</h2>
                <ul className="space-y-3">
                  {course.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 ${colors.icon} flex-shrink-0 mt-0.5`} />
                      <span className="text-charcoal/80 leading-relaxed">{topic}</span>
                    </li>
                  ))}
                </ul>
              </RevealSection>

              {/* Outcomes */}
              <RevealSection>
                <h2 className="text-2xl font-bold text-navy mb-4">Key Learning Outcomes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.outcomes.map((outcome, i) => (
                    <div key={i} className={`p-4 rounded-xl ${colors.bg} border ${colors.border}`}>
                      <p className="text-sm font-medium text-charcoal/90 leading-relaxed">{outcome}</p>
                    </div>
                  ))}
                </div>
              </RevealSection>
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-5">
              {/* CTA Card */}
              <RevealSection>
                <div className="sticky top-24 space-y-5">
                  <div className="card p-6">
                    <h3 className="font-bold text-navy text-lg mb-2">Ready to Start?</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5">
                      Reach out to discuss this course and find a schedule that works for you.
                    </p>

                    <div className="space-y-3">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp w-full justify-center text-sm"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Chat on WhatsApp
                      </a>
                      <a
                        href={CONTACT.phone}
                        className="btn-secondary w-full justify-center text-sm"
                      >
                        <Phone className="w-4 h-4" />
                        Call Now
                      </a>
                      <a
                        href={CONTACT.email}
                        className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-primary-600 rounded-xl hover:bg-slate-50 transition-colors border border-slate-200"
                      >
                        <Mail className="w-4 h-4" />
                        Send an Email
                      </a>
                    </div>
                  </div>

                  {/* Teaching modes */}
                  <div className="card p-5">
                    <h3 className="font-semibold text-navy text-sm mb-3">Available Modes</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-charcoal/80">
                        <Monitor className="w-4 h-4 text-primary-500" />
                        Online Classes
                      </div>
                      <div className="flex items-center gap-2 text-sm text-charcoal/80">
                        <MapPin className="w-4 h-4 text-orange-500" />
                        Offline Home Tuition
                      </div>
                    </div>
                  </div>

                  {/* Explore more */}
                  <div className="card p-5">
                    <h3 className="font-semibold text-navy text-sm mb-3">Explore Other Courses</h3>
                    <div className="space-y-1">
                      {COURSES.filter((c) => c.slug !== slug).slice(0, 4).map((c) => (
                        <Link
                          key={c.slug}
                          to={`/courses/${c.slug}`}
                          className="block py-1.5 text-sm text-slate-500 hover:text-primary-600 transition-colors"
                        >
                          → {c.title}
                        </Link>
                      ))}
                      <Link
                        to="/courses"
                        className="block pt-2 text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        View all courses →
                      </Link>
                    </div>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-primary-600">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Interested in {course.title}?
          </h2>
          <p className="text-primary-100 mb-7 leading-relaxed">
            Feel free to reach out with any questions. Let's find a learning plan that works for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-200 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href={CONTACT.phone}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-200 shadow-md"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
