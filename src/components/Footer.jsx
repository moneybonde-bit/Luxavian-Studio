import { Instagram, Mail, MessageCircle } from 'lucide-react'
import { SITE, WHATSAPP_URL } from '../config/site'
import Logo from './Logo'

const FOOTER_COLUMNS = [
  {
    heading: 'Perusahaan',
    links: [
      { label: 'Tentang Kami', href: '#hero' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Layanan', href: '#layanan' },
    ],
  },
  {
    heading: 'Layanan',
    links: [
      { label: 'Website Bisnis', href: '#layanan' },
      { label: 'Undangan Pernikahan', href: '#layanan' },
      { label: 'Aplikasi Web Custom', href: '#layanan' },
    ],
  },
]

const CONTACT_LINKS = [
  {
    label: 'WhatsApp',
    href: WHATSAPP_URL,
    icon: MessageCircle,
  },
  {
    label: 'Email',
    href: `mailto:${SITE.contact.email}`,
    icon: Mail,
  },
  {
    label: 'Instagram',
    href: SITE.contact.instagram,
    icon: Instagram,
  },
]

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 px-6 border-t border-white/5 relative z-10 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{SITE.description}</p>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map(({ heading, links }) => (
            <nav key={heading} aria-label={heading}>
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact */}
          <nav aria-label="Kontak">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">Kontak</h4>
            <ul className="space-y-3">
              {CONTACT_LINKS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm text-gray-400 hover:text-[#FF2D9B] transition-colors"
                  >
                    <Icon size={16} aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
          <p className="text-xs text-gray-600">
            &copy; {SITE.copyrightYear} {SITE.fullName}. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 italic">{SITE.motto}</p>
        </div>
      </div>
    </footer>
  )
}
