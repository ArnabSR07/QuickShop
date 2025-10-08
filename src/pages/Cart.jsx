import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { X } from "lucide-react";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart, addToCart, removeFromCart, updateCart } = useCart();

  const [subtotal, setSubtotal] = useState(0)
  const [total,setTotal] = useState(0);

  useEffect(()=>{
    const newSubtotal = cart.reduce((acc,item)=> acc+item.price*item.quantity,0)
    setSubtotal(newSubtotal)
    setTotal(newSubtotal);
  },[cart])

  const handleQuantityChange = (product, value) => {
    const newQuantity = parseInt(value);

    if (isNaN(newQuantity) || newQuantity <= 0) {
      // remove item if user sets quantity to 0 or invalid
      removeFromCart(product.id);
      return;
    }

    // Update cart array with new quantity
    const updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: newQuantity } : item
    );

    updateCart(updatedCart);
  };

  const handleUpdateCart = () => {
    updateCart(cart);

    const newSubtotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubtotal(newSubtotal);
    setTotal(newSubtotal);
  };

  return (
    <div>
      <Navbar />

      <div className="px-8 py-8 w-full">
        <div className="text-gray-500">
          <span>
            {" "}
            <Link to="/">Home</Link>{" "}
          </span>{" "}
          <span>/</span>{" "}
          <span>
            {" "}
            <Link to="/cart">Cart</Link>{" "}
          </span>
        </div>

        <div className="grid grid-cols-4 px-3 py-2 gap-6 w-full">
          <span className="text-center">Product</span>
          <span className="text-center">Price</span>
          <span className="text-center">Quantity</span>
          <span className="text-center">Subtotal</span>
        </div>

        {/* cart items */}

        {cart.length > 0 &&
          cart.map((item) => (
            <div key={item.id}>
              <div
                
                className="grid grid-cols-4 gap-6 items-center bg-white shadow-md hover:shadow-lg transition-shadow duration-200 rounded-lg py-4 px-3 mt-4"
              >
                {/* Product */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <img
                    src={item.image[0]}
                    alt={item.name}
                    className="w-16 h-16 object-contain"
                  />
                  <span className="font-medium">{item.name}</span>
                </div>

                {/* Price */}
                <div className="text-center text-gray-700 font-medium">
                  ${item.price}
                </div>

                {/* Quantity */}
                <div className="flex justify-center">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item, e.target.value)}
                    className="w-16 text-center border rounded-md py-1 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                {/* Subtotal */}
                <div className="text-center font-semibold text-gray-800">
                  ${item.price * item.quantity}
                </div>
              </div>
            </div>
          ))}

        <div className="grid grid-cols-4 gap-6 items-center mb-16">
          <Link to="/allproducts">
            <button className="px-8 py-2 font-semibold border border-black rounded-md hover:bg-gray-400">
              Return To Shop
            </button>
          </Link>
          <div></div>
          <div></div>
          <div className="flex items-center justify-center">
            {cart.length ? <button
              onClick={handleUpdateCart}
              className=" px-8 py-2 font-semibold border border-black rounded-md hover:bg-gray-400"
            >
              Update Cart
            </button> : ""}
          </div>
        </div>

        

        <div className="flex justify-between">

         {/* left Section */}

         <div className="flex w-full md:w-1/2 gap-3">
    
        <div className="flex items-start gap-3">
          <input
            type="text"
            placeholder="Enter your coupon code"
            className="flex-1 border border-gray-300 rounded-md px-6 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
          <button className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition">
            Apply Coupon
          </button>
        </div>
      </div>

      {/* Right section  */}

      <div className="flex flex-col w-full md:w-1/3 bg-gray-50 rounded-xl p-5 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>

        <div className="flex justify-between mb-2 text-sm">
          <span>Subtotal</span>
          <span className="font-medium">${subtotal}</span>
        </div>
        <div className="flex justify-between mb-2 text-sm">
          <span>Shipping</span>
          <span className="font-medium text-gray-600">Free</span>
        </div>
        <div className="flex justify-between text-base font-semibold border-t border-gray-200 pt-3">
          <span>Total</span>
          <span className="text-orange-600">${total}</span>
        </div>

        {cart.length ? <Link to='/checkout'><button className="mt-5 bg-orange-600 text-white text-sm px-8 font-medium py-2.5 rounded-md hover:bg-orange-700 transition">
          Proceed to Checkout
        </button></Link> : ""}
       
        

        
      </div>


      </div>


        </div>

         

      

      <Footer />
    </div>
  );
};

export default Cart;
