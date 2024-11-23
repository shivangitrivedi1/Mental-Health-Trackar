// src/pages/Signup.js
// import React from 'react';

// const Signup = () => {
//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form>
//         <label>Username:</label>
//         <input type="text" required />
//         <label>Email:</label>
//         <input type="email" required />
//         <label>Password:</label>
//         <input type="password" required />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from 'react';
import '../style/Sign.css'; // Correct import statement

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email.';
    if (!formData.password) newErrors.password = 'Password is required.';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'password') {
      const strength = value.length < 6 
        ? 'Weak' 
        : value.match(/[a-z]/) && value.match(/[A-Z]/) && value.match(/[0-9]/) && value.match(/[@$!%*?&#]/)
        ? 'Strong'
        : 'Medium';
      setPasswordStrength(strength);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Sign-up successful!');
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Username:</label>
          <input
            type="text"
            name="username"
            className="form-input"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          {errors.username && <p className="form-error">{errors.username}</p>}
        </div>

        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <p className="form-error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            type="password"
            name="password"
            className="form-input"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {passwordStrength && <p className="password-strength">Strength: {passwordStrength}</p>}
          {errors.password && <p className="form-error">{errors.password}</p>}
        </div>

        <div className="form-group">
          <label className="form-label">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-input"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          {errors.confirmPassword && <p className="form-error">{errors.confirmPassword}</p>}
        </div>

        <button type="submit" className="form-button">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
