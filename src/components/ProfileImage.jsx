import React, { useState } from 'react';

const ProfileImage = ({ isDark, className = "" }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // List of possible image formats to try
  const imageSources = [
    "/IMG.png.png", // Direct path to the file you added
    "/IMG.png",
    "/IMG.jpg",
    "/IMG.jpeg",
    "/profile.jpg",
    "/profile.png",
    "/profileIMG_3719.HEIC",
    "/profileIMG_3719.jpg",
    "/profileIMG_3719.jpeg",
    "/profileIMG_3719.png",
    // Fallback to a placeholder
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageError = () => {
    if (currentImageIndex < imageSources.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
      setImageError(false);
    } else {
      setImageError(true);
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Glow effect background */}
      <div className={`absolute inset-0 rounded-full blur-xl opacity-30 ${
        isDark ? 'bg-cyan-400' : 'bg-blue-600'
      } animate-pulse`}></div>

      {/* Loading placeholder */}
      {!imageLoaded && !imageError && (
        <div className={`relative w-40 h-40 rounded-full border-4 ${
          isDark ? 'border-cyan-400 bg-gray-700' : 'border-blue-600 bg-gray-200'
        } flex items-center justify-center animate-pulse overflow-hidden`}>
          <div className={`text-4xl ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            👤
          </div>
          {/* Loading animation */}
          <div className={`absolute inset-0 ${
            isDark ? 'bg-gradient-to-r from-transparent via-gray-600 to-transparent'
                   : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'
          } animate-pulse`}></div>
        </div>
      )}
      
      {/* Actual image */}
      <img
        src={imageSources[currentImageIndex]}
        alt="Mohamed Nasser - Graphic Designer & Mobile Developer"
        className={`${imageLoaded ? 'block' : 'hidden'} relative w-40 h-40 rounded-full border-4 ${
          isDark ? 'border-cyan-400' : 'border-blue-600'
        } object-cover shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
        onError={handleImageError}
        onLoad={handleImageLoad}
        loading="eager"
        style={{
          filter: isDark ? 'brightness(0.95) contrast(1.05)' : 'brightness(1.05) contrast(1.02)',
          boxShadow: isDark
            ? '0 20px 40px rgba(34, 211, 238, 0.3), 0 0 0 1px rgba(34, 211, 238, 0.1)'
            : '0 20px 40px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(59, 130, 246, 0.1)'
        }}
      />
      
      {/* Error state - Professional avatar */}
      {imageError && (
        <div className={`w-40 h-40 rounded-full border-4 ${
          isDark ? 'border-cyan-400' : 'border-blue-600'
        } flex items-center justify-center relative overflow-hidden`}
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)'
            : 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 50%, #cbd5e1 100%)'
        }}>
          <div className={`text-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <div className="text-5xl mb-1">👨‍💻</div>
            <div className="text-sm font-bold">MN</div>
            <div className="text-xs opacity-75">Designer</div>
          </div>

          {/* Decorative elements */}
          <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${
            isDark ? 'bg-cyan-400' : 'bg-blue-600'
          } opacity-60`}></div>
          <div className={`absolute bottom-3 left-3 w-2 h-2 rounded-full ${
            isDark ? 'bg-cyan-400' : 'bg-blue-600'
          } opacity-40`}></div>
        </div>
      )}
    </div>
  );
};

export default ProfileImage;
