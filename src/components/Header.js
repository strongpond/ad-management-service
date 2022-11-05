import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Head>
      <img src="/images/auth.png" alt="사용자 정보" />
    </Head>
  );
};

export default Header;

const Head = styled.div`
  display: flex;
  justify-content: end;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;
