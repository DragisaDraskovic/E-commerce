import React, { useEffect, useState } from 'react'

import ItemService from '../../services/ItemService'
import './ProductCategory.css'

const ProductCategory = ( {categorysName} ) => {

  const [ categoryProduct, setCategoryProduct ] = useState([])
  const [ allProduct, setAllProduct ] = useState([])

  useEffect(() => {
    getCategoryProduct(categorysName)
    getAllItem()
    },[])

  const getCategoryProduct = ( categoryName ) => {
    ItemService.getCategory(categoryName)
    .then((respnse) => setCategoryProduct(respnse.data))
    .catch((error) => console.error(error))
  }

  const getAllItem = () => {
    ItemService.getAllItems()
    .then((respnse) => setAllProduct(respnse.data))
    .catch((error) => console.error(error))
  }

  return (
    <>
        { categorysName === 'all' ?
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
                { categoryProduct.map(product =>
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

export default ProductCategory