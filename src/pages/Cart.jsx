import React from 'react';

const Cart = ({ cart, clearCart }) => {
  const handlePurchase = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
    } else {
      alert('Thank you for your purchase!');
      clearCart(); // Clear the cart after purchase
    }
  };

  const handleRefresh = () => {
    clearCart(); // Clear the cart (refresh)
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="border p-4 mb-4">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-blue-600">{item.price}</p>
            </div>
          ))}
          <button 
            onClick={handleRefresh} 
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
          >
            Refresh Cart
          </button>
          <button 
            onClick={handlePurchase} 
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded ml-4"
          >
            Purchase
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
