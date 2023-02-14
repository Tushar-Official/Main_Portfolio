import React from 'react'
import {FaBars} from 'react-icons/fa'





function UpNavbar() {

  const Slide=(id)=>{
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }

  }
  return (
    <div className=' flex justify-between px-4 fixed-top l  bg-indigo-500'>
    <div className=' ml-2 pt-2 text-black'><h1 className='text-6xl font-lighter text-white'>TUSHAR</h1></div>
    <div className='hidden md:flex'>
    <ul className=' flex justify-between pt-3 text-black '>

   <li className='text-xl'>
   <a href="#About" onClick={()=>Slide("#About")} className="decoration-transparent hover:text-black font-lighter text-white  ">
  Home</a>
   </li>
    <li><a href="#Home"
     onClick={()=>Slide("#Home")} className="decoration-transparent hover:text-black font-lighter text-white">
    About
    </a>
    </li>
    <li><a href="#Projects"
     onClick={()=>Slide("#Projects")} className="decoration-transparent font-lighter text-white">
   Projects
   </a>
    </li>
    <li><a href="#Skills"
    onClick={()=>Slide("#Skills")} className="decoration-transparent hover:text-black font-lighter text-white ">
  Skills</a>
    </li>
    <li><a href="#Education"
    onClick={()=>Slide("#Education")} className="decoration-transparent hover:text-black font-lighter text-white">
    Education</a>
    </li>
    <li> <a href="#Contact"
    onClick={()=>Slide("#Contact")} className="decoration-transparent hover:text-black font-lighter text-white">
    Contact</a>
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