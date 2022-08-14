import withStyles from 'react-jss';

// eslint-disable-next-line
export default (styles: any) => (component: any) =>
  //@ts-ignore
  withStyles(styles, { withTheme: false })(component);
