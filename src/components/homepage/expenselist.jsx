import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ExpenseListContainer = styled.section`
  width: 467px;
  min-height: 340px;
  border-radius: 20px;
  background-color: #fcfcfc;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  padding-bottom: 20px;
  padding:15px;
  display: flex; 
  flex-direction: column; /* 세로로 배치 */
  justify-content: flex-start; /* 컨텐츠가 상단부터 시작 */
`;

const ExpenseContent = styled.div`
  flex-grow: 1; /* 컨텐츠 영역을 최대로 차지 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 글들이 항상 상단에 배치되도록 설정 */
`;

const ExpenseItem = styled.div`
  height:44px;
  padding-bottom: 10px;
  display: flex; /* 가로로 배치 */
  justify-content: space-between; /* 좌우로 나눠 배치 */
  align-items: center; /* 세로 중앙 정렬 */
  width: 100%; /* 부모의 너비에 맞추기 */
`;

const ExpenseTitle = styled.p` // 글 제목
  font-size: 20px;
  font-weight: bold;
  color: #454545;
`;

const ExpenseDate = styled.p` // 글 작성 날짜
  font-size: 20px;
  font-weight:bold;
  color: #8c8c8c;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PaginationButton = styled.button`
  background-color: ${(props) => (props.active? props.theme.colors.primary[400] : 'transparent')};
  color: ${(props) => (props.active ? '#fff' : '#333')};
  border: 1px solid #d9d9d9;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;

`;

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]); // 전체 소비 기록
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const itemsPerPage = 5; // 페이지당 5개 항목 표시

  
  useEffect(() => { // 백엔드에서 데이터 받아오기
    // !! 백엔드 api 호출 코드 작성하기!!
    /*
    try {
        // const response = await fetch(''); // 괄호 안에 api 주소 작성하기
        // const data = await response.json(); // JSON 데이터로 변환 
        // setExpenses(data); // 상태 업데이트 
    } catch(error) {
        // console.error("Error fetching expenses:", error);
  }
        */
    
    // 아래는 임시 데이터입니다. 연동 시에는 삭제할 듯
    const fetchedExpenses = [
      { id: 1, title: '10/06 소비 기록', date: '24.10.06' },
      { id: 2, title: '10/05 소비 기록', date: '24.10.05' },
      { id: 3, title: '사당역 혼밥 추천', date: '24.10.01' },
      { id: 4, title: '당근으로 산 자취꿀템 Best 3', date: '24.09.27' },
      { id: 5, title: 'K패스 신청', date: '24.09.14' },
      { id: 6, title: '추가 소비 기록 1', date: '24.09.13' },
      { id: 7, title: '추가 소비 기록 2', date: '24.09.12' },
    ];
    setExpenses(fetchedExpenses); // 함수 호출
  }, []); // 빈 배열을 전달해 컴포넌트 마운트 시에만 실행

  // 현재 페이지에 표시할 데이터
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = expenses.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 총 페이지 수 계산
  const totalPages = Math.ceil(expenses.length / itemsPerPage);



  // 리턴하는 페이지
  return (
    <ExpenseListContainer>
      <ExpenseContent>
        <p style={{ fontSize: '25px', fontWeight: 'bold', margin:'0', marginBottom:'10px'}}>전체 보기</p>
        {currentItems.map((expense) => (
            <ExpenseItem key={expense.id}>
            <ExpenseTitle>{expense.title}</ExpenseTitle>
            <ExpenseDate>{expense.date}</ExpenseDate>
            </ExpenseItem>
        ))}
      </ExpenseContent>

      <PaginationContainer>
        {[...Array(totalPages)].map((_, index) => (
          <PaginationButton
            key={index}
            active={currentPage === index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </PaginationButton>
        ))}
      </PaginationContainer>
    </ExpenseListContainer>
  );
};

export default ExpenseList;

