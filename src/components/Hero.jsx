import React from "react";
import { assets } from "../assets/assets";



export default function Hero() {


  
  return (
   
    <div className="px-4 sm:px-6 md:px-6 py-8">

      <div className="rounded-2xl w-full min-h-[400px] md:h-[600px] bg-gradient-to-r from-[#F9F9F9] to-[#E1E1E1] relative overflow-hidden mb-6 md:flex items-center ">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full mt-12">
        <img
          src={assets.watch}
          alt="Watch Background"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-2/3 md:pr-8 py-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter tracking-tight py-6 mb-6">
              Discover the{" "}
              <span className="font-bold font-inter sm:inline md:text-5xl text-[#FFAD33] py-6">
                Best Deals<br />
              </span>{" "}
               on Trendy Products
            </h1>
            <p className="text-base font-inter font-light">
              QuickShop is your one-stop shop for top-quality items at
              unbeatable prices. Explore our latest arrivals and exclusive
              offers today!
            </p>
            <div className="mt-8 flex items-center">

             

              <button
                
                className="inline-flex items-center justify-center !px-5 !py-3 rounded-full !bg-[#FF5722] !text-white !font-medium !text-xl !shadow-lg hover:bg-opacity-90 transition-all"
              >
                Shop Now
              </button>
          
              
              <button
                // onClick={handleShopNow}
                className="inline-flex items-center justify-center ml-4 !w-12 !h-12 !rounded-full !border-[#878787] border-2 !bg-white shadow-lg hover:shadow-lg transition-all "
              >
                {/* <MoveUpRight className="!w-6 !h-6 text-black" /> */}
                <img src={assets.downArrow} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>

    
  );
}