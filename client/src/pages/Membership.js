import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Membership = () => {
  const { user } = useAuth();

  const plans = [
    {
      name:     'Basic',
      price:    'Free',
      color:    '#457b9d',
      popular:  false,
      features: [
        'Access to all gym classes',
        '5 class bookings per month',
        'Locker room access',
        'Basic fitness assessment',
        'Access to mobile app',
      ],
      notIncluded: [
        'Personal trainer sessions',
        'Nutrition guidance',
        'Spa and sauna access',
        'Priority booking',
      ]
    },
    {
      name:     'Premium',
      price:    '₹999',
      color:    '#e63946',
      popular:  true,
      features: [
        'Everything in Basic',
        'Unlimited class bookings',
        '2 Personal trainer sessions/month',
        'Nutrition guidance',
        'Access to mobile app',
        'Guest passes (2/month)',
      ],
      notIncluded: [
        'Spa and sauna access',
        'Free protein supplements',
      ]
    },
    {
      name:     'VIP',
      price:    '₹1,999',
      color:    '#f4a261',
      popular:  false,
      features: [
        'Everything in Premium',
        'Unlimited personal trainer',
        'Priority class booking',
        'Spa and sauna access',
        'Free protein supplements',
        'Dedicated locker',
        'Guest passes (5/month)',
      ],
      notIncluded: []
    }
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
          Membership Plans
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#a8dadc', maxWidth: '500px', margin: '0 auto' }}>
          Choose the perfect plan for your fitness journey.
          No hidden fees. Cancel anytime.
        </p>
      </div>

      {/* ── Plans Cards ── */}
      <div style={{
        display:        'flex',
        gap:            '1.5rem',
        flexWrap:       'wrap',
        justifyContent: 'center',
        marginBottom:   '3rem'
      }}>
        {plans.map((plan, i) => (
          <div key={i} data-aos='fade-up' data-aos-delays={i*150} style={{
            flex:        '1 1 280px',
            maxWidth:    '320px',
            borderRadius:'12px',
            overflow:    'hidden',
            boxShadow:   plan.popular
              ? '0 8px 30px rgba(230,57,70,0.3)'
              : '0 4px 12px rgba(0,0,0,0.1)',
            border:      plan.popular ? '2px solid #e63946' : '1px solid #eee',
            position:    'relative',
            backgroundColor: 'white'
          }}>

            {/* Popular Badge */}
            {plan.popular && (
              <div style={{
                position:        'absolute',
                top:             '1rem',
                right:           '1rem',
                backgroundColor: '#e63946',
                color:           'white',
                padding:         '0.25rem 0.75rem',
                borderRadius:    '20px',
                fontSize:        '0.8rem',
                fontWeight:      'bold'
              }}>
                MOST POPULAR
              </div>
            )}

            {/* Plan Header */}
            <div style={{
              backgroundColor: plan.color,
              padding:         '2rem',
              textAlign:       'center',
              color:           'white'
            }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                {plan.name}
              </h2>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
                {plan.price}
              </div>
              {plan.price !== 'Free' && (
                <p style={{ fontSize: '0.9rem', opacity: 0.85, margin: 0 }}>
                  per month
                </p>
              )}
            </div>

            {/* Features List */}
            <div style={{ padding: '1.5rem' }}>

              {/* Included features */}
              {plan.features.map((feature, j) => (
                <div key={j} style={{
                  display:       'flex',
                  alignItems:    'center',
                  gap:           '0.75rem',
                  marginBottom:  '0.75rem'
                }}>
                  <span style={{
                    color:      '#1a7a4a',
                    fontWeight: 'bold',
                    fontSize:   '1.1rem'
                  }}>✓</span>
                  <span style={{ color: '#333', fontSize: '0.95rem' }}>
                    {feature}
                  </span>
                </div>
              ))}

              {/* Not included features */}
              {plan.notIncluded.map((feature, j) => (
                <div key={j} style={{
                  display:      'flex',
                  alignItems:   'center',
                  gap:          '0.75rem',
                  marginBottom: '0.75rem'
                }}>
                  <span style={{
                    color:    '#ccc',
                    fontSize: '1.1rem'
                  }}>✗</span>
                  <span style={{ color: '#aaa', fontSize: '0.95rem' }}>
                    {feature}
                  </span>
                </div>
              ))}

              {/* CTA Button */}
              <Link
                to={user ? '/dashboard' : '/register'}
                style={{
                  display:         'block',
                  textAlign:       'center',
                  marginTop:       '1.5rem',
                  padding:         '0.85rem',
                  backgroundColor: plan.color,
                  color:           'white',
                  borderRadius:    '6px',
                  textDecoration:  'none',
                  fontWeight:      'bold',
                  fontSize:        '1rem',
                  transition:      'opacity 0.2s'
                }}
              >
                {user ? 'Current Plan' : 'Get Started'}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ── FAQ Section ── */}
      <div style={{
        backgroundColor: '#f8f9fa',
        borderRadius:    '8px',
        padding:         '2rem',
        marginBottom:    '2rem'
      }}>
        <h2 style={{
          textAlign:    'center',
          marginBottom: '1.5rem',
          color:        '#1a1a2e'
        }}>
          Frequently Asked Questions
        </h2>

        {[
          {
            q: 'Can I cancel my membership anytime?',
            a: 'Yes! You can cancel your membership at any time with no cancellation fees.'
          },
          {
            q: 'Can I upgrade my plan later?',
            a: 'Absolutely! You can upgrade from Basic to Premium or VIP at any time.'
          },
          {
            q: 'Is there a joining fee?',
            a: 'No joining fee at all. What you see is what you pay.'
          },
          {
            q: 'What payment methods are accepted?',
            a: 'We accept UPI, credit/debit cards, net banking, and cash at the gym.'
          }
        ].map((faq, i) => (
          <div key={i} data-aos='fade-left' data-aos-delays={i*100} style={{
            backgroundColor: 'white',
            borderRadius:    '6px',
            padding:         '1.25rem',
            marginBottom:    '1rem',
            borderLeft:      '4px solid #e63946'
          }}>
            <h4 style={{ color: '#1a1a2e', marginBottom: '0.5rem' }}>
              {faq.q}
            </h4>
            <p style={{ color: '#666', margin: 0 }}>{faq.a}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Membership;