import React from 'react'

const Footer = () => {
  return (
    <div> 
        {/* Footer */}
        <footer className="flex flex-col w-full h-16 bg-white border-t-2 fixed border-white  left-0 bottom-0 justify-center items-center text-black">
                <p className=' font-Montserrat font-semibold text-darkBlue'>Challenge by: <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noopener noreferrer'>Frontend Mentor</a>.</p>

                <p className=' font-Montserrat text-greenJade'>Code by:
                    <a href="/"> John Cañero</a>. 
                </p>
        </footer>
    </div>
  )
}

export default Footer