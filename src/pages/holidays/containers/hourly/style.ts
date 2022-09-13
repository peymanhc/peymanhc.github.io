import style from "provider/style";

const styles = (theme: any) => ({
  root: {
    padding: 20,
    maxWidth:1600,
  }, 
  successIcon:{
    color: theme.palette.primary,
    fontSize:20
  },
  rejectedIcon:{
    color: theme.palette.colors.red[900],
    fontSize:20,
  },
  date:{
    color:theme.palette.colors.grey[700],
    fontSize:14,
    direction:"ltr"
  },
  "@media screen and (max-width: 992px)": {
    root: {
      padding: 10,
    },
  }
});

export default style(styles);
