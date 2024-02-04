import axios from 'axios'

const getAllItems = () => {

    // const request = axios.get(process.env.REACT_APP_BASE_URL + '/products')
    const request = axios.get('https://fakestoreapi.com/products')
    return request
}

const getAllCategorys = () => {
    const request = axios.get('https://fakestoreapi.com/products/categories')
    return request
}

const getCategory = (category) => {
    const request = axios.get(`https://fakestoreapi.com/products/category/${category}`)
    return request
}

export default { getAllItems, getAllCategorys, getCategory }