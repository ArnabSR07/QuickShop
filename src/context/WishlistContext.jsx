import React, {
  createContext,
  useContext,
  useDebugValue,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

//creating context
const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

//Provider component

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  //adding products to wishlist

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev;
      toast.success("Your Wishlist was updated");
      return [...prev, product];
    });
  };

  //Removing from wishlist

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
    toast.success("Your Wishlist was updated");
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishList = () => useContext(WishlistContext);
