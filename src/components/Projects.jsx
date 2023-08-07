import React from 'react'
import shop from '../images/shop.png'
import port from '../images/portfolio.png'
import utube from '../images/utube.png'

import shopping from '../images/shopping.png'



function Projects() {
  return (
    <div id="Projects" className='h-full bg-gradient-to-b from-indigo-200 to-blue-200 pb-10 pl-10 pr-10'>
    <h3 className='font-bold text-5xl text-center pt-10 text-black'> PROJECTS </h3>
    <div className='h-84 w-full grid grid-rows-2 grid-flow-col  justify-around mt-10 '>

    <figure className=''><img src={utube} alt="" className='w-88 h-64 mt-5 rounded shadow-black shadow-xl cursor-pointer bg-white hover:scale-110'/>
   <figcaption className='text-white text-centre  font-bold text-lg'>
   <a href="https://beautiful-elf-031101.netlify.app/" className="text-white">
   <button className=' text-center px-2 py-2 text-centre rounded mt-4 place-content-center transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 duration-300 '>Youtube Clone</button></a>
   </figcaption></figure>

  <figure > <img src={shop} alt="" className='w-76 h-64 mt-5 rounded  shadow-black shadow-xl cursor-pointer hover:scale-110'/>
   <figcaption className='text-white font-bold text-center '><a href="https://beamish-hummingbird-a259bc.netlify.app/" className="text-white" >
   <button className='text-center px-2 py-2 text-centre rounded mt-4 place-content-center transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 duration-300 '>MY OWN SHOP UI</button></a>
   </figcaption></figure>

   <figure><img src={shopping} alt="" className='w-76 h-64 mt-5 rounded shadow-black shadow-xl cursor-pointer hover:scale-110'/>
   <figcaption className='text-white font-bold text-centre  text-lg'><a href="https://64d0d3ced144566197f62fdc--stunning-horse-53478c.netlify.app/" className="text-white">
   <button className=' text-center px-2 py-2 text-centre rounded mt-4 place-content-center transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 duration-300 '>TaraGini Shopping App</button></a>
   </figcaption></figure>
  
   <figure><img src={port} alt="" className='w-76 h-64 mt-5 rounded shadow-black shadow-xl cursor-pointer hover:scale-110'/>
   <figcaption className='text-white font-bold text-centre  text-lg'><a href="https://clever-puppy-d660e9.netlify.app/" className="text-white">
   <button className=' text-center px-2 py-2 text-centre rounded mt-4 place-content-center transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 duration-300 '>My Portfolio </button></a>
   </figcaption></figure>

   

   </div>
    
    </div>
  )
}

export default Projects