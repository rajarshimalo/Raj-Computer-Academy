import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Brain, Terminal, GitBranch, Database, Monitor, BookOpen } from 'lucide-react'
import { COURSE_COLORS } from '../data/courses'

const ICON_MAP = {
  Code2, Brain, Terminal, GitBranch, Database, Monitor, BookOpen,
}

export default function CourseCard({ course }) {
  const colors = COURSE_COLORS[course.color] || COURSE_COLORS.blue
  const Icon = ICON_MAP[course.icon] || Code2

  return (
    <Link
      to={`/courses/${course.slug}`}
      className="card block p-6 group cursor-pointer"
      aria-label={`View ${course.title} course details`}
    >
      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-6 h-6 ${colors.icon}`} />
      </div>

      {/* Title */}
      <h3 className="font-bold text-navy text-lg mb-2 group-hover:text-primary-600 transition-colors duration-200">
        {course.title}
      </h3>

      {/* Short intro */}
      <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
        {course.shortIntro}
      </p>

      {/* Audience badge */}
      <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${colors.badge} mb-4`}>
        {course.audience}
      </span>

      {/* CTA */}
      <div className="flex items-center gap-1 text-primary-600 text-sm font-semibold group-hover:gap-2 transition-all duration-200">
        View Course Details
        <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  )
}

