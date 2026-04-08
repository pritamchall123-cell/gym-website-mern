import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const navigate    = useNavigate();
  const { login }   = useAuth();

  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error,   setError]   = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  // Update form state when user types
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault(); // stop page from refreshing
    setError('');
    setLoading(true);

    try {
      // Send registration data to backend
      const res = await axios.post(
        process.env.REACT_APP_API_URL + '/api/auth/register',
        form
      );

      // Save login info using AuthContext
      login(res.data.user, res.data.token);

      setSuccess('Registration successful! Redirecting...');
      setTimeout(() => navigate('/dashboard'), 1500);

    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '450px', margin: '0 auto' }}>
      <div className='card'>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#1a1a2e' }}>
          Create Your Account
        </h2>

        {error   && <div className='msg-error'>{error}</div>}
        {success && <div className='msg-success'>{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Full Name</label>
            <input
              name='name'
              type='text'
              value={form.name}
              onChange={handleChange}
              placeholder='Enter your full name'
              required
            />
          </div>

          <div className='form-group'>
            <label>Email Address</label>
            <input
              name='email'
              type='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Enter your email'
              required
            />
          </div>

          <div className='form-group'>
            <label>Password (minimum 6 characters)</label>
            <input
              name='password'
              type='password'
              value={form.password}
              onChange={handleChange}
              placeholder='Create a password'
              minLength={6}
              required
            />
          </div>

          <button
            type='submit'
            className='btn-primary'
            disabled={loading}
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          Already a member?{' '}
          <Link to='/login' style={{ color: '#e63946' }}>Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
