import React from 'react'
import { FaCopyright } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <section className='bg-black w-full text-white p-7 flex justify-center items-center gap-4'>
      <FaCopyright className='size-6 text-white'/>
      <h2 className='text-white text-center font-semibold text-lg'>Copyright 2024, Strong Zone - All right reserved to AKD </h2>
    </section>

    {/* scroll top button */}

    <div id='icon-box' className='bg-white text-black p-3 rounded-full  cursor-pointer fixed lg:bottom-6 right-6 bottom-6 z-40'>

      <Link to='hero' spy={true} offset={-100} smooth={true}>
        <FaArrowUp className='w-[35px] h-[35px]' />
      </Link>

    </div>
    </>
  )
}

export default Footer
