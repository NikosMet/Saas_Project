import React, { useState } from 'react';

const CartComponent = ({ cartItems, updateCartItem, removeCartItem }) => {
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index}>
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <button onClick={() => updateCartItem(index, item.quantity + 1)}>+</button>
              <button onClick={() => updateCartItem(index, item.quantity - 1)}>-</button>
              <button onClick={() => removeCartItem(index)}>Remove</button>
            </div>
          ))}
          <p>Total Price: ${calculateTotalPrice()}</p>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
