import { useEffect, useState } from "react";
import AOS from "aos";

import Header from "./components/Header/Header";
import FirstScreen from "./components/FirstScreen/FirstScreen";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/Services/Services";

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./App.css";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <FirstScreen />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
