import style from "./provider/style";
import "./assets/fonts/font.css";

const styles = (theme) => ({
  "@global": {
    "&::-webkit-scrollbar-button": {
      display: "none",
    },
    "&::-webkit-scrollbar": {
      width: 5,
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: 4,
      background: "#20bf6b",
    },
    body: {
      '& p': {
        marginBottom: 0,
      },
      '& h4': {
        marginBottom: 0,
      },
      "& .ant-tabs-tab-btn": {
        color: theme.palette.colors.grey[700],
      },
      "& .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn": {
        color: theme.palette.primary,
      },
      "& .ant-tabs-tab": {
        padding: "14px 32px !important",
        "&:hover": {
          "& .ant-tabs-tab-btn": {
            color: theme.palette.primary,
          },
        },
      },
      "& .ant-tabs-ink-bar": {
        background: theme.palette.primary,
        height: "2px !important",
      },
      "& .ant-tabs-nav": {
        "&::before": {
          borderColor: theme.palette.colors.grey[100],
        },
      },
      "& .ant-tabs-content": {
        height: "100%",
      },
      "& .ant-tabs-tabpane": {
        height: "100%",
      },
      fontFamily: "Vazir FD !important",
      direction: "rtl",
      overscrollBehaviorY: "contain",
      overflowX: "hidden",
      "& ul": {
        listStyle: "none",
        margin: 0,
        padding: 0,
      },
      "&::-webkit-scrollbar-button": {
        display: "none",
      },
      "&::-webkit-scrollbar": {
        width: 5,
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: 4,
        background: "#20bf6b",
      },
    },
    "#nprogress .bar": {
      background: "theme.palette.primary",
      height: 3,
    },
    "#nprogress .peg": {
      display: "none",
    },
    "&::-webkit-scrollbar-button": {
      display: "none",
    },
  },
  wrapper: {
    height: "100%",
    width: "100%",
    overflow: "auto",
    "&::-webkit-scrollbar-button": {
      display: "none",
    },
    "&::-webkit-scrollbar": {
      width: 5,
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: 4,
      background: theme.palette.primary,
    },
  },
  app: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: theme.palette.white,
    margin: "0 auto",
    "& a": {
      textDecoration: "none",
    },
  },
  loading: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.white,
  },
  root: {},
  "@media screen and (max-width:992px)": {
    app: {
      background: theme.palette.colors.grey[100],
    },
    root: { margin: `calc(${theme.palette.hedaerMobileSize}) 0` },
  },
});

export default style(styles);
