import React from 'react'
import Footer from './Footer'
import ImageMobile from '../images/image-product-mobile.jpg'
import ImageDesktop from '../images/image-product-desktop.jpg'

const ProductCard = () => {
  return (
    <div className='flex items-center justify-center'>
    
        <div className='max-w-lg bg-white border-gray-200  dark:border-gray-700 md:shadow-lg md:rounded-xl md:flex md:max-w-2xl md:mt-32'>

            {/* Header Image - Mobile */}
            <a href='/'>
                <img className='md:hidden' src={ImageMobile} alt=''></img>
            </a>

            {/* Header Image - Tablet and Desktop */}
            <a href='/'>
                <img className='hidden sm:block md:object-cover md:h-full md:w-96 md:rounded-l-xl' src={ImageDesktop} alt=''></img>
            </a>

            {/* Main Content */}
            <div className='px-5 md:w-96 md:pb-10'>
                <h3 className='mt-4 font-Montserrat font-semibold text-darkGrayishBlue tracking-widest'>
                    PREVIEW
                </h3>

                <a href='/'> 
                    <h1 className='mt-8 mb-6 text-4xl tracking-tight text-darkBlue font-Fraunces '>Gabrielle Essence Eau De Parfum</h1>
                </a>

                <p className="mb-10 font-normal  font-Montserrat text-darkGrayishBlue ">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                
                <div className='flex space-x-6 items-center'>
                    <h1 className=' mt-1 text-4xl font-Fraunces text-greenJade'>$149.99</h1>
                    <p className='line-through'>$169.99</p>
                </div>

                <div className=' flex items-center justify-center'>
                    <button className=" mt-16 w-full h-14 px-6 text-white transition-colors duration-150  bg-greenJade rounded-lg focus:shadow-outline  hover:bg-green-700 shadow-md">
                    <i class="fa-solid fa-cart-shopping"></i> Add to Cart
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    </div>
  )
}

export default ProductCard


