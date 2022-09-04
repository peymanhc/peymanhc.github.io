import { Theme } from 'antd/lib/config-provider/context';
import style from 'provider/style';

const styles = (theme: any) => ({
  root: {
    border: `1px solid ${theme.palette.colors.grey[100]}`,
    padding: '20px !important',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent:"center",
    minHeight: 166,
    gridGap: 15,
    '& h5': {
      fontSize: 14,
    },
    '& span': {
      fontSize: 14,
      color: theme.palette.primary,
    },
  },
  icon: {},
});

export default style(styles);
