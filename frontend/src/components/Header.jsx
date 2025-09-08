import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>🌊 eDNA Deep Sea Biodiversity Analyzer</h1>
      <p>Upload, Analyze & Discover Deep-Sea Life</p>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/upload">Upload</Link></li>
          <li><Link to="/status">Status</Link></li>
          <li><Link to="/results">Results</Link></li>
        </ul>
      </nav>
    </header>
  );
}
