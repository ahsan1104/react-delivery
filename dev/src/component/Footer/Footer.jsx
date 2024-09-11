import React from 'react'
import { logoImage } from '../../utils/constant/images'
import { appLogo } from '../../utils/constant/images'
import './Footer.css'

function Footer() {
  return (
    <div className="footer-wrapper">
      <div>
        <img src={logoImage.logo1} alt="" />
        <div className='f1'>
          <img src={appLogo.applelogo} alt="" />
          <img src={appLogo.playstorelogo} alt="" />
        </div>
      </div>
      
      <div className='u1'>
        <div>
          <ul>
            <li><h3>Quick links</h3></li>
            <li>Features</li>
            <li>Food Menu</li>
            <li>Offer</li>
            <li>Review</li>
            <li>Rider</li>
          </ul>
        </div>
        <div>
          <ul>
            <li><h3>Get to Know Us</h3></li>
            <li>Gift Cards</li>
            <li>DoorDash Stories</li>
            <li>LinkedIn</li>
            <li>Glassdoor</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div>
          <ul>
            <li><h3>News</h3></li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Lift Media </li>
            <li>Press</li>
            <li>Presse kit</li>
          </ul>
        </div>
        <div>
          <ul>
            <li><h3>Contact</h3></li>
            <li>WhatsApp</li>
            <li>Support 24</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
