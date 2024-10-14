// Login.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Import useAuth
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Login.css';

const Login = () => {
    const { login } = useAuth(); // Access login from context
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Login failed');
            }

            const data = await response.json();
            login(data.username); // Call login from context
            setSuccess(`Welcome, ${data.username}!`);

            // Navigate to the Profile page after successful login
            navigate('/profile');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login-container">
            {!success ? (
                <>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
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
                        <button type="submit">Login</button>
                    </form>
                    {error && <p className="error">{error}</p>}
                    <p>Don't have an account? <a href="/signup">Sign up here</a></p>
                </>
            ) : (
                <div>
                    <h3>{success}</h3>
                    <p>
                        <button onClick={() => navigate('/profile')}>Go to Profile</button>
                        <button onClick={() => navigate('/courses')}>View Courses</button>
                        <button onClick={() => navigate('/')}>Home Page</button>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Login;
