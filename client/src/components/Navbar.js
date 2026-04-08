import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{
      display:         'flex',
      justifyContent:  'space-between',
      alignItems:      'center',
      padding:         '1rem 2rem',
      backgroundColor: '#050505',
      borderBottom:    '1px solid #1a1a1a',
      position:        'sticky',
      top:             0,
      zIndex:          1000,
      boxShadow:       '0 2px 20px rgba(0,0,0,0.8)'
    }}>

      {/* Logo */}
      <Link to='/' style={{
        textDecoration: 'none',
        display:        'flex',
        alignItems:     'center',
        gap:            '0.5rem'
      }}>
        <span style={{
          backgroundColor: '#e63946',
          color:           'white',
          padding:         '0.2rem 0.6rem',
          borderRadius:    '4px',
          fontWeight:      'bold',
          fontSize:        '1.1rem'
        }}>
          FIT
        </span>
        <span style={{
          color:      'white',
          fontWeight: 'bold',
          fontSize:   '1.1rem'
        }}>
          ZONE
        </span>
      </Link>

      {/* Navigation Links */}
      <div style={{
        display:    'flex',
        gap:        '1.5rem',
        alignItems: 'center'
      }}>
        {[
          { name: 'Classes',    path: '/classes'    },
          { name: 'Trainers',   path: '/trainers'   },
          { name: 'Membership', path: '/membership' },
          { name: 'About',      path: '/about'      },
          { name: 'Contact',    path: '/contact'    },
        ].map((link, i) => (
          <Link key={i} to={link.path} style={{
            color:          '#a0a0a0',
            textDecoration: 'none',
            fontSize:       '0.9rem',
            fontWeight:     '500',
            transition:     'color 0.2s',
            textTransform:  'uppercase',
            letterSpacing:  '0.5px'
          }}
            onMouseEnter={e => e.target.style.color = '#e63946'}
            onMouseLeave={e => e.target.style.color = '#a0a0a0'}
          >
            {link.name}
          </Link>
        ))}

        {user ? (
          <>
            <Link to='/dashboard' style={{
              color:          '#e63946',
              textDecoration: 'none',
              fontSize:       '0.9rem',
              fontWeight:     'bold'
            }}>
              Hi, {user.name}
            </Link>
            <button onClick={handleLogout} style={{
              backgroundColor: 'transparent',
              color:           '#a0a0a0',
              border:          '1px solid #333',
              padding:         '0.4rem 1rem',
              borderRadius:    '4px',
              cursor:          'pointer',
              fontSize:        '0.85rem',
              transition:      'all 0.2s'
            }}
              onMouseEnter={e => {
                e.target.style.borderColor = '#e63946';
                e.target.style.color = '#e63946';
              }}
              onMouseLeave={e => {
                e.target.style.borderColor = '#333';
                e.target.style.color = '#a0a0a0';
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to='/login' style={{
              color:          '#a0a0a0',
              textDecoration: 'none',
              fontSize:       '0.9rem',
              textTransform:  'uppercase',
              letterSpacing:  '0.5px'
            }}
              onMouseEnter={e => e.target.style.color = '#e63946'}
              onMouseLeave={e => e.target.style.color = '#a0a0a0'}
            >
              Login
            </Link>
            <Link to='/register' style={{
              background:     'linear-gradient(135deg, #e63946, #c1121f)',
              color:          'white',
              padding:        '0.5rem 1.25rem',
              borderRadius:   '4px',
              textDecoration: 'none',
              fontWeight:     'bold',
              fontSize:       '0.9rem',
              boxShadow:      '0 4px 15px rgba(230,57,70,0.3)',
              transition:     'all 0.3s'
            }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 20px rgba(230,57,70,0.5)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 15px rgba(230,57,70,0.3)'}
            >
              Join Now
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;