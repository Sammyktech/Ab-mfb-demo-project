import React from 'react'
import rectangleImage from '../images/Rectangle 157.png'
import travImage from '../images/tour-guide 1.png'
import travImage1 from '../images/travelling 1.png'
import travImage2 from '../images/hands 1.png'
import travImage3 from '../images/medical-team 1.png'
import rectImage from '../images/Rectangle 2222.png'
import fineImage from '../images/Ellipse 3.png'
import fineImage1 from '../images/Ellipse 1.png'
import fineImage2 from '../images/Ellipse 2.png'
import fineImage3 from '../images/image 50 (1).png'
import "../App.css"
import rectanImage from '../images/Rectangle 10.png'

const Main = () => {
  return (
    <div>
        <h4 className='center'>CATEGORY</h4>
        <h4 className='cen'>we offer Best Services</h4>
    <div className='flex'>
        <div className='flex1'> 
        <img  src={rectangleImage }></img>
        <img className='xx' src={travImage}></img>
        <h4>Guided Tours</h4>
        <p>sunt qui repellat saepe <br></br>
         quo velit aperiam id <br></br>
         aliquam placeat.</p>

        </div>
        <div className='flex2'>
        <img src={rectangleImage}></img>
        <img className='xx' src={travImage1}></img>
        <h4>Best Flight Option</h4>
        <p>sunt qui repellat saepe <br></br>
         quo velit aperiam id <br></br>
         aliquam placeat</p>

        </div>

        <div className='flex3'>
        <img src={rectangleImage}></img>
        <img className='xx' src={travImage2}></img>
        <h4>Religious Tours</h4>
        <p>sunt qui repellat saepe <br></br>
         quo velit aperiam id <br></br>
         aliquam placeat</p>

        </div>

        <div className='flex4'>
        <img src={rectangleImage}></img>
        <img className='xx' src={travImage3}></img>
        <h4>Medical insurance</h4>
        <p>sunt qui repellat saepe <br></br>
         quo velit aperiam id <br></br>
         aliquam placeat</p>

        </div>
        
    </div>
    <div className='shift'>
    <img src={rectImage}></img>
    </div>
    
    <div className='ddd'>
        <div className='pop'>
            <div className='muu'>
                <img src={fineImage2}></img>
            </div>
            <div className='mu'>
                <img src={fineImage1}></img>
            </div>
            <div className='tup'>
               
                <img src={fineImage3}></img>
            </div>
            <div className='las'>
                <img src={fineImage}></img>
            </div>
            <div className='ttt'>
            <img  src={rectanImage}></img>
            </div>
            <div className='qui'>
                <div class="grid-item">+</div>
                <div class="grid-item">+</div>
                <div class="grid-item">+</div>
                <div class="grid-item"><span>+</span></div>
                <div class="grid-item">+</div>
                <div class="grid-item">+</div>
                <div class="grid-item">+</div>
                <div class="grid-item"><span>+</span></div>
                <div class="grid-item">+</div>
                <div class="grid-item">+</div>
                <div class="grid-item"><span>+</span></div>
                <div class="grid-item">+</div>
                </div> 
            <p className='hori'>Honeymoon Packages</p>
        </div>
        <div className='pp'>
            <h4 className='col'>HONEYMOON SPECIALS</h4>
            <p className='ray'>Our Romantic Tropical <br></br> Destination</p>
            <p className='rey'>Et labore harum non nobis ipsum eum molestias mollitia et corporis
                 <br></br> praesentium a laudantium internos. Non quis eius quo eligendi 
                 corrupti <br></br> et fugiat nulla qui soluta recusandae in maxime quasi aut
                  ducimus illum <br></br> aut optio quibusdam!</p>
                  <button className='but'>View Packages</button>
        </div>
    </div>
    </div>
  )
}

export default Main