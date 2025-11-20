// src/components/layout/Header.tsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Our Cuts' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="header">
      <nav className="nav">
        {/* Logo */}
        <Link to="/" className="logo">
          <img 
            src="/images/keegan_bg.png" 
            alt="Keegan Meats Logo" 
            className="logoIcon"
          />
          <span>Keegan Meats</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="navList">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path}
                className={`navLink ${
                  location.pathname === item.path ? 'active' : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="menuButton"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile Navigation */}
        <div className={`mobileMenu ${isMenuOpen ? 'mobileMenuOpen' : ''}`}>
          <ul className="mobileNavList">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  className={`mobileNavLink ${
                    location.pathname === item.path ? 'active' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;