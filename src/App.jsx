import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import AboutProfile from "./components/AboutProfile";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <AboutProfile /> */}
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
