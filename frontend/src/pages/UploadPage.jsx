import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UploadPage() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleUpload = () => {
    if (file) {
      console.log("Uploading file:", file.name);
      // Mock: Assume job started, redirect to status
      navigate("/status");
    }
  };

  return (
    <div className="page-container">
      <h1>📤 Upload your eDNA Dataset</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button className="button" onClick={handleUpload}>
        Start Analysis
      </button>
    </div>
  );
}

export default UploadPage;
