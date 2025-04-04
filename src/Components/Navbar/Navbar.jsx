import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#0D1B2A] py-4 fixed left-0 top-0 right-0 z-10">
      <div className="flex items-center w-[90%] mx-auto justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center text-yellow-500 text-4xl font-bold gap-2">
          <i className="fa-solid fa-utensils"></i> Restoran
        </NavLink>

        {/* Hamburger Menu Button */}
        <button 
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fa-solid ${isOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        {/* Navigation Links */}
        <div
          className={`md:flex items-center space-x-6 text-white text-lg ${
            isOpen
              ? "block absolute top-16 left-0 w-full bg-[#0D1B2A] py-5 text-center"
              : "hidden"
          }`}
        >
          <NavLink to="/" className="block py-2 text-sm" onClick={() => setIsOpen(false)}>HOME</NavLink>
          <NavLink to="/about" className="block py-2 text-sm hover:text-yellow-500" onClick={() => setIsOpen(false)}>ABOUT</NavLink>
          <NavLink to="/service" className="block py-2 text-sm hover:text-yellow-500" onClick={() => setIsOpen(false)}>SERVICE</NavLink>
          <NavLink to="/menu" className="block py-2 text-sm hover:text-yellow-500" onClick={() => setIsOpen(false)}>MENU</NavLink>

          {/* Pages Dropdown */}
          <div className="relative inline-block text-left">
            <button 
              className="text-sm text-white flex items-center gap-1"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              PAGES <i className="fa-solid fa-caret-down"></i>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-[#1B263B] text-white shadow-lg rounded-lg">
                <NavLink to="/booking" className="block px-4 py-2 hover:bg-yellow-500" onClick={() => setIsDropdownOpen(false)}>
                  BOOKING
                </NavLink>
                <NavLink to="/ourteam" className="block px-4 py-2 hover:bg-yellow-500" onClick={() => setIsDropdownOpen(false)}>
                  OUR TEAM
                </NavLink>
                <NavLink to="/testimonial" className="block px-4 py-2 hover:bg-yellow-500" onClick={() => setIsDropdownOpen(false)}>
                  TESTIMONIAL
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/contact" className="block py-2 text-sm hover:text-yellow-500" onClick={() => setIsOpen(false)}>CONTACT</NavLink>
          <NavLink to="/booking" className="block md:hidden text-sm bg-yellow-500 text-white px-5 py-2 font-semibold hover:bg-yellow-600 mx-auto w-fit">
            BOOK A TABLE
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;















// import React from 'react'
// import { NavLink } from 'react-router-dom'


// const Navbar = () => {
//   return (
//    <>
   

// <nav class="bg-sky-950 border-gray-200 dark:bg-gray-900">
//   <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//     <NavLink to={'./'} class="flex items-center space-x-3 text-2xl gap-3 text-yellow-600 rtl:space-x-reverse">
//     <i class="fa-solid fa-utensils text-yellow-600"></i> Restoran

//     </NavLink>
//     <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
//         <span class="sr-only">Open main menu</span>
//         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//         </svg>
//     </button>
//     <div class="hidden w-full md:block md:w-auto" id="navbar-default">
//       <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
//         <li>
//           <NavLink href="#" class="block py-2 px-3 text-yellow-600 bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</NavLink>
//         </li>
//         <li>
//           <NavLink href="#" class="block py-2 px-3 text-white rounded-sm  md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</NavLink>
//         </li>
//         <li>
//           <NavLink href="#" class="block py-2 px-3 text-white rounded-sm  md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</NavLink>
//         </li>
//         <li>
//           <NavLink href="#" class="block py-2 px-3 text-white rounded-sm md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</NavLink>
//         </li>
//         <li>
//           <NavLink href="#" class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</NavLink>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>

   
   
   
//    </>
//   )
// }

// export default Navbar
