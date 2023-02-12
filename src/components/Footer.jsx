import React from 'react'
import {FaLinkedin,FaFacebook,FaInstagram} from 'react-icons/fa'

function Footer() {
  return (
    <div className='h-full bg-black'>
    <div className='h-56 flex justify-center  pt-10 pb-10'>
    <a href="https://www.linkedin.com/in/tushar-kumar-7a900218a/"><FaLinkedin className='w-12 h-12 ml-4 mr-4 bg-blue text-white hover:cursor-pointer  rounded  '/></a>
    <a href="https://www.facebook.com/tushar.kumar.526438/"><FaFacebook className='w-12 h-12 ml-4 mr-4 hover:cursor-pointer text-black bg-white rounded'/></a>
    <a href='https://www.instagram.com/im.tusharkumar/'><FaInstagram className='w-12 h-12 ml-4 mr-4 hover:cursor-pointer text-black bg-white rounded '/></a>
    </div>
    </div>
  )
}

export default Footer