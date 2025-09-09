import React, { useState, useEffect } from 'react';

const BiodiversityMetrics = () => {
  const [metrics, setMetrics] = useState({
    speciesRichness: 0,
    shannonDiversity: 0,
    simpsonDiversity: 0,
    evenness: 0,
    totalReads: 0,
    classifiedReads: 0
  });

  const [animatedValues, setAnimatedValues] = useState({
    speciesRichness: 0,
    shannonDiversity: 0,
    simpsonDiversity: 0,
    evenness: 0,
    totalReads: 0,
    classifiedReads: 0
  });

  // Target values for animation
  const targetMetrics = {
    speciesRichness: 247,
    shannonDiversity: 3.42,
    simpsonDiversity: 0.87,
    evenness: 0.91,
    totalReads: 1250000,
    classifiedReads: 892000
  };

  useEffect(() => {
    // Animate metrics on component mount
    const animateMetrics = () => {
      const duration = 3000; // 3 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      for (let step = 0; step <= steps; step++) {
        setTimeout(() => {
          const progress = step / steps;
          setAnimatedValues({
            speciesRichness: Math.round(targetMetrics.speciesRichness * progress),
            shannonDiversity: (targetMetrics.shannonDiversity * progress).toFixed(2),
            simpsonDiversity: (targetMetrics.simpsonDiversity * progress).toFixed(2),
            evenness: (targetMetrics.evenness * progress).toFixed(2),
            totalReads: Math.round(targetMetrics.totalReads * progress),
            classifiedReads: Math.round(targetMetrics.classifiedReads * progress)
          });
        }, step * stepDuration);
      }
    };

    animateMetrics();
  }, []);

  const MetricCard = ({ title, value, unit, icon, description }) => (
    <div className="metric-card">
      <div className="metric-header">
        <span className="metric-icon">{icon}</span>
        <h4>{title}</h4>
      </div>
      <div className="metric-value">
        <span className="value">{value}</span>
        <span className="unit">{unit}</span>
      </div>
      <p className="metric-description">{description}</p>
    </div>
  );

  return (
    <div className="biodiversity-metrics">
      <h3>Biodiversity Assessment Metrics</h3>

      <div className="metrics-grid">
        <MetricCard
          title="Species Richness"
          value={animatedValues.speciesRichness}
          unit="species"
          icon=""
          description="Total number of distinct eukaryotic taxa identified"
        />

        <MetricCard
          title="Shannon Diversity"
          value={animatedValues.shannonDiversity}
          unit="H'"
          icon=""
          description="Measure of species diversity accounting for abundance"
        />

        <MetricCard
          title="Simpson Diversity"
          value={animatedValues.simpsonDiversity}
          unit="D"
          icon=""
          description="Probability that two randomly selected individuals belong to different species"
        />

        <MetricCard
          title="Evenness"
          value={animatedValues.evenness}
          unit="J"
          icon=""
          description="Measure of how evenly species are distributed"
        />

        <MetricCard
          title="Total Reads"
          value={animatedValues.totalReads.toLocaleString()}
          unit="reads"
          icon=""
          description="Total number of sequencing reads processed"
        />

        <MetricCard
          title="Classified Reads"
          value={animatedValues.classifiedReads.toLocaleString()}
          unit="reads"
          icon=""
          description="Reads successfully assigned to taxonomic groups"
        />
      </div>

      <div className="classification-efficiency">
        <h4>Classification Efficiency</h4>
        <div className="efficiency-bar">
          <div
            className="efficiency-fill"
            style={{
              width: `${(animatedValues.classifiedReads / animatedValues.totalReads) * 100}%`
            }}
          ></div>
        </div>
        <p className="efficiency-text">
          {((animatedValues.classifiedReads / animatedValues.totalReads) * 100).toFixed(1)}% of reads classified
        </p>
      </div>

      <div className="ai-insights">
        <h4>AI Model Insights</h4>
        <div className="insights-list">
          <div className="insight-item">
            <span className="insight-icon"></span>
            <span>High confidence classification for 89% of taxa</span>
          </div>
          <div className="insight-item">
            <span className="insight-icon"></span>
            <span>12 potentially novel species detected</span>
          </div>
          <div className="insight-item">
            <span className="insight-icon"></span>
            <span>Deep-sea specific taxa identified in 45% of samples</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiodiversityMetrics;
