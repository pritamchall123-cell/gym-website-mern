import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div>

      {/* ── Hero Section with Background Image ── */}
      <div style={{
        backgroundImage:    'url(/images/hero.jpg)',
        backgroundSize:     'cover',
        backgroundPosition: 'center',
        backgroundRepeat:   'no-repeat',
        minHeight:          '90vh',
        display:            'flex',
        alignItems:         'center',
        justifyContent:     'center',
        textAlign:          'center',
        margin:             '-2rem -1rem 2rem -1rem',
        position:           'relative'
      }}>
        {/* Dark overlay so text is readable */}
        <div style={{
          position:        'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)'
        }} />

        {/* Hero Content */}
        <div style={{ position: 'relative', zIndex: 1, padding: '2rem' }}>
          <h1 style={{
            fontSize:     '3.5rem',
            color:        'white',
            marginBottom: '1rem',
            fontWeight:   'bold',
            textShadow:   '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            Train Harder. Live Better.
          </h1>
          <p style={{
            fontSize:     '1.3rem',
            color:        '#f0f0f0',
            marginBottom: '2.5rem',
            maxWidth:     '600px',
            margin:       '0 auto 2rem'
          }}>
            Join FitZone Gym and transform your life with world-class trainers
          </p>
          <Link
            to={user ? '/classes' : '/register'}
            style={{
              backgroundColor: '#e63946',
              color:           'white',
              padding:         '1rem 3rem',
              borderRadius:    '4px',
              textDecoration:  'none',
              fontSize:        '1.2rem',
              fontWeight:      'bold',
              boxShadow:       '0 4px 15px rgba(230,57,70,0.4)'
            }}
          >
            {user ? 'Browse Classes' : 'Start Free Today'}
          </Link>
        </div>
      </div>

      {/* ── Stats Section ── */}
      <div data-aos='fade-up' style={{
        display:         'flex',
        justifyContent:  'center',
        gap:             '2rem',
        flexWrap:        'wrap',
        marginBottom:    '3rem',
        padding:         '2rem',
        backgroundColor: '#1a1a2e',
        borderRadius:    '8px',
        color:           'white'
      }}>
        {[
          { number: '500+', label: 'Happy Members'   },
          { number: '20+',  label: 'Expert Trainers' },
          { number: '8',    label: 'Weekly Classes'  },
          { number: '5+',   label: 'Years Experience'},
        ].map((stat, i) => (
          <div key={i} style={{ textAlign: 'center', minWidth: '120px' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#e63946', margin: 0 }}>
              {stat.number}
            </h2>
            <p style={{ color: '#a8dadc', margin: 0 }}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* ── Classes Preview Section ── */}
      <h2 style={{
        textAlign:    'center',
        marginBottom: '2rem',
        color:        '#1a1a2e',
        fontSize:     '2rem'
      }}>
        Our Popular Classes
      </h2>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        {[
          { name: 'Yoga',             image: '/images/yoga.jpg',     desc: 'Find peace and flexibility' },
          { name: 'HIIT',             image: '/images/hiit.jpg',     desc: 'Burn maximum calories'      },
          { name: 'Strength',         image: '/images/strength.jpg', desc: 'Build muscle and power'     },
          { name: 'Cardio',           image: '/images/cardio.jpg',   desc: 'Improve your endurance'     },
          { name: 'Dance',            image: '/images/dance.jpg',    desc: 'Fun fitness with rhythm'    },
          { name: 'Pilates',          image: '/images/pilatees.jpg', desc: 'Core strength and balance'  },
        ].map((cls, i) => (
          <div key={i} data-aos='zoom-in' data-aos-delay={i*100} style={{
            flex:         '1 1 280px',
            borderRadius: '8px',
            overflow:     'hidden',
            boxShadow:    '0 4px 12px rgba(0,0,0,0.1)',
            position:     'relative',
            height:       '200px',
            cursor:       'pointer'
          }}>
            {/* Class Image */}
            <img
              src={cls.image}
              alt={cls.name}
              style={{
                width:      '100%',
                height:     '100%',
                objectFit:  'cover'
              }}
            />
            {/* Dark overlay */}
            <div style={{
              position:        'absolute',
              bottom: 0, left: 0, right: 0,
              background:      'linear-gradient(transparent, rgba(0,0,0,0.8))',
              padding:         '1rem',
              color:           'white'
            }}>
              <h3 style={{ margin: 0 }}>{cls.name}</h3>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#ddd' }}>{cls.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── CTA Section ── */}
      <div data-aos='fade-up' style={{
        background:    'linear-gradient(135deg, #e63946, #c1121f)',
        color:         'white',
        padding:       '4rem 2rem',
        textAlign:     'center',
        borderRadius:  '8px',
        marginBottom:  '2rem'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Ready to Start Your Journey?
        </h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#ffe0e0' }}>
          Join 500+ members who are already transforming their lives at FitZone
        </p>
        <Link
          to={user ? '/classes' : '/register'}
          style={{
            backgroundColor: 'white',
            color:           '#e63946',
            padding:         '1rem 2.5rem',
            borderRadius:    '4px',
            textDecoration:  'none',
            fontWeight:      'bold',
            fontSize:        '1.1rem'
          }}
        >
          {user ? 'Book a Class Now' : 'Join FitZone Today'}
        </Link>
      </div>

    </div>
  );
};

export default Home;