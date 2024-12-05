import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <Link>Muthamizh Essentials</Link>
      </div>
      <nav className="nav-links">
        <Link href="#home">Home</Link>
        <Link href="#products">Products</Link>
        <Link href="#about">About Us</Link>
        <Link href="#contact">Contact</Link>
        <button className="shop-btn">Shop Now</button>
      </nav>
    </header>
  );
}

export default Navbar;
