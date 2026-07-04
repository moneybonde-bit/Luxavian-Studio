import BackgroundBlobs from './components/BackgroundBlobs'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import TargetClients from './components/TargetClients'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="bg-[#0A0A0F] text-gray-200 selection:bg-[#FF2D9B]/30 min-h-screen font-sans overflow-x-hidden">
      <BackgroundBlobs />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TargetClients />
        <Process />
        <Portfolio />
        <CallToAction />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
