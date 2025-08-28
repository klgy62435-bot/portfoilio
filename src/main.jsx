import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import "./index.css";  // <--- مهم جداً

// 🎨 Console styling
console.log('%c🚀 AHMED PORTFOLIO STARTING...', 'color: #06b6d4; font-size: 20px; font-weight: bold;');
console.log('%c📱 Portfolio by Ahmed Design', 'color: #10b981; font-size: 16px;');
console.log('%c🔍 Debug mode: ACTIVE', 'color: #f59e0b; font-size: 14px;');
console.log('%c📊 Environment:', process.env.NODE_ENV, 'color: #8b5cf6;');
console.log('%c🌐 URL:', window.location.href, 'color: #06b6d4;');

// 🔍 Global error handler
window.addEventListener('error', (event) => {
  console.error('🚨 GLOBAL ERROR:', event.error);
  console.error('📍 Source:', event.filename, 'Line:', event.lineno);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('🚨 UNHANDLED PROMISE REJECTION:', event.reason);
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
