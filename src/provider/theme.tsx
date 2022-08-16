import React from "react";
import { ThemeProvider } from "react-jss";
// import { useSelector } from 'react-redux';

const Style = (mode: any, direction: any) => ({
  direction: direction,
  palette: {
    mode,
    white: "#fff",
    black: "#000",
    ...(mode === "light"
      ? {
          primary: "green",
          secondary: "red",
          colors: {
            white: "#fff",
            black: "#000",
            red: {
              100: "#fff5f5",
              200: "#ffe3e3",
              300: "#ffc9c9",
            },
            grey: {
              100: "#f5f5f5",
              200: "#e3e3e3",
              300: "#c9c9c9",
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
          primary: "green",
          secondary: "black",
          colors: {
            red: {
              100: "#fff5f5",
              200: "#ffe3e3",
              300: "#ffc9c9",
            },
            grey: {
              100: "#f5f5f5",
              200: "#e3e3e3",
              300: "#c9c9c9",
              400: "#adadad",
              500: "#8e8e8e",
              600: "#737373",
              700: "#4a4a4a",
              800: "#2e2e2e",
              900: "#1a1a1a",
            },
            green: {
              100: "#03a40323",
              200: "#03a40336",
              300: "#03a40355",
              400: "#03a4036e",
              500: "#03a40388",
              600: "#03a40394",
              700: "#03a403a6",
              800: "#03a403b5",
              900: "#03a403cd",
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