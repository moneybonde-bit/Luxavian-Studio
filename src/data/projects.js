/**
 * Daftar proyek portfolio.
 * Tambah proyek baru cukup dengan menambah objek di array ini.
 * - thumbnail: letakkan gambar di public/images/portfolio/ lalu isi path-nya
 *   (contoh: '/images/portfolio/nama-proyek.jpg'). Jika null/gagal dimuat,
 *   kartu otomatis menampilkan placeholder gradien.
 * - github bersifat opsional — kosongkan (null) jika tidak ada.
 */
export const PROJECTS = [
  {
    title: 'Undangan Digital Pernikahan',
    category: 'Undangan Digital',
    desc: 'Undangan pernikahan online elegan dengan animasi, galeri foto, dan RSVP.',
    thumbnail: '/images/portfolio/wedding-invitation.jpg',
    url: '#',
    github: null,
    hoverGradient: 'group-hover:from-[#FF2D9B]/20 group-hover:to-[#3D9CFF]/20',
  },
  {
    title: 'Website Gereja',
    category: 'Website Gereja',
    desc: 'Website gereja modern dengan jadwal ibadah, warta jemaat, dan info pelayanan.',
    thumbnail: '/images/portfolio/church-website.jpg',
    url: '#',
    github: null,
    hoverGradient: 'group-hover:from-[#FF2D9B]/20 group-hover:to-[#8B3FFF]/20',
  },
  {
    title: 'Website Properti',
    category: 'Website Properti',
    desc: 'Website listing properti dengan galeri foto dan formulir kontak agen.',
    thumbnail: '/images/portfolio/property-website.jpg',
    url: '#',
    github: null,
    hoverGradient: 'group-hover:from-[#3D9CFF]/20 group-hover:to-[#8B3FFF]/20',
  },
  {
    title: 'Website Nail Art',
    category: 'Beauty & Salon',
    desc: 'Website nail art dengan galeri hasil karya dan booking via WhatsApp.',
    thumbnail: '/images/portfolio/nail-art-website.jpg',
    url: '#',
    github: null,
    hoverGradient: 'group-hover:from-[#8B3FFF]/20 group-hover:to-[#FF2D9B]/20',
  },
]
