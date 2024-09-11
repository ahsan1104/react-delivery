import React from 'react'
import './Order.css'
import Card from '../common/Card/Card'
import { cardData } from '../../utils/constant/dishes'

function Order() {
  return (
   <div className="order-wrapper">
    <h1>How To Order ?</h1>
    <div className="num">
        <div>
            <h2>01</h2>
            <Card className='a4' data={cardData[6]}/>
        </div>
        <div>
            <h2>02</h2>
            <Card data={cardData[7]}/>
        </div>
        <div>
            <h2>03</h2>
            <Card data={cardData[8]}/>
        </div>
        <div>
            <h2>04</h2>
            <Card data={cardData[9]}/>
        </div>
       
    </div>
   </div>
  )
}

export default Order
