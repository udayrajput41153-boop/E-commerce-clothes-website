import React from 'react';
import { Package, User, MapPin, CreditCard, LogOut } from 'lucide-react';
import { orders } from '@/data/orders';

export function CustomerPanel({ onLogout }: { onLogout: () => void }) {
  // Mock current user
  const user = {
    name: "Alex Johnson",
    email: "alex@example.com",
    address: "123 Fashion St, Design City, DC 10101",
    memberSince: "Jan 2024"
  };

  const userOrders = orders.filter(o => o.customerEmail === user.email);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                <User className="w-12 h-12" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            
            <nav className="space-y-2">
              <button className="w-full flex items-center space-x-3 px-4 py-2 text-indigo-600 bg-indigo-50 rounded-lg font-medium transition-colors">
                <Package className="w-5 h-5" />
                <span>My Orders</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                <MapPin className="w-5 h-5" />
                <span>Addresses</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                <CreditCard className="w-5 h-5" />
                <span>Payment Methods</span>
              </button>
              <div className="pt-4 mt-4 border-t border-gray-100">
                <button 
                  onClick={onLogout}
                  className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Log Out</span>
                </button>
              </div>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Order History</h3>
            
            {userOrders.length > 0 ? (
              <div className="space-y-6">
                {userOrders.map((order) => (
                  <div key={order.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Order ID</p>
                        <p className="font-medium text-gray-900">{order.id}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Date</p>
                        <p className="font-medium text-gray-900">{order.date}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Total</p>
                        <p className="font-medium text-gray-900">${order.total.toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Status</p>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                          ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                            order.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
                            'bg-gray-100 text-gray-800'}`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Items</h4>
                      <ul className="space-y-3">
                        {order.items.map((item, idx) => (
                          <li key={idx} className="flex justify-between text-sm">
                            <span className="text-gray-600">{item.quantity}x {item.name}</span>
                            <span className="font-medium text-gray-900">${item.price.toFixed(2)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                You haven't placed any orders yet.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
