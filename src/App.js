 
import './App.css';   
import React from "react";
import Slider from "react-slick"; 
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Tips from './components/Tips.js';
import Venue from './components/Venue.js';
import Sliders from './components/Sliders.js';
import Footer from './components/Footer.js';
import {BrowserRouter} from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (   
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/tips" element={<Tips/>} />
          <Route path="/venue" element={<Venue/>} />
          <Route path="/sliders" element={<Sliders/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>  
  );
}

export default App; 