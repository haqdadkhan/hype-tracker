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

function Hero() {
  return (
    <>
   <div className="d-flex justify-content-center align-items-center position-relative overflow-hidden" style={{ height: "500px" }}>
  <img src={LargeEclipse} alt="" className="position-absolute"/>
  <img src={ShortEclipse} alt="" className="position-absolute"/>
  <img src={BlueEclipse} alt="" className="position-absolute"/>
  <img src={GreenEclipse} alt="" className="position-absolute"/>
  <img src={PurpleCircle} alt="" className="position-absolute"/>
  <img src={BlueCircle} alt="" className="position-absolute"/>
  <img src={Logo} alt="" className="position-absolute"/>
</div>

    </>
  )
}

export default Hero