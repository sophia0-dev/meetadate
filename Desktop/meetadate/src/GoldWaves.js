import React from 'react';
import './GoldWaves.css';

const GoldWaves = () => {
  return (
    <div className="gold-waves-container">
      {/* Wave 1: Deep Gold, Slowest */}
      <svg className="gold-wave wave-1" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path 
          fill="none" 
          stroke="#b8863b" 
          strokeWidth="2" 
          d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128"
        ></path>
      </svg>

      {/* Wave 2: Bright Gold, Medium Speed */}
      <svg className="gold-wave wave-2" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path 
          fill="none" 
          stroke="#ebd08d" 
          strokeWidth="1.5" 
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224"
        ></path>
      </svg>

      {/* Wave 3: Subtle Glow, Fastest */}
      <svg className="gold-wave wave-3" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path 
          fill="none" 
          stroke="#CCA550" 
          strokeWidth="3" 
          d="M0,96L60,117.3C120,139,240,181,360,176C480,171,600,117,720,106.7C840,96,960,128,1080,144C1200,160,1320,160,1380,160L1440,160"
        ></path>
      </svg>
    </div>
  );
};

export default GoldWaves;