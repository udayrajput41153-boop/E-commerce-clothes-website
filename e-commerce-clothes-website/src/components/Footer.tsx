import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              MODA
            </span>
            <p className="mt-4 text-gray-400 text-sm">
              Making fashion accessible to everyone. We believe in quality, sustainability, and style.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Shop</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">New Arrivals</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Men</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Women</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-base text-gray-400">&copy; 2024 MODA Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
