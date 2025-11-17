import React from 'react'
import Card from './Card'
import { products } from '../../../Data'

const Productcard = () => {
  return (
    <div>
        <Card product={products}/>
    </div>
  )
}

export default Productcard