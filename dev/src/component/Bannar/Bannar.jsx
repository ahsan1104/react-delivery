import React from 'react'
import Button from '../common/button/button'
import './Bannar.css'
import {appLogo , Bannarimg} from '../../utils/constant/images'

function Bannar() {
  return (
    <div className="bannar-wrapper">
      <div className="textarea">
        <div className="text">
          <h1>Your Favorite Food <br/> Delivery Partner</h1>
          <p>The food at your doorstep. Why starve when you have us. You <br/>hunger partner. Straight out of the oven to your doorstep. </p>
        </div>
        <div className="location">
          <p>Enter your delivery location </p>
          <button>Order Now</button>
        </div>
        <div className="app">
          <img src={appLogo.applelogo} alt="" />
          <img src={appLogo.playstorelogo} alt="" />
        </div>
      </div>
      <div className="image">
        <img src={Bannarimg.bannarimg} alt="" />
      </div>
    </div>
  
  )
}

export default Bannar
