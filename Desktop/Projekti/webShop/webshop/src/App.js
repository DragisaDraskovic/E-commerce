import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Login from "./components/login/Login";
import Cart from "./components/cart/Cart";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from "react";


function App() {

  const [ isModalOpen, setIsModalOpen ] = useState(false)

  const openModalHandler = () => {
    setIsModalOpen(true)
  }

  const closeModalHandler = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Router>
      <Navbar openModal={openModalHandler}/>
      <Login isOpen={isModalOpen} isClose={closeModalHandler}/>
        <Routes>
          <Route path='/home' element={ <Home /> } />
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop /> } />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </ Router>
    </>
  );
}

export default App;
