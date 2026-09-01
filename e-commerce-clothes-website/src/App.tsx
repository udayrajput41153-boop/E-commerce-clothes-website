import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProductList } from '@/components/ProductList';
import { Cart } from '@/components/Cart';
import { Footer } from '@/components/Footer';
import { DesignCustomizer } from '@/components/DesignCustomizer';
import { AdminPanel } from '@/components/AdminPanel';
import { CustomerPanel } from '@/components/CustomerPanel';
import { AuthModal } from '@/components/AuthModal';
import { products, Product } from '@/data/products';

export function App() {
  const [cartItems, setCartItems] = useState<(Product & { quantity: number })[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentUser, setCurrentUser] = useState<'user' | 'admin' | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [view, setView] = useState<'shop' | 'admin' | 'profile'>('shop');

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleUserClick = () => {
    if (!currentUser) {
      setIsAuthModalOpen(true);
    } else if (currentUser === 'admin') {
      setView('admin');
      setSelectedCategory('Admin'); // Just for UI consistency if needed
    } else {
      setView('profile');
      setSelectedCategory('Profile');
    }
  };

  const handleLogin = (role: 'user' | 'admin') => {
    setCurrentUser(role);
    setIsAuthModalOpen(false);
    setView(role === 'admin' ? 'admin' : 'profile');
    setSelectedCategory(role === 'admin' ? 'Admin' : 'Profile');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setView('shop');
    setSelectedCategory('All');
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    if (category === 'Customize') {
       setView('shop'); // Ensure we are in shop view to show customizer logic which is part of shop view logic in original code, or separate it.
       // Actually, original code used selectedCategory === 'Customize' inside the shop view logic.
       // Let's keep 'Customize' as part of the shop view logic for now, or just reset view to 'shop'.
    }
    setView('shop');
  };

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)}
        onHomeClick={() => {
          setSelectedCategory('All');
          setView('shop');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectCategory={handleCategorySelect}
        onUserClick={handleUserClick}
        currentUser={currentUser}
        onLogout={handleLogout}
      />
      
      <main className="flex-grow pt-16">
        {view === 'admin' && currentUser === 'admin' ? (
          <AdminPanel />
        ) : view === 'profile' && currentUser === 'user' ? (
          <CustomerPanel onLogout={handleLogout} />
        ) : (
          // Shop View
          selectedCategory === 'Customize' ? (
            <DesignCustomizer />
          ) : (
            <>
              {selectedCategory === 'All' && <Hero />}
              <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
            </>
          )
        )}
      </main>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemove={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
      />

      <Footer />
    </div>
  );
}
