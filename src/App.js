import React from 'react'
import Hero from './Component/Hero'
import Logo from './Component/Logo'
import Main from './Component/Main'
import Section from './Component/Section'
import Footers from './Component/Footers'
import "./App.css"
import {BrowserRouter, Routes,Route } from 'react-router'
// import {Link} from 'react-router-dom'
function App() {
  return (
    <div className=''>
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero/>}></Route>
        <Route path='/Main' element={<Main/>}></Route>
        <Route path='/Section' element={<Section/>}></Route>
        <Route path='/Footers' element={<Footers/>}></Route> */}
       
      {/* </Routes>
      </BrowserRouter> */}
      <Hero/>
      <Logo/>
      <Main/>
      <Section/>
      <Footers/>
    </div>
  )
}

export default App

