import React from 'react'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Skills from './components/Skills/Skills'
import WorkExperience from './components/workexperience/WorkExperience'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Hero/>
        <Skills/>
        <WorkExperience/>
        <ContactMe/>
      </div>
      <Footer/>
    </>
  )
}

export default App