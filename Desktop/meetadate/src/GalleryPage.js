import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GalleryPage = () => {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const colors = {
    deepWine: '#4a0404',
    richRed: '#880000',
    metallicGold: '#c5a059',
    softWhite: '#ffffff',
    bgCream: '#fdfbf7',
    textDark: '#2a2a2a',
  };

  useEffect(() => {
    // Fetching the gallery photos WITH the embedded images
    fetch('https://meetadatenow.com/wp-json/wp/v2/gallery?_embed')
      .then(res => res.json())
      .then(data => {
        setPhotos(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Error fetching gallery:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: colors.bgCream }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Great+Vibes&family=Lato:wght@300;400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0 !important; padding: 0 !important; }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          padding: 4rem 5%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .gallery-item {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          border: 2px solid ${colors.metallicGold};
          background: #000;
          aspect-ratio: 4 / 3;
        }

        .gallery-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.3);
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.85;
          transition: opacity 0.4s ease, transform 0.6s ease;
        }

        .gallery-item:hover .gallery-image {
          opacity: 0.4;
          transform: scale(1.1);
        }

        .gallery-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          width: 90%;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ padding: '1rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: colors.softWhite, borderBottom: `1px solid ${colors.metallicGold}` }}>
        <img src="https://i.ibb.co/DHrd5FkC/logo.jpg" alt="Logo" style={{ height: '70px', objectFit: 'contain' }} />
        <button 
          onClick={() => navigate("/")} 
          style={{
            background: 'transparent', border: `1px solid ${colors.deepWine}`, color: colors.deepWine,
            padding: '0.5rem 1.5rem', borderRadius: '50px', cursor: 'pointer', fontFamily: '"Cinzel", serif', fontWeight: 'bold'
        }}>
          Back to Home
        </button>
      </nav>

      {/* HEADER */}
      <header style={{ textAlign: 'center', padding: '5rem 2rem', background: `linear-gradient(to bottom, ${colors.deepWine}, ${colors.richRed})`, color: 'white' }}>
        <h1 style={{ fontFamily: '"Great Vibes", cursive', fontSize: '4.5rem', color: colors.metallicGold, margin: 0 }}>
          Event Gallery
        </h1>
        <p style={{ fontFamily: '"Cinzel", serif', fontSize: '1.2rem', marginTop: '1rem', letterSpacing: '2px' }}>
          MOMENTS OF GENUINE CONNECTION
        </p>
      </header>

      {/* PHOTO GRID */}
      {isLoading ? (
        <p style={{ textAlign: 'center', padding: '5rem', fontFamily: '"Cinzel", serif', fontSize: '1.5rem', color: colors.deepWine }}>Loading memories...</p>
      ) : photos.length === 0 ? (
        <p style={{ textAlign: 'center', padding: '5rem', fontFamily: '"Cinzel", serif', fontSize: '1.5rem', color: colors.textDark }}>No photos uploaded yet. Check back after our next event!</p>
      ) : (
        <div className="gallery-grid">
          {photos.map(photo => {
            // Safely grab the embedded photo URL
            const imageUrl = photo._embedded?.['wp:featuredmedia']?.[0]?.source_url 
                             || "https://via.placeholder.com/400x300?text=No+Image";
                             
            return (
              <div key={photo.id} className="gallery-item">
                <img src={imageUrl} alt={photo.title.rendered} className="gallery-image" />
                
                <div className="gallery-overlay">
                  <h3 style={{ fontFamily: '"Cinzel", serif', color: colors.metallicGold, fontSize: '1.5rem', marginBottom: '0.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }} dangerouslySetInnerHTML={{ __html: photo.title.rendered }} />
                  <p style={{ fontFamily: '"Lato", sans-serif', color: colors.softWhite, fontSize: '1rem', fontWeight: 'bold', letterSpacing: '2px', textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                    📍 {photo.acf?.city ? photo.acf.city.toUpperCase() : "EXCLUSIVE EVENT"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* FOOTER */}
      <footer style={{ marginTop: 'auto', backgroundColor: '#111', color: '#666', textAlign: 'center', padding: '2rem', fontSize: '0.9rem', fontFamily: '"Lato", sans-serif' }}>
        &copy; 2026 Meetadate. All Rights Reserved.
      </footer>
    </div>
  );
};

export default GalleryPage;