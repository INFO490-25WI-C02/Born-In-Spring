import React, { useState } from 'react';
import '../search.css';

const AGENT_DATA = [
  {
    image: 'agent1.jpg',
    agency: 'Doe Real Estate',
    name: 'Michael Parker',
    location: 'Seattle, WA',
    rating: '4.8/5',
    reviews: 418,
    testimonial: 'Knows the market inside out! Got me the best deal without the hassle.'
  },
  {
    image: 'agent2.jpg',
    agency: 'Urban Realty',
    name: 'Sarah Thompson',
    location: 'Bellevue, WA',
    rating: '4.9/5',
    reviews: 1230,
    testimonial: 'Expert in luxury apartments. Helped me find a stunning penthouse in no time!'
  },
  {
    image: 'agent3.jpg',
    agency: 'Blue Horizon',
    name: 'James Carter',
    location: 'Tacoma, WA',
    rating: '4.7/5',
    reviews: 850,
    testimonial: 'Great negotiator! Found me an amazing deal in a competitive market.'
  },
  {
    image: 'agent4.jpg',
    agency: 'Green Spaces',
    name: 'Emily Davis',
    location: 'Spokane, WA',
    rating: '5.0/5',
    reviews: 490,
    testimonial: 'Focused on eco-friendly homes. Helped me find a beautiful sustainable house!'
  }
];

export default function Search() {
  const [city, setCity] = useState('');
  const [keyword, setKeyword] = useState('');

  const filteredAgents = AGENT_DATA.filter((agent) => {
    const matchesCity = !city || agent.location.toLowerCase().includes(city.toLowerCase());
    const matchesKeyword = !keyword || agent.name.toLowerCase().includes(keyword.toLowerCase());
    return matchesCity && matchesKeyword;
  });

  const createInput = (props) => React.createElement('input', props);
  const createSelect = (props, options) => React.createElement(
    'select',
    props,
    options.map((opt, i) => React.createElement('option', { key: i, value: opt.value || opt }, opt.label || opt))
  );

  return React.createElement('div', null,
    React.createElement('section', { className: 'search' },
      React.createElement('h1', { className: 'page-title' }, 'Embark on Your Real Estate Journey with a Perfect Match'),
      React.createElement('div', { className: 'search-container' },
        createSelect({ className: 'search-input', value: city, onChange: e => setCity(e.target.value) }, [
          { value: '', label: 'Select Your City' },
          'Seattle', 'Tacoma', 'Spokane', 'Bellevue'
        ]),
        createInput({
          type: 'text',
          className: 'search-input',
          placeholder: 'Search agents name',
          value: keyword,
          onChange: (e) => setKeyword(e.target.value)
        })
      )
    ),

    React.createElement('div', { className: 'main-container' },
      React.createElement('section', { className: 'advanced-search' },
        React.createElement('h2', { className: 'filter-title' }, 'Advanced Search'),
        React.createElement('div', { className: 'filters' },
          [
            'Years of Experience',
            'Specialized Markets',
            'Review Scores',
            'Languages',
            'Tech & Digital Services',
            'Experience with Unique Properties'
          ].map((label, i) => React.createElement('div', { className: 'filter-group', key: i },
            React.createElement('label', null, label),
            createSelect({}, ['Any'])
          )),
          React.createElement('div', { className: 'filter-group price-range' },
            React.createElement('label', null, 'Price'),
            createInput({ type: 'text', placeholder: '$ Min' }),
            createInput({ type: 'text', placeholder: '$ Max' })
          ),
          React.createElement('button', { className: 'apply-filters-btn' }, 'Apply Filter')
        )
      ),

      React.createElement('section', { className: 'agent-list' },
        filteredAgents.map((agent, index) => React.createElement('div', { className: 'agent-card', key: index },
          React.createElement('img', { src: agent.image, alt: agent.name }),
          React.createElement('div', { className: 'agent-info' },
            React.createElement('h4', { className: 'agency-name' }, agent.agency),
            React.createElement('h2', { className: 'agent-name' }, agent.name),
            React.createElement('p', { className: 'agent-location' }, agent.location),
            React.createElement('p', { className: 'rating' }, `⭐ ${agent.rating} (${agent.reviews})`),
            React.createElement('p', { className: 'testimonial' }, `"${agent.testimonial}"`),
            React.createElement('a', { href: '/agentProfile', className: 'profile-btn' }, 'Check Profile')
          )
        ))
      )
    )
  );
}
