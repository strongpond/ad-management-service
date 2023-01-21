import { atom } from "recoil";

export const adIdentifyAtom = atom({
  key: "adIdentify",
  default: "전체광고",
});

export const adDataAtom = atom({
  key: "adData",
  default: [],
});

export const filteredDataAtom = atom({
  key: "filteredData",
  default: [],
});
