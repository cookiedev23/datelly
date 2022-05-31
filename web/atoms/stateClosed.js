import { atom } from "recoil";

const stateClosed = atom({
  key: "stateclosed",
  default: false,
});

export default stateClosed;
