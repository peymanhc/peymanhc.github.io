import { Col, Row } from "antd";
import BarChart from "component/barChart";
import Calender from "component/calender";
import CountCard from "component/countCard";
import TimeTracker from "component/timeTracker";
import useDashboard from "hooks/dashboard.hook";
import React, { useEffect, useState } from "react";
import style from "./style";

type Props = {
  classes: any;
};

function DahsBoard({ classes }: Props) {
  const [value, setValue] = useState(null);
  const [barChart, setBarChart] = useState(null);
  const [trackList, setTrackList] = useState([]);
  const { getBarChart } = useDashboard();

  useEffect(() => {
    getBarChart().then((res) => {
      setBarChart(res);
    });
  }, []);
  const Total = () => {
    const sec = trackList.reduce((n, { s }) => n + s, 0);
    const min = trackList.reduce((n, { m }) => n + m, 0);
    const hour = trackList.reduce((n, { h }) => n + h, 0);
    return { sec, min, hour };
  };
  return (
    <div className={classes.root}>
      <Col sm={16} xs={24} className={classes.wrapper}>
        <div className={classes.tracker}>
          <div className={classes.track}>
            <div className={classes.timeTracker}>
              <TimeTracker
                trackList={trackList}
                setTrackList={(val) => setTrackList(val)}
              />
            </div>
            <div className={classes.todayTrack}>
              <CountCard
                icon={"Packages"}
                description={"198"}
                title="ساعت کاری"
              />
            </div>
          </div>
          <div className={classes.tracksList}>
            Total
            <div className={classes.totalTime}>
              <div>
                {Total()?.min >= 60 ? Total()?.min : "0" + Total()?.hour}
              </div>
              &nbsp;:&nbsp;
              <div>
                {Total()?.sec >= 60 ? Total()?.sec : "0" + Total()?.min}
              </div>
              &nbsp;:&nbsp;
              <div>
                {Total()?.sec >= 10 ? Total()?.sec : "0" + Total()?.sec}
              </div>
            </div>
            {trackList.reverse().map((item, i) => (
              <div className={classes.trackItem} key={i}>
                <div>{item?.m >= 60 ? item?.m : "0" + item?.h}</div>
                &nbsp;:&nbsp;
                <div>{item?.s >= 60 ? item?.s : "0" + item?.m}</div>
                &nbsp;:&nbsp;
                <div>{item?.s >= 10 ? item?.s : "0" + item?.s}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.chart}>
          <h5 className={classes.bartitle}>نمودار حضور و غیاب</h5>
          <BarChart
            keys={["leave", "working", "absence"]}
            indexBy={"day"}
            data={barChart ? barChart : []}
          />
        </div>
      </Col>
      <Col sm={8} xs={24} className={classes.wrapper}>
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
        <div className={classes.calender}>
          <Calender onChange={setValue} />
        </div>
      </Col>
    </div>
  );
}

export default style(DahsBoard);
