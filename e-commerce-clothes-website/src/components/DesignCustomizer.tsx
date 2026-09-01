import React, { useState, useRef } from 'react';
import { Upload, X, Minus, Plus, ShoppingBag } from 'lucide-react';

export function DesignCustomizer() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [position, setPosition] = useState({ x: 50, y: 50 }); // percentage
  const [scale, setScale] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<'tote' | 'tshirt'>('tote');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const productImages = {
    tote: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?q=80&w=1974&auto=format&fit=crop",
    tshirt: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Design Your Own
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Upload your art and see it come to life on our premium accessories.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Preview Area */}
        <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-square flex items-center justify-center shadow-inner border border-gray-200">
          {/* Base Product Image */}
          <img 
            src={productImages[selectedProduct]} 
            alt="Customizable Product" 
            className="w-full h-full object-cover"
          />
          
          {/* Overlay Area - positioned absolutely over the print area of the product */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             {/* This inner div represents the "printable area" roughly */}
            <div className="relative w-64 h-64 border-2 border-dashed border-gray-300/50 rounded-lg overflow-hidden">
              {uploadedImage && (
                <div 
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ 
                    left: `${position.x}%`, 
                    top: `${position.y}%`,
                    width: `${100 * scale}%`,
                    height: `${100 * scale}%`,
                  }}
                >
                  <img 
                    src={uploadedImage} 
                    alt="Custom Design" 
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
            </div>
          </div>

          {!uploadedImage && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="bg-black/50 text-white px-4 py-2 rounded-md backdrop-blur-sm">
                Preview Area
              </span>
            </div>
          )}
        </div>

        {/* Controls Area */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Select Product
            </label>
            <div className="flex space-x-4 mb-8">
              <button
                onClick={() => setSelectedProduct('tote')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                  selectedProduct === 'tote'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Tote Bag
              </button>
              <button
                onClick={() => setSelectedProduct('tshirt')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                  selectedProduct === 'tshirt'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                T-Shirt
              </button>
            </div>

            <label className="block text-sm font-medium text-gray-700 mb-4">
              Upload Design
            </label>
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-indigo-500 hover:bg-indigo-50 transition-colors cursor-pointer"
            >
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <span className="mt-2 block text-sm font-medium text-gray-900">
                Click to upload image
              </span>
              <span className="mt-1 block text-xs text-gray-500">
                PNG, JPG up to 5MB
              </span>
              <input 
                ref={fileInputRef}
                type="file" 
                className="hidden" 
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
          </div>

          {uploadedImage && (
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Size</label>
                  <span className="text-sm text-gray-500">{Math.round(scale * 100)}%</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Minus className="w-4 h-4 text-gray-400" />
                  <input 
                    type="range" 
                    min="0.2" 
                    max="2" 
                    step="0.1"
                    value={scale}
                    onChange={(e) => setScale(parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <Plus className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Position X</label>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={position.x}
                  onChange={(e) => setPosition({ ...position, x: parseInt(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Position Y</label>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={position.y}
                  onChange={(e) => setPosition({ ...position, y: parseInt(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>

              <div className="pt-6 border-t border-gray-100">
                 <button 
                  onClick={() => setUploadedImage(null)}
                  className="w-full py-3 px-4 border border-red-200 text-red-600 font-medium rounded-lg hover:bg-red-50 transition-colors flex items-center justify-center mb-4"
                >
                  <X className="w-4 h-4 mr-2" />
                  Remove Design
                </button>
                <button 
                  className="w-full py-3 px-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 flex items-center justify-center"
                  onClick={() => alert("Design saved! Added to cart (Simulation)")}
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Add Custom Item to Cart - $39.99
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
