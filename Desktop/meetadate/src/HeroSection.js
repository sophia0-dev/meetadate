import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <div className="hero-title-wrapper">
          <h1 className="hero-cursive">Welcome to MeetADate</h1>
          <span className="title-heart">♡</span>
        </div>
        
        <div className="hero-divider">
          <span className="hero-line"></span>
          <span className="hero-mini-heart">♥</span>
          <span className="hero-line"></span>
        </div>

        <p className="hero-subtitle">
          A matchmaking and social discovery platform<br/>
          for single professionals seeking meaningful connections,<br/>
          lasting relationships, and a community of like-minded people.
        </p>

        {/* --- UPDATED: Professional Gold SVG Icons --- */}
        <div className="hero-features">
          
          <div className="hero-feature-item">
            <span className="feature-icon">
              {/* Matches (Clover/Flower Knot) */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <path d="M12 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4z"/><path d="M12 14a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4z"/><path d="M2 12a4 4 0 0 0 4-4 4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4z"/><path d="M14 12a4 4 0 0 0 4-4 4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4z"/>
              </svg>
            </span> 
            Matches
          </div>

          <div className="hero-feature-item">
            <span className="feature-icon">
              {/* Events (Calendar with Heart) */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M12 16.5l-2.5-2.5a1.5 1.5 0 0 1 2.12-2.12l.38.38.38-.38a1.5 1.5 0 0 1 2.12 2.12L12 16.5z"/>
              </svg>
            </span> 
            Events
          </div>

          <div className="hero-feature-item">
            <span className="feature-icon">
              {/* Conversations (Chat Bubbles) */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </span> 
            Conversations
          </div>

          <div className="hero-feature-item">
            <span className="feature-icon">
              {/* Growth (Leaf) */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <path d="M12 22c4-4 8-9 8-14a5 5 0 0 0-10 0v6"/><path d="M12 22c-4-4-8-9-8-14a5 5 0 0 1 10 0v6"/>
              </svg>
            </span> 
            Growth
          </div>

          <div className="hero-feature-item">
            <span className="feature-icon">
              {/* Community (Users) */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </span> 
            Community
          </div>

        </div>

<Link to="/register" className="btn-hero-signup" style={{textDecoration: 'none', display: 'inline-block'}}>SIGN UP &rarr;</Link>
      </div>
    </section>
  );
};

export default HeroSection;