import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import AuthModal from './components/AuthModal';
import Checkout from './components/Checkout';
import CategoryPage from './components/CategoryPage';
import { Product, CartItem } from './types';
import { products } from './data/products';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'category' | 'product' | 'checkout'>('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewingCategory, setViewingCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryProducts = products.filter(product => product.category === viewingCategory);

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProduct(null);
    setViewingCategory('');
    setSelectedCategory('all');
  };

  const handleCategoryPageClick = (category: string) => {
    setViewingCategory(category);
    setCurrentView('category');
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCurrentView('checkout');
  };

  const handleOrderComplete = () => {
    setCartItems([]);
    setCurrentView('home');
  };

  const handleAuthRequired = () => {
    setIsCartOpen(false);
    setIsAuthModalOpen(true);
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        {currentView !== 'checkout' && (
          <Header
            cartItemsCount={cartItemsCount}
            onCartClick={() => setIsCartOpen(true)}
            onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            isMobileMenuOpen={isMobileMenuOpen}
            onAuthClick={() => setIsAuthModalOpen(true)}
            onCategoryPageClick={handleCategoryPageClick}
          />
        )}

        {currentView === 'home' && (
          <>
            <Hero />
            <ProductGrid
              products={filteredProducts}
              onProductClick={handleProductClick}
              onAddToCart={addToCart}
            />
          </>
        )}

        {currentView === 'category' && (
          <CategoryPage
            category={viewingCategory}
            products={categoryProducts}
            onBack={handleBackToHome}
            onProductClick={handleProductClick}
            onAddToCart={addToCart}
          />
        )}

        {currentView === 'product' && selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onBack={() => {
              if (viewingCategory) {
                setCurrentView('category');
              } else {
                setCurrentView('home');
              }
              setSelectedProduct(null);
            }}
            onAddToCart={addToCart}
          />
        )}

        {currentView === 'checkout' && (
          <Checkout
            items={cartItems}
            onBack={() => {
              setCurrentView('home');
              setIsCartOpen(true);
            }}
            onOrderComplete={handleOrderComplete}
          />
        )}

        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={updateCartQuantity}
          onCheckout={handleCheckout}
          onAuthRequired={handleAuthRequired}
        />

        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
      </div>
    </AuthProvider>
  );
}

export default App;