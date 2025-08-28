import React, { useEffect, useRef } from 'react';

const AvatarProfile = ({ isDark, size = 192 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2 - 10;

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

    // Draw circle background
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fill();

    // Add border
    ctx.strokeStyle = isDark ? '#22d3ee' : '#0284c7';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Draw letter "A"
    ctx.fillStyle = 'white';
    ctx.font = `bold ${size * 0.3}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('A', centerX, centerY - size * 0.05);

    // Draw "Ahmed" text
    ctx.font = `${size * 0.08}px Arial`;
    ctx.fillText('Ahmed', centerX, centerY + size * 0.15);

    // Draw "Designer" text
    ctx.font = `${size * 0.06}px Arial`;
    ctx.globalAlpha = 0.8;
    ctx.fillText('Designer', centerX, centerY + size * 0.25);
    ctx.globalAlpha = 1;

    // Add decorative dots
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.beginPath();
    ctx.arc(centerX + radius * 0.6, centerY - radius * 0.6, 6, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.beginPath();
    ctx.arc(centerX - radius * 0.7, centerY + radius * 0.5, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.beginPath();
    ctx.arc(centerX - radius * 0.8, centerY - radius * 0.2, 2, 0, 2 * Math.PI);
    ctx.fill();

  }, [isDark, size]);

  return (
    <div className="relative group">
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        className="rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
        style={{
          filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))'
        }}
      />
      
      {/* Animated glow effect */}
      <div 
        className={`absolute inset-0 rounded-full blur-xl opacity-30 animate-pulse ${
          isDark ? 'bg-cyan-400' : 'bg-blue-500'
        }`}
        style={{
          width: size,
          height: size,
          zIndex: -1
        }}
      ></div>
    </div>
  );
};

export default AvatarProfile;
