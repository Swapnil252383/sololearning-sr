// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './components/Home';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import CourseDetails from './components/CourseDetails';
import { AuthProvider, useAuth } from './context/AuthContext'; // Import AuthContext

// ProtectedRoute component to restrict access to authenticated users
function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route 
                        path="/profile" 
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        } 
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/course/:courseId" element={<CourseDetails />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
