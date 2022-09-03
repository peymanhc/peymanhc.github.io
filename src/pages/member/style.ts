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
  userInformations:{
    display:"flex",
    alignItems:"flex-start",
    flexDirection:"row",
    justifyContent:"space-between",
    gridGap:20
  },
  userInfo: {
    "& li": {
      fontSize: 14,
      lineHeight: 2.5,
    },
  },
  userImage:{
    width:200,
    height:200,
    borderRadius:"50%",
    border:`1px solid ${theme.palette.primary}`,
    objectFit:"cover",
    marginBottom:30
  },
  timeChart:{
    width:"100%",
    padding: 20,
    height:"100%",
    backgroundColor: theme.palette.white,
    border: `1px solid ${theme.palette.colors.grey[200]}`,
  },
  column:{
    display:"flex",
    flexDirection:"column",
    gridGap:20
  },
  table:{
    maxHeight:304
  },
  successIcon:{
    color: theme.palette.primary,
    fontSize:20
  },
  waitingIcon:{
    color: theme.palette.colors.yellow[800],
    fontSize:16,
  },
  flex:{
    display:"flex",
    alignItems:"center",
    gridGap:30
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
  "@media screen and (max-width:992px)": {
    flex:{
      flexDirection:"column",
      alignItems:"flex-start",
      gridGap:5
    },
    userInformations:{
      flexDirection:"column",
      gridGap:10
    },
    userImage:{
      width:130,
      height:130,
      marginBottom:10
    },
    root: {
      padding: 10,
    },
    userInfo: {
      "& li": {
        fontSize: 12,
        lineHeight: 2.5,
      },
    },
    column:{
      gridGap:10,
      width:"100%"
    },
    table:{
     marginBottom:60,
     padding:10
    },
    timeChart:{
      padding: 10,
    },
  },
});

export default style(styles);
