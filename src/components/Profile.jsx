// src/component/Profile.js
import React, { useState, useContext } from 'react';
import { useAuth } from '../context/AuthContext'; // Importing the custom hook
import { useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile() {
    const { logout, username,} = useAuth(); // Access logout and username from AuthContext
    const navigate = useNavigate();

    // Adding state for gender and phone number
    const [fullName, setFullName] = useState(username || "John Doe");
    const [email, setEmail] = useState(username+"@example.com");
    const [role, setRole] = useState("Student");
    const [bio, setBio] = useState("A passionate learner.");
    const [gender, setGender] = useState("Male"); // Default value
    const [phone, setPhone] = useState("123-456-7890"); // Default value

    const handleLogout = () => {
        logout();
        navigate('/login'); // Redirect to the login page
    };

    return (
        <div className="profile-container">
            {/* User Details */}
            <div className="user-details">
                <h2>{fullName}</h2>
                <p className="email">{email}</p>
                <p><strong>Role:</strong> {role}</p>
                <p className="bio">{bio}</p>
                {/* <p><strong>Gender:</strong> {gender}</p> 

                <p><strong>Phone No:</strong> {phone}</p>  */}
            </div>

            {/* Progress Section */}
            <div className="progress-section">
                <h3>Course Progress</h3>
                <div className="progress-bar">
                    <label>Course 1</label>
                    <div className="progress">
                        <div className="progress-complete" style={{ width: "70%" }}></div>
                    </div>
                </div>
                <div className="progress-bar">
                    <label>Course 2</label>
                    <div className="progress">
                        <div className="progress-complete" style={{ width: "50%" }}></div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
                <button className="delete-account-btn" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}

export default Profile;
