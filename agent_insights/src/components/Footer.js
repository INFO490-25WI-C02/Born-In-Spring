import React from 'react';
import '../footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-media">
          <a
            href="https://www.instagram.com/agent.insight/"
            className="social-icon"
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/agent.insight/"
            className="social-icon"
            title="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.twitter.com/agent.insight/"
            className="social-icon"
            title="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="footer-text">&copy; 2025 Agent Insights. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;