import { useScrollReveal } from '../../hooks/useScrollReveal'
import './Hero.css'

export default function Hero() {
  const heroRef = useScrollReveal()
  return (
    <section className="hero">
      <div ref={heroRef} className="hero__inner container reveal-up">
        <h1 className="hero__title">
          Get in touch with us
        </h1>
        <p className="hero__subtitle">
          Have questions, need help, or want to discover more about Draftr? 
          We're here to support you every step of the way.
        </p>
      </div>
    </section>
  )
}
