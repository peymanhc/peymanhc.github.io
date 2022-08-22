import React from "react";
import style from "./style";

function Btn({ status, start, stop, classes }: any) {
  return (
    <button
      className={[
        classes.button,
        status === 0 ? classes.start : classes.stop,
      ].join("  ")}
      onClick={status === 0 ? start : stop}
    >
      {status === 0 ? "Start" : "Stop"}
    </button>
  );
}
export default style(Btn);
