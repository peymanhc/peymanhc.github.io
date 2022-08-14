import { lazy } from "react";
import { SHOULD_NOT_AUTH, SHOULD_AUTH } from "config/enums";

export const Pages = [
  {
    title: "Home",
    path: "/flash",
    exact: true,
    icon: "",
    render: () => lazy(() => import("pages/home")),
    guard: SHOULD_AUTH,
  },
  {
    title: "NotFound",
    path: "*",
    exact: true,
    icon: "",
    render: () => lazy(() => import("pages/not-found")),
    guard: SHOULD_AUTH,
  },
];
