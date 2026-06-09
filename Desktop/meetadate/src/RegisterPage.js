import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  
  // States to control loading buttons and the success screen
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Pointing directly to the custom, secure WordPress endpoint you built
const response = await fetch('https://api.meetadatenow.com/wp-json/wp/v2/users/register', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password
        })
      });

      // If WordPress rejects it (e.g., email already taken), catch the error
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to register user");
      }

      const userData = await response.json();
      console.log("Successfully registered securely!", userData);

      localStorage.setItem('meetadate_user', JSON.stringify({ username: formData.username }));
      
      setIsLoading(false);
      setIsRegistered(true); // This instantly swaps the form for the gold checkmark!

    } catch (error) {
      console.error("Registration Error:", error.message);
      alert(`Registration Failed: Username or Email may already exist.`); 
      setIsLoading(false);
    }
  };

  // --- THE SUCCESS SCREEN ---
  if (isRegistered) {
    return (
      <div className="register-container">
        <div className="register-card success-card">
          <div className="success-icon-wrapper">
            <svg className="success-icon" viewBox="0 0 24 24" fill="none" stroke="#CCA550" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          
          <h2 className="success-title">Welcome to the Club!</h2>
          <p className="success-message">
            You have successfully registered.<br/>
            Your journey to meaningful connections starts now.
          </p>
          
          <Link to="/" className="btn-success-home">EXPLORE THE HOMEPAGE &rarr;</Link>
        </div>
      </div>
    );
  }

  // --- THE REGISTRATION FORM ---
  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">CREATE ACCOUNT</h2>
        
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            name="username"
            placeholder="Choose a Username"
            value={formData.username}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
          
          <button type="submit" className="btn-register" disabled={isLoading}>
            {isLoading ? "CONNECTING..." : "REGISTER"}
          </button>

          <p className="auth-switch-text">
            Already have an account? <Link to="/login" className="auth-switch-link">Login here</Link>
          </p>
          
        </form>
        
      </div>
    </div>
  );
};

export default RegisterPage;