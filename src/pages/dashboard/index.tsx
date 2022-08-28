import { Col, Row } from "antd";
import BarChart from "component/barChart";
import Calender from "component/calender";
import CountCard from "component/countCard";
import Icon from "component/icon";
import Modal from "component/modal";
import TimeTracker from "component/timeTracker";
import useDashboard from "hooks/dashboard.hook";
import React, { useEffect, useState } from "react";
import { timeDiffrenced } from "utils/timeDifference";
import style from "./style";

type Props = {
  classes: any;
};

function Dashboard({ classes }: Props) {
  const [value, setValue] = useState(null);
  const [barChart, setBarChart] = useState(null);
  const [trackList, setTrackList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [filterTrackList, setFilterTrackList] = useState(null);
  const { getBarChart } = useDashboard();

  useEffect(() => {
    getBarChart().then((res) => {
      setBarChart(res);
    });
  }, []);

  const Total = () => {
    const TrackTimes = trackList.map((item, i) => {
      return timeDiffrenced(item?.startDate, item?.endDate);
    });
    let h = TrackTimes.reduce((n, { h }) => n + h, 0);
    let m = TrackTimes.reduce((n, { m }) => n + m, 0);
    let s = TrackTimes.reduce((n, { s }) => n + s, 0);

    var hour = Math.floor(s / 3600);
    var min = Math.floor(s % 3600 / 60);
    var sec = Math.floor(s % 3600 % 60);
    return { sec, min, hour };
  };

  const handleDeleteTime = (id) => {
    setVisible(true);
    const TimeId = trackList[id]?.id;
    var lists = trackList.filter((x) => {
      return x.id != TimeId;
    });
    setFilterTrackList(lists);
  };
  const handleRemove = () => {
    setTrackList(filterTrackList);
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
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
                description={
                  <div className={classes.totalTime}>
                    <div>
                      {Total()?.min >= 60 ? Total()?.hour : "0" + Total()?.hour}
                    </div>
                    &nbsp;:&nbsp;
                    <div>
                      {Total()?.sec >= 60 ? Total()?.min : "0" + Total()?.min}
                    </div>
                    &nbsp;:&nbsp;
                    <div>
                      {Total()?.sec >= 10 ? Total()?.sec : "0" + Total()?.sec}
                    </div>
                  </div>
                }
                title="ساعت کاری"
              />
            </div>
          </div>
          <div className={classes.tracksList}>
            <div className={classes.titleCard}>
              <Icon name="Notification" />
              <h5>ساعت های ثبت شده</h5>
            </div>
            <div className={classes.trackItems}>
              {trackList.length == 0 ? (
                <div className={classes.emptyState}>
                  هیچ تایم کاری ثبت نشده است
                </div>
              ) : (
                trackList?.map((item, i) => (
                  <div className={classes.trackItem} key={i}>
                    <div className={classes.time}>
                      <div>{item?.m >= 60 ? item?.timeDiff?.m : "0" + item?.timeDiff?.h}</div>
                      &nbsp;:&nbsp;
                      <div>{item?.timeDiff?.s >= 60 ? item?.timeDiff?.s : "0" + item?.timeDiff?.m}</div>
                      &nbsp;:&nbsp;
                      <div>{item?.timeDiff?.s >= 10 ? item?.timeDiff?.s : "0" + item?.timeDiff?.s}</div>
                    </div>
                    <div className={classes.actions}>
                      <i>$</i>
                      <Icon name="Edit" />
                      <Icon onClick={() => handleDeleteTime(i)} name="Delete" />
                    </div>
                  </div>
                ))
              )}
            </div>
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
      <Modal
        title="حذف تایم کاری"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
        width={600}
      >
        <div className={classes.removeBody}>
          <p>آیا مطمئن هستید که می خواهید این تایم کاری را حذف کنید </p>
          <div className={classes.removeActions}>
            <button onClick={handleCancel} className={classes.cancelButton}>
              انصراف
            </button>
            <button onClick={handleRemove} className={classes.removeButton}>
              حذف
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default style(Dashboard);
