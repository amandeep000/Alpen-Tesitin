import "./App.css";
import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Wellness from "./components/Wellness";
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
    </>
  );
}

export default App;
