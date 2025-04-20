import { useEffect, useState } from "react";
import AOS from "aos";

import Header from "./components/Header/Header";
import FirstScreen from "./components/FirstScreen/FirstScreen";
import AboutUs from "./components/AboutUs/AboutUs";

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  useEffect(() => {
    if (!darkMode) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [darkMode]);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <FirstScreen />
      <AboutUs />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
