import React from 'react'
import logoImage from '../images/image 909.png'
import logoImage1 from '../images/image 912.png'
import "../App.css"
import trivagoImage from '../images/tri.png'
import bnbImage from '../images/bbnb.png'
import turkishImage from '../images/turk.png'


const Logo = () => {
  return (
    <div className='logo'>
        <img src={logoImage}></img>
        <img src={trivagoImage}></img>
        <img src={bnbImage}></img>
        <img src={turkishImage}></img>
        <img src={logoImage1}></img>
    </div>
  )
}

export default Logo