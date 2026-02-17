import "../src/index.css";

import { useNavigation } from "./GlobalContext/useNavigationContext";

// components
import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const { nav } = useNavigation();
  return (
    <>
      <section className='w-screen h-screen bg-myBlack fixed overflow-hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 z-1 w-[200%] animate-[wave_15s_linear_infinite] md:hidden" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.2" d="M0,160L48,144C96,128,192,96,288,85.3C384,75,480,85,576,80C672,75,768,53,864,64C960,75,1056,117,1152,144C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 z-1 w-[200%] animate-[wave_15s_linear_infinite] md:hidden" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.4" d="M0,224L48,202.7C96,181,192,139,288,133.3C384,128,480,160,576,176C672,192,768,192,864,170.7C960,149,1056,107,1152,90.7C1248,75,1344,85,1392,90.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <Navbar />
        {nav === "Home" && <Home />}
        {nav === "About" && <About />}
        {nav === "Projects" && <Projects />}
        {nav === "Contact" && <Contact />}


        <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 z-1 w-[200%] animate-[wave_15s_linear_infinite]" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.1" d="M0,96L48,85.3C96,75,192,53,288,69.3C384,85,480,139,576,149.3C672,160,768,128,864,133.3C960,139,1056,181,1152,170.7C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 z-2 w-[200%] animate-[wave_20s_linear_infinite] delay-500" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.2" d="M0,64L48,64C96,64,192,64,288,69.3C384,75,480,85,576,106.7C672,128,768,160,864,154.7C960,149,1056,107,1152,90.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 z-2 w-[200%] animate-[wave_20s_linear_infinite] delay-1000" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.4" d="M0,256L48,256C96,256,192,256,288,256C384,256,480,256,576,234.7C672,213,768,171,864,154.7C960,139,1056,149,1152,149.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </section>
    </>
  )
}

export default App
