import React, { useState, useEffect } from 'react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu on larger screens if it was open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // Tailwind's 'md' breakpoint
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <header>
      <nav className="container">
        <div className="logo">
          <a href="#">
            <span>🌳</span>
            GreenDot IPL
          </a>
        </div>
        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <ul>
            
          </ul>
        </div>
        {/* Mobile Menu Button */}
        <button
            className="mobile-menu-button"
            id="mobileMenuButton"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? '✕' : '☰'} {/* Toggle icon */}
        </button>
      </nav>
      {/* Mobile Menu */}
      <div id="mobileMenu" className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="container">
            <li><a href="#impact" onClick={toggleMobileMenu}>Impact</a></li>
            <li><a href="#leaderboards" onClick={toggleMobileMenu}>Leaderboards</a></li>
            <li><a href="#visualization" onClick={toggleMobileMenu}>Growth Visualizer</a></li>
            <li><a href="#about" onClick={toggleMobileMenu}>About</a></li>
            <li><button className="theme-toggle">[☀️] Toggle Theme</button></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;