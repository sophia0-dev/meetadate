import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: '',
    profession: '',
    quote: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const colors = {
    deepWine: '#4a0404',
    metallicGold: '#c5a059',
    bgCream: '#fdfbf7',
    textDark: '#2a2a2a',
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // IMPORTANT: Replace with your actual WordPress Username and the Application Password you just copied
    const wpUsername = 'sophia0_dev'; 
    const wpAppPassword = 'SCgk hcpj cFR0 bd9Y vNu6 RDO1'; 
    
    // This encodes your credentials securely for the header
    const authString = btoa(`${wpUsername}:${wpAppPassword}`);

    // The Payload: Structuring the data for WordPress
    const postData = {
      title: formData.name,
      status: 'draft', // Saves as draft so they don't immediately go live!
      acf: {
        age: formData.age,
        city: formData.city,
        profession: formData.profession,
        quote: formData.quote
      }
    };

    fetch('http://localhost:10028/wp-json/wp/v2/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${authString}`
      },
      body: JSON.stringify(postData)
    })
    .then(res => {
      if (!res.ok) throw new Error('Failed to submit');
      return res.json();
    })
    .then(data => {
      setStatus('success');
      setFormData({ name: '', age: '', city: '', profession: '', quote: '' }); // Clear form
    })
    .catch(err => {
      console.error(err);
      setStatus('error');
    });
  };

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
          Join MeetADate
        </h2>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', color: 'green', fontFamily: '"Lato", sans-serif' }}>
            <h3 style={{ marginBottom: '1rem' }}>Application Received!</h3>
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

export default RegisterPage;