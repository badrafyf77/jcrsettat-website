
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'الصفحة الرئيسية', href: '/' },
    { name: 'من نحن', href: '/about' },
    { name: 'شركاؤنا', href: '/partners' },
    { name: 'تواصل معنا', href: '/contact' }
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50 relative overflow-hidden">
      {/* Decorative wave background */}
      <div className="absolute inset-0 bg-gradient-to-l from-primary via-secondary to-accent opacity-10">
        <svg 
          className="absolute bottom-0 left-0 w-full h-6" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z" 
            fill="currentColor" 
            className="text-primary opacity-20"
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 space-x-reverse">
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
              <img src="/uploads/logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div className="text-right">
              <h1 className="text-lg font-bold text-gray-800">الشباب المواطن</h1>
              <p className="text-xs text-gray-600">راس العين سطات</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 hover:text-primary transition-colors duration-200 font-medium relative group ${
                  isActive(item.href) ? 'text-primary' : ''
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 right-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2 text-right ${
                    isActive(item.href) ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
