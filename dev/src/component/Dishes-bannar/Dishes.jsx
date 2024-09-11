import React from 'react'
import './Dishes.css'
import Card from '../common/Card/Card'
import { cardimg } from '../../utils/constant/images'
import { cardData } from '../../utils/constant/dishes'
import { mokimg } from '../../utils/constant/images'
function Dishes() {
  return (
    <>
    <div className="text-wrapper">
        <h1>MORE THAN <span>10,000</span> DISHES <br/> TO ORDER!</h1>
        <p>Welcome to The Biggest Network of Food Ordering & Delivery</p>
    </div>
    <div className="card-wapper">
    <div className='cards'>
      <Card data={cardData[0]}/>
      <Card data={cardData[1]}/>
      <Card data={cardData[2]}/>
    </div>
    <div className='cards1'>
      <h2>Find <span className='deal'>deals</span>, <span className='free'>free delivery</span>, and more <br />from our restaurant partners.</h2>
      <img src={cardimg.cardImg} alt="" />
    </div>
    </div>
    <div className="card-wrapper1">
      <div className="mok">
      <img src={mokimg.mokImg1} alt="" />
      <h3>“Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br/> ut labore et dolore magna aliqua.”</h3>
      </div>
      <div className="testimonial-card">
        <Card data={cardData[3]}/>
        <Card data={cardData[4]}/>
        <Card data={cardData[5]}/>
      </div>
    </div>
    </>
  )
}

export default Dishes
