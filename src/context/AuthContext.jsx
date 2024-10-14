// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');

    // Check for saved authentication status in local storage on initial load
    useEffect(() => {
        const savedAuth = localStorage.getItem('isAuthenticated');
        const savedUsername = localStorage.getItem('username');
        if (savedAuth === 'true') {
            setIsAuthenticated(true);
            setUsername(savedUsername);
        }
    }, []);

    // Login function
    const login = (user) => {
        setIsAuthenticated(true);
        setUsername(user);
        localStorage.setItem('isAuthenticated', 'true'); // Ensure the value is a string
        localStorage.setItem('username', user); // Store username in local storage
    };

    // Logout function
    const logout = () => {
        setIsAuthenticated(false);
        setUsername('');
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('username');
    };

    // Provide context values to children
    return (
        <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};
