import React from 'react'
import About from './components/About'
import Team from './components/Team'
import Header from './components/Header'
import Hero from './components/Hero'
import Service from './components/Service'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BMICalculator from './components/BMICalculator'

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Service/>
      <Team/>
      <BMICalculator/>
      <Contact/>
      <Footer/>

    </>
  )
}

export default App
