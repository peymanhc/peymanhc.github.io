import { get, post } from "./api";

export default {
  getMessage: () =>
    get({
      url: "/",
      api: "messages.json",
    }),
  getChatItems: () =>
    get({
      url: "/",
      api: "chatLists.json",
    }),
};
