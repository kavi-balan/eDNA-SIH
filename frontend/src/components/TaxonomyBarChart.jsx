import React, { useEffect, useRef } from 'react';

const TaxonomyBarChart = ({ data, title }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Sample taxonomic data (replace with actual data)
    const sampleData = data || [
      { taxa: 'Protists', abundance: 1250, color: '#00ccff' },
      { taxa: 'Cnidarians', abundance: 890, color: '#0099cc' },
      { taxa: 'Mollusks', abundance: 675, color: '#006699' },
      { taxa: 'Arthropods', abundance: 543, color: '#004466' },
      { taxa: 'Echinoderms', abundance: 432, color: '#002244' },
      { taxa: 'Chordates', abundance: 321, color: '#001122' }
    ];

    const maxAbundance = Math.max(...sampleData.map(item => item.abundance));
    const barWidth = (width - 100) / sampleData.length;
    const barSpacing = 10;

    // Draw bars with animation
    sampleData.forEach((item, index) => {
      const barHeight = (item.abundance / maxAbundance) * (height - 100);
      const x = 60 + index * (barWidth + barSpacing);
      const y = height - 50 - barHeight;

      // Draw bar background
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(x, height - 50 - (height - 100), barWidth, height - 100);

      // Draw animated bar
      const animateBar = () => {
        let currentHeight = 0;
        const targetHeight = barHeight;
        const animationSpeed = targetHeight / 60; // 60 frames

        const animate = () => {
          if (currentHeight < targetHeight) {
            currentHeight += animationSpeed;

            // Clear and redraw
            ctx.clearRect(x - 1, y - 1, barWidth + 2, height - y + 1);

            // Draw bar
            ctx.fillStyle = item.color;
            ctx.fillRect(x, height - 50 - currentHeight, barWidth, currentHeight);

            // Draw border
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1;
            ctx.strokeRect(x, height - 50 - currentHeight, barWidth, currentHeight);

            requestAnimationFrame(animate);
          } else {
            // Draw final bar
            ctx.fillStyle = item.color;
            ctx.fillRect(x, y, barWidth, barHeight);
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1;
            ctx.strokeRect(x, y, barWidth, barHeight);

            // Draw value on top
            ctx.fillStyle = '#ffffff';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(item.abundance.toString(), x + barWidth / 2, y - 5);
          }
        };

        setTimeout(animate, index * 200); // Stagger animation
      };

      animateBar();

      // Draw labels
      ctx.fillStyle = '#ffffff';
      ctx.font = '11px Arial';
      ctx.textAlign = 'center';
      ctx.save();
      ctx.translate(x + barWidth / 2, height - 30);
      ctx.rotate(-Math.PI / 4);
      ctx.fillText(item.taxa, 0, 0);
      ctx.restore();
    });

    // Draw axes
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(50, height - 50);
    ctx.lineTo(width - 20, height - 50);
    ctx.moveTo(50, height - 50);
    ctx.lineTo(50, 30);
    ctx.stroke();

    // Add glow effect
    ctx.shadowColor = '#00ccff';
    ctx.shadowBlur = 10;
  }, [data]);

  return (
    <div className="chart-container">
      <h3>{title || 'Taxonomic Abundance'}</h3>
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        style={{ border: '1px solid rgba(255,255,255,0.2)', borderRadius: '10px' }}
      />
    </div>
  );
};

export default TaxonomyBarChart;
