import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Accessories from './components/Accessories'
import Brands from './components/Brands'
import About from './components/About'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="relative min-h-screen">
      <WhatsAppButton></WhatsAppButton>
      <Header />
      <Hero />
      <Services />
      <Accessories />
      <Brands />
      <About />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
