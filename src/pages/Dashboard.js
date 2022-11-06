import React, { useState, useCallback } from "react";
import DatePicker from "react-datepicker";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import { Board } from "../components";
import { useEffect } from "react";

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date("2022-04-20"));
  const [endDate, setEndDate] = useState(new Date("2022-04-20"));
  const [trendData, setTrendData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [prevData, setPrevData] = useState([]);

  const fetchData = () => {
    return fetch("data/trend-data-set.json")
      .then(response => response.json())
      .then(data => data.report.daily);
  };

  const onFilterData = useCallback(() => {
    setFilterData(
      trendData.filter(e => {
        return (
          e.date >= dayjs(startDate).format("YYYY-MM-DD") &&
          e.date <= dayjs(endDate).format("YYYY-MM-DD")
        );
      })
    );

    setPrevData(
      trendData.filter(e => {
        const diff = dayjs(endDate).diff(dayjs(startDate), "d") + 1;
        return (
          e.date >= dayjs(startDate).subtract(diff, "d").format("YYYY-MM-DD") &&
          e.date <= dayjs(endDate).subtract(diff, "d").format("YYYY-MM-DD")
        );
      })
    );
  }, [trendData, startDate, endDate]);

  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    fetchData().then(data => {
      setTrendData(data);
    });
  }, []);

  useEffect(() => {
    if (startDate && endDate) {
      onFilterData();
    }
  }, [startDate, endDate, onFilterData]);

  return (
    <Container>
      <TitleBox>
        <Title>대시보드</Title>
        <DateBox>
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            minDate={new Date("2022-02-01")}
            maxDate={new Date("2022-04-20")}
            selectsRange
          />
          {/* <Date>2021년 11월 11일~2021년 11월 16일</Date> */}
          <IoIosArrowDown />
        </DateBox>
      </TitleBox>
      <MainBoard>
        <BoardTitle>통합 광고 현황</BoardTitle>
        <Board filterData={filterData} prevData={prevData} />
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

// const Date = styled.p`
//   padding-right: 15px;
//   color: ${({ theme }) => theme.colors.fontBlack};
//   font-size: ${({ theme }) => theme.fontSizes.mdTitle};
//   font-weight: 500;
// `;

const MainBoard = styled.div``;

const BoardTitle = styled.h2`
  padding: 20px 0;
  color: ${({ theme }) => theme.colors.fontBlack};
  font-size: ${({ theme }) => theme.fontSizes.navTitle};
  font-weight: 700;
`;
