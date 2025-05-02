function Homepage() {
    return (
        <div>

            <main className="Homepage">
                <div className="hero">
                    <div className="hero-content">
                        <h2>Find the Perfect Agent for Your Needs</h2>
                        <p>Discover top-rated agents in your area and connect with the best professionals.</p>
                        <a href="chatbot1.html" className="btn">Get Started</a>
                    </div>
                </div>
                <section className="features">
                    <div className="feature">
                        <h3>Trusted Agents</h3>
                        <p>All our agents are thoroughly vetted to ensure quality service.</p>
                    </div>
                    <div className="feature">
                        <h3>Easy Search</h3>
                        <p>Find agents by location, specialty, and experience quickly.</p>
                    </div>
                    <div className="feature">
                        <h3>Expert Advice</h3>
                        <p>Get expert advice on selecting the best agent for your needs.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Homepage;