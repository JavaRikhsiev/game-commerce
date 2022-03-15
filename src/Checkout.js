import React from "react";
import "./Checkout.css";
import ProductCheckout from "./ProductCheckout";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="Checkout">
      <div className="Checkout__left">
        <img
          className="Checkout__ad"
          src="https://www.adorama.com/images/cms/33095Gaming-Monitors-Gaming-Hero-Desktop_66529.jpg"
          alt=""
        />

        <div>
          <h3>Hello {user?.email}</h3>
          <h2 className="Checkout__title">Your Shopping Basket</h2>

          {basket.map((item) => (
            <ProductCheckout
              id={item.id}
              title={item.title}
              image={item.image}
              cost={item.cost}
              ranking={item.ranking}
            />
          ))}

          {/*CheckoutProduct*/}
          {/*CheckoutProduct*/}
          {/*CheckoutProduct*/}
          {/*CheckoutProduct*/}
          {/*CheckoutProduct*/}
        </div>
      </div>

      <div className="Checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
