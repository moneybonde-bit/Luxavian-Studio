import { motion } from 'framer-motion'
import { TARGET_CLIENTS } from '../data/targetClients'
import SectionHeading from './SectionHeading'

function SegmentCard({ segment, icon: Icon, gradient, items, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
    >
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${gradient}`}
      >
        <Icon className="text-white" size={22} aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{segment}</h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function TargetClients() {
  return (
    <section id="target-klien" className="py-24 px-6 relative z-10 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Target Klien"
          subtitle="Kami siap bekerja sama dengan berbagai sektor untuk menghadirkan solusi yang tepat guna."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TARGET_CLIENTS.map((segment, index) => (
            <SegmentCard key={segment.segment} {...segment} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
