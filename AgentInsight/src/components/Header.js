import React from 'react';

function PageHeader() {
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <h1 className="logo">Agent Insights</h1>
          <ul className="nav-links">
            <li><a href="/home">Home</a></li>
            <li><a href="/chatbot">Chatbot</a></li>
            <li><a href="/search">Agents</a></li>
            <li><a href="/EducationResource">Education Resource</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default PageHeader;