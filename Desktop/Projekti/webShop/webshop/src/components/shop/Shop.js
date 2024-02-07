import React, { useEffect, useState } from 'react'

import './Shop.css'
import Search from '../search/Search.js';
import Category from '../category/Category.js';

const Shop = () => {

    const [ flagProduct, setFlagProduct ] = useState(false)

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const navBarSwitch = () => {
        setFlagProduct(!flagProduct)
    }

  return (
        <>
            { flagProduct
            ?
            <Category navBarSwitch={() => navBarSwitch()}/>
            :
            <Search navBarSwitch={() => navBarSwitch()}/>
            }
        </>
    )
}

export default Shop