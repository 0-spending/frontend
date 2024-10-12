// 홈페이지 - 메인홈(회원)

import React from 'react';
import styled from 'styled-components';
import UserInfoGuest from '../components/homepage/userinfo-guest';
import ExpenseList from '../components/homepage/expenselist';
import Calendar from '../components/homepage/calendar';
import ExpenseText from '../components/homepage/expensetext';

const HomeGuestContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* 좌, 우 두 개의 컬럼 */
  grid-template-rows: auto auto; /* 두 개의 행 */
  gap: 20px; /* 컴포넌트들 사이의 간격 */
  padding: 20px;
  width: 100%;
  height: 100vh; /* 전체 화면 */
  overflow-x: hidden; /* 가로 스크롤 비활성화 */
`;

const UserInfoWrapper = styled.div`
  grid-column: 1 / 2; /* 왼쪽 상단 */
  grid-row: 1 / 2;
`;

const ExpenseListWrapper = styled.div`
  grid-column: 2 / 3; /* 오른쪽 상단 */
  grid-row: 1 / 2;
`;

const CalendarWrapper = styled.div`
  grid-column: 1 / 2; /* 왼쪽 하단 */
  grid-row: 2 / 3;
  max-width: 100%; /* 가로 크기 제한 */
  overflow: hidden; /* 캘린더가 스크롤되지 않도록 설정 */
`;

const ExpenseTextWrapper = styled.div`
  grid-column: 2 / 3; /* 오른쪽 하단 */
  grid-row: 2 / 3;
  max-width: 100%; /* 가로 크기 제한 */
`;

const HomeGuest = () => {
  return (
    <HomeGuestContainer>
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
    </HomeGuestContainer>
  );
};

export default HomeGuest;
