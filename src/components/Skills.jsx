import React from 'react'
// import js from '../images/js.png';
// import html from '../images/html.png'
// //import react from '../images/reactjs.png'
// import tail from '../images/tailwind.png'
// import css from '../images/css.jpg'
// import sql from '../images/sql.webp'
import {FaReact,FaHtml5,FaCss3,FaBootstrap} from 'react-icons/fa'
import {SiJavascript,SiTailwindcss} from 'react-icons/si'
function Skills() {
  return (
    <div id="Skills" className='h-full bg-gradient-to-b from-blue-100 to-sky-100'>
    <h4 className='font-bold text-black text-center pl-10  pt-16 text-5xl'>SKILLS</h4>
  <div className='h-full grid grid-rows-2 gap-y-8 gap-x-36 grid-flow-col justify-center mt-20 pb-20 text-blue-900 cursor-pointer'>
   <FaReact className='w-36 h-36 border-4 border-blue-900 rounded px-2 py-2 shadow-black shadow-xl '/>
  <SiJavascript className='w-36 h-36  border-4  border-blue-900 rounded px-2 py-2 shadow-black shadow-xl '/>
  <FaHtml5 className='w-36 h-36  border-4  border-blue-900 rounded px-2 py-2 shadow-black shadow-xl '/>
  <FaCss3 className='w-36 h-36  border-4  border-blue-900 rounded px-2 py-2 shadow-black shadow-xl '/>
  <SiTailwindcss className='w-36 h-36  border-4  border-blue-900 rounded px-2 py-2 shadow-black shadow-xl'/>
  <FaBootstrap className='w-36 h-36  border-4  border-blue-900 rounded px-2 py-2 shadow-black shadow-xl '/>

  </div>
    </div>
  )
}

export default Skills