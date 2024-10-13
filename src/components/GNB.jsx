import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/GNB.css';

const GNB = () => {
  return (
    <header className="gnb">
      <div className="gnb-logo">
        <Link to="/">0지출</Link>
      </div>
      <nav className="gnb-menu">
        <ul>
          <li><Link to="/today-spend">오늘 소비</Link></li>
          <li><Link to="/saving-tips">절약 꿀팁</Link></li>
          <li><Link to="/value-restaurants">가성비 맛집</Link></li>
          <li><Link to="/hobby-tips">자취 꿀팁</Link></li>
        </ul>
      </nav>
      <div className="gnb-start">
        <Link to="/login" className="start-button">시작하기</Link>
      </div>
    </header>
  );
};

export default GNB;
