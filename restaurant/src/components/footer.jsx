import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">© Hungry Puppets.</div>
        
        <div className="footer-links">
          <span className="footer-item active">Restaurant settings</span>
          <span className="footer-divider">●</span>
          <span className="footer-item">Profile</span>
        </div>
      </div>
    </footer>
   
  );
};

export default Footer;
