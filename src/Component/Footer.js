import React from 'react'
import linkImage from '../images/052-linkedin.png'
import linkImage2 from '../images/025-messenger.png'
import linkImage3 from '../images/096-twitter.png'
import linkImage4 from '../images/097-twoo.png'
import arrowwImage from '../images/Arrow 05 (1).png'
import footer from '../images/Footer img.png'



const Footer = () => {
  return (
    <div className='footer'>
        <div className='lop'>   
            <div className='lopp'>
                    <h2>Travel</h2>
                    <img src={arrowwImage}></img>
                    <p>Travel helps companies <br></br>
                     manage payments easily.</p>
                     <div className='soc'>
                        <img src={linkImage}></img>
                         <img src={linkImage2}></img>
                          <img src={linkImage3}></img>
                           <img src={linkImage4}></img>
                         </div>
                </div>

                <div>
                    <h2>Company</h2>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>Pricing</p>
                </div>    

                <div>
                    <h2>Destination</h2>
                    <p>Maldives</p>
                    <p>Los Angeles</p>
                    <p>Las Vegas</p>
                    <p>Torronto</p>
                </div>  

                <div className='wer'>
                    <h2>Join Our Newsletter</h2>
                    <li>Will send you weekly updates
                         for your better <br></br>tour packages</li>
                         <div>
                    <input placeholder='Your email address'></input>
                    <button>Subscribe</button>
                        </div>
                </div>  

               
        </div>
         <hr></hr>
         <div className='lst'>
        <h4>Copyright @ Xpro 2022. All Rights Reserved.</h4>
        </div>
          
    </div>
  )
}

export default Footer