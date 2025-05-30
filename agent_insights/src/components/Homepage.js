import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="homepage">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-gradient">
          <div className="hero-content">
            <h1 className="hero-title">
              Find Your Dream<br />Real Estate Agent, Effortlessly
            </h1>
            <p className="hero-subtitle">
              We make homebuying smarter for Gen Z—powered by  AI guidance, agent highlights, and filterable agent matches
            </p>
            <Link to="/Chatbot" className="hero-cta">Discover Your Match →</Link>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="value-section">
        <h2 className="section-title">Why AgentInsights?</h2>
        <p className="section-subtitle">
          We created AgentInsights to help young buyers navigate real estate confidently — with clarity, trust, and tools that actually work for you.
        </p>

        <div className="metrics-grid">
          <div className="metric">
            <img src="matching.png" alt="Smart Matching" className="metric-icon" />
            <p className="metric-label">Smart Agent Matching</p>
          </div>
          <div className="metric">
            <img src="chabot.png" alt="Chatbot" className="metric-icon" />
            <p className="metric-label">AI Chat Support</p>
          </div>
          <div className="metric">
            <img src="tiktok.png" alt="TikTok Style Insights" className="metric-icon" />
            <p className="metric-label">TikTok-style Insights</p>
          </div>
          <div className="metric">
            <img src="guide.png" alt="Guides" className="metric-icon" />
            <p className="metric-label">Gen Z–Friendly Guides</p>
          </div>
        </div>

      </section>

      <section className="how-it-works-clean">
        <h2 className="how-title">How it works</h2>
        <p className="how-subtitle">
          From smart matching to real-time guidance, here’s how we make buying your first home less overwhelming and more empowering.
        </p>

        {/* STEP 1 */}
        <div className="step">
          <div className="step-left">
            <img src="/image1.png" alt="Insightbot" />
          </div>
          <div className="step-right">
            <h3>24/7 Real Estate Chat Help</h3>
            <p>Not sure where to start? Our AI Chatbot—InsightBot—is always here to answer your questions in real time. From choosing an agent to learning about escrow, just ask.</p>
            <Link to="/Chatbot">Try It</Link>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="step reverse">
          <div className="step-left">
            <img src="/image2.png" alt="Search" />
          </div>
          <div className="step-right">
            <h3>Find Agents That Fit You</h3>
            <p>Use filters that actually matter—like “patient and supportive,” “speaks Mandarin,” or “great with first-time buyers.” No pushy salespeople, just your perfect fit.</p>
            <Link to="/Search">Explore Agents</Link>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="step">
          <div className="step-left">
            <img src="/image3.png" alt="Buying Guides" />
          </div>
          <div className="step-right">
            <h3>Resources You’ll Actually Read</h3>
            <p>We break down every step of the buying process—from pre-approval to closing—in quick, digestible guides made for Gen Z. No jargon, just facts.</p>
            <Link to="/Resources">Start Learning</Link>
          </div>
        </div>
      </section>



      {/* ABOUT THE DATA */}
      <section className="about-data">
        <h2>About the Data</h2>
        <p>
          This project was created for demonstration and educational purposes only. Most of the agent profiles, reviews, and metrics throughout the platform are fictional and generated to showcase how a fully functioning product might work.
        </p>
        <p>
          While the data is largely made up, we did incorporate publicly available TikTok videos from real estate agents to provide a sense of authenticity and demonstrate how short-form content might be integrated into agent profiles.
          These clips are used solely to illustrate design and user interaction — not to make claims about any individual.
        </p>

      </section>


    </div>
  );
}
