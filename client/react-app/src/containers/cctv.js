import React from "react";
import Navigation from './navigation';
import './cctv.css';
import Background from "./background";
import Formdata from "./cctvVideo";

export default function CCTV() {
  return (
    <div className="cctv">
        <Background></Background>
        <Navigation></Navigation>
        <div className="main-body">
            <Formdata></Formdata>
        </div>
    </div>
  );
}