import React, { Component } from "react";

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
      <div class="tab">
        <ul class="tabnav">
          <li class="tabactive fire">
            <img
              src={fire}
              alt="Fire"
              style={{ width: "auto", height: "auto" }}
            />
          </li>

          <li class="tabactive water">
            <img
              src={water}
              alt="Water"
              style={{ width: "auto", height: "auto" }}
            />
          </li>

          <li class="tabactive earth">
            <img
              src={earth}
              alt="Earth"
              style={{ width: "auto", height: "auto" }}
            />
          </li>

          <li class="tabactive wind">
            <img
              src={wind}
              alt="Wind"
              style={{ width: "auto", height: "auto" }}
            />
          </li>

          <li class="tabactive light">
            <img
              src={light}
              alt="Light"
              style={{ width: "auto", height: "auto" }}
            />
          </li>

          <li class="tabactive dark">
            <img
              src={dark}
              alt="Dark"
              style={{ width: "auto", height: "auto" }}
            />
          </li>
        </ul>
      </div>
    );
  }
}
