import React from "react";
import Main from "./containers/main";
import Video from "./containers/video";
import CCTV from "./containers/cctv";
import {
  BrowserRouter as Router,
  Switch, Route} from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/video" component={Video} />
          <Route path="/cctv" component={CCTV} />
      </Switch>
    </Router>
  );
}