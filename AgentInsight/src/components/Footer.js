import React from 'react';

function Footer() {
  return (
    <footer>
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
        </div>
        <p>&copy; 2025 Agent Insights. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;