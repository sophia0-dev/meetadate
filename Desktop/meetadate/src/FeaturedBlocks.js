import React from 'react';
import './FeaturedBlocks.css';

const FeaturedBlocks = () => {
  return (
    <section className="featured-container">
      
      {/* Block 1: Sip & Paint (Image Left, Text Right) */}
      <div className="feature-row">
        <div className="feature-image-wrapper">
          <img 
            src="https://i.ibb.co/RG8pdPdM/image-d91884e7.png" 
            alt="Sip and Paint" 
            className="feature-img"
          />
        </div>
        <div className="feature-text-wrapper">
          <span className="feature-accent">UPCOMING EVENT ♥</span>
          <h2 className="feature-title">Sip, Paint & Connect</h2>
          <p className="feature-desc">
            Join a relaxed evening of creativity, great conversations, and meaningful connections with like-minded singles.
          </p>
          <ul className="feature-list">
            <li>
              <span className="list-icon">
                {/* Location Pin SVG */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span> 
              Lagos
            </li>
            <li>
              <span className="list-icon">
                {/* Calendar SVG */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </span> 
              Saturday, 15 August 2026
            </li>
            <li>
              <span className="list-icon">
                {/* User/Person SVG */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span> 
              Open to registered singles aged 29+
            </li>
          </ul>
          <button className="btn-feature">RESERVE YOUR SPOT</button>
          <a href="/events" className="feature-link">SEE MORE EVENTS &rarr;</a>
        </div>
      </div>

      {/* Block 2: Love Notes (Text Left, Image Right) */}
      {/* Notice the "reverse" class added here to flip the layout */}
      <div className="feature-row reverse">
        <div className="feature-image-wrapper">
          <img 
            src="https://i.ibb.co/0RRVJ3yb/image-d8d341da.png" 
            alt="Love Notes Journal" 
            className="feature-img"
          />
        </div>
        <div className="feature-text-wrapper">
          <span className="feature-accent">JOIN THE CONVERSATION ♥</span>
          <h2 className="feature-title">The Problem With Waiting for the Perfect Person</h2>
          <p className="feature-desc">
            Many singles spend years looking for "perfect" while overlooking someone genuinely compatible. Here's why shifting your mindset could be the key to real connection...
          </p>
          <button className="btn-feature">READ MORE</button>
          <a href="/love-notes" className="feature-link">EXPLORE MORE LOVE NOTES &rarr;</a>
        </div>
      </div>

      {/* Block 3: Boat Cruise (Image Left, Text Right) */}
      <div className="feature-row">
        <div className="feature-image-wrapper">
          <img 
            src="https://i.ibb.co/Y4t38cDt/image-31c5c945.png" 
            alt="Singles Boat Cruise" 
            className="feature-img"
          />
        </div>
        <div className="feature-text-wrapper">
          <span className="feature-accent">MOMENTS WORTH SHARING ♥</span>
          <h2 className="feature-title">Singles Boat Cruise 2026</h2>
          <p className="feature-desc">
            Laughter, games, meaningful conversations, and new connections on the water.
          </p>
          <a href="/moments" className="feature-link">SEE MORE MOMENTS &rarr;</a>
        </div>
      </div>

    </section>
  );
};

export default FeaturedBlocks;