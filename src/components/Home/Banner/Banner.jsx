import React from 'react'
import "./Banner.css"
import LargeEclipse from "../../../assets/home/eclipse-circle-large.png"
import ShortEclipse from "../../../assets/home/eclipse-circle-short.png"
import BlueEclipse from "../../../assets/home/blue-dots.png"
import GreenEclipse from "../../../assets/home/green-dots.png"
import PurpleCircle from "../../../assets/home/purple-circle.png"
import BlueCircle from "../../../assets/home/blue-circle.png"
import Logo from "../../../assets/logo.png"


function banner() {
  {/* <div className="banner-abs">
  <img src={Dots} alt="" className="white-dots" />
  </div> */}
  return (
    <>
      <section id='home' className='banner-section'>
        {/* Upside Section with decorative elements */}
        <div className="upside container">
          <div className="upside-container">
            <div className="banner-abs">
              <img src={LargeEclipse} alt="" className="eclipse-large" />
            </div>
            <div className="banner-abs">
              <img src={ShortEclipse} alt="" className="eclipse-short" />
            </div>
            <div className="banner-abs">
              <img src={BlueEclipse} alt="" className="blue-dots" />
            </div>
            <div className="banner-abs">
              <img src={GreenEclipse} alt="" className="green-dots" />
            </div>
            <div className="banner-abs">
              <img src={PurpleCircle} alt="" className="purple-circle" />
            </div>
            <div className="banner-abs">
              <img src={BlueCircle} alt="" className="blue-circle" />
            </div>
            <div className="banner-abs">
              <img src={Logo} alt="Logo" className="logo" />
            </div>
          </div>
        </div>

        {/* Downside Section with content */}

      </section>
    </>
  )
}

export default banner
