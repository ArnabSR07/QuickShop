import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { assets } from "../assets/assets";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const FlashSales = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? assets.products.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === assets.products.length - 1 ? 0 : prev + 1
    );
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 20,
    seconds: 29,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num) => String(num).padStart(2, "0");

  return (
    <div className=" w-full px-6 py-8 my-5">
      <div className="flex items-center justify-between gap-12 mb-5">


        {/* Label Section */}
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-red-500 rounded"></div>

          <div>
            <div className="text-red-500 font-semibold text-base">Today's</div>
            <h2 className="text-2xl font-bold text-black mt-1">Flash Sales</h2>
          </div>
        </div>

        

        <div className="flex items-center gap-4">

          
        {/* Countdown Timer */}
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center">
            <span className="text-xs font-medium text-black mb-1">Days</span>
            <span className="text-2xl font-bold text-black">
              {formatTime(timeLeft.days)}
            </span>
          </div>
          <span className="text-2xl font-bold text-red-500 mt-3">:</span>
          <div className="flex flex-col items-center">
            <span className="text-xs font-medium text-black mb-1">Hours</span>
            <span className="text-2xl font-bold text-black">
              {formatTime(timeLeft.hours)}
            </span>
          </div>
          <span className="text-2xl font-bold text-red-500 mt-3">:</span>
          <div className="flex flex-col items-center">
            <span className="text-xs font-medium text-black mb-1">Minutes</span>
            <span className="text-2xl font-bold text-black">
              {formatTime(timeLeft.minutes)}
            </span>
          </div>
          <span className="text-2xl font-bold text-red-500 mt-3">:</span>
          <div className="flex flex-col items-center">
            <span className="text-xs font-medium text-black mb-1">Seconds</span>
            <span className="text-2xl font-bold text-black">
              {formatTime(timeLeft.seconds)}
            </span>
          </div>
        </div>

        {/* Navigation Arrows */}

        <div className="flex gap-2">
          <button
            className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
          <button
            className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>



        </div>

        

        

        
      </div>

      <br />

      {/* products */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full">
          {" "}
          {assets.products.slice(currentIndex, currentIndex + 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center mt-8">
        <Link to="/allproducts">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FlashSales;
