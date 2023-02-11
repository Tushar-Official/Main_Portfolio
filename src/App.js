
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './components/About'
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer'



function App() {
  return (
    <div className="App ">
      <Navbar/>
      <About/>
      <Home/>
      <Projects/>
      <Skills/>
      <Education/>
      <Contact/>
      <Footer/>
    
      
    </div>
  );
}

export default App;
