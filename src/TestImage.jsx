import React from 'react';

const TestImage = () => {
  const programmerImage = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
  console.log('Programmer image path:', programmerImage);
  
  return (
    <div style={{
      padding: '50px',
      textAlign: 'center',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh'
    }}>
      <h1>Image Test Page</h1>
      
      <div style={{
        margin: '30px auto',
        width: '300px',
        height: '300px',
        border: '5px solid #06b6d4',
        borderRadius: '20px',
        overflow: 'hidden',
        backgroundColor: 'white'
      }}>
        <img
          src={programmerImage}
          alt="Programmer Test"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          onLoad={() => {
            console.log('✅ SUCCESS: Image loaded!');
            alert('✅ Image loaded successfully!');
          }}
          onError={(e) => {
            console.log('❌ ERROR: Image failed to load');
            console.log('Src:', e.target.src);
            alert('❌ Image failed to load!');
            e.target.style.backgroundColor = '#ff6b6b';
            e.target.style.color = 'white';
            e.target.style.display = 'flex';
            e.target.style.alignItems = 'center';
            e.target.style.justifyContent = 'center';
            e.target.innerHTML = 'FAILED TO LOAD';
            e.target.style.fontSize = '20px';
            e.target.style.fontWeight = 'bold';
          }}
        />
      </div>
      
      <div style={{ marginTop: '20px', fontSize: '16px' }}>
        <p><strong>Image Path:</strong> {programmerImage}</p>
        <p><strong>Check console and alerts for status</strong></p>
      </div>
      
      {/* Test with different approaches */}
      <div style={{ marginTop: '40px' }}>
        <h2>Alternative Tests:</h2>
        
        <div style={{ margin: '20px 0' }}>
          <h3>Test 1: Online programmer image</h3>
          <img
            src={programmerImage}
            alt="Test 1"
            style={{ width: '100px', height: '100px', border: '2px solid green' }}
            onLoad={() => console.log('✅ Online image worked')}
            onError={() => console.log('❌ Online image failed')}
          />
        </div>
        
        <div style={{ margin: '20px 0' }}>
          <h3>Test 3: IMG.png fallback</h3>
          <img 
            src="/IMG.png" 
            alt="Test 3"
            style={{ width: '100px', height: '100px', border: '2px solid green' }}
            onLoad={() => console.log('✅ IMG.png worked')}
            onError={() => console.log('❌ IMG.png failed')}
          />
        </div>
      </div>
    </div>
  );
};

export default TestImage;
