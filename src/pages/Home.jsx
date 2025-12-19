import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import JourneysSlider from '../components/JourneysSlider/JourneysSlider'
import DirectionsSection from '../components/DirectionsSection/DirectionsSection'
import ServicesSection from '../components/ServicesSection/ServicesSection'
import SectionHomePrima from '../components/SectionHome1/SectionHomePrima'
import InsightsSection from '../components/InsightsSection/InsightsSection'
// import Login from './components/Login'

function Home() {
  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <DirectionsSection />
      <JourneysSlider />
      <ServicesSection />
      <SectionHomePrima />
      <InsightsSection />

      {/* <Login /> */}
    </main>
  )
}

export default Home