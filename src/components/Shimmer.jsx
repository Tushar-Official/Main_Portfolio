import React from 'react'
import shimmer from '../images/shimmer.jpg'

function Shimmer() {
  return (
    <div className='bg-white'>
    <div className='h-32 bg-slate-400  border-2 opacity-25'></div>
    <div className='grid grid-cols-2 pl-20 pr-10 '>
    <div className=' grid  pl-56 grid-rows-3 text-centre mt-12 pt-4  '>
   
    <p className='font-xl bg-slate-400 h-48 rounded'> 
    </p>
    
    </div>
    <div className=' ml-20 mt-10 pt-8  '>
    <img src={shimmer} alt="" className=' h-72 opacity-25 rounded '/>
    </div>
    </div>
    
    </div>
  )
}

export default Shimmer