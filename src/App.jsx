import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Home";
import Features from "./Features/Features";
import Header from "./Header/Header";
import About from "./About/About";
import Tokenomics from "./Tokenomics/Tokenomics";

function App() {
  // initializing AOS
  useEffect(() => {
    AOS.init();
  }, []);
  // content
  return (
    <div className="jost-normal" style={{ backgroundColor: "#0e0822" }}>
      <Header/>
      <Home />
      <About />
      <Features />
      <Tokenomics/>
      <div className=" d-flex flex-column vh-100 align-items-center justify-content-center">
        <div className="">
          <p data-aos="fade-up" className="text-danger">Hi</p>
        </div>
      </div>
    </div>
  );
}

export default App;
