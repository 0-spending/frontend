import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

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
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label id="login-label-username" htmlFor="username">닉네임</label>
            <input
              type="text"
              id="username"
              value={username}
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button id="login-btn" type="button" onClick={handleSubmit}>
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
