import "./App.css";
import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Wellness from "./components/Wellness";
import Services from "./components/Services";
import Offer from "./components/Offer";
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
      <Services />
    </>
  );
}

export default App;
