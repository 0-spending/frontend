import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginSignup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import GNB from '../components/GNB'

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    alert(`회원가입 완료! 닉네임: ${username}`);
    localStorage.setItem('username', username);
    navigate('/homelogin');
  };
  
  return (
    <>
      <GNB />
      <div className="signup-container">
        <div className="signup-box">
          <h1>회원 정보가 없습니다.</h1>
          <p>간단한 설정으로 0지출을 시작해볼까요?</p>
          <div className="icon-container">
            <FontAwesomeIcon icon={faUserPlus} style={{ fontSize: '60px', color: '#000' }} />
          </div>
          <form onSubmit={handleSignup}>
            <div className="input-group">
              <span className="icon">
                <FontAwesomeIcon icon={faUserPlus} />
              </span>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="닉네임"
                required
              />
            </div>
            <div className="input-group">
              <span className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
                required
              />
            </div>
            <button type="submit" className="submit-btn">가입 완료</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;

