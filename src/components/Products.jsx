import React from 'react';
import '../styles/Products.css';

const ProductCard = ({ name, imageUrl, price }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-price">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
