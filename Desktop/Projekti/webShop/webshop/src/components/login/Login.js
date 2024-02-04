import React, { useState } from 'react'

import './Login.css'
import { IoMdClose as X } from "react-icons/io";
import LoginService from '../../services/LoginService';
import { Await, json, useNavigate } from 'react-router';
import axios, { AxiosError } from 'axios';

const Login = ( { isOpen, isClose } ) => {

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ flagEmptyCredentials, setFlagEmptyCredentials ] = useState(false)


    const handleLogin = async (event) => {
        event.preventDefault()
        const userName = 'mor_2314'
        const paSSword = '83r5^_'

        if(username.trim() !== '' || password.trim() !== '') {
            try {
            //  const response = await LoginService.LoginService(username,password)
              const response = await axios.post('https://fakestoreapi.com/auth/login', {username,password})
                const { token } = response.data
                localStorage.setItem('AccessToken',token)
                setUsername('')
                setPassword('')
                document.getElementById('nesto').style.display = 'none' //razmisli o ovome
            } catch (error){
                if(axios.isAxiosError(error)) {
                    if(error?.response?.status === 401) {
                        setFlagEmptyCredentials(true)
                        setUsername('')
                        setPassword('')
                    }
                }
            }
        } else {
            setFlagEmptyCredentials(true)
        }
    }

    if(isOpen === true) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'unset'
    }


  return (
<>
    { isOpen &&
    <div className='loginContainer' id='nesto' >
        <div className='pageContainer'>
            <div className='containerForXButton'>
                <X className='closeModalButton' size='30px' onClick={isClose}/>
            </div>
            <div className='formContainer'>
            <form className='loginForm' onSubmit={(event) => handleLogin(event)}>
                <h2 className='loginTItle'>LOGIN</h2>
                <input className='inputLogin' type='username' placeholder='Enter username' value={ username } onChange={({ target }) => setUsername(target.value)}/>
                <input className='inputLogin' type='password' placeholder='Enter password'  value={ password } onChange={({ target }) => setPassword(target.value)}/>
                {flagEmptyCredentials && <h3 className='error_message_for_credentials'>Please enter correct username and password </h3>}
                <button className='loginSubmitButton' type='submit'>Login</button>
            </form>
            </div>
        </div>
    </div>
    }
</>
  )
}

export default Login