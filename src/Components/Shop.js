import React from 'react';
import './Shop.css';
import ProductCard from './ProductCard';

function Shop() {
  const products = [
    { id: 1, name: 'Rice', price: '₹50/kg', image: '/images/rice.jpg' },
    { id: 2, name: 'Wheat Flour', price: '₹40/kg', image: '/images/wheat.jpg' },
    { id: 3, name: 'Vegetables', price: '₹30/kg', image: '/images/vegetables.jpg' },
    { id: 4, name: 'Spices', price: '₹100/pack', image: '/images/spices.jpg' },
    { id: 5, name: 'Cooking Oil', price: '₹200/liter', image: '/images/oil.jpg' },
  ];

  return (
    <div className="shop">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
