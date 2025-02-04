import { useState, createContext } from "react";
import { toast } from "react-toastify";

export const store = createContext();

const ContextProvider = ({ children }) => {
  const url = "https://fakestoreapi.com";
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [productDetail, setProductDetail] = useState({});
  const [categories, setCategories] = useState([]);

  // alert function
  const alert = (msg) => {
    toast(msg);
  };

  // fetching all products function
  const getAllProducts = () => {
    try {
      setLoading(true);
      fetch(`${url}/products`).then((res) => {
        res.json().then((data) => {
          setLoading(false);
          setProducts(data);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  // fetching all categories
  const getCategories = () => {
    try {
      fetch(`${url}/products/categories`).then((res) => {
        res.json().then((data) => {
          setCategories(data);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  // opening model and setting the product detail
  const openModalChange = (product) => {
    setProductDetail(product);
    setOpenModal(true);
  };

  // function for adding the item in the cart
  const addItemToCart = (product) => {
    setCartItems([...cartItems, product]);
    alert("Item added the cart");
  };

  // function to fetch product on the basis of category
  const getProductsByCategory = (category) => {
    alert(`Showing products from ${category}`);
    try {
      setLoading(true);
      fetch(`${url}/products/category/${category}`).then((res) => {
        res.json().then((data) => {
          setLoading(false);
          setProducts(data);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <store.Provider
      value={{
        getAllProducts,
        products,
        loading,
        productDetail,
        openModal,
        setOpenModal,
        openModalChange,
        cartItems,
        addItemToCart,
        getCategories,
        categories,
        getProductsByCategory,
      }}
    >
      {children}
    </store.Provider>
  );
};

export default ContextProvider;
