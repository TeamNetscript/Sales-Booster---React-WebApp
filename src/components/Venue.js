import v10 from "./images/v10.jpg";
import v5 from "./images/chart.jpg";
import app2 from "./images/app2.png";
import Form from './Form.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import React, { Component } from 'react';

function Venue(){
	return( 
    <>
      <div className="Venue_Sec">
        <div className="container">
          <div className="venueTitle">
            <div>
              <h2>What We Do Best</h2>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium<br/> doloremque laudantium</p>
            </div>
          </div>
          <div className="Venue"> 
            <div className="venueInfo">   
              <img src={v5} alt=" "/>
              <div className="venueInfoDiv">
                <span>Elevate your social media presence</span>
                <h2>Sales Booster</h2>
              </div>
            </div>
            <div className="venueInfo">   
              <img src={v5} alt=" "/>
              <div className="venueInfoDiv">
                <span>Natus error sit voluptatem accusantium</span>
                <h2>Sed ut perspiciatis</h2>
              </div>
            </div>
            <div className="venueInfo">   
              <img src={v5} alt=" "/>
              <div className="venueInfoDiv">
                <span>natus error sit voluptatem accusantium</span>
                <h2>Bonorum et Malorum</h2>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </>
	);
} 
export default Venue;