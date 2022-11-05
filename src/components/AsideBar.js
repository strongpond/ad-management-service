import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

const AsideBar = () => {
  return (
    <MenuBox>
      <NavBox>
        <LogoBox>
          <img src="/images/Lever_BI 1.png" alt="Lever" />
        </LogoBox>
        <ServiceBox>
          <ServiceTitle>서비스</ServiceTitle>
          <ServiceContentBox>
            <ServiceContent>매드업</ServiceContent>
            <IoIosArrowDown />
          </ServiceContentBox>
        </ServiceBox>
        <ServiceBox>
          <ServiceTitle>광고 센터</ServiceTitle>
          <TabMenuList>
            <TabMenu className="isSelected">대시보드</TabMenu>
            <TabMenu>광고관리</TabMenu>
          </TabMenuList>
        </ServiceBox>
      </NavBox>
      <FooterBox>
        <GuideBox>
          <img src="/images/guide.png" alt="이용가이드" />
        </GuideBox>
        <TermsBox>레버는 함께 만들어갑니다.</TermsBox>
        <TermsBox>이용약관</TermsBox>
      </FooterBox>
    </MenuBox>
  );
};

export default AsideBar;

const MenuBox = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-grow: none;
  padding: 0 40px;
  width: 320px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.04);
`;

const NavBox = styled.div``;

const LogoBox = styled.div`
  height: 150px;
  padding: 60px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;

const ServiceBox = styled.div`
  padding-top: 53px;
`;

const ServiceTitle = styled.p`
  padding-left: 20px;
  margin-bottom: 13px;
  color: ${({ theme }) => theme.colors.fontGrey};
  font-size: ${({ theme }) => theme.fontSizes.navSubtitle};
  font-weight: 700;
`;

const ServiceContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.borderGrey};
  border-radius: 10px;
`;

const ServiceContent = styled.p`
  display: inline;
  color: ${({ theme }) => theme.colors.fontBlack};
  font-size: ${({ theme }) => theme.fontSizes.navTitle};
  font-weight: 700;
`;

const TabMenuList = styled.div``;

const TabMenu = styled.div`
  padding: 20px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.fontBlack};
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.navTitle};
  font-weight: 700;

  &.isSelected {
    color: ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }

  &:hover {
    cursor: pointer;
  }
`;

const FooterBox = styled.div`
  height: 234px;
  margin-bottom: 60px;
`;

const GuideBox = styled.div`
  padding-bottom: 40px;
`;

const TermsBox = styled.p`
  margin-bottom: 10px;
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.fontGrey};
  font-size: ${({ theme }) => theme.fontSizes.navSubtitle};
  font-weight: 500;
`;
