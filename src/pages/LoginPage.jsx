// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginSignup.css';

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
    <div className="container">
      <div className="login-box">
        <h1>로그인</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">닉네임</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="닉네임을 입력하세요"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요"
              required
            />
          </div>
          <button type="submit" className="submit-btn">로그인</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
