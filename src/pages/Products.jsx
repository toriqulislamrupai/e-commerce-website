import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const Products = ({ addToCart }) => {
  const [notification, setNotification] = useState('');

  const products = [
    { 
        id: 1, 
        name: 'Apple iPhone 13', 
        price: '$999.99', 
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-silver-select?wid=500&hei=500&fmt=png-alpha&.v=1645552345849' 
    },
    { 
        id: 2, 
        name: 'Sony PlayStation 5', 
        price: '$499.99', 
        image: 'https://m.media-amazon.com/images/I/619BkvKW35L._SX500_.jpg' 
    },
    { 
        id: 3, 
        name: 'Sony WH-1000XM4', 
        price: '$349.99', 
        image: 'https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SX500_.jpg' 
    },
];


  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`Added ${product.name} to the cart!`);
    setTimeout(() => setNotification(''), 3000); // Clear the notification after 3 seconds
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Our Products</h1>
      {notification && <div className="bg-green-500 text-white p-2 rounded mb-4 text-center">{notification}</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
