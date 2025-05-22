import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../header.css';

function PageHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img src="/logo-icon2.png" alt="Agent Insights Logo" className="logo-img" />
          </Link>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" className="nav-item">Home</Link></li>
          <li><a href="/chatbot" className="nav-item">Chatbot</a></li>
          <li><a href="/search" className="nav-item">Agents</a></li>
          <li><a href="/Resources" className="nav-item">Resources</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default PageHeader;
