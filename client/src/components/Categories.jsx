import React from 'react'
import { categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

function Categories() {

    const {navigate} = useAppContext()

  return (
    <div className='mt-8 md:mt-16'>
      <p className='text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 mb-4 md:mb-6'>Categories</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4'>
            
            {categories.map((category, index) => (
                <div key={index} 
                    className='group cursor-pointer py-4 md:py-5 px-2 md:px-3 gap-2 md:gap-3 rounded-xl md:rounded-lg flex flex-col justify-center items-center transition-all duration-300 hover:scale-105 hover:shadow-lg'
                    style={{backgroundColor: category.bgColor}}
                    onClick={() => {
                        navigate(`/products/${category.path.toLowerCase()}`)
                        scrollTo(0, 0)
                    }}
                >
                    <img src={category.image} alt={category.text} className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain group-hover:scale-110 transition-transform duration-300' />
                    <p className='text-xs md:text-sm font-medium text-gray-700 text-center leading-tight'>{category.text}</p>
                </div>
            ))}

      </div>
    </div>
  )
}

export default Categories
