import style from 'provider/style';

const styles = (theme: any) => ({
  root: {
    padding: [100,48],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
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
});

export default style(styles);
