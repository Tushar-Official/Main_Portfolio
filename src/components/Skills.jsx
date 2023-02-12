import React from 'react'
import js from '../images/js.png';
import html from '../images/html.png'
import react from '../images/reactjs.png'
import tail from '../images/tailwind.png'
import css from '../images/css.jpg'
import sql from '../images/sql.webp'

function Skills() {
  return (
    <div id="Skills" className='h-full bg-gradient-to-b from-blue-100 to-sky-100'>
    <h4 className='font-bold text-black text-center pl-10  pt-16 text-5xl'>SKILLS</h4>
  <div className='h-full grid grid-rows-2 grid-flow-col justify-center mt-10 pb-20'>
  <img src={react} alt="" className='h-48 w-48 rounded-full mt-8 ml-16 mr-16 shadow-black shadow-xl border-white border-2'/>
  <img src={js} alt="" className='h-48 w-48 rounded-full mt-8 ml-16 mr-16 shadow-black shadow-xl border-white border-2'/>
  <img src={html} alt="" className='h-48 w-48 rounded-full mt-8 ml-16 mr-16 shadow-black shadow-xl border-white border-2'/>
  <img src={css} alt="" className='h-48 w-48 rounded-full mt-8 ml-16 mr-16 shadow-black shadow-xl border-white border-2'/>
  <img src={tail} alt="" className='h-48 w-48 rounded-full mt-8 ml-16 mr-16 shadow-black shadow-xl border-white border-2'/>
  <img src={sql} alt="" className='h-48 w-48 rounded-full mt-8 ml-16 mr-16 shadow-black shadow-xl border-white border-2'/>
  </div>
    </div>
  )
}

export default Skills