import { motion } from 'framer-motion'

const STEPS = [
  {
    number: '01',
    title: 'Konsultasi & Brief',
    desc: 'Ceritakan kebutuhan website Anda. Kami analisis target audiens dan tujuan utama bisnis Anda.',
  },
  {
    number: '02',
    title: 'Desain & Pengembangan',
    desc: 'Kami bangun sesuai konsep yang disepakati menggunakan teknologi web modern dan responsif.',
  },
  {
    number: '03',
    title: 'Review & Peluncuran',
    desc: 'Tahap revisi, finalisasi, dan website Anda siap online untuk menjangkau lebih banyak pelanggan.',
  },
]

function Step({ number, title, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex items-start space-x-6"
    >
      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-[#FF2D9B] to-[#8B3FFF] flex items-center justify-center font-black text-white text-lg shadow-[0_0_24px_rgba(255,45,155,0.5)]">
        {number}
      </div>
      <div className="pt-2">
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-gray-400 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

export default function Process() {
  return (
    <section id="proses-kami" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-12">
          {STEPS.map((step, index) => (
            <Step key={step.number} {...step} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            3 Langkah
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3D9CFF] to-[#8B3FFF]">
              Mudah.
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            Proses kerja yang transparan dan efisien untuk memastikan hasil akhir sesuai ekspektasi
            bisnis Anda — dari konsep hingga go-live.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
