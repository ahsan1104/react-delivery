import React from 'react'
import Button from '../common/button/button'
import './Header.css'
import { logoImage } from '../../utils/constant/images'


function Header() {
  return (
    <div className="header-wrapper">
      <div className="logo">
        <img src={logoImage.logo} alt="" />
      </div>
      <div className="navbar">
        <ul>
          <li>
            <a href="#">Restaurants</a>
          </li>

          <li>
            <a href="#">Recipes</a>
          </li>

          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Page </a>
          </li>
        </ul>
      </div>
      <div className="btn-wrapper">
        <a href="#"><h3>login</h3></a>
        <Button/>
      </div>
    </div>
  )
}

export default Header

