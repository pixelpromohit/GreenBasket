import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext'

const Bestsellers = () => {
  const {products} = useAppContext()
  return (
    <div className='mt-8 md:mt-16'>
        <p className='text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 mb-4 md:mb-6'>Best Sellers</p>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-6'>
          {products.filter((product) => product.inStock).slice(0, 5).map((product, index) => (
            <ProductCard key={index} product={product}/>
          ))}
        </div>
    </div>
  )
}

export default Bestsellers
