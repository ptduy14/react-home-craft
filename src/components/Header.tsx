
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Demo Banner */}
      <div className="bg-black text-white text-center py-2 text-sm">
        This is a demo for Foodservice Australia event - not a live environment. Launching July 2025.
      </div>
      
      {/* Main Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">3143</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                INNER CIRCLE
              </a>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
                  EXCLUSIVE ARMADALE
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {/* Dropdown menu can be added here later */}
              </div>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                NEIGHBOURHOOD NEWS
              </a>
              <a href="#" className="bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition-colors">
                MEMBERS
              </a>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  INNER CIRCLE
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  EXCLUSIVE ARMADALE
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                  NEIGHBOURHOOD NEWS
                </a>
                <a href="#" className="bg-gray-900 text-white px-4 py-2 text-center hover:bg-gray-800 transition-colors">
                  MEMBERS
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
