import React from 'react';
import '../EducationResources.css';
import { FaMoneyCheck, FaHome, FaFileContract, FaClipboardList, FaMapMarkedAlt, FaPiggyBank, FaHandshake, FaRegQuestionCircle, FaSearch } from 'react-icons/fa';

function EducationResources() {
  const resources = [
    { icon: <FaSearch />, title: 'Research the Market', description: 'Understand local housing trends and compare prices before making an offer.' },
    { icon: <FaMoneyCheck />, title: 'Get Pre-Approved', description: 'Secure a mortgage pre-approval to show sellers you are a serious buyer.' },
    { icon: <FaHome />, title: 'Home Inspection', description: 'Always invest in a professional home inspection to identify potential issues.' },
    { icon: <FaFileContract />, title: 'Understand the Contract', description: 'Review your purchase agreement carefully and know your contingencies.' },
    { icon: <FaPiggyBank />, title: 'Budget for Closing Costs', description: 'Prepare for extra costs like inspections, title insurance, and taxes.' },
    { icon: <FaMapMarkedAlt />, title: 'Location Matters', description: 'Consider proximity to schools, work, and amenities when choosing a location.' },
    { icon: <FaClipboardList />, title: 'Make a Checklist', description: 'List your must-haves and nice-to-haves to narrow down your search.' },
    { icon: <FaHandshake />, title: 'Negotiate Smartly', description: 'Don’t be afraid to negotiate the price or request repairs before closing.' },
    { icon: <FaRegQuestionCircle />, title: 'Ask Questions', description: 'Don’t hesitate to ask your agent or lender for clarification on any step.' },
  ];

  return (
    <div className="education-resources-page">
      <h2 className="education-resources-title">Home Buying Tips</h2>
      <p className="education-resources-intro">
        Explore essential tips and guidance for making informed home buying decisions. Whether you’re a first-time buyer or an experienced homeowner, these resources will help you navigate the process with confidence.
      </p>
      <div className="resources-grid">
        {resources.map((resource, index) => (
          <div key={index} className="resource-card">
            <div className="icon-container">{resource.icon}</div>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationResources;