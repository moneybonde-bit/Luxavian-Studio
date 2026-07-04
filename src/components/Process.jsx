import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '../data/processSteps'
import SectionHeading from './SectionHeading'

function StepCard({ number, icon: Icon, title, desc, index, isLast }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="relative flex-1 min-w-[220px]"
    >
      {/* Garis penghubung antar langkah (desktop) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-7 left-[calc(50%+36px)] w-[calc(100%-72px)] h-px bg-gradient-to-r from-white/20 to-white/5" />
      )}

      <div className="flex lg:flex-col lg:items-center lg:text-center items-start gap-5 lg:gap-0">
        <div className="relative flex-shrink-0 lg:mb-6">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF2D9B] to-[#8B3FFF] flex items-center justify-center shadow-[0_0_24px_rgba(255,45,155,0.4)]">
            <Icon className="text-white" size={22} aria-hidden="true" />
          </div>
          <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#0A0A0F] border border-white/20 flex items-center justify-center text-[10px] font-black text-white">
            {number}
          </span>
        </div>
        <div className="pt-1 lg:pt-0">
          <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
          <p className="text-sm text-gray-400 leading-relaxed lg:max-w-[220px]">{desc}</p>
        </div>
      </div>
    </motion.li>
  )
}

export default function Process() {
  return (
    <section id="proses-kami" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Cara Kami Bekerja"
          subtitle="Proses kerja yang transparan dan efisien untuk memastikan hasil akhir sesuai ekspektasi Anda — dari konsep hingga go-live."
        />

        <ol className="flex flex-col lg:flex-row gap-10 lg:gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <StepCard
              key={step.number}
              {...step}
              index={index}
              isLast={index === PROCESS_STEPS.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}
