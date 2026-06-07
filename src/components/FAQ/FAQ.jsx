import { useState } from 'react'
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal'
import './FAQ.css'

const faqData = [
  {
    question: 'What is Draftr?',
    answer:
      'Draftr is a powerful design platform that helps teams create, prototype, and collaborate in real-time. It combines intuitive design tools with seamless team collaboration features.',
  },
  {
    question: 'Do I need to install anything to use Draftr?',
    answer:
      'No! Draftr is cloud-based, so you can access it from any browser without downloading or installing anything. We also offer desktop apps for Windows and Mac for offline use.',
  },
  {
    question: 'Can I collaborate with others in real time?',
    answer:
      'Absolutely! Draftr supports real-time collaboration, allowing multiple team members to work on the same project simultaneously. You can leave comments, share feedback, and track changes instantly.',
  },
  {
    question: 'Is there a free version of Draftr?',
    answer:
      'Yes, we offer a free Starter plan that includes 1 active project, basic collaboration tools, and 500MB of cloud storage. You can upgrade anytime for more features and capacity.',
  },
  {
    question: 'What kind of export options does Draftr support?',
    answer:
      'Draftr supports a wide range of export options including PNG, SVG, PDF, and CSS code export. You can also hand off designs directly to developers with our built-in developer tools.',
  },
]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq__item reveal-child ${isOpen ? 'faq__item--open' : ''}`}>
      <button className="faq__question" onClick={onToggle} aria-expanded={isOpen}>
        <span>{item.question}</span>
        <span className="faq__icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                d="M4 10H16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path
                  d="M10 4V16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 10H16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </>
            )}
          </svg>
        </span>
      </button>
      <div className="faq__answer-wrapper">
        <div className="faq__answer">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const headerRef = useScrollReveal()
  const listRef = useStaggerReveal({ stagger: 100 })

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq">
      <div className="faq__inner container">
        <div ref={headerRef} className="faq__header reveal-up">
          <h2 className="faq__title">Frequently asked questions</h2>
          <p className="faq__subtitle">
            Find quick answers to common questions about Draftr.
          </p>
        </div>

        <div ref={listRef} className="faq__list">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
