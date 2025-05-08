import React, { useEffect } from 'react';
import '../profile.css';
import agentData from '../agentData.json';

export default function AgentProfile() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <>
            {/* HERO SECTION */}
            <section className="hero-fullscreen">
                <div className="hero-text-block">
                <h1 className="hero-heading">Discover {agentData.name}’s Real Estate Expertise</h1>

                    <p className="agency">{agentData.agency}</p>
                    <p>{agentData.location}</p>
                    <p>{agentData.experience}</p>
                    <p className="rating">⭐ {agentData.rating}/5 ({agentData.reviews.length} Reviews)</p>
                    <button className="message-btn">Message Me</button>
                </div>
                <img className="hero-image-full" src="/agent1.jpg" alt="Agent" />
            </section>

            {/* EXPERIENCE SECTION */}
            <section className="section-alt blue-bg">
                <div className="profile-container specialties-section">
                    <div className="specialties-left">
                        <h2 className="section-title light">Expertise & Specialties</h2>
                        <p className="sub-label">Select the key trait you value</p>
                        <h4>Specialties</h4>


                        <div className="tag-group">
                            {agentData.specialties.split(',').map((tag, idx) => (
                                <button className="tag-btn" key={idx}>{tag.trim()}</button>
                            ))}
                        </div>

                        <h4>Languages Spoken</h4>
                        <div className="tag-group">
                            {agentData.languages.split(',').map((lang, idx) => (
                                <button className="tag-btn" key={idx}>{lang.trim()}</button>
                            ))}
                        </div>

                        <h4>Certifications</h4>
                        <ul className="list-white">
                            {agentData.certifications.split(',').map((cert, idx) => (
                                <li key={idx}>{cert.trim()}</li>
                            ))}
                        </ul>

                        <h4>Hyperlocal Insights</h4>
                        <ul className="list-white">
                            <li>{agentData.insights}</li>
                        </ul>
                    </div>

                    <div className="specialties-video">
                        <div className="tiktok-wrapper">
                            <blockquote
                                className="tiktok-embed"
                                cite={`https://www.tiktok.com/@realestate/video/${agentData.tiktokEmbedId}`}
                                data-video-id={agentData.tiktokEmbedId}
                                style={{ width: '100%', height: '100%' }}
                            >
                                <section>Loading...</section>
                            </blockquote>
                        </div>
                    </div>

                </div>
            </section>


            {/* DEALS SECTION */}
            <section className="section-alt light-bg">
                <h2>Past Deals</h2>
                <div className="deals-table-container">
                    <table className="deals-table">
                        <thead>
                            <tr>
                                <th>Property Type</th>
                                <th>Location</th>
                                <th>Sale Price</th>
                                <th>Status</th>
                                <th>Client Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {agentData.deals.map((deal, idx) => (
                                <tr key={idx}>
                                    <td>{deal.type}</td>
                                    <td>{deal.location}</td>
                                    <td>{deal.price}</td>
                                    <td>{deal.status}</td>
                                    <td>{deal.feedback}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="reviews-section" className="scroll-section section-alt review-section">
  <h2>Client Reviews</h2>

  <div className="reviews-summary">
    <span className="reviews-stars">⭐ <strong>{agentData.rating}/5</strong></span>
    <span className="review-count">({agentData.reviews.length} Reviews)</span>
  </div>

  <form className="write-review-form" onSubmit={(e) => e.preventDefault()}>
    <label htmlFor="comment">Leave a Comment:</label>
    <textarea
      id="comment"
      name="comment"
      placeholder="Share your experience..."
      rows="4"
    ></textarea>
    <button type="submit">Submit</button>
  </form>

  <div className="reviews">
    {agentData.reviews.map((review, idx) => (
      <div className="review-card" key={idx}>
        <div className="review-content">
          <h4>{review.name}</h4>
          <div className="stars">
            {'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}
          </div>
          <p className="review-time">{review.time}</p>
          <p className="review-text">"{review.text}"</p>
        </div>
      </div>
    ))}
  </div>
</section>



            {/* FEE CALCULATOR SECTION */}
            <section className="section-alt fee-calculator-section">
                <h2>Visual Fee Calculator</h2>
                <p className="section-description">Enter the home price to see all associated costs.</p>
                <div className="fee-calculator">
                    <table className="fee-table">
                        <thead>
                            <tr>
                                <th>Home Price</th>
                                <th>Agent Commission (5%)</th>
                                <th>Admin Fee</th>
                                <th>Transaction Coordination Fee</th>
                                <th>Marketing & Staging Fee</th>
                                <th>Legal Assistance Fee</th>
                                <th>Total Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="number" value="500000" disabled /></td>
                                <td>$25,000</td>
                                <td>$500</td>
                                <td>$750</td>
                                <td>$1,500</td>
                                <td>$750</td>
                                <td>$28,500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            {/* CONTACT SECTION */}
            <section className="section-alt blue-bg">
                <h2>Contact Me</h2>
                <div className="contact-info">
                    <p><strong>📞 Phone:</strong> {agentData.phone}</p>
                    <p><strong>📧 Email:</strong> <a href={`mailto:${agentData.email}`}>{agentData.email}</a></p>
                    <p><strong>🌐 Website:</strong> <a href={agentData.website} target="_blank" rel="noreferrer">{agentData.website}</a></p>
                    <div className="social-media">
                        {Object.entries(agentData.socialLinks).map(([platform, url]) => (
                            <a href={url} className="social-icon" key={platform} target="_blank" rel="noreferrer">
                                <i className={`fab fa-${platform}`}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
