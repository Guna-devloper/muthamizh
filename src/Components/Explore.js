import React from "react";
import "./Explore.css";

const Explore = () => {
  const categories = [
    { id: 1, name: "Groceries", image: "/images/groceries.jpg" },
    { id: 2, name: "Spices", image: "/images/spices.jpg" },
    { id: 3, name: "Personal Care", image: "/images/personal-care.jpg" },
    { id: 4, name: "Household Items", image: "/images/household.jpg" },
    { id: 5, name: "Snacks", image: "/images/snacks.jpg" },
  ];

  return (
    <div className="explore-page">
      <h2>Explore Categories</h2>
      <div className="categories-container">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
