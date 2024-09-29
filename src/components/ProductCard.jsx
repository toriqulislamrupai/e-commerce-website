import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-64 object-cover mb-4" // Fixed height and covers the width
      />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-blue-600 font-semibold">{product.price}</p>
      <button 
        onClick={() => addToCart(product)} // Add product to cart on button click
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
