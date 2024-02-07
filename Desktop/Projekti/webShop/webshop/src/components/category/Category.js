import React, { useState } from 'react'

import './Category.css'
import { CiSearch as SearchIcon } from "react-icons/ci";
import ProductCategory from '../products/ProductCategory.js';

const Category = ({ navBarSwitch }) => {

    const [ selectedCategory, setSelectedCategory ] = useState('all')
    const [ filteredData, setFilteredData ] = useState()

  return (
    <>
      <div className='shopHeader'>
          <div className='navBarShop'>
              <div className='navBarContainer'>
                  <a className='linkButtonCategory' onClick={() => setSelectedCategory(`all`)}>All</a>
                  <a className='linkButtonCategory' onClick={() => setSelectedCategory(`men's clothing`)}>Men's Clothing</a>
                  <a className='linkButtonCategory' onClick={() => setSelectedCategory(`women's clothing`)}>Women's Clothing</a>
                  <a className='linkButtonCategory' onClick={() => setSelectedCategory(`jewelery`)}>Jewelery</a>
                  <a className='linkButtonCategory' onClick={() => setSelectedCategory(`electronics`)}>Electronic</a>
                  <SearchIcon className='searchIcon' size='25px' color='#B6BBC4' onClick={navBarSwitch}/>
              </div>
          </div>
      </div>
      {selectedCategory === `all` && <ProductCategory categorysName="all"/>}
      {selectedCategory === `men's clothing` && <ProductCategory categorysName="men's clothing" />}
      {selectedCategory === `women's clothing` && <ProductCategory categorysName="women's clothing" />}
      {selectedCategory === `jewelery` && <ProductCategory categorysName="jewelery" />}
      {selectedCategory === `electronics` && <ProductCategory categorysName="electronics" />}
    </>
  )
}

export default Category