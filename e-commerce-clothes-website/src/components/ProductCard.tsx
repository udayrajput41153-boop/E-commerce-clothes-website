import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        
        <button
          onClick={() => onAddToCart(product)}
          className="absolute bottom-4 right-4 bg-white text-gray-900 p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-indigo-600 hover:text-white"
          aria-label="Add to cart"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
      
      <div className="p-4">
        <p className="text-xs font-medium text-indigo-600 mb-1">{product.category}</p>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-gray-500 text-sm line-clamp-1 mb-3">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
        </div>
      </div>
    </motion.div>
  );
}
