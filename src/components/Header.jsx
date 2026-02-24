import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { contactInfo, navLinks } from '../data/contactInfo';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo" onClick={closeMenu}>
          <div className="logo-icon">
            <img src={'/favicon.svg'} alt="Troiano Software Logo" />
          </div>
          <span className="logo-text">{contactInfo.companyName}</span>
        </Link>

        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="btn btn-primary nav-cta"
            onClick={closeMenu}
          >
            Get in Touch
          </Link>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="nav-overlay" onClick={closeMenu}></div>
      )}
    </header>
  );
};

export default Header;
