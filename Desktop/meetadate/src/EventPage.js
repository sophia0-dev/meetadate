import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventPage = () => {
  const navigate = useNavigate();
  const colors = {
    deepWine: '#4a0404',
    richRed: '#880000', // Matches your Logo
    metallicGold: '#c5a059',
    softWhite: '#ffffff',
    bgCream: '#fdfbf7',
    textDark: '#2a2a2a'
  };

  // DUMMY DATA: Event Photos
  // I used generic luxury party photos. You can replace these links later.
  const pastEvents = [
    {
      id: 1,
      city: "LAGOS",
      title: "The Island Rooftop Mixer",
      date: "Dec 14, 2025",
      image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      city: "ABUJA",
      title: "Gold & Velvet Gala",
      date: "Nov 20, 2025",
      image: "https://images.unsplash.com/photo-1519671482502-9759101d4561?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      city: "ENUGU",
      title: "Wine Tasting Evening",
      date: "Jan 05, 2026",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      city: "LAGOS",
      title: "Speed Dating & Cocktails",
      date: "Oct 10, 2025",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      city: "PORT HARCOURT",
      title: "The Garden City Ball",
      date: "Sep 15, 2025",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      city: "ABUJA",
      title: "Private Jazz Night",
      date: "Aug 22, 2025",
      image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: colors.bgCream }}>
      
      {/* GLOBAL STYLES */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Great+Vibes&family=Lato:wght@300;400;700&display=swap');
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { margin: 0 !important; padding: 0 !important; }
        `}
      </style>

      {/* NAVIGATION */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 5%', 
        backgroundColor: colors.softWhite, borderBottom: `1px solid ${colors.metallicGold}`, position: 'sticky', top: 0, zIndex: 100
      }}>
        <img src="https://i.ibb.co/DHrd5FkC/logo.jpg" alt="Logo" style={{ height: '80px', objectFit: 'contain' }} />
<button 
          onClick={() => navigate("/")} // <-- ADD THIS ONCLICK
          style={{
          background: 'transparent', border: `1px solid ${colors.deepWine}`, color: colors.deepWine,
          padding: '0.5rem 1.5rem', borderRadius: '50px', cursor: 'pointer', fontFamily: '"Cinzel", serif', fontWeight: 'bold'
        }}>
          Back to Home
        </button>
      </nav>

      {/* HEADER SECTION */}
      <header style={{
        textAlign: 'center',
        padding: '5rem 1rem',
        background: `linear-gradient(180deg, ${colors.deepWine} 0%, ${colors.richRed} 100%)`,
        color: 'white'
      }}>
        <h1 style={{ fontFamily: '"Great Vibes", cursive', fontSize: '4.5rem', color: colors.metallicGold, margin: 0 }}>
          Unforgettable Moments
        </h1>
        <p style={{ fontFamily: '"Lato", sans-serif', marginTop: '1rem', fontSize: '1.2rem', opacity: 0.9 }}>
          A glimpse into our exclusive gatherings across Nigeria.
        </p>
      </header>

      {/* PHOTO GALLERY SECTION */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1rem' }}>
        
        {/* Gallery Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', // Responsive Columns
          gap: '2.5rem' 
        }}>
          
          {pastEvents.map((event) => (
            <div key={event.id} style={{
              backgroundColor: 'white',
              padding: '1rem', // Creates the "Polaroid" frame effect
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              transform: 'rotate(-1deg)', // Slight rotation for a "photo album" look
              transition: 'transform 0.3s ease'
            }}>
              
              {/* IMAGE CONTAINER */}
              <div style={{
                height: '250px',
                overflow: 'hidden',
                border: `1px solid ${colors.metallicGold}`,
                marginBottom: '1rem'
              }}>
                <img 
                  src={event.image} 
                  alt={event.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>

              {/* EVENT DETAILS */}
              <div style={{ textAlign: 'center' }}>
                <span style={{ 
                  display: 'block', 
                  fontFamily: '"Cinzel", serif', 
                  color: colors.richRed, 
                  fontWeight: 'bold', 
                  letterSpacing: '2px', 
                  fontSize: '0.9rem' 
                }}>
                  {event.city}
                </span>
                
                <h3 style={{ 
                  fontFamily: '"Lato", sans-serif', 
                  fontWeight: '700', 
                  color: '#333', 
                  margin: '0.5rem 0',
                  fontSize: '1.2rem'
                }}>
                  {event.title}
                </h3>
                
                <p style={{ 
                  fontFamily: '"Lato", sans-serif', 
                  color: '#888', 
                  fontSize: '0.9rem', 
                  fontStyle: 'italic' 
                }}>
                  {event.date}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* Call to Action at Bottom */}
        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
          <h2 style={{ fontFamily: '"Cinzel", serif', color: colors.deepWine, marginBottom: '1.5rem' }}>
            Want to be in the next photo?
          </h2>
          <button style={{
            backgroundColor: colors.metallicGold,
            color: colors.deepWine,
            border: 'none',
            padding: '1rem 3rem',
            fontSize: '1.1rem',
            fontFamily: '"Cinzel", serif',
            fontWeight: 'bold',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(197, 160, 89, 0.4)'
          }}>
            Register for Upcoming Event
          </button>
        </div>

      </div>

      {/* FOOTER */}
      <footer style={{ marginTop: 'auto', backgroundColor: '#111', color: '#666', textAlign: 'center', padding: '2rem', fontSize: '0.9rem' }}>
        &copy; 2026 Meetadate. All Rights Reserved.
      </footer>
    </div>
  );
};

export default EventPage;