import style from "provider/style";

const styles = (theme: any) => ({
  root: {
    padding: 20,
    maxWidth: 1600,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gridGap: 20,
    width: "100%",
    padding: 20,
    backgroundColor: theme.palette.white,
    border: `1px solid ${theme.palette.colors.grey[200]}`,
  },
  boxTitle: {
    fontSize: 14,
    display: "flex",
    whiteSpace:"nowrap",
    alignItems: "center",
    gridGap: 10,
    "& i": {
      fontSize: 20,
      color: theme.palette.primary,
    },
  },
  usernameCol: {
    width: 160,
    textAlign: "right",
    gridGap: 10,
    display: "flex",
    alignItems: "center",
    "& p": {
      width: 140,
      textOverflow: "ellipsis",
      display: "-webkit-box",
      lineHeight: "32px",
      "-webkit-line-clamp": 1,
      "-webkit-box-orient": "vertical",
    },
    "& span": {
      minWidth:30,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.primary,
      backgroundColor: theme.palette.colors.green[100],
    },
  },
  flex:{
    display:"flex",
    alignItems:"center",
    gridGap:30
  },
  successIcon:{
    color: theme.palette.primary,
    fontSize:20
  },
  waitingIcon:{
    color: theme.palette.colors.yellow[800],
    fontSize:16,
  },
  totalCount:{
    fontSize:15,
    fontWeight:400,
    textAlign:"right"
  },
  "@media screen and (max-width:992px)": {
    flex:{
      flexDirection:"column",
      alignItems:"flex-start",
      gridGap:5
    }
  },
});

export default style(styles);
