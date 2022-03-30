import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product({ id, title, image, cost, ranking, site }) {
  const [{ basket }, dispatch] = useStateValue();
  //console.log("this is the basket >>> ", basket);
  const addToBasket = () => {
    // dispatch the item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        cost: cost,
        ranking: ranking,
      },
    });
    toast(`${title} is added  to basket`, {
      position: "bottom-right",
    });
    // alert("Item is added to the basket!!!");
  };
  return (
    <div className="product">
      <ToastContainer />
      <div className="product_info">
        <p>{title}</p>
        <p className="product_cost">
          <small>$</small>
          <strong>{cost}</strong>
        </p>
        <div className="product_ranking">
          {Array(ranking)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <a href={site} target="_blank">
        <img className="productImage" src={image} alt="" />
      </a>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
