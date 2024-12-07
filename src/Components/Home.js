import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  const handleExplore = () =>{
    navigate("/explore")
  }
  return (
    <section id="home" className="home">
      <div className="banner">

        <div className="banner-content">
        <p>Welcome to Muthamizh Essentials</p>
          <p>Experience the finest quality groceries at unbeatable prices!</p>

          <button className="explore-btn" onClick={handleExplore}>Explore Now</button>
        </div>
      </div>
      <div className="highlights">
        <h2>Why Choose Us?</h2>
        <div className="highlight-cards">
          <div className="card">
            <h3>Fresh Products</h3>
            <p>We bring you fresh, organic, and premium products daily.</p>
          </div>
          <div className="card">
            <h3>Best Prices</h3>
            <p>Our competitive pricing ensures maximum savings for you.</p>
          </div>
          <div className="card">
            <h3>Customer Care</h3>
            <p>Your satisfaction is our top priority. Shop hassle-free!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
