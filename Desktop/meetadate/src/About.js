import React from 'react';

const AboutPage = () => {
  // Color Palette (consistent with main page)
  const colors = {
    logoRed: '#880000',
    metallicGold: '#c5a059',
    softWhite: '#fdfbf7',
  };

  // Styles for the About Page
  const styles = {
    container: {
      minHeight: '100vh',
      // Logo as background image
      backgroundImage: 'url(https://i.ibb.co/DHrd5FkC/logo.jpg)',
      // Ensures the image covers the full screen and is centered
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      position: 'relative'
    },
    // A dark overlay to make text readable over the background logo
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(136, 0, 0, 0.75)' // Semi-transparent logoRed
    },
    // The main content box
    contentBox: {
      backgroundColor: colors.softWhite,
      padding: '3rem',
      borderRadius: '12px',
      maxWidth: '800px',
      textAlign: 'center',
      zIndex: 1, // Ensures content sits on top of the overlay
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
    },
    title: {
      fontFamily: '"Great Vibes", cursive',
      fontSize: '3.5rem',
      color: colors.logoRed,
      marginBottom: '1.5rem',
      textShadow: '1px 1px 4px rgba(0,0,0,0.1)'
    },
    text: {
      fontFamily: '"Lato", sans-serif',
      fontSize: '1.2rem',
      color: '#555',
      lineHeight: '1.6'
    }
  };

  return (
    <div style={styles.container}>
      {/* Load Fonts and Reset Global Styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Great+Vibes&family=Lato:wght@300;400;700&display=swap');
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { margin: 0 !important; padding: 0 !important; }
        `}
      </style>

      {/* Semi-transparent overlay for readability */}
      <div style={styles.overlay}></div>

      {/* Main Content Box */}
      <div style={styles.contentBox}>
        <h1 style={styles.title}>Meet Us</h1>
        <p style={styles.text}>
          Meetadate is a dating service that offers single professionals interested in long term romantic relationships a chance to meet fellow singles in settings and at events which encourage safe and fun interactions which, hopefully, would lead to more romantic engagements.
        </p>
        
        {/* Optional: A button to go back to home */}
        <button style={{
          marginTop: '2rem',
          backgroundColor: colors.logoRed,
          color: colors.softWhite,
          border: `2px solid ${colors.metallicGold}`,
          padding: '1rem 2rem',
          fontSize: '1rem',
          fontFamily: '"Cinzel", serif',
          fontWeight: 'bold',
          borderRadius: '50px',
          cursor: 'pointer'
        }}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default AboutPage;