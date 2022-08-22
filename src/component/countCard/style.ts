import style from "provider/style";

const styles = (theme: any) => ({
  root: {
    backgroundColor: `${theme.palette.white}`,
    padding: [25,20],
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gridGap: 20,
    border: `1px solid ${theme.palette.colors.grey[100]}`,
  },
  icon: {
    fontSize: 25,
    color: `${theme.palette.primary}`,
    backgroundColor: `${theme.palette.colors.green[50]}`,
    borderRadius: "50%",
    width: 50,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper:{
    "& h4":{
      fontSize: "20px",
      fontWeight: "bold",
    },
    "& span":{
      fontSize: 10,
      color:theme.palette.colors.grey[500],
    },
  },
});

export default style(styles);
