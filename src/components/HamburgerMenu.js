import React, { useState } from 'react';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubMenu = (menu) => setActiveMenu(activeMenu === menu ? null : menu);

  return (
    <div className="relative">
      {/* Floating Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-24 right-4 w-12 h-12 p-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl m-2 cursor-pointer duration-300 text-white rounded-full shadow-lg focus:outline-none text-2xl flex items-center justify-center transform -translate-y-1/2"
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
      >
        &#9776; {/* Hamburger icon */}
      </button>

      {/* Menu Items */}
      {isOpen && (
        <div className="menu mt-2 p-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg absolute top-20 right-4 w-48">
          <a
            href="#"
            className="block p-2 hover:bg-gray-700 rounded cursor-pointer"
            onClick={() => toggleSubMenu('home')}
          >
            Home
          </a>
          {activeMenu === 'home' && (
            <div className="ml-4 mt-2 bg-gray-700 rounded">
              <a href="/" className="block p-2 hover:bg-gray-600 rounded">Submenu Item 1</a>
              <a href="/" className="block p-2 hover:bg-gray-600 rounded">Submenu Item 2</a>
            </div>
          )}

          <a
            href="#"
            className="block p-2 hover:bg-gray-700 rounded cursor-pointer"
            onClick={() => toggleSubMenu('profile')}
          >
            Profile
          </a>
          {activeMenu === 'profile' && (
            <div className="ml-4 mt-2 bg-gray-700 rounded">
              <a href="/" className="block p-2 hover:bg-gray-600 rounded">Submenu Item 1</a>
              <a href="/" className="block p-2 hover:bg-gray-600 rounded">Submenu Item 2</a>
            </div>
          )}

          <a
            href="#"
            className="block p-2 hover:bg-gray-700 rounded cursor-pointer"
            onClick={() => toggleSubMenu('settings')}
          >
            Settings
          </a>
          {activeMenu === 'settings' && (
            <div className="ml-4 mt-2 bg-gray-700 rounded">
              <a href="/" className="block p-2 hover:bg-gray-600 rounded">Submenu Item 1</a>
              <a href="/" className="block p-2 hover:bg-gray-600 rounded">Submenu Item 2</a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
