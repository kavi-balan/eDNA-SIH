import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="page-container">
      <h1>🌊 Welcome to Deep-Sea eDNA Explorer</h1>
      <p>Discover the hidden world beneath the waves through cutting-edge environmental DNA analysis technology.</p>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🧬</div>
          <h3>DNA Analysis</h3>
          <p>Advanced sequencing and analysis of environmental DNA samples</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🌊</div>
          <h3>Deep-Sea Exploration</h3>
          <p>Uncover biodiversity in the deepest ocean trenches</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Data Visualization</h3>
          <p>Interactive charts and comprehensive biodiversity reports</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🔬</div>
          <h3>Scientific Research</h3>
          <p>Support marine conservation and scientific discovery</p>
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready to Explore the Deep Sea?</h2>
        <p>Join researchers worldwide in understanding our ocean's biodiversity</p>
        <Link to="/upload" className="button primary-button">
          Start Your Journey
        </Link>
        <Link to="/status" className="button secondary-button">
          View Analysis Status
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
