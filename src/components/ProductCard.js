import React from 'react'
import ImageMobile from '../images/image-product-mobile.jpg'

const ProductCard = () => {
  return (
    <div>
        <div className=' max-w-lg bg-white dark:border-gray-700 items-center'>

            {/* Header Image */}
            <a href='/'>
                <img className='' src={ImageMobile} alt=''></img>
            </a>

            {/* Main Content */}
            <div className='p-6'>
                <h3 className='mt-4 font-Montserrat font-semibold text-darkGrayishBlue tracking-widest'>
                    PREVIEW
                </h3>

                <a href='/'> 
                    <h1 className='mt-8 mb-6 text-4xl tracking-tight text-darkBlue font-Fraunces '>Gabrielle Essence Eau De Parfum</h1>
                </a>

                <p className="mb-10 font-normal  font-Montserrat text-darkGrayishBlue ">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                
                <div className='flex space-x-6 items-center'>
                    <h1 className='text-4xl font-Fraunces text-greenJade'>$149.99</h1>
                    <p className='line-through'>$169.99</p>
                </div>

                <div className=' flex items-center justify-center'>
                    <button className=" mt-8 w-full h-14 px-6 text-white transition-colors duration-150  bg-greenJade rounded-lg focus:shadow-outline  hover:bg-green-700 shadow-md">
                    <i class="fa-solid fa-cart-shopping"></i> Add to Cart
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="flex flex-col w-full h-16 bg-white border-t-2 fixed border-white  left-0 bottom-0 justify-center items-center text-black">
                    <p className=' font-Montserrat font-semibold'>Challenge by: <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noopener noreferrer'>Frontend Mentor</a>.</p>

                    <p className=' font-Montserrat'>Code by:
                        <a href="/"> John Cañero</a>. 
                    </p>
            </footer>
        </div>
    </div>
  )
}

export default ProductCard


