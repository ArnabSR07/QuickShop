import React from "react";
import { Search } from 'lucide-react';
import { useState } from "react";
const SearchBar = () => {

  
const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Add your search logic here
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };


  return (
    <div className="flex items-center  rounded-full shadow-lg overflow-hidden w-full max-w-2xl">
       <div className="flex items-center pl-6 pr-4"> 
          <Search className="w-6 h-6 text-gray-400 " />
        </div>
       <input
          type="text"
          placeholder="Search Item"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 py-4 px-2 text-gray-700 placeholder-gray-800 focus:outline-none"
        />
      
      <button
          onClick={handleSearch}
          className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-700 transition-colors whitespace-nowrap"
        >
          Search
        </button>
    </div>

    

    
  );
};

export default SearchBar;
