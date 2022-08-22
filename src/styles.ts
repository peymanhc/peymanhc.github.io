import style from './provider/style';
import './assets/fonts/font.css';

const styles = (theme: any) => ({
  '@global': {
    '&::-webkit-scrollbar-button': {
      display: 'none',
    },
    '&::-webkit-scrollbar': {
      width: 5,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 4,
      background: '#20bf6b',
    },

    body: {
      direction: 'rtl',
      overscrollBehaviorY: 'contain',
      overflowX: 'hidden',
      '& ul': {
        listStyle: 'none',
        margin: 0,
        padding: 0,
      },
      '&::-webkit-scrollbar-button': {
        display: 'none',
      },
      '&::-webkit-scrollbar': {
        width: 5,
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: 4,
        background: '#20bf6b',
      },
      
    },
  },
  wrapper: {
    height: '100%',
    width: '100%',
    overflow: 'auto',
    background:theme.palette.colors.grey[100],
    '&::-webkit-scrollbar-button': {
      display: 'none',
    },
    '&::-webkit-scrollbar': {
      width: 5,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 4,
      background: '#20bf6b',
    },
  },
  app: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: theme.palette.white,
    margin: '0 auto',
    '@media screen and (max-width:767px)': {
      background: theme.palette.colors.grey[100],
    },
    '& a': {
      textDecoration: 'none',
    },
  },
  loading: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.white,
  },
  '@media screen and (max-width:480px)': {
    app: {
      background: theme.palette.colors.grey[200],
    },
  },
});

export default style(styles);
