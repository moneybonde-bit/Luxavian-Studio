import {
  Heart,
  Briefcase,
  Church,
  Building2,
  Sparkles,
  Code2,
  Rocket,
  Wrench,
} from 'lucide-react'

/**
 * Daftar layanan. Tambahkan layanan baru cukup dengan menambah objek di array ini.
 */
export const SERVICES = [
  {
    title: 'Undangan Digital Pernikahan',
    icon: Heart,
    gradient: 'from-[#FF2D9B] to-[#3D9CFF]',
    desc: 'Undangan pernikahan online yang elegan dan berkesan.',
    bullets: ['Animasi Scroll Elegan', 'Backsound & Slideshow', 'RSVP & Countdown Online'],
  },
  {
    title: 'Website Bisnis',
    icon: Briefcase,
    gradient: 'from-[#8B3FFF] to-[#FF2D9B]',
    desc: 'Website profesional untuk perusahaan dan bisnis lokal.',
    bullets: ['Company Profile Modern', 'Katalog Produk & Layanan', 'SEO On-Page Dasar'],
  },
  {
    title: 'Website Gereja',
    icon: Church,
    gradient: 'from-[#FF2D9B] to-[#8B3FFF]',
    desc: 'Website gereja modern dengan informasi ibadah dan pelayanan.',
    bullets: ['Jadwal Ibadah & Acara', 'Renungan & Warta Jemaat', 'Info Pelayanan & Komunitas'],
  },
  {
    title: 'Website Properti',
    icon: Building2,
    gradient: 'from-[#3D9CFF] to-[#8B3FFF]',
    desc: 'Website listing properti dan real estate.',
    bullets: ['Listing & Filter Properti', 'Galeri Foto Profesional', 'Formulir Kontak Agen'],
  },
  {
    title: 'Website Beauty & Salon',
    icon: Sparkles,
    gradient: 'from-[#FF2D9B] to-[#8B3FFF]',
    desc: 'Untuk nail art, salon, spa, dan bisnis kecantikan.',
    bullets: ['Galeri Hasil Karya', 'Daftar Harga & Layanan', 'Booking via WhatsApp'],
  },
  {
    title: 'Aplikasi Web Custom',
    icon: Code2,
    gradient: 'from-[#8B3FFF] to-[#3D9CFF]',
    desc: 'Sistem yang dibangun khusus sesuai kebutuhan klien.',
    bullets: ['Analisis Kebutuhan', 'Fitur Sesuai Permintaan', 'Skalabel & Aman'],
  },
  {
    title: 'Landing Page',
    icon: Rocket,
    gradient: 'from-[#3D9CFF] to-[#FF2D9B]',
    desc: 'Landing page dengan konversi tinggi untuk produk dan kampanye.',
    bullets: ['Copywriting Persuasif', 'Loading Super Cepat', 'Optimasi Konversi'],
  },
  {
    title: 'Maintenance Website',
    icon: Wrench,
    gradient: 'from-[#8B3FFF] to-[#FF2D9B]',
    desc: 'Update rutin, backup, dan dukungan teknis berkala.',
    bullets: ['Update & Backup Rutin', 'Monitoring Keamanan', 'Dukungan Teknis Cepat'],
  },
]
