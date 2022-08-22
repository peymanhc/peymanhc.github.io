import style from 'provider/style';

const styles = (theme: any) => ({
  root: {
    padding: [100,48],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gridGap:20,
    height: '70vh',
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
    }
  },
  card:{
    maxWidth: 280,
    width:"100%",
    height: 110,
  },
  wrapper:{
    display:"flex",
    flexDirection:"column",
  },
  calender:{
    maxWidth:400
  }
});

export default style(styles);
