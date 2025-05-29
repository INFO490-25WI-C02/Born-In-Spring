import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../EducationResources.css';
import {
  FaMoneyCheck, FaHome, FaFileContract, FaClipboardList,
  FaMapMarkedAlt, FaPiggyBank, FaHandshake, FaRegQuestionCircle, FaSearch
} from 'react-icons/fa';

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

  const costCards = [
    {
      icon: <FaMoneyCheck />,
      title: 'Agent Commission',
      what: 'Typically 5–6% of the home price paid to your agent.',
      why: 'It’s the largest fee, and often negotiable.',
      ask: '“Can we discuss your commission structure or consider a flat rate?”',
      negotiable: 'Yes',
    },
    {
      icon: <FaClipboardList />,
      title: 'Admin Fee',
      what: 'Covers paperwork and brokerage processing (~$500).',
      why: 'Some firms waive it or bundle it in.',
      ask: '“Is this fee included in the commission or billed separately?”',
      negotiable: 'Sometimes',
    },
    {
      icon: <FaHandshake />,
      title: 'Transaction Coordination',
      what: 'Manages the transaction logistics (~$750).',
      why: 'Outsourced or handled in-house.',
      ask: '“Will this be handled in-house or by a third party?”',
      negotiable: 'Yes',
    },
    {
      icon: <FaHome />,
      title: 'Marketing & Staging',
      what: 'Photos, listing prep, staging (~$1,500).',
      why: 'Affects sale speed and appeal.',
      ask: '“Can I see examples of your staged listings?”',
      negotiable: 'Often',
    },
    {
      icon: <FaFileContract />,
      title: 'Legal Assistance',
      what: 'Covers contract review and legal compliance (~$750).',
      why: 'May be bundled or billed separately.',
      ask: '“Who handles the legal review, and is it optional?”',
      negotiable: 'Limited',
    }
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

      <section className="cost-infographic">
        <h2 className="infographic-title">Understand Your Home Buying Costs</h2>
        <p className="infographic-subtitle">
          Click through to explore key costs, why they matter, and how to ask the right questions.
        </p>

        <Carousel indicators={false} interval={null} className="cost-carousel">
          {costCards.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="infographic-card">
                <div className="infographic-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p><strong>What:</strong> {item.what}</p>
                <p><strong>Why it matters:</strong> {item.why}</p>
                <p><strong>Negotiable:</strong> {item.negotiable}</p>
                <button className="ask-button">🔎 Ask: <span>{item.ask}</span></button>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </div>
  );
}

export default EducationResources;
