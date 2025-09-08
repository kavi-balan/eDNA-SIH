import { useState } from "react";
import { uploadFile } from "../services/api";

export default function FileUpload({ onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file.");
    setLoading(true);
    try {
      const res = await uploadFile(file);
      onUploadSuccess(res.data.job_id);
    } catch (error) {
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>📁 Upload eDNA Sample</h2>
      <input
        type="file"
        accept=".fastq,.fq"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <br />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Submit for Analysis"}
      </button>
    </div>
  );
}
