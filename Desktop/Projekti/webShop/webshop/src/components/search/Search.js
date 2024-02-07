import React, { useEffect, useMemo, useState } from 'react'

import './Search.css'
import { CiSearch as SearchIcon } from "react-icons/ci";
import ItemService from '../../services/ItemService';

const Search = ({ navBarSwitch }) => {

  const [ searchQuery, setSearchQuery ] = useState('')
  const [ searchResult, setSearchResult ] = useState([])
  const [ allProduct, setAllProduct ] = useState([])

  useEffect(() => {
    getAllItem()
  }, [])

  const getAllItem = () => {
    ItemService.getAllItems()
    .then((response) => setAllProduct(response.data))
    .catch((error) => console.error(error))
  }

  const handleSearch = (searchQuery) => {
    const filteredResult = allProduct.filter(item =>
      item.title.toString().toLowerCase().includes(searchQuery.toLowerCase()))
      setSearchResult(filteredResult)
  }

  const handleChange = (e) => {
    const searchValue = e.target.value
    setSearchQuery(searchValue)
    handleSearch(searchValue)
    console.log(searchQuery)
  }

  return (
    <>
            <div className='shopHeader'>
                <div className='navBarShop'>
                    <a className='linkButtonCategory' onClick={navBarSwitch} >Categorys</a>
                    <input className='inputNavBarShop' type='text' placeholder='Enter product name...' onChange={handleChange} value={searchQuery} />
                    {/* <SearchIcon size='25px' className='searchIcon' color='#B6BBC4' /> */}
                </div>
            </div>
            {searchQuery === ''
            ?
            <div className='shopCardsContainer'>
            { allProduct.map(product =>
                <div className='shopCardContainer' key={product.id}>
                    <img className='shopCardImage' src={product.image}/>
                    <div className='shopDescriptionContainer'>
                        <p>{product.title.substring(0,25)}...</p>
                        <p className='shopCardPrice'>{product.price}$</p>
                        <button className='showMoreButton'>Show More</button>
                    </div>
                </div>
            )}
            </div>
            :
            <div className='shopCardsContainer'>
            { searchResult.map(product =>
                <div className='shopCardContainer' key={product.id}>
                    <img className='shopCardImage' src={product.image}/>
                    <div className='shopDescriptionContainer'>
                        <p>{product.title.substring(0,25)}...</p>
                        <p className='shopCardPrice'>{product.price}$</p>
                        <button className='showMoreButton'>Show More</button>
                    </div>
                </div>
            )}
            </div>
            }
    </>
  )
}

export default Search