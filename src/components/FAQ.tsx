import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'What is Draftr?',
    answer:
      'Draftr is a powerful design platform that lets you create, prototype, and collaborate in real-time. It combines an intuitive drag-and-drop editor with advanced prototyping tools, making it perfect for designers and teams of all sizes.',
  },
  {
    question: 'Do I need to install anything to use Draftr?',
    answer:
      'No, Draftr is cloud-based and works directly in your browser. You can access your projects from any device, anywhere, without downloading or installing any software.',
  },
  {
    question: 'Can I collaborate with others in real time?',
    answer:
      'Yes! Draftr supports real-time collaboration, allowing multiple team members to work on the same project simultaneously. You can see live cursors, leave comments, and get instant feedback.',
  },
  {
    question: 'Is there a free version of Draftr?',
    answer:
      'Yes, Draftr offers a free Starter plan that includes 1 active project, basic collaboration tools, limited prototyping options, and 500MB of cloud storage. You can upgrade anytime for more features.',
  },
  {
    question: 'What kind of export options does Draftr support?',
    answer:
      'Draftr supports a wide range of export options including PNG, SVG, PDF, and CSS code generation. You can also export design specs for developers and integrate with popular tools like Figma, Sketch, and Adobe XD.',
  },
]

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card overflow-hidden group"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-7 text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="text-base md:text-lg font-medium text-white pr-4">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="minus"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.15 }}
              >
                <Minus className="w-4 h-4 text-purple-400" />
              </motion.div>
            ) : (
              <motion.div
                key="plus"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.15 }}
              >
                <Plus className="w-4 h-4 text-white/60" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-7 pb-6 md:pb-7">
              <p className="text-sm md:text-base text-white/50 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative py-24 px-6 lg:px-8" ref={ref}>
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Frequently asked{' '}
            <span className="gradient-text">questions</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/50">
            Find quick answers to common questions about Draftr.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <FAQItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  )
}
