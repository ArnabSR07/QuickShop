// import React, { useState, useEffect } from 'react';
// import { assets } from '../assets/assets';

// export default function MusicHeroSection() {
//   const [timeLeft, setTimeLeft] = useState({
//     hours: 23,
//     days: 5,
//     minutes: 59,
//     seconds: 35
//   });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prev => {
//         let { hours, days, minutes, seconds } = prev;

//         seconds--;

//         if (seconds < 0) {
//           seconds = 59;
//           minutes--;
//         }

//         if (minutes < 0) {
//           minutes = 59;
//           hours--;
//         }

//         if (hours < 0) {
//           hours = 23;
//           days--;
//         }

//         if (days < 0) {
//           days = 0;
//           hours = 0;
//           minutes = 0;
//           seconds = 0;
//         }

//         return { hours, days, minutes, seconds };
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="bg-black min-h-screen flex items-center justify-center px-2 py-4 mx-5 mb-20">
//       <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
//         {/* Left Content */}
//         <div className="space-y-5">
//           <div className="inline-block">
//             <span className="text-green-500 text-lg font-semibold tracking-wide uppercase">
//               Categories
//             </span>
//           </div>

//           <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
//             Enhance Your
//             <br />
//             Music Experience
//           </h1>

//           {/* Countdown Timer */}
//           <div className="flex gap-4 flex-wrap">
//             <div className="bg-white rounded-full w-20 h-20 flex flex-col items-center justify-center">
//               <span className="text-2xl font-bold text-black">{timeLeft.hours}</span>
//               <span className="text-xs text-black">Hours</span>
//             </div>

//             <div className="bg-white rounded-full w-20 h-20 flex flex-col items-center justify-center">
//               <span className="text-2xl font-bold text-black">{String(timeLeft.days).padStart(2, '0')}</span>
//               <span className="text-xs text-black">Days</span>
//             </div>

//             <div className="bg-white rounded-full w-20 h-20 flex flex-col items-center justify-center">
//               <span className="text-2xl font-bold text-black">{timeLeft.minutes}</span>
//               <span className="text-xs text-black">Minutes</span>
//             </div>

//             <div className="bg-white rounded-full w-20 h-20 flex flex-col items-center justify-center">
//               <span className="text-2xl font-bold text-black">{timeLeft.seconds}</span>
//               <span className="text-xs text-black">Seconds</span>
//             </div>
//           </div>

//           {/* CTA Button */}
//           <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-10 py-4 rounded-md transition-all duration-300 transform hover:scale-105">
//             Buy Now!
//           </button>
//         </div>

//         {/* Right Content - Headphone Image */}
//         <div className="relative flex items-center justify-center">
//           <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full blur-3xl opacity-50"></div>
//           <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
//             <div className="w-4/5 h-4/5 bg-gradient-to-br from-gray-600 to-gray-600 rounded-full flex items-center justify-center shadow-2xl">
//               <div className="text-gray-300 text-center">
//                 <img src={assets.headsetHero} className="max-h-full w-full object-contain" alt="" />
//                 <p className="text-sm mt-4"></p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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
    <div className="bg-gradient-to-r from-black via-gray-900 to-black min-h-screen flex items-center justify-center px-6 py-10 mx-5">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}

        <div className="space-y-2 text-left">
          <span className="text-green-500 text-lg font-semibold uppercase tracking-wide">
            Categories
          </span>

          <div className="text-right md:text-left pt-12">
            <h2 className="text-4xl md:text-5xl font-bold leading-snug text-white">
              Enhance Your <br />
              Music Experience
            </h2>
          </div>

          {/* Countdown Timer */}
          <div className="flex gap-4 flex-wrap mt-5">
            <div className="bg-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-black">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-xs text-black">Hours</span>
            </div>
            <div className="bg-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-black">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className="text-xs text-black">Days</span>
            </div>
            <div className="bg-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-black">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-xs text-black">Minutes</span>
            </div>
            <div className="bg-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-black">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-xs text-black">Seconds</span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-10 py-4 rounded-md  shadow-md mt-5">
            Buy Now!
          </button>
        </div>

        {/* Right Content */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-20"></div>
          <img
            src={assets.headsetHero}
            alt="Headset Hero"
            className="relative z-10 w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
}
