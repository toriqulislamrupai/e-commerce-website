import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  // Cart state
  const [cart, setCart] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} clearCart={clearCart} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
