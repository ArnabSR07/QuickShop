import { Heart, Eye, Star } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const {wishlist,addToWishlist,removeFromWishlist} = useWishlist();
  const{addToCart} = useCart();

  const isWishlisted = wishlist.some((item) => item.id === product.id);

   const handleWishlistToggle = () => {
    if (isWishlisted) removeFromWishlist(product.id);
    else addToWishlist(product);
  };

  const handleAddToCart = ()=>{
    addToCart(product)
  }

  return (

    <div
      className="relative bg-white w-full flex flex-col hover:cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative bg-gray-100 p-4 flex items-center justify-center h-72">
        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded">
            -{product.discount}%
          </div>
        )}

        {/* Action Icons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className={`bg-white p-2 rounded-full shadow hover:bg-gray-50 transition ${isWishlisted ? "text-red-500" : "text-gray-600"}`} onClick={handleWishlistToggle}>
            <Heart className="w-5 h-5" />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-50">
            <Link to={`/product/${product.id}`} state={{product:product}} ><Eye className="w-5 h-5" /></Link>
            
          </button>
        </div>

        {/* Product Image */}
        <img src={product.image[0]} alt="" className="w-full h-full object-contain" />

        {/* Add to Cart Button - Shows on Hover */}
        {isHovered && (
          <button onClick={handleAddToCart} className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 font-medium hover:bg-gray-900 transition-colors">
            Add To Cart
          </button>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="text-base font-medium mb-2">{product.name}</h3>

        {/* Pricing */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-red-500 text-lg font-semibold">${product.price}</span>
          {product.oldprice && (
            <span className="text-gray-400 line-through">${product.oldprice}</span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`w-4 h-4 ${
                index < Math.floor(product.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : index < product.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-300 text-gray-300"
              }`}
            />
          ))}
          <span className="text-gray-500 text-sm ml-1">({product.reviewCount})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
