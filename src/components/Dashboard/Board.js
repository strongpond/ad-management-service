import React, { useState, useEffect } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import ApexCharts from "react-apexcharts";
import styled from "styled-components";

import { convertTitle } from "../../utils";
import { PeriodDropDown } from "../DropDown";
import FilterDropDown from "../DropDown/FilterDropDown";

const Board = ({ filterData, prevData, startDate, endDate }) => {
  const [filterSumData, setFilterSumData] = useState([]);
  const [prevSumData, setPrevSumData] = useState([]);
  const [filteredTitle, setFilteredTitle] = useState("roas");
  const [filteredTitle2, setFilteredTitle2] = useState("click");
  const [periodTitle, setPeriodTitle] = useState("일간");
  const filterDataLength = filterData.length;
  const prevDataLength = prevData.length;
  const periodList = ["일간", "주간"];
  const firstFilteredData = filterData?.map(e => e[filteredTitle]);
  const secondFilteredData = filterData?.map(e => e[filteredTitle2]);
  const dateList = filterData?.map(e => e.date);

  const getSumObject = data => {
    return data.reduce((acc, curr) => {
      for (let prop in curr) {
        if (acc[prop]) acc[prop] += curr[prop];
        else acc[prop] = curr[prop];
      }
      return acc;
    }, {});
  };

  useEffect(() => {
    setFilterSumData(getSumObject(filterData));
    setPrevSumData(getSumObject(prevData));
  }, [filterData, prevData]);

  const cardMap = [
    {
      name: "roas",
      title: "ROAS",
      value: Math.floor(filterSumData.roas / filterDataLength),
      prevValue: Math.floor(prevSumData.roas / prevDataLength),
      unit: "%",
    },
    {
      name: "cost",
      title: "광고비",
      value: Math.floor(filterSumData.cost / (filterDataLength * 100)),
      prevValue: Math.floor(prevSumData.cost / (prevDataLength * 100)),
      unit: "만 원",
    },
    {
      name: "imp",
      title: "노출수",
      value: Math.floor(filterSumData.imp / (filterDataLength * 1000)),
      prevValue: Math.floor(prevSumData.imp / (prevDataLength * 1000)),
      unit: "만 회",
    },
    {
      name: "click",
      title: "클릭수",
      value: (filterSumData.click / (filterDataLength * 100)).toFixed(1),
      prevValue: (prevSumData.click / (prevDataLength * 100)).toFixed(1),
      unit: "만 회",
    },
    {
      name: "cvr",
      title: "전환수",
      value: (filterSumData.cvr / filterDataLength).toFixed(1),
      prevValue: (prevSumData.cvr / prevDataLength).toFixed(1),
      unit: " 회",
    },
    {
      name: "ctr",
      title: "매출",
      value: (filterSumData.ctr / filterDataLength).toFixed(1),
      prevValue: (prevSumData.ctr / prevDataLength).toFixed(1),
      unit: "억 원",
    },
  ];

  const cardTitleList = cardMap.map(e => e.name);
  const blue = "#4EADF7";
  const green = "#84DA46";

  return (
    <Container>
      <CardBox>
        {cardMap.map((el, index) => {
          return (
            <Card key={index}>
              <CardName>{el.title}</CardName>
              <CardDataBox>
                <CardData>{`${el.value + el.unit}`}</CardData>
                <FluctuationRateBox>
                  {el.value - el.prevValue > 0 ? (
                    <TiArrowSortedUp color="#84DA46" />
                  ) : (
                    <TiArrowSortedDown color="#EA3A4B" />
                  )}
                  <FluctuationRate>{`${Math.round((el.value - el.prevValue) * 10) / 10}${
                    el.unit
                  }`}</FluctuationRate>
                </FluctuationRateBox>
              </CardDataBox>
            </Card>
          );
        })}
      </CardBox>
      <ChartBox>
        <ChartViewBox>
          <ChartDropDownBox>
            <FilterDropDown
              cardTitleList={cardTitleList}
              filteredTitle={filteredTitle}
              setFilteredTitle={setFilteredTitle}
              iconColor={blue}
            />
            <FilterDropDown
              cardTitleList={cardTitleList}
              filteredTitle={filteredTitle2}
              setFilteredTitle={setFilteredTitle2}
              iconColor={green}
            />
          </ChartDropDownBox>
          <PeriodDropDown
            periodList={periodList}
            periodTitle={periodTitle}
            setPeriodTitle={setPeriodTitle}
          />
        </ChartViewBox>
        <Chart>
          <ApexCharts
            height={300}
            type="line"
            series={[
              { name: convertTitle(filteredTitle), data: firstFilteredData },
              { name: convertTitle(filteredTitle2), data: secondFilteredData },
            ]}
            options={{
              chart: {
                height: 100,
                width: 100,
                toolbar: {
                  show: false,
                },
              },
              colors: [blue, green],
              stroke: {
                width: [3, 3],
                curve: "straight",
                dashArray: [0, 0],
              },
              xaxis: {
                type: "datetime",
                categories: dateList,
              },
            }}
          />
        </Chart>
      </ChartBox>
    </Container>
  );
};

export default Board;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  height: 654px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
`;

const CardBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 40px 40px 20px 40px;
`;

const Card = styled.div`
  margin-bottom: 20px;
  padding: 18px 40px;
  width: 31%;
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.5px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 10px;
`;

const CardName = styled.div`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.fontGrey};
  font-size: ${({ theme }) => theme.fontSizes.navSubtitle};
  font-weight: 500;
`;

const CardDataBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardData = styled.div`
  color: ${({ theme }) => theme.colors.fontBlack};
  font-size: ${({ theme }) => theme.fontSizes.navTitle};
  font-weight: 700;
`;

const FluctuationRateBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FluctuationRate = styled.div`
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.fontGrey};
  font-size: ${({ theme }) => theme.fontSizes.navSubtitle};
  font-weight: 500;
`;

const ChartBox = styled.div``;

const ChartViewBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const ChartDropDownBox = styled.div`
  display: flex;
  flex-direction: row;
`;

// const ChartDateFilterBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   margin-right: 10px;
//   padding: 10px;
//   width: 80px;
//   height: 40px;
//   background-color: ${({ theme }) => theme.colors.white};
// `;

// const ChartDateFilter = styled.p`
//   color: ${({ theme }) => theme.colors.fontBlack};
//   font-size: ${({ theme }) => theme.fontSizes.mdTitle};
//   font-weight: 500;
// `;

const Chart = styled.div``;
