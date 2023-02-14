
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
import Shimmer from './components/Shimmer';




function App() {
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
      <Shimmer/>
      
   
 
    
      
    </div>
  );
}

export default App;
