import React, { useEffect, useRef } from 'react';

const AnimatedBackground = ({ isDark = true }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 3 + 1;
        this.originalRadius = this.radius;
        this.life = Math.random() * 100;
        this.maxLife = 100;
        this.hue = Math.random() * 60 + (isDark ? 180 : 200); // Cyan to blue range
      }

      update() {
        // Update position
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges with some energy loss
        if (this.x < 0 || this.x > canvas.width) {
          this.vx *= -0.8;
          this.x = Math.max(0, Math.min(canvas.width, this.x));
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.vy *= -0.8;
          this.y = Math.max(0, Math.min(canvas.height, this.y));
        }

        // Enhanced mouse interaction
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          const angle = Math.atan2(dy, dx);
          
          // Attraction force
          this.vx += Math.cos(angle) * force * 0.02;
          this.vy += Math.sin(angle) * force * 0.02;
          
          // Increase size when near mouse
          this.radius = this.originalRadius * (1 + force * 0.5);
        } else {
          // Return to original size
          this.radius += (this.originalRadius - this.radius) * 0.1;
        }

        // Add some randomness
        this.vx += (Math.random() - 0.5) * 0.01;
        this.vy += (Math.random() - 0.5) * 0.01;

        // Limit velocity
        this.vx = Math.max(-3, Math.min(3, this.vx));
        this.vy = Math.max(-3, Math.min(3, this.vy));

        // Update life for pulsing effect
        this.life += 0.5;
        if (this.life > this.maxLife) this.life = 0;
      }

      draw() {
        const pulse = Math.sin(this.life * 0.1) * 0.3 + 0.7;
        const alpha = pulse * 0.8;
        
        // Gradient effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius * 2
        );
        
        if (isDark) {
          gradient.addColorStop(0, `hsla(${this.hue}, 70%, 60%, ${alpha})`);
          gradient.addColorStop(1, `hsla(${this.hue}, 70%, 60%, 0)`);
        } else {
          gradient.addColorStop(0, `hsla(${this.hue}, 60%, 50%, ${alpha})`);
          gradient.addColorStop(1, `hsla(${this.hue}, 60%, 50%, 0)`);
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Inner glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = isDark 
          ? `hsla(${this.hue}, 80%, 70%, ${alpha * 0.8})` 
          : `hsla(${this.hue}, 70%, 40%, ${alpha * 0.8})`;
        ctx.fill();
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(120, Math.floor((canvas.width * canvas.height) / 8000));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
      particlesRef.current = particles;
    };

    // Enhanced connection drawing
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 140) {
            const opacity = (140 - distance) / 140;
            
            // Create gradient line
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            
            if (isDark) {
              gradient.addColorStop(0, `rgba(34, 211, 238, ${opacity * 0.4})`);
              gradient.addColorStop(0.5, `rgba(59, 130, 246, ${opacity * 0.6})`);
              gradient.addColorStop(1, `rgba(34, 211, 238, ${opacity * 0.4})`);
            } else {
              gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity * 0.3})`);
              gradient.addColorStop(0.5, `rgba(99, 102, 241, ${opacity * 0.5})`);
              gradient.addColorStop(1, `rgba(59, 130, 246, ${opacity * 0.3})`);
            }

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = opacity * 2;
            ctx.stroke();
          }
        }
      }
    };

    // Mouse interaction effect
    const drawMouseEffect = () => {
      const mouseRadius = 100;
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x, mouseRef.current.y, 0,
        mouseRef.current.x, mouseRef.current.y, mouseRadius
      );
      
      if (isDark) {
        gradient.addColorStop(0, 'rgba(34, 211, 238, 0.1)');
        gradient.addColorStop(1, 'rgba(34, 211, 238, 0)');
      } else {
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.08)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
      }

      ctx.beginPath();
      ctx.arc(mouseRef.current.x, mouseRef.current.y, mouseRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    // Animation loop
    const animate = () => {
      // Clear with slight trail effect
      ctx.fillStyle = isDark 
        ? 'rgba(15, 23, 42, 0.05)' 
        : 'rgba(248, 250, 252, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw mouse effect
      drawMouseEffect();
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw connections
      drawConnections();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    // Initialize and start animation
    initParticles();
    animate();
    
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        background: isDark 
          ? 'radial-gradient(ellipse at top, #1e293b 0%, #0f172a 50%, #020617 100%)'
          : 'radial-gradient(ellipse at top, #f1f5f9 0%, #e2e8f0 50%, #cbd5e1 100%)'
      }}
    />
  );
};

export default AnimatedBackground;
