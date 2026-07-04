import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { SERVICES } from '../data/services'
import SectionHeading from './SectionHeading'

function ServiceCard({ title, icon: Icon, desc, bullets, gradient, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -10 }}
      className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all overflow-hidden"
    >
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient}`} />
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${gradient}`}
      >
        <Icon className="text-white" size={22} aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-5">{desc}</p>
      <ul className="space-y-3">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-center text-sm text-gray-400">
            <CheckCircle2 size={14} className="mr-2 flex-shrink-0 text-[#3D9CFF]" aria-hidden="true" />
            {bullet}
          </li>
        ))}
      </ul>
      <div className="absolute -right-4 -bottom-4 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
        <Icon size={120} className="text-white" aria-hidden="true" />
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="layanan" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Layanan Kami"
          subtitle="Solusi digital yang dirancang khusus untuk kebutuhan Anda, dengan kualitas dan perhatian penuh pada setiap detail."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
