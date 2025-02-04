import React, { useContext, useEffect, useState } from "react";
import "./Homepage.css";
import Course from "../components/Course/Course";
import Modal from "../components/Modal/Modal";
import { FaTruck } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import Loader from "../components/Loader/Loader";
import { store } from "../store/AppContext";
import Categories from "../components/Categories/Categories";

function Homepage() {
  const { loading, getAllProducts, products, openModal, getCategories } =
    useContext(store);

  useEffect(() => {
    getAllProducts();
    getCategories();
  }, []);

  return (
    <>
      {/* header starts here*/}
      <section className="header">
        <div>
          <h1>
            Welcome to <span>My Store</span>
          </h1>
          <h1>Your Shopping</h1>
          <h1>Destination</h1>
        </div>
        <div className="left"></div>
        <div className="right"></div>
      </section>

      {/* banner section starts here*/}
      <section className="banner-container">
        <h1>Discover Your Next Favorite Item</h1>
        <p>
          Browse our exclusive collection and find the perfect product tailored
          just for you.
        </p>
        <div className="banner-btns">
          <button className="banner-btn shop-btn">Shop</button>
          <button className="banner-btn learn-more-btn">Learn More</button>
        </div>
      </section>

      {/* banner section ends here*/}

      {/* course section starts here */}
      <Categories />
      <section className="course-section">
        <div className="today">
          <div className="box"></div>
          <h3>Our Products</h3>
        </div>
        <h1>Explore Our Products</h1>

        <div className="course-container">
          {products?.length === 0 && <h1>No products found</h1>}
          {loading && <Loader />}
          {products?.map((product, idx) => (
            <Course key={idx} product={product} />
          ))}
        </div>
      </section>

      <section className="service">
        <div className="ser-box">
          <FaTruck />
          <h3>FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over Rs.500</p>
        </div>

        <div className="ser-box">
          <FaHeadphones />
          <h3>24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 Customer Support</p>
        </div>

        <div className="ser-box">
          <MdVerifiedUser />
          <h3>MONEY BACK GURANTEE</h3>
          <p>We Return Money within 30 days</p>
        </div>
      </section>

      {/* opening pop-up modal */}
      {openModal && <Modal />}
    </>
  );
}

export default Homepage;
