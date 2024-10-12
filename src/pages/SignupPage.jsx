// src/pages/SignupPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginSignup.css';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();

    // 회원가입 로직
    alert(`회원가입 완료! 닉네임: ${username}`);

    // 회원가입 완료 후 닉네임을 localStorage에 저장
    localStorage.setItem('username', username);

    // 프로필 페이지로 이동
    navigate('/profile');
  };

  return (
    <div className="container">
      <div className="login-box">
        <h1>회원 정보가 없습니다.</h1>
        <p>간단한 설정으로 0지출을 시작해볼까요?</p>
        <form onSubmit={handleSignup}>
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
          <button type="submit" className="submit-btn">가입 완료</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
