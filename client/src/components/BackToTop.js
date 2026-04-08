import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button when user scrolls down 300px
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      title='Back to Top'
      style={{
        position:        'fixed',
        bottom:          '2rem',
        right:           '2rem',
        backgroundColor: '#e63946',
        color:           'white',
        border:          'none',
        borderRadius:    '50%',
        width:           '50px',
        height:          '50px',
        fontSize:        '1.5rem',
        cursor:          'pointer',
        zIndex:          999,
        boxShadow:       '0 4px 15px rgba(230,57,70,0.5)',
        transition:      'all 0.3s',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform  = 'translateY(-3px)';
        e.currentTarget.style.boxShadow  = '0 8px 25px rgba(230,57,70,0.7)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform  = 'translateY(0)';
        e.currentTarget.style.boxShadow  = '0 4px 15px rgba(230,57,70,0.5)';
      }}
    >
      ↑
    </button>
  );
};

export default BackToTop;