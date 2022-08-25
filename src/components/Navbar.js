import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import $ from "jquery";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [buttonName, setButtonName] = useState("");
  const [waveClass, setWaveClass] = useState("waviy");
  //const [spanClass, setSpanClass] = useState("nospan");

  const handleDrop = () => {
    setDropdown(!dropdown);
  };

  const toggleReset = () => {
    setDropdown(false);
  };

  const handleButtonHover = (text) => {
    setWaveClass("baviy");
    setButtonName(text);
  };

  const renderButtonName = () => {
    const letters = [...buttonName];
    let count = 0;
    return letters.map((letter) => (
      <span key={count} style={{ "--i": ++count }}>
        {letter}
      </span>
    ));
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Jacob Cytron
        </Link>
        <div className={waveClass}>{renderButtonName()}</div>
        <ul className={dropdown ? "nav-menu nav-active" : "nav-menu"}>
          <li className="nav-item">
            <div
              className="button-group"
              onMouseEnter={() => handleButtonHover("Home")}
              onMouseLeave={() => setWaveClass("waviy")}
            >
              <a className="navbar-button" href="/">
                <svg
                  stroke="white"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </a>
            </div>
          </li>
          <div className="nav-seperator"></div>
          <li className="nav-item">
            <div
              className="button-group"
              onMouseEnter={() => handleButtonHover("Projects")}
              onMouseLeave={() => setWaveClass("waviy")}
            >
              <a className="navbar-button" href="/projects.html">
                <svg
                  stroke="white"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="5 18 0 14 5 10 "></polyline>
                  <polyline points="7 21 17 3"></polyline>
                  <polyline points="19 18 24 14 19 10 "></polyline>
                </svg>
              </a>
            </div>
          </li>
        </ul>
        <div
          className={dropdown ? "nav-toggler toggle " : "nav-toggler"}
          onClick={handleDrop}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
}
