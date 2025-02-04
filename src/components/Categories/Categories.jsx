import React, { useContext, useState } from "react";
import "./Categories.css";
import { store } from "../../store/AppContext";

function Categories() {
  const { categories, getProductsByCategory, getAllProducts } =
    useContext(store);
  const [activeCategory, setActiveCategory] = useState("");

  const setCategory = (category) => {
    setActiveCategory(category);
    getProductsByCategory(category);
  };

  return (
    <section className="category-section">
      <h2>Search products By Categories</h2>
      <ul>
        <li
          onClick={() => {
            getAllProducts();
            setActiveCategory("");
          }}
        >
          All
        </li>
        {categories?.map((category, idx) => (
          <li
            className={`${activeCategory === category ? "active" : ""}`}
            onClick={() => setCategory(category)}
            key={idx}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Categories;
