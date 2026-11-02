import { MessageCircle, Phone } from 'lucide-react'
import { CONTACT } from '../data/courses'

export default function MobileActionDock() {
  const waUrl = `${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.defaultWhatsappMessage)}`

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 md:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-3 max-w-md mx-auto">
        <a
          href={CONTACT.phone}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-slate-200 bg-slate-50 text-navy font-semibold text-sm hover:bg-slate-100 transition-colors"
        >
          <Phone className="w-4 h-4 text-primary-600" />
          <span>Call Now</span>
        </a>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.5] flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold text-sm shadow-sm transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  )
}

