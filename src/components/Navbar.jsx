import { useState, useEffect, memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaChevronDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/Images/Logo/logo.png";
import LogoBlack from "../assets/Images/Logo/logoBlack.png"

const navItems = [
  { name: "Search Properties", path: "/" },
  { name: "Services", path: "/services" },
  {
    name: "Property Maintenance",
    dropdown: ["Request Service", "Maintenance Plans"],
    path: "/property-maintenance",
  },
  { name: "Report A Repair", path: "/report-repair" },
  {
    name: "About",
    dropdown: ["Our Team", "History", "Testimonials"],
    path: "/about",
  },
  { name: "Contact Us", path: "/contact" },
];

// Hamburger Icon Component
const Hamburger = memo(({ open }) => (
  <div className="w-7 h-7 flex flex-col justify-center items-center relative cursor-pointer">
    <span
      className={`block absolute h-0.5 w-7 bg-white rounded transition-all duration-300 ${
        open ? "rotate-45 top-3.5" : "top-2"
      }`}
    />
    <span
      className={`block absolute h-0.5 w-7 bg-white rounded transition-all duration-300 ${
        open ? "opacity-0" : "top-3.5"
      }`}
    />
    <span
      className={`block absolute h-0.5 w-7 bg-white rounded transition-all duration-300 ${
        open ? "-rotate-45 top-3.5" : "top-5"
      }`}
    />
  </div>
));

// Desktop Navbar
const DesktopNav = ({
  navItems,
  isScrolled,
  setOpenDropdown,
  openDropdown,
}) => (
  <div
    className={`hidden md:flex items-center justify-between px-12 py-6 w-full ${
      isScrolled ? "bg-[#f0f0f0]" : "bg-transparent"
    }`}
  >
    <div className="flex flex-col items-start">
      {/* <span className={`text-5xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>NL</span> */}
      <img
        src={isScrolled ? LogoBlack : Logo}
        alt="Logo"
        className={`w-60 h-full'}`}
      />
    </div>

    <div className="flex-1 flex justify-center space-x-12">
      {navItems.map(({ name, dropdown, path }) => (
        <div
          key={name}
          className="relative"
          onMouseEnter={() => dropdown && setOpenDropdown(name)}
          onMouseLeave={() => dropdown && setOpenDropdown(null)}
        >
          <Link
            to={path}
            className={`relative font-medium flex items-center gap-2 cursor-pointer ${
              isScrolled ? "text-black" : "text-white"
            } 
            after:absolute after:left-0 after:-bottom-4 after:h-[3px] after:w-0 after:bg-[#3b5be4] 
            after:transition-all after:duration-300 hover:after:w-full`}
          >
            {name}
            {dropdown && <FaChevronDown className="ml-1 text-xs" />}
          </Link>

          <AnimatePresence>
            {dropdown && openDropdown === name && (
              <motion.div
                key="dropdown"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="absolute left-1/2 -translate-x-1/2 mt-4 bg-white text-[#9c9c9c] shadow-lg py-8 px-12 min-w-[260px] text-left z-40"
              >
                <ul className="space-y-4">
                  {dropdown.map((item, i) => (
                    <li
                      key={i}
                      className="font-light tracking-wide text-base hover:text-[#233366] cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>

    <button className="bg-[#3b5be4] p-4 rounded-full cursor-pointer">
      <FaSearch className="text-white text-s" />
    </button>
  </div>
);

// Mobile Navbar
const MobileNav = ({
  mobileOpen,
  setMobileOpen,
  searchOpen,
  setSearchOpen,
  mobileDropdown,
  setMobileDropdown,
  isScrolled,
}) => (
  <>
    <div
      className={`md:hidden w-full flex items-center justify-between px-4 py-4 ${
        isScrolled ? "bg-[#233366]" : "bg-transparent"
      }`}
    >
      <span className="text-white text-4xl font-bold">NL</span>
      <div className="flex items-center gap-6">
        <button onClick={() => setSearchOpen(!searchOpen)}>
          <FaSearch className="text-white text-xl" />
        </button>
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          <Hamburger open={mobileOpen} />
        </button>
      </div>
    </div>

    <AnimatePresence>
      {mobileOpen && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed inset-0 bg-[#233366] z-50 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4">
            <span className="text-white text-4xl font-bold">NL</span>
            <button onClick={() => setMobileOpen(false)}>
              <Hamburger open />
            </button>
          </div>

          {/* Nav Items */}
          <div className="flex-1 flex flex-col overflow-y-auto">
            {navItems.map(({ name, dropdown, path }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.07 }}
                className="border-b border-[#2e4170]"
              >
                <Link
                  to={path}
                  className="w-full text-left text-white font-medium text px-4 py-4 flex justify-between"
                  onClick={() =>
                    setMobileDropdown(mobileDropdown === name ? null : name)
                  }
                >
                  {name}
                  {dropdown && (
                    <FaChevronDown
                      className={`text-xs transition-transform ${
                        mobileDropdown === name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {dropdown && mobileDropdown === name && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 py-2 space-y-2"
                    >
                      {dropdown.map((d) => (
                        <li
                          key={d}
                          className="text-[#8e9bca] py-2 pl-2 text-base cursor-pointer font-semibold hover:text-white"
                          onClick={() => setMobileOpen(false)}
                        >
                          {d}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex justify-between border-t border-[#2e4170] text-white text-sm">
            <div className="flex items-center gap-2 px-4 py-3">
              <FaEnvelope /> enquiries@sw.co.uk
            </div>
            <div className="flex items-center gap-2 px-4 py-3">
              <FaPhone /> 0800 122 3050
            </div>
          </div>
          <div className="flex justify-around py-4 border-t border-[#2e4170] text-white text-2xl">
            <FaInstagram />
            <FaLinkedinIn />
            <FaTwitter />
            <FaFacebookF />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300`}>
      <DesktopNav
        navItems={navItems}
        isScrolled={isScrolled}
        setOpenDropdown={setOpenDropdown}
        openDropdown={openDropdown}
      />
      <MobileNav
        navItems={navItems}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        mobileDropdown={mobileDropdown}
        setMobileDropdown={setMobileDropdown}
        isScrolled={isScrolled}
      />
    </nav>
  );
};

export default Navbar;
