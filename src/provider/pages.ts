import { lazy } from "react";

export const Pages = [
  {
    title: "Home",
    path: "/",
    exact: true,
    icon: "",
    render: () => lazy(() => import("pages/home")),
    layout:true
  },
  {
    title: "Authenticated",
    path: "/auth/login",
    exact: true,
    icon: "",
    render: () => lazy(() => import("pages/auth/login")),
    layout:false
  },
  {
    title: "NotFound",
    path: "*",
    exact: true,
    icon: "",
    render: () => lazy(() => import("pages/not-found")),
    layout:true
  },
];
