import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/final-logo.png"; 

function Navbar() {
  const navigate = useNavigate()
  const handleShop = () =>{
    navigate("/products")
  }
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Muthamizh Essentials Logo" className="logo-img" />
        <Link to="/" className="nav-content">Muthamizh Essentials</Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home1</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <button className="shop-btn" onClick={handleShop}>Shop Now</button>
      </nav>
    </header>
  );
}

export default Navbar;
