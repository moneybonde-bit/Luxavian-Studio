import { motion } from 'framer-motion'

const PROJECTS = [
  {
    type: 'Website Gereja',
    title: 'GBI Maranatha Harapan Indah',
    hoverGradient: 'group-hover:from-[#FF2D9B]/20 group-hover:to-[#8B3FFF]/20',
  },
  {
    type: 'Website Properti',
    title: 'Grand Residence Summarecon',
    hoverGradient: 'group-hover:from-[#3D9CFF]/20 group-hover:to-[#8B3FFF]/20',
  },
  {
    type: 'Website Bisnis',
    title: 'Rasa Nusantara — Kuliner UMKM',
    hoverGradient: 'group-hover:from-[#8B3FFF]/20 group-hover:to-[#FF2D9B]/20',
  },
  {
    type: 'Undangan Digital',
    title: 'Pernikahan Andhika & Sari',
    hoverGradient: 'group-hover:from-[#FF2D9B]/20 group-hover:to-[#3D9CFF]/20',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Portfolio Kami</h2>
          <p className="text-gray-400 max-w-xl">
            Sekilas hasil karya kami — setiap proyek dibangun dengan perhatian penuh pada detail dan
            performa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video rounded-2xl bg-white/5 border border-white/10 mb-4 overflow-hidden relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent ${project.hoverGradient} transition-all duration-500`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold tracking-widest uppercase text-xs text-white/20 group-hover:text-white/40 transition-colors">
                    Preview
                  </span>
                </div>
              </div>
              <span className="text-[#FF2D9B] text-xs font-bold tracking-widest uppercase mb-2 block">
                {project.type}
              </span>
              <h3 className="text-base font-bold text-white group-hover:text-[#3D9CFF] transition-colors leading-snug">
                {project.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
