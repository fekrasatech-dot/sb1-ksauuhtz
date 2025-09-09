import React from 'react';
import { ArrowLeft, Star, Plus, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart }) => {
  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Products</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 lg:h-full object-cover rounded-2xl"
            />
            <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-400">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="text-4xl font-bold text-cyan-400 mb-6">
                ${product.price}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
              <p className="text-gray-300 leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 pt-6">
              <button
                onClick={() => onAddToCart(product)}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-lg"
              >
                <Plus className="h-6 w-6" />
                <span>Add to Cart</span>
              </button>

              <div className="grid grid-cols-2 gap-4">
                <button className="border border-gray-600 text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Add to Wishlist
                </button>
                <button className="border border-cyan-400 text-cyan-400 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
                  Compare
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-800 rounded-lg p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Availability:</span>
                <span className="text-green-400 font-semibold">In Stock</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Shipping:</span>
                <span className="text-gray-300">Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Warranty:</span>
                <span className="text-gray-300">1 Year Manufacturer Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;