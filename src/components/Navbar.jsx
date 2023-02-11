import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'




function UpNavbar() {
  return (
    <div className='border-black border-2 flex justify-between px-4 w-screen bg-black fixed-top'>
    <div className=' ml-2 pt-2 text-white'><h1 className='text-6xl'>TUSHAR</h1></div>
    <div className='hidden md:flex'>
    <ul className=' flex justify-between pt-3 '>
   <li><Link to="/" className='text-gray-400 decoration-transparent' >Home</Link></li>
    <li><Link to="/About" className='text-gray-400 decoration-transparent'>About</Link></li>
    <li><Link to="/Projects" className='text-gray-400 decoration-transparent'>Projects</Link></li>
    <li><Link to="/Skills" className='text-gray-400 decoration-transparent'>Skills</Link></li>
    <li><Link to="/Education" className='text-gray-400 decoration-transparent '>Education</Link></li>
    <li><Link to="/Contact" className='text-gray-400 decoration-transparent '>Contact</Link></li>
    </ul>
   
    </div>
{/*Hamburger*/}
  <div className='md:hidden'>
  <FaBars />
  </div>

  {/*hidden */}
  
  <ul className=' absolute top-0 left-0 h-screen hidden flex-col justify-center items-center text-black'>
  <li className='py-6 text-4xl'>Home</li>
  <li className='py-6 text-4xl'>About</li>
  <li className='py-6 text-4xl'>Projects</li>
  <li className='py-6 text-4xl'>Skills</li>
  <li className='py-6 text-4xl'>Contact</li>
  </ul>
  
    </div>
  )
}

export default UpNavbar