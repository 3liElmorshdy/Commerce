import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../lib/userSlice';
import './Login.css';
import { useEffect } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const userToken = useSelector(state => state.user.token);

  const from = location.state?.from || '/';

  useEffect(() => {
    if (userToken) {
      navigate('/home', { replace: true });
    }
  }, [userToken, from, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate login and token
      const token = 'mock-auth-token-' + Date.now();
      dispatch(login({ token }));
      alert('Login successful! Redirecting...');
      navigate('/home', { replace: true });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div style={{textAlign: 'center', marginBottom: '1rem'}}>
          <i className="fa-solid fa-right-to-bracket" style={{fontSize: '2.5rem', color: '#007bff'}}></i>
        </div>
        <h2>Login</h2>
        {from !== '/' && (
          <p className="login-message">
            Please login to access {from === '/cart' ? 'your cart' : 'this page'}
          </p>
        )}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="login-footer">
          <p>Don't have an account? <button onClick={() => navigate('/register')} className="link-btn">Register here</button></p>
        </div>
      </div>
    </div>
  );
} 