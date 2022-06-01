import { atom } from "recoil";

const tabSelector = atom({
  key: "tabselector",
  default: 1,
});

export default tabSelector;
