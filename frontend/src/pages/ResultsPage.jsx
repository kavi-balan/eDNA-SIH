import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import BiodiversityChart from "../components/BiodiversityChart";
import TaxonomyBarChart from "../components/TaxonomyBarChart";
import SequenceAnalyzer from "../components/SequenceAnalyzer";
import BiodiversityMetrics from "../components/BiodiversityMetrics";

function ResultsPage() {
  const reportRef = useRef();

  const handleDownloadPDF = () => {
    const summaryElement = document.getElementById("pdf-summary");
    const opt = {
      margin: 0.5,
      filename: "eDNA_Biodiversity_Summary.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, allowTaint: true },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(summaryElement).save();
  };

  return (
    <div className="page-container" ref={reportRef}>
      <h1 style={{ fontSize: "2.5rem" }}>
        Deep-Sea eDNA Biodiversity Analysis Results
      </h1>
      <p>
        AI-powered taxonomic classification and biodiversity assessment from
        environmental DNA sequencing data.
      </p>

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
        <h2 style={{ fontSize: "2rem" }}>Detailed Analysis Report</h2>
        <div className="results-details">
          <div className="detail-card">
            <h3>Sequence Processing</h3>
          <ul>
            <li>
              <strong>Total Sequences:</strong> 1,250,000 reads
            </li>
            <li>
              <strong>Quality Filtered:</strong> 1,180,000 reads (94.4%)
            </li>
            <li>
              <strong>Successfully Classified:</strong> 892,000 reads (71.4%)
            </li>
            <li>
              <strong>Novel Taxa Detected:</strong> 12 potential new species
            </li>
          </ul>
          </div>

          <div className="detail-card">
            <h3>Deep-Sea Ecosystem Insights</h3>
            <ul>
              <li>
                <strong>Dominant Phylum:</strong> Protists (32% of classified
                reads)
              </li>
              <li>
                <strong>Rare Species:</strong> 45 taxa with abundance less than
                0.1%
              </li>
              <li>
                <strong>Biogeographic Patterns:</strong> 3 distinct community
                clusters identified
              </li>
              <li>
                <strong>Conservation Priority:</strong> 8 vulnerable species
                detected
              </li>
            </ul>
          </div>

          <div className="detail-card">
            <h3>AI Model Performance</h3>
            <ul>
              <li>
                <strong>Classification Accuracy:</strong> 89.2%
              </li>
              <li>
                <strong>Processing Time:</strong> 45 minutes for 1M reads
              </li>
              <li>
                <strong>Database Independence:</strong> 67% of classifications
                from novel sequences
              </li>
              <li>
                <strong>Confidence Score:</strong> Average 0.87 across all
                predictions
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Export Options */}
      <section className="results-section">
        <h2 style={{ fontSize: '2rem' }}>Export Results</h2>
        <div className="export-options">
          <button className="button export-btn">Download CSV Report</button>
          <button className="button export-btn">Export Charts (PNG)</button>
          <button className="button export-btn">
            Download FASTA Sequences
          </button>
          <button className="button export-btn" onClick={handleDownloadPDF}>
            Generate PDF Report
          </button>
        </div>
      </section>

      {/* Hidden PDF Summary */}
      <div id="pdf-summary" style={{ display: "none" }}>
        <div style={{ pageBreakAfter: "always" }}>
          <h1 style={{ fontSize: "2rem", textAlign: "center" }}>
            Deep-Sea eDNA Biodiversity Analysis Summary
          </h1>
          <p style={{ textAlign: "center" }}>
            AI-powered taxonomic classification and biodiversity assessment from
            environmental DNA sequencing data.
          </p>

          <h2 style={{ fontSize: "1.5rem" }}>Biodiversity Assessment Metrics</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1rem' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Metric</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Value</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Species Richness</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>247 species</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Total number of distinct eukaryotic taxa identified</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Shannon Diversity</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>3.42 H'</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Measure of species diversity accounting for abundance</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Simpson Diversity</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>0.87 D</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Probability that two randomly selected individuals belong to different species</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Evenness</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>0.91 J</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Measure of how evenly species are distributed</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Total Reads</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>1,250,000 reads</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Total number of sequencing reads processed</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Classified Reads</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>892,000 reads</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Reads successfully assigned to taxonomic groups</td>
              </tr>
            </tbody>
          </table>

          <h2 style={{ fontSize: '1.5rem' }}>Real-time Sequence Analysis</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Metric</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Value</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Total Sequences</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>1,250,000 reads</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Number of sequences processed</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Quality Filtered</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>1,180,000 reads (94.4%)</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sequences passing quality filters</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Successfully Classified</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>892,000 reads (71.4%)</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sequences assigned to taxa</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Novel Taxa Detected</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>12 potential new species</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Potentially novel taxa identified</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;