import React from "react";
import style from "./style";

function Display(props: any) {
  const { classes, status } = props;
  return (
    <div
      className={[
        classes.display,
        status === 0
          ? classes.displaystart
          : status === 1
          ? classes.displaystop
          : classes.displayresume,
      ].join("  ")}
    >
      <div>{props.time?.timeDiff?.m >= 60 ? props.time?.timeDiff?.m : "0" + props.time?.timeDiff?.h}</div>
      &nbsp;:&nbsp;
      <div>{props.time?.timeDiff?.s >= 60 ? props.time?.timeDiff?.s : "0" + props.time?.timeDiff?.m}</div>
      &nbsp;:&nbsp;
      <div>{props.time?.timeDiff?.s >= 10 ? props.time?.timeDiff?.s : "0" + props.time?.timeDiff?.s}</div>
    </div>
  );
}

export default style(Display);
