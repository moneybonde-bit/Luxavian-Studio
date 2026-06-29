import { motion } from 'framer-motion'
import { Church, Building2, Briefcase, Heart, CheckCircle2 } from 'lucide-react'

const SERVICES = [
  {
    title: 'Website Gereja & Organisasi',
    icon: Church,
    gradient: 'from-[#FF2D9B] to-[#8B3FFF]',
    bullets: ['Desain Custom Branded', 'Halaman Jadwal & Renungan', 'Setup Hosting & Domain'],
  },
  {
    title: 'Website Properti',
    icon: Building2,
    gradient: 'from-[#3D9CFF] to-[#8B3FFF]',
    bullets: ['Listing & Filter Properti', 'Galeri Foto Profesional', 'Kontak & Formulir Agen'],
  },
  {
    title: 'Website Bisnis & UMKM',
    icon: Briefcase,
    gradient: 'from-[#8B3FFF] to-[#FF2D9B]',
    bullets: ['Company Profile Modern', 'Portofolio & Katalog Produk', 'SEO On-Page Dasar'],
  },
  {
    title: 'Undangan Digital Pernikahan',
    icon: Heart,
    gradient: 'from-[#FF2D9B] to-[#3D9CFF]',
    bullets: ['Animasi Scroll Elegan', 'Backsound & Slideshow', 'RSVP & Countdown Online'],
  },
]

function ServiceCard({ title, icon: Icon, bullets, gradient, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all overflow-hidden"
    >
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient}`} />
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${gradient}`}
      >
        <Icon className="text-white" size={22} />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <ul className="space-y-3">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex items-center text-sm text-gray-400">
            <CheckCircle2 size={14} className="mr-2 flex-shrink-0 text-[#3D9CFF]" />
            {bullet}
          </li>
        ))}
      </ul>
      <div className="absolute -right-4 -bottom-4 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
        <Icon size={120} className="text-white" />
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="layanan" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Layanan Kami</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Solusi digital yang dirancang khusus untuk kebutuhan Anda, dengan kualitas dan perhatian
            penuh pada setiap detail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
