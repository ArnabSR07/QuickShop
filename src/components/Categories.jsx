// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { assets } from "../assets/assets";
// import CategoryCard from "./CategoryCard";
// import ProductCard from "./ProductCard";

// const Categories = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [productIndex, setProductIndex] = useState(0);
//   const categorySize = assets.categories.length;

//   const handleCategorySelect = (categoryName) => {
//     setSelectedCategory(categoryName);
//   };



//   const prevSlide2 = () => {
//     setProductIndex((prev) =>
//       prev === 0 ? assets.products.length - 1 : prev - 1
//     );
//   };

//   const nextSlide2 = () => {
//     setProductIndex((prev) =>
//       prev === assets.products.length - 1 ? 0 : prev + 1
//     );
//   };

//   const filteredProducts = selectedCategory
//     ? assets.products.filter((p) => p.category === selectedCategory)
//     : [];

//   const chunkedProducts = [];
//   for (let i = 0; i < filteredProducts.length; i += 4) {
//     chunkedProducts.push(filteredProducts.slice(i, i + 4));
//   }

//   return (
//     <div className="w-full px-6 py-8">
//       <div className="flex items-center justify-between gap-12 mb-7">
//         <div className="flex items-center gap-4">
//           <div className="w-5 h-10 bg-red-500 rounded"></div>
//           <div>
//             <div className="text-red-500 font-semibold text-base">
//               Categories
//             </div>
//             <h2 className="text-xl md:text-2xl font-bold text-black mt-1">
//               Browse By Category
//             </h2>
//           </div>
//         </div>

//         <div className="flex gap-2">
//           <button
//             onClick={prevSlide}
//             className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
//           >
//             <ChevronLeft className="w-6 h-6 text-black" />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
//           >
//             <ChevronRight className="w-6 h-6 text-black" />
//           </button>
//         </div>
//       </div>

//       {/* categories for medium and above screen sizes */}

//       <div className="hidden md:grid-cols-6 gap-0 w-full mb-5">
//         {" "}
//         {assets.categories
//           .slice(currentIndex % categorySize, currentIndex + 6)
//           .map((c) => (
//             <div
//               key={c.id}
//               className="cursor-pointer"
//               onClick={() => handleCategorySelect(c.name)}
//             >
//               {" "}
//               <CategoryCard
//                 key={c.id}
//                 category={c}
//                 isSelected={selectedCategory === c.name}
//               />{" "}
//             </div>
//           ))}
//       </div>

//       {/* Categories for mobile screens */}

//       <div className="flex gap-2 justify-between mb-6 md:hidden">
//         {assets.categories.slice(currentIndex, currentIndex + 2).map((c) => (
//           <div
//             key={c.id}
//             className="cursor-pointer"
//             onClick={() => handleCategorySelect(c.name)}
//           >
//             {" "}
//             <CategoryCard
//               key={c.id}
//               category={c}
//               isSelected={selectedCategory === c.name}
//             />{" "}
//           </div>
//         ))}
//       </div>

//       {/* products under selected category for medium and above screen sizes */}

//       {selectedCategory && (
//         <div className="hidden md:space-y-8 mt-5">
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">
//             Showing products for:{" "}
//             <span className="text-red-500">{selectedCategory}</span>
//           </h3>

//           {chunkedProducts.length > 0 ? (
//             chunkedProducts.map((row, idx) => (
//               <div
//                 key={idx}
//                 className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
//               >
//                 {row.map((p) => (
//                   <ProductCard key={p.id} product={p} />
//                 ))}
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">
//               No products found for this category.
//             </p>
//           )}
//         </div>
//       )}


//       {/* Products under a category for moblile screens */}

//       {selectedCategory && (
//         <div className="flex flex-col  md:hidden mb-6">
//           {/* Category name and navigation  */}

         
//           {chunkedProducts.length > 0 ? (
//             chunkedProducts.map((row, idx) => (
//               <div
//                 key={idx}
//                 className="grid grid-cols-2  gap-4"
//               >
//                 {row.slice(productIndex, productIndex + 1).map((p) => (
//                   <ProductCard key={p.id} product={p} />
//                 ))}
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">
//               No products found for this category.
//             </p>
//           )}
         
//         </div>
//       )}
//     </div>
//   );
// };

// export default Categories;


import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { assets } from "../assets/assets";
import CategoryCard from "./CategoryCard";
import ProductCard from "./ProductCard";

const Categories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);

    const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? assets.categories.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === assets.categories.length - 1 ? 0 : prev + 1
    );
  };

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
      <div className="flex items-center justify-between gap-12 mb-5">
        <div className="flex items-center gap-4">
          <div className="w-4 sm:w-5 h-8 sm:h-10 bg-red-500 rounded"></div>
          <div>
            <div className="text-xs sm:text-sm text-red-500 font-semibold md:text-base">
              Categories
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black mt-0.5 sm:mt-1">
              Browse By Category
            </h2>
          </div>
        </div>

        <div className="flex  gap-2">
          <button onClick={prevSlide} className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors md:hidden">
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
          <button onClick={nextSlide} className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors md:hidden">
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>

      {/* categories */}

      <div className="hidden md:grid grid-cols-1 md:grid-cols-6 gap-0 w-full mb-5">
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

             {/* Categories for mobile screens */}

     <div className="flex gap-2 justify-between mb-6 md:hidden">
         {assets.categories.slice(currentIndex, currentIndex + 2).map((c) => (
           <div
             key={c.id}
             className="cursor-pointer"
             onClick={() => handleCategorySelect(c.name)}
           >
             {" "}
             <CategoryCard
               key={c.id}
               category={c}
               isSelected={selectedCategory === c.name}
             />{" "}
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
