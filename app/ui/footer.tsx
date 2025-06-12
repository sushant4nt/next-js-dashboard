import Link from 'next/link';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto px-3 sm:px-4 lg:px-8 max-w-7xl py-8 sm:py-10 lg:py-12">
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Club Info */}
          <div className="col-span-1 sm:col-span-2 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-3 sm:mb-4">GQ United CC</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
              A premier cricket club dedicated to excellence, sportsmanship, and community spirit. 
              Join us in our journey to cricket greatness.
            </p>
            <div className="flex justify-center sm:justify-start">
              <div className="flex items-center">
                <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2" />
                <span className="text-xs sm:text-sm text-gray-300">Greenford Quay, London, UK</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-blue-400 mb-3 sm:mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-1 sm:space-y-2">
              <Link href="/" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors">
                About Us
              </Link>
              <Link href="/teams" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors">
                Teams
              </Link>
              <Link href="/fixtures" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors">
                Fixtures
              </Link>
              <Link href="/sponsors" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors">
                Sponsors
              </Link>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-blue-400 mb-3 sm:mb-4">Contact Us</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center sm:justify-start">
                <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2" />
                <span className="text-xs sm:text-sm text-gray-300">+44 7552935797</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <EnvelopeIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2" />
                <span className="text-xs sm:text-sm text-gray-300">info@gqunitedcc.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-xs sm:text-sm text-gray-400 mb-3 md:mb-0">
              © 2025 GQ United Cricket Club. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <Link href="/privacy" className="text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 