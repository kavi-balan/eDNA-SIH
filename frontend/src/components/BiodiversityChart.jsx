import React, { useEffect, useRef } from 'react';

const BiodiversityChart = ({ data, title }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Sample biodiversity data (replace with actual data)
    const sampleData = data || [
      { species: 'Protists', count: 45, color: '#00ccff' },
      { species: 'Cnidarians', count: 32, color: '#0099cc' },
      { species: 'Mollusks', count: 28, color: '#006699' },
      { species: 'Arthropods', count: 22, color: '#004466' },
      { species: 'Other', count: 15, color: '#002244' }
    ];

    const total = sampleData.reduce((sum, item) => sum + item.count, 0);
    let currentAngle = 0;

    // Draw pie chart
    sampleData.forEach((item, index) => {
      const angle = (item.count / total) * 2 * Math.PI;

      // Draw slice
      ctx.beginPath();
      ctx.moveTo(width / 2, height / 2);
      ctx.arc(width / 2, height / 2, 100, currentAngle, currentAngle + angle);
      ctx.closePath();
      ctx.fillStyle = item.color;
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw label
      const labelAngle = currentAngle + angle / 2;
      const labelX = width / 2 + Math.cos(labelAngle) * 120;
      const labelY = height / 2 + Math.sin(labelAngle) * 120;

      ctx.fillStyle = '#ffffff';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(item.species, labelX, labelY);
      ctx.fillText(`${item.count}`, labelX, labelY + 15);

      currentAngle += angle;
    });

    // Add animation
    let animationFrame = 0;
    const animate = () => {
      animationFrame += 0.02;
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate(Math.sin(animationFrame) * 0.05);
      ctx.translate(-width / 2, -height / 2);

      // Redraw chart with rotation
      ctx.clearRect(0, 0, width, height);
      currentAngle = 0;

      sampleData.forEach((item) => {
        const angle = (item.count / total) * 2 * Math.PI;
        ctx.beginPath();
        ctx.moveTo(width / 2, height / 2);
        ctx.arc(width / 2, height / 2, 100, currentAngle, currentAngle + angle);
        ctx.closePath();
        ctx.fillStyle = item.color;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
        currentAngle += angle;
      });

      ctx.restore();
      requestAnimationFrame(animate);
    };

    animate();
  }, [data]);

  return (
    <div className="chart-container">
      <h3>{title || 'Biodiversity Distribution'}</h3>
      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        style={{ border: '1px solid rgba(255,255,255,0.2)', borderRadius: '10px' }}
      />
    </div>
  );
};

export default BiodiversityChart;
