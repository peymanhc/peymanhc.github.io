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
      border: `1px solid ${theme.palette.first[200]}`,
      width: 35,
      height: 35,
      fontSize: 16,
      color: theme.palette.first[900]
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
    backgroundColor: theme.palette.first[50],
    border: `1px solid ${theme.palette.first[200]}`,
    color:theme.palette.primary
  },
  stop: {
    backgroundColor: theme.palette.colors.red[900],
    border: `1px solid ${theme.palette.colors.red[200]}`,
    color: theme.palette.white,
  },
  displaystart: {
    "& span": {
      border: `1px solid ${theme.palette.first[200]}`,
    },
  },
  displaystop: {
    "& span": {
      border: `1px solid ${theme.palette.colors.red[900]}`,
    },
  },
});

export default style(styles);
