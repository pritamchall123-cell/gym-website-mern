import { useState, useEffect } from 'react';

const SplashScreen = ({ onFinish }) => {
  const [progress,  setProgress]  = useState(0);
  const [fadeOut,   setFadeOut]   = useState(false);
  const [text,      setText]      = useState('Initializing...');

  const loadingTexts = [
    'Initializing...',
    'Loading Classes...',
    'Getting Trainers Ready...',
    'Preparing Your Experience...',
    'Almost There...',
    'Welcome to FitZone!'
  ];

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setProgress(current);

      // Change text at different progress points
      if (current === 20)  setText(loadingTexts[1]);
      if (current === 40)  setText(loadingTexts[2]);
      if (current === 60)  setText(loadingTexts[3]);
      if (current === 80)  setText(loadingTexts[4]);
      if (current === 95)  setText(loadingTexts[5]);

      if (current >= 100) {
        clearInterval(interval);
        // Start fade out after reaching 100%
        setTimeout(() => setFadeOut(true), 500);
        // Call onFinish after fade out
        setTimeout(() => onFinish(), 1200);
      }
    }, 25); // speed of loading bar

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position:        'fixed',
      top:             0,
      left:            0,
      right:           0,
      bottom:          0,
      backgroundColor: '#0a0a0a',
      display:         'flex',
      flexDirection:   'column',
      alignItems:      'center',
      justifyContent:  'center',
      zIndex:          9999,
      opacity:         fadeOut ? 0 : 1,
      transition:      'opacity 0.7s ease',
    }}>

      {/* Background Pattern */}
      <div style={{
        position:   'absolute',
        top:        0,
        left:       0,
        right:      0,
        bottom:     0,
        background: 'radial-gradient(circle at 20% 50%, rgba(230,57,70,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(230,57,70,0.05) 0%, transparent 50%)',
      }} />

      {/* Logo */}
      <div style={{
        textAlign:    'center',
        marginBottom: '3rem',
        position:     'relative',
        zIndex:       1
      }}>
        <div style={{
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          gap:            '0.5rem',
          marginBottom:   '0.5rem'
        }}>
          <span style={{
            backgroundColor: '#e63946',
            color:           'white',
            padding:         '0.4rem 1rem',
            borderRadius:    '6px',
            fontWeight:      'bold',
            fontSize:        '2.5rem',
            boxShadow:       '0 0 30px rgba(230,57,70,0.5)'
          }}>
            FIT
          </span>
          <span style={{
            color:      'white',
            fontWeight: 'bold',
            fontSize:   '2.5rem',
          }}>
            ZONE
          </span>
        </div>
        <p style={{
          color:         '#666',
          fontSize:      '0.9rem',
          letterSpacing: '3px',
          textTransform: 'uppercase'
        }}>
          Train Harder. Live Better.
        </p>
      </div>

      {/* Animated Dumbbell Icon */}
      <div style={{
        fontSize:     '4rem',
        marginBottom: '2rem',
        animation:    'pulse 1s infinite',
        position:     'relative',
        zIndex:       1
      }}>
        🏋️
      </div>

      {/* Progress Bar Container */}
      <div style={{
        width:           '300px',
        position:        'relative',
        zIndex:          1
      }}>

        {/* Progress percentage */}
        <div style={{
          display:        'flex',
          justifyContent: 'space-between',
          marginBottom:   '0.5rem'
        }}>
          <span style={{
            color:     '#666',
            fontSize:  '0.8rem',
            letterSpacing: '1px'
          }}>
            {text}
          </span>
          <span style={{
            color:      '#e63946',
            fontSize:   '0.8rem',
            fontWeight: 'bold'
          }}>
            {progress}%
          </span>
        </div>

        {/* Progress Bar Track */}
        <div style={{
          width:           '100%',
          height:          '4px',
          backgroundColor: '#1a1a1a',
          borderRadius:    '4px',
          overflow:        'hidden',
          border:          '1px solid #222'
        }}>
          {/* Progress Bar Fill */}
          <div style={{
            width:        `${progress}%`,
            height:       '100%',
            background:   'linear-gradient(90deg, #e63946, #ff6b6b)',
            borderRadius: '4px',
            transition:   'width 0.025s linear',
            boxShadow:    '0 0 10px rgba(230,57,70,0.7)'
          }} />
        </div>

        {/* Dots animation */}
        <div style={{
          display:        'flex',
          justifyContent: 'center',
          gap:            '0.5rem',
          marginTop:      '1.5rem'
        }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width:           '8px',
              height:          '8px',
              borderRadius:    '50%',
              backgroundColor: progress > (i + 1) * 25 ? '#e63946' : '#333',
              transition:      'background-color 0.3s',
              boxShadow:       progress > (i + 1) * 25
                ? '0 0 8px rgba(230,57,70,0.7)'
                : 'none'
            }} />
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes pulse {
          0%   { transform: scale(1);    }
          50%  { transform: scale(1.1);  }
          100% { transform: scale(1);    }
        }
      `}</style>

    </div>
  );
};

export default SplashScreen;