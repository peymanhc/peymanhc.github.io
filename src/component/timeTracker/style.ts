import style from "provider/style";

const styles = (theme: any) => ({
  mainTracker: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "100%",
  },
  display: {
    flexDirection:"row-reverse",
    display: "flex",
    alignItems: "center",
    "& div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: `1px solid ${theme.palette.colors.green[200]}`,
      width: 35,
      height: 35,
      fontSize: 16,
    },
  },
  button: {
    width: "100%",
    maxWidth: 137,
    marginTop: 10,
    cursor: "pointer",
    padding: [5, 10],
    fontSize: 16,
  },
  start: {
    backgroundColor: theme.palette.colors.green[50],
    border: `1px solid ${theme.palette.colors.green[200]}`,
  },
  stop: {
    backgroundColor: theme.palette.colors.red[900],
    border: `1px solid ${theme.palette.colors.red[200]}`,
    color: theme.palette.white,
  },
  resume: {
    backgroundColor: theme.palette.colors.blue[100],
    border: `1px solid ${theme.palette.colors.blue[100]}`,
    color: theme.palette.white,
  },
  displaystart: {
    "& span": {
      border: `1px solid ${theme.palette.colors.green[200]}`,
    },
  },
  displaystop: {
    "& span": {
      border: `1px solid ${theme.palette.colors.red[900]}`,
    },
  },
  displayresume: {
    "& span": {
      border: `1px solid ${theme.palette.colors.blue[100]}`,
    },
  },
});

export default style(styles);
