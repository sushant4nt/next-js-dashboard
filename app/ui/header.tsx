'use client';

import Link from 'next/link';
import GQUnitedLogo from '@/app/ui/acme-logo';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-blue-600 shadow-lg">
      <div className="mx-auto px-3 sm:px-4 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <GQUnitedLogo />
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            <Link 
              href="/" 
              className="text-white hover:text-blue-200 transition-colors duration-200 font-medium text-sm lg:text-base"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-blue-200 transition-colors duration-200 font-medium text-sm lg:text-base"
            >
              About Us
            </Link>
            <Link 
              href="/teams" 
              className="text-white hover:text-blue-200 transition-colors duration-200 font-medium text-sm lg:text-base"
            >
              Teams
            </Link>
            <Link 
              href="/fixtures" 
              className="text-white hover:text-blue-200 transition-colors duration-200 font-medium text-sm lg:text-base"
            >
              Fixtures
            </Link>
            <Link 
              href="/sponsors" 
              className="text-white hover:text-blue-200 transition-colors duration-200 font-medium text-sm lg:text-base"
            >
              Sponsors
            </Link>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Link
              href="/login"
              className="bg-white text-blue-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md font-medium hover:bg-blue-50 transition-colors duration-200 text-sm sm:text-base"
            >
              Login
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-white hover:text-blue-200 hover:bg-blue-700 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 pb-3 border-t border-blue-500 mt-3 pt-3' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="flex flex-col space-y-1">
            <Link 
              href="/" 
              onClick={closeMobileMenu}
              className="text-white hover:text-blue-200 hover:bg-blue-700 transition-colors duration-200 font-medium py-3 px-3 rounded text-sm"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={closeMobileMenu}
              className="text-white hover:text-blue-200 hover:bg-blue-700 transition-colors duration-200 font-medium py-3 px-3 rounded text-sm"
            >
              About Us
            </Link>
            <Link 
              href="/teams" 
              onClick={closeMobileMenu}
              className="text-white hover:text-blue-200 hover:bg-blue-700 transition-colors duration-200 font-medium py-3 px-3 rounded text-sm"
            >
              Teams
            </Link>
            <Link 
              href="/fixtures" 
              onClick={closeMobileMenu}
              className="text-white hover:text-blue-200 hover:bg-blue-700 transition-colors duration-200 font-medium py-3 px-3 rounded text-sm"
            >
              Fixtures
            </Link>
            <Link 
              href="/sponsors" 
              onClick={closeMobileMenu}
              className="text-white hover:text-blue-200 hover:bg-blue-700 transition-colors duration-200 font-medium py-3 px-3 rounded text-sm"
            >
              Sponsors
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 