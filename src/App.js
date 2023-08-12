import React from 'react'
import Hero from './Component/Hero'
import Logo from './Component/Logo'
import Main from './Component/Main'
import Section from './Component/Section'
import Footer from './Component/Footer'
import "./App.css"
function App() {
  return (
    <div className='container-fluid p-0'>
      <Hero/>
      <Logo/>
      <Main/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default App

