import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegisterPage.css'; // We can safely reuse the exact same CSS file!

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg(''); // Clear error when they start typing again
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Pointing to your brand new login API endpoint
      const response = await fetch('https://api.meetadatenow.com/wp-json/wp/v2/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Invalid username or password");
      }

      const userData = await response.json();
      
      // Save the user to the browser's memory, just like registration
      localStorage.setItem('meetadate_user', JSON.stringify({ username: userData.username }));
      
      setIsLoading(false);
      
      // Instantly sweep them back to the home page!
      navigate('/');
      
      // Force the Navbar to refresh and show "LOGOUT"
      window.location.reload(); 

    } catch (error) {
      setErrorMsg(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">WELCOME BACK</h2>
        
        {errorMsg && <p style={{ color: 'red', fontSize: '14px', marginBottom: '15px' }}>{errorMsg}</p>}
        
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
          
          <button type="submit" className="btn-register" disabled={isLoading}>
            {isLoading ? "VERIFYING..." : "LOGIN"}
          </button>

<p className="auth-switch-text">
            Don't have an account? <Link to="/register" className="auth-switch-link">Register here</Link>
          </p>
          
        </form>
        
      </div>
    </div>
  );
};

export default LoginPage;