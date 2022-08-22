import style from 'provider/style';

const styles = (theme: any) => ({
  root: {
    padding: 10,
    height: 72,
    zIndex: 100,
    borderBottom: `1px solid ${theme.palette.colors.grey[200]}`,
  },
  '@media screen and (max-width:767px)': {
    padding: [0, 0],
    '& .mobileHeader': {
      backgroundColor: theme.palette.white,
      width: '100%',
      height: '60px',
      '& .logo': {
        width: '4em',
        height: '4em',
      },
    },
  },
  logo: {
    width: 42,
  },
  titleLogo: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    marginRight: 16,
    '& img': {
      marginLeft: 16,
    },
    '& svg': {
      height: 32,
      width: 32,
    },
  },
  title: {
    display:"flex",
    flexDirection:"column",
  },
  headerProfile: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tiket: {
    background: '#ebfaf7',
    padding: [11, 12],
    display: 'flex',
    alignItems: 'center',
    marginLeft: 15,
    borderRadius: 4,
    justifyContent: 'center',
    '& i': {
      fontSize: 20,
      color: 'theme.palette.primary',
      marginLeft: 8,
    },
  },
  headerMenu: {
    '& ul': {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row-reverse',
      width: '100%',
      justifyContent: 'space-around',
      padding: [0, 6],
      '& li': {
        '& i': {
          color: `${theme.palette.secoundary}`,
          fontSize: 20,
        },
        '& svg': {
          width: 30,
        },
      },
    },
  },
  menuBar: {
    borderLeft: `${theme.palette.colors.grey[200]} !important`,
    borderRight: `${theme.palette.colors.grey[200]} !important`,
  },
  menuStyle: {
    backgroundColor: `${theme.palette.colors.grey[800]} !important`,
    borderRadius: 10,
    padding: 10,
    '& span': {
      color: theme.palette.white,
    },
    "& .ant-dropdown-menu-title-content":{
      display:"flex",
      alignItems:"center",
      padding:"5px 0"
    },
    "& article":{
      color:`${theme.palette.white}`,
    }
  },
  headerMobile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& i': {
      fontSize: 25,
      color: `${theme.palette.secoundary}`,
    },
    '& span': {
      fontSize: 25,
      color: `${theme.palette.secoundary}`,
    },
  },

  quickAccess: {
    width: 250,
    '& li': {
      padding: [8, 8],
    },
    '& .ant-dropdown-menu-item': {
      padding: [8, 8],
      '& span': {
        color: 'theme.palette.primary',
      },
    },
  },
  quickAccessMenu: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& i': {
      color: 'theme.palette.primary',
    },
  },
  quickAccessMenuWrapper: {
    display: 'flex',
    alignItems: 'center',
    '& i': {
      marginLeft: 10,
      color: `${theme.palette.secoundary}`,
    },
    '& span': {
      color: `${theme.palette.secoundary}`,
    },
  },
  '@media screen and (max-width:480px)': {
    root: {
      display:"none"
    },
  },
});

export default style(styles);
