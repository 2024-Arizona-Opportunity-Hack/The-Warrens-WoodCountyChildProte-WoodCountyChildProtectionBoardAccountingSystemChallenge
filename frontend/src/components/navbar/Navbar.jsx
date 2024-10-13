import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from '@headlessui/react';

import sun from "../../imgs/sun.png"

import "./nav.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 inset-x-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo and Text */}
            <div className="flex items-center space-x-4">
              {/* Logo Image */}
              <img
                src={sun}
                alt="Accounting app logo"
                className="h-10 w-10"
              />
              <Link to="/" className="text-2xl font-bold text-gray-800">
                Accounting App
              </Link>
            </div>

            {/* Wrapper for the Buttons to align them to the right */}
            <div className="hidden sm:flex items-center space-x-4 ml-auto">
              {/* Buttons next to Logo */}
              <Button
                as={Link}
                to="/fundAccounting"
                className="button-styling"
              >
                Fund Accounting
              </Button>
              <Button
                as={Link}
                to="/grantTracking"
                className="button-styling"
              >
                Grant Tracking
              </Button>

              {/* Contact Button */}
              <Button
                as={Link}
                to="/fileUpload"
                className="contact-button-styling"
              >
                Upload File
              </Button>
            </div>

            {/* Hamburger for smaller screens */}
            <div className="sm:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:bg-gray-200 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Dropdown Menu for small screens */}
        {isOpen && (
          <div className="sm:hidden bg-white shadow-md">
            <div className="space-y-1 pt-2 pb-4">
              <Link to="/" className="block text-gray-500 hover:text-gray-700 px-3 py-2 text-base font-medium">
                Home
              </Link>
              <Link to="/about" className="block text-gray-500 hover:text-gray-700 px-3 py-2 text-base font-medium">
                About
              </Link>
              <Link to="/services" className="block text-gray-500 hover:text-gray-700 px-3 py-2 text-base font-medium">
                Services
              </Link>
              <Link to="/partners" className="block text-gray-500 hover:text-gray-700 px-3 py-2 text-base font-medium">
                Partners
              </Link>
              <Link to="/contact" className="block text-gray-500 hover:text-gray-700 px-3 py-2 text-base font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
      <div className="pt-16">
        {/* Your page content goes here */}
      </div>
    </>
  );
}
