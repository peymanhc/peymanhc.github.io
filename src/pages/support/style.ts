import style from "provider/style";

const styles = (theme: any) => ({
  root: {
    padding: 20,
    maxWidth: 1600,
  },
  wrapper: {
    padding: [0, 20, 10, 20],
    border: `1px solid ${theme.palette.colors.grey[200]}`,
  },
  tabs: {
    height: "90%",
  },
  "@media (max-width: 992px)": {
    root: {
      padding: 0,
    },
    wrapper: {
      padding: 0,
      border:0
    },
    tabs: {
      "& .ant-tabs-nav-list": {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      },
      height: "90%",
      "& .ant-tabs-tab": {
        padding: "14px 25px !important",
        margin: "0px !important",
      },
      "& .ant-tabs-ink-bar": {
        height: "2px !important",
      },
      "& .ant-tabs-nav": {
        backgroundColor: theme.palette.white,
        marginBottom: 0,
      },
    },
  },
});

export default style(styles);
