import React from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const ProductCard = ({product}) => {
    const {currency, addToCart, removeFromCart, cartItems, navigate} = useAppContext()

    

    return product && (
        <div onClick={() => {navigate(`/products/${product.category.toLowerCase()}/${product._id}`); scrollTo(0, 0)}} className="border border-gray-200 rounded-lg p-3 md:p-4 bg-white w-full hover:shadow-md transition-shadow duration-300">
            <div className="group cursor-pointer flex items-center justify-center px-2 py-2">
                <img className="group-hover:scale-105 transition-transform duration-300 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain" src={product.image[0]} alt={product.name} />
            </div>
            <div className="text-gray-500/60 text-xs md:text-sm">
                <p className="text-xs md:text-sm">{product.category}</p>
                <p className="text-gray-700 font-medium text-sm md:text-base lg:text-lg truncate w-full mt-1">{product.name}</p>
                <div className="flex items-center gap-0.5 mt-1">
                    {Array(5).fill('').map((_, i) => (
                        <img key={i} className='w-3 h-3 md:w-4 md:h-4' src={i < 4 ? assets.star_icon : assets.star_dull_icon} alt="" />
                    ))}
                    <p className="text-xs md:text-sm">({4})</p>
                </div>
                <div className="flex items-end justify-between mt-3">
                    <div className="flex flex-col">
                        <p className="text-base md:text-lg lg:text-xl font-medium text-primary">
                            {currency}{product.offerPrice}
                        </p>
                        <span className="text-gray-500/60 text-xs md:text-sm line-through">{currency}{product.price}</span>
                    </div>
                    <div onClick={(e) => { e.stopPropagation(); }} className="text-primary">
                        {!cartItems[product._id] ? (
                            <button className="flex items-center justify-center gap-1 bg-primary/10 border border-primary/20 w-16 md:w-20 h-8 md:h-9 rounded-md cursor-pointer hover:bg-primary/20 transition-colors" onClick={() => addToCart(product._id)} >
                                <img src={assets.cart_icon} alt="cart_icon" className="w-3 h-3 md:w-4 md:h-4" />
                                <span className="text-xs md:text-sm">Add</span>
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-1 md:gap-2 w-16 md:w-20 h-8 md:h-9 bg-primary/25 rounded-md select-none">
                                <button onClick={() => {removeFromCart(product._id)}} className="cursor-pointer text-sm md:text-base px-1 md:px-2 h-full flex items-center justify-center" >
                                    -
                                </button>
                                <span className="w-4 md:w-5 text-center text-xs md:text-sm">{cartItems[product._id]}</span>
                                <button onClick={() => addToCart(product._id)} className="cursor-pointer text-sm md:text-base px-1 md:px-2 h-full flex items-center justify-center" >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;