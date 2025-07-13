import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-18 flex justify-between items-center bg-white px-6 z-10 shadow-md">
      <NavLink to="/" className="ml-4 text-xl font-bold">
        Logo here
      </NavLink>

      <nav className="flex items-center gap-16 font-sans">
        <NavLink to="/dashboard" className="hover:text-cyan-500 ">
          Dashboard
        </NavLink>
        <NavLink to="/devices" className="hover:text-cyan-500">
          Devices
        </NavLink>
        <NavLink to="/analytics" className="hover:text-cyan-500">
          Analytics
        </NavLink>
        <NavLink to="/community" className="hover:text-cyan-500">
          Community
        </NavLink>
        <NavLink to="/health" className="hover:text-cyan-500">
          Health
        </NavLink>
      </nav>

      <NavLink to="/account" className="mr-4 hover:text-cyan-500">
        Account
      </NavLink>
    </header>
  );
};

export default Navbar;