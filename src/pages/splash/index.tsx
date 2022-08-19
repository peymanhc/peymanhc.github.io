import React from "react";
import style from "./style";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

type Props = {
  classes: any;
};

function Splash({ classes }: Props) {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <div className={classes.root}>
      <Spin indicator={antIcon} />
    </div>
  );
}

export default style(Splash);
