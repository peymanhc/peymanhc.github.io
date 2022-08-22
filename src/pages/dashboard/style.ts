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
    minHeight:"400px !important",
    width:"100%",
    padding: [0,0,50,80],
    border: `1px solid ${theme.palette.colors.grey[200]}`,
  },
  timeTracker:{
    padding:10,
    width:"100%",
    height: 110,
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
  todayTrack:{
    width:"100%",
    height: 110,
  },
  trackItem:{
    display:"flex",
    alignItems:"center",
    flexDirection:"row-reverse",
    width:"100%",
    background:theme.palette.third,
    padding:10,
    gridGap:5
  },
  totalTime:{
    width:"100%",
    background:theme.palette.colors.green[100],
    display:"flex",
    alignItems:"center",
    flexDirection:"row-reverse",
    padding:10,
    gridGap:5
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
    }
  }
});

export default style(styles);
