import React from 'react';
import { motion } from 'framer-motion';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { Product } from '@/data/products';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: (Product & { quantity: number })[];
  onRemove: (productId: number) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
}

export function Cart({ isOpen, onClose, cartItems, onRemove, onUpdateQuantity }: CartProps) {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose} />
          
          <div className="fixed inset-y-0 right-0 max-w-full flex">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="w-screen max-w-md pointer-events-auto"
            >
              <div className="h-full flex flex-col bg-white shadow-xl">
                <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
                    <div className="ml-3 h-7 flex items-center">
                      <button
                        type="button"
                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                        onClick={onClose}
                      >
                        <span className="sr-only">Close panel</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    {cartItems.length === 0 ? (
                      <div className="text-center py-12">
                        <ShoppingBag className="mx-auto h-12 w-12 text-gray-300" />
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No items</h3>
                        <p className="mt-1 text-sm text-gray-500">Get started by adding items to your cart.</p>
                        <div className="mt-6">
                          <button
                            onClick={onClose}
                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Continue Shopping
                          </button>
                        </div>
                      </div>
                    ) : (
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {cartItems.map((product) => (
                          <li key={product.id} className="py-6 flex">
                            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-center object-cover"
                              />
                            </div>

                            <div className="ml-4 flex-1 flex flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href="#">{product.name}</a>
                                  </h3>
                                  <p className="ml-4">${(product.price * product.quantity).toFixed(2)}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                              </div>
                              <div className="flex-1 flex items-end justify-between text-sm">
                                <div className="flex items-center border border-gray-300 rounded-md">
                                  <button 
                                    className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                    onClick={() => onUpdateQuantity(product.id, Math.max(1, product.quantity - 1))}
                                  >
                                    -
                                  </button>
                                  <span className="px-2 py-1 text-gray-900">{product.quantity}</span>
                                  <button 
                                    className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                    onClick={() => onUpdateQuantity(product.id, product.quantity + 1)}
                                  >
                                    +
                                  </button>
                                </div>

                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500 flex items-center"
                                    onClick={() => onRemove(product.id)}
                                  >
                                    <Trash2 className="w-4 h-4 mr-1" />
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {cartItems.length > 0 && (
                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>${total.toFixed(2)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                      >
                        Checkout
                      </a>
                    </div>
                    <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                      <p>
                        or{' '}
                        <button
                          type="button"
                          className="text-indigo-600 font-medium hover:text-indigo-500"
                          onClick={onClose}
                        >
                          Continue Shopping<span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
}
