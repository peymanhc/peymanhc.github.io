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
    ...(mode === "light"
      ? {
          primary: "#6a9e7a",
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
          primary: "#6a9e7a",
          secondary: "rgb(0, 41, 0)",
          third: "rgb(241, 248, 236)",
          colors: {
            red: {
              100: "#fff5f5",
              200: "#ffe3e3",
              300: "#ffc9c9",
              800:"",
              900:"red"
            },
            yellow:{
              800:"#FEB019"
            },
            grey: {
              100: "#f0f0f0",
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
              25: "#dcf3dc56",
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
            blue:{
              100: "#96DED1",
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
