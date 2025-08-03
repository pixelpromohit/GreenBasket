import React from 'react'

const NewsLetter = () => {
    
    return (
        <div className="flex flex-col items-center justify-center text-center space-y-2 mt-16 md:mt-24 pb-8 md:pb-14 px-4">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">Never Miss a Deal!</h1>
            <p className="text-sm md:text-base lg:text-lg text-gray-500/70 pb-6 md:pb-8 max-w-md md:max-w-2xl">
                Subscribe to get the latest offers, new arrivals, and exclusive discounts
            </p>
            <form className="flex flex-col sm:flex-row items-center justify-between max-w-2xl w-full gap-3 sm:gap-0">
                <input
                    className="border border-gray-300 rounded-md h-12 md:h-13 outline-none w-full sm:border-r-0 sm:rounded-r-none px-3 text-gray-500 text-sm md:text-base"
                    type="text"
                    placeholder="Enter your email id"
                    required
                />
                <button type="submit" className="w-full sm:w-auto px-8 md:px-12 h-12 md:h-13 text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer rounded-md sm:rounded-l-none text-sm md:text-base">
                    Subscribe
                </button>
            </form>
        </div>
    )
}

export default NewsLetter