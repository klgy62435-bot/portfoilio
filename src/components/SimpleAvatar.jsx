import React from 'react';

const SimpleAvatar = ({ isDark }) => {
  return (
    <div 
      className={`relative w-48 h-48 mx-auto rounded-full border-4 ${
        isDark ? 'border-cyan-400' : 'border-blue-600'
      } shadow-2xl hover:scale-105 transition-transform duration-300 flex items-center justify-center text-white font-bold overflow-hidden`}
      style={{
        background: isDark 
          ? 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
          : 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
        boxShadow: isDark
          ? '0 20px 40px rgba(6, 182, 212, 0.3), 0 0 0 1px rgba(6, 182, 212, 0.1)'
          : '0 20px 40px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(59, 130, 246, 0.1)'
      }}
    >
      {/* Main Content */}
      <div className="text-center z-10">
        <div className="text-7xl font-black mb-1 drop-shadow-lg">A</div>
        <div className="text-lg font-semibold opacity-95 drop-shadow-md">Ahmed</div>
        <div className="text-sm opacity-80 drop-shadow-sm">Designer</div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-6 right-6 w-4 h-4 bg-white rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-8 left-8 w-3 h-3 bg-white rounded-full opacity-40"></div>
      <div className="absolute top-1/2 left-4 w-2 h-2 bg-white rounded-full opacity-30"></div>
      <div className="absolute top-8 left-1/2 w-1 h-1 bg-white rounded-full opacity-50"></div>
      
      {/* Animated Ring */}
      <div 
        className={`absolute inset-2 rounded-full border-2 ${
          isDark ? 'border-cyan-300' : 'border-blue-300'
        } opacity-20 animate-spin`}
        style={{ animationDuration: '8s' }}
      ></div>
      
      {/* Glow Effect */}
      <div 
        className={`absolute inset-0 rounded-full blur-xl opacity-30 ${
          isDark ? 'bg-cyan-400' : 'bg-blue-500'
        } animate-pulse -z-10`}
      ></div>
      
      {/* Subtle Pattern */}
      <div 
        className="absolute inset-0 rounded-full opacity-10"
        style={{
          background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%),
                       radial-gradient(circle at 70% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)`
        }}
      ></div>
    </div>
  );
};

export default SimpleAvatar;
