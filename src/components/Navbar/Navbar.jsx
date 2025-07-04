import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">My React App</div>
        <div className="relative group">
          <button className="text-white hover:text-gray-300 focus:outline-none">
            ReactUseQueryFeatures
            <svg className="w-4 h-4 inline-block ml-1 -mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Feature 1</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Feature 2</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Feature 3</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;