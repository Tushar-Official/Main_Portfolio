import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {GrLinkedinOption} from 'react-icons/gr'
import {FiGithub} from 'react-icons/fi'

function Social() {
  return (
    <div className='bg-indigo-200  '>
    <div className=' flex justify-center group  pb-20'>
    <a href="https://www.linkedin.com/in/tushar-kumar-7a900218a/"><GrLinkedinOption className='w-12 h-12 mr-8 border-4 rounded px-1 py-1 border-black  text-black cursor-pointer shadow-black shadow-xl hover:scale-110  '/></a>
    <a href="https://www.facebook.com/tushar.kumar.526438/"><FaFacebookF className='w-12 h-12 ml-4 mr-8 px-1 py-1 rounded border-4 border-black cursor-pointer  text-black  rounded shadow-black shadow-xl hover:scale-110 '/></a>
    <a href='https://github.com/Tushar-Official'><FiGithub className='w-12 h-12 ml-4 mr-8 cursor-pointer border-4 rounded border-black px-1 py-1 text-black  rounded shadow-black shadow-xl hover:scale-110  '/></a>
    </div></div>
  )
}

export default Social