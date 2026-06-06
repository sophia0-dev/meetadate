import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoveNotesPage = () => {
  const navigate = useNavigate();
  
  // --- LIVE DATA STATES ---
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  // --- FETCH LOVENOTES FROM WORDPRESS ---
// --- FETCH LOVENOTES FROM WORDPRESS ---
  useEffect(() => {
    fetch('https://meetadatenow.com/wp-json/wp/v2/lovenote?_embed')
      .then(response => response.json())
      .then(data => {
        const liveStories = data.map(wpNote => ({
          id: wpNote.id,
          names: `${wpNote.acf?.from || 'User'} & ${wpNote.acf?.to || 'User'}`,
          city: "MeetADate Match",
         
          quote: wpNote.title.rendered,

          story: wpNote.content.rendered.replace(/<[^>]*>?/gm, ''), // Strips HTML tags
          
          image: wpNote._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?auto=format&fit=crop&w=800&q=80"
        }));
        
        setStories(liveStories);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching LoveNotes:", error);
        setIsLoading(false);
      });
  }, []);

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
      <header style={{ textAlign: 'center', padding: '6rem 2rem', background: `linear-gradient(to right, ${colors.deepWine}, ${colors.richRed})`, color: 'white' }}>
        <h1 style={{ fontFamily: '"Great Vibes", cursive', fontSize: '4.5rem', color: colors.metallicGold, margin: 0 }}>
          LoveNotes
        </h1>
        <p style={{ fontFamily: '"Cinzel", serif', fontSize: '1.2rem', marginTop: '1rem', letterSpacing: '2px', opacity: 0.9 }}>
          REAL CONNECTIONS. BEAUTIFUL BEGINNINGS.
        </p>
      </header>

      {/* SUCCESS STORIES SECTION */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '5rem 2rem' }}>
        {isLoading ? (
          <p style={{ textAlign: 'center', fontFamily: '"Cinzel", serif', color: colors.deepWine }}>Loading stories of love...</p>
        ) : stories.length === 0 ? (
          <p style={{ textAlign: 'center', fontFamily: '"Cinzel", serif', color: colors.textGrey }}>Your love story could be the next one here!</p>
        ) : (
          stories.map((story, index) => (
            <div key={story.id} style={{ 
              display: 'flex', 
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', 
              alignItems: 'center', 
              gap: '3rem', 
              marginBottom: '6rem',
              flexWrap: 'wrap'
            }}>
              
              {/* Image Side */}
              <div style={{ flex: 1, minWidth: '300px' }}>
                <div style={{ border: `2px solid ${colors.metallicGold}`, padding: '10px', backgroundColor: 'white', transform: index % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)' }}>
                  <img src={story.image} alt={story.names} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                </div>
              </div>

              {/* Text Side */}
              <div style={{ flex: 1, minWidth: '300px' }}>
                <h4 style={{ fontFamily: '"Cinzel", serif', color: colors.metallicGold, letterSpacing: '2px', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  {story.city.toUpperCase()}
                </h4>
                <h2 style={{ fontFamily: '"Cinzel", serif', color: colors.deepWine, fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                  {story.names}
                </h2>
                <p style={{ fontFamily: '"Great Vibes", cursive', color: colors.richRed, fontSize: '2rem', lineHeight: '1.2', marginBottom: '1.5rem' }}>
                  "{story.quote}"
                </p>
                <p style={{ fontFamily: '"Lato", sans-serif', color: colors.textGrey, fontSize: '1.1rem', lineHeight: '1.8' }}>
                  {story.story}
                </p>
              </div>
            </div>
          ))
        )}
      </section>

      {/* CALL TO ACTION */}
      <div style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: 'white', borderTop: `1px solid ${colors.metallicGold}` }}>
        <h2 style={{ fontFamily: '"Cinzel", serif', color: colors.deepWine, fontSize: '2rem', marginBottom: '1.5rem' }}>
          Ready to write your own LoveNote?
        </h2>
        <button 
          onClick={() => navigate("/register")}
          style={{
          backgroundColor: colors.metallicGold, color: colors.deepWine, border: 'none', padding: '1rem 3rem',
          fontSize: '1.1rem', fontFamily: '"Cinzel", serif', fontWeight: 'bold', borderRadius: '50px', cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(197, 160, 89, 0.4)'
        }}>
          Apply for Membership
        </button>
      </div>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#111', color: '#666', textAlign: 'center', padding: '2rem', fontSize: '0.9rem', fontFamily: '"Lato", sans-serif' }}>
        &copy; 2026 Meetadate. All Rights Reserved.
      </footer>
    </div>
  );
};

export default LoveNotesPage;