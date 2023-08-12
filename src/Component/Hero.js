import React from 'react'
import heroImage from '../images/Rectangle 19290.png'
import arrowImage from '../images/Arrow 05 (1).png'
import vectorImage from '../images/Vector 1.png'
import "../App.css"
import elipseImage31 from '../images/Ellipse 31.png'
import elipseImage32 from '../images/Ellipse 32.png'
import elipseImage33 from '../images/Ellipse 33.png'
import elipseImage34 from '../images/Ellipse 34.png'
import elipseImage35 from '../images/Ellipse 35.png'
import elipseImage36 from '../images/Ellipse 36.png'
import elipseImage37 from '../images/Ellipse 37.png'
import elipseImage620 from '../images/Ellipse 620.png'
import elipseImage from '../images/Ellipse 620@2x.png'
import unionImage from '../images/Union.png'


const Hero = () => {
  let listColor ={
    
    backgroundColor:'rgb(192,189,189)',
  }
    
  return (
    <div className='heroSection container-fluid' >
<section>
        <nav className=''>
         
         <div className='opay mt-5'>
         <h3 id='first'>Travel </h3>
         <img src={arrowImage}></img>
         </div>
        

<div className='d-flex align-items-center justify-content-around mt-5'>
<a href='' class=" me-5 text-light active" id='hov'>Home</a>
        <a href='' class=" me-5 text-light text-decoration-none" id='hov'>About</a>
        <div class="dropdown">
  <a class=" dropdown-toggle me-5 text-light text-decoration-none" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id='hov'>
    Services
  </a>

  <ul class="dropdown-menu" style={listColor}>
    <li><a class="dropdown-item" href="#" style={{color:'rgb(222,219,219)'}}>Honeymoon Packages</a></li>
    <li><a class="dropdown-item" href="#" style={{color:'rgb(222,219,219)'}}>Tours Packages</a></li>
    <li><a class="dropdown-item" href="#" style={{color:'rgb(222,219,219)'}}>Musical Events</a></li>
    <li><a class="dropdown-item" href="#" style={{color:'rgb(222,219,219)'}}>Build Packages</a></li>
  </ul>
</div>
<a href='' class=" text-light text-decoration-none" id='hov'>Upcoming Packages</a>
</div>



        <button className='getInTouch mt-5'>Get in Touch</button>
  </nav>
</section>











  <div className='curl'>
   <img className='top' src={vectorImage}></img>
   <h3 className='slogan'>No matter where you're <br></br>
   going to,we'll take you <br></br> <h3 className='shi'>there</h3> </h3>
   </div>
   
   <div className='opps'>
   <button type="button" class="btn btn-none"style={{color:'white'}}>Where to?</button>
    <div className='fro'></div>
    <div class="dropdown">
  <button class="btn btn-none dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"style={{color:'white'}}>
    Travel Type
  </button>
  <ul class="dropdown-menu" style={listColor}>
    <li><a class="dropdown-item" href="#" style={{color:'rgb(222,219,219)'}}>Travel Type</a></li>
    <li><a class="dropdown-item" href="#" style={{color:'rgb(222,219,219)'}}>Travel Type</a></li>
    <li><a class="dropdown-item" href="#" style={{color:'rgb(222,219,219)'}}>Travel Type</a></li>
  </ul>
</div>
   <div className='fro'></div>
   <div class="dropdown">
  <button class="btn btn-none dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}}>
    Duration
  </button>
  <ul class="dropdown-menu"style={listColor}>
    <li><a class="dropdown-item" href="#" style={{color:'rgb(222,219,219)'}}>Duration</a></li>
    <li><a class="dropdown-item" href="#" style={{color:'rgb(222,219,219)'}}>Duration</a></li>
    <li><a class="dropdown-item" href="#" style={{color:'rgb(222,219,219)'}}>Duration</a></li>
  </ul>
</div>
  
<button type="button" class="btn btn-lg ps-5 pe-5" style={{background: '#DF6951', color:'white'}}>Submit</button>
   </div>
   <div className='elipse'>
    <div className='lou'>
    <img className='img1' src={elipseImage31}></img>
    <img className='img2' src={elipseImage32}></img>
    <img className='img3' src={elipseImage33}></img>
    <img className='img4' src={elipseImage34}></img>
    <img className='img5' src={elipseImage35}></img>
    <img className='img6' src={elipseImage36}></img>
    <img className='img7' src={elipseImage37}></img>
    <span>+</span>
    </div>
    <p>2,500 people booked tomorrowland Event in the last 24 hours</p>
    
   </div>

    </div>
  )
}

export default Hero