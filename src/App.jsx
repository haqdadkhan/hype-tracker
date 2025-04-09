import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Home";
import Features from "./Features/Features";
import Header from "./Header/Header";
import About from "./About/About";
import Tokenomics from "./Tokenomics/Tokenomics";
import Upcoming from "./Upcoming/Upcoming";
import Roadmap from "./Roadmap/Roadmap";
import Footer from "./Footer/Footer";

function App() {
  // initializing AOS
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Home />
      <About />
      <Features />
      <Tokenomics />
      <Upcoming />
      <Roadmap/>
      <Footer />
    </>
  );
}

export default App;
