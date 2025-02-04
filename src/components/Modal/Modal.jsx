import React, { useContext } from "react";
import "./Modal.css";
import { FaStar } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { store } from "../../store/AppContext";

function Modal() {
  const { setOpenModal, productDetail, addItemToCart } = useContext(store);

  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <IoClose onClick={closeModal} id="close-btn" size={24} />
        <div className="left-img">
          <img src={productDetail?.image} alt="product-image" />
        </div>
        <div className="right-details">
          <h2>{productDetail?.title}</h2>
          <div className="details">
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  color={index < productDetail?.rating.rate ? "gold" : "black"}
                />
              ))}
            </div>
            <p id="rating-text">(150)</p>
            <p style={{ color: "green" }}>In Stock</p>
          </div>
          <h4>&#36;{productDetail?.price}</h4>
          <p>{productDetail?.description}</p>
          <div className="line"></div>
          <div className="btns-box">
            <div className="quantity">
              <p>-</p>
              <p id="quantity-val">2</p>
              <p>+</p>
            </div>
            <button onClick={()=>addItemToCart(productDetail)} className="buy-now-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
