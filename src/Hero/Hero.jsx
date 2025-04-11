import React from 'react'
import "./Hero.css"
import LargeEclipse from "../assets/home/eclipse-circle-large.png"
import ShortEclipse from "../assets/home/eclipse-circle-short.png"
import BlueEclipse from "../assets/home/blue-dots.png"
import GreenEclipse from "../assets/home/green-dots.png"
import PurpleCircle from "../assets/home/purple-circle.png"
import BlueCircle from "../assets/home/blue-circle.png"
import Logo from "../assets/logo.png"


function Hero() {
  {/* <div className="hero-abs">
  <img src={Dots} alt="" className="white-dots" />
  </div> */}
  return (
    <>
      <section id='home' className='hero-section'>
        {/* Upside Section with decorative elements */}
        <div className="upside container">
          <div className="upside-container">
            <div className="hero-abs">
              <img src={LargeEclipse} alt="" className="eclipse-large" />
            </div>
            <div className="hero-abs">
              <img src={ShortEclipse} alt="" className="eclipse-short" />
            </div>
            <div className="hero-abs">
              <img src={BlueEclipse} alt="" className="blue-dots" />
            </div>
            <div className="hero-abs">
              <img src={GreenEclipse} alt="" className="green-dots" />
            </div>
            <div className="hero-abs">
              <img src={PurpleCircle} alt="" className="purple-circle" />
            </div>
            <div className="hero-abs">
              <img src={BlueCircle} alt="" className="blue-circle" />
            </div>
            <div className="hero-abs">
              <img src={Logo} alt="Logo" className="logo" />
            </div>
          </div>
        </div>

        {/* Downside Section with content */}

      </section>
    </>
  )
}

export default Hero
