import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useWishList } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

const WishList = () => {
  const { wishlist } = useWishList();
  const {addToCart} = useCart();

  const handleMoveAllToBag = ()=>{
    if(wishlist.length == 0)
      return;

     wishlist.forEach((item) => {
      addToCart({ ...item, quantity: 1 });

      toast.success("All wishlist items moved to your cart");
    });
  }

  return (
    <div>
      <Navbar />

      <div className="w-full px-6 py-8">

      
         

         <div className="flex justify-between items-center">
          <h1 className="font-semibold text-2xl text-gray-500">
            Wishlist ({wishlist.length})
          </h1>
          {wishlist.length ? <button onClick={handleMoveAllToBag} className="px-8 py-2 font-semibold border border-black rounded-md hover:bg-gray-400">
            Move All To Bag
          </button> : ""}
          
        </div>

        <div className="grid grid-cols-4 w-full gap-6 mt-16">
          {wishlist.slice(0, 4).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>


        {wishlist.length ? (<div>
      

      <div className="flex justify-between items-center mt-12 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-red-500 rounded"></div>

            <div>
              <h1 className="text-xl text-gray-500 font-bold">Just For You</h1>
            </div>
          </div>

          <Link to="/allproducts">
            <button className="px-8 py-2 font-semibold border border-black rounded-md hover:bg-gray-400">
              View All
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-4 w-full gap-6 mt-16">
          {assets.products.slice(0, 4).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        </div>) :"" }

        

        
      

        

        

        
      </div>

      <Footer />
    </div>
  );
};

export default WishList;
