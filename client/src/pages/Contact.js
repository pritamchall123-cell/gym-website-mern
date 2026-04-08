import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulating API call
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.4rem',
    fontWeight: 'bold',
    color: '#333',
    fontSize: '0.9rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.6rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '0.95rem',
    boxSizing: 'border-box'
  };

  return (
    <div style={{ padding: '0 1rem' }}>
      {/* ── Header ── */}
      <div style={{
        background: 'linear-gradient(135deg, #1a1a2e, #0f3460)',
        color: 'white',
        textAlign: 'center',
        padding: '4rem 2rem',
        margin: '0 -1rem 3rem -1rem', // Fixed negative top margin to avoid clipping
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Contact Us</h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#a8dadc',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          Have questions? We would love to hear from you.
          Send us a message and we will respond as soon as possible.
        </p>
      </div>

      <div style={{
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap',
        marginBottom: '3rem',
        maxWidth: '1200px',
        margin: '0 auto 3rem'
      }}>

        {/* ── Contact Info Cards ── */}
        <div style={{ flex: '1 1 280px' }}>
          <h2 style={{ color: '#1a1a2e', marginBottom: '1.5rem' }}>Get In Touch</h2>
          {[
            { icon: '📍', title: 'Our Location', detail1: 'FitZone Gym, 123 Fitness Street', detail2: 'Kolkata, WB 700001' },
            { icon: '📞', title: 'Phone Number', detail1: '+91 98765 43210', detail2: '+91 91234 56789' },
            { icon: '📧', title: 'Email Address', detail1: 'info@fitzonegym.com', detail2: 'support@fitzonegym.com' },
            { icon: '🕐', title: 'Working Hours', detail1: 'Mon - Fri: 6am - 10pm', detail2: 'Sat - Sun: 7am - 8pm' },
          ].map((info, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start',
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '1.25rem',
              marginBottom: '1rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              borderLeft: '4px solid #e63946'
            }}>
              <span style={{ fontSize: '1.5rem' }}>{info.icon}</span>
              <div>
                <h4 style={{ color: '#1a1a2e', margin: '0 0 0.25rem' }}>{info.title}</h4>
                <p style={{ color: '#555', margin: '0', fontSize: '0.9rem' }}>{info.detail1}</p>
                <p style={{ color: '#555', margin: '0', fontSize: '0.9rem' }}>{info.detail2}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Contact Form ── */}
        <div style={{ flex: '1 1 380px' }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ color: '#1a1a2e', marginBottom: '1.5rem' }}>Send Us a Message</h2>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ color: '#1a7a4a', marginBottom: '0.5rem' }}>Sent Successfully!</h3>
                <p style={{ color: '#666', marginBottom: '1.5rem' }}>We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
                  }}
                  style={{
                    backgroundColor: '#e63946',
                    color: 'white',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ flex: 1 }}>
                    <label htmlFor="name" style={labelStyle}>Full Name *</label>
                    <input
                      id="name"
                      name='name'
                      type='text'
                      value={form.name}
                      onChange={handleChange}
                      placeholder='Your full name'
                      required
                      style={inputStyle}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label htmlFor="phone" style={labelStyle}>Phone Number</label>
                    <input
                      id="phone"
                      name='phone'
                      type='tel'
                      value={form.phone}
                      onChange={handleChange}
                      placeholder='Your phone'
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="email" style={labelStyle}>Email Address *</label>
                  <input
                    id="email"
                    name='email'
                    type='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder='Your email address'
                    required
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="subject" style={labelStyle}>Subject *</label>
                  <select
                    id="subject"
                    name='subject'
                    value={form.subject}
                    onChange={handleChange}
                    required
                    style={{ ...inputStyle, backgroundColor: 'white' }}
                  >
                    <option value=''>Select a subject</option>
                    <option value='membership'>Membership Enquiry</option>
                    <option value='classes'>Class Information</option>
                    <option value='trainer'>Personal Training</option>
                    <option value='feedback'>Feedback</option>
                    <option value='other'>Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="message" style={labelStyle}>Message *</label>
                  <textarea
                    id="message"
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder='Write your message here...'
                    required
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
                  />
                </div>

                <button
                  type='submit'
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '0.85rem',
                    backgroundColor: loading ? '#ccc' : '#e63946',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: loading ? 'not-allowed' : 'pointer',
                  }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ── Google Map Placeholder ── */}
      <div style={{
        backgroundColor: '#f8f9fa',
        borderRadius: '12px',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2rem',
        border: '2px dashed #ccc',
        maxWidth: '1200px',
        margin: '0 auto 2rem'
      }}>
        <div style={{ textAlign: 'center', color: '#666' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🗺️</div>
          <h3 style={{ margin: '0 0 0.5rem' }}>FitZone Gym Location</h3>
          <p style={{ margin: 0 }}>123 Fitness Street, Kolkata, West Bengal</p>
          
          {/* FIXED: Added the <a> tag here */}
          <a 
            href='https://maps.google.com' 
            target='_blank' 
            rel='noreferrer'
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              backgroundColor: '#e63946',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;