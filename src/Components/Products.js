import React from "react";
import ProductCard from "../Components/ProductCard";
import "./Products.css";

const Products = () => {
  const products = [
    { id: 1, title: "Rice (5kg)", image: "/images/rice.jpg", price: 250 },
    { id: 2, title: "Sugar (1kg)", image: "/images/sugar.jpg", price: 50 },
    { id: 3, title: "Lentils (1kg)", image: "/images/lentils.jpg", price: 90 },
    { id: 4, title: "Cooking Oil (1L)", image: "/images/oil.jpg", price: 200 },
    { id: 5, title: "Wheat Flour (1kg)", image: "/images/flour.jpg", price: 40 },
    { id: 6, title: "Salt (1kg)", image: "/images/salt.jpg", price: 20 },
    { id: 7, title: "Turmeric Powder (100g)", image: "/images/turmeric.jpg", price: 30 },
    { id: 8, title: "Black Pepper (100g)", image: "/images/pepper.jpg", price: 50 },
    { id: 9, title: "Green Gram (500g)", image: "/images/green-gram.jpg", price: 70 },
    { id: 10, title: "Tea Powder (250g)", image: "/images/tea.jpg", price: 120 },
    { id: 11, title: "Coffee Powder (100g)", image: "/images/coffee.jpg", price: 150 },
    { id: 12, title: "Biscuits (Pack)", image: "/images/biscuits.jpg", price: 40 },
    { id: 13, title: "Detergent Powder (1kg)", image: "/images/detergent.jpg", price: 150 },
    { id: 14, title: "Bath Soap (Pack of 3)", image: "/images/soap.jpg", price: 90 },
    { id: 15, title: "Shampoo (200ml)", image: "/images/shampoo.jpg", price: 180 },
  ];

  return (
    <div className="products-page">
      <h2>Our Products</h2>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
