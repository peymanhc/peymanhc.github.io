import { locale } from "config/string";

export const getBeautifulMonth = (month: number | string) => {
  switch (month) {
    case '01':
      return locale.farvardin;
    case '02':
      return locale.ordibehesht;
    case '03':
      return locale.khordad;
    case '04':
      return locale.tir;
    case '05':
      return locale.mordad;
    case '06':
      return locale.shahrivar;
    case '07':
      return locale.mehr;
    case '08':
      return locale.aban;
    case '09':
      return locale.azar;
    case '10':
      return locale.dai;
    case '11':
      return locale.bahman;
    case '12':
      return locale.esfand;
    default:
      break;
  }
};
