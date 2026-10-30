import { COURSES } from '../data/courses'
import CourseCard from '../components/CourseCard'
import useScrollReveal from '../hooks/useScrollReveal'
import { BookOpen, Search } from 'lucide-react'

function RevealSection({ children, className = '', delay = 0 }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={className} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function Courses() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-white via-blue-50/40 to-white py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-2xl mb-6">
            <BookOpen className="w-8 h-8 text-primary-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">Course Catalogue</h1>
          <p className="text-charcoal/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Explore all available courses — from computer basics to programming and artificial intelligence. Every course is designed for school students and explained from the ground up.
          </p>
        </div>
      </section>

      {/* Courses grid */}
      <section className="py-16 bg-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map((course, i) => (
              <RevealSection key={course.slug} delay={i * 60}>
                <CourseCard course={course} />
              </RevealSection>
            ))}
          </div>

          <RevealSection className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-slate-400 text-sm">
              <Search className="w-4 h-4" />
              Can't find what you're looking for? Reach out and we'll help you.
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  )
}

