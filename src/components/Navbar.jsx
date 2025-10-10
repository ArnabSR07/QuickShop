import React from "react";
import SearchBar from "./SearchBar";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { Search } from "lucide-react";

const Navbar = () => {
  const { wishlist } = useWishlist();
  const { cart, totalItems } = useCart();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      {/* for Dekstop screen */}

      <Link to="/">
        <h1 className="text-xl md:text-2xl font-bold text-orange-600 transition-all">
          QuickShop
        </h1>
      </Link>

      <div className="hidden md:block flex-1 max-w-md mx-8">
        <SearchBar />
      </div>

      {/* For Mobile Screen */}

      <div className="flex justify-between md:hidden">
       <div></div>
        <div className="h-10 w-10 px-2 py-2 hover:cursor-pointer rounded-full bg-gray-200 justify-center items-center">
          <Search />
        </div>
      </div>

      <div className="hidden md:flex gap-4 items-center">
        {/* Home */}
        <Link to="/">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center py-2 hover:bg-gray-200 transition">
            <img src={assets.homePage} alt="home" className="w-5 h-5" />
          </div>
        </Link>

        {/* Wishlist */}
        <div className="relative">
          <Link to="/wishlist">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition py-2">
              <img src={assets.favourite} alt="wishlist" className="w-5 h-5" />
            </div>
          </Link>
          {wishlist.length > 0 && (
            <span className="absolute top-1.5 right-1.5 bg-red-500 text-white text-[10px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center shadow-md">
              {wishlist.length}
            </span>
          )}
        </div>

        {/* Cart */}
        <div className="relative">
          <Link to="/cart">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
              <img src={assets.shopcart} alt="cart" className="w-5 h-5" />
            </div>
          </Link>
          {totalItems > 0 && (
            <span className="absolute top-1.5 right-1.5 bg-red-500 text-white text-[10px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center shadow-md">
              {totalItems}
            </span>
          )}
        </div>

        {/* Profile */}
        <Link to="/profile">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
            <img src={assets.customer} alt="profile" className="w-5 h-5" />
          </div>
        </Link>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-gray-300 border-gray-700 py-3 md:hidden z-50">
        <div className="flex justify-around text-black">
          {/* Home */}

          <Link to="/">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center py-2 hover:bg-gray-200 transition">
              <img src={assets.homePage} alt="home" className="w-5 h-5" />
            </div>
          </Link>

          {/* Wishlist */}
          <div className="relative">
            <Link to="/wishlist">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition py-2">
                <img
                  src={assets.favourite}
                  alt="wishlist"
                  className="w-5 h-5"
                />
              </div>
            </Link>
            {wishlist.length > 0 && (
              <span className="absolute top-1.5 right-1.5 bg-red-500 text-white text-[10px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center shadow-md">
                {wishlist.length}
              </span>
            )}
          </div>

          {/* Cart */}
          <div className="relative">
            <Link to="/cart">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
                <img src={assets.shopcart} alt="cart" className="w-5 h-5" />
              </div>
            </Link>
            {totalItems > 0 && (
              <span className="absolute top-1.5 right-1.5 bg-red-500 text-white text-[10px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center shadow-md">
                {totalItems}
              </span>
            )}
          </div>

          {/* Profile */}

          <Link to="/profile">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
              <img src={assets.customer} alt="profile" className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
