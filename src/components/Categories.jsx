import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { assets } from "../assets/assets";
import CategoryCard from "./CategoryCard";
import ProductCard from "./ProductCard";

const Categories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const filteredProducts = selectedCategory
    ? assets.products.filter((p) => p.category === selectedCategory)
    : [];

  const chunkedProducts = [];
  for (let i = 0; i < filteredProducts.length; i += 4) {
    chunkedProducts.push(filteredProducts.slice(i, i + 4));
  }

  return (
    <div className="w-full px-6 py-8">
      <div className="flex items-center justify-between gap-12 mb-7">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-red-500 rounded"></div>
          <div>
            <div className="text-red-500 font-semibold text-base">
              Categories
            </div>
            <h2 className="text-2xl font-bold text-black mt-1">
              Browse By Category
            </h2>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
          <button className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>

      {/* categories */}

      <div className="grid grid-cols-1 md:grid-cols-6 gap-0 w-full mb-5">
        {" "}
        {assets.categories.slice(currentIndex, currentIndex + 6).map((c) => (
          <div
            key={c.id}
            className="cursor-pointer"
            onClick={() => handleCategorySelect(c.name)}
          >
            {" "}
            <CategoryCard key={c.id} category={c} isSelected={selectedCategory === c.name} />{" "}
          </div>
        ))}
      </div>

      {/* products under selected category */}

      {selectedCategory && (
        <div className="space-y-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Showing products for:{" "}
            <span className="text-red-500">{selectedCategory}</span>
          </h3>

          {chunkedProducts.length > 0 ? (
            chunkedProducts.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
              >
                {row.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              No products found for this category.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Categories;
