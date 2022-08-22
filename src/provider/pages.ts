import { lazy } from "react";

export const Pages = [
  {
    title: "contacts",
    path: "/contacts",
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
