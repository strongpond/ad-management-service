import React from "react";
import dayjs from "dayjs";
import styled from "styled-components";

import { convertStatus, convertBudget, convertRoas, convertCost } from "../../utils";

const AdCard = ({ data }) => {
  const { title, status, startDate, budget, report } = data;
  const { roas, convValue, cost } = report || {};

  const date = dayjs(startDate, "YYYY-MM-DD HH:mm:ss");

  const CardDataList = [
    { name: "상태", desc: convertStatus(status) },
    { name: "광고 생성일", desc: date.format("YY-MM-DD") },
    { name: "일 희망 예산", desc: convertBudget(budget) },
    { name: "광고 수익률", desc: convertRoas(roas) },
    { name: "매출", desc: convertCost(convValue) },
    { name: "광고 비용", desc: convertCost(cost) },
  ];

  return (
    <AdCardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardDescWrapper>
        {CardDataList.map((e, i) => {
          return (
            <CardDescBox key={i}>
              <CardDesc>{e.name}</CardDesc>
              <CardDescValue>{e.desc}</CardDescValue>
            </CardDescBox>
          );
        })}
      </CardDescWrapper>
      <CardEditButton>수정하기</CardEditButton>
    </AdCardWrapper>
  );
};

export default AdCard;

const AdCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 20px 0;
  padding: 20px;
  width: 300px;
  border: 1px solid ${({ theme }) => theme.colors.borderGrey};
  border-radius: 10px;
`;

const CardTitle = styled.div`
  padding: 15px 0 30px 0;
  font-size: ${({ theme }) => theme.fontSizes.navTitle};
  font-weight: 700;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;

const CardDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const CardDescBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;

const CardDesc = styled.p`
  width: 120px;
  color: ${({ theme }) => theme.colors.fontGrey};
  font-size: ${({ theme }) => theme.fontSizes.mdTitle};
  font-weight: 400;
`;

const CardDescValue = styled.p`
  color: ${({ theme }) => theme.colors.fontBlack};
  font-size: ${({ theme }) => theme.fontSizes.mdTitle};
  font-weight: 600;
`;

const CardEditButton = styled.button`
  margin-bottom: 10px;
  height: 45px;
  width: 100px;
  padding: 5px 20px;
  color: ${({ theme }) => theme.colors.fontBlack};
  font-size: ${({ theme }) => theme.fontSizes.navTitle};
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.borderGrey};
  border-radius: 10px;
  cursor: pointer;
`;
