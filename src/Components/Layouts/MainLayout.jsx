import React from 'react'
import CartPage from '../Cart/CartPage'
import AppRoute from '../routes/AppRoute'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const MainLayout = ({toggleCart,cartOpen}) => {
  return (
    <div>
        <Navbar toggleCart={toggleCart}/>
        <CartPage isOpen={cartOpen} closeCart={toggleCart} />
        <AppRoute/>
        <Footer/>

    </div>
  )
}

export default MainLayout