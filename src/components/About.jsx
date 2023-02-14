import React from 'react'
import me from '../images/00.jpg'
import PDF from './Tushar_KumarResume.pdf'


function About() {
 return (
 
    <div id="About" className='h-screen w-full pt-20 grid justify-center grid-row-3 bg-indigo-200'>
    <h2 className=' h-full  font-bold text-center text-6xl text-gray-800'> Hello, I'm Tushar Kumar</h2>
    <div className='grid grid-cols-2 pl-20 pr-10 '>
    <div className=' grid  pl-56 grid-rows-3 text-centre mt-6 pt-4  '>
    <h2 className='font-bold mt-2 text-6xl text-gray-800'> I'm a FRONTEND DEVELOPER</h2>
    <p className='text-gray-800 font-xl'>Innovative Front End Developer with experience in building and maintaining
    responsive websites in the recruiting industry.  Highly motivated FrontEnd Developer / MERN Stack Developer seeking opportunities to grow and make a positive impact in a forward-thinking software development team. 
    </p>
    <a href={PDF} download="resume"><button className='bg-blue-900 font-extrabold text-2xl text-white w-28 h-12 rounded hover:bg-red-800'>RESUME</button></a>
    </div>
    <div className=' ml-20 mt-10 pt-4 '>
    <img src={me} alt="" className=' h-72  rounded shadow-black shadow-xl '/>
    </div>
    </div>
    
    
    </div>
   
   
  )
  

}

export default About