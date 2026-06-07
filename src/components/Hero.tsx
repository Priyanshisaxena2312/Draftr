import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="gradient-text">Get in touch</span>{' '}
            <span className="text-white">with us</span>
          </motion.h1>
        </motion.div>

        <motion.p
          className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Have questions, need help, or want to discover more about Draftr? We're here to
          support you every step of the way.
        </motion.p>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-40 left-1/4 w-[300px] h-[300px] bg-violet-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
    </section>
  )
}
