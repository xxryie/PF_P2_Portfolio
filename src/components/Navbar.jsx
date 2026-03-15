import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <a href="#home" className="logo">
          Portfolio<span>.</span>
        </a>

        {/* Desktop Nav */}
        <div className="nav-links desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`nav-links mobile ${isMobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>

      <style jsx="true">{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: var(--transition);
          padding: 1.5rem 0;
          background: transparent;
        }

        .navbar.scrolled {
          background-color: var(--bg-white);
          box-shadow: var(--shadow-sm);
          padding: 1rem 0;
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 10%;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-main);
          letter-spacing: -0.5px;
        }

        .logo span {
          color: var(--primary-pink);
        }

        .nav-links.desktop {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          font-weight: 500;
          font-size: 1rem;
          color: var(--text-main);
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--primary-pink);
          transition: var(--transition);
        }

        .nav-link:hover {
          color: var(--primary-pink);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-main);
          cursor: pointer;
        }

        .nav-links.mobile {
          display: none;
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: var(--bg-white);
          padding: 1rem 10%;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
          transform-origin: top;
          transform: scaleY(0);
          opacity: 0;
        }

        .nav-links.mobile.open {
          transform: scaleY(1);
          opacity: 1;
        }

        .nav-links.mobile .nav-link {
          padding: 1rem 0;
          border-bottom: 1px solid var(--border-color);
        }

        .nav-links.mobile .nav-link:last-child {
          border-bottom: none;
        }

        @media (max-width: 768px) {
          .nav-links.desktop {
            display: none;
          }

          .mobile-toggle {
            display: block;
          }

          .nav-links.mobile {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
