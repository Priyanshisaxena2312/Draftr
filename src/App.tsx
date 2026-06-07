import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ContactSection from './components/ContactSection'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Background from './components/Background'

function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <div className="noise-overlay" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ContactSection />
        <FAQ />
        <Footer />
      </div>
    </div>
  )
}

export default App
