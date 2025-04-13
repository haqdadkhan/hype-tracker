import React from 'react';
import "./Roadmap.css";
import P1 from "../../assets/roadmap/roadmap-img1.png";
import P2 from "../../assets/roadmap/roadmap-img2.png";
import P3 from "../../assets/roadmap/roadmap-img3.png";
import P4 from "../../assets/roadmap/roadmap-img4.png";
import arrow from "../../assets/roadmap/roadmap-arrow.png";
import framer from "../../assets/roadmap/roadmap-framer.png";

const roadmaps = [
  {
    id: 1,
    img: P1,
    title: "Phase 01",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fuga vel consectetur totam dolorum nam.",
    class: "phase-1",
    animationDelay: "0s"
  },
  {
    id: 2,
    img: P2,
    title: "Phase 02",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fuga vel consectetur totam dolorum nam.",
    class: "phase-2",
    animationDelay: "0.2s"
  },
  {
    id: 3,
    img: P3,
    title: "Phase 03",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fuga vel consectetur totam dolorum nam.",
    class: "phase-3",
    animationDelay: "0.4s"
  },
  {
    id: 4,
    img: P4,
    title: "Phase 04",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fuga vel consectetur totam dolorum nam.",
    class: "phase-4",
    animationDelay: "0.6s"
  },
];

function Roadmap() {
  return (
    <>
      <section id="roadmap" className="mb-5">
        <div className="container">
          <div className="d-flex flex-column align-items-center">
            <div data-aos="flip-up" data-aos-delay="200" data-aos-duration="900" className="sec-width align-items-center text-center mb-5">
              <span className="self-btn">Roadmap</span>
              <h2 className='sec-heading mt-2'>Hype Tracker Journey</h2>
              <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="900" className='sec-para'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
          </div>
          <div  data-aos="fade-up" data-aos-delay="200" data-aos-duration="900" className="roadmap-phases">
            {roadmaps.map((roadmap) => (
              <div
                key={roadmap.id}
                className={`phase ${roadmap.class} abs floating-element`}
                style={{ animationDelay: roadmap.animationDelay }}
              >
                <div>
                  <img src={roadmap.img} alt="Roadmap Img" />
                  <div className="arrow abs">
                    <img src={arrow} alt="" />
                  </div>
                </div>
                <div style={roadmap.id % 2 === 0 ? { paddingRight: 6 } : { paddingLeft: 6 }}>
                  <span><img src={framer} alt="Frame Icon" /></span>
                  <h5>{roadmap.title}</h5>
                  <p>{roadmap.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Roadmap;
