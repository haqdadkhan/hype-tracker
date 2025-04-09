import React from 'react'
import "./Roadmap.css"
import P1 from "../assets/roadmap/roadmap-img1.png"
import P2 from "../assets/roadmap/roadmap-img2.png"
import P3 from "../assets/roadmap/roadmap-img3.png"
import P4 from "../assets/roadmap/roadmap-img4.png"
import arrow from "../assets/roadmap/roadmap-arrow.png"
import framer from "../assets/roadmap/roadmap-framer.png"

const roadmaps = [
  {
    id: 1,
    img: P1,
    title: "Phase 01",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fuga vel consectetur totam dolorum nam.",
    class: "phase-1"
  },
  {
    id: 2,
    img: P2,
    title: "Phase 02",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fuga vel consectetur totam dolorum nam.",
    class: "phase-2"
  },
  {
    id: 3,
    img: P3,
    title: "Phase 03",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fuga vel consectetur totam dolorum nam.",
    class: "phase-3"
  },
  {
    id: 4,
    img: P4,
    title: "Phase 04",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fuga vel consectetur totam dolorum nam.",
    class: "phase-4"
  },
];

function Roadmap() {
  return (
    <>
      <section id="roadmap" className="mb-5">
        <div className="container">
          <div className="d-flex flex-column align-items-center">
            <div className="sec-width align-items-center text-center mb-5">
              <span className="self-btn">Roadmap</span>
              <h2 className='sec-heading mt-2'>Hype Tracker Journey</h2>
              <p className='sec-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
          </div>
          <div className="roadmap-phases">
            {roadmaps.map((roadmap) => {
              return <div key={roadmap.id} className={`phase ${roadmap.class} abs`}>
                <div>
                  <img src={roadmap.img} alt="" />
                  <div className="arrow abs">
                    <img src={arrow} alt="" />
                  </div>
                </div>
                <div>
                  <span><img src={framer} alt="" /></span>
                  <h5>{roadmap.title}</h5>
                  <p>{roadmap.content}</p>
                </div>
              </div>
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Roadmap
