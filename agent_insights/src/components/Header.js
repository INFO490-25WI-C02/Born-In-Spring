import React from 'react';
import { Link } from 'react-router-dom';
import '../header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <li className="nav-item">
              <Link className="nav-link" to="/Resources">Resources</Link>
            </li>

          </ul>

        </div>
        {/* <div className="user-avatar d-none d-md-flex">
          <img
            src="/avatar.png"
            alt="User Avatar"
            width="40"
            height="40"
            className="rounded-circle"
            data-bs-toggle="offcanvas"
            data-bs-target="#userOffcanvas"
            role="button"
            style={{ cursor: 'pointer', backgroundColor: 'white' }}
          />
        </div> */}
      </nav>
    </header>
  );
}

export default PageHeader;
