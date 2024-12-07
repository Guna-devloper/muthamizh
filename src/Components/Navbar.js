import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/final-logo.png"; 

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Muthamizh Essentials Logo" className="logo-img" />
        <Link to="/" className="nav-content">Muthamizh Essentials</Link>
      </div>
      <nav className="nav-links">
        <Link to="#home">Home</Link>
        <Link to="#products">Products</Link>
        <Link to="#about">About Us</Link>
        <Link to="#contact">Contact</Link>
        <button className="shop-btn">Shop Now</button>
      </nav>
    </header>
  );
}

export default Navbar;