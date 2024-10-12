// 홈페이지 - 메인홈(회원)

// pages/home-login.jsx
import React from 'react';
import UserInfoLogin from '../components/homepage/userinfo-login';
import Calendar from '../components/homepage/calendar';
import ExpenseList from '../components/homepage/expenselist';

export default function HomeLogin() {
  return (
    <div>
      <main>
        <UserInfoLogin />
        <Calendar />
        <ExpenseList />
      </main>
    </div>
  );
}
