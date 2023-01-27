const titleMap = {
  roas: "ROAS",
  cost: "광고비",
  imp: "노출수",
  click: "클릭수",
  cvr: "전환수",
  ctr: "매출",
};

export const convertTitle = title => {
  return titleMap[title];
};

const statusMap = {
  active: "진행중",
  ended: "마감",
};

export const convertStatus = type => {
  return statusMap[type];
};

export const convertBudget = num => {
  return num / 10000 + "만원";
};

export const convertRoas = num => {
  return num + "%";
};

export const convertCost = num => {
  const newNum = Math.round(num / 10000)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return newNum + "만원";
};
