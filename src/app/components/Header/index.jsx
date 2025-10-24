"use client";

import React, { useState, useEffect } from "react";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import { LiaSearchSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", path: "/", hasDropdown: false },
    {
      label: "Help for Charities",
      path: "/help-for-charities",
      hasDropdown: true,
      dropdownItems: [
        { label: "Help for Charities", path: "/help-for-charities" },
        { label: "501c3 Onboarding Guide", path: "/501c3-onboarding" },
        { label: "Pre501c3 Onboarding Guide", path: "/pre501c3-onboarding" },
        { label: "Online Impacts Onboarding Guide", path: "/online-impacts" },
        { label: "GuideStar Profile Setup Guide", path: "/guidestar-setup" },
        {
          label:
            "Understanding Your Free For Charity WordPress Website Hosting: A Layered Approach",
          path: "/Understanding-Your-Free-For-Charity-WordPress-Website-Hosting-A-Layered-Approach",
        },
        {
          label:
            "Charity Validation Guide – Ensuring Mutual Benefit Through Comprehensive Validation Processes",
          path: "/Charity-Validation-Guide-Ensuring-Mutual-Benefit-Through-Comprehensive-Validation-Processes",
        },
      ],
    },
    {
      label: "Volunteer",
      path: "/volunteer",
      hasDropdown: true,
      dropdownItems: [
        { label: "Volunteer", path: "/volunteer" },
        {
          label: "FFC Volunteer Proving Ground: Core Competencies",
          path: "/core-competencies",
        },
        {
          label: "Free For Charity (FFC) Web Developer Training Guide",
          path: "/training-guide",
        },
      ],
    },
    {
      label: "Donate",
      path: "/donate",
      hasDropdown: true,
      dropdownItems: [
        { label: "Donate", path: "/donate" },
        {
          label: "Free For Charity Endowment Fund",
          path: "/Free-For-Charity-Endowment-Fund",
        },
      ],
    },
    {
      label: "About Us",
      path: "/about",
      hasDropdown: true,
      dropdownItems: [{ label: "Contact Us", path: "/Contact-Us" }],
    },
    {
      label: "Other",
      path: "/other",
      hasDropdown: true,
      dropdownItems: [
        {
          label: "Free For Charity Domains",
          path: "/Free-For-Charity-Domains",
        },
        {
          label: "Free for Charity’s Tools for Success",
          path: "/Free-for-Charity’s-Tools-for-Success",
        },
        {
          label: "Free Charity Web Hosting",
          path: "/Free-Charity-Web-Hosting",
        },
      ],
    },
    {
      label: "FFCAdmin",
      path: "/ffcadmin",
      hasDropdown: true,
      dropdownItems: [
        {
          label: "Free For Charity (FFC) Service Delivery Stages",
          path: "/Free-For-Charity-Service-Delivery-Stages",
        },
        { label: "FFC Admin cPanel Backup", path: "/FFC-Admin-cPanel-Backup" },
      ],
    },
  ];

  const handleSearchToggle = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header
      id="header"
      className={`w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ${
        isScrolled ? "h-[55px]" : "h-[80px]"
      }`}
    >
      <div className="w-full">
        <div className="mx-auto max-w-[400px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1080px]">
          <div className="flex items-center px-2 transition-all duration-300">
            {/* Logo */}
            <div
              className={`transition-all duration-300 ${
                isScrolled ? "w-[110px]" : "w-[150px]"
              }`}
            >
              <a href="/" className="block">
                <img
                  src="https://freeforcharity.org/wp-content/uploads/2024/04/Screenshot_145.png"
                  alt="Free For Charity"
                  className={`transition-all duration-300 ${
                    isScrolled ? "h-7" : "h-11"
                  }`}
                />
              </a>
            </div>

            {/* Menu or Search (toggle full width) */}
            {!isSearchOpen ? (
              <div className="flex items-center justify-end sm:pl-[50px] md:pl-[70px] w-full">
                {/* Desktop Menu */}
                <nav className="hidden lg:block transition-all duration-300">
                  <ul className="flex items-center space-x-[1px] font-navbar font-[600]">
                    {menuItems.map((item, index) => (
                      <li key={index} className="relative group py-6">
                        <a
                          href={item.path}
                          onClick={() => setActivePath(item.path)}
                          className={`flex items-center px-3 py-2 text-[14px] transition-colors duration-200 font-navbar font-[600] ${
                            activePath === item.path
                              ? "text-blue-600"
                              : "text-gray-600 hover:text-gray-500"
                          }`}
                        >
                          {item.label}
                          {item.hasDropdown && (
                            <FiChevronDown className="ml-1 mt-[3px] h-4 w-4" />
                          )}
                        </a>

                        {item.hasDropdown && (
                          <div
                            className={`absolute left-0 ${
                              isScrolled ? "top-[82%]" : "top-[97%]"
                            } border-t-3 border-[#2EA3F2] px-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 shadow-[0_2px_5px_rgba(0,0,0,0.1)] min-w-[240px] bg-white max-h-[600px] overflow-auto scrollbar-hide`}
                          >
                            <div className="px-1 py-[20px]">
                              {item.dropdownItems.map((dropItem, dropIndex) => (
                                <a
                                  key={dropIndex}
                                  href={dropItem.path}
                                  className="block px-6 py-2 text-[14px] text-gray-700 hover:bg-[#F9F9F9] hover:text-gray-500 transition-colors duration-200 leading-[28px]"
                                >
                                  {dropItem.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Search Icon */}
                <div className="hidden lg:flex items-center">
                  <button
                    onClick={handleSearchToggle}
                    className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <LiaSearchSolid className="cursor-pointer h-5 w-5" />
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 text-gray-600 hover:text-blue-600"
                >
                  <FiMenu className="cursor-pointer h-6 w-6" />
                </button>
              </div>
            ) : (
              // Full-width Search Input
              <div className="w-full max-w-[750px] ml-auto flex items-center justify-between transition-all duration-300">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 focus:outline-none"
                  autoFocus
                />
                <button
                  onClick={handleSearchToggle}
                  className="cursor-pointer ml-2 p-2 text-gray-600"
                >
                  <RxCross2 className="cursor-pointer h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`lg:hidden absolute left-0 w-full overflow-hidden z-40 ${
              isScrolled ? "top-[53px]" : "top-[77px]"
            }`}
          >
            <div
              className={`max-w-[400px] sm:max-w-[500px] md:max-w-[700px] mx-auto px-4 sm:px-6 md:px-8 p-[5%] bg-white z-9999 
                border-t-[3px] border-[#2EA3F2] shadow-[0_2px_5px_rgba(0,0,0,0.1)] overflow-auto scrollbar-hide h-[80vh]`}
            >
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.path}
                      onClick={() => setActivePath(item.path)}
                      className={`block px-4 py-2 rounded-lg text-sm font-[600] ${
                        activePath === item.path
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {item.label}
                    </a>

                    {item.hasDropdown && (
                      <ul className="ml-4 mt-1">
                        {item.dropdownItems.map((dropItem, dropIndex) => (
                          <li key={dropIndex}>
                            <a
                              href={dropItem.path}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                            >
                              {dropItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 focus:outline-none border border-gray-200 rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
