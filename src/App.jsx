import "./App.css";
import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Wellness from "./components/Wellness";
import Offer from "./components/Offer";
import Family from "./components/Family";
import Experiences from "./components/Experiences";
function App() {
  const [isSummer, setIsSummer] = useState(false);
  const toggleSeason = () => {
    setIsSummer(!isSummer);
  };
  return (
    <>
      <Hero isSummer={isSummer} toggleSeason={toggleSeason} />
      <About />
      <Wellness isSummer={isSummer} />
      <Offer />
      <Family />
      <Experiences isSummer={isSummer} />
    </>
  );
}

export default App;
