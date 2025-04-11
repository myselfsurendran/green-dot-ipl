import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <a href="#">
            <span>🌳</span> GreenDot IPL
          </a>
        </div>
        <p>© {new Date().getFullYear()} GreenDot IPL Initiative. All Rights Reserved.</p>
        <p>Data sourced via manual updates (Static Demo).</p>
        <div className="footer-links">
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;