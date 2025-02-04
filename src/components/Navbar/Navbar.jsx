import React, { useContext, useState } from "react";
import "./Navbar.css";
import { IoSearchOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { store } from "../../store/AppContext";

function Navbar() {
  const { cartItems, getProductsByCategory } = useContext(store);
  const [searchval, setSearchVal] = useState("");

  const searchCategory = ()=>{
    if(searchval !==""){
      getProductsByCategory(searchval);
    }
  }


  return (
    <div className="navbar">
      <h2>Harmoni</h2>
      <div className="options">
        <div className="search-box">
          <input
            value={searchval}
            onChange={(e) => setSearchVal(e.target.value)}
            type="text"
            placeholder="Search Categories"
          />
          <IoSearchOutline onClick={searchCategory} size={22} />
        </div>
        <TiShoppingCart size={30} />
        <p className="cart-count">{cartItems?.length}</p>
      </div>
    </div>
  );
}

export default Navbar;
