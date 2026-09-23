import React, { useState, useEffect } from "react";
import { Phone, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { assets } from "../data/assets";
import { ActivePage } from "../types";

interface HeaderProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  onOpenQuote: () => void;
  onSelectVehicle?: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  setActivePage,
  onOpenQuote,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [vanHireDropdown, setVanHireDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    setVanHireDropdown(false);
    setAboutDropdown(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-200 bg-white ${
        isScrolled ? "shadow-md py-2.5" : "border-b border-gray-100 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 cursor-pointer focus:outline-none text-left"
          >
            <img
              src={assets.logo}
              alt="XPDX Rentals - Van Hire Sydney"
              className="h-10 sm:h-11 w-auto object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13.5px] font-bold tracking-wider text-gray-800">
            <button
              id="nav-fleet"
              onClick={() => handleNavClick("fleet")}
              className={`transition-colors uppercase hover:text-[#ff5500] ${
                activePage === "fleet" ? "text-[#ff5500]" : ""
              }`}
            >
              OUR FLEET
            </button>

            {/* Van Hire Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setVanHireDropdown(true)}
              onMouseLeave={() => setVanHireDropdown(false)}
            >
              <button
                id="nav-van-hire"
                onClick={() => handleNavClick("van-hire")}
                className={`flex items-center gap-1 transition-colors uppercase hover:text-[#ff5500] ${
                  activePage === "van-hire" || activePage === "use-cases"
                    ? "text-[#ff5500]"
                    : ""
                }`}
              >
                VAN HIRE
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {vanHireDropdown && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => handleNavClick("use-cases")}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff5500] font-medium transition-colors"
                  >
                    Use Cases
                  </button>
                  <button
                    onClick={() => handleNavClick("van-hire")}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff5500] font-medium transition-colors"
                  >
                    Van Hire Options
                  </button>
                  <button
                    onClick={() => handleNavClick("use-cases")}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff5500] font-medium transition-colors"
                  >
                    Industries We Serve
                  </button>
                  <button
                    onClick={() => handleNavClick("home")}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff5500] font-medium transition-colors"
                  >
                    FAQs
                  </button>
                </div>
              )}
            </div>

            <button
              id="nav-business-hire"
              onClick={() => handleNavClick("business-hire")}
              className={`transition-colors uppercase hover:text-[#ff5500] ${
                activePage === "business-hire" ? "text-[#ff5500]" : ""
              }`}
            >
              BUSINESS HIRE
            </button>

            <button
              id="nav-service-area"
              onClick={() => handleNavClick("service-area")}
              className={`transition-colors uppercase hover:text-[#ff5500] ${
                activePage === "service-area" ? "text-[#ff5500]" : ""
              }`}
            >
              SERVICE AREA
            </button>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <button
                id="nav-about"
                onClick={() => handleNavClick("about")}
                className={`flex items-center gap-1 transition-colors uppercase hover:text-[#ff5500] ${
                  activePage === "about" ? "text-[#ff5500]" : ""
                }`}
              >
                ABOUT
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {aboutDropdown && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => handleNavClick("about")}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff5500] font-medium transition-colors"
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => handleNavClick("about")}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff5500] font-medium transition-colors"
                  >
                    Our Mission
                  </button>
                  <button
                    onClick={() => handleNavClick("about")}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff5500] font-medium transition-colors"
                  >
                    Why Choose Us
                  </button>
                  <button
                    onClick={() => handleNavClick("home")}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff5500] font-medium transition-colors"
                  >
                    FAQs
                  </button>
                </div>
              )}
            </div>

            <button
              id="nav-blog"
              onClick={() => handleNavClick("about")}
              className="transition-colors uppercase hover:text-[#ff5500]"
            >
              BLOG
            </button>

            <button
              id="nav-contact"
              onClick={() => handleNavClick("contact")}
              className={`transition-colors uppercase hover:text-[#ff5500] ${
                activePage === "contact" ? "text-[#ff5500]" : ""
              }`}
            >
              CONTACT
            </button>
          </nav>

          {/* Right Header: Phone & Orange CTA */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              id="header-phone-link"
              href="tel:0433418566"
              className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-[#ff5500] transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-[#ff5500]">
                <Phone className="w-4 h-4 fill-current" />
              </div>
              <span className="hidden sm:inline font-mono tracking-tight text-[15px]">
                0433 418 566
              </span>
            </a>

            <button
              id="header-quote-btn"
              onClick={onOpenQuote}
              className="bg-[#ff5500] hover:bg-[#e04a00] text-white font-bold text-sm sm:text-[14.5px] px-5 sm:px-6 py-2.5 rounded-md shadow-sm hover:shadow transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap"
            >
              <span>Get a quote</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3 font-semibold text-sm">
            <button
              onClick={() => handleNavClick("fleet")}
              className="text-left py-2 text-gray-800 border-b border-gray-50 flex items-center justify-between"
            >
              <span>OUR FLEET</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </button>
            <button
              onClick={() => handleNavClick("use-cases")}
              className="text-left py-2 text-gray-800 border-b border-gray-50 flex items-center justify-between"
            >
              <span>USE CASES</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </button>
            <button
              onClick={() => handleNavClick("van-hire")}
              className="text-left py-2 text-gray-800 border-b border-gray-50 flex items-center justify-between"
            >
              <span>VAN HIRE OPTIONS</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </button>
            <button
              onClick={() => handleNavClick("business-hire")}
              className="text-left py-2 text-gray-800 border-b border-gray-50 flex items-center justify-between"
            >
              <span>BUSINESS HIRE</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </button>
            <button
              onClick={() => handleNavClick("service-area")}
              className="text-left py-2 text-gray-800 border-b border-gray-50 flex items-center justify-between"
            >
              <span>SERVICE AREA (CONDELL PARK)</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="text-left py-2 text-gray-800 border-b border-gray-50 flex items-center justify-between"
            >
              <span>ABOUT US</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="text-left py-2 text-gray-800 border-b border-gray-50 flex items-center justify-between"
            >
              <span>CONTACT</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </button>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:0433418566"
                className="flex items-center justify-center gap-2 py-3 bg-gray-100 rounded-lg text-gray-900 font-bold"
              >
                <Phone className="w-4 h-4 text-[#ff5500]" />
                Call 0433 418 566
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 bg-[#ff5500] text-white rounded-lg font-bold text-center"
              >
                Get a quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
