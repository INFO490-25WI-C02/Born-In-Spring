import React, { useEffect, useState } from 'react';
import { ref, onValue, push } from 'firebase/database';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Offcanvas } from 'bootstrap';
import '../profile.css';
import { Link, useLocation } from 'react-router-dom';


export default function AgentProfile() {
    const [agentData, setAgentData] = useState(null);
    const [newComment, setNewComment] = useState('');
    const [newRating, setNewRating] = useState(5);

    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState({ firstName: '', lastName: '' });

    const location = useLocation();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    useEffect(() => {
        const qp = new URLSearchParams(location.search);
        const agentKey = qp.get('agent');
        if (!agentKey) return;

        const agentRef = ref(db, `agents/${agentKey}`);
        return onValue(agentRef, snap => setAgentData(snap.val()));
    }, [location.search]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, u => {
            setUser(u);
            if (u) {
                const userRef = ref(db, `users/${u.uid}`);
                onValue(userRef, snap => {
                    const d = snap.val() || {};
                    setProfile({
                        firstName: d.firstName || '',
                        lastName: d.lastName || ''
                    });
                });
            } else {
                setProfile({ firstName: '', lastName: '' });
            }
        });
        return unsubscribe;
    }, []);

    const handleReviewSubmit = e => {
        e.preventDefault();
        if (!newComment.trim()) return;


        if (!user) {
            const offEl = document.getElementById('userOffcanvas');
            Offcanvas.getOrCreateInstance(offEl).show();
            return;
        }

        const qp = new URLSearchParams(location.search);
        const agentKey = qp.get('agent');
        const reviewRef = ref(db, `agents/${agentKey}/reviews`);


        const reviewerName = `${profile.firstName} ${profile.lastName}`.trim();

        const newReview = {
            name: reviewerName || 'Anonymous',
            stars: newRating,
            time: new Date().toLocaleString(),
            text: newComment.trim()
        };

        push(reviewRef, newReview);
        setNewComment('');
        setNewRating(5);
    };

    if (!agentData) return <p>Loading agent profile...</p>;

    const reviewsArray = agentData.reviews
        ? Object.values(agentData.reviews)
        : [];
    return (
        <>
            {/* HERO SECTION */}
            <section className="hero-layout">
                <div className="hero-info">
                    <h1 className="hero-heading">Discover {agentData.name}’s Real Estate Expertise</h1>
                    <p className="agency">{agentData.agency}</p>
                    <p>{agentData.location}</p>
                    <p>{agentData.experience}</p>
                    <p>⭐ {agentData.rating}/5 ({reviewsArray.length} Reviews)</p>
                    <button
                        className="message-btn"
                        onClick={() => window.location.href = `https://www.instagram.com/direct/t/17845410570450972`}
                    >
                        Message Me
                    </button>

                </div>
                <div className="hero-photo">
                    <img src={agentData.image} alt={agentData.name} />
                </div>
            </section>

            {/* EXPERIENCE SECTION */}
            <section className="section-alt blue-bg">
                <div className="profile-container specialties-section">
                    <div className="specialties-left">
                        <h2 className="section-title light">Expertise & Specialties</h2>
                        <p className="sub-label">Select the key trait you value</p>

                        <h4>Specialized Market</h4>
                        <div className="tag-group">
                            {agentData.market && (
                                <Link
                                    to={`/search?market=${encodeURIComponent(agentData.market)}`}
                                    className="tag-btn"
                                >
                                    {agentData.market}
                                </Link>
                            )}
                        </div>



                        <h4>Languages Spoken</h4>
                        <div className="tag-group">
                            {Array.isArray(agentData.languages) &&
                                agentData.languages.map((lang, idx) => (
                                    <Link
                                        to={`/search?language=${encodeURIComponent(lang.trim())}`}
                                        className="tag-btn"
                                        key={idx}
                                    >
                                        {lang.trim()}
                                    </Link>
                                ))}
                        </div>


                        <h4>Certifications</h4>
                        <ul className="list-white">
                            {agentData.certifications?.split(',').map((cert, idx) => (
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
                                cite={agentData.tiktokUrl}
                                data-video-id={agentData.tiktokUrl?.split('/').pop()}
                                style={{ width: '100%', height: '100%' }}
                            >
                                <section>Loading...</section>
                            </blockquote>
                        </div>
                    </div>

                </div>
            </section>

            {/* DEALS SECTION */}
            {agentData.deals && (
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
            )}

            {/* REVIEWS SECTION */}
            <section id="reviews-section" className="scroll-section section-alt review-section">
                <h2>Client Reviews</h2>
                <div className="reviews-summary">
                    <span className="reviews-stars">⭐ <strong>{agentData.rating}/5</strong></span>
                    <span className="review-count">({reviewsArray.length} Reviews)</span>
                </div>

                <form className="write-review-form" onSubmit={handleReviewSubmit}>
                    <label htmlFor="comment">Leave a Comment:</label>
                    <textarea
                        id="comment"
                        name="comment"
                        placeholder="Share your experience..."
                        rows="4"
                        value={newComment}
                        onChange={e => setNewComment(e.target.value)}
                    ></textarea>

                    <label htmlFor="rating">Rating:</label>
                    <div className="star-selector">
                        {[1, 2, 3, 4, 5].map(n => (
                            <label key={n} style={{ marginRight: 10, cursor: 'pointer' }}>
                                <input
                                    type="radio"
                                    name="rating"
                                    value={n}
                                    checked={newRating === n}
                                    onChange={() => setNewRating(n)}
                                    style={{ marginRight: 4 }}
                                />
                                {'★'.repeat(n)}{'☆'.repeat(5 - n)}
                            </label>
                        ))}
                    </div>

                    <button type="submit">Submit</button>
                </form>

                {reviewsArray.map((review, idx) => (
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
            </section>

            {/* CONTACT SECTION */}
            <section className="section-alt blue-bg">
                <h2>Contact Me</h2>
                <div className="contact-info">
                    <p><strong>📞 Phone:</strong> {agentData.phone || 'Not listed'}</p>
                    <p><strong>📧 Email:</strong> <a href={`mailto:${agentData.email}`}>{agentData.email}</a></p>
                    <p><strong>🌐 Website:</strong> <a href={agentData.website} target="_blank" rel="noreferrer">{agentData.website}</a></p>
                    <div className="social-media">
                        {agentData.socialLinks &&
                            Object.entries(agentData.socialLinks).map(([platform, url]) => (
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
