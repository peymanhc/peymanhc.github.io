import React from "react";
import { read } from "storage";
import style from "./style";

type Props = {
  classes:any
};

function NotFound({classes}: Props) {
  const token = read("token");
  return (
    <div className={classes.root}>
      <h1>
        4<span>0</span>4
      </h1>
      <a href={token ? "/" : "/auth/login"}>Go to home</a>
    </div>
  );
}

export default style(NotFound);
