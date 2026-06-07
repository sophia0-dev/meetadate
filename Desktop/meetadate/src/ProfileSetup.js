import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ProfileSetup = () => {
  const [formData, setFormData] = useState({ name: '', age: '', city: '', profession: '', quote: '' });
  const [status, setStatus] = useState('idle');
  
  const navigate = useNavigate();
  const location = useLocation();

  // This safely grabs the userId passed from the RegisterPage!
  const userId = location.state?.userId;

  // Security check: If they somehow got here without creating an account, send them back
  useEffect(() => {
    if (!userId) {
      navigate('/register'); 
    }
  }, [userId, navigate]);

  const colors = { bgCream: '#F9F6F0', metallicGold: '#C5A059', deepWine: '#722F37' };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Your Admin API Credentials
    const wpUsername = 'sophia0_dev'; 
    const wpAppPassword = 'SCgk hcpj cFR0 bd9Y vNu6 RDO1'; 
    const authString = btoa(`${wpUsername}:${wpAppPassword}`);

    // The Payload: Notice we are adding 'author: userId' to explicitly link this profile
    // to the brand new account in the database!
    const postData = {
      title: formData.name,
      status: 'draft', 
      author: userId, 
      acf: {
        age: formData.age,
        city: formData.city,
        profession: formData.profession,
        quote: formData.quote
      }
    };

    fetch('https://api.meetadatenow.com/wp-json/wp/v2/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${authString}`
      },
      body: JSON.stringify(postData)
    })
    .then(res => {
      if (!res.ok) throw new Error('Failed to submit profile');
      return res.json();
    })
    .then(data => {
      setStatus('success');
      setFormData({ name: '', age: '', city: '', profession: '', quote: '' });
    })
    .catch(err => {
      console.error(err);
      setStatus('error');
    });
  };

  if (!userId) return null; // Prevents rendering if redirecting

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: colors.bgCream, alignItems: 'center', padding: '4rem 1rem' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Lato:wght@300;400;700&display=swap');
        .form-input {
          width: 100%; padding: 1rem; margin-bottom: 1.5rem;
          border: 1px solid #ccc; border-radius: 4px;
          font-family: 'Lato', sans-serif; font-size: 1rem;
        }
        .form-input:focus {
          outline: none; border-color: ${colors.metallicGold}; box-shadow: 0 0 5px rgba(197, 160, 89, 0.5);
        }
      `}</style>

      <div style={{ maxWidth: '600px', width: '100%', backgroundColor: 'white', padding: '3rem', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderTop: `5px solid ${colors.deepWine}` }}>
        <h2 style={{ fontFamily: '"Cinzel", serif', color: colors.deepWine, textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>
          Build Your Profile
        </h2>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', color: 'green', fontFamily: '"Lato", sans-serif' }}>
            <h3 style={{ marginBottom: '1rem', color: colors.deepWine }}>Application Received!</h3>
            <p>Our team will review your profile. You can now close this page.</p>
            <button onClick={() => navigate('/')} style={{ marginTop: '2rem', padding: '0.8rem 2rem', backgroundColor: colors.deepWine, color: 'white', border: 'none', borderRadius: '50px', cursor: 'pointer', fontFamily: '"Cinzel", serif' }}>Return Home</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="form-input" />
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required className="form-input" style={{ flex: 1 }} />
              <input type="text" name="city" placeholder="City (e.g., Abuja)" value={formData.city} onChange={handleChange} required className="form-input" style={{ flex: 2 }} />
            </div>

            <input type="text" name="profession" placeholder="Profession" value={formData.profession} onChange={handleChange} required className="form-input" />
            
            <textarea name="quote" placeholder="A short quote about what you're looking for..." value={formData.quote} onChange={handleChange} required className="form-input" rows="4" />

            <button type="submit" disabled={status === 'submitting'} style={{ width: '100%', padding: '1rem', backgroundColor: colors.metallicGold, color: colors.deepWine, border: 'none', borderRadius: '50px', fontSize: '1.2rem', fontFamily: '"Cinzel", serif', fontWeight: 'bold', cursor: status === 'submitting' ? 'not-allowed' : 'pointer', transition: 'background-color 0.3s' }}>
              {status === 'submitting' ? 'Submitting...' : 'Submit Profile'}
            </button>
            
            {status === 'error' && <p style={{ color: 'red', textAlign: 'center', marginTop: '1rem' }}>Something went wrong. Please try again.</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default ProfileSetup;