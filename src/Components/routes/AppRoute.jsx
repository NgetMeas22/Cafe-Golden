import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import About from '../page/About'
import Notfound from '../Notfound/Notfound'

import ProductDetail from '../Main/Product/ProductDetail'
import { Contact } from '../page/Contact'
import OurStory from '../page/OurStory'
import { Menu } from '../page/Menu'

const AppRoute = () => {
  return (
    
        <>
           <Routes>
            {/* notfound */}
                <Route path='*' element={<Notfound/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/ourstory' element={<OurStory/>}/> 
                
                
                 {/* Detail page */}
                <Route path='/product/detail/:id' element={<ProductDetail/>}/>

           </Routes>
        </>
  )
}

export default AppRoute