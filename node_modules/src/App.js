import Menus from './components/Menus';
import Home from "./pages/Home"
import About from "./pages/About myself";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact me";
import './App.css';

function App() {
  return (
    <div className="App">
      <Menus />
      <img src="images/bat.jpg" alt="" className="cov"></img>
    <div className="menu-page">      
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
     </div>
     </div>
  );
}

export default App;
