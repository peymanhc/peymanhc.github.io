import React from "react";
import { ThemeProvider } from "react-jss";
// import { useSelector } from 'react-redux';

const Style = (mode: any, direction: any) => ({
  direction: direction,
  palette: {
    hedaerMobileSize: "56px",
    mode,
    white: "#fff",
    black: "#000",
    ...(mode === "blue"
      ? {
          primary: "#4382f7",
          secondary: "#2e67d1",
          third: "red",
          first: {
            25: "#00879b",
            50: "#91deff",
            100: "#42baff",
            200: "#42bdff",
            300: "#42aaff",
            400: "#3a94de",
            500: "#3273db",
            600: "#265ec7",
            700: "#1b55c2",
            800: "#03a403b5",
            900: "blue",
          },
          colors: {
            red: {
              100: "#fff5f5",
              200: "#ffe3e3",
              300: "#ffc9c9",
              800: "",
              900: "red",
            },
            yellow: {
              800: "#FEB019",
            },
            grey: {
              100: "#d3f2f0",
              200: "#b8f5f1",
              300: "#b8f5f1",
              400: "#adadad",
              500: "#8e8e8e",
              600: "#737373",
              700: "#4a4a4a",
              800: "#2e2e2e",
              900: "#1a1a1a",
            },
          },
        }
      : mode === "green"
      ? {
          primary: "#6a9e7a",
          secondary: "rgb(0, 41, 0)",
          third: "rgb(241, 248, 236)",
          first: {
            25: "#b6ddb6",
            50: "#dcf3dca6",
            100: "#dcf3dc",
            200: "#03a40336",
            300: "#03a40355",
            400: "#03a4036e",
            500: "#03a40388",
            600: "#03a40394",
            700: "#03a403a6",
            800: "#03a403b5",
            900: "#03a403cd",
          },
          colors: {
            red: {
              100: "#fff5f5",
              200: "#ffe3e3",
              300: "#ffc9c9",
              800: "",
              900: "red",
            },
            yellow: {
              800: "#FEB019",
            },
            grey: {
              25: "rgba(225, 247, 225,0.4)",
              100: "#dcfadc",
              200: "#dcfadc",
              300: "#dcfadc",
              400: "#adadad",
              500: "#8e8e8e",
              600: "#737373",
              700: "#4a4a4a",
              800: "#2e2e2e",
              900: "#1a1a1a",
            },
          },
        }
      : {
          primary: "#e091ff",
          secondary: "#d261ff",
          third: "rgb(241, 248, 236)",
          first: {
            25: "#de8cff",
            50: "#7942a1",
            100: "#7942a1",
            200: "#03a40336",
            300: "#03a40355",
            400: "#b064e8",
            500: "#03a40388",
            600: "#03a40394",
            700: "#03a403a6",
            800: "#03a403b5",
            900: "#03a403cd",
          },
          colors: {
            red: {
              100: "#fff5f5",
              200: "#ffe3e3",
              300: "#ffc9c9",
              800: "",
              900: "red",
            },
            yellow: {
              800: "#FEB019",
            },
            grey: {
              25: "#de8cff",
              100: "#f1d9fa",
              200: "#f1d9fa",
              300: "#f1d9fa",
              400: "#adadad",
              500: "#8e8e8e",
              600: "#737373",
              700: "#4a4a4a",
              800: "#2e2e2e",
              900: "#1a1a1a",
            },
          },
        }),
  },
});

export const Theme = ({ theme, children }: any) => {
  // const language = useSelector((state) => state.translate);
  const direction = "en_US" ? "ltr" : "rtl";
  return (
    <ThemeProvider theme={Style(theme, direction)}>{children}</ThemeProvider>
  );
};
