import React from "react";
import BiodiversityChart from "../components/BiodiversityChart";
import TaxonomyBarChart from "../components/TaxonomyBarChart";
import SequenceAnalyzer from "../components/SequenceAnalyzer";
import BiodiversityMetrics from "../components/BiodiversityMetrics";

function ResultsPage() {
  return (
    <div className="page-container">
      <h1>🔬 Deep-Sea eDNA Biodiversity Analysis Results</h1>
      <p>AI-powered taxonomic classification and biodiversity assessment from environmental DNA sequencing data.</p>

      {/* Biodiversity Metrics Dashboard */}
      <section className="results-section">
        <BiodiversityMetrics />
      </section>

      {/* Charts Section */}
      <section className="results-section">
        <div className="charts-grid">
          <BiodiversityChart title="Taxonomic Distribution" />
          <TaxonomyBarChart title="Species Abundance Analysis" />
        </div>
      </section>

      {/* Real-time Sequence Analysis */}
      <section className="results-section">
        <SequenceAnalyzer />
      </section>

      {/* Detailed Results */}
      <section className="results-section">
        <h2>📋 Detailed Analysis Report</h2>
        <div className="results-details">
          <div className="detail-card">
            <h3>🧬 Sequence Processing</h3>
            <ul>
              <li><strong>Total Sequences:</strong> 1,250,000 reads</li>
              <li><strong>Quality Filtered:</strong> 1,180,000 reads (94.4%)</li>
              <li><strong>Successfully Classified:</strong> 892,000 reads (71.4%)</li>
              <li><strong>Novel Taxa Detected:</strong> 12 potential new species</li>
            </ul>
          </div>

          <div className="detail-card">
            <h3>🌊 Deep-Sea Ecosystem Insights</h3>
            <ul>
              <li><strong>Dominant Phylum:</strong> Protists (32% of classified reads)</li>
              <li><strong>Rare Species:</strong> 45 taxa with abundance less than 0.1%</li>
              <li><strong>Biogeographic Patterns:</strong> 3 distinct community clusters identified</li>
              <li><strong>Conservation Priority:</strong> 8 vulnerable species detected</li>
            </ul>
          </div>

          <div className="detail-card">
            <h3>⚡ AI Model Performance</h3>
            <ul>
              <li><strong>Classification Accuracy:</strong> 89.2%</li>
              <li><strong>Processing Time:</strong> 45 minutes for 1M reads</li>
              <li><strong>Database Independence:</strong> 67% of classifications from novel sequences</li>
              <li><strong>Confidence Score:</strong> Average 0.87 across all predictions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Export Options */}
      <section className="results-section">
        <h2>💾 Export Results</h2>
        <div className="export-options">
          <button className="button export-btn">
            📊 Download CSV Report
          </button>
          <button className="button export-btn">
            📈 Export Charts (PNG)
          </button>
          <button className="button export-btn">
            🧬 Download FASTA Sequences
          </button>
          <button className="button export-btn">
            📋 Generate PDF Report
          </button>
        </div>
      </section>
    </div>
  );
}

export default ResultsPage;
