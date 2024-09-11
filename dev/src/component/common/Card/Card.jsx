import React from 'react'
import './Card.css'

function Card({data}) {
  const{contant , tital} = data
  return (
    <div className='card'>
      <img src={contant} alt=""className="circle" />
      <h3>{tital}</h3>
    </div>
  )
}

export default Card

