import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, Phone, Headphones, DollarSign, Loader2 } from 'lucide-react'

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  company?: string
  phone?: string
  message?: string
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Invalid email format'
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setFormData({ name: '', email: '', company: '', phone: '', message: '' })
  }

  const inputFields = [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'company', label: 'Company', type: 'text', required: true },
    { name: 'phone', label: 'Phone', type: 'tel', required: true },
  ]

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="glass-card p-8 md:p-10"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {inputFields.map((field) => (
          <div key={field.name} className="relative">
            <motion.label
              className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                focusedField === field.name || formData[field.name as keyof FormData]
                  ? 'top-2 text-[11px] text-purple-400'
                  : 'top-4 text-sm text-white/40'
              }`}
              animate={{
                y: focusedField === field.name || formData[field.name as keyof FormData] ? -4 : 0,
                fontSize: focusedField === field.name || formData[field.name as keyof FormData] ? '11px' : '14px',
              }}
            >
              {field.label}
              {field.required && <span className="text-purple-400">*</span>}
            </motion.label>
            <input
              type={field.type}
              className={`input-field pt-6 pb-3 ${
                errors[field.name as keyof FormErrors]
                  ? 'border-red-500/50 bg-red-500/5'
                  : ''
              }`}
              value={formData[field.name as keyof FormData]}
              onChange={(e) =>
                setFormData({ ...formData, [field.name]: e.target.value })
              }
              onFocus={() => setFocusedField(field.name)}
              onBlur={() => setFocusedField(null)}
            />
            {errors[field.name as keyof FormErrors] && (
              <motion.span
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-red-400 mt-1 block pl-1"
              >
                {errors[field.name as keyof FormErrors]}
              </motion.span>
            )}
          </div>
        ))}
      </div>

      <div className="relative mt-5">
        <motion.label
          className={`absolute left-5 transition-all duration-300 pointer-events-none ${
            focusedField === 'message' || formData.message
              ? 'top-2 text-[11px] text-purple-400'
              : 'top-4 text-sm text-white/40'
          }`}
          animate={{
            y: focusedField === 'message' || formData.message ? -4 : 0,
            fontSize: focusedField === 'message' || formData.message ? '11px' : '14px',
          }}
        >
          Message<span className="text-purple-400">*</span>
        </motion.label>
        <textarea
          rows={5}
          className={`input-field pt-6 pb-3 resize-none ${
            errors.message ? 'border-red-500/50 bg-red-500/5' : ''
          }`}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
        />
        {errors.message && (
          <motion.span
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-red-400 mt-1 block pl-1"
          >
            {errors.message}
          </motion.span>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-medium text-sm rounded-full relative overflow-hidden btn-glow disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(139, 92, 246, 0.4)' }}
        whileTap={{ scale: 0.97 }}
      >
        <span className="relative z-10 flex items-center gap-2">
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send message
            </>
          )}
        </span>
      </motion.button>

      <p className="mt-4 text-sm text-white/40">
        Questions, feedback, or support? Our team's just a message away.
      </p>
    </motion.form>
  )
}

function ContactCards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const cards = [
    {
      icon: Headphones,
      title: 'Support',
      email: 'support@draftr.com',
      description: "Need help? Our team's here 24/7 to assist you.",
      gradient: 'from-purple-500/20 to-violet-500/20',
      iconBg: 'from-purple-500 to-violet-600',
    },
    {
      icon: DollarSign,
      title: 'Sales',
      email: 'sales@draftr.com',
      description: "Interested in Draftr for your team? Let's talk pricing and solutions.",
      gradient: 'from-indigo-500/20 to-blue-500/20',
      iconBg: 'from-indigo-500 to-blue-600',
    },
  ]

  return (
    <div ref={ref} className="space-y-6">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="glass-card p-7 group cursor-pointer hover:border-purple-500/20 transition-all duration-500"
        >
          <div className="flex items-start gap-5">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.iconBg} flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-shadow duration-500`}>
              <card.icon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1">{card.title}</h3>
              <a
                href={`mailto:${card.email}`}
                className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                {card.email}
              </a>
              <p className="mt-3 text-sm text-white/50 leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
          {/* Hover glow */}
          <div className={`absolute inset-0 rounded-[20px] bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />
        </motion.div>
      ))}

      {/* Additional contact info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card p-7"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
            <Phone className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Call us</h3>
            <p className="text-sm text-white/50 mt-0.5">Mon-Fri from 8am to 5pm</p>
            <a href="tel:+1234567890" className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ContactSection() {
  return (
    <section className="relative py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Form */}
          <ContactForm />

          {/* Right - Cards */}
          <ContactCards />
        </div>
      </div>
    </section>
  )
}
