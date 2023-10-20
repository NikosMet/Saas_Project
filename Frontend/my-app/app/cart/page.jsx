'use client'
import React, { useState } from 'react';
import CartComponent from '../../components/CartComponent';

function Cart() {
  const [cartItems, setCartItems] = useState([
    { name: 'Item 1', quantity: 2, price: 10 },
    { name: 'Item 2', quantity: 1, price: 5 },
  ]);

  const updateCartItem = (index, newQuantity) => {
    // Update the quantity of the item in the cart
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    setCartItems(updatedCartItems);
  };

  const removeCartItem = (index) => {
    // Remove the item from the cart
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <h1>My Online Store</h1>
      <CartComponent cartItems={cartItems} updateCartItem={updateCartItem} removeCartItem={removeCartItem} />
    </div>
  );
}

export default Cart;
