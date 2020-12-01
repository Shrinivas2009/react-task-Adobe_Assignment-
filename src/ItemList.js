import React from 'react';
import { Items } from './Items';
import Data from './cart.json';
export const ItemList = () => {

  return (
    <div className="shooping-item-container">
      {
        Data.items.map(item => 
          {
            return <Items name={item.name} image={item.image} display={item.price.display} actual={item.price.actual} discount={item.discount}/> 
          }
        )
      }
    </div>
  )
}