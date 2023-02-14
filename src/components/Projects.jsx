import React from 'react'
import shop from '../images/shop.png'
import clock from '../images/clock.png'
import todo from '../images/todo.jpg'
import orp from '../images/orphan.png'



function Projects() {
  return (
    <div id="Projects" className='h-full bg-gradient-to-b from-indigo-200 to-blue-200 pb-10 pl-10 pr-10'>
    <h3 className='font-bold text-5xl text-center pt-10 text-black'> PROJECTS </h3>
    <div className='h-84 w-full grid grid-rows-2 grid-flow-col  justify-around mt-10 '>

  <figure > <img src={shop} alt="" className='w-76 h-64 mt-5 rounded  shadow-black shadow-xl cursor-pointer hover:scale-110'/>
   <figcaption className='text-white font-bold '><a href="https://beamish-hummingbird-a259bc.netlify.app/" className="text-white" >
   <button className='bg-black text-center px-2 py-2 text-centre rounded mt-4 place-content-center '>MY OWN SHOP UI</button></a>
   </figcaption></figure>

   <figure><img src={clock} alt="" className='w-76 h-64 mt-5 rounded shadow-black shadow-xl cursor-pointer hover:scale-110'/>
   <figcaption className='text-white font-bold text-lg'><a href="https://gorgeous-taffy-baafa2.netlify.app" className="text-white">
   <button className='bg-black text-center px-2 py-2 text-centre rounded mt-4 place-content-center '>ANALOG CLOCK</button></a>
   </figcaption></figure>
  
   <figure><img src={orp} alt="" className='w-76 h-64 mt-5 rounded shadow-black shadow-xl cursor-pointer hover:scale-110'/>
   <figcaption className='text-white font-bold text-lg'><a href="https://clever-puppy-d660e9.netlify.app/" className="text-white">
   <button className='bg-black text-center px-2 py-2 text-centre rounded mt-4 place-content-center '>ORPHANGE WEBSITE </button></a>
   </figcaption></figure>

   <figure><img src={todo} alt="" className='w-76 h-64 mt-5 rounded shadow-black shadow-xl cursor-pointer hover:scale-110'/>
   <figcaption className='text-white font-bold text-lg'><a href="https://gorgeous-taffy-baafa2.netlify.app/" className="text-white">
   <button className='bg-black text-center px-2 py-2 text-centre rounded mt-4 place-content-center '>TODO LIST</button></a></figcaption></figure>
    </div>
    
    </div>
  )
}

export default Projects