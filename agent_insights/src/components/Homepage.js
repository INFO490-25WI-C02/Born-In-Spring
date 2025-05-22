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
              We make homebuying smarter for Gen Z—powered by AI, real reviews, and tech-savvy filters.
            </p>
            <Link to="/Search" className="hero-cta">Start Your Search →</Link>
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

      {/* FEATURE HIGHLIGHTS */}
      <section className="features-section">
        <div className="feature-card">
          <h3>💬 24/7 Real Estate Chat Help</h3>
          <p>Not sure where to start? Our AI Chatbot—InsightBot—is always here to answer your questions in real time. From choosing an agent to learning about escrow, just ask.</p>
          <Link to="/Chatbot">Try It</Link>
        </div>

        <div className="feature-card">
          <h3>🕵️‍♀️ Find Agents That Match Your Vibe</h3>
          <p>Use filters that actually matter—like “eco-conscious,” “speaks Mandarin,” or “great with first-time buyers.” No pushy salespeople, just your perfect fit.</p>
          <Link to="/Search">Explore Agents</Link>
        </div>

        <div className="feature-card">
          <h3>📖 Resources You’ll Actually Read</h3>
          <p>We break down every step of the buying process—from pre-approval to closing—in quick, digestible guides made for Gen Z. No jargon, just facts.</p>
          <Link to="/EducationResources">Start Learning</Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Chat with InsightBot to get real-time guidance and common questions answered.</li>
          <li>Browse agents with filters like language, market expertise, and digital services.</li>
          <li>Explore agent profiles with past deals, TikToks, and verified reviews.</li>
          <li>Learn what to expect with bite-sized, Gen Z–friendly guides.</li>
        </ol>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>What Other Buyers Are Saying</h2>
        <blockquote>
          "Honestly, I didn’t even know what escrow meant. This site made me feel confident buying my first place."<br />
          <cite>— Jordan, 24</cite>
        </blockquote>
        <blockquote>
          "The filters were 🔥. Found a bilingual agent who knew exactly what I needed as a first-gen buyer."<br />
          <cite>— Selena, 22</cite>
        </blockquote>
      </section>

    </div>
  );
}
