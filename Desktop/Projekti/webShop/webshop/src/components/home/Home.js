 import React from 'react'

import Services from '../services/Services'

import './Home.css'
import Headset from '../../asets/images/Headset.jpg'
import Earphone from '../../asets/images/Earphone.jpg'
import MenTShirt from '../../asets/images/MenShirt.jpg'
import Jeweliry from '../../asets/images/Jeweliry.jpg'
import WomenTShirt from '../../asets/images/WomensShirt.jpg'

import { useNavigate } from 'react-router'

const Home = () => {

    const navigate = useNavigate()

    return (
    <div className='homeContainer'>
        <div className='firstImgContainer'>
            <img src={Headset} className='headsetImg'/>
        </div>
        <div className='cardContainers'>
            <div className='cardContainer'>
                <div className='gridItem'>
                    <img src={Earphone} className='gridCardImg' onClick={() => navigate('/shop')}/>
                </div>
                <div className='gridItem'>
                    <img src={MenTShirt} className='gridCardImg' onClick={() => navigate('/shop')}/>
                </div>
                <div className='gridItem'>
                    <img src={WomenTShirt} className='gridCardImg' onClick={() => navigate('/shop')}/>
                </div>
                <div className='gridItem'>
                    <img src={Jeweliry} className='gridCardImg' onClick={() => navigate('/shop')}/>
                </div>
            </div>
        </div>
        <Services />
    </div>
  )
}

export default Home