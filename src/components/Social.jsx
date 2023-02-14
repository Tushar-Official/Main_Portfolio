import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {GrLinkedinOption} from 'react-icons/gr'
import {FiGithub} from 'react-icons/fi'
import {FaPhone} from 'react-icons/fa'

function Social() {
  return (
    <div className='bg-indigo-200  '>
    <div className=' flex justify-center group pt-2 pb-20'>

    <a href="https://www.linkedin.com/in/tushar-kumar-7a900218a/">
    <GrLinkedinOption className='w-12 h-12 mr-8  rounded px-1 py-1 text-white bg-blue-700 text-grey cursor-pointer hover:bg-blue-900 shadow-black shadow-xl hover:scale-110  '/>
    </a>
    <a href="https://www.facebook.com/tushar.kumar.526438/">
    <FaFacebookF className='w-12 h-12 ml-4 mr-8 px-1 py-1  bg-blue-700 text-grey cursor-pointer  text-white rounded hover:bg-blue-900 shadow-black shadow-xl hover:scale-110 '/>
    </a>
    <a href='https://github.com/Tushar-Official'>
    <FiGithub className='w-12 h-12 ml-4 mr-8 cursor-pointer  px-1 py-1 bg-blue-700 text-grey text-white hover:bg-blue-900 rounded shadow-black shadow-xl hover:scale-110  '/>
    </a>
    <a 
    href="tel++918651097852 "
    target="_blank"
    rel="noreferrer"
    aria-label="phone" >
    <FaPhone className='w-12 h-12 ml-4 mr-8 cursor-pointer px-2 py-2 bg-blue-700 text-grey text-white hover:bg-blue-900 rounded shadow-black shadow-xl hover:scale-110' />
    </a>
    </div>
    </div>
  )
}

export default Social