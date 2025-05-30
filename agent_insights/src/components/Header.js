import React from 'react';
import { Link } from 'react-router-dom';
import '../header.css';
import LoginOffcanvas from './Login';

function PageHeader() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-md px-3">
        <Link className="navbar-brand" to="/">
          <img src="/logo-icon2.png" alt="Agent Insights Logo" className="logo-img" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link" to="/chatbot">Chatbot</Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link" to="/search">Agents</Link>
            </li>
            <li className="nav-item me-7">
              <Link className="nav-link" to="/Resources">Resources</Link>
            </li>
            <li className="nav-item me-0">
              <button
                className="nav-link btn p-0"
                data-bs-toggle="offcanvas"
                data-bs-target="#userOffcanvas"
                aria-label="User menu"
              >
                <img
                  src="/avatar.png"
                  alt="User Avatar"
                  className="rounded-circle"
                  width="40"
                  height="40"
                />
              </button>
            </li>

          </ul>

        </div>
      </nav>
      <LoginOffcanvas />
    </header>
  );
}

export default PageHeader;
