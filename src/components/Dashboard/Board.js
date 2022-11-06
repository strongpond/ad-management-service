import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

const Board = filterData => {
  console.log(filterData);
  const cardList = ["ROAS", "광고비", "노출 수", "클릭 수", "전환 수", "매출"];
  // const cardMap = {
  //   roas: "ROAS",
  //   cost: "광고비",
  //   imp: "노출수",
  //   click: "클릭수",
  //   cvr: "전환수",
  //   ctr: "매출",
  // };
  // const executeCard = cardType => {
  //   return cardMap[cardType];
  // };

  return (
    <Container>
      <CardBox>
        {cardList.map((el, index) => {
          return (
            <Card>
              <CardName>{el}</CardName>
              <CardDataBox>
                <CardData>697%</CardData>
                <FluctuationRate>18%</FluctuationRate>
              </CardDataBox>
            </Card>
          );
        })}
      </CardBox>
      <ChartBox>
        <ChartViewBox>
          <ChartDropDownBox>
            <ChartDropDown>
              <DropDownMenu>ROAS</DropDownMenu>
              <IoIosArrowDown />
            </ChartDropDown>
            <ChartDropDown>
              <DropDownMenu>클릭 수</DropDownMenu>
              <IoIosArrowDown />
            </ChartDropDown>
          </ChartDropDownBox>
          <ChartDateFilterBox>
            <ChartDateFilter>주간</ChartDateFilter>
            <IoIosArrowDown />
          </ChartDateFilterBox>
        </ChartViewBox>
        <Chart>그래프</Chart>
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

const FluctuationRate = styled.div`
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

const ChartDropDown = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
  padding: 10px;
  width: 123px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.5px solid ${({ theme }) => theme.colors.borderGrey};
  border-radius: 10px;
`;

const DropDownMenu = styled.p`
  color: ${({ theme }) => theme.colors.fontBlack};
  font-size: ${({ theme }) => theme.fontSizes.mdTitle};
  font-weight: 500;
`;

const ChartDateFilterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
  padding: 10px;
  width: 80px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const ChartDateFilter = styled.p`
  color: ${({ theme }) => theme.colors.fontBlack};
  font-size: ${({ theme }) => theme.fontSizes.mdTitle};
  font-weight: 500;
`;

const Chart = styled.div``;
