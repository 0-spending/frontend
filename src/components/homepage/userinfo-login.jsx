import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../../assets/profile_image.png';

const UserInfoContainer = styled.section`
    width:261px;
    height:289px;
    text-align: center;
`;

// 이미지 작업
const Avatar = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
`;

// 투명 프로필 수정 버튼
const Button1 = styled.button`
  background-color: rgba(0,0,0,0); 
  color: rgba(0,0,0,0.4);
  border: 1px solid rgba(0,0,0,0.5);
  width:261px;
  height:53px;
  margin-top: 20px;

  padding: 16px;
  cursor: pointer;
  border-radius: 8px;
  
  &:hover {
    border: 1px solid rgba(0,0,0,1); 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }
`;

// 초록색 글작성 버튼
const Button2 = styled.button` 
  background-color: ${(props) => props.theme.colors.primary[400]}; 
  color: rgba(0,0,0,0.4);
  border: 1px solid rgba(0,0,0,0.5);
  width:261px;
  height:53px;
  margin-top: 20px;

  padding: 16px;
  cursor: pointer;
  border-radius: 8px;
  
  &:hover {
    border: 1px solid rgba(0,0,0,1); 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }
`;

const UserInfo = () => {
  return (
    <UserInfoContainer>
      <Avatar src={ProfileImage} alt="User Avatar" />
      <h2>고다윤 님</h2>
      <Button1>프로필 수정</Button1><br></br>
      <Button2>글 작성</Button2>
    </UserInfoContainer>
  );
};

export default UserInfo;
