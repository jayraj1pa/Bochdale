// NavBar.js
import React, { useState } from 'react';
import { ShoppingCartIcon, SearchIcon, UserIcon, InformationCircleIcon } from '@heroicons/react/solid';

const NavBar = ({ searchQuery, onSearchChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    onSearchChange(query);
  };

  return (
    <nav className="bg-blue-700 p-2 fixed top-0 w-full z-10 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">
          <img className='w-20' src='/navicon.png' alt="Logo" />
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          <div className="flex items-center flex-grow">
            <div className="relative text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <SearchIcon className="w-6 h-6" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="py-2 pl-10 pr-4 rounded-md focus:outline-none focus:bg-white focus:text-gray-900 hidden md:block"
                placeholder="Search"
              />
            </div>
          </div>

          <a href="#" className="text-white hover:text-gray-300 flex items-center space-x-1">
            <InformationCircleIcon className="w-6 h-6" />
            <span>About</span>
          </a>
          <a href="#" className="text-white hover:text-gray-300 flex items-center space-x-1">
            <ShoppingCartIcon className="w-8 h-8" />
            <span>Cart</span>
          </a>
          <a href="#" className="text-white hover:text-gray-300 flex items-center space-x-1">
            <UserIcon className="w-6 h-6" />
            <span>Login</span>
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <div className="relative text-gray-600 focus-within:text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <SearchIcon className="w-6 h-6" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="py-2 pl-10 pr-4 rounded-md focus:outline-none focus:bg-white focus:text-gray-900"
              placeholder="Search"
            />
          </div>

          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring focus:border-blue-300 ml-4"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-20 mb-2 left-0 right-0 bg-blue-700 p-4 space-y-2">
            <a href="#" className="block text-white mb-3 hover:text-gray-300">
              <InformationCircleIcon className="w-6 h-6" />
              <span>About</span>
            </a>
            <a href="#" className="block text-white mb-3 hover:text-gray-300">
              <ShoppingCartIcon className="w-6 h-6 " />
              <span>Cart</span>
            </a>
            <a href="#" className="block text-white mb-3 hover:text-gray-300">
              <UserIcon className="w-6 h-6" />
              <span>Login</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
