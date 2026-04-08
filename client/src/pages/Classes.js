import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const categoryColors = {
  yoga:     '#7bc67e',
  cardio:   '#e63946',
  strength: '#457b9d',
  pilates:  '#f4a261',
  hiit:     '#e9c46a',
  dance:    '#a8dadc'
};

const days = [
  'All Days','Monday','Tuesday','Wednesday',
  'Thursday','Friday','Saturday','Sunday'
];

const categories = [
  'all','yoga','cardio','strength','pilates','hiit','dance'
];

const Classes = () => {
  const { token }  = useAuth();
  const navigate   = useNavigate();

  const [classes,   setClasses]   = useState([]);
  const [loading,   setLoading]   = useState(true);
  const [message,   setMessage]   = useState('');
  const [msgType,   setMsgType]   = useState('');
  const [bookingId, setBookingId] = useState(null);

  // ── Filter State ──────────────────────────────────────────
  const [search,   setSearch]   = useState('');
  const [category, setCategory] = useState('all');
  const [day,      setDay]      = useState('All Days');

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + '/api/classes')
      .then(res => { setClasses(res.data); setLoading(false); })
      .catch(() => { setMessage('Could not load classes'); setLoading(false); });
  }, []);

  const handleBook = async (classId) => {
    if (!token) { navigate('/login'); return; }
    setBookingId(classId);
    try {
      await axios.post(
        process.env.REACT_APP_API_URL + '/api/bookings',
        { classId },
        { headers: { Authorization: 'Bearer ' + token } }
      );
      setMessage('Class booked successfully!');
      setMsgType('success');
      setClasses(prev => prev.map(c =>
        c._id === classId ? { ...c, enrolled: c.enrolled + 1 } : c
      ));
    } catch (err) {
      setMessage(err.response?.data?.message || 'Booking failed');
      setMsgType('error');
    } finally {
      setBookingId(null);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  // ── Filter Logic ──────────────────────────────────────────
  const filtered = classes.filter(cls => {
    const matchSearch   = cls.name.toLowerCase().includes(search.toLowerCase()) ||
                          cls.instructor.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'all' || cls.category === category;
    const matchDay      = day === 'All Days' || cls.schedule.day === day;
    return matchSearch && matchCategory && matchDay;
  });

  const clearFilters = () => {
    setSearch('');
    setCategory('all');
    setDay('All Days');
  };

  const hasFilters = search !== '' || category !== 'all' || day !== 'All Days';

  if (loading) return (
    <p style={{ textAlign: 'center', marginTop: '3rem' }}>
      Loading classes...
    </p>
  );

  return (
    <div>

      {/* ── Header ── */}
      <div style={{
        background:   'linear-gradient(135deg, #1a1a2e, #0f3460)',
        color:        'white',
        textAlign:    'center',
        padding:      '3rem 2rem',
        margin:       '-2rem -1rem 2rem -1rem',
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          Our Classes
        </h1>
        <p style={{ color: '#a8dadc', fontSize: '1.1rem' }}>
          Find the perfect class for your fitness journey
        </p>
      </div>

      {/* ── Search and Filter Bar ── */}
      <div style={{
        backgroundColor: 'white',
        borderRadius:    '12px',
        padding:         '1.5rem',
        marginBottom:    '1.5rem',
        boxShadow:       '0 4px 12px rgba(0,0,0,0.08)'
      }}>

        {/* Search Input */}
        <div style={{ marginBottom: '1rem' }}>
          <input
            type='text'
            placeholder='Search by class name or instructor...'
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width:        '100%',
              padding:      '0.75rem 1rem',
              border:       '2px solid #eee',
              borderRadius: '8px',
              fontSize:     '1rem',
              outline:      'none',
              boxSizing:    'border-box',
              transition:   'border-color 0.2s'
            }}
            onFocus={e => e.target.style.borderColor = '#e63946'}
            onBlur={e  => e.target.style.borderColor = '#eee'}
          />
        </div>

        {/* Category Filter */}
        <div style={{ marginBottom: '1rem' }}>
          <p style={{
            fontWeight:   'bold',
            color:        '#1a1a2e',
            marginBottom: '0.5rem',
            fontSize:     '0.9rem'
          }}>
            Filter by Category:
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                style={{
                  padding:         '0.4rem 1rem',
                  borderRadius:    '20px',
                  border:          '1px solid #e63946',
                  cursor:          'pointer',
                  textTransform:   'capitalize',
                  backgroundColor: category === cat ? '#e63946' : 'white',
                  color:           category === cat ? 'white'   : '#e63946',
                  fontWeight:      category === cat ? 'bold'    : 'normal',
                  fontSize:        '0.85rem'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Day Filter */}
        <div style={{ marginBottom: '1rem' }}>
          <p style={{
            fontWeight:   'bold',
            color:        '#1a1a2e',
            marginBottom: '0.5rem',
            fontSize:     '0.9rem'
          }}>
            Filter by Day:
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {days.map(d => (
              <button
                key={d}
                onClick={() => setDay(d)}
                style={{
                  padding:         '0.4rem 0.85rem',
                  borderRadius:    '20px',
                  border:          '1px solid #1a1a2e',
                  cursor:          'pointer',
                  backgroundColor: day === d ? '#1a1a2e' : 'white',
                  color:           day === d ? 'white'   : '#1a1a2e',
                  fontWeight:      day === d ? 'bold'    : 'normal',
                  fontSize:        '0.85rem'
                }}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Results count and Clear button */}
        <div style={{
          display:        'flex',
          justifyContent: 'space-between',
          alignItems:     'center'
        }}>
          <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>
            Showing <strong>{filtered.length}</strong> of{' '}
            <strong>{classes.length}</strong> classes
          </p>
          {hasFilters && (
            <button
              onClick={clearFilters}
              style={{
                backgroundColor: '#f8f9fa',
                color:           '#e63946',
                border:          '1px solid #e63946',
                padding:         '0.4rem 1rem',
                borderRadius:    '4px',
                cursor:          'pointer',
                fontSize:        '0.85rem',
                fontWeight:      'bold'
              }}
            >
              Clear All Filters
            </button>
          )}
        </div>
      </div>

      {/* ── Message ── */}
      {message && (
        <div className={msgType === 'success' ? 'msg-success' : 'msg-error'}>
          {message}
        </div>
      )}

      {/* ── Class Cards ── */}
      {filtered.length === 0 ? (
        <div style={{
          textAlign:       'center',
          padding:         '3rem',
          backgroundColor: 'white',
          borderRadius:    '8px',
          boxShadow:       '0 2px 8px rgba(0,0,0,0.08)'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
          <h3 style={{ color: '#1a1a2e', marginBottom: '0.5rem' }}>
            No classes found
          </h3>
          <p style={{ color: '#666', marginBottom: '1rem' }}>
            Try adjusting your search or filters
          </p>
          <button
            onClick={clearFilters}
            style={{
              backgroundColor: '#e63946',
              color:           'white',
              border:          'none',
              padding:         '0.6rem 1.5rem',
              borderRadius:    '4px',
              cursor:          'pointer',
              fontWeight:      'bold'
            }}
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {filtered.map(cls => (
            <div key={cls._id} className='card' style={{
              flex:       '1 1 300px',
              borderLeft: '5px solid ' + (categoryColors[cls.category] || '#ccc'),
              padding:    0,
              overflow:   'hidden'
            }}>
              {/* Class Image */}
              <img
                src={`/images/${cls.category === 'pilates' ? 'pilatees' : cls.category}.jpg`}
                alt={cls.name}
                style={{
                  width:     '100%',
                  height:    '160px',
                  objectFit: 'cover'
                }}
              />

              <div style={{ padding: '1.25rem' }}>
                {/* Category and Day badges */}
                <div style={{
                  display:      'flex',
                  gap:          '0.5rem',
                  marginBottom: '0.75rem',
                  flexWrap:     'wrap'
                }}>
                  <span style={{
                    backgroundColor: categoryColors[cls.category],
                    color:           'white',
                    padding:         '2px 10px',
                    borderRadius:    '20px',
                    fontSize:        '0.75rem',
                    textTransform:   'uppercase',
                    fontWeight:      'bold'
                  }}>
                    {cls.category}
                  </span>
                  <span style={{
                    backgroundColor: '#1a1a2e',
                    color:           'white',
                    padding:         '2px 10px',
                    borderRadius:    '20px',
                    fontSize:        '0.75rem',
                    fontWeight:      'bold'
                  }}>
                    {cls.schedule.day}
                  </span>
                </div>

                <h3 style={{ color: '#1a1a2e', margin: '0 0 0.5rem' }}>
                  {cls.name}
                </h3>
                <p style={{ color: '#555', margin: '0.25rem 0', fontSize: '0.9rem' }}>
                  👤 {cls.instructor}
                </p>
                <p style={{ color: '#555', margin: '0.25rem 0', fontSize: '0.9rem' }}>
                  ⏰ {cls.schedule.startTime} - {cls.schedule.endTime}
                </p>
                <p style={{ color: '#555', margin: '0.25rem 0', fontSize: '0.9rem' }}>
                  👥 {cls.capacity - cls.enrolled} / {cls.capacity} spots left
                </p>

                {/* Capacity bar */}
                <div style={{
                  backgroundColor: '#eee',
                  borderRadius:    '4px',
                  height:          '6px',
                  margin:          '0.75rem 0',
                  overflow:        'hidden'
                }}>
                  <div style={{
                    width:           `${(cls.enrolled / cls.capacity) * 100}%`,
                    backgroundColor: cls.enrolled >= cls.capacity ? '#e63946' : '#7bc67e',
                    height:          '100%',
                    borderRadius:    '4px',
                    transition:      'width 0.3s'
                  }} />
                </div>

                {cls.description && (
                  <p style={{
                    color:     '#777',
                    fontSize:  '0.85rem',
                    margin:    '0.5rem 0'
                  }}>
                    {cls.description}
                  </p>
                )}

                <button
                  onClick={() => handleBook(cls._id)}
                  disabled={cls.enrolled >= cls.capacity || bookingId === cls._id}
                  className='btn-primary'
                  style={{ marginTop: '1rem', width: '100%' }}
                >
                  {bookingId === cls._id        ? 'Booking...'    :
                   cls.enrolled >= cls.capacity ? 'Class Full'    :
                   !token                       ? 'Login to Book' : 'Book Now'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Classes;