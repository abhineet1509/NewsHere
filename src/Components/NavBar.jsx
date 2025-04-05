import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import seo from '../assets/seo.png';

const NavBar = ({ setCategory }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ Menu bar state
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleCategorySelect = (category) => {
    setCategory(category);
    setIsDropdownOpen(false);
    setIsMenuOpen(false); // Optional: close full menu after click
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-2">
      <Link to="/" className="navbar-brand d-flex align-items-center text-white text-decoration-none">
        <img
          src={seo}
          width={40}
          alt="SEO Logo"
          className="me-2 d-none d-lg-block"
        />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMenu} // ✅ Custom toggle function
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-lg-center gap-lg-4">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>

          <li className="nav-item dropdown position-relative category" ref={dropdownRef}>
            <span
              className="nav-link text-white dropdown-toggle"
              role="button"
              onClick={toggleDropdown}
            >
              Category
            </span>
            {isDropdownOpen && (
          <ul className="dropdown-menu show position-absolute mt-2 mobile-dropdown-fix">


                {['general', 'health', 'business', 'technology', 'sports', 'science'].map(cat => (
                  <li key={cat}>
                    <span
                      className="dropdown-item"
                      onClick={() => handleCategorySelect(cat)}
                    >
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="nav-item">
            <Link to="/signup" className="nav-link text-white" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
