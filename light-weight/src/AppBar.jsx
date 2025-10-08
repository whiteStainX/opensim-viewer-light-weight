
import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
  FaUser,
  FaSignOutAlt,
  FaTh,
  FaInfoCircle,
  FaDesktop,
  FaCompress,
} from 'react-icons/fa';

const AppBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/">
              <img
                className="h-8 w-auto"
                src={isDarkMode ? '/logo-dark.svg' : '/logo.svg'}
                alt="Logo"
              />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/viewer"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              <FaDesktop className="inline-block mr-2" />
              Viewer
            </a>
            <a
              href="/models"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              <FaTh className="inline-block mr-2" />
              Models
            </a>
            <button
              onClick={toggleDarkMode}
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
            <a
              href="/about"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              <FaInfoCircle className="inline-block mr-2" />
              About
            </a>
            <a
              href={isLoggedIn ? '/log_out' : '/log_in'}
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              {isLoggedIn ? (
                <>
                  <FaSignOutAlt className="inline-block mr-2" />
                  Logout
                </>
              ) : (
                <>
                  <FaUser className="inline-block mr-2" />
                  Login
                </>
              )}
            </a>
            <button
              onClick={toggleFullScreen}
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              {isFullScreen ? <FaCompress /> : <FaDesktop />}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/viewer"
            className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            <FaDesktop className="inline-block mr-2" />
            Viewer
          </a>
          <a
            href="/models"
            className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            <FaTh className="inline-block mr-2" />
            Models
          </a>
          <button
            onClick={toggleDarkMode}
            className="w-full text-left hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            {isDarkMode ? (
              <>
                <FaSun className="inline-block mr-2" />
                Light Mode
              </>
            ) : (
              <>
                <FaMoon className="inline-block mr-2" />
                Dark Mode
              </>
            )}
          </button>
          <a
            href="/about"
            className="hover:bg-ray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            <FaInfoCircle className="inline-block mr-2" />
            About
          </a>
          <a
            href={isLoggedIn ? '/log_out' : '/log_in'}
            className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            {isLoggedIn ? (
              <>
                <FaSignOutAlt className="inline-block mr-2" />
                Logout
              </>
            ) : (
              <>
                <FaUser className="inline-block mr-2" />
                Login
              </>
            )}
          </a>
          <button
            onClick={toggleFullScreen}
            className="w-full text-left hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            {isFullScreen ? (
              <>
                <FaCompress className="inline-block mr-2" />
                Exit Fullscreen
              </>
            ) : (
              <>
                <FaDesktop className="inline-block mr-2" />
                Enter Fullscreen
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;

