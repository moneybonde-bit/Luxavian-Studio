import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[1.1] mb-6">
            Desain,
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF2D9B] via-[#8B3FFF] to-[#3D9CFF]">
              Pengembangan
            </span>
            <br />
            &amp; Solusi Digital
          </h1>

          {/* Decorative squiggle */}
          <div className="flex justify-center mb-8">
            <svg
              width="120"
              height="20"
              viewBox="0 0 120 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 18C20 18 20 2 38 2C56 2 56 18 74 18C92 18 92 2 118 2"
                stroke="url(#squiggle)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="squiggle" x1="2" y1="10" x2="118" y2="10" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF2D9B" />
                  <stop offset="1" stopColor="#3D9CFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12">
            Kami bantu wujudkan website impian Anda — dari gereja, bisnis, properti, hingga undangan
            digital pernikahan.
          </p>
        </motion.div>

        {/* Glassmorphic consultation card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
          className="w-full max-w-3xl p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center text-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Konsultasi Gratis 30 Menit</h3>
              <p className="text-sm text-gray-400">
                Dapatkan estimasi biaya dan strategi digital untuk proyek Anda — tanpa biaya, tanpa
                komitmen.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <input
                type="text"
                placeholder="Nama Anda"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF2D9B] transition-colors"
              />
              <input
                type="tel"
                placeholder="Nomor WhatsApp"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF2D9B] transition-colors"
              />
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF2D9B] to-[#3D9CFF] text-white font-bold text-sm shadow-[0_0_20px_rgba(255,45,155,0.3)] hover:shadow-[0_0_30px_rgba(255,45,155,0.5)] transition-all">
                Minta Penawaran &rarr;
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
