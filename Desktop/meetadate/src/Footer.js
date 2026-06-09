import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      
      {/* Title with decorative lines */}
      <div className="footer-title-wrapper">
        <span className="footer-line"></span>
        <h3 className="footer-title">LET'S STAY CONNECTED</h3>
        <span className="footer-line"></span>
      </div>

      <p className="footer-subtitle">
        Follow us for dating insights, event updates,<br />
        relationship conversations, and a little inspiration along the way.
      </p>

      {/* Social Media Icons */}
      <div className="footer-socials">
        
        <div className="social-item">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-ring">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <span>INSTAGRAM</span>
        </div>

        <div className="social-item">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-ring">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <span>FACEBOOK</span>
        </div>

        <div className="social-item">
          <a href="https://threads.net" target="_blank" rel="noreferrer" className="social-icon-ring">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <path d="M12 22a10 10 0 1 0-8.4-4.6"></path>
              <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
              <path d="M16 12a4 4 0 0 1-4 4"></path>
            </svg>
          </a>
          <span>THREADS</span>
        </div>

      </div>

      {/* Contact Emails */}
      <div className="footer-contact">
        <span className="email-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </span>
        <div className="email-links">
          <a href="mailto:match@meetadatenow.com">match@meetadatenow.com</a>
          <span className="email-divider">|</span>
          <a href="mailto:info@meetadatenow.com">info@meetadatenow.com</a>
        </div>
      </div>
<Link to="/register" className="btn-footer-join" style={{textDecoration: 'none', display: 'inline-block'}}>JOIN MEETADATE</Link>

    </footer>
  );
};

export default Footer;