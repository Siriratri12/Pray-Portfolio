// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Experience from "./components/Experience";
// // import AboutProfile from "./components/AboutProfile";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       {/* <AboutProfile /> */}
//       <Skills />
//       <Experience />
//       <Projects />
//       <Contact />
//     </>
//   );
// }

// export default App;



import { motion, useScroll } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[999]"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0%",
          background:
            "linear-gradient(to right,#22d3ee,#a855f7,#ec4899)",
        }}
      />

      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;