import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css'; // CSS for Contact page

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/contact', {
        name,
        email,
        message,
      });
      alert(response.data.message);
      // Clear form fields after successful submission
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting message:', error);
      alert('Error submitting message. Please try again later.');
    }
  };

  return (
    <div className="contact-container">
      <h1>Feel Free to Contact Me!</h1>
      <div className="contact-avatar">
        <img src="https://yt3.googleusercontent.com/rXRlLWPFMc6wVRBsJrKWVraS4HLMmXppPp4LEgdVTapimMnmx0mj8PczPB--l32E_BfQzrDT=s160-c-k-c0x00ffffff-no-rj" alt="Profile" />
      </div>
      <div className="contact-social">
        <a href="https://chat.whatsapp.com/H7ddIDphEJA0Ed3qk0aIsYq" target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://www.youtube.com/@SR-coder25" target="_blank" rel="noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://www.linkedin.com/in/swapnil-rupnar-a2a8b1304/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/Swapnil252383/" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
