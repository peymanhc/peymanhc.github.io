import { get, post } from "./api";

export default {
  getbarChart: () =>
    get({
      url: "/",
      api: "mockbarchart.json",
    }),
};
