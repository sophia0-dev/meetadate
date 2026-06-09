import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="hiw-section">
      <div className="hiw-title-wrapper">
        <span className="hiw-line"></span>
        <h2 className="hiw-title">HOW IT WORKS</h2>
        <span className="hiw-line"></span>
      </div>
      <p className="hiw-subtitle">Three simple steps to meaningful connections.</p>
      
      <div className="hiw-container">
        
        {/* Step 1 */}
        <div className="hiw-step">
          <div className="hiw-icon-ring">
            {/* Simple Person SVG */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="hiw-content">
            <div className="hiw-step-header">
              <span className="hiw-number">1</span>
              <span className="hiw-step-title">JOIN</span>
            </div>
            <p className="hiw-step-desc">
              Fill the sign up form, tell us more about yourself, what you're looking for, and your preferences.
            </p>
          </div>
        </div>

        <div className="hiw-arrow">&gt;</div>

        {/* Step 2 */}
        <div className="hiw-step">
          <div className="hiw-icon-ring">
            {/* Simple Heart SVG */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          <div className="hiw-content">
            <div className="hiw-step-header">
              <span className="hiw-number">2</span>
              <span className="hiw-step-title">CONNECT</span>
            </div>
            <p className="hiw-step-desc">
              Get matched and invites to exclusive experiences.
            </p>
          </div>
        </div>

        <div className="hiw-arrow">&gt;</div>

        {/* Step 3 */}
        <div className="hiw-step">
          <div className="hiw-icon-ring">
            {/* Simple Group SVG */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div className="hiw-content">
            <div className="hiw-step-header">
              <span className="hiw-number">3</span>
              <span className="hiw-step-title">MEET</span>
            </div>
            <p className="hiw-step-desc">
              Build meaningful relationships through conversation, shared experiences, friendship, and genuine connection.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;