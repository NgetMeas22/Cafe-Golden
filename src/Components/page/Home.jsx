import React from 'react'
import Slidebar from '../Main/Slidebar'
// import Card from '../Main/Product/Card'
import Productcard from '../Main/Product/Productcard'
import OurStory from './OurStory'
import About from './About'
import { Contact } from './Contact'

const Home = () => {
  return (
    <div>
      <Slidebar/>
      {/* <Card/> */}
      <Productcard/>
      <OurStory/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Home