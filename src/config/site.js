/**
 * Konfigurasi utama perusahaan.
 * Ubah informasi perusahaan cukup dari file ini —
 * seluruh komponen (Navbar, Footer, tombol WhatsApp, dll.) membacanya dari sini.
 */
export const SITE = {
  name: 'Luxavian',
  tagline: 'Digital Studio',
  fullName: 'Luxavian Digital Studio',
  motto: 'Crafting Elegant Digital Experiences.',
  description:
    'Jasa pembuatan website profesional di Indonesia — website bisnis, gereja, properti, undangan digital, dan aplikasi web custom.',

  /**
   * Letakkan file logo resmi di: public/logos/luxavian-logo.png
   * Jika file belum ada, situs otomatis menampilkan wordmark teks sebagai fallback.
   */
  logo: '/logos/luxavian-logo.png',

  contact: {
    // Ganti dengan nomor WhatsApp bisnis (format internasional tanpa +, contoh: 6281234567890)
    whatsappNumber: '6281234567890',
    email: 'hello@luxavian.it.com',
    instagram: 'https://instagram.com/luxavian.studio',
  },

  copyrightYear: 2026,
}

export const WHATSAPP_URL = `https://wa.me/${SITE.contact.whatsappNumber}`

export const NAV_LINKS = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Target Klien', href: '#target-klien' },
  { label: 'Proses Kami', href: '#proses-kami' },
  { label: 'Portfolio', href: '#portfolio' },
]
