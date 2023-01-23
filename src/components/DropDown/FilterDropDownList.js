import styled from "styled-components";

export const FilterDropDownList = ({ value, setFilteredTitle, setIsOpen, isOpen }) => {
  const ValueClick = () => {
    setFilteredTitle(value);
    setIsOpen(!isOpen);
  };

  return <FilterMenu onClick={ValueClick}>{value}</FilterMenu>;
};

const FilterMenu = styled.li`
  padding: 10px 0 10px 15px;
  font-size: ${({ theme }) => theme.fontSizes.mdTitle};
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;
