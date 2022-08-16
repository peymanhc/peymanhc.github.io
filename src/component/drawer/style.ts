import style from "provider/style";

const styles = (theme: any) => ({
  root: {
    backgroundColor: `${theme.palette.white}`,
  },
  sideMenu: {
    backgroundColor: `${theme.palette.white}`,
    padding: "10px 0px",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    minWidth: 230,
    borderRadius: 0,
    border: "1px solid #e0e0e0",
    borderTop: "none",
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    // padding: ' 0 24px !important',
    height: "45px !important",
    "&::after": {
      width: 4,
      height: "100%",
      borderRadius: [0, 10, 10, 0],
      border: "none",
      backgroundColor: theme.palette.primary,
      top: 0,
      bottom: 0,
      margin: "auto",
    },
    "& a": {
      color: `${theme.palette.colors.grey[700]}`,
      "&:hover": {
        color: `${theme.palette.primary}`,
      },
    },
    "&.ant-menu-item": {
      "&:active": {
        backgroundColor: `${theme.palette.colors.green[100]}`,
      },
    },
    "&.ant-menu-item-selected": {
      backgroundColor: "transparent !important",
      borderColor: "transparent !important",
      "& a": {
        color: `${theme.palette.primary} !important`,
      },
      "&::after": {
        borderRadius: [0, 10, 10, 0],
        border: "none",
        top: 0,
        bottom: 0,
        margin: "auto",
      },
    },

    "& i": {
      fontSize: 30,
      marginLeft: 16.1,
      color: `${theme.palette.secondary}`,
    },
    "& span": {
      marginRight: 16.1,
      color: `${theme.palette.secondary}`,
    },
    "& svg": {
      width: 30,
    },
  },
  activeMenu: {
    color: `${theme.palette.primary} !important`,
    fontWeight: "bold",
    fontSize: "14px !important",
  },
  collapsedIcon: {
    margin: [0, 16],
    height: 48,
    display: "flex",
    alignItems: "center",
    "& div": {
      cursor: "pointer",
      fontSize: 18,
      color: `${theme.palette.secoundary} !important`,
    },
  },
  background: "transparent",
  "& .ant-layout-sider-trigger": {
    position: "relative",
    top: 0,
    bottom: "unset",
    background: "transparent",
  },
  "@media screen and (max-width:767px)": {
    display: "none",
  },
  "@media screen and (max-width:480px)": {
    root: {
      display: "none",
    },
  },
});

export default style(styles);