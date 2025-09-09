import React, { useEffect, useRef } from "react";

const TaxonomyBarChart = ({ data, title }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sampleData = data || [
      { taxa: "Protists", abundance: 1250, color: "#00ccff" },
      { taxa: "Cnidarians", abundance: 890, color: "#0099cc" },
      { taxa: "Mollusks", abundance: 675, color: "#006699" },
      { taxa: "Arthropods", abundance: 543, color: "#004466" },
      { taxa: "Echinoderms", abundance: 432, color: "#002244" },
      { taxa: "Chordates", abundance: 321, color: "#001122" },
    ];

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const widthPerBar = 120; // Adjusted for space per bar and labels
    const totalWidth = sampleData.length * widthPerBar + 100;

    canvas.width = totalWidth;
    const width = canvas.width;
    const height = 400;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    const maxAbundance = Math.max(...sampleData.map((item) => item.abundance));
    const barWidth = 60;
    const barSpacing = 40;

    sampleData.forEach((item, index) => {
      const barHeight = (item.abundance / maxAbundance) * (height - 150);
      const x = 50 + index * (barWidth + barSpacing);
      const y = height - 80 - barHeight;

      // Draw bar background
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.fillRect(x, height - 80 - (height - 150), barWidth, height - 150);

      // Draw bar
      ctx.fillStyle = item.color;
      ctx.fillRect(x, y, barWidth, barHeight);

      // Draw border
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y, barWidth, barHeight);

      // Draw value on top
      ctx.fillStyle = "#ffffff";
      ctx.font = "14px Arial";
      ctx.textAlign = "center";
      ctx.fillText(item.abundance.toString(), x + barWidth / 2, y - 10);

      // Draw labels with rotation
      ctx.save();
      ctx.translate(x + barWidth / 2, height - 60);
      ctx.rotate(-Math.PI / 4);
      ctx.fillStyle = "#ffffff";
      ctx.font = "13px Arial";
      ctx.textAlign = "right";
      ctx.fillText(item.taxa, 0, 0);
      ctx.restore();
    });

    // Draw axes
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(40, height - 80);
    ctx.lineTo(width - 20, height - 80);
    ctx.moveTo(40, height - 80);
    ctx.lineTo(40, 20);
    ctx.stroke();
  }, [data]);

  return (
    <div
      className="chart-container"
      style={{ overflowX: "auto", maxWidth: "100%" }}
    >
      <h3>{title || "Taxonomic Abundance"}</h3>
      <canvas
        ref={canvasRef}
        height={400}
        style={{
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "10px",
          display: "block",
        }}
      />
    </div>
  );
};

export default TaxonomyBarChart;