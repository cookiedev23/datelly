import { atom } from "recoil";

const stateIndex = atom({
  key: "stateindex",
  default: 0,
});

export default stateIndex;
