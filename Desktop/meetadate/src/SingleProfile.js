import React, { useState, useEffect } from 'react';
import './SingleProfile.css'; // Importing the separated CSS

const SingleProfile = () => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // We use _embed to grab the Featured Image alongside the text data!
    fetch('http://localhost:10028/wp-json/wp/v2/profile?per_page=1&_embed')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setProfile(data[0]);
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Error fetching profile:", err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading Single of the Week...</p>;
  if (!profile) return <p>No featured single this week.</p>;


  return (
    <div className="single-profile-card">
      <div className="single-profile-badge">
        SINGLE OF THE WEEK
      </div>
      
<img 
  src={profile._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://via.placeholder.com/400x400?text=No+Profile+Pic"} 
  alt={profile.title.rendered} 
  className="single-profile-image"
/>
      
      <h3 className="single-profile-name" dangerouslySetInnerHTML={{ __html: profile.title.rendered }} />
      
      <p className="single-profile-details">
        {profile.acf?.city || "Unknown"} • {profile.acf?.profession || "Professional"}
      </p>
      
      <p className="single-profile-quote">
        "{profile.acf?.quote || "Looking for a genuine connection."}"
      </p>
      
      <button className="single-profile-btn">
        View Profile
      </button>
    </div>
  );
};

export default SingleProfile;