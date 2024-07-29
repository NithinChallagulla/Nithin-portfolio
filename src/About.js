import React from 'react';
import './About.css';
import aboutPhoto from './aboutPhoto.jpg'; // Ensure this path is correct
import backgroundImage from './backgroundImage.jpg'; // Ensure this path is correct
import instagramIcon from './instagramIcon.png'; // Ensure this path is correct
import telegramIcon from './telegramIcon.png'; // Ensure this path is correct
import linkedinIcon from './linkedinIcon.png'; // Ensure this path is correct
import youtubeIcon from './youtubeIcon.png'; // Ensure this path is correct

const About = () => {
  return (
    <div className="about-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <header className="about-header">
        <h2>About Us</h2>
      </header>
      <img src={aboutPhoto} alt="About GARUDA" className="about-photo" />
      <div className="about-content">
        <p>Welcome to GARUDA, where passion unites! As a dynamic club, we foster a vibrant community of like-minded individuals dedicated to UAV's. From engaging events to collaborative projects, GARUDA thrives on creativity, diversity, and mutual growth. Our members share a common enthusiasm for Drones, creating an atmosphere that inspires innovation and camaraderie. Join us on this exciting journey, where every member is a valued contributor to the unique tapestry of GARUDA. Together, we soar to new heights, celebrating shared interests and forging lasting connections. Welcome to the GARUDA family!</p>
      </div>
      <div className="social-links">
        <a href="https://www.instagram.com/kl_garuda/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
        </a>
        <a href="https://t.me/klgaruda" target="_blank" rel="noopener noreferrer">
          <img src={telegramIcon} alt="Telegram" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/company/garuda-drone-technology-club/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://www.youtube.com/channel/UChIpX_oIvk00sA4-7qwfX4w" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="YouTube" className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default About;
