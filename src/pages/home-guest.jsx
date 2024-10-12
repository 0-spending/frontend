// 홈페이지 - 메인홈(회원)

import React from 'react';
import UserInfoGuest from '../components/homepage/userinfo-guest';
import Calendar from '../components/homepage/calendar';
import ExpenseList from '../components/homepage/expenselist';

export default function HomeLogin() {
  return (
    <div>
      <main>
        <UserInfoGuest />
        <Calendar />
        <ExpenseList />
      </main>
    </div>
  );
}