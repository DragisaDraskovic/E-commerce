import React, { useEffect, useState } from 'react'

import './Shop.css'
import ProductCategory from '../products/ProductCategory.js'
import Search from '../search/Search.js';
import { CiSearch as SearchIcon } from "react-icons/ci";

const Shop = () => {

    const [ flagSearchButton, setFlagSearchButton ] = useState(false)
    const [ searchValue ,setSearchValue] = useState('')
    const [ flagAllProduct, setFlagAllProduct ] = useState(false)
    const [ selectedCategory, setSelectedCategory ] = useState('all')
    const [ search, setSearch ] = useState('')

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const navBarSwitch = () => {
        setFlagSearchButton(!flagSearchButton)
        setFlagAllProduct(!flagAllProduct)
    }

    const handleSearch = (e) => {
        const term = e.target.value
        setSearch(term)
    }

  return (
        <>

            { flagSearchButton ?
                <>
                    <div className='shopHeader'>
                        <div className='navBarShop'>
                            <div className='navBarContainer'>
                                <a className='linkButtonCategory' onClick={() => setSelectedCategory(`all`)}>All</a>
                                <a className='linkButtonCategory' onClick={() => setSelectedCategory(`men's clothing`)}>Men's Clothing</a>
                                <a className='linkButtonCategory' onClick={() => setSelectedCategory(`women's clothing`)}>Women's Clothing</a>
                                <a className='linkButtonCategory' onClick={() => setSelectedCategory(`jewelery`)}>Jewelery</a>
                                <a className='linkButtonCategory' onClick={() => setSelectedCategory(`electronics`)}>Electronic</a>
                                <SearchIcon className='searchIcon' size='25px' color='#B6BBC4' onClick={() => navBarSwitch()}/>
                            </div>
                        </div>
                    </div>
                </>
            :
                <>
                    <div className='shopHeader'>
                        <div className='navBarShop'>
                            <a className='linkButtonCategory' onClick={() => navBarSwitch()} >Categorys</a>
                            <Search setSearchValue={setSearchValue}/>
                        </div>
                    </div>
                </>
            }
            {selectedCategory === `all` && <ProductCategory categorysName="all" searchValue={searchValue}/>}
            {selectedCategory === `men's clothing` && <ProductCategory categorysName="men's clothing" />}
            {selectedCategory === `women's clothing` && <ProductCategory categorysName="women's clothing" />}
            {selectedCategory === `jewelery` && <ProductCategory categorysName="jewelery" />}
            {selectedCategory === `electronics` && <ProductCategory categorysName="electronics" />}
        </>
    )
}

export default Shop