import React from 'react';

const DatingSitePreview = () => {
  const colors = {
    deepWine: '#4a0404',      // The "Bitter" dark base
    richRed: '#720e1e',       // The romantic red
    metallicGold: '#c5a059',  // Luxury gold
    softWhite: '#fdfbf7',
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* This style tag does two things:
        1. Loads the "Great Vibes" and "Cinzel" fonts from Google.
        2. Removes the white lines (margin: 0) from the browser edges.
      */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Great+Vibes&family=Lato:wght@300;400;700&display=swap');
          
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { margin: 0 !important; padding: 0 !important; background-color: ${colors.softWhite}; }
        `}
      </style>

      {/* NAVIGATION */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 5%',
        backgroundColor: colors.deepWine,
        borderBottom: `2px solid ${colors.metallicGold}`
      }}>
        <div style={{
          fontFamily: '"Cinzel", serif',
          fontSize: '1.8rem',
          fontWeight: '700',
          color: colors.metallicGold,
          letterSpacing: '2px'
        }}>
          VELVET & GOLD
        </div>
        <button style={{
          background: 'transparent',
          border: `1px solid ${colors.metallicGold}`,
          color: colors.metallicGold,
          padding: '0.6rem 2rem',
          borderRadius: '50px',
          cursor: 'pointer',
          fontFamily: '"Cinzel", serif',
          fontWeight: 'bold'
        }}>
          Client Login
        </button>
      </nav>

      {/* HERO SECTION */}
      <header style={{
        textAlign: 'center',
        background: `linear-gradient(180deg, ${colors.deepWine} 0%, ${colors.richRed} 100%)`,
        color: 'white',
        padding: '8rem 1rem',
        flex: 1 // Makes this section fill screen if content is short
      }}>
        <h1 style={{
          fontFamily: '"Great Vibes", cursive', // The "Eye Catching" Font
          fontSize: '5rem',
          margin: 0,
          color: colors.metallicGold,
          textShadow: '2px 2px 10px rgba(0,0,0,0.5)',
          lineHeight: '1.2'
        }}>
          Find Your Perfect Match
        </h1>
        
        <p style={{
          fontFamily: '"Lato", sans-serif',
          marginTop: '1.5rem',
          fontSize: '1.3rem',
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto',
          fontWeight: '300',
          letterSpacing: '1px',
          opacity: '0.9'
        }}>
          Where passion meets prestige. Join the most exclusive singles community in Enugu, Lagos, and Abuja.
        </p>
        
        <button style={{
          marginTop: '3rem',
          backgroundColor: colors.metallicGold,
          color: colors.deepWine,
          border: 'none',
          padding: '1.2rem 3.5rem',
          fontSize: '1.2rem',
          fontFamily: '"Cinzel", serif',
          fontWeight: 'bold',
          borderRadius: '50px',
          cursor: 'pointer',
          boxShadow: '0 0 20px rgba(197, 160, 89, 0.4)'
        }}>
          Begin The Journey
        </button>
      </header>

      {/* EVENTS SECTION */}
      <section style={{ padding: '5rem 5%', textAlign: 'center', backgroundColor: colors.softWhite }}>
        <h2 style={{
          color: colors.deepWine,
          fontFamily: '"Cinzel", serif',
          fontSize: '2.5rem',
          marginBottom: '3rem',
          display: 'inline-block',
          borderBottom: `1px solid ${colors.metallicGold}`,
          paddingBottom: '10px'
        }}>
          Exclusive Gatherings
        </h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
          {/* Card Component Function for cleaner code */}
          {['Lagos', 'Abuja', 'Enugu'].map((city, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              borderRadius: '4px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              width: '320px',
              overflow: 'hidden',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <div style={{
                backgroundColor: colors.deepWine,
                padding: '1.5rem',
                fontFamily: '"Cinzel", serif',
                fontWeight: 'bold',
                color: colors.metallicGold,
                letterSpacing: '2px',
                fontSize: '1.2rem'
              }}>
                {city.toUpperCase()}
              </div>
              <div style={{ padding: '2rem', color: '#555', fontFamily: '"Lato", sans-serif' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: colors.richRed,
                  marginBottom: '0.5rem',
                  fontFamily: '"Cinzel", serif' // Using Royal font for event names too
                }}>
                  {city === 'Lagos' ? 'Sunset Cocktail' : city === 'Abuja' ? 'Golden Masquerade' : 'Royal Dinner'}
                </h3>
                <p>Friday, 8:00 PM</p>
                <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#888' }}>Exclusive Location</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DatingSitePreview;