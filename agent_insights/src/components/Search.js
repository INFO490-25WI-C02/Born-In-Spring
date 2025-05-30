import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import database from '../firebase';
import '../search.css';

export default function SearchPage() {
  const [agents, setAgents] = useState([]);
  const [filters, setFilters] = useState({
    city: '',
    searchTerm: '',
    experience: '',
    market: '',
    review: '',
    language: '',
    communication: ''
  });
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const market = queryParams.get('market');
    const language = queryParams.get('language');

    setFilters((prev) => ({
      ...prev,
      market: market || '',
      language: language || ''
    }));
  }, [location.search]);
  useEffect(() => {
    const agentsRef = ref(database, 'agents');
    onValue(agentsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formatted = Object.values(data).filter(agent => agent && agent.name);
        setAgents(formatted);
      }
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredAgents = agents.filter((agent) => {
    const matchesCity =
      !filters.city ||
      agent.location?.toLowerCase().includes(filters.city.toLowerCase());

    const matchesSearch =
      !filters.searchTerm ||
      agent.name?.toLowerCase().includes(filters.searchTerm.toLowerCase());

    const matchesExperience =
      !filters.experience || agent.experience === filters.experience;

    const matchesMarket =
      !filters.market || agent.market === filters.market;

    const matchesReview =
      !filters.review || agent.rating >= parseFloat(filters.review);

    const matchesLanguage =
      !filters.language ||
      (Array.isArray(agent.languages) &&
        agent.languages
          .map((l) => l.toLowerCase())
          .includes(filters.language.toLowerCase()));

    const matchesCommunication =
      !filters.communication ||
      agent.communicationStyle
        ?.toLowerCase()
        .includes(filters.communication.toLowerCase());

    return (
      matchesCity &&
      matchesSearch &&
      matchesExperience &&
      matchesMarket &&
      matchesReview &&
      matchesLanguage &&
      matchesCommunication
    );
  });


  return (
    <>
      <section className="search">
        <h1 className="page-title">Embark on Your Real Estate Journey with a Perfect Match</h1>
        <div className="search-container">
          <select
            name="city"
            className="search-input"
            value={filters.city}
            onChange={handleChange}
          >
            <option value="">Select Your City</option>
            <option>Seattle</option>
            <option>Tacoma</option>
            <option>Spokane</option>
            <option>Bellevue</option>
            <option>Redmond</option>
            <option>Kirkland</option>
            <option>Everett</option>
          </select>
          <input
            type="text"
            name="searchTerm"
            className="search-input"
            placeholder="Search agents name"
            value={filters.searchTerm}
            onChange={handleChange}
          />
        </div>
      </section>

      <div className="main-container">
        <section className="advanced-search">
          <h2 className="filter-title">Advanced Search</h2>
          <div className="filters">
            {[
              { name: 'experience', label: 'Years of Experience', options: ['Any', '1-3 years', '3-5 years', '5+ years'] },
              { name: 'market', label: 'Specialized Markets', options: ['Any', 'Condos & Townhomes', 'Family Homes', 'Luxury Homes', 'Pet-Friendly Homes', 'Rental Properties', 'Smart Homes', 'Starter Homes', 'Vacation & Second Homes', 'Eco-Friendly Homes', 'First-Time Buyers'] },
              { name: 'review', label: 'Review Scores', options: ['Any', '4.0', '4.5', '5.0'] },
              { name: 'language', label: 'Languages', options: ['Any', 'Arabic', 'English', 'French', 'Korean', 'Mandarin', 'Spanish', 'Tagalog', 'Vietnamese'] },
              { name: 'communication', label: 'Communication Style', options: ['Any', 'Detailed and methodical', 'Fast and direct', 'Patient and supportive', 'Professional and concise', 'Strategic and assertive', 'Warm and empathetic'] }
            ].map((filter, idx) => (
              <div className="filter-group" key={idx}>
                <label>{filter.label}</label>
                <select name={filter.name} value={filters[filter.name]} onChange={handleChange}>
                  {filter.options.map((opt, i) => (
                    <option key={i} value={opt === 'Any' ? '' : opt}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </section>

        <section className="agent-list">
          {filteredAgents.length > 0 ? (
            filteredAgents.map((agent, index) => (
              <div className="agent-card" key={index}>
                <img src={agent.image} alt={agent.name} />
                <div className="agent-info">
                  <h4 className="agency-name">{agent.agency}</h4>
                  <h2 className="agent-name">{agent.name}</h2>
                  <p className="agent-location">{agent.location}</p>
                  <p className="rating">
                    ⭐ <strong>{agent.rating?.toFixed(1)}/5</strong> (
                    {agent.reviews ? Object.values(agent.reviews).length : 0} Reviews)
                  </p>
                  <p className="testimonial">"{agent.testimonial}"</p>
                  <Link to={`/AgentProfile?agent=${agent.name.toLowerCase().replace(/\s+/g, '_')}`} className="profile-btn">
                    Check Profile
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">😕 No matching agents found. Try adjusting your filters.</div>
          )}
        </section>

      </div>
    </>
  );
}
