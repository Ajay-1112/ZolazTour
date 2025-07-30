'use client';

import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="absolute top-7 left-0 w-full z-50 bg-transparent text-white px-12 py-4 ">
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold ">Z o l a z</div>
        <div className="hidden md:flex gap-6 items-center">
          <div className="relative group">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:text-emerald-400"
            >
              <p>Destinations</p>
              <ChevronDown size={18} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full mt-2 bg-white text-black shadow-md rounded-md w-44 py-2">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Bahamas</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Barbados</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">St. Lucia</a>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-emerald-400">About</a>
          <a href="#" className="hover:text-emerald-400">Blog</a>
          <a href="#" className="hover:text-emerald-400">Contact</a>

          <button className="border border-white px-4 py-1 rounded hover:bg-white hover:text-black transition">
            Sign In
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 px-4 text-white bg-black/80 py-6 rounded-lg">
          <div className="space-y-2">
            <details>
              <summary className="cursor-pointer text-lg">Destinations</summary>
              <div className="pl-4 mt-1 space-y-1">
                <a href="#" className="block hover:text-emerald-400">Bahamas</a>
                <a href="#" className="block hover:text-emerald-400">Barbados</a>
                <a href="#" className="block hover:text-emerald-400">St. Lucia</a>
              </div>
            </details>
            <a href="#" className="block text-lg hover:text-emerald-400">About</a>
            <a href="#" className="block text-lg hover:text-emerald-400">Blog</a>
            <a href="#" className="block text-lg hover:text-emerald-400">Contact</a>
          </div>

          <button className="w-full border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}
