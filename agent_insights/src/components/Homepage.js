import React from 'react';
import '../index.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <main className="main-content">
        <div className="card">
          <h2 className="card-title">Find Your Agent</h2>
          <p>Use our interactive search to find top-rated agents near you.</p>
          <a href="/search" className="btn">Search Now</a>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
