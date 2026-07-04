import { motion } from 'framer-motion'

/**
 * Judul seksi yang reusable agar tipografi dan spasi konsisten di semua seksi.
 */
export default function SectionHeading({ title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 max-w-2xl ${alignment}`}
    >
      <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{title}</h2>
      {subtitle && <p className="text-gray-400">{subtitle}</p>}
    </motion.div>
  )
}
