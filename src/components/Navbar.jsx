import React from 'react';
import logo from '../assets/Logo.svg';
import '../index.css';
function Navbar() {

  return (
    <nav id='navbar' className="fixed top-0 w-full flex items-center justify-center p-4 gloria-hallelujah-regular text-sm">
      <div className="flex items-center gap-36">
        <img src={logo} alt='Logo' />
        <h3 className="cursor-pointer hover:underline">HOME</h3> 
        <h3 className="cursor-pointer hover:underline">ABOUT</h3> 
        <h3 className="cursor-pointer hover:underline">FLAVORS</h3> 
        <h3 className="cursor-pointer hover:underline">STORE</h3> 
        <h3 className="cursor-pointer hover:underline">CONTACT</h3> 
      </div>
    </nav>
  );


}

export default Navbar;
