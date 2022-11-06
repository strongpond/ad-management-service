import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";
import { Board } from "../components";

const Dashboard = () => {
  return (
    <Container>
      <TitleBox>
        <Title>대시보드</Title>
        <DateBox>
          <Date>2021년 11월 11일~2021년 11월 16일</Date>
          <IoIosArrowDown />
        </DateBox>
      </TitleBox>
      <MainBoard>
        <BoardTitle>통합 광고 현황</BoardTitle>
        <Board />
      </MainBoard>
    </Container>
  );
};

export default Dashboard;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.fontBlack};
  font-size: ${({ theme }) => theme.fontSizes.lgTitle};
  font-weight: 900;
`;

const DateBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Date = styled.p`
  padding-right: 15px;
  color: ${({ theme }) => theme.colors.fontBlack};
  font-size: ${({ theme }) => theme.fontSizes.mdTitle};
  font-weight: 500;
`;

const MainBoard = styled.div``;

const BoardTitle = styled.h2`
  padding: 20px 0;
  color: ${({ theme }) => theme.colors.fontBlack};
  font-size: ${({ theme }) => theme.fontSizes.navTitle};
  font-weight: 700;
`;
