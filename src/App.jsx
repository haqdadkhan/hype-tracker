import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Tokenomics from "./components/Tokenomics/Tokenomics";
import Upcoming from "./components/Upcoming/Upcoming";
import Roadmap from "./components/Roadmap/Roadmap";
import Footer from "./components/Footer/Footer";

function App() {
  // initializing AOS
  useEffect(() => {
    AOS.init({
      once: true,
      startEvent: 'DOMContentLoaded',
    });
  }, []);
  return (
    <>
      <Header />
      <Home />
      <About />
      <Features />
      <Tokenomics />
      <Upcoming />
      <Roadmap />
      <Footer />
    </>
  );
}

export default App;
