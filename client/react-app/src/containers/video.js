import React from "react";
import Navigation from './navigation';
import Formdata from './formVideo';
import Background from './background';
import './video.css';

export default function Video() {
  return (
    <div className="Video">
        <Background></Background>
        <Navigation></Navigation>
        <div className="main-body">
            <Formdata></Formdata>
        </div>
    </div>
  );
}