import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';
import GNB from '../components/GNB'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('username', username);
      navigate('/profile');
    } else {
      alert('로그인 실패! 회원가입 페이지로 이동합니다.');
      navigate('/signup');
    }
  };

  return (
    <>
    <GNB />
      <div className="container">
        <div className="login-box">
          <h1 className="welcome-text">Welcome!</h1>
          <h2 className="sign-in-text">Sign in to</h2>
          <p className="sub-text">0지출 is simply</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label id="login-label-username" htmlFor="username">닉네임</label>
              <input
                type="text"
                id="username"
                value={username}
                placeholder="Enter your user name"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label id="login-label-password" htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Enter your Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button id="login-btn" type="submit">
              Login
            </button>
          </form>
        </div>
        <div className="illustration">
          <img src="illustration_image_url" alt="Illustration" />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
