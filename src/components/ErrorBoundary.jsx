import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('🚨 ERROR BOUNDARY CAUGHT AN ERROR:');
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Show error notification
    const notification = document.createElement('div');
    notification.innerHTML = '🚨 Application Error - Check Console';
    notification.style.cssText = `
      position: fixed; top: 20px; right: 20px; z-index: 9999;
      background: #dc2626; color: white; padding: 15px 25px;
      border-radius: 8px; font-size: 14px; font-weight: bold;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      max-width: 300px;
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 10000);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1e293b, #334155)',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
          padding: '20px',
          textAlign: 'center'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '40px',
            borderRadius: '20px',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            maxWidth: '600px',
            width: '100%'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>🚨</div>
            <h1 style={{ fontSize: '32px', marginBottom: '20px', color: '#ef4444' }}>
              Oops! Something went wrong
            </h1>
            <p style={{ fontSize: '18px', marginBottom: '30px', opacity: 0.8 }}>
              Don't worry, this is just a technical hiccup. The portfolio is still awesome!
            </p>
            
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '30px',
              textAlign: 'left',
              fontSize: '14px',
              fontFamily: 'monospace'
            }}>
              <div style={{ color: '#fbbf24', marginBottom: '10px' }}>🔍 Debug Information:</div>
              <div>Error: {this.state.error && this.state.error.toString()}</div>
              <div style={{ marginTop: '10px', fontSize: '12px', opacity: 0.7 }}>
                Check browser console (F12) for detailed error logs
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => window.location.reload()}
                style={{
                  padding: '12px 24px',
                  background: '#06b6d4',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                🔄 Reload Page
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                style={{
                  padding: '12px 24px',
                  background: '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                🏠 Go Home
              </button>
              
              <button
                onClick={() => window.open('/image-test.html', '_blank')}
                style={{
                  padding: '12px 24px',
                  background: '#8b5cf6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                🧪 Test Images
              </button>
            </div>
            
            <div style={{
              marginTop: '30px',
              padding: '15px',
              background: 'rgba(34, 211, 238, 0.1)',
              borderRadius: '8px',
              border: '1px solid rgba(34, 211, 238, 0.3)'
            }}>
              <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>
                💡 Quick Fixes:
              </div>
              <div style={{ fontSize: '14px', textAlign: 'left' }}>
                • Clear browser cache (Ctrl+F5)<br/>
                • Check if images exist in /public folder<br/>
                • Verify internet connection<br/>
                • Try opening in incognito mode
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
