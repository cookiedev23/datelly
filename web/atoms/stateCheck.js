import { atom } from "recoil";

const stateCheck = atom({
  key: "statecheck",
  default: false,
});

export default stateCheck;
