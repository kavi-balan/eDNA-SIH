import { useEffect, useState } from "react";
import { fetchResults } from "../services/api";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#0088FE"];

export default function ResultsDisplay({ jobId }) {
  const [results, setResults] = useState(null);

  useEffect(() => {
    fetchResults(jobId).then((res) => setResults(res.data));
  }, [jobId]);

  if (!results) return <p className="container">Loading results...</p>;

  return (
    <div className="container">
      <h2>📊 Biodiversity Results</h2>

      <PieChart width={400} height={300}>
        <Pie
          data={results.taxonomy_distribution}
          dataKey="count"
          nameKey="taxon"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {results.taxonomy_distribution.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      <div style={{ marginTop: "20px" }}>
        <p>
          <strong>Unclassified Reads:</strong> {results.unclassified_count}
        </p>
        <p>
          <strong>Shannon Diversity Index:</strong>{" "}
          {results.shannon_index.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
