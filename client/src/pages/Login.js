import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const navigate  = useNavigate();
  const { login } = useAuth();

  const [form, setForm]     = useState({ email: '', password: '' });
  const [error, setError]   = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await axios.post(
        process.env.REACT_APP_API_URL + '/api/auth/login',
        form
      );
      login(res.data.user, res.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '450px', margin: '0 auto' }}>
      <div className='card'>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#1a1a2e' }}>
          Welcome Back
        </h2>

        {error && <div className='msg-error'>{error}</div>}

        <form onSubmit={handleSubmit}>
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
            <label>Password</label>
            <input
              name='password'
              type='password'
              value={form.password}
              onChange={handleChange}
              placeholder='Enter your password'
              required
            />
          </div>

          <button
            type='submit'
            className='btn-primary'
            disabled={loading}
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          Not a member yet?{' '}
          <Link to='/register' style={{ color: '#e63946' }}>Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
