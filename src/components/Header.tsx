import React from 'react';
import { ShoppingCart, Search, Menu, X, Monitor } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onMenuClick: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  isMobileMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({
  cartItemsCount,
  onCartClick,
  onMenuClick,
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  isMobileMenuOpen
}) => {
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'prebuilt', name: 'Pre-built PCs' },
    { id: 'components', name: 'Components' },
    { id: 'peripherals', name: 'Peripherals' },
    { id: 'accessories', name: 'Accessories' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Monitor className="h-8 w-8 text-cyan-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              K-O Tech
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-cyan-400 ${
                  selectedCategory === category.id
                    ? 'text-cyan-400 border-b-2 border-cyan-400'
                    : 'text-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search PC components..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 text-white placeholder-gray-400"
              />
            </div>

            {/* Cart */}
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <ShoppingCart className="h-6 w-6 text-gray-300" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-cyan-400 text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={onMenuClick}
              className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            {/* Mobile Search */}
            <div className="relative mb-4 sm:hidden">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search PC components..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400 text-white placeholder-gray-400"
              />
            </div>

            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => {
                    onCategoryChange(category.id);
                    onMenuClick();
                  }}
                  className={`text-left px-3 py-2 text-sm font-medium transition-colors hover:text-cyan-400 ${
                    selectedCategory === category.id
                      ? 'text-cyan-400 bg-gray-800 rounded-lg'
                      : 'text-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;