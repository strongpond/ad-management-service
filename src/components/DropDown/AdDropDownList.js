import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { adDataAtom, adIdentifyAtom, filteredDataAtom } from "../../atoms";
import { convertStatus } from "../../utils";

export const AdDropDownList = ({ value, setIsOpen, isOpen }) => {
  const adData = useRecoilValue(adDataAtom);
  const setFilteredData = useSetRecoilState(filteredDataAtom);
  const setAdIdentify = useSetRecoilState(adIdentifyAtom);

  const ValueClick = () => {
    setAdIdentify(value);
    setIsOpen(!isOpen);
    setFilteredData(
      value === "전체광고" ? adData : adData.filter(e => convertStatus(e.status) === value)
    );
  };

  return <AdMenu onClick={ValueClick}>{value}</AdMenu>;
};

const AdMenu = styled.li`
  padding: 10px 0 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;
