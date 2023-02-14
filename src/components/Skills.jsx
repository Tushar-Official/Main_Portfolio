import React from 'react'

import {FaReact,FaHtml5,FaCss3,FaBootstrap,FaGithub,FaLinux,FaAws} from 'react-icons/fa'
import {SiJavascript,SiTailwindcss} from 'react-icons/si'
import {AiOutlineConsoleSql} from 'react-icons/ai'
function Skills() {
  return (
    <div id="Skills" className='h-full bg-gradient-to-b from-blue-200 to-sky-100'>

    <h4 className='font-bold text-black text-center pl-10  pt-16 text-5xl'>SKILLS</h4>

  <div className='h-full grid grid-rows-3 gap-y-8 gap-x-36 grid-flow-col justify-center mt-20 pb-20 text-indigo-900 cursor-pointer'>

   <div className='border-4 text-indigo-900 grid gri-col-2 justify-center border-blue-900
    shadow-black shadow-xl hover:scale-110 w-36 h-36  hover:bg-white  hover:text-blue-600  rounded-lg '>
   <FaReact className='text-indigo-900 w-24 h-24 px-2 py-2  '/>
   <h5 className='text-l font-bold pl-2'>ReactJs</h5>
   </div>

  <div className='w-36 h-36 border-4 pt-2 grid gri-col-2 shadow-black shadow-xl gap-y-1 px-2 py-2  
  justify-center hover:scale-110 hover:bg-white  hover:text-yellow-500 border-blue-900 rounded'>
  <SiJavascript className=' w-32 h-24 '/>
  <h5 className='text-l font-bold text-center '>JavaScript</h5>
  </div>

  <div className='w-36 h-36 grid gri-col-2 gap-y-1 justify-center border-4 hover:bg-white  hover:text-orange-600 rounded border-blue-900  px-2 py-2 shadow-black shadow-xl hover:scale-110'>
  <FaHtml5 className=' w-32 h-24 '/>
  <h5 className='text-l text-center font-bold pl-2'>HTML</h5>
  </div>

    <div className='w-36 h-36  border-4 hover:bg-white  hover:text-blue-500 border-blue-900 rounded px-2 py-2 shadow-black shadow-xl hover:scale-110'>
  <FaCss3 className=' w-32 h-24 '/>
  <h5 className='text-l font-bold text-center '>CSS</h5>
  </div>
    <div className='w-36 h-36  border-4 hover:bg-white hover:text-sky-500  border-blue-900 rounded  px-2 py-2 shadow-black shadow-xl hover:scale-110'>
  <SiTailwindcss className='w-32 h-24'/>
  <h5 className='text-l font-bold text-center '>Tailwind CSS</h5>
  </div>
  <div className='w-36 h-36  border-4 hover:bg-white   hover:text-purple-600 border-blue-900 rounded px-2 py-2 shadow-black shadow-xl hover:scale-110'>
  <FaBootstrap className=' w-32 h-24 '/><h5 className='text-l font-bold text-center '>BootStrap</h5>
  </div>

  
  <div className='w-36 h-36  border-4 hover:bg-white   hover:text-purple-600 border-blue-900 rounded px-2 py-2 shadow-black shadow-xl hover:scale-110'>
  <FaGithub className=' w-32 h-24 '/><h5 className='text-l font-bold text-center '>Github</h5>
  </div>

  <div className='w-36 h-36  border-4 hover:bg-white   hover:text-black border-blue-900 rounded px-2 py-2 shadow-black shadow-xl hover:scale-110'>
  <FaLinux className=' w-32 h-24 '/><h5 className='text-l font-bold text-center '>Linux</h5>
  </div>

  <div className='w-36 h-36  border-4 hover:bg-white grid gri-col-2 justify-center  hover:text-purple-600 border-blue-900 rounded px-2 py-2 shadow-black shadow-xl hover:scale-110'>
  <AiOutlineConsoleSql className=' w-32 h-24 '/><h5 className='text-l font-bold text-center '>SQL</h5>
  </div>

  <div className='w-36 h-36  border-4 hover:bg-white justify-center grid gri-col-2   hover:text-yellow-600 border-blue-900 rounded px-2 py-2 shadow-black shadow-xl hover:scale-110'>
  <FaAws className=' w-24 h-24 '/><h5 className='text-l font-bold text-center '>AWS</h5>
  </div>
  
  </div>
</div>

    
  )
}

export default Skills