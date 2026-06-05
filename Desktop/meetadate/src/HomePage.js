import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SingleProfile from './SingleProfile'; // Importing your separated dynamic profile!

const HomePage = () => {
  const navigate = useNavigate();
  const [navState, setNavState] = useState("hero");
  
  // --- WORDPRESS LIVE DATA STATES ---
  const [liveEvents, setLiveEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- FETCH FROM WORDPRESS ---
  useEffect(() => {
    // Fetching the 3 most recent events for the "Upcoming Gatherings" section
    fetch('http://localhost:10028/wp-json/wp/v2/event?per_page=3&_embed')
      .then(res => res.json())
      .then(data => {
        setLiveEvents(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("WP Fetch Error:", err);
        setIsLoading(false);
      });
  }, []);

  // --- HANDLE SCROLL EFFECT ---
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isBottom = scrollY + windowHeight >= documentHeight - 600;

      if (isBottom) {
        setNavState("footer");
      } else if (scrollY > 150) { // Lowered to 150px so the transition triggers sooner!
        setNavState("body");
      } else {
        setNavState("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const colors = {
    deepWine: "#4a0404",
    richRed: "#880000",
    metallicGold: "#c5a059",
    softWhite: "#ffffff",
    bgCream: "#fdfbf7",
    textDark: "#2a2a2a",
    textGrey: "#666666",
  };

  // --- DYNAMIC TRANSITION VARIABLES ---
  const isScrolled = navState === "body" || navState === "footer";
  const navBgColor = isScrolled ? colors.softWhite : colors.richRed;
  const navTextColor = isScrolled ? colors.deepWine : colors.metallicGold;
  const buttonBgColor = isScrolled ? colors.deepWine : colors.softWhite;
  const buttonTextColor = isScrolled ? colors.softWhite : colors.deepWine;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: colors.bgCream }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Great+Vibes&family=Lato:wght@300;400;700&display=swap');
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { margin: 0 !important; padding: 0 !important; font-family: 'Lato', sans-serif; }
          .hover-scale:hover { transform: scale(1.05); transition: 0.3s; }
          .social-icon:hover { fill: ${colors.metallicGold} !important; transform: translateY(-3px); }
        `}
      </style>

      {/* NAVIGATION BAR WITH SMOOTH TOP TRANSITION */}
      <nav style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          padding: "0.5rem 5%", 
          backgroundColor: navBgColor, 
          borderBottom: `1px solid ${colors.metallicGold}`, 
          position: "sticky", 
          top: 0, 
          zIndex: 1000, 
          boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.15)" : "none", 
          transition: "all 0.5s ease" // Smooth transition for the whole bar
        }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="https://i.ibb.co/DHrd5FkC/logo.jpg" alt="Meetadate Logo" style={{ height: "90px", objectFit: "contain", transition: "all 0.5s ease" }} />
        </div>
        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          {["Meet Us", "LoveNotes", "Events", "Gallery"].map((item) => (
            <button key={item} onClick={() => navigate(`/${item.toLowerCase().replace(" ", "")}`)} style={{ 
                background: "none", 
                border: "none", 
                fontFamily: '"Cinzel", serif', 
                fontSize: "1rem", 
                color: navTextColor, 
                cursor: "pointer", 
                fontWeight: "600", 
                transition: "color 0.5s ease" // Smooth transition for text
              }}>
              {item}
            </button>
          ))}
          <button onClick={() => navigate("/register")} style={{ 
              backgroundColor: buttonBgColor, 
              color: buttonTextColor, 
              border: "none", 
              padding: "0.7rem 2rem", 
              borderRadius: "50px", 
              fontFamily: '"Cinzel", serif', 
              fontWeight: "bold", 
              cursor: "pointer", 
              boxShadow: isScrolled ? "0 4px 10px rgba(0, 0, 0, 0.2)" : "0 4px 10px rgba(74, 4, 4, 0.3)", 
              transition: "all 0.5s ease" // Smooth transition for the register button
            }}>
            Register
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header style={{ textAlign: "center", background: `linear-gradient(180deg, ${colors.richRed} 0%, ${colors.deepWine} 100%)`, color: "white", padding: "8rem 1rem", position: "relative", overflow: "hidden" }}>
        <h1 style={{ fontFamily: '"Great Vibes", cursive', fontSize: "5rem", margin: 0, color: colors.metallicGold, textShadow: "2px 2px 10px rgba(0,0,0,0.5)", lineHeight: "1.2" }}>
          {liveEvents[0] ? `Join us for the ${liveEvents[0].title.rendered}` : "Welcome to Meetadate"}
        </h1>
        <p style={{ marginTop: "1.5rem", fontSize: "1.5rem", opacity: "0.9", maxWidth: "700px", margin: "1.5rem auto 0.5rem auto", fontWeight: "380", letterSpacing: "0.5px" }}>
          The premier community for singles in Nigeria.
        </p>
        <button onClick={() => navigate("/events")} className="hover-scale" style={{ marginTop: "3rem", backgroundColor: colors.metallicGold, color: colors.deepWine, border: "none", padding: "1.2rem 3.5rem", fontSize: "1.2rem", fontFamily: '"Cinzel", serif', fontWeight: "bold", borderRadius: "50px", cursor: "pointer", boxShadow: "0 0 20px rgba(197, 160, 89, 0.5)" }}>
          View All Events
        </button>
      </header>

      {/* VALUE PROP SECTION & SINGLE OF THE WEEK GRID */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 5%", display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "4rem", alignItems: "center" }}>
        
        {/* Left Side: Value Prop Text */}
        <div>
          <h2 style={{ fontFamily: '"Cinzel", serif', color: colors.deepWine, fontSize: "2.5rem", marginBottom: "1.5rem" }}>Not Just A Dating Site, <br />A Lifestyle.</h2>
          <p style={{ lineHeight: "1.8", color: colors.textGrey, fontSize: "1.1rem", marginBottom: "2rem" }}>
            Meetadate offers professionals a chance to meet in settings that encourage safe, fun, and genuine interactions.
          </p>
        </div>
        
        {/* Right Side: Dynamic Single of the Week */}
        <SingleProfile />
        
      </div>

      {/* UPCOMING GATHERINGS */}
      <section style={{ padding: "5rem 5%", backgroundColor: colors.deepWine, color: "white", textAlign: "center" }}>
        <h2 style={{ fontFamily: '"Cinzel", serif', fontSize: "2.5rem", marginBottom: "3rem", color: colors.metallicGold }}>Upcoming Gatherings</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          {isLoading ? (
            <p style={{ fontFamily: '"Lato", sans-serif', fontSize: "1.2rem" }}>Fetching the latest mixers...</p>
          ) : liveEvents.length === 0 ? (
            <p style={{ fontFamily: '"Lato", sans-serif', fontSize: "1.2rem" }}>Check back soon for new events!</p>
          ) : (
            liveEvents.map((event) => (
              <div key={event.id} className="hover-scale" style={{ backgroundColor: "white", width: "320px", borderRadius: "4px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
                <div style={{ backgroundColor: colors.metallicGold, padding: "1rem", color: colors.deepWine, fontFamily: '"Cinzel", serif', fontWeight: "bold", letterSpacing: "2px" }}>
                  {event.acf?.city ? event.acf.city.toUpperCase() : "NIGERIA"}
                </div>
                <div style={{ padding: "2rem", color: colors.textDark }}>
                  <img 
                     src={event._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://via.placeholder.com/400x200?text=Event+Flyer"} 
                     alt="Event Flyer" 
                     style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "4px", marginBottom: "1rem" }} 
                 />
                  <h3 style={{ fontFamily: '"Cinzel", serif', fontSize: "1.4rem", color: colors.richRed, marginBottom: "0.5rem" }} dangerouslySetInnerHTML={{ __html: event.title.rendered }} />
                  <p style={{ fontSize: "0.9rem", color: "#888", marginBottom: "0.5rem" }}>📅 {event.acf?.event_date || "Coming Soon"}</p>
                  <p style={{ fontSize: "0.9rem", color: colors.textGrey, marginBottom: "1.5rem" }}>📍 {event.acf?.venue || "Exclusive Venue"}</p>
                  <button onClick={() => navigate("/events")} style={{ border: `1px solid ${colors.deepWine}`, background: "transparent", color: colors.deepWine, padding: "0.5rem 1.5rem", borderRadius: "50px", cursor: "pointer", fontWeight: "bold" }}>
                    Details - {event.acf?.price || "Contact Us"}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ marginTop: "auto", backgroundColor: "#1a0101", color: "#888", padding: "3rem 5%", textAlign: "center" }}>
        <img src="https://i.ibb.co/DHrd5FkC/logo.jpg" alt="Logo" style={{ height: "60px", opacity: "0.8", marginBottom: "1rem" }} />
        <p>&copy; 2026 Meetadate. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;