import React from 'react'
import shop from '../images/shop.png'
import clock from '../images/clock.png'
import todo from '../images/todo.jpg'
import orp from '../images/orphan.png'



function Projects() {
  return (
    <div className='h-full  bg-gradient-to-b from-cyan-100 to-blue-100 pb-10 pl-10 pr-10'>
    <h3 className='font-bold text-5xl text-center pt-10 text-black'> PROJECTS </h3>
    <div className='h-84 w-full flex justify-around mt-20'>

  <figure > <img src={shop} alt="" className='w-76 h-64 rounded  shadow-black shadow-xl'/>
   <figcaption className='text-white font-bold '><button className='bg-black text-center px-2 py-2 text-centre rounded mt-4 hover:bg-blue-800 '>MY OWN SHOP UI</button></figcaption></figure>
   <figure><img src={clock} alt="" className='w-76 h-64 rounded shadow-black shadow-xl'/>
   <figcaption className='text-white font-bold text-lg'><button className='bg-black text-center px-2 py-2 text-centre rounded mt-4 '>ANALOG CLOCK</button></figcaption></figure>
   <figure><img src={orp} alt="" className='w-76 h-64 rounded shadow-black shadow-xl'/><figcaption className='text-white font-bold text-lg'><button className='bg-black text-center px-2 py-2 text-centre rounded mt-4 '>ORPHANGE WEBSITE </button></figcaption></figure>
   <figure><img src={todo} alt="" className='w-76 h-64 rounded shadow-black shadow-xl'/><figcaption className='text-white font-bold text-lg'><button className='bg-black text-center px-2 py-2 text-centre rounded mt-4 '>TODO LIST</button></figcaption></figure>
    </div>
    
    </div>
  )
}

export default Projects