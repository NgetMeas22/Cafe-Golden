import React, { useState } from 'react'
import MainLayout from './Components/Layouts/MainLayout'
import { CartProvider } from './Components/Context/CartContext';
import { BrowserRouter } from 'react-router-dom';
const App = () => {
  const [cartOpen, setCartOpen]=useState(false);
  const toggleCart =()=> setCartOpen(!cartOpen);

  return (

    <CartProvider >
        <BrowserRouter>
           <MainLayout toggleCart={toggleCart} cartOpen={cartOpen}/>
        </BrowserRouter>
      
    </CartProvider>
  )
}

export default App