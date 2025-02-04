import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer/Footer";
import ContextProvider from "./store/AppContext";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ContextProvider>
      <ToastContainer autoClose={1500} />
        <Navbar />
        <Homepage />
        <Footer />
      </ContextProvider>
    </>
  );
}

export default App;
