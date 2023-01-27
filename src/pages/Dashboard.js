import React, { useState, useCallback, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import { Board } from "../components";

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date("2022-04-10"));
  const [endDate, setEndDate] = useState(new Date("2022-04-16"));
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
          <IoIosArrowDown />
        </DateBox>
      </TitleBox>
      <MainBoard>
        <BoardTitle>통합 광고 현황</BoardTitle>
        <Board
          filterData={filterData}
          prevData={prevData}
          startDate={dayjs(startDate).format("MMM DD")}
          endDate={dayjs(endDate).format("MMM DD")}
        />
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

const MainBoard = styled.div``;

const BoardTitle = styled.h2`
  padding: 20px 0;
  color: ${({ theme }) => theme.colors.fontBlack};
  font-size: ${({ theme }) => theme.fontSizes.navTitle};
  font-weight: 700;
`;
