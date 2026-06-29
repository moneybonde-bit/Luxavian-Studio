import { Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="text-xl font-black tracking-tighter text-white mb-2">
            LUXAVIAN<span className="text-[#FF2D9B]">.</span>STUDIO
          </div>
          <p className="text-sm text-gray-500 italic">
            &ldquo;Elevating your digital presence with precision.&rdquo;
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex space-x-5">
            <a
              href="#"
              aria-label="Instagram Luxavian Studio"
              className="text-gray-400 hover:text-[#FF2D9B] transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              aria-label="WhatsApp Luxavian Studio"
              className="text-gray-400 hover:text-[#3D9CFF] transition-colors"
            >
              <MessageCircle size={20} />
            </a>
          </div>
          <p className="text-xs text-gray-600">&copy; 2026 Luxavian Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
