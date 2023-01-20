import React from "react";
import styled from "styled-components";

const AdCard = ({ data }) => {
  const { title, status, startDate, budget, report } = data;
  const { roas, convValue, cost } = report;
  const CardDataList = {
    status: "상태",
    startDate: "광고 생성일",
    budget: "일 희망 예산",
    roas: "광고 수익률",
    convValue: "매출",
    cost: "광고 비용",
  };

  return (
    <AdCardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardDescWrapper>
        {Object.entries(CardDataList).map(([key, value]) => {
          console.log(key, value);
          if (key === "report") return null;
          return (
            <CardDescBox>
              <CardDesc>{CardDataList[key]}</CardDesc>
              <CardDescValue>{value}</CardDescValue>
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
  padding: 20px;
  width: 300px;
  border: 1px solid ${({ theme }) => theme.colors.borderGrey};
  border-radius: 10px;
`;

const CardTitle = styled.div`
  padding: 15px 0 30px 0;
  font-size: ${({ theme }) => theme.fontSizes.navTitle};
  font-weight: 700;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGrey};
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGrey};
`;

const CardDesc = styled.p`
  width: 100px;
  color: ${({ theme }) => theme.colors.fontGrey};
  font-size: ${({ theme }) => theme.fontSizes.mdTitle};
  font-weight: 400;
`;

const CardDescValue = styled.p`
  color: ${({ theme }) => theme.colors.fontBlack};
  font-size: ${({ theme }) => theme.fontSizes.mdTitle};
  font-weight: 500;
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
