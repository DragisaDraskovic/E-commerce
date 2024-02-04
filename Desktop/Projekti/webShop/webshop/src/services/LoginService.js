import axios from "axios"

const LoginService = async ( username, password ) => {
    const Email = JSON.parse(username)
    const Password = JSON.parse(password)
    return axios.post('https://fakestoreapi.com/auth/login',  (Email, Password) )
}

const IsLoggedIn = () => {
    return !!localStorage.getItem('userAccessToken')
}

export default { LoginService, IsLoggedIn }