const Trainers = () => {

  const trainers = [
    {
      name:       'Priya Sharma',
      image:      '/images/trainer1.jpg',
      specialty:  'Yoga & Meditation',
      experience: '8 Years',
      classes:    ['Morning Yoga', 'Weekend Yoga'],
      rating:     5,
      bio:        'Priya is a certified yoga instructor with expertise in Hatha and Vinyasa yoga. She has helped hundreds of students find peace and flexibility.',
      instagram:  '#',
      facebook:   '#',
    },
    {
      name:       'Rahul Verma',
      image:      '/images/trainer2.jpg',
      specialty:  'HIIT & Cardio',
      experience: '6 Years',
      classes:    ['HIIT Blast', 'Sunday HIIT'],
      rating:     5,
      bio:        'Rahul is an energetic HIIT specialist who pushes his students to their limits. His classes are intense, fun and incredibly effective.',
      instagram:  '#',
      facebook:   '#',
    },
    {
      name:       'Amit Singh',
      image:      '/images/trainer3.jpg',
      specialty:  'Cardio & Kickboxing',
      experience: '5 Years',
      classes:    ['Cardio Kickboxing'],
      rating:     4,
      bio:        'Amit combines martial arts with cardio training for a unique and powerful workout experience that improves fitness and self defense.',
      instagram:  '#',
      facebook:   '#',
    },
    {
      name:       'Vikram Patel',
      image:      '/images/trainer4.jpg',
      specialty:  'Strength & Powerlifting',
      experience: '10 Years',
      classes:    ['Strength Training'],
      rating:     5,
      bio:        'Vikram is a certified strength coach and former national powerlifting champion. He specializes in building muscle and improving athletic performance.',
      instagram:  '#',
      facebook:   '#',
    },
    {
      name:       'Neha Gupta',
      image:      '/images/trainer5.jpg',
      specialty:  'Pilates & Flexibility',
      experience: '7 Years',
      classes:    ['Pilates Flow'],
      rating:     5,
      bio:        'Neha is a dedicated pilates instructor who focuses on core strength, posture improvement and injury prevention through mindful movement.',
      instagram:  '#',
      facebook:   '#',
    },
    {
      name:       'Sneha Reddy',
      image:      '/images/trainer6.jpg',
      specialty:  'Dance & Zumba',
      experience: '4 Years',
      classes:    ['Zumba Dance'],
      rating:     4,
      bio:        'Sneha brings infectious energy and passion to every class. Her Zumba sessions are the perfect blend of fun, fitness and Latin dance rhythms.',
      instagram:  '#',
      facebook:   '#',
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
          Meet Our Trainers
        </h1>
        <p style={{
          fontSize:  '1.1rem',
          color:     '#a8dadc',
          maxWidth:  '500px',
          margin:    '0 auto'
        }}>
          Our certified trainers are passionate about helping you
          reach your fitness goals safely and effectively.
        </p>
      </div>

      {/* ── Trainer Cards ── */}
      <div style={{
        display:   'flex',
        flexWrap:  'wrap',
        gap:       '1.5rem',
        marginBottom: '3rem'
      }}>
        {trainers.map((trainer, i) => (
          <div key={i} data-aos='fade-up' data-aos-delays={i*100} style={{
            flex:            '1 1 300px',
            backgroundColor: 'white',
            borderRadius:    '12px',
            overflow:        'hidden',
            boxShadow:       '0 4px 15px rgba(0,0,0,0.1)',
            transition:      'transform 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >

            {/* Trainer Image */}
            <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
              <img
                src={trainer.image}
                alt={trainer.name}
                style={{
                  width:     '100%',
                  height:    '100%',
                  objectFit: 'cover',
                }}
              />
              {/* Experience Badge */}
              <div style={{
                position:        'absolute',
                top:             '1rem',
                right:           '1rem',
                backgroundColor: '#e63946',
                color:           'white',
                padding:         '0.3rem 0.75rem',
                borderRadius:    '20px',
                fontSize:        '0.8rem',
                fontWeight:      'bold'
              }}>
                {trainer.experience}
              </div>
            </div>

            {/* Trainer Info */}
            <div style={{ padding: '1.5rem' }}>

              {/* Name and Rating */}
              <div style={{
                display:        'flex',
                justifyContent: 'space-between',
                alignItems:     'center',
                marginBottom:   '0.5rem'
              }}>
                <h3 style={{ color: '#1a1a2e', margin: 0, fontSize: '1.2rem' }}>
                  {trainer.name}
                </h3>
                <div style={{ color: '#f4a261', fontSize: '1rem' }}>
                  {'★'.repeat(trainer.rating)}{'☆'.repeat(5 - trainer.rating)}
                </div>
              </div>

              {/* Specialty */}
              <span style={{
                backgroundColor: '#EBF5FB',
                color:           '#1d3557',
                padding:         '0.25rem 0.75rem',
                borderRadius:    '20px',
                fontSize:        '0.85rem',
                fontWeight:      'bold',
                display:         'inline-block',
                marginBottom:    '1rem'
              }}>
                {trainer.specialty}
              </span>

              {/* Bio */}
              <p style={{
                color:        '#666',
                fontSize:     '0.9rem',
                lineHeight:   '1.6',
                marginBottom: '1rem'
              }}>
                {trainer.bio}
              </p>

              {/* Classes They Teach */}
              <div style={{ marginBottom: '1rem' }}>
                <p style={{
                  fontWeight:   'bold',
                  color:        '#1a1a2e',
                  marginBottom: '0.5rem',
                  fontSize:     '0.9rem'
                }}>
                  Classes:
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {trainer.classes.map((cls, j) => (
                    <span key={j} style={{
                      backgroundColor: '#e63946',
                      color:           'white',
                      padding:         '0.2rem 0.6rem',
                      borderRadius:    '4px',
                      fontSize:        '0.8rem'
                    }}>
                      {cls}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div style={{
                display:       'flex',
                gap:           '0.75rem',
                paddingTop:    '1rem',
                borderTop:     '1px solid #eee'
              }}>
                <a href={trainer.instagram} style={{
                  backgroundColor: '#E1306C',
                  color:           'white',
                  padding:         '0.4rem 1rem',
                  borderRadius:    '4px',
                  textDecoration:  'none',
                  fontSize:        '0.85rem',
                  fontWeight:      'bold'
                }}>
                  Instagram
                </a>
                <a href={trainer.facebook} style={{
                  backgroundColor: '#1877F2',
                  color:           'white',
                  padding:         '0.4rem 1rem',
                  borderRadius:    '4px',
                  textDecoration:  'none',
                  fontSize:        '0.85rem',
                  fontWeight:      'bold'
                }}>
                  Facebook
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Bottom CTA ── */}
      <div style={{
        background:    'linear-gradient(135deg, #e63946, #c1121f)',
        color:         'white',
        padding:       '3rem 2rem',
        textAlign:     'center',
        borderRadius:  '8px',
        marginBottom:  '2rem'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>
          Train with the Best!
        </h2>
        <p style={{ marginBottom: '1.5rem', color: '#ffe0e0' }}>
          Join FitZone today and get access to all our certified trainers
        </p>
        <a href='/register' style={{
          backgroundColor: 'white',
          color:           '#e63946',
          padding:         '0.85rem 2.5rem',
          borderRadius:    '4px',
          textDecoration:  'none',
          fontWeight:      'bold',
          fontSize:        '1.1rem'
        }}>
          Join Now
        </a>
      </div>

    </div>
  );
};

export default Trainers;