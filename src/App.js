import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './components/About'
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Social from './components/Social';
import { animateScroll as scroll } from 'react-scroll'; 


function App() {
 
  
  const scrollToTop = () => {
    scroll.scrollToTop();
  }

    return (
    
      <div className="App  ">
     <Navbar/>
       <About/>
      <Social/>
       <Home/>
        <Projects/>
        <Skills/>
        <Education/>
        <Contact/>
       {
        <button onClick={scrollToTop} className="fixed bottom-10 right-10 bg-blue-500 font-semibold text-white p-2 rounded-full">
        Scroll to Top
      </button>
    
       }
       </div>
    
  );
}

export default App;
