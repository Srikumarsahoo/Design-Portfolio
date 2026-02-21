import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Brands from '../components/Brands'
import About from '../components/About'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Brands />
      <About />
      <Process />
      <Testimonials />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
