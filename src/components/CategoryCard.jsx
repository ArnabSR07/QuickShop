import React, { useState } from "react";

const CategoryCard = ({ category,isSelected }) => {


  return (
    <div
      onClick={()=>onSelect(category.name)}
      className={`flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg transition-all duration-200 cursor-pointer w-40 h-40 ${
        isSelected 
          ? "bg-red-500 text-white shadow-lg" 
          : "bg-white text-gray-900 hover:bg-red-400 hover:text-white hover:shadow-lg"
      }`}
    >
      <div className="mb-4">
        <img className="w-12 h-12 object-contain" src={category.image} alt="" />
      </div>
      <p className="text-sm font-medium text-gray-900 text-center">
        {category.name}
      </p>
    </div>
  );
};

export default CategoryCard;
