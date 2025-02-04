import React, { useContext } from "react";
import "./Course.css";
import { FaStar } from "react-icons/fa6";
import { store } from "../../store/AppContext";

function Course({ product }) {
  const { openModalChange, addItemToCart } = useContext(store);

  return (
    <div className="product-card">
      <div onClick={() => openModalChange(product)} className="image-div">
        <img src={product?.image} alt="product-image" />
      </div>
      <h4>{product?.title.slice(0, 22)}..</h4>
      <div className="details">
        <p>&#36;{product?.price}</p>
        <div className={`rating`}>
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              color={index < product?.rating.rate ? "gold" : "black"}
            />
          ))}
        </div>
        <p id="rating-text">({product?.rating.rate})</p>
      </div>
      <button
        onClick={() => addItemToCart(product)}
        className="add-to-cart-btn"
      >
        Add To Cart
      </button>
    </div>
  );
}

export default Course;
