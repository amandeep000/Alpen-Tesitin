import "./App.css";
import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
function App() {
  const [isSummer, setIsSummer] = useState(false);
  const toggleSeason = () => {
    setIsSummer(!isSummer);
  };
  return (
    <>
      <Hero isSummer={isSummer} toggleSeason={toggleSeason} />
      <About />
    </>
  );
}

export default App;
