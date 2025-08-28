import React, { useEffect, useRef } from 'react';

const CanvasAvatar = ({ size = 200, isDark = true }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2 - 5;

    // Clear canvas
    ctx.clearRect(0, 0, size, size);

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    if (isDark) {
      gradient.addColorStop(0, '#06b6d4'); // cyan-500
      gradient.addColorStop(1, '#3b82f6'); // blue-500
    } else {
      gradient.addColorStop(0, '#0ea5e9'); // sky-500
      gradient.addColorStop(1, '#2563eb'); // blue-600
    }

    // Draw main circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw border
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#22d3ee';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Draw letter "A"
    ctx.fillStyle = 'white';
    ctx.font = `bold ${size * 0.35}px Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('A', centerX, centerY - size * 0.05);

    // Draw name "Ahmed"
    ctx.font = `600 ${size * 0.08}px Arial, sans-serif`;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillText('Ahmed', centerX, centerY + size * 0.15);

    // Draw title "Designer"
    ctx.font = `400 ${size * 0.06}px Arial, sans-serif`;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillText('Designer', centerX, centerY + size * 0.25);

    // Add decorative dots
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.beginPath();
    ctx.arc(centerX + radius * 0.6, centerY - radius * 0.6, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.beginPath();
    ctx.arc(centerX - radius * 0.7, centerY + radius * 0.3, 3, 0, 2 * Math.PI);
    ctx.fill();

    console.log('✅ Canvas avatar generated successfully!');
  }, [size, isDark]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      style={{
        borderRadius: '50%',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
      }}
    />
  );
};

export default CanvasAvatar;
