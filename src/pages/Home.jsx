import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our E-Commerce Website!</h1>
      <p className="mb-8">Explore our wide range of products.</p>
      <Link to="/products" className="bg-blue-600 text-white px-4 py-2 rounded">
        Shop Now
      </Link>
    </div>
  );
};

export default Home;
