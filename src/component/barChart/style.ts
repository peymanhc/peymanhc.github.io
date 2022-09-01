import style from "provider/style";

const styles = (theme: any) => ({
  root: {
    "& .tooltip": {
      padding: 15,
      minWidth: 150,
      "& section": {
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        flexDirection:"column",
        marginBottom: 20,
      },
      "& h5": {
        fontSize: 13,
        textAlign: "center",
      },
      "& span": {
        paddingLeft: 16,
      },
    },
  },
});

export default style(styles);
