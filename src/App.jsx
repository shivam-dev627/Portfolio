import { lazy, Suspense, useState } from "react";
import "./App.css";

const Navbar = lazy(() => import("./components/Navbar"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>

      <Suspense fallback={<h2 className="loading">Loading...</h2>}>

        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />

      </Suspense>

    </div>
  );
}

export default App;