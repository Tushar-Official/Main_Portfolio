import React from 'react'

import {FaReact,FaHtml5,FaCss3,FaBootstrap} from 'react-icons/fa'
import {SiJavascript,SiTailwindcss} from 'react-icons/si'
function Skills() {
  return (
    <div id="Skills" className='h-full bg-gradient-to-b from-blue-200 to-sky-100'>

    <h4 className='font-bold text-black text-center pl-10  pt-16 text-5xl'>SKILLS</h4>

  <div className='h-full grid grid-rows-2 gap-y-8 gap-x-36 grid-flow-col justify-center mt-20 pb-20 text-indigo-900 cursor-pointer'>
   <FaReact className='w-36 h-36 border-4 hover:bg-white  hover:text-black border-blue-900 rounded px-2 py-2 shadow-black shadow-xl hover:scale-110'/>
  <SiJavascript className='w-36 h-36  border-4 hover:bg-white  hover:text-black border-blue-900 rounded px-2 py-2 shadow-black shadow-xl hover:scale-110 '/>
  <FaHtml5 className='w-36 h-36  border-4 hover:bg-white  hover:text-black border-blue-900 rounded px-2 py-2 shadow-black shadow-xl hover:scale-110 '/>
  <FaCss3 className='w-36 h-36  border-4 hover:bg-white  hover:text-black border-blue-900 rounded px-2 py-2 shadow-black shadow-xl hover:scale-110 '/>
  <SiTailwindcss className='w-36 h-36  border-4 hover:bg-white hover:text-black  border-blue-900 rounded px-2 py-2 shadow-black shadow-xl hover:scale-110'/>
  <FaBootstrap className='w-36 h-36  border-4 hover:bg-white   hover:text-black border-blue-900 rounded px-2 py-2 shadow-black shadow-xl hover:scale-110 '/>

  </div>
    </div>
  )
}

export default Skills