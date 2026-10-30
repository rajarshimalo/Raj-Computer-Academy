import { Link } from 'react-router-dom'
import {
  MessageCircle, Phone, Monitor, MapPin, CheckCircle2,
  ArrowRight, Sparkles, Users, BookOpen, HeartHandshake,
  GraduationCap, ChevronRight,
} from 'lucide-react'
import { COURSES, CONTACT } from '../data/courses'
import CourseCard from '../components/CourseCard'
import useScrollReveal from '../hooks/useScrollReveal'

// Educator image
const DP_IMAGE = `${import.meta.env.BASE_URL}DP_IMAGE/DP2.jpeg`

function RevealSection({ children, className = '', delay = 0 }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className={className}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const WHY_POINTS = [
  { icon: HeartHandshake, text: 'Friendly and approachable teaching style' },
  { icon: BookOpen, text: 'Every concept explained from the basics' },
  { icon: Sparkles, text: 'Practical, hands-on learning approach' },
  { icon: MessageCircle, text: 'Students are always encouraged to ask questions' },
  { icon: Users, text: 'Learning at your own pace — no pressure' },
  { icon: Monitor, text: 'Online classes and offline home tuition available' },
]

export default function Home() {
  const waUrl = `${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.defaultWhatsappMessage)}`

  return (
    <div className="pt-16">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white py-20 md:py-28">
        {/* Decorative blob */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full mb-6 border border-primary-100">
                <GraduationCap className="w-3.5 h-3.5" />
                Computer Science & AI Educator · Classes 8–12
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-navy leading-tight mb-6">
                From Computer Basics to{' '}
                <span className="text-primary-600">Artificial Intelligence.</span>
              </h1>

              <p className="text-charcoal/80 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Learn computer science, programming and artificial intelligence through simple explanations, practical examples and friendly guidance.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
                <Link to="/courses" className="btn-primary text-base px-8 py-3.5">
                  Explore Courses
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-3.5">
                  <MessageCircle className="w-4 h-4" />
                  Let's Talk on WhatsApp
                </a>
              </div>

              {/* Teaching modes pills */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-slate-200 shadow-sm text-sm font-medium text-charcoal">
                  <Monitor className="w-4 h-4 text-primary-600" />
                  Online Classes
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-slate-200 shadow-sm text-sm font-medium text-charcoal">
                  <MapPin className="w-4 h-4 text-primary-600" />
                  Offline Home Tuition
                </div>
              </div>
            </div>

            {/* Educator Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-200 rounded-3xl rotate-3 opacity-40" />
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
                  {/* Fallback */}
                  <div
                    className="hidden w-full h-full bg-primary-50 items-center justify-center"
                  >
                    <GraduationCap className="w-20 h-20 text-primary-300" />
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-2.5 border border-slate-100">
                  <p className="text-xs text-slate-500 font-medium">B.Sc. Computer Science</p>
                  <p className="text-sm font-bold text-navy">CS & AI Educator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WELCOME ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <RevealSection>
            <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Welcome</span>
            <h2 className="section-heading mb-6">Learning Computer Science Should Feel Simple.</h2>
            <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
              Technology is easier to understand when someone explains it in the right way. At Raj Computer Academy, students are encouraged to explore, experiment, ask questions and learn without hesitation.
            </p>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              The goal has never been to rush through topics or make things sound complicated. Every session is about understanding — and every question is a good question.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ─── COURSES ─── */}
      <section className="py-20 bg-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <RevealSection className="text-center mb-12">
            <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Courses</span>
            <h2 className="section-heading mb-4">What You Can Learn</h2>
            <p className="section-sub max-w-2xl mx-auto">
              From computer basics to AI — pick a course that interests you and start at your own pace.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map((course, i) => (
              <RevealSection key={course.slug} delay={i * 60}>
                <CourseCard course={course} />
              </RevealSection>
            ))}
          </div>

          <RevealSection className="text-center mt-10">
            <Link to="/courses" className="btn-secondary">
              See All Courses
              <ChevronRight className="w-4 h-4" />
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* ─── WHY LEARN HERE ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <RevealSection className="text-center mb-12">
            <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">Why Learn Here</span>
            <h2 className="section-heading mb-4">A Different Kind of Tuition</h2>
            <p className="section-sub max-w-2xl mx-auto">
              Not just lessons — a learning experience that is friendly, patient and genuinely focused on your understanding.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_POINTS.map(({ icon: Icon, text }, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <p className="text-charcoal font-medium text-sm leading-relaxed pt-1">{text}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEACHING MODES ─── */}
      <section className="py-20 bg-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <RevealSection className="text-center mb-12">
            <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">How We Learn</span>
            <h2 className="section-heading mb-4">Teaching Modes</h2>
            <p className="section-sub max-w-2xl mx-auto">
              Choose the format that works best for you.
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <RevealSection>
              <div className="card p-8 text-center h-full">
                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Monitor className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Online Classes</h3>
                <p className="text-slate-500 leading-relaxed mb-4">
                  Learn from the comfort of your home through live online sessions. Attend from anywhere — all you need is a device and a connection.
                </p>
                <ul className="text-left space-y-2">
                  {['Live interactive sessions', 'Learn from anywhere', 'Comfortable home environment', 'Flexible scheduling'].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-charcoal">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealSection>

            <RevealSection delay={100}>
              <div className="card p-8 text-center h-full border-primary-100">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <MapPin className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Offline Home Tuition</h3>
                <p className="text-slate-500 leading-relaxed mb-4">
                  Personalised, face-to-face learning conducted at the student's home. Ideal for students who prefer in-person guidance.
                </p>
                <ul className="text-left space-y-2">
                  {['One-on-one attention', 'Personalised pace', 'Face-to-face interaction', 'Learn in your own space'].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-charcoal">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealSection>
          </div>

          <RevealSection className="text-center mt-8">
            <p className="text-slate-400 text-sm italic">
              Group batches may be introduced in the future. Currently, sessions are available individually.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-20 bg-primary-600">
        <RevealSection className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have Questions About a Course?
          </h2>
          <p className="text-primary-100 text-lg mb-8 leading-relaxed">
            Feel free to reach out. Let's discuss what you want to learn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-200 shadow-md text-base"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href={CONTACT.phone}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-200 shadow-md text-base"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </RevealSection>
      </section>
    </div>
  )
}

