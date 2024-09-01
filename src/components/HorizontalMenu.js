import React from 'react';

function HorizontalMenu() {
  return (
    <div className="horizontal-menu p-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer duration-300">
      <div className="container mx-auto flex justify-end space-x-8">
        <a className="hover:text-gray-400">Home</a>
        <a className="hover:text-gray-400">Profile</a>
        <a className="hover:text-gray-400">Settings</a>
        <a className="hover:text-gray-400">Logout</a>
      </div>
    </div>
  );
}

export default HorizontalMenu;
