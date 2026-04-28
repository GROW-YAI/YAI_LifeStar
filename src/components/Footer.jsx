import React, { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing to our newsletter!');
      setEmail('');
    } else {
      alert('Please enter your email address.');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-about">
            <h4>About us</h4>
            <ul>
              <li>
                At LifeStar Innovation, we produce fuel from plastic waste.
              </li>
              <li>Phone: +233554883621</li>
              <li>Email: nsorrichard21@gmail.com</li>
            </ul>
          </div>
          <div className="footer-features">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Follow us</h4>
            <div className="social-icons">
              <a href="https://www.youtube.com/@nsor77" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.tiktok.com/@life.star62" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
          <div className="footer-subscribe">
            <h4>Subscribe Newsletter</h4>
            <form className="search" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn">Send</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2025 All rights reserved | LifeStar Innovation</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;