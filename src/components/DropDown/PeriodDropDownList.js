import styled from "styled-components";

export const PeriodDropDownList = ({ value, setPeriodTitle, setIsOpen, isOpen }) => {
  const ValueClick = () => {
    setPeriodTitle(value);
    setIsOpen(!isOpen);
  };

  return <PeriodMenu onClick={ValueClick}>{value}</PeriodMenu>;
};

const PeriodMenu = styled.li`
  padding: 10px 0 10px 15px;
  font-size: ${({ theme }) => theme.fontSizes.mdTitle};
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;
