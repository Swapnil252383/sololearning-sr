import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState(''); // New state for gender
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, mobile, gender }), // Include mobile and gender in the request
      });

      const data = await response.json(); // Parse the JSON response

      if (!response.ok) {
        throw new Error(data.error || 'Signup failed');
      }

      setSuccess(data.message); // Use the message from the response
      // Redirect to login page after successful signup
      setTimeout(() => {
        navigate('/login'); // Navigate to the login page
      }, 2000); // Optional: wait 2 seconds before redirecting

      // Clear form fields
      setName('');
      setEmail('');
      setPassword('');
      setMobile(''); // Clear mobile
      setGender(''); // Clear gender
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Full Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Mobile Number" 
          value={mobile} 
          onChange={(e) => setMobile(e.target.value)} 
          required 
        />
        <div className="gender-selection">
          <label>
            <input 
              type="radio" 
              value="male" 
              checked={gender === 'male'} 
              onChange={(e) => setGender(e.target.value)} 
              required 
            />
            Male
          </label>
          <label>
            <input 
              type="radio" 
              value="female" 
              checked={gender === 'female'} 
              onChange={(e) => setGender(e.target.value)} 
              required 
            />
            Female
          </label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <p>Already have an account? <a href="/login">Login here</a></p>
    </div>
  );
};

export default Signup;
