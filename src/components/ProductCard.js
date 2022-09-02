import React from 'react'
import ImageMobile from '../images/image-product-mobile.jpg'

const ProductCard = () => {
  return (
    <div>
        <div className='max-w-md bg-white border-gray-200 shadow-md dark:border-gray-700 items-center'>

            {/* Anchor Tag */}
            <a href='/'>
                <img className='' src={ImageMobile} alt=''></img>
            </a>

            <div className=' p-5'>
                <a href='/'> 
                    <h1 className=' mt-4 mb-6 text-3xl font-bold tracking-tight text-blueBunker'>Gabrielle Essence Eau De Parfum</h1>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="/" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProductCard


