import "./App.css";
import { useState } from "react";
import useLenis from "./components/useLenis";
import Hero from "./components/Hero";
import About from "./components/About";
import Wellness from "./components/Wellness";
import Offer from "./components/Offer";
import Family from "./components/Family";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import ResponsiveNav from "./components/ResponsiveNav";

function App() {
  const [isSummer, setIsSummer] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useLenis();

  const toggleSeason = () => {
    setIsSummer(!isSummer);
  };

  return (
    <div className="app-container">
      <Hero
        isSummer={isSummer}
        toggleSeason={toggleSeason}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <ResponsiveNav
        isSummer={isSummer}
        toggleSeason={toggleSeason}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <About />
      <Wellness isSummer={isSummer} />
      <Offer />
      <Family />
      <Experiences isSummer={isSummer} />
      <Footer />
    </div>
  );
}

export default App;
