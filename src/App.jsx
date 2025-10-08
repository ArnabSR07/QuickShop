import { useState } from "react";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";
import Checkout from "./pages/Checkout";
import { Toaster } from "react-hot-toast";
import { ToastContainer,toast } from "react-toastify";

function App() {

  return (
    <>
      
      <Router>
        <ToastContainer/>
        <WishlistProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/allproducts" element={<AllProducts />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/wishlist" element={<WishList />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </CartProvider>
        </WishlistProvider>
      </Router>
    </>
  );
}

export default App;
