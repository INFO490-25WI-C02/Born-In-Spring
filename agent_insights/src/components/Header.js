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
          <h1 className="logo">Agent Insights</h1>
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
