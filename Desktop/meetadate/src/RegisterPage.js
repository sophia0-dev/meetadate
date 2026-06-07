import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const navigate = useNavigate();

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
    setErrorMessage('');

    // Your Admin API Credentials
    const wpUsername = 'sophia0_dev'; 
    const wpAppPassword = 'SCgk hcpj cFR0 bd9Y vNu6 RDO1'; 
    const authString = btoa(`${wpUsername}:${wpAppPassword}`);

    // The Payload for creating a core User account
    const postData = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      roles: ['subscriber'] // Standard role so they don't get admin access!
    };

    fetch('https://api.meetadatenow.com/wp-json/wp/v2/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${authString}`
      },
      body: JSON.stringify(postData)
    })
    .then(async (res) => {
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Failed to create account');
      }
      return data;
    })
    .then(data => {
      setStatus('success');
      // Success! Send them to Step 2 and pass along their new User ID
      navigate('/profile-setup', { state: { userId: data.id } }); 
    })
    .catch(err => {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message);
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

      <div style={{ maxWidth: '500px', width: '100%', backgroundColor: 'white', padding: '3rem', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderTop: `5px solid ${colors.deepWine}` }}>
        <h2 style={{ fontFamily: '"Cinzel", serif', color: colors.deepWine, textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>
          Create Account
        </h2>

        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Choose a Username" value={formData.username} onChange={handleChange} required className="form-input" />
          
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="form-input" />
          
          <input type="password" name="password" placeholder="Create Password" value={formData.password} onChange={handleChange} required className="form-input" />

          <button type="submit" disabled={status === 'submitting'} style={{ width: '100%', padding: '1rem', backgroundColor: colors.metallicGold, color: colors.deepWine, border: 'none', borderRadius: '50px', fontSize: '1.2rem', fontFamily: '"Cinzel", serif', fontWeight: 'bold', cursor: status === 'submitting' ? 'not-allowed' : 'pointer', transition: 'background-color 0.3s' }}>
            {status === 'submitting' ? 'Creating Account...' : 'Continue to Profile'}
          </button>
          
          {status === 'error' && <p style={{ color: 'red', textAlign: 'center', marginTop: '1rem' }}>{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};
export default RegisterPage;
