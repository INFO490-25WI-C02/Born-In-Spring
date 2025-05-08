import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../search.css';

export default function SearchPage() {
  const [filters, setFilters] = useState({
    city: '',
    searchTerm: '',
    experience: '',
    market: '',
    review: '',
    language: '',
    tech: '',
    uniqueProp: '',
    priceMin: '',
    priceMax: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const agents = [
    {
      image: 'agent1.jpg',
      agency: 'Doe Real Estate',
      name: 'Michael Parker',
      location: 'Seattle, WA',
      rating: 4.8,
      reviews: 418,
      testimonial: 'Knows the market inside out! Got me the best deal without the hassle.',
      experience: '5+ years',
      market: 'Luxury Homes',
      language: 'English',
      tech: 'Virtual Tours Available',
      unique: 'Historic Homes',
      price: 1200000
    },
    {
      image: 'agent2.jpg',
      agency: 'Urban Realty',
      name: 'Sarah Thompson',
      location: 'Bellevue, WA',
      rating: 4.9,
      reviews: 1230,
      testimonial: 'Expert in luxury apartments. Helped me find a stunning penthouse in no time!',
      experience: '3-5 years',
      market: 'Rental Properties',
      language: 'Spanish',
      tech: 'Social Media Marketing',
      unique: 'Eco-Friendly & Smart Homes',
      price: 950000
    },
    {
      image: 'agent3.jpg',
      agency: 'Blue Horizon',
      name: 'James Carter',
      location: 'Tacoma, WA',
      rating: 4.7,
      reviews: 850,
      testimonial: 'Great negotiator! Found me an amazing deal in a competitive market.',
      experience: '1-3 years',
      market: 'Commercial Real Estate',
      language: 'English',
      tech: 'AI Market Analysis',
      unique: 'Short-Term Rental Investments',
      price: 720000
    },
    {
      image: 'agent4.jpg',
      agency: 'Green Spaces',
      name: 'Emily Davis',
      location: 'Spokane, WA',
      rating: 5.0,
      reviews: 490,
      testimonial: 'Focused on eco-friendly homes. Helped me find a beautiful sustainable house!',
      experience: '5+ years',
      market: 'Condos & Townhomes',
      language: 'Mandarin',
      tech: '3D Home Staging',
      unique: 'Multi-Generational Homes',
      price: 800000
    }
  ];

  const filteredAgents = agents.filter((agent) => {
    const matchesCity = !filters.city || agent.location.includes(filters.city);
    const matchesSearch = agent.name.toLowerCase().includes(filters.searchTerm.toLowerCase());
    const matchesExperience = !filters.experience || agent.experience === filters.experience;
    const matchesMarket = !filters.market || agent.market === filters.market;
    const matchesReview = !filters.review || agent.rating >= parseFloat(filters.review);
    const matchesLanguage = !filters.language || agent.language === filters.language;
    const matchesTech = !filters.tech || agent.tech === filters.tech;
    const matchesUnique = !filters.uniqueProp || agent.unique === filters.uniqueProp;
    const matchesPriceMin = !filters.priceMin || agent.price >= parseInt(filters.priceMin);
    const matchesPriceMax = !filters.priceMax || agent.price <= parseInt(filters.priceMax);

    return (
      matchesCity &&
      matchesSearch &&
      matchesExperience &&
      matchesMarket &&
      matchesReview &&
      matchesLanguage &&
      matchesTech &&
      matchesUnique &&
      matchesPriceMin &&
      matchesPriceMax
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
              { name: 'market', label: 'Specialized Markets', options: ['Any', 'Luxury Homes', 'Rental Properties', 'Commercial Real Estate', 'Condos & Townhomes'] },
              { name: 'review', label: 'Review Scores', options: ['Any', '4.0', '4.5', '5.0'] },
              { name: 'language', label: 'Languages', options: ['Any', 'English', 'Spanish', 'Mandarin'] },
              { name: 'tech', label: 'Tech & Digital Services', options: ['Any', 'Virtual Tours Available', 'Online Document Signing', 'AI Market Analysis', 'Social Media Marketing', '3D Home Staging'] },
              { name: 'uniqueProp', label: 'Experience with Unique Properties', options: ['Any', 'Historic Homes', 'Eco-Friendly & Smart Homes', 'Co-Living & Shared Housing', 'Short-Term Rental Investments', 'Multi-Generational Homes'] }
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

            <div className="filter-group price-range">
              <label>Price</label>
              <input
                type="text"
                name="priceMin"
                placeholder="$ Min"
                value={filters.priceMin}
                onChange={handleChange}
              />
              <input
                type="text"
                name="priceMax"
                placeholder="$ Max"
                value={filters.priceMax}
                onChange={handleChange}
              />
            </div>
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
                  <p className="rating">⭐ <strong>{agent.rating.toFixed(1)}/5</strong> ({agent.reviews})</p>
                  <p className="testimonial">"{agent.testimonial}"</p>
                  <Link to="/AgentProfile" className="profile-btn">Check Profile</Link>
                </div>
              </div>
            ))
          ) : (
            <p>No matching agents found.</p>
          )}
        </section>
      </div>
    </>
  );
}
