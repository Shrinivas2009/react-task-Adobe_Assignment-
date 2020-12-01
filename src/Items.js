import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export const Items = (props) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const item = { 
      name: props.name, 
      actual: props.actual, 
      display: props.display,
      image: props.image, 
      discount:props.discount };
    setCart(currentState => [...currentState, item]);
  }
  return (
    <div className="item-section">
      <span className="item-discount">{props.discount}%</span>
      <ul className="item-container">
        <li className="item-list">
          <div className="item-image"><img src={props.image} /></div>
        </li>
      </ul>
      <div className="item-content-list">
        <h2>{props.name}</h2>
        <div className="item-price">
          <p><del>{props.actual}</del></p>
          <p>{props.display}</p> 
        </div>
        <div className="item-add-item">
          <button className="btn" onClick={addToCart}>Add to cart</button>
        </div>
        
      </div>
      {/* <h4>{props.price}</h4> */}
      
    </div>
  )
}