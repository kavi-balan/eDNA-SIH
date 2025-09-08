import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StatusPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container">
      <h1>⏳ Analysis in Progress</h1>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      {progress === 100 && (
        <Link to="/results" className="button">
          View Results
        </Link>
      )}
    </div>
  );
}

export default StatusPage;
