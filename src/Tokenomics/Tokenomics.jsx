import React from 'react'
import "./Tokenomics.css"
import dollar from "../assets/tokenomics/dollar.png"

// tokens
const tokens = [
  {
    id: 1,
    img: dollar,
    title: "Hype Tracker",
    text: "Project Name",
  },
  {
    id: 2,
    img: dollar,
    title: "$HT",
    text: "Ticker",
  },
  {
    id: 3,
    img: dollar,
    title: "2/2%",
    text: "Buy/Sell Tax",
  },
  {
    id: 4,
    img: dollar,
    title: "Burnt",
    text: "Liquidity",
  },
];
function Tokenomics() {
  return (
    <>
      <section id="features" className="py-5 mt-5">
        <div className="container">
          <div className="d-flex flex-column align-items-center mb-5">
            <span className="self-btn">Tokenomics</span>
            <h2 className='sec-heading'>Hype Tracker Tokenomics</h2>
            <h3 className='blue-heading'>Total Supply: 100M</h3>
          </div>
          <div className="row g-4 d-flex justify-content-center">
            {tokens.map((token) => {
              if (token.id === 1) {
                // Render this for token with id 1
                return (
                  <div key={token.id} className="token-card left-radius col-md-6 mx-2 col-lg-3">
                    <div className="h-100 bg-transparent">
                      <div className="text-center p-4">
                        <img
                          src={token.img}
                          alt="Feature icon"
                          className="mb-4 token-img"
                        />
                        <h3 className="card-title">{token.title}</h3>
                        <p className="card-text">{token.text}</p>
                      </div>
                    </div>
                  </div>
                );
              } else if (token.id === 4) {
                // Render this for token with id 4
                return (
                  <div key={token.id} className="token-card right-radius col-md-6 mx-2 col-lg-3">
                    <div className="h-100 bg-transparent">
                      <div className="text-center p-4">
                        <img
                          src={token.img}
                          alt="Feature icon"
                          className="mb-4 token-img"
                        />
                        <h3 className="card-title">{token.title}</h3>
                        <p className="card-text">{token.text}</p>
                      </div>
                    </div>
                  </div>
                );
              } else {
                // Default render for other tokens
                return (
                  <div key={token.id} className="token-card col-md-6 mx-2 col-lg-3">
                    <div className="h-100 bg-transparent">
                      <div className="text-center p-4">
                        <img
                          src={token.img}
                          alt="Feature icon"
                          className="mb-4 token-img"
                        />
                        <h3 className="card-title">{token.title}</h3>
                        <p className="card-text">{token.text}</p>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Tokenomics
