import './App.css'
import { FaWhatsapp } from 'react-icons/fa'; // 👈 import important
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import PurposeSection from './components/PurposeSection'
import FeaturesSection from './components/FeaturesSection'
import ScheduleSection from './components/ScheduleSection'
import ServicesSection from './components/ServicesSection'
import Testimonials from './components/TestimonialsSection'

import ContactFormSection from './components/ContactFormSection'
import Footer from './components/Footer'

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-100/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeaturesSection />
        <ScheduleSection />
        <ServicesSection />
        <Testimonials/>
        <ContactFormSection />
        <Footer />
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/213658934340"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50"
      >
        <FaWhatsapp className="text-5xl" />
      </a>
    </main>
  )
}

export default App;
