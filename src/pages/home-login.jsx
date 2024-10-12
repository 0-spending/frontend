// 홈페이지 - 메인홈(회원)

import React from 'react';
import styled from 'styled-components';
import UserInfoGuest from '../components/homepage/userinfo-guest';
import ExpenseList from '../components/homepage/expenselist';
import Calendar from '../components/homepage/calendar';
import ExpenseText from '../components/homepage/expensetext';

const HomeGuestContainer = styled.div`
  position: relative; /* 부모 요소를 relative로 설정 */
  width: 100%;
  min-height: 100vh; /* 화면의 최소 높이를 100vh로 설정 */
  background-color: #f0f0f0; /* 배경색 추가 */
  padding: 0; /* 패딩이 없도록 설정 */
  box-sizing: border-box; /* 패딩이 포함된 크기 계산 */
  overflow-y: auto; /* 세로 스크롤이 생길 때 스크롤 영역도 배경 적용 */
`;

const UserInfoWrapper = styled.div`
  position: absolute;
  top: 180px;  
  right: 880px;
`;

const ExpenseListWrapper = styled.div`
  position: absolute;
  top: 80px; 
  right: 103px; 
`;

const CalendarWrapper = styled.div`
  position: absolute;
  top: 540px;
  right: 683px;

`

const ExpenseTextWrapper = styled.div`
  position: absolute;
  top: 550px; 
  right: 105px; 
`;

// 위쪽 타원
const OvalBackground1 = styled.div` 
  width: 825px;  /* 타원의 가로 길이 */
  height: 693.6px; /* 타원의 세로 길이 */
  background-color: rgb(0,0,0,0.02); /* 배경색 */
  border-radius: 50%; /* 둥근 모서리, 50%로 설정하면 타원이 됨 */
  position: absolute; /* 원하는 위치에 배치 */
  top: 0px; /* 화면 상단에서 100px 띄움 */
  left: 559px; /* 화면 왼쪽에서 50px 띄움 */
`;

// 아래쪽 타원
const OvalBackground2 = styled.div`
  width: 825px;  /* 타원의 가로 길이 */
  height: 693.6px; /* 타원의 세로 길이 */
  background-color: rgb(0,0,0,0.02); /* 배경색 */
  border-radius: 50%; /* 둥근 모서리, 50%로 설정하면 타원이 됨 */
  position: absolute; /* 원하는 위치에 배치 */
  top: 479.4px; /* 화면 상단에서 100px 띄움 */
  left: 0px; /* 화면 왼쪽에서 50px 띄움 */
`;

const HomeGuest = () => {
  return (
    <HomeGuestContainer>
      <OvalBackground1></OvalBackground1>
      <UserInfoWrapper>
        <UserInfoGuest />
      </UserInfoWrapper>

      <ExpenseListWrapper>
        <ExpenseList />
      </ExpenseListWrapper>

      <CalendarWrapper>
        <Calendar />
      </CalendarWrapper>

      <ExpenseTextWrapper>
        <ExpenseText />
      </ExpenseTextWrapper>
      <OvalBackground2></OvalBackground2>
    </HomeGuestContainer>
  );
};

export default HomeGuest;
