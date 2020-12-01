import React, {useContext} from 'react';
import {CartContext} from './CartContext';

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.display, 0);

  return (
    <div class="cart-item-list">
      <table class="cart-item-table">
        <tbody>
          <tr class="cart-item-table-row">
            <td class="">items in cart</td>
            <td class="">{cart.length}</td>
          </tr>
          <tr class="">
            <td class="">total price </td>
            <td class="">{totalPrice}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}