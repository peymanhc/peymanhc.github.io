import Calender from "component/calender";
import CountCard from "component/countCard";
import React from "react";
import style from "./style";

type Props = {
  classes: any;
};

function DahsBoard({ classes }: Props) {
  return (
    <div className={classes.root}>
      <div className={classes.wrapper} >
      <div className={classes.card}>
        <CountCard
          icon={"Notification"}
          description={"45000 ریال"}
          title="دریافتی این ماه"
        />
      </div>
      <div className={classes.card}>
        <CountCard icon={"Packages"} description={"198"} title="ساعت کاری" />
      </div>
      <div className={classes.calender} ><Calender /></div>
      </div>
    </div>
  );
}

export default style(DahsBoard);
