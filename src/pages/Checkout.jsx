import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart } = useCart();

  const subTotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

  return (
    <div>
      <Navbar className="mb-8" />
      <div className="my-11 px-6 py-8">
        <Link to="/profile">
          <span className="text-gray-400">Account</span>
        </Link>
        <span> / </span>
        <Link to="/profile">
          <span className="text-gray-400">My Account</span>
        </Link>
        <span> / </span>
        <Link to="/allproducts">
          <span className="text-gray-400">Product</span>
        </Link>
        <span> / </span>
        <Link to="/cart">
          <span className="text-gray-400">View Cart</span>
        </Link>
        <span> / </span>
        <Link to="/checkout">
          <span className="text-gray-400">Checkout</span>
        </Link>

        <div className="flex justify-between">
          <div className="me-2">
            <h1 className="text-xl mt-5">Billing Details</h1>

            <div className="my-5">
              <label id="firstName">First Name</label> <br />
              <input
                type="text"
                id="firstName"
                className="bg-gray-300 px-6 py-2 w-full rounded-md"
              />
            </div>
            <div className="my-5">
              <label id="comapanyName">Company Name</label> <br />
              <input
                type="text"
                id="comapanyName"
                className="bg-gray-300 px-6 py-2 w-full rounded-md"
              />
            </div>
            <div className="my-5">
              <label id="street">Street Address</label> <br />
              <input
                type="text"
                id="street"
                className="bg-gray-300 px-6 py-2 w-full rounded-md"
              />
            </div>
            <div className="my-5">
              <label id="apartment">Apartment, floor, etc. (optional)</label>{" "}
              <br />
              <input
                type="text"
                id="apartment"
                className="bg-gray-300 px-6 py-2 w-xl rounded-md"
              />
            </div>
            <div className="my-5">
              <label id="city">Town/City</label> <br />
              <input
                type="text"
                id="city"
                className="bg-gray-300 px-6 py-2 w-xl rounded-md"
              />
            </div>
            <div className="my-5">
              <label id="phone">Phone Number</label> <br />
              <input
                type="text"
                id="phone"
                className="bg-gray-300 px-6 py-2 w-full rounded-md"
              />
            </div>
            <div className="my-5">
              <label id="email">Email Address</label> <br />
              <input
                type="text"
                id="email"
                className="bg-gray-300 px-6 py-2 w-full rounded-md"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-gray-50 rounded-xl shadow-md p-6 flex flex-col justify-between">
            <h2 className="text-lg font-semibold mb-4">Your Order</h2>

            {/* Product List */}
            <div className="divide-y divide-gray-200 mb-4">
             {cart.length > 0 && (
              cart.map((item,index) =>(
                <div key={index} className="flex items-center justify-between py-3">

                 <div className=" flex items-center gap-3">
                  <img src={item.image[0]} alt={item.name} className="h-12 w-12 object-contain rounded-md" />
                  <p>{item.name}</p>
                 </div>

                 <span className="text-sm font-medium text-gray-800">
                       ${item.quantity*item.price}
                    </span>

                </div>
              ))
             )}
            </div>

            {/* Totals */}
            <div className="border-t border-gray-200 pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium">${subTotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between text-base font-semibold border-t border-gray-200 pt-3">
                <span>Total</span>
                <span className="text-orange-600">${subTotal}</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex flex-col justify-start mt-6 gap-3">
              <div className="flex justify-between">
                <label>
                  <input type="radio" name="paymentOption" value="Bank" />
                  &nbsp; Bank
                </label>

                <span className="flex gap-5">
                  <img src={assets.visa} alt="Visa" className="h-4" />
                  <img
                    src={assets.mastercard}
                    alt="MasterCard"
                    className="h-5"
                  />
                  <img src={assets.bKash} alt="bKash" className="h-5" />
                  <img src={assets.nagad} alt="Nagad" className="h-5" />
                </span>
              </div>

              <label>
                <input type="radio" name="paymentOption" value="Cod" />
                &nbsp; Cash On Delivery
              </label>
            </div>

            {/* Coupon Section */}
            <div className="flex items-center gap-3 mt-5">
              <input
                type="text"
                placeholder="Enter your coupon code"
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
              <button className="bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition">
                Apply Coupon
              </button>
            </div>

            {/* Place Order Button */}
            <div className="flex justify-start items-center mt-6">
              <button className=" px-5 bg-orange-600 text-white font-medium py-2.5 rounded-md hover:bg-orange-700 transition">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
