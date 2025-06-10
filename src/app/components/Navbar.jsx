// src/components/Navbar.js
"use client";
import { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiChevronRight, FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // For scrolled state (shadow and background)
      setIsScrolled(currentScrollY > 10);
      
      // For hide/show on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      
      // Close dropdowns when scrolling
      if (Math.abs(currentScrollY - lastScrollY) > 10) {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (submenu) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  const closeAllMenus = () => {
    setActiveDropdown(null);
    setActiveSubmenu(null);
    setMobileMenuOpen(false);
  };

  const PersonalInsuranceItems = [
    { label: "Home & Contents", href: "/home&content" },
    { label: "Private Vehicle", href: "/PrivateVehicle" },
    { label: "Pleasure Hull", href: "/pleasurehull" },
    { label: "Travel Insurance", href: "/personal/travel-insurance" },
  ];

  const businessInsuranceItems = [
    { label: "Business Interruption", href: "/businessinterruption" },
    { label: "Corporate Travel", href: "/corporatetravel" },
    { label: "Professional Indemnity", href: "/professionalindemnity" },
    { label: "Cyber Liability", href: "/cyberliablility" },
    { label: "Heavy/Fleet Motor", href: "/heavyfleetmotor" },
    { label: "General Liability", href: "/generalliability" },
    { label: "Management Liability", href: "/managementliability" },
    { label: "Material Damage", href: "/materialdamage" },
  ];

  const SpecailistInusrance = [
    { label: "Body Corporate", href: "/bodycorporate" },
    { label: "Industrial Property", href: "/industrialproperty" },
  ];

  const importantInfoItems = [
    { label: "About Us", href: "/about" },
    { label: "Product Disclosure Statements", href: "/productdisclosurestatements" },
    { label: "Privacy Policy", href: "/privacypolicy" },
    { label: "Terms of Business", href: "/termsofbusiness" },
    { label: "Our Partners", href: "/our-partners" },
    { label: "Complaint Process", href: "/complaint-process" },
  ];

  return (
    <nav 
      ref={navbarRef}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-white backdrop-blur-sm"} ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ transition: "transform 0.3s ease-in-out" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center" onClick={closeAllMenus}>
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={200}
              height={60}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className="relative text-gray-800 hover:text-emerald-600 transition-colors duration-300 font-medium text-[15px] group"
              onClick={closeAllMenus}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Insurance Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("insurance")}
                className={`flex items-center text-gray-800 hover:text-emerald-600 transition-colors duration-300 font-medium text-[15px] group ${activeDropdown === "insurance" ? "text-emerald-600" : ""}`}
              >
                Insurance Products
                <FiChevronDown className={`ml-1.5 transition-transform duration-200 ${activeDropdown === "insurance" ? "rotate-180 text-emerald-600" : "text-gray-500 group-hover:text-emerald-600"}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </button>

              {activeDropdown === "insurance" && (
                <div className="absolute bg-white top-full left-0 shadow-xl rounded-lg py-3 px-1 w-64 z-50 space-y-1 border border-gray-100 animate-fadeIn mt-1">
                  <div className="relative">
                    <div
                      onClick={() => toggleSubmenu("Personal")}
                      className="flex justify-between items-center px-4 py-2.5 hover:bg-emerald-50 rounded-lg cursor-pointer transition-all duration-200 group"
                    >
                      <span className="font-medium text-gray-800 group-hover:text-emerald-600">Personal Insurance</span>
                      <FiChevronRight className={`ml-2 transition-transform duration-200 ${activeSubmenu === "Personal" ? "rotate-90 text-emerald-600" : "text-gray-500 group-hover:text-emerald-600"}`} />
                    </div>
                    {activeSubmenu === "Personal" && (
                      <div className="absolute left-full top-0 bg-white p-2 w-64 shadow-lg rounded-lg border border-gray-100 z-50 animate-fadeIn">
                        {PersonalInsuranceItems.map((item) => (
                          <Link 
                            key={item.label} 
                            href={item.href} 
                            className="block px-4 py-2.5 hover:bg-emerald-50 rounded-lg transition-all duration-200 text-gray-700 hover:text-emerald-600 hover:pl-5 text-sm"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Business Insurance Submenu */}
                  <div className="relative">
                    <div
                      onClick={() => toggleSubmenu("business")}
                      className="flex justify-between items-center px-4 py-2.5 hover:bg-emerald-50 rounded-lg cursor-pointer transition-all duration-200 group"
                    >
                      <span className="font-medium text-gray-800 group-hover:text-emerald-600">Business Insurance</span>
                      <FiChevronRight className={`ml-2 transition-transform duration-200 ${activeSubmenu === "business" ? "rotate-90 text-emerald-600" : "text-gray-500 group-hover:text-emerald-600"}`} />
                    </div>
                    {activeSubmenu === "business" && (
                      <div className="absolute left-full top-0 bg-white p-2 w-64 shadow-lg rounded-lg border border-gray-100 z-50 animate-fadeIn">
                        {businessInsuranceItems.map((item) => (
                          <Link 
                            key={item.label} 
                            href={item.href} 
                            className="block px-4 py-2.5 hover:bg-emerald-50 rounded-lg transition-all duration-200 text-gray-700 hover:text-emerald-600 hover:pl-5 text-sm"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Specialist Insurance Submenu */}
                  <div className="relative">
                    <div
                      onClick={() => toggleSubmenu("specialist")}
                      className="flex justify-between items-center px-4 py-2.5 hover:bg-emerald-50 rounded-lg cursor-pointer transition-all duration-200 group"
                    >
                      <span className="font-medium text-gray-800 group-hover:text-emerald-600">Specialist Insurance</span>
                      <FiChevronRight className={`ml-2 transition-transform duration-200 ${activeSubmenu === "specialist" ? "rotate-90 text-emerald-600" : "text-gray-500 group-hover:text-emerald-600"}`} />
                    </div>
                    {activeSubmenu === "specialist" && (
                      <div className="absolute left-full top-0 bg-white p-2 w-64 shadow-lg rounded-lg border border-gray-100 z-50 animate-fadeIn">
                        {SpecailistInusrance.map((item) => (
                          <Link 
                            key={item.label} 
                            href={item.href} 
                            className="block px-4 py-2.5 hover:bg-emerald-50 rounded-lg transition-all duration-200 text-gray-700 hover:text-emerald-600 hover:pl-5 text-sm"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Rural Insurance */}
                  <Link 
                    href="/rural" 
                    className="block px-4 py-2.5 hover:bg-emerald-50 rounded-lg transition-all duration-200 text-gray-700 hover:text-emerald-600 hover:pl-5"
                  >
                    Rural Insurance
                  </Link>
                </div>
              )}
            </div>

            {/* Important Information Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("info")}
                className={`flex items-center text-gray-800 hover:text-emerald-600 transition-colors duration-300 font-medium text-[15px] group ${activeDropdown === "info" ? "text-emerald-600" : ""}`}
              >
                Important Information
                <FiChevronDown className={`ml-1.5 transition-transform duration-200 ${activeDropdown === "info" ? "rotate-180 text-emerald-600" : "text-gray-500 group-hover:text-emerald-600"}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </button>

              {activeDropdown === "info" && (
                <div className="absolute bg-white top-full left-0 shadow-xl rounded-lg py-3 px-1 w-64 z-50 border border-gray-100 animate-fadeIn mt-1">
                  {importantInfoItems.map((item) => (
                    <Link 
                      key={item.label} 
                      href={item.href} 
                      className="block px-4 py-2.5 hover:bg-emerald-50 rounded-lg transition-all duration-200 text-gray-700 hover:text-emerald-600 hover:pl-5 text-sm"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/claim" 
              className="relative text-gray-800 hover:text-emerald-600 transition-colors duration-300 font-medium text-[15px] group"
              onClick={closeAllMenus}
            >
              Claims
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/resources" 
              className="relative text-gray-800 hover:text-emerald-600 transition-colors duration-300 font-medium text-[15px] group"
              onClick={closeAllMenus}
            >
              Resources
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link href="/contact">
              <button 
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-5 py-2.5 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-[15px]"
                onClick={closeAllMenus}
              >
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 focus:outline-none transition-colors duration-300 p-2 -mr-2"
            >
              {mobileMenuOpen ? (
                <FiX className="h-7 w-7" />
              ) : (
                <FiMenu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl animate-slideDown">
          <div className="px-5 pt-2 pb-6 space-y-1">
            <Link 
              href="/" 
              className="block px-5 py-3 text-gray-800 hover:bg-emerald-50 rounded-lg transition-all duration-300 font-medium hover:pl-6 text-[15px]"
              onClick={closeAllMenus}
            >
              Home
            </Link>

            {/* Insurance Products Mobile */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("insurance-mobile")}
                className="flex justify-between items-center w-full px-5 py-3 text-gray-800 hover:bg-emerald-50 rounded-lg transition-all duration-300 font-medium hover:pl-6 text-[15px]"
              >
                <span>Insurance Products</span>
                <FiChevronDown className={`ml-1 transition-transform duration-200 ${activeDropdown === "insurance-mobile" ? "rotate-180 text-emerald-600" : "text-gray-500"}`} />
              </button>

              {activeDropdown === "insurance-mobile" && (
                <div className="pl-6 mt-1 space-y-1 animate-fadeIn">
                  {/* Personal Insurance */}
                  <div className="relative">
                    <button
                      onClick={() => toggleSubmenu("Personal-mobile")}
                      className="flex justify-between items-center w-full px-5 py-2.5 text-gray-700 hover:bg-emerald-50 rounded-lg transition-all duration-300 hover:pl-6 text-sm"
                    >
                      <span>Personal Insurance</span>
                      <FiChevronRight className={`ml-1 transition-transform duration-200 ${activeSubmenu === "Personal-mobile" ? "rotate-90 text-emerald-600" : "text-gray-500"}`} />
                    </button>
                    {activeSubmenu === "Personal-mobile" && (
                      <div className="pl-6 mt-1 space-y-1 animate-fadeIn">
                        {PersonalInsuranceItems.map((item) => (
                          <Link 
                            key={item.label} 
                            href={item.href} 
                            className="block px-5 py-2.5 text-gray-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 hover:pl-6 text-sm"
                            onClick={closeAllMenus}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Business Insurance */}
                  <div className="relative">
                    <button
                      onClick={() => toggleSubmenu("business-mobile")}
                      className="flex justify-between items-center w-full px-5 py-2.5 text-gray-700 hover:bg-emerald-50 rounded-lg transition-all duration-300 hover:pl-6 text-sm"
                    >
                      <span>Business Insurance</span>
                      <FiChevronRight className={`ml-1 transition-transform duration-200 ${activeSubmenu === "business-mobile" ? "rotate-90 text-emerald-600" : "text-gray-500"}`} />
                    </button>
                    {activeSubmenu === "business-mobile" && (
                      <div className="pl-6 mt-1 space-y-1 animate-fadeIn">
                        {businessInsuranceItems.map((item) => (
                          <Link 
                            key={item.label} 
                            href={item.href} 
                            className="block px-5 py-2.5 text-gray-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 hover:pl-6 text-sm"
                            onClick={closeAllMenus}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Specialist Insurance */}
                  <div className="relative">
                    <button
                      onClick={() => toggleSubmenu("specialist-mobile")}
                      className="flex justify-between items-center w-full px-5 py-2.5 text-gray-700 hover:bg-emerald-50 rounded-lg transition-all duration-300 hover:pl-6 text-sm"
                    >
                      <span>Specialist Insurance</span>
                      <FiChevronRight className={`ml-1 transition-transform duration-200 ${activeSubmenu === "specialist-mobile" ? "rotate-90 text-emerald-600" : "text-gray-500"}`} />
                    </button>
                    {activeSubmenu === "specialist-mobile" && (
                      <div className="pl-6 mt-1 space-y-1 animate-fadeIn">
                        {SpecailistInusrance.map((item) => (
                          <Link 
                            key={item.label} 
                            href={item.href} 
                            className="block px-5 py-2.5 text-gray-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 hover:pl-6 text-sm"
                            onClick={closeAllMenus}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Rural Insurance */}
                  <Link 
                    href="/rural" 
                    className="block px-5 py-2.5 text-gray-700 hover:bg-emerald-50 rounded-lg transition-all duration-300 hover:pl-6 text-sm"
                    onClick={closeAllMenus}
                  >
                    Rural Insurance
                  </Link>
                </div>
              )}
            </div>

            {/* Important Information Mobile */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("info-mobile")}
                className="flex justify-between items-center w-full px-5 py-3 text-gray-800 hover:bg-emerald-50 rounded-lg transition-all duration-300 font-medium hover:pl-6 text-[15px]"
              >
                <span>Important Information</span>
                <FiChevronDown className={`ml-1 transition-transform duration-200 ${activeDropdown === "info-mobile" ? "rotate-180 text-emerald-600" : "text-gray-500"}`} />
              </button>

              {activeDropdown === "info-mobile" && (
                <div className="pl-6 mt-1 space-y-1 animate-fadeIn">
                  {importantInfoItems.map((item) => (
                    <Link 
                      key={item.label} 
                      href={item.href} 
                      className="block px-5 py-2.5 text-gray-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 hover:pl-6 text-sm"
                      onClick={closeAllMenus}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/claim" 
              className="block px-5 py-3 text-gray-800 hover:bg-emerald-50 rounded-lg transition-all duration-300 font-medium hover:pl-6 text-[15px]"
              onClick={closeAllMenus}
            >
              Claims
            </Link>
            <Link 
              href="/resources" 
              className="block px-5 py-3 text-gray-800 hover:bg-emerald-50 rounded-lg transition-all duration-300 font-medium hover:pl-6 text-[15px]"
              onClick={closeAllMenus}
            >
              Resources
            </Link>

            <Link href="/contact">
              <button 
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-5 py-3 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg mt-2 text-[15px]"
                onClick={closeAllMenus}
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}