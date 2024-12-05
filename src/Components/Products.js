import React from "react";
import "./Products.css";

function Products() {
  const products = [
    { id: 1, name: "Basmati Rice", price: "₹1200", image: "/images/rice.jpg" },
    { id: 2, name: "Cooking Oil", price: "₹180", image: "/images/oil.jpg" },
    { id: 3, name: "Organic Spices", price: "₹250", image: "/images/spices.jpg" },
    { id: 4, name: "Fresh Vegetables", price: "₹300", image: "/images/vegetables.jpg" },
    { id: 5, name: "Dairy Products", price: "₹150", image: "/images/dairy.jpg" },
  ];

  return (
    <section className="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
