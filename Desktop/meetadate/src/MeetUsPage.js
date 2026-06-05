import React from 'react';
import { useNavigate } from 'react-router-dom';

const MeetUsPage = () => {
  const navigate = useNavigate();

  // The MeetADate Color Palette
  const colors = {
    deepWine: '#4a0404',
    richRed: '#880000',
    metallicGold: '#c5a059',
    softWhite: '#ffffff',
    bgCream: '#fdfbf7',
    textDark: '#2a2a2a',
    textGrey: '#666666'
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.bgCream, display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Great+Vibes&family=Lato:wght@300;400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0 !important; padding: 0 !important; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ padding: '1rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: colors.softWhite, borderBottom: `1px solid ${colors.metallicGold}`, position: 'sticky', top: 0, zIndex: 100 }}>
        <img src="https://i.ibb.co/DHrd5FkC/logo.jpg" alt="Logo" style={{ height: '70px', objectFit: 'contain' }} />
        <button 
          onClick={() => navigate("/")} 
          style={{
            background: 'transparent', border: `1px solid ${colors.deepWine}`, color: colors.deepWine,
            padding: '0.5rem 1.5rem', borderRadius: '50px', cursor: 'pointer', fontFamily: '"Cinzel", serif', fontWeight: 'bold', transition: 'all 0.3s'
        }}>
          Back to Home
        </button>
      </nav>

      {/* HERO SECTION */}
      <header style={{ 
        textAlign: 'center', 
        padding: '8rem 2rem', 
        backgroundImage: `linear-gradient(rgba(74, 4, 4, 0.85), rgba(74, 4, 4, 0.85)), url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white' 
      }}>
        <h1 style={{ fontFamily: '"Great Vibes", cursive', fontSize: '5rem', color: colors.metallicGold, margin: 0 }}>
          Our Philosophy
        </h1>
        <p style={{ fontFamily: '"Cinzel", serif', fontSize: '1.2rem', marginTop: '1rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
          Curating love for Nigeria's Elite
        </p>
      </header>

      {/* THE MISSION STORY */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '5rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: '"Cinzel", serif', color: colors.deepWine, fontSize: '2.5rem', marginBottom: '2rem' }}>
          More Than A Match
        </h2>
        <div style={{ width: '60px', height: '4px', backgroundColor: colors.metallicGold, margin: '0 auto 2rem auto' }}></div>
        <p style={{ fontFamily: '"Lato", sans-serif', fontSize: '1.2rem', color: colors.textGrey, lineHeight: '2', marginBottom: '1.5rem' }}>
          MeetADate was born out of a simple realization: successful professionals in Lagos, Abuja, and Enugu are too busy to waste time on endless swiping and dead-end dates. You have built a life to be proud of, and you deserve a partner who matches your ambition, values, and lifestyle.
        </p>
        <p style={{ fontFamily: '"Lato", sans-serif', fontSize: '1.2rem', color: colors.textGrey, lineHeight: '2' }}>
          We act as your personal relationship concierges. Through exclusive, invite-only events and highly vetted personal introductions, we create the perfect environment for genuine, high-caliber romance to bloom.
        </p>
      </section>

      {/* THE MEETADATE STANDARD (3 Columns) */}
      <section style={{ backgroundColor: colors.softWhite, padding: '5rem 5%' }}>
        <h2 style={{ fontFamily: '"Cinzel", serif', color: colors.deepWine, fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>
          The MeetADate Standard
        </h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Feature 1 */}
          <div style={{ flex: '1 1 300px', textAlign: 'center', padding: '2rem', border: `1px solid ${colors.metallicGold}`, borderRadius: '8px', backgroundColor: 'white', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
            <h3 style={{ fontFamily: '"Cinzel", serif', color: colors.richRed, fontSize: '1.3rem', marginBottom: '1rem' }}>Strictly Vetted</h3>
            <p style={{ fontFamily: '"Lato", sans-serif', color: colors.textGrey, lineHeight: '1.6' }}>
              Every member undergoes a comprehensive screening process. We ensure authenticity, career standing, and serious relationship intentions.
            </p>
          </div>

          {/* Feature 2 */}
          <div style={{ flex: '1 1 300px', textAlign: 'center', padding: '2rem', border: `1px solid ${colors.metallicGold}`, borderRadius: '8px', backgroundColor: 'white', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🥂</div>
            <h3 style={{ fontFamily: '"Cinzel", serif', color: colors.richRed, fontSize: '1.3rem', marginBottom: '1rem' }}>Exclusive Experiences</h3>
            <p style={{ fontFamily: '"Lato", sans-serif', color: colors.textGrey, lineHeight: '1.6' }}>
              From rooftop mixers in Victoria Island to private wine tastings in Enugu, we set the stage for romance in the city's finest venues.
            </p>
          </div>

          {/* Feature 3 */}
          <div style={{ flex: '1 1 300px', textAlign: 'center', padding: '2rem', border: `1px solid ${colors.metallicGold}`, borderRadius: '8px', backgroundColor: 'white', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💎</div>
            <h3 style={{ fontFamily: '"Cinzel", serif', color: colors.richRed, fontSize: '1.3rem', marginBottom: '1rem' }}>Bespoke Matchmaking</h3>
            <p style={{ fontFamily: '"Lato", sans-serif', color: colors.textGrey, lineHeight: '1.6' }}>
              No algorithms can replace human intuition. Our expert matchmakers hand-select introductions based on deep compatibility.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ marginTop: 'auto', backgroundColor: '#111', color: '#666', textAlign: 'center', padding: '2rem', fontSize: '0.9rem', fontFamily: '"Lato", sans-serif' }}>
        &copy; 2026 Meetadate. All Rights Reserved.
      </footer>
    </div>
  );
};

export default MeetUsPage;