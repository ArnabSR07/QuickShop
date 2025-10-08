import React from 'react'
import { useState } from 'react';
import { assets } from '../assets/assets';
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from './ProductCard';
import {Link} from 'react-router-dom'

const Collection = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      setCurrentIndex((prev) => (prev === 0 ? assets.products.length - 1 : prev - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prev) => (prev === assets.products.length - 1 ? 0 : prev + 1));
    };
  

  return (
    <div className="w-full px-6 py-8">

      <div className="flex items-center justify-between gap-12 mb-5">
        {/* Label Section */}

        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-red-500 rounded"></div>
          <div>
            <div className="text-red-500 font-semibold text-base">Our Products</div>
            <h2 className="text-2xl font-bold text-black mt-1">Explore Our Products</h2>
          </div>
        </div>

        {/* Navigation */}

        <div className="flex gap-2">
        <button className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors" onClick={prevSlide}>
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
        <button className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors" onClick={nextSlide}>
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
        {" "}
        {assets.products.slice(currentIndex, currentIndex + 8).map((p) => (
        
          <ProductCard key={p.id} product={p} />
        
        ))}
      </div>

      <div className="w-full flex justify-center mt-8">

        <Link to='/allproducts'>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition mb-5">
          View All Products
        </button>
         </Link>

      </div>

    </div>
  )
}

export default Collection