import style from "provider/style";

const styles = (theme: any) => ({
  root: {
    padding: 20,
    maxWidth: 1600,
  },
  cardIcon: {
    fontSize: 25,
  },
  card: {
    width: "100%",
    maxWidth: 205,
  },
  colors: {
    display: "flex",
    gridGap: 10,
    alignItems: "center",
    "& span": {
      width: 23,
      height: 23,
      cursor:"pointer",
      borderRadius: "50%",
      
      "&:nth-child(1)": {
        background:
          "radial-gradient(71% 79% at top left, #03a40388 94%, #6a9e7a 100%)",
        border: "4px solid #6a9e7a",
      },
      "&:nth-child(2)": {
        background:
          "radial-gradient(71% 79% at top left, #4382f7 94%, #2e67d1 100%)",
        border: "4px solid #2e67d1",
      },
      "&:nth-child(3)": {
        background:
          "radial-gradient(71% 79% at top left, #e091ff 94%, #d261ff 100%)",
        border: "4px solid #d261ff",
      },
    },
  },
});

export default style(styles);
