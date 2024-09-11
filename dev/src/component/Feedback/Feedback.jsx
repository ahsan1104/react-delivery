import React from 'react'
import { mokimg } from '../../utils/constant/images'
import './Feedback.css'

function Feedback() {
  return (
    <div className="feedback-wrapper">
        <h1>Our Clients Feedback</h1>
        <p>The food at your doorstep. Why starve when you have us. You hunger <br /> partner. Straight out of the oven to your doorstep.</p>
        <img src={mokimg.mokImg2} alt="" />
        <h2>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua
            . Ut enim <br /> ad minim veniam, quis nostrud exercitation ullamco laboris nisi”</h2>
        <div className="ceo">    
           <h3>Mitchell Marsh</h3> 
           <p>CEO, Bexon Agency</p>
        </div>

        <div className='b1'>
          <span className='a1'><i class="fa-solid fa-less-than fa-xl"></i></span>
          <span className='a2'><i class="fa-solid fa-greater-than fa-xl"></i></span>
        </div>
    </div>
  )
}

export default Feedback
