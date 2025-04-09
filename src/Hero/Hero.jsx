import React from 'react'
import "./Hero.css"
import LargeEclipse from "../assets/home/eclipse-circle-large.png"
import ShortEclipse from "../assets/home/eclipse-circle-short.png"
import BlueEclipse from "../assets/home/blue-dots.png"
import GreenEclipse from "../assets/home/green-dots.png"
import PurpleCircle from "../assets/home/purple-circle.png"
import BlueCircle from "../assets/home/blue-circle.png"
import Dots from "../assets/home/white-dots.png"
import Logo from "../assets/logo.png"
import P1 from "../assets/home/uniswap.png"
import P2 from "../assets/home/etherscan.png"
import P3 from "../assets/home/dextools.png"
import P4 from "../assets/home/coinmarketcap.png"

function Hero() {
  return (
    <>
      <section id='home' className='hero-section'>
        {/* Upside Section with decorative elements */}
        <div data-aos="fade-up" className="upside">
          <div className="upside-container position-relative">
            <img src={LargeEclipse} alt="" className="position-absolute eclipse-large" />
            <img src={ShortEclipse} alt="" className="position-absolute eclipse-short" />
            <img src={BlueEclipse} alt="" className="position-absolute blue-dots" />
            <img src={GreenEclipse} alt="" className="position-absolute green-dots" />
            <img src={PurpleCircle} alt="" className="position-absolute purple-circle" />
            <img src={BlueCircle} alt="" className="position-absolute blue-circle" />
            <img src={Dots} alt="" className="position-absolute white-dots" />
            <img src={Logo} alt="Logo" className="position-absolute logo" />
          </div>
        </div>

        {/* Downside Section with content */}
        <div className="downside">
          <div className="container">
            <div className="row mb-4 mb-md-5">
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis autem pariatur totam.
              </div>
              <div className="col-12 col-md-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis autem pariatur totam.
              </div>
            </div>
            <div className='hero-content text-center'>
              <h1 className='hero-heading mb-4 mb-md-5'>
                Empowering Your Crypto <br className="d-none d-md-block" />
                <span>Trading Experience</span>
              </h1>
              <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center">
                <button className='hero-btn'>Try the Bot</button>
                <button className='hero-btn-w'>Buy Now</button>
              </div>
            </div>
            <div className="platforms row g-3 g-md-4 mt-5">
              <div className="col-6 col-md-3 d-flex justify-content-center">
                <img src={P1} className="img-fluid platform-img" alt="Uniswap" />
              </div>
              <div className="col-6 col-md-3 d-flex justify-content-center">
                <img src={P2} className="img-fluid platform-img" alt="Etherscan" />
              </div>
              <div className="col-6 col-md-3 d-flex justify-content-center">
                <img src={P3} className="img-fluid platform-img" alt="Dextools" />
              </div>
              <div className="col-6 col-md-3 d-flex justify-content-center">
                <img src={P4} className="img-fluid platform-img" alt="CoinMarketCap" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
