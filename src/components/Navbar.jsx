import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">E-Commerce</Link>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/products" className="hover:text-gray-200">Products</Link>
          <Link to="/cart" className="hover:text-gray-200">Cart</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
