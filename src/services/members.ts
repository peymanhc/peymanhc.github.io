import { get, post } from "./api";

export default {
  getMembers: () =>
    get({
      url: "/",
      api: "membersList.json",
    }),
  getMemberChartInfo: () =>
    get({
      url: "/",
      api: "memberChartInfo.json",
    }),
  getMemberInfo: () =>
    get({
      url: "/",
      api: "memberInfo.json",
    }),
};
