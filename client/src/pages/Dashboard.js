import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [message,  setMessage]  = useState('');

  // If user is not logged in, redirect to login page
  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    fetchBookings();
  }, [token]);

  // Fetch the logged-in user's bookings from backend
  const fetchBookings = async () => {
    try {
      const res = await axios.get(
        process.env.REACT_APP_API_URL + '/api/bookings/my',
        { headers: { Authorization: 'Bearer ' + token } }
      );
      setBookings(res.data);
    } catch (err) {
      setMessage('Could not load your bookings');
    } finally {
      setLoading(false);
    }
  };

  // Cancel a booking
  const handleCancel = async (bookingId) => {
    if (!window.confirm('Are you sure you want to cancel this class?')) return;
    try {
      await axios.delete(
        process.env.REACT_APP_API_URL + '/api/bookings/' + bookingId,
        { headers: { Authorization: 'Bearer ' + token } }
      );
      // Remove cancelled booking from the list
      setBookings(prev => prev.filter(b => b._id !== bookingId));
      setMessage('Booking cancelled successfully');
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      setMessage('Could not cancel booking');
    }
  };

  // Handle logout
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (loading) return <p style={{ textAlign:'center', marginTop:'3rem' }}>Loading...</p>;

  return (
    <div>

      {/* ── Profile Header ── */}
      <div className='card' style={{
        background:    'linear-gradient(135deg, #1a1a2e, #0f3460)',
        color:         'white',
        marginBottom:  '2rem'
      }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div>
            <h2 style={{ fontSize:'1.8rem', marginBottom:'0.5rem' }}>
              Welcome back, {user?.name}!
            </h2>
            <p style={{ color:'#a8dadc' }}>{user?.email}</p>
            <span style={{
              backgroundColor: '#e63946',
              padding:         '0.3rem 1rem',
              borderRadius:    '20px',
              fontSize:        '0.85rem',
              marginTop:       '0.5rem',
              display:         'inline-block',
              textTransform:   'capitalize'
            }}>
              Basic Member
            </span>
          </div>
          <button onClick={handleLogout} className='btn-secondary' style={{
            borderColor: 'white', color: 'white'
          }}>
            Logout
          </button>
        </div>
      </div>

      {/* ── Stats Row ── */}
      <div style={{ display:'flex', gap:'1rem', marginBottom:'2rem', flexWrap:'wrap' }}>
        <div className='card' style={{ flex:'1', textAlign:'center' }}>
          <h3 style={{ fontSize:'2.5rem', color:'#e63946' }}>{bookings.length}</h3>
          <p style={{ color:'#666' }}>Active Bookings</p>
        </div>
        <div className='card' style={{ flex:'1', textAlign:'center' }}>
          <h3 style={{ fontSize:'2.5rem', color:'#1a1a2e' }}>Basic</h3>
          <p style={{ color:'#666' }}>Membership Type</p>
        </div>
        <div className='card' style={{ flex:'1', textAlign:'center' }}>
          <h3 style={{ fontSize:'2.5rem', color:'#457b9d' }}>Active</h3>
          <p style={{ color:'#666' }}>Account Status</p>
        </div>
      </div>

      {/* ── Bookings Section ── */}
      <h3 style={{ marginBottom:'1rem', color:'#1a1a2e' }}>Your Booked Classes</h3>

      {message && <div className='msg-success'>{message}</div>}

      {bookings.length === 0 ? (
        <div className='card' style={{ textAlign:'center', padding:'3rem' }}>
          <p style={{ color:'#666', marginBottom:'1rem' }}>
            You have no active bookings yet.
          </p>
          <a href='/classes' className='btn-primary' style={{ textDecoration:'none' }}>
            Browse Classes
          </a>
        </div>
      ) : (
        <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem' }}>
          {bookings.map(booking => (
            <div key={booking._id} className='card' style={{
              flex:       '1 1 280px',
              borderLeft: '4px solid #e63946'
            }}>
              <h4 style={{ color:'#1a1a2e', marginBottom:'0.5rem' }}>
                {booking.gymClass?.name}
              </h4>
              <p style={{ color:'#555', margin:'0.2rem 0' }}>
                Instructor: {booking.gymClass?.instructor}
              </p>
              <p style={{ color:'#555', margin:'0.2rem 0' }}>
                {booking.gymClass?.schedule?.day} |{' '}
                {booking.gymClass?.schedule?.startTime} -{' '}
                {booking.gymClass?.schedule?.endTime}
              </p>
              <p style={{ color:'#888', fontSize:'0.85rem', margin:'0.5rem 0' }}>
                Booked on: {new Date(booking.bookedAt).toLocaleDateString()}
              </p>
              <span style={{
                backgroundColor: '#eafaf1',
                color:           '#1a7a4a',
                padding:         '2px 10px',
                borderRadius:    '20px',
                fontSize:        '0.8rem'
              }}>
                Confirmed
              </span>
              <br />
              <button
                onClick={() => handleCancel(booking._id)}
                style={{
                  marginTop:       '1rem',
                  padding:         '0.4rem 1rem',
                  backgroundColor: 'white',
                  color:           '#e63946',
                  border:          '1px solid #e63946',
                  borderRadius:    '4px',
                  cursor:          'pointer'
                }}
              >
                Cancel Booking
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
