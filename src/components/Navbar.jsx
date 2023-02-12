import React from 'react'
import {FaBars} from 'react-icons/fa'





function UpNavbar() {
  return (
    <div className=' flex justify-between px-4 w-screen bg-black fixed-top'>
    <div className=' ml-2 pt-2 text-white'><h1 className='text-6xl'>TUSHAR</h1></div>
    <div className='hidden md:flex'>
    <ul className=' flex justify-between pt-3 text-white'>

   <li>
  Home
   </li>
    <li>
    About
    </li>
    <li>
   Projects
    </li>
    <li>
  Skills
    </li>
    <li>
    Education
    </li>
    <li>
    Contact
    </li>

   
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