import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EventsPage = () => {
  const navigate = useNavigate();
  
  // --- REAL DATA STATES ---
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const colors = {
    deepWine: '#4a0404',
    richRed: '#880000',
    metallicGold: '#c5a059',
    softWhite: '#ffffff',
    bgCream: '#fdfbf7',
    textDark: '#2a2a2a'
  };

  // --- FETCH DATA FROM WORDPRESS ---
  useEffect(() => {
    fetch('https://meetadatenow.com/wp-json/wp/v2/event')
      .then(response => response.json())
      .then(data => {
        // Map the messy WordPress data into clean objects for our cards
        const liveEvents = data.map(wpEvent => ({
          id: wpEvent.id,
          title: wpEvent.title.rendered,
          // We use '?.' just in case a field was left blank in WordPress
          city: wpEvent.acf?.city || 'TBD',
          venue: wpEvent.acf?.venue || 'TBD',
          price: wpEvent.acf?.price || 'TBD',
          date: wpEvent.acf?.event_date || 'TBD'
        }));
        
        setEvents(liveEvents);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching events from WordPress:", error);
        setIsLoading(false);
      });
  }, []);

  // Hardcoded past events just to keep the page layout looking full for now
  const latestEvents = [
    { id: 3, city: "ENUGU", title: "New Year's Wine Tasting", date: "Jan 05, 2026", attendees: "120+ Singles" },
    { id: 4, city: "LAGOS", title: "Detty December Ball", date: "Dec 20, 2025", attendees: "250+ Singles" },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: colors.bgCream }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Great+Vibes&family=Lato:wght@300;400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0 !important; padding: 0 !important; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ padding: '1rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: colors.softWhite, borderBottom: `1px solid ${colors.metallicGold}` }}>
        <img src="https://i.ibb.co/DHrd5FkC/logo.jpg" alt="Logo" style={{ height: '70px', objectFit: 'contain' }} />
        <h2 style={{ fontFamily: '"Cinzel", serif', color: colors.deepWine, margin: 0 }}>Events Calendar</h2>
        
        <button 
          onClick={() => navigate("/")} 
          style={{
            background: 'transparent', border: `1px solid ${colors.deepWine}`, color: colors.deepWine,
            padding: '0.5rem 1.5rem', borderRadius: '50px', cursor: 'pointer', fontFamily: '"Cinzel", serif', fontWeight: 'bold'
        }}>
          Back to Home
        </button>
      </nav>

      {/* SECTION 1: INCOMING EVENTS (Upcoming - Now Live from WP!) */}
      <div style={{ padding: '4rem 5%', backgroundColor: colors.softWhite }}>
        <h2 style={{ fontFamily: '"Cinzel", serif', fontSize: '2.5rem', color: colors.richRed, borderBottom: `2px solid ${colors.metallicGold}`, display: 'inline-block', marginBottom: '2rem' }}>
         incoming Events
        </h2>
        
        {/* Conditional Rendering: Show loading text or the actual events */}
        {isLoading ? (
          <p style={{ fontFamily: '"Lato", sans-serif', fontSize: '1.2rem', color: colors.deepWine }}>Loading live events from database...</p>
        ) : events.length === 0 ? (
          <p style={{ fontFamily: '"Lato", sans-serif', fontSize: '1.2rem', color: '#666' }}>No upcoming events right now. Check back soon!</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {events.map(event => (
              <div key={event.id} style={{ border: `1px solid ${colors.metallicGold}`, borderRadius: '8px', padding: '2rem', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', backgroundColor: 'white' }}>
                <div style={{ color: colors.metallicGold, fontWeight: 'bold', letterSpacing: '2px', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{event.city}</div>
                
                {/* We use dangerouslySetInnerHTML for the title in case WordPress adds special character formatting like apostrophes */}
                <h3 style={{ fontFamily: '"Cinzel", serif', fontSize: '1.5rem', color: colors.deepWine, marginBottom: '1rem' }} dangerouslySetInnerHTML={{ __html: event.title }} />
                
                <p style={{ fontFamily: '"Lato", sans-serif', color: '#666', marginBottom: '0.5rem' }}>📅 {event.date}</p>
                <p style={{ fontFamily: '"Lato", sans-serif', color: '#666', marginBottom: '1.5rem' }}>📍 {event.venue}</p>
                <button style={{ backgroundColor: colors.deepWine, color: 'white', border: 'none', padding: '0.8rem 2rem', borderRadius: '50px', cursor: 'pointer', fontWeight: 'bold', transition: 'background-color 0.3s' }}
                        onMouseOver={e => e.currentTarget.style.backgroundColor = colors.richRed}
                        onMouseOut={e => e.currentTarget.style.backgroundColor = colors.deepWine}>
                  Book Seat - {event.price}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SECTION 2: LATEST EVENTS (Past) */}
      <div style={{ padding: '4rem 5%', backgroundColor: colors.bgCream }}>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: '"Cinzel", serif', fontSize: '2.5rem', color: colors.deepWine, borderBottom: `2px solid ${colors.metallicGold}`, display: 'inline-block' }}>
            Latest Events
          </h2>
          <p style={{ marginTop: '0.5rem', fontStyle: 'italic', color: '#555', fontFamily: '"Lato", sans-serif' }}>See what you missed!</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {latestEvents.map(event => (
            <div key={event.id} style={{ backgroundColor: '#eaddcf', borderRadius: '8px', padding: '2rem', textAlign: 'left', borderLeft: `4px solid ${colors.richRed}` }}>
              <h3 style={{ fontFamily: '"Cinzel", serif', fontSize: '1.3rem', color: colors.deepWine }}>{event.title}</h3>
              <p style={{ fontFamily: '"Lato", sans-serif', fontSize: '0.9rem', color: '#555', marginTop: '0.5rem' }}>Held on {event.date} in {event.city}</p>
              <p style={{ fontFamily: '"Lato", sans-serif', fontWeight: 'bold', color: colors.richRed, marginTop: '0.5rem' }}>{event.attendees} attended</p>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ marginTop: 'auto', backgroundColor: '#111', color: '#666', textAlign: 'center', padding: '2rem', fontSize: '0.9rem', fontFamily: '"Lato", sans-serif' }}>
        &copy; 2026 Meetadate. All Rights Reserved.
      </footer>
    </div>
  );
};

export default EventsPage;