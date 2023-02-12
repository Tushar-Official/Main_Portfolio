import React from 'react'
import me from '../images/00.jpg'
import PDF from './Tushar_KumarResume.pdf'


function About() {
 return (
    <div id="About" className='h-screen w-full flex justify-end bg-gradient-to-b from-cyan-50 to-blue-100'>
    <div className=' pt-10 pl-80 ml-20 left mt-24 w-1/2 flex-col items-end'>
    
    <h2 className='font-bold mt-2 text-6xl text-gray-800'> I'm a FRONTEND<br/>DEVELOPER</h2>
    <p className='text-gray-800 mt-1 w-1/2 font-m'> Highly motivated FrontEnd Developer / MERN Stack Developer seeking opportunities to grow and make a positive impact in a forward-thinking software development team. 
    </p>
    <a href={PDF} download="resume"><button className='bg-black font-extrabold text-2xl text-white w-28 h-12 rounded'>RESUME</button></a>
    </div>
    <div className='w-1/2 ml-10 mt-36 pr-20'>
    <img src={me} alt="" className='w-72 h-72 pl-10 rounded'/>
    </div>
    </div>
  )
  

}

export default About