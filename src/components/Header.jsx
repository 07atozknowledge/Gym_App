import React, { useState } from 'react'
import { FaXmark,FaBars } from 'react-icons/fa6'
import { Link } from 'react-scroll'

const Header = () => {

  const [isMenuOption , setIsMenuOption] = useState(false);

  const toggleMenu = () => {
    setIsMenuOption(!isMenuOption);
  }

  const closeMenu = () =>{
    setIsMenuOption(false);
  }

  const navItems =[
    {
      link:'Home',path:'hero'
    },
    {
      link:'About',path:'about'
    },
    {
      link:'Service',path:'service'
    },
    {
      link:'Team',path:'team'
    },
    {
      link:'Contact',path:'contact'
    }
  ]
  return (
    <nav className='w-full flex bg-white justify-between items-center gap-1 lg:px-a6 px-5 py-4 sticky top-0 z-50'>
      <h2 className='text-black md:text-4xl text-3xl font-bold'>
        Strong <span className='text-hbutton-400 italic'>
          Zone
        </span>
      </h2>

      <ul className='lg:flex justify-center items-center gap-10 hidden'>

            {
              navItems?.map(({link,path}) => (
                <Link key={path} className='text-hbutton-400 uppercase font-semibold cursor-pointer  rounded-lg hover:bg-red-400 hover:text-white px-7 py-2' to={path} spy={true} offset={-100} smooth={true}>
                    {link}
                </Link>
              ))
            }
      </ul>

      <button className='bg-hbutton-400 hover:bg-red-400 text-white px-10 py-3 rounded-full font-bold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden'>
        SignUp
      </button>
             
             {/* Mobile State View */}

      <div className='flex justify-center items-center lg:hidden mt-3' onClick={toggleMenu}>
        <div className=''>
              {
                isMenuOption?<FaXmark className='text-white text-3xl cursor-pointer' />:<FaBars className='text-white text-3xl cursor-pointer' />
              }
        </div>
      </div>

      <div className={`${isMenuOption ? 'flex' : 'hidden'} w-full h-fit bg-black p-4 absolute top-[72px] left-0`} onClick={closeMenu}>
        <ul className='flex flex-col justify-center items-center gap-2 w-full'>

          {
            navItems?.map(({link,path}) => (
              <Link key={path} className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-400 hover:text-white px-20' to={path} spy={true} offset={-100} smooth={true}>
                  {link}
              </Link>
            ))
          }

        </ul>
      </div>
              
    </nav>
  )
}

export default Header
