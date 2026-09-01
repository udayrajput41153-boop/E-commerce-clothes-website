import React from 'react';
import { X, User, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (role: 'user' | 'admin') => void;
}

export function AuthModal({ isOpen, onClose, onLogin }: AuthModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4 text-center">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">Sign In</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => onLogin('user')}
              className="w-full flex items-center p-4 border-2 border-gray-100 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all group"
            >
              <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-indigo-100 transition-colors">
                <User className="w-6 h-6 text-gray-600 group-hover:text-indigo-600" />
              </div>
              <div className="ml-4 text-left">
                <p className="font-semibold text-gray-900">Customer Login</p>
                <p className="text-sm text-gray-500">Access your orders and profile</p>
              </div>
            </button>

            <button
              onClick={() => onLogin('admin')}
              className="w-full flex items-center p-4 border-2 border-gray-100 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all group"
            >
              <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-purple-100 transition-colors">
                <ShieldCheck className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />
              </div>
              <div className="ml-4 text-left">
                <p className="font-semibold text-gray-900">Admin Portal</p>
                <p className="text-sm text-gray-500">Manage store and orders</p>
              </div>
            </button>
          </div>
          
          <div className="mt-6 text-center text-xs text-gray-400">
            For demo purposes, no password is required.
          </div>
        </motion.div>
      </div>
    </div>
  );
}
