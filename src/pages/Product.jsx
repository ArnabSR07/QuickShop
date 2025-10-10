import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Navigate, useLocation } from "react-router-dom";
import { Heart } from "lucide-react";
import { assets } from "../assets/assets";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishList } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const { cart, addToCart, removeFromCart, updateCart } = useCart();

  // Fetching product data

  const location = useLocation();
  const { product } = location.state || {};

  const [mainImage, setMainImage] = useState(product?.image?.[0]);

  //find  product quantity in the cart

  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  //Increment
  const handleIncrement = () => {
    addToCart(product);
  };

  //Decrement

  const handleDecrement = () => {
    if (quantity > 1) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      updateCart(updatedCart);
    } else if (quantity === 1) {
      removeFromCart(product.id);
    }
  };

  const handleBuyNow = () => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (!existingItem) {
      addToCart({ ...product, quantity: 1 });
    }

    navigate("/cart");
  };

  if (!product) return <h1>No product data</h1>;

  return (
    <div>
      <Navbar />

      <div className="flex flex-col md:flex-row gap-8 p-6 max-w-6xl mx-auto mb-5">
        {/* Left Images */}

        <div className="flex gap-4 w-full md:w-1/2">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4">
            {product.image.map((img, index) => (
              <div
                key={index}
                onClick={() => setMainImage(img)}
                className={`bg-gray-200 rounded-md p-2 cursor-pointer  border-2 ${
                  mainImage === img
                    ? "" // highlight selected image
                    : "border-transparent"
                } `}
              >
                <img
                  src={img}
                  alt={product.name}
                  className="w-20 h-20  object-cover"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full rounded-xl"
            />
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
            ⭐ {product.rating} ({product.reviews} Reviews)
            <span className="text-green-600 font-semibold"> | In Stock</span>
          </div>

          <p className="text-2xl font-semibold mt-4">${product.price}</p>

          <p className="text-gray-600 mt-3">{product.description}</p>

          {/* Colours */}
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Colours:</h4>
            <div className="flex gap-2">
              {product.colours?.map((c, idx) => (
                <div
                  key={idx}
                  className="w-6 h-6 rounded-full border cursor-pointer"
                  style={{ backgroundColor: c }}
                ></div>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Size:</h4>
            <div className="flex gap-3">
              {product.sizes?.map((s, idx) => (
                <button
                  key={idx}
                  className="px-3 py-1 border rounded-md hover:bg-black hover:text-white transition"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Buy Now */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex border rounded-md">
              <button
                onClick={handleDecrement}
                className="px-3 py-1 hover:bg-orange-500"
              >
                -
              </button>
              <span className="px-4 py-1 border-x">{quantity}</span>
              <button
                onClick={handleIncrement}
                className="px-3 py-1 hover:bg-orange-500"
              >
                +
              </button>
            </div>
            <button
              onClick={handleBuyNow}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow hover:bg-orange-600 transition"
            >
              Buy Now
            </button>
            <button className="border p-2 rounded-lg">
              <Heart size={20} />
            </button>
          </div>

          {/* Delivery Info */}

          <div className=" w-full max-w-sm border border-black mt-6 text-sm text-gray-600 px-5 py-5 grid gap-4">
            <div className="flex items-start sm:items-center gap-4">
              <img
                className="w-6 h-6 flex-shrink-0"
                src={assets.iconDelivery}
                alt="Delivery"
              />
              <div className="font-semibold">
                Free Delivery <br className="sm:hidden" />
                <span className="text-gray-500 text-xs sm:text-sm">
                  Enter postal code for availability
                </span>
              </div>
            </div>

            {/* Free Return */}
            <div className="flex items-start sm:items-center gap-4">
              <img
                className="w-6 h-6 flex-shrink-0"
                src={assets.iconReturn}
                alt="Return"
              />
              <div className="font-semibold">Free 30 Days Return Delivery</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-6 py-8">
        <div className="flex items-center gap-12 mb-5">
          {/* Label Section */}

          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-red-500 rounded"></div>
            <div>
              <div className="text-red-500 font-semibold text-base">
                Related Items
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full">
            {" "}
            {assets.products.slice(currentIndex, currentIndex + 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
