import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Check for the "VIP Wristband" every time the page loads
  useEffect(() => {
    const savedUser = localStorage.getItem('meetadate_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, [location]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  // Hard-refresh logout to guarantee it wipes the memory
  const handleLogout = () => {
    localStorage.removeItem('meetadate_user');
    window.location.href = '/app'; // Forces the whole app to refresh
  };

  return (
    <nav className={`navbar ${isHome ? 'nav-transparent' : 'nav-solid'}`}>
      
      <div className="nav-brand">
        <Link to="/" className="brand-link" onClick={closeMenu}>
          <img src="https://i.ibb.co/cKhGR5bf/image-57e9adc3.png" alt="MeetADate Logo" className="navbar-logo-img" />
        </Link>
      </div>
      
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        {isMobileMenuOpen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="#CCA550" strokeWidth="2" width="30" height="30">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="#CCA550" strokeWidth="2" width="30" height="30">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </div>

      <div className={isMobileMenuOpen ? "nav-links active" : "nav-links"}>
        <Link to="/" className={location.pathname === '/' ? "active" : ""} onClick={closeMenu}>HOME</Link> 
        <Link to="/events" className={location.pathname === '/events' ? "active" : ""} onClick={closeMenu}>EVENTS</Link>
        <Link to="/lovenotes" className={location.pathname === '/lovenotes' ? "active" : ""} onClick={closeMenu}>LOVE NOTES</Link>
        <Link to="/gallery" className={location.pathname === '/gallery' ? "active" : ""} onClick={closeMenu}>GALLERY</Link>
        <Link to="/about" className={location.pathname === '/meetus' ? "active" : ""} onClick={closeMenu}>MEET US</Link>

        
       {/* THE SMART BUTTONS (CSS Safe Version) */}
        {user ? (
          <button onClick={handleLogout} className="btn-nav-join" style={{cursor: 'pointer', background: 'transparent', border: '1px solid #CCA550', color: '#CCA550', marginTop: '20px', padding: '10px 20px', width: 'fit-content', alignSelf: 'center'}}>
            LOGOUT ({user.username})
          </button>
        ) : (
          /* Using a Fragment (<>) instead of a <div> so CSS doesn't hide them! */
          <>
            <Link to="/login" onClick={closeMenu} style={{color: '#CCA550', fontWeight: 'bold', marginTop: '20px'}}>LOGIN</Link>
            <Link to="/register" className="btn-nav-join" onClick={closeMenu} style={{marginTop: '10px'}}>JOIN US</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;