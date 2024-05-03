import React, { useState } from 'react';
import logo from '../assets/Logo.svg';
import '../index.css';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav id='navbar' className="fixed top-0 w-full flex items-center justify-center p-4 gloria-hallelujah-regular text-sm z-50">
      <div className="flex items-center gap-36">
        <img src={logo} alt='Logo' />
        <h3 className="cursor-pointer hover:underline">HOME</h3> 
        <div className="relative group">
          <h3 
            className="cursor-pointer hover:underline" 
            onClick={() => setIsDropdownOpen(prevState => !prevState)}
          >
            ABOUT
          </h3> 
          <div 
            className={`absolute ${isDropdownOpen ? 'block' : 'hidden'} mt-1 p-2 bg-white border border-gray-300 rounded shadow w-64`}
          >
            <p className="text-sm ml-4">
              3D models credit: 
              <a href="https://sketchfab.com/hexabear2020" target='blank' className="text-blue-500 hover:underline">Cans</a> and 
              <a href="https://sketchfab.com/iJacques" target='blank' className="text-blue-500 hover:underline">Vending machine</a>
            </p>
          </div>
        </div>
        <h3 className="cursor-pointer hover:underline">FLAVORS</h3> 
        <h3 className="cursor-pointer hover:underline">STORE</h3> 
        <h3 className="cursor-pointer hover:underline">CONTACT</h3> 
      </div>
    </nav>
  );
}

export default Navbar;
