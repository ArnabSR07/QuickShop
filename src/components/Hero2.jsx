

import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

export default function MusicHeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    days: 5,
    minutes: 59,
    seconds: 35,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, days, minutes, seconds } = prev;

        seconds--;

        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }

        if (minutes < 0) {
          minutes = 59;
          hours--;
        }

        if (hours < 0) {
          hours = 23;
          days--;
        }

        if (days < 0) {
          days = 0;
          hours = 0;
          minutes = 0;
          seconds = 0;
        }

        return { hours, days, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-center px-4 md:px-10 py-10 mx-5">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}

        <div className="text-center lg:text-left space-y-6">
          <span className="text-green-500 text-xs sm:text-lg font-semibold uppercase tracking-wide">
            Categories
          </span>

          
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug text-white">
              Enhance Your <br className="hidden sm:block" />
              Music Experience
            </h2>
          

          {/* Countdown Timer */}
          <div className="flex justify-center lg:justify-start gap-4 flex-wrap mt-5">
            <div className="bg-white rounded-full w-12 h-12 sm:w-20 sm:h-20 flex flex-col items-center justify-center shadow-lg">
              <span className="text-xs sm:text-2xl font-bold text-black">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs text-black">Hours</span>
            </div>
            <div className="bg-white rounded-full w-12 h-12 sm:w-20 sm:h-20 flex flex-col items-center justify-center shadow-lg">
              <span className="text-xs sm:text-2xl font-bold text-black">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs text-black">Days</span>
            </div>
            <div className="bg-white rounded-full w-12 h-12 sm:w-20 sm:h-20 flex flex-col items-center justify-center shadow-lg">
              <span className="text-xs sm:text-2xl font-bold text-black">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs text-black">Minutes</span>
            </div>
            <div className="bg-white rounded-full w-12 h-12  sm:w-20 sm:h-20 flex flex-col items-center justify-center shadow-lg">
              <span className="text-xs sm:text-2xl font-bold text-black">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs text-black">Seconds</span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 md:px-10 md:py-4 rounded-md  shadow-md mt-5">
            Buy Now!
          </button>
        </div>

        

        <div className="relative flex items-center justify-center">
  <div className="absolute w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-green-500 rounded-full blur-3xl opacity-20"></div>
  <img
    src={assets.headsetHero}
    alt="Headset Hero"
    className="relative z-10 w-full h-48 md:h-full object-contain max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
  />
</div>
      </div>
    </div>
  );
}
