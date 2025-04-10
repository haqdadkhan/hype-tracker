import React from 'react'
import "./Tokenomics.css"
import dollar from "../assets/tokenomics/dollar.png"

// tokens
const tokens = [
  { id: 1, img: dollar, title: "Hype Tracker", text: "Project Name" },
  { id: 2, img: dollar, title: "$HT", text: "Ticker" },
  { id: 3, img: dollar, title: "2/2%", text: "Buy/Sell Tax" },
  { id: 4, img: dollar, title: "Burnt", text: "Liquidity" },
];

function Tokenomics() {
  return (
    <section id="tokenomics" className="mt-5">
      <div className="container">
        <div data-aos="flip-up" data-aos-delay="200" data-aos-duration="900" className="d-flex flex-column align-items-center text-center mb-5">
          <span className="self-btn">Tokenomics</span>
          <h2 className="sec-heading mt-2">Hype Tracker Tokenomics</h2>
          <h3 className="blue-heading">Total Supply: 100M</h3>
        </div>
        <div className="row d-flex justify-content-center">
          {tokens.map((token) => (
            <div
            data-aos="fade-up" data-aos-delay={100 * token.id} data-aos-duration="900"
              key={token.id}
              className={`token-card col-sm-6 col-lg-3 m-2 ${token.id === 1 ? 'left-radius' : token.id === 4 ? 'right-radius' : ''}`}
            >
              <div className="bg-transparent text-center p-4">
                <img src={token.img} alt="Feature icon" className="mb-4 token-img" />
                <h3 className="card-title">{token.title}</h3>
                <p className="card-text">{token.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
