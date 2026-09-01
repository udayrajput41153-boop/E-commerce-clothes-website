import React from 'react';
import { Product } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export function ProductList({ products, onAddToCart }: ProductListProps) {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Featured Collection</h2>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Handpicked favorites just for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 xl:gap-x-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
