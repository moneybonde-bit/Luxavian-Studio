import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../config/site'

/** Tombol WhatsApp melayang di pojok kanan bawah. */
export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_0_24px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_0_36px_rgba(37,211,102,0.6)] transition-all"
    >
      <MessageCircle size={26} className="text-white" aria-hidden="true" />
    </a>
  )
}
