import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaGraduationCap,FaReact} from 'react-icons/fa'
import {SiAccenture} from 'react-icons/si'


function Education() {
  return (
    <div id="Education" className='h-full pb-10 bg-gradient-to-b from-sky-100 to-blue-500'>
    <h5 className='font-bold text-5xl text-black text-center pt-20'>EDUCATION </h5>
    <br/>
    <VerticalTimeline lineColor='#000 '>
    <VerticalTimelineElement className='vertical-timeline-element--education font-bold'
    icon={<FaGraduationCap />}
    iconStyle={{background:'#000',color:'#fff'}}
    
    date="2016-2020 ">
    <h4 className='text-black font-bold'>Dr.B.C Roy Engineering College,Durgpur</h4>
    <p className='text-black font-bold text-2xl'>Electrical Engineering</p>
    <p className='font-bold'>Marks:7.37 CGPA</p>
  </VerticalTimelineElement>

   <VerticalTimelineElement className='vertical-timeline-element--job font-bold'
    
    iconStyle={{background:'white',color:'#51087E',border:" 2px black"}}
    icon={<SiAccenture/>}
    date="2021-Present" >
    <h4 className='text-black font-bold'>Accenture </h4>
    <p className='text-black font-bold text-2xl'>Associate Software Engineer</p>
    
    </VerticalTimelineElement>

    <VerticalTimelineElement className='vertical-timeline-element--job font-bold'
    
    iconStyle={{background:'black',color:'white'}}
    icon={<FaReact/>}
    date="Dec,2022-Present">
    <h4 className='text-black font-bold'>Namaste ReactJs </h4>
    <p className='text-black font-bold text-2xl'>By Akshay Saini</p>
    
    </VerticalTimelineElement>
    </VerticalTimeline>
    
    </div>
  )
}

export default Education