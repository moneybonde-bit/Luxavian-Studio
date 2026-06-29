import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CallToAction() {
  return (
    <section id="cta" className="py-32 px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-12 md:p-16 rounded-[40px] bg-gradient-to-b from-white/10 to-transparent border border-white/10 overflow-hidden relative"
        >
          {/* Subtle inner glow */}
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#FF2D9B]/5 to-[#3D9CFF]/5 pointer-events-none" />

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight relative z-10">
            Siap Wujudkan
            <br />
            Website Impian Anda?
          </h2>
          <p className="text-gray-400 mb-10 text-lg max-w-lg mx-auto relative z-10">
            Konsultasikan kebutuhan digital Anda dengan tim ahli kami secara gratis, tanpa komitmen
            apapun.
          </p>
          <a
            href="#hero"
            className="inline-flex items-center px-10 py-4 rounded-full bg-gradient-to-r from-[#FF2D9B] via-[#8B3FFF] to-[#3D9CFF] text-white font-bold text-lg shadow-[0_0_30px_rgba(255,45,155,0.4)] hover:shadow-[0_0_50px_rgba(255,45,155,0.6)] transition-all relative z-10"
          >
            Mulai Proyek Anda <ArrowRight className="ml-2" size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
