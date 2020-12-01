import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.scss';
import { ItemList } from './ItemList';
import { Cart } from './Cart';
import { CartProvider } from './CartContext';

const App = () => {
  return (
    <CartProvider>
      <div>
        <div className="container">
        <h1 className="item-heading">All Items</h1>
        <ItemList ></ItemList>
        <Cart ></Cart>
        </div>
      </div>
    </CartProvider>
  )
}

render(<App />, document.getElementById('root'));
