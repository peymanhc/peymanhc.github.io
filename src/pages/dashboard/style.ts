import style from 'provider/style';

const styles = (theme: any) => ({
  root: {
    padding: 20,
    maxWidth:1600,
    display: 'flex',
    width:"100%",
    alignItems: 'flex-start',
    gridGap:20,
    "& h1":{
      fontSize: '60px',
      fontWeight: 'bold',
      color: theme.palette.primary,
      "& span":{
        color: theme.palette.secondary
      }
    },
    "& a":{
      fontSize:20,
      textDecoration: 'underline',
    },
    "& .ant-col":{
      width:"calc(100% - 40px)",
      minHeight:"calc(100vh - 200px)",
    }
  },
  card:{
    maxWidth:400,
    width:"100%",
    height: 110,
  },
  wrapper:{
    display:"flex",
    flexDirection:"column",
    gridGap:20,
    width:"100%",
  },
  calender:{
    maxWidth:400
  },
  chart:{
    height:490,
    display:"flex",
    flexDirection:"column",
    gridGap:20,
    minHeight:"400px !important",
    width:"100%",
    padding: [0,0,80,10],
    backgroundColor:theme.palette.white,
    border: `1px solid ${theme.palette.colors.grey[200]}`,
  },
  timeTracker:{
    padding:10,
    width:"100%",
    height: 110,
    backgroundColor:theme.palette.white,
    border: `1px solid ${theme.palette.colors.grey[200]}`,
  },
  bartitle:{
    textAlign:"center",
    fontSize:16,
    paddingTop:25
  },
  tracker:{
    display:"flex",
    gridGap:20,
  },
  track:{
    width:"100%",
    display:"flex",
    gridGap:20,
    flexDirection:"column"
  },
  tracksList:{
    backgroundColor:theme.palette.white,
    padding:10,
    width:"100%",
    height: 241,
    border: `1px solid ${theme.palette.colors.grey[200]}`,
    overflowY:"auto",
    '&::-webkit-scrollbar-button': {
      display: 'none',
    },
    '&::-webkit-scrollbar': {
      width: 5,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 5,
      background: '#20bf6b',
    },
  },
  trackItems:{
    width:"100%",
    height: "11.3em",
    overflowY:"auto",
    border: `1px solid ${theme.palette.colors.grey[200]}`,
    '&::-webkit-scrollbar-button': {
      display: 'none',
    },
    '&::-webkit-scrollbar': {
      width: 5,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 5,
      background: '#20bf6b',
    },
  },
  todayTrack:{
    width:"100%",
    height: 110,
  },
  trackItem:{
    border: `1px solid ${theme.palette.colors.grey[100]}`,
    display:"flex",
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-between",
    width:"100%",
    background:theme.palette.third,
    padding:10,
    gridGap:5
  },
  actions:{
    display:"flex",
    alignItems:"center",
    gridGap:20,
    "& i":{
      cursor:"pointer"
    }
  },
  time:{
    display:"flex",
    alignItems:"center",
    flexDirection:"row-reverse",
  },
  totalTime:{
    width:"100%",
    display:"flex",
    alignItems:"center",
    flexDirection:"row-reverse",
    padding:10,
    gridGap:5
  },
  titleCard:{
    display:"flex",
    alignItems:"center",
    gridGap:15,
    marginBottom:15,
    "& i":{
      fontSize: 22,
      color: `${theme.palette.primary}`,
      backgroundColor: `${theme.palette.colors.green[50]}`,
      borderRadius: "50%",
      width: 45,
      height: 45,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "& h5":{
      fontSize:16,
      marginBottom:0
    }
  },
  emptyState:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    height:60,
    fontSize:14,
    fontWeight:700
  },
  removeBody:{
    backgroundColor:theme.palette.white
  },
  removeActions:{
    display:"flex",
    marginTop:24,
    justifyContent:"flex-end",
    gridGap:20
  },
  removeButton:{
    cursor:"pointer",
    backgroundColor:theme.palette.colors.red[900],
    border:0,
    color:theme.palette.white,
    width:100,
    height:40
  },
  cancelButton:{
    cursor:"pointer",
    backgroundColor:theme.palette.colors.grey[500],
    border:0,
    color:theme.palette.white,
    width:100,
    height:40
  },
  "@media (max-width: 992px)": {
    root: {
      flexDirection: "column",
      padding:15
    },
    wrapper: {
      width: "100% !important",
    },
    chart:{
      padding:0,
      height:100,
    },
    tracker:{
      flexDirection:"column"
    }
  }
});

export default style(styles);
