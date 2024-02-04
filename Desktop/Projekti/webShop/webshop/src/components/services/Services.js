import React from 'react'

import './Services.css'
import { LiaShippingFastSolid as ShippingTruck } from "react-icons/lia"
import { AiOutlineSafetyCertificate as SafeMoney } from "react-icons/ai";
import { IoIosHeadset as Headset } from "react-icons/io"
import { LuWallet as Wallet } from "react-icons/lu"

const Services = () => {
  return (
    <div className='servicesContainer'>
      <div className='iconsContainer' >
        <ShippingTruck size='40px' className='servicesIcons' />
        <div className='servicesText'>
          <p className='topicText' >Free Shipping</p>
          <p>Free Shipping On All Order</p>
        </div>
      </div>
      <div className='iconsContainer' >
        <SafeMoney size='40px' className='servicesIcons' />
        <div className='servicesText'>
          <p className='topicText' >Money Guarantee</p>
          <p>30 Day Money Back</p>
        </div>
      </div>
      <div className='iconsContainer' >
        <Headset size='40px' className='servicesIcons' />
        <div className='servicesText'>
          <p className='topicText' >Online Support 24/7</p>
          <p>Technical Support 24/7</p>
        </div>
      </div>
      <div className='iconsContainer' >
          <Wallet size='40px' className='servicesIcons' />
          <div className='servicesText'>
          <p className='topicText' >Secure Payment</p>
          <p>All Carts Acceppted</p>
        </div>
      </div>
    </div>
  )
}

export default Services