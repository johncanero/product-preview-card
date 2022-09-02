import React from 'react'
import ImageMobile from '../images/image-product-mobile.jpg'

const ProductCard = () => {
  return (
    <div>
        <div className=' max-w-lg bg-white border-gray-200 shadow-md dark:border-gray-700 items-center'>

            {/* Anchor Tag */}
            <a href='/'>
                <img className='' src={ImageMobile} alt=''></img>
            </a>

            <div className='p-5'>
                <h3 className='mt-4 font-Montserrat font-semibold text-darkGrayishBlue tracking-widest'>
                    PREVIEW
                </h3>

                <a href='/'> 
                    <h1 className='mt-8 mb-6 text-4xl tracking-tight text-darkBlue font-Fraunces '>Gabrielle Essence Eau De Parfum</h1>
                </a>

                <p className="mb-10 font-normal text-darkGrayishBlue ">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                
                <div className='flex space-x-6 items-center'>
                    <h1 className='text-4xl font-Fraunces text-greenJade'>$149.99</h1>
                    <p className='line-through'>$169.99</p>
                </div>

                <div className=' flex items-center justify-center'>
                    <button className=" mt-6 w-full h-12 px-6 text-white transition-colors duration-150  bg-greenJade rounded-lg focus:shadow-outline hover:bg-green-800">
                      Add to Cart
                    </button>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default ProductCard


