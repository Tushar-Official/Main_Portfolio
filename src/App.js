
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './components/About'
import Home from './components/Home';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App ">
      <Navbar/>
      <About/>
      <Home/>
      <Projects/>
      
    </div>
  );
}

export default App;
