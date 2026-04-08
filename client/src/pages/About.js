import { Link } from 'react-router-dom';

const About = () => {

  const milestones = [
    {
      year:  '2018',
      title: 'FitZone Founded',
      desc:  'Started with a small gym and a big dream to transform lives through fitness.'
    },
    {
      year:  '2019',
      title: 'First 100 Members',
      desc:  'Reached our first milestone of 100 happy members within just one year.'
    },
    {
      year:  '2020',
      title: 'Expanded Classes',
      desc:  'Added yoga, pilates, dance and HIIT classes with certified instructors.'
    },
    {
      year:  '2022',
      title: 'New Equipment',
      desc:  'Invested in state of the art gym equipment and renovated the entire facility.'
    },
    {
      year:  '2024',
      title: '500+ Members',
      desc:  'Grew to over 500 active members and became the most loved gym in Kolkata.'
    },
    {
      year:  '2026',
      title: 'Online Booking',
      desc:  'Launched our online booking platform making it easier than ever to join classes.'
    },
  ];

  const values = [
    {
      icon:  '💪',
      title: 'Strength',
      desc:  'We believe every person has the strength to transform their body and mind.'
    },
    {
      icon:  '🤝',
      title: 'Community',
      desc:  'We are more than a gym — we are a family that supports each other every day.'
    },
    {
      icon:  '⭐',
      title: 'Excellence',
      desc:  'We maintain the highest standards in training, equipment and customer service.'
    },
    {
      icon:  '❤️',
      title: 'Passion',
      desc:  'Our trainers are passionate about fitness and dedicated to your success.'
    },
  ];

  return (
    <div>

      {/* ── Header ── */}
      <div style={{
        background:   'linear-gradient(135deg, #1a1a2e, #0f3460)',
        color:        'white',
        textAlign:    'center',
        padding:      '4rem 2rem',
        margin:       '-2rem -1rem 3rem -1rem',
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          About FitZone Gym
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color:    '#a8dadc',
          maxWidth: '600px',
          margin:   '0 auto'
        }}>
          We are more than just a gym. We are a community of passionate
          people dedicated to helping you become the best version of yourself.
        </p>
      </div>

      {/* ── Our Story Section ── */}
      <div style={{
        display:      'flex',
        gap:          '2rem',
        flexWrap:     'wrap',
        marginBottom: '4rem',
        alignItems:   'center'
      }}>
        {/* Image */}
        <div data-aos='fade-right' style={{ flex: '1 1 300px' }}>
          <img
            src='/images/about.jpg'
            alt='FitZone Gym'
            style={{
              width:        '100%',
              borderRadius: '12px',
              boxShadow:    '0 8px 25px rgba(0,0,0,0.15)',
              objectFit:    'cover',
              height:       '400px'
            }}
          />
        </div>

        {/* Story Text */}
        <div data-aos='fade-left' style={{ flex: '1 1 300px' }}>
          <h2 style={{
            color:        '#1a1a2e',
            fontSize:     '2rem',
            marginBottom: '1rem'
          }}>
            Our Story
          </h2>
          <p style={{
            color:        '#555',
            lineHeight:   '1.8',
            marginBottom: '1rem',
            fontSize:     '1rem'
          }}>
            FitZone Gym was founded in 2018 with a simple but powerful mission —
            to make fitness accessible, enjoyable and transformative for everyone
            in Kolkata regardless of their fitness level or background.
          </p>
          <p style={{
            color:        '#555',
            lineHeight:   '1.8',
            marginBottom: '1rem',
            fontSize:     '1rem'
          }}>
            What started as a small gym with just a handful of equipment has
            grown into a full-service fitness center with state of the art
            equipment, certified trainers, and a wide variety of classes
            for all fitness levels.
          </p>
          <p style={{
            color:        '#555',
            lineHeight:   '1.8',
            marginBottom: '2rem',
            fontSize:     '1rem'
          }}>
            Today we are proud to serve over 500 members who trust us with
            their fitness journey every single day. Our team of passionate
            trainers are committed to helping you reach your goals safely
            and effectively.
          </p>

          {/* Stats */}
          <div style={{
            display:  'flex',
            gap:      '1.5rem',
            flexWrap: 'wrap'
          }}>
            {[
              { number: '500+', label: 'Members'  },
              { number: '6',    label: 'Trainers' },
              { number: '8',    label: 'Classes'  },
              { number: '8+',   label: 'Years'    },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <h3 style={{
                  fontSize: '2rem',
                  color:    '#e63946',
                  margin:   0
                }}>
                  {stat.number}
                </h3>
                <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Our Values ── */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{
          textAlign:    'center',
          color:        '#1a1a2e',
          fontSize:     '2rem',
          marginBottom: '0.5rem'
        }}>
          Our Values
        </h2>
        <p style={{
          textAlign:    'center',
          color:        '#666',
          marginBottom: '2rem'
        }}>
          The principles that guide everything we do at FitZone
        </p>

        <div style={{
          display:  'flex',
          gap:      '1.5rem',
          flexWrap: 'wrap'
        }}>
          {values.map((value, i) => (
            <div key={i} data-aos='zoom-in'  data-aos-delay={i*100} style={{
              flex:            '1 1 200px',
              backgroundColor: 'white',
              borderRadius:    '12px',
              padding:         '2rem',
              textAlign:       'center',
              boxShadow:       '0 4px 12px rgba(0,0,0,0.08)',
              borderTop:       '4px solid #e63946'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                {value.icon}
              </div>
              <h3 style={{ color: '#1a1a2e', marginBottom: '0.75rem' }}>
                {value.title}
              </h3>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Our Journey Timeline ── */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{
          textAlign:    'center',
          color:        '#1a1a2e',
          fontSize:     '2rem',
          marginBottom: '0.5rem'
        }}>
          Our Journey
        </h2>
        <p style={{
          textAlign:    'center',
          color:        '#666',
          marginBottom: '2rem'
        }}>
          From humble beginnings to Kolkata's favourite gym
        </p>

        <div style={{ position: 'relative' }}>
          {milestones.map((milestone, i) => (
            <div key={i} data-aos={i%2==0 ? 'fade-right' :'fade-left'} style={{
              display:      'flex',
              gap:          '1.5rem',
              marginBottom: '1.5rem',
              alignItems:   'flex-start'
            }}>
              {/* Year Badge */}
              <div style={{
                minWidth:        '80px',
                backgroundColor: i % 2 === 0 ? '#e63946' : '#1a1a2e',
                color:           'white',
                borderRadius:    '8px',
                padding:         '0.5rem',
                textAlign:       'center',
                fontWeight:      'bold',
                fontSize:        '0.9rem'
              }}>
                {milestone.year}
              </div>

              {/* Content */}
              <div style={{
                flex:            1,
                backgroundColor: 'white',
                borderRadius:    '8px',
                padding:         '1rem 1.25rem',
                boxShadow:       '0 2px 8px rgba(0,0,0,0.08)',
                borderLeft:      `4px solid ${i % 2 === 0 ? '#e63946' : '#1a1a2e'}`
              }}>
                <h4 style={{ color: '#1a1a2e', margin: '0 0 0.4rem' }}>
                  {milestone.title}
                </h4>
                <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>
                  {milestone.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA Section ── */}
      <div style={{
        background:   'linear-gradient(135deg, #e63946, #c1121f)',
        color:        'white',
        padding:      '4rem 2rem',
        textAlign:    'center',
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Become Part of Our Story!
        </h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#ffe0e0' }}>
          Join our growing family of 500+ members and start your
          fitness journey with us today.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to='/register' style={{
            backgroundColor: 'white',
            color:           '#e63946',
            padding:         '0.85rem 2rem',
            borderRadius:    '4px',
            textDecoration:  'none',
            fontWeight:      'bold',
            fontSize:        '1rem'
          }}>
            Join Now
          </Link>
          <Link to='/contact' style={{
            backgroundColor: 'transparent',
            color:           'white',
            padding:         '0.85rem 2rem',
            borderRadius:    '4px',
            textDecoration:  'none',
            fontWeight:      'bold',
            fontSize:        '1rem',
            border:          '2px solid white'
          }}>
            Contact Us
          </Link>
        </div>
      </div>

    </div>
  );
};

export default About;