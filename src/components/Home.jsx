import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // CSS for Home page

const Home = () => {
  const [dynamicText, setDynamicText] = useState('Learn ReactJS');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDynamicText((prev) =>
        prev === 'Learn ReactJS' ? 'Learn Java Full Stack' : 'Learn ReactJS'
      );
    }, 1000); // Switch text every 1 second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home">
      <header className="hero-section">
        <h1>Welcome to Sololearn-SR</h1>
        <h2>{dynamicText}</h2>
        <Link to="/courses" className="explore-button">
          Explore Courses
        </Link>
      </header>

      <section className="blogs">
        <div className="blog">
          <img
            src="data:image/jpeg;base64,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"
            alt="Join WhatsApp"
            className="blog-image"
          />
          <div className="blog-content">
            <h3>Join our WhatsApp Group</h3>
            <p>Stay connected and updated on all course releases and more. Join our community and grow together!</p>
            <a 
              href="https://chat.whatsapp.com/H7ddIDphEJA0Ed3qk0aIsYq" 
              className="blog-button" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Join WhatsApp
            </a>
          </div>
        </div>

        <div className="blog">
          <img
            src="data:image/png;base64,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"
            alt="Join YouTube"
            className="blog-image"
          />
          <div className="blog-content">
            <h3>Subscribe to our YouTube Channel</h3>
            <p>Get video tutorials and project walkthroughs. Subscribe to stay updated on our latest videos!</p>
            <a 
              href="https://www.youtube.com/@SR-coder25" 
              className="blog-button" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
