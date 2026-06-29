import { motion } from 'framer-motion'

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, 60, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 22, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#FF2D9B] opacity-[0.12] blur-[130px]"
      />
      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 100, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 28, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        className="absolute bottom-[5%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#3D9CFF] opacity-[0.10] blur-[150px]"
      />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -80, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-[#8B3FFF] opacity-[0.07] blur-[130px]"
      />
    </div>
  )
}
