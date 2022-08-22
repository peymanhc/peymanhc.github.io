import style from "provider/style";
import bgImage from 'assets/images/loginImage.jpg';

const styles = (theme: any) => ({
  wrapper: {
    backgroundImage: `url(${bgImage}) `,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  pcon: {
    width: 370,
    height: 420,
    border: `1px solid ${theme.palette.colors.green[300]}`,
    boxShadow: `2px 1px 5px ${theme.palette.colors.green[100]}`,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backdropFilter: "blur(5px)",
    backgroundColor: theme.palette.colors.grey[200],
    color: theme.palette.primary,

  },

  textfield: {
    height: 40,
    width: 270,
    textIndent: 10,
    borderRadius: 10,
    border: "none",
    "&:focus": {
      outline: `2px solid ${theme.palette.colors.green[300]}`,
    },
  },

  btn: {
    height: 50,
    width: 274,
    marginBottom: 10,
    border: theme.palette.primary,
    borderRadius: 10,
    backgroundColor: theme.palette.colors.green[800],
    color: "white",
    transition: "all 600ms ease-out",
    cursor: "pointer",
  },

  inputs: {
    margin: "20px 0px",
  },

  forgot: {
    position: "relative",
    marginTop: 10,
    fontSize: 11,
    textDecoration: "underline",
  },
  "@media (max-width: 992px)": {
    pcon: {
      height: "100%",
      width: "80%",
      backgroundColor: theme.palette.colors.grey[200],
      borderRadius: 0,
    },
    wrapper:{
      display: "block",
      "& form":{
        width:"80%"
      }
    },
    textfield: {
      width: "100%",
    },
    btn: {
      width: "100%",
    },
  }
});

export default style(styles);
