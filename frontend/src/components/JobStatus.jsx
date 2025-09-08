import { useEffect, useState } from "react";
import { checkJobStatus } from "../services/api";

export default function JobStatus({ jobId, onComplete }) {
  const [status, setStatus] = useState("Queued");

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await checkJobStatus(jobId);
      setStatus(res.data.status);
      if (res.data.status === "Completed") {
        clearInterval(interval);
        onComplete();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [jobId]);

  return (
    <div className="container animate-pulse">
      <h2>⏳ Analysis in Progress</h2>
      <p>
        Status: <strong>{status}</strong>
      </p>
    </div>
  );
}
