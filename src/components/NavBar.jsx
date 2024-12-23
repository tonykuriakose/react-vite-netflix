import React from "react";
import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-gray-800 text-white z-10">
      <div className="flex items-center space-x-6">
        <img src={logo} alt="Logo" className="h-8" />
        <ul className="flex space-x-6">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="hover:text-gray-400 cursor-pointer">TV Shows</li>
          <li className="hover:text-gray-400 cursor-pointer">Movies</li>
          <li className="hover:text-gray-400 cursor-pointer">New & Popular</li>
          <li className="hover:text-gray-400 cursor-pointer">My List</li>
          <li className="hover:text-gray-400 cursor-pointer">Browse by Languages</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        <img src={search_icon} alt="Search Icon" className="h-6 w-6 cursor-pointer" />
        <p className="text-sm hover:text-gray-400 cursor-pointer">Children</p>
        <img src={bell_icon} alt="Bell Icon" className="h-6 w-6 cursor-pointer" />
        <div className="relative flex items-center space-x-2 cursor-pointer group">
          <img src={profile_img} alt="Profile" className="h-8 w-8 rounded-full" />
          <img src={caret_icon} alt="Caret Icon" className="h-4 w-4" />

          <div className="absolute right-0 mt-10 w-48 bg-gray-700 text-white rounded-md shadow-lg hidden group-hover:block">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Account</li>
              <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Settings</li>
              <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
