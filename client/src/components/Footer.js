import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>

      {/* ── Main Footer ── */}
      <div style={{
        backgroundColor: '#050505',
        color:           'white',
        padding:         '3rem 2rem 2rem',
        marginTop:       '4rem'
      }}>
        <div style={{
          maxWidth:  '1100px',
          margin:    '0 auto',
          display:   'flex',
          gap:       '2rem',
          flexWrap:  'wrap'
        }}>

          {/* ── Column 1 — Brand ── */}
          <div style={{ flex: '1 1 220px' }}>
            <h2 style={{
              color:        '#e63946',
              fontSize:     '1.5rem',
              marginBottom: '1rem'
            }}>
              FitZone Gym
            </h2>
            <p style={{
              color:      '#a8dadc',
              fontSize:   '0.9rem',
              lineHeight: '1.7',
              marginBottom: '1.5rem'
            }}>
              Transforming lives through fitness since 2018.
              Join our community of 500+ members and start
              your journey today.
            </p>
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {[
                { name: 'Instagram', color: '#E1306C' },
                { name: 'Facebook',  color: '#1877F2' },
                { name: 'YouTube',   color: '#FF0000' },
                { name: 'Twitter',   color: '#1DA1F2' },
              ].map((social, i) => (
                <a key={i} href='#' style={{
                  backgroundColor: social.color,
                  color:           'white',
                  padding:         '0.3rem 0.6rem',
                  borderRadius:    '4px',
                  textDecoration:  'none',
                  fontSize:        '0.75rem',
                  fontWeight:      'bold'
                }}>
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* ── Column 2 — Quick Links ── */}
          <div style={{ flex: '1 1 150px' }}>
            <h4 style={{
              color:        'white',
              marginBottom: '1rem',
              fontSize:     '1rem',
              borderBottom: '2px solid #e63946',
              paddingBottom:'0.5rem'
            }}>
              Quick Links
            </h4>
            {[
              { name: 'Home',       path: '/'          },
              { name: 'About Us',   path: '/about'     },
              { name: 'Classes',    path: '/classes'   },
              { name: 'Trainers',   path: '/trainers'  },
              { name: 'Membership', path: '/membership'},
              { name: 'Contact',    path: '/contact'   },
            ].map((link, i) => (
              <div key={i} style={{ marginBottom: '0.5rem' }}>
                <Link to={link.path} style={{
                  color:          '#a8dadc',
                  textDecoration: 'none',
                  fontSize:       '0.9rem',
                  transition:     'color 0.2s'
                }}
                  onMouseEnter={e => e.target.style.color = '#e63946'}
                  onMouseLeave={e => e.target.style.color = '#a8dadc'}
                >
                  → {link.name}
                </Link>
              </div>
            ))}
          </div>

          {/* ── Column 3 — Classes ── */}
          <div style={{ flex: '1 1 150px' }}>
            <h4 style={{
              color:        'white',
              marginBottom: '1rem',
              fontSize:     '1rem',
              borderBottom: '2px solid #e63946',
              paddingBottom:'0.5rem'
            }}>
              Our Classes
            </h4>
            {[
              'Morning Yoga',
              'HIIT Blast',
              'Cardio Kickboxing',
              'Strength Training',
              'Pilates Flow',
              'Zumba Dance',
            ].map((cls, i) => (
              <div key={i} style={{ marginBottom: '0.5rem' }}>
                <Link to='/classes' style={{
                  color:          '#a8dadc',
                  textDecoration: 'none',
                  fontSize:       '0.9rem',
                }}
                  onMouseEnter={e => e.target.style.color = '#e63946'}
                  onMouseLeave={e => e.target.style.color = '#a8dadc'}
                >
                  → {cls}
                </Link>
              </div>
            ))}
          </div>

          {/* ── Column 4 — Contact Info ── */}
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{
              color:        'white',
              marginBottom: '1rem',
              fontSize:     '1rem',
              borderBottom: '2px solid #e63946',
              paddingBottom:'0.5rem'
            }}>
              Contact Info
            </h4>
            {[
              { icon: '📍', text: '123 Fitness Street, Kolkata, West Bengal 700001' },
              { icon: '📞', text: '+91 98765 43210'        },
              { icon: '📧', text: 'info@fitzonegym.com'    },
              { icon: '🕐', text: 'Mon-Fri: 6am - 10pm'   },
              { icon: '🕐', text: 'Sat-Sun: 7am - 8pm'    },
            ].map((item, i) => (
              <div key={i} style={{
                display:      'flex',
                gap:          '0.5rem',
                marginBottom: '0.75rem',
                alignItems:   'flex-start'
              }}>
                <span style={{ fontSize: '0.9rem' }}>{item.icon}</span>
                <p style={{
                  color:     '#a8dadc',
                  fontSize:  '0.85rem',
                  margin:    0,
                  lineHeight:'1.5'
                }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* ── Newsletter Section ── */}
        <div style={{
          maxWidth:     '1100px',
          margin:       '2rem auto 0',
          padding:      '2rem',
          backgroundColor: '#111111',
          borderRadius: '8px',
          display:      'flex',
          gap:          '1rem',
          flexWrap:     'wrap',
          alignItems:   'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <h4 style={{ color: 'white', margin: '0 0 0.25rem' }}>
              Subscribe to Our Newsletter
            </h4>
            <p style={{ color: '#a8dadc', margin: 0, fontSize: '0.85rem' }}>
              Get fitness tips, class updates and special offers!
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flex: '1', maxWidth: '400px' }}>
            <input
              type='email'
              placeholder='Enter your email address'
              style={{
                flex:         1,
                padding:      '0.6rem 1rem',
                borderRadius: '4px',
                border:       'none',
                fontSize:     '0.9rem',
                outline:      'none'
              }}
            />
            <button style={{
              backgroundColor: '#e63946',
              color:           'white',
              border:          'none',
              padding:         '0.6rem 1.25rem',
              borderRadius:    '4px',
              cursor:          'pointer',
              fontWeight:      'bold',
              fontSize:        '0.9rem',
              whiteSpace:      'nowrap'
            }}>
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* ── Bottom Bar ── */}
      <div style={{
        backgroundColor: '#000000',
        padding:         '1rem 2rem',
        textAlign:       'center'
      }}>
        <div style={{
          maxWidth:       '1100px',
          margin:         '0 auto',
          display:        'flex',
          justifyContent: 'space-between',
          alignItems:     'center',
          flexWrap:       'wrap',
          gap:            '0.5rem'
        }}>
          <p style={{ color: '#666', fontSize: '0.85rem', margin: 0 }}>
            © 2026 FitZone Gym. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item, i) => (
              <a key={i} href='#' style={{
                color:          '#666',
                textDecoration: 'none',
                fontSize:       '0.85rem'
              }}
                onMouseEnter={e => e.target.style.color = '#e63946'}
                onMouseLeave={e => e.target.style.color = '#666'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;