import React from 'react'
import Herosection from './Herosection'
import WorksSection from './WorksSection'
import About from './About'
import Service from './Service'
import Feature from './Feature'
import DoctorList from './DoctorList'


const Home = () => {
  return (
    <div>
      {/* ============= Hero Icon ===================== */}
      <Herosection />

      {/* ============= Work Section ===================== */}

      <WorksSection/>

      {/* ============= About Section ===================== */}

      <About />

      {/* ============= Service Section ===================== */}

      <Service />

      {/* ============= Feature Section ===================== */}

      <Feature />

      {/* ============= Doctors Section ===================== */}

      <DoctorList />
    </div>
  )
}

export default Home
