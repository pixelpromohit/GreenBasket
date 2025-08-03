import React from 'react'
import { assets, features } from '../assets/assets'


const BottomBanner = () => {
  return (
    <div className='relative mt-16 md:mt-24'>
      <img src={assets.bottom_banner_image} alt="banner" className='w-full hidden md:block'/>
      <img src={assets.bottom_banner_image_sm} alt="banner" className='w-full md:hidden'/>

      <div className='absolute inset-0 flex flex-col items-center md:items-end
       md:justify-center pt-12 md:pt-0 md:pr-16 lg:pr-24 px-4 md:px-0'>
        <div className='text-center md:text-left'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-4 md:mb-6'>Why We Are the Best?</h1>
            {features.map((feature, index) => (
                <div key={index} className='flex items-center gap-3 md:gap-4 mt-3 md:mt-2'>
                    <img src={feature.icon} alt={feature.title} className='w-8 h-8 md:w-11 md:h-11'/>
                    <div>
                        <h3 className='text-base md:text-lg lg:text-xl font-semibold'>{feature.title}</h3>
                        <p className='text-gray-500/70 text-xs md:text-sm'>{feature.description}</p>
                    </div>
                    
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default BottomBanner
