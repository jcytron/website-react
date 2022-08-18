import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const handleDrop = () => {
    setDropdown(!dropdown);
  };

  const toggleReset = () => {
    setDropdown(false);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Jacob Cytron
        </Link>
        <ul className={dropdown ? "nav-menu nav-active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={handleDrop}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={handleDrop}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={handleDrop}>
              About
            </Link>
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
