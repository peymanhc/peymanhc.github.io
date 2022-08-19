import style from "provider/style";

const styles = (theme: any) => ({
  root: {
    borderTop: `1px solid ${theme.palette.colors.grey[200]}`,
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: theme.palette.hedaerMobileSize,
    backgroundColor: theme.palette.white,
    zIndex: 100,
    "& .ant-menu": {
      "&:before": {
        display: "none",
      },
      "&:after": {
        display: "none",
      },
    },
  },
  menuStyle: {
    backgroundColor: `${theme.palette.colors.grey[800]} !important`,
    borderRadius: 10,
    padding: 10,
    "& span": {
      color: theme.palette.white,
    },
    "& .ant-dropdown-menu-title-content": {
      display: "flex",
      alignItems: "center",
      padding: "5px 0",
    },
    "& article": {
      color: `${theme.palette.white}`,
    },
  },
  userLogo: {
    width: 18,
    height: 18,
  },
  headerProfile: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  headerMenu: {
    "& ul": {
      display: "flex",
      alignItems: "center",
      flexDirection: "row-reverse",
      width: "100%",
      justifyContent: "space-around",
      padding: [0, 6],
      "& li": {
        "& i": {
          color: `${theme.palette.secoundary}`,
          fontSize: 20,
        },
        "& svg": {
          width: 30,
        },
      },
    },
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: [10, 10],
    height: "100%",
    width: "100%",
  },
  activeMenu: {
    color: `${theme.palette.primary} !important`,
    fontWeight: "bold",
    fontSize: "12px !important",
    display: "flex",
    alignItems: "center",
    gridGap: 10,
  },
  activeshowmore: {
    transition: "all 0.3s ease-in-out",
    borderColor: "transparent !important",
    borderRadius: 50,
    backgroundColor: "#03a40323 !important",
    outline: `1px solid ${theme.palette.colors.grey[300]}`,
    boxShadow: `1px 1px 1px 1px ${theme.palette.colors.grey[300]}`,
  },
  moreIcon: {
    extend: "menuItem",
    justifyContent: "center",
    "&.ant-menu-item-selected": {
      width: 40,
    },
    "& i": {
      marginLeft: 0,
    },
    "& li": {
      height: 35,
    },
  },
  menuItem: {
    width: "100%",
    maxWidth: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& i": {
      fontSize: 14,
      fontWeight: "bold",
      color: `${theme.palette.secondary}`,
    },
    "& span": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      color: `${theme.palette.secondary}`,
    },
    "& svg": {
      width: 30,
    },
    height: "40px !important",
    transition: "all 0.3s ease-in-out",
    "& a": {
      color: `${theme.palette.colors.grey[700]}`,
      "&:hover": {
        color: `${theme.palette.primary}`,
      },
    },
    "&.ant-menu-item": {
      margin: "0px !important",
      overflow: "inherit",
      transition: "all 0.3s ease-in-out",
      top: 0,
      "&:active": {
        backgroundColor: `${theme.palette.colors.green[100]}`,
      },
    },
    "&.ant-menu-item-selected": {
      top: -25,
      backgroundColor: `${theme.palette.colors.green[100]} !important`,
      borderColor: "transparent !important",
      borderRadius: "50px",
      transition: "all 0.3s ease-in-out",
      "& a": {
        color: `${theme.palette.primary} !important`,
      },
      outline: `1px solid ${theme.palette.colors.grey[300]}`,
      boxShadow: `1px 1px 1px 1px ${theme.palette.colors.grey[200]}`,
    },
  },
  header: {
    position: "fixed",
    top: 0,
    width: "100%",
    height: theme.palette.hedaerMobileSize,
    backgroundColor: theme.palette.white,
    padding: 10,
    borderBottom: `1px solid ${theme.palette.colors.grey[200]}`,
  },
  routeName: {
    position: "absolute",
    bottom: -33,
    right: 0,
    left: 0,
    margin: "auto",
    color:`${theme.palette.primary} !important`,
    fontSize: "10px !important",
  },
});

export default style(styles);
