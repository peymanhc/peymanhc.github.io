import { read } from "storage";
import EN_US from "./lang/en";
import FA_IR from "./lang/fa";

const language = read("language");
const lang = () => {
  switch (language) {
    case "en":
      return EN_US;
    case "fa":
      return FA_IR;
    default:
      return FA_IR;
  }
};

const locale = lang();
// eslint-disable-next-line import/prefer-default-export
export { locale };
