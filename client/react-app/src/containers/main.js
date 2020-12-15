import React from "react";
import { Link } from 'react-router-dom';
import video from '../backgroundV.mp4';
import './main.css';

export default function Main() {
  return (
    <div className="Main">
        <video id='background-video' autoPlay loop muted>
          <source src={video} type="video/mp4"/>
        </video>
      <div className="container">
        <div className="text-container">
          <h1 className="mainText">Welcome To Accidents Detection Service</h1>
        </div>
        <div className="button-container">
          <Link to="./video"><button className="menu-button">VIDEO</button></Link>
          <Link to="./cctv"><button className="menu-button">CCTV</button></Link>
        </div>
      </div>
    </div>
  );
}