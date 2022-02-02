import React from "react";
import "./ProductCheckout.css";
import {useStateValue} from "./StateProvider";

function ProductCheckout({ id, image, title, cost, ranking }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
       //remove 
       dispatch({
           type: 'REMOVE_FROM_BASKET',
           id: id,
       })
    }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{cost}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(ranking)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default ProductCheckout;