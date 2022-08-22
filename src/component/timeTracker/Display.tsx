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
      <div>{props.time.m >= 60 ? props.time.m : "0" + props.time.h}</div>
      &nbsp;:&nbsp;
      <div>{props.time.s >= 60 ? props.time.s : "0" + props.time.m}</div>
      &nbsp;:&nbsp;
      <div>{props.time.s >= 10 ? props.time.s : "0" + props.time.s}</div>
    </div>
  );
}

export default style(Display);
