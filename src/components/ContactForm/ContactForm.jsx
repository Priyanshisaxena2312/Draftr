import { useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import './ContactForm.css'

export default function ContactForm() {
  const formRef = useScrollReveal()
  const channelsRef = useScrollReveal()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="contact">
      <div className="contact__bg">
        <div className="contact__inner container">
          {/* Centered Form Card */}
          <form ref={formRef} className="contact__form reveal-up" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label className="contact__label" htmlFor="name">
                Name<span className="contact__required">*</span>
              </label>
              <input
                className="contact__input"
                type="text"
                id="name"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="email">
                Email<span className="contact__required">*</span>
              </label>
              <input
                className="contact__input"
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__form-row">
              <div className="contact__field">
                <label className="contact__label" htmlFor="company">
                  Company<span className="contact__required">*</span>
                </label>
                <input
                  className="contact__input"
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label className="contact__label" htmlFor="phone">
                  Phone<span className="contact__required">*</span>
                </label>
                <input
                  className="contact__input"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="message">
                Message<span className="contact__required">*</span>
              </label>
              <textarea
                className="contact__textarea"
                id="message"
                name="message"
                placeholder="Enter message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact__submit">
              Send message
            </button>

            <p className="contact__form-note">
              Questions, feedback, or support? Our team's just a message away.
            </p>
          </form>

          {/* Support & Sales - side by side below form */}
          <div ref={channelsRef} className="contact__channels reveal-up">
            <div className="contact__channel">
              <h3 className="contact__channel-title">Support</h3>
              <a href="mailto:support@draftr.com" className="contact__channel-email">
                support@draftr.com
              </a>
              <p className="contact__channel-desc">
                Need help? Our team's here 24/7 to assist you.
              </p>
            </div>
            <div className="contact__channel">
              <h3 className="contact__channel-title">Sales</h3>
              <a href="mailto:sales@draftr.com" className="contact__channel-email">
                sales@draftr.com
              </a>
              <p className="contact__channel-desc">
                Interested in Draftr for your team? Let's talk pricing and solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
