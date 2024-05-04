import React, { useState } from 'react';
import Logo from '../../src/assest/logo.png';
import { useSelector } from 'react-redux';
import './Login.css';

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dummyEmail = useSelector((state) => state.dummyEmail);
  const dummyPassword = useSelector((state) => state.dummyPassword);

  const handleLogin = () => {
    if (username === dummyEmail && password === dummyPassword) {
      props.loggedIn();
    } else {
      alert('Invalid Credentials');
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        <div className="login-field">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <div className="login-field">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="login-field">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
