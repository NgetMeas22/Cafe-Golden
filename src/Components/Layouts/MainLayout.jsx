import React from 'react'

import AppRoute from '../routes/AppRoute'
import Footer from '../Footer/footer'
import Navbar from '../Navbar/Navbar'

const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <AppRoute/>
        <Footer/>

    </div>
  )
}

export default MainLayout