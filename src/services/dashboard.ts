import { get, post } from "./api";

export default {
  getbarChart: () =>
    get({
      url: "/",
      api: "mockbarchart.json",
    }),
  getLineChart: () =>
    get({
      url: "/",
      api: "mockdateChart.json",
    }),
};
