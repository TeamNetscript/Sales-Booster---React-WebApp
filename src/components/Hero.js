import React, { Component } from "react";
import v5 from "./images/dashboard.png";
import Whatsapp from "./images/whatsapp.svg";

function Hero() {
  return (
     <>
      <div className="main_hero">
        <div className="container">
          <div className="hero">
            <div className="heroLeft">
              <h1><b>Ecommerce <strong>Platform</strong></b> to boost your sales</h1>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
              <p><a href="#Form">Get a Quote</a> <a href="#"><img src={Whatsapp} alt=""/> Whatsapp messages</a></p>
              <img src={v5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );

}
export default Hero; 