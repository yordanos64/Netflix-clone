import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook'; // Optional: if using Material UI
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-socials">
        <FacebookIcon />
        <InstagramIcon />
        <YouTubeIcon />
      </div>
      <div className="footer-links">
        <ul>
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Legal Notice</li>
          <li>Service Code</li>
        </ul>
        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
        </ul>
        <ul>
          <li>Gift Cards</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
        </ul>
        <ul>
          <li>Media Center</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="service-code-box">
        <span>Service Code</span>
      </div>
      <p className="copyright">&copy; 1997-2024 Netflix, Inc.</p>
    </footer>
  );
};

export default Footer;
