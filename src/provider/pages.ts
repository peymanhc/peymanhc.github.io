import { lazy } from "react";

export const Pages = [
  {
    title: "statistics",
    path: "/statistics",
    exact: true,
    icon: "",
    render: () => lazy(() => import("pages/contacts")),
    layout:true
  },
  {
    title: "Dashboard",
    path: "/",
    exact: true,
    icon: "",
    render: () => lazy(() => import("pages/dashboard")),
    layout:true
  },
  {
    title: "members",
    path: "/members",
    exact: true,
    icon: "",
    render: () => lazy(() => import("pages/members")),
    layout:true
  },
  {
    title: "members",
    path: "/members/:userId",
    exact: true,
    icon: "",
    render: () => lazy(() => import("pages/member")),
    layout:true
  },
  {
    title: "settings",
    path: "/settings",
    exact: true,
    icon: "",
    render: () => lazy(() => import("pages/settings")),
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
