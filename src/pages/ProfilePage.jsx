import React, { useEffect, useState } from 'react';
import '../styles/ProfilePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const ProfilePage = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-box">
        <div className="icon-container">
          <FontAwesomeIcon icon={faUser} style={{ fontSize: '100px', color: '#000' }} />
        </div>
        <h2>{username} 님</h2>
        <div className="button-group">
          <button id="profile-btn" className="profile-btn">프로필 수정</button>
          <button id="write-btn" className="write-btn">글 작성</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
