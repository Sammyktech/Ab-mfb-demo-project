import React from 'react'
import groupImage1 from '../images/Group 7.png'
import groupImage2 from '../images/Group 11.png'
import groupImage3 from '../images/Group 12.png'
import tangleImage from '../images/Rectangle 17.png'
import imaImage1 from '../images/image 872.png'
import imaImage2 from '../images/image 32.png'
import elImage from '../images/Ellipse 8.png'
import leafImage from '../images/leaf 1.png'
import mapImage from '../images/map 1.png'
import sendImage from '../images/send 2.png'
import buildingImage from '../images/building 1.png'
import heartImage from '../images/heart (6) 1.png'
import groImage from '../images/Group 3.png'
import "../App.css"

const Section = () => {
  return (
    <div className='groundSection'>
        <div className='groundSection2'>
        <div className='cent'>
            <h5>Fast&Easy</h5>
            <h2>Get Your Favourite <br></br>
                Resort Bookings</h2>
                <div className='wwwe'>
                        <img src={groupImage1}></img> 
                        <h4>Choose Destination <p>Lorem ipsum dolor sit amet, consectetur <br></br>
adipiscing elit. Urna, tortor tempus. </p></h4>
                        
                        </div>

                        <div className='wwwe'>
                        <img src={groupImage3}></img> 
                        <h4>Choose Availability  <p>Lorem ipsum dolor sit amet, consectetur <br></br>
adipiscing elit. Urna, tortor tempus. </p></h4>
                       
                        </div>
                   
                        <div className='wwwe'>
                        <img src={groupImage2}></img> 
                        <h4>Let's Go  <p>Lorem ipsum dolor sit amet, consectetur <br></br>
adipiscing elit. Urna, tortor tempus. </p></h4>
                       
                        </div>
              
        </div>
        <div className='roll' style={{zIndex:'9999999'}}>
            <div className='rrr'> 
                <img src={tangleImage}></img>
                </div>
                <div className='mm'>
                    <h4>Trip to Hawaii</h4>
                    <p>14-29 June | by JR Martinax</p>
                    <div className='space'>
                        <img src={leafImage}></img>
                        <img src={mapImage}></img>
                        <img src={sendImage}></img>
                    </div>
                    <div className='spacing'>
                        <img src={buildingImage}></img>
                        <p>60 people are interested</p>
                        <img className='mar' src={heartImage}></img>
                    </div>
                <div className='qu'>
                <section className='d-flex qu'>
            <div className='d1' style={{width:'30px', }}>
                <div><i class="fa-solid fa-plus fa-sm mb-3   text-danger"></i></div>
                <div><i class="fa-solid fa-plus fa-sm mb-3 "></i></div>
                <div><i class="fa-solid fa-plus fa-sm mb-3 "></i></div>
                <div><i class="fa-solid fa-plus fa-sm mb-3 "></i></div>
                <div><i class="fa-solid fa-plus fa-sm"></i></div>
            </div>
            <div className='d1' style={{width:'30px',}}>
                <div><i class="fa-solid fa-plus fa-sm mb-3 "></i></div>
                <div><i class="fa-solid fa-plus fa-sm mb-3 "></i></div>
                <div><i class="fa-solid fa-plus fa-sm mb-3 "></i></div>
                <div><i class="fa-solid fa-plus fa-sm mb-3 "></i></div>
                <div><i class="fa-solid fa-plus fa-sm"></i></div>
            </div>
            <div className='d1 me-2' style={{width:'30px',}}>
                <div className=''><i class="fa-solid fa-plus  mb-3 fa-sm text-light"></i></div>
                <div><i class="fa-solid fa-plus  mb-3 fa-sm text-light"></i></div>
                <div><i class="fa-solid fa-plus  mb-3 fa-sm text-light"></i></div>
                <div><i class="fa-solid fa-plus  mb-3 fa-sm"></i></div>
                <div><i class="fa-solid fa-plus fa-sm text-danger"></i></div>
            </div>
            <div className='d1' style={{width:'30px',}}>
                <div><i class="fa-solid fa-plus fa-sm mb-3 text-light"></i></div>
                <div><i class="fa-solid fa-plus fa-sm mb-3  text-light"></i></div>
                <div><i class="fa-solid fa-plus fa-sm mb-3  text-light"></i></div>
                <div><i class="fa-solid fa-plus fa-sm mb-3  text-danger"></i></div>
                <div><i class="fa-solid fa-plus fa-sm"></i></div>
            </div>
            <div className='d1' style={{width:'30px',}}>
                <div><i class="fa-solid fa-plus mb-3 fa-sm text-light"></i></div>
                <div><i class="fa-solid fa-plus  mb-3 fa-sm text-light"></i></div>
                <div><i class="fa-solid fa-plus text-danger fa-sm mb-3  text-light"></i></div>
                <div><i class="fa-solid fa-plus fa-sm mb-3 "></i></div>
                <div><i class="fa-solid fa-plus fa-sm"></i></div>
            </div>
            </section>

                </div> 
                </div>
            </div>  
                            <div className='popp'>
                                <div className='poppp'>
                                <img src={imaImage2}></img>
                                </div>
                                <div className='uuyy'>
                                    <p className='uuy'>Ongoing</p>
                                    <h4>Trip to rome</h4>
                                    <p><span>40% </span> completed</p>
                                    <img src={groImage}></img>
                                </div>
                            </div>  
        </div>
    </div>
  )
}

export default Section