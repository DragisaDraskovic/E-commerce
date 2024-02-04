import React, { useMemo, useState } from 'react'

import './Search.css'
import { CiSearch as SearchIcon } from "react-icons/ci";

const Search = ({ data }) => {

  // const [ searchData, setSearchData ] = useState('')
  // const [ searchResult, setSearchResult ] = useState(data)

  // const handleSearch = (event) => {
  //   const term = event.target.value
  //   setSearchData(term);

  //   const filteredResult = data.filter(
  //     item => item.toLowerCase().includes(term.toLowerCase())
  //     )
  //     setSearchResult(filteredResult)
  // }

  return (
    <>
            <input className='inputNavBarShop' placeholder='Enter product name...' onChange={handleSearch}/>
            <SearchIcon size='25px' className='searchIcon' color='#B6BBC4'/>
    </>
  )
}

export default Search