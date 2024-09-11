import React from 'react'
import Header from '../component/header/header'
import Bannar from '../component/Bannar/Bannar'
import Dishes from '../component/Dishes-bannar/Dishes'
import Order from '../component/Order/Order'
import Feedback from '../component/Feedback/Feedback'
import Subscribe from '../component/Subscribe/Subscribe'
import Footer from '../component/Footer/Footer'

function Home() {
  return (
    <div>
      <Header/>
      <Bannar/>
      <Dishes/>
      <Order/>
      <Feedback/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default Home

