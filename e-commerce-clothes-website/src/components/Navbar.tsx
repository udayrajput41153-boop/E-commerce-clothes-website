import React from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { User as UserIcon, LogOut } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onHomeClick: () => void;
  onSelectCategory: (category: string) => void;
  onUserClick: () => void;
  currentUser: 'user' | 'admin' | null;
  onLogout: () => void;
}

export function Navbar({ cartCount, onCartClick, onHomeClick, onSelectCategory, onUserClick, currentUser, onLogout }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleCategoryClick = (category: string) => {
    onSelectCategory(category);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={onHomeClick}>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              MODA
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => onSelectCategory('All')} className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              All
            </button>
            <button onClick={() => onSelectCategory('Men')} className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Men
            </button>
            <button onClick={() => onSelectCategory('Women')} className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Women
            </button>
            <button onClick={() => onSelectCategory('Accessories')} className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Accessories
            </button>
            <button onClick={() => onSelectCategory('Customize')} className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors border-2 border-indigo-100 px-3 py-1 rounded-full bg-indigo-50">
              Customize
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden sm:block p-2 text-gray-500 hover:text-indigo-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {currentUser ? (
              <div className="flex items-center">
                <button 
                  onClick={onUserClick}
                  className={`p-2 transition-colors ${
                    currentUser === 'admin' 
                      ? 'text-purple-600 hover:text-purple-800 bg-purple-50 rounded-full' 
                      : 'text-indigo-600 hover:text-indigo-800 bg-indigo-50 rounded-full'
                  }`}
                  title={currentUser === 'admin' ? "Admin Panel" : "Customer Profile"}
                >
                  <UserIcon className="w-5 h-5" />
                </button>
                <button 
                  onClick={onLogout}
                  className="ml-2 p-2 text-gray-400 hover:text-red-600 transition-colors hidden sm:block"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button 
                onClick={onUserClick}
                className="p-2 text-gray-500 hover:text-indigo-600 transition-colors"
                title="Login"
              >
                <UserIcon className="w-5 h-5" />
              </button>
            )}

            <button 
              className="p-2 text-gray-500 hover:text-indigo-600 transition-colors relative"
              onClick={onCartClick}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-indigo-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <div className="md:hidden">
              <button 
                className="p-2 text-gray-500 hover:text-indigo-600"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              <button onClick={() => handleCategoryClick('All')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">All</button>
              <button onClick={() => handleCategoryClick('Men')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">Men</button>
              <button onClick={() => handleCategoryClick('Women')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">Women</button>
              <button onClick={() => handleCategoryClick('Accessories')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">Accessories</button>
              <button onClick={() => handleCategoryClick('Customize')} className="block w-full text-left px-3 py-2 text-base font-bold text-indigo-600 hover:bg-indigo-50 rounded-md">Customize</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
