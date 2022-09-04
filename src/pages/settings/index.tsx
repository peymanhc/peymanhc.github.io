import Icon from "component/icon";
import SquareCard from "component/squareCard";
import useApp from "hooks/app.hooks";
import React from "react";
import { useSelector } from "react-redux";
import { AppConfig } from "store/app/app.reducer";
import { StateNetwork } from "store/index.reducer";
import style from "./style";

type Props = {
  classes: any;
};

function Settings({ classes }: Props) {
  const { changeTheme } = useApp();
  const handleChangeTheme = (color) => {
    changeTheme(color);
  };
  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <SquareCard
          title={
            <div className={classes.colors}>
              <span onClick={() => handleChangeTheme("green")} />
              <span onClick={() => handleChangeTheme("blue")} />
              <span onClick={() => handleChangeTheme("pink")} />
            </div>
          }
          description={"تغییر تم کاربری"}
          icon={<Icon className={classes.cardIcon} name="Managment_Setting" />}
        />
      </div>
    </div>
  );
}

export default style(Settings);
