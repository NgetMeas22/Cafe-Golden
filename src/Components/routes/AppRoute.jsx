import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import About from '../page/About'
import Notfound from '../Notfound/Notfound'
import Menu from '../page/Menu'
import ProductDetail from '../Main/Product/ProductDetail'

const AppRoute = () => {
  return (
    <div>
        <BrowserRouter>
           <Routes>
            {/* notfound */}
                <Route path='*' element={<Notfound/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/about' element={<About/>}/>
                
                
                 {/* Detail page */}
                <Route path='/product/detail/:id' element={<ProductDetail/>}/>

           </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRoute