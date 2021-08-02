import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Anila from "../pages/fire/Anila";
import Mahira from "../pages/earth/Mahira";
import Vikala from "../pages/dark/Vikala";
import Kumbhira from "../pages/light/Kumbhira";

import "./styles.css";

import fire from "../assets/Element_Fire.png";
import water from "../assets/Element_Water.png";
import earth from "../assets/Element_Earth.png";
import wind from "../assets/Element_Wind.png";
import light from "../assets/Element_Light.png";
import dark from "../assets/Element_Dark.png";

export default class Header extends Component {
  render() {
    return (
      <Router>
        <div class="tab">
          <ul class="tabnav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li class="tabactive fire">
              <Link to="/fire">
                <img
                  src={fire}
                  alt="Fire"
                  style={{ width: "auto", height: "auto" }}
                />
              </Link>
            </li>

            <li class="tabactive water">
              <img
                src={water}
                alt="Water"
                style={{ width: "auto", height: "auto" }}
              />
            </li>

            <li class="tabactive earth">
              <Link to="/earth">
                <img
                  src={earth}
                  alt="Earth"
                  style={{ width: "auto", height: "auto" }}
                />
              </Link>
            </li>

            <li class="tabactive wind">
              <img
                src={wind}
                alt="Wind"
                style={{ width: "auto", height: "auto" }}
              />
            </li>

            <li class="tabactive light">
              <Link to="/light">
                <img
                  src={light}
                  alt="Light"
                  style={{ width: "auto", height: "auto" }}
                />
              </Link>
            </li>

            <li class="tabactive dark">
              <Link to="/dark">
                <img
                  src={dark}
                  alt="Dark"
                  style={{ width: "auto", height: "auto" }}
                />
              </Link>
            </li>
          </ul>
          <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/fire">
              <Anila />
            </Route>
            <Route path="/earth">
              <Mahira />
            </Route>
            <Route path="/dark">
              <Vikala />
            </Route>
            <Route path="/light">
              <Kumbhira />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Fire() {
  return (
    <div>
      <h2>Fire</h2>
    </div>
  );
}

function Earth() {
  return (
    <div>
      <h2>Earth</h2>
    </div>
  );

  function Dark() {
    return (
      <div>
        <h2>Dark</h2>
      </div>
    );
  }
}
