import { Col, Row, Tooltip } from "antd";
import BarChart from "component/barChart";
import Calender from "component/calender";
import CountCard from "component/countCard";
import Icon from "component/icon";
import LineChart from "component/lineChart";
import Modal from "component/modal";
import TimeTracker from "component/timeTracker";
import { locale } from "config/string";
import useDashboard from "hooks/dashboard.hook";
import React, { useEffect, useState } from "react";
import {useTheme} from 'react-jss'

import { timeDiffrenced } from "utils/timeDifference";
import style from "./style";

type Props = {
  classes: any;
};

function Dashboard({ classes }: Props) {
  const [datepicker, setDatepicker] = useState(new Date().setHours(0, 0, 0, 0));
  const [barChart, setBarChart] = useState(null);
  const [lineChart, setLineChart] = useState([]);
  const [trackList, setTrackList] = useState([]);
  const [visible, setVisible] = useState(false);
  const theme = useTheme()
  const [filterTrackList, setFilterTrackList] = useState(null);
  const { getBarChart,getLineChart } = useDashboard();
  useEffect(() => {
    getBarChart().then((res) => {
      const transformedData = res.map((item) => {
        let startedDate = new Date(item.dateRange[0]);
        let endDate = new Date(item.dateRange[1]);
        return {
          x: locale.details,
          y: [
            startedDate.setHours(startedDate.getHours() + 4, 30),
            endDate.setHours(endDate.getHours() + 4, 30),
          ],
          fillColor:
            item.status == 0
              ? "#FF4560"
              : item.status == 1
              ? theme.palette.first[25]
              : "#FEB019",
        };
      });
      setBarChart({
        name: locale.attendanceChart,
        data: transformedData,
      });
    });
    getLineChart().then((res)=>{
      setLineChart(res)
    })
  }, []);
  const Total = () => {
    const TrackTimes = trackList.map((item, i) => {
      return timeDiffrenced(item?.startDate, item?.endDate);
    });
    let h = TrackTimes.reduce((n, { h }) => n + h, 0);
    let m = TrackTimes.reduce((n, { m }) => n + m, 0);
    let s = TrackTimes.reduce((n, { s }) => n + s, 0);

    var hour = Math.floor(s / 3600);
    var min = Math.floor((s % 3600) / 60);
    var sec = Math.floor((s % 3600) % 60);
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
  const handleEditTime = (item) => {
    console.log(item);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <div className={classes.root}>
      <Col lg={16} xs={24} className={classes.wrapper}>
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
                title={locale.hoursOfWork}
              />
            </div>
          </div>
          <div className={classes.tracksList}>
            <div className={classes.titleCard}>
              <Icon name="Notification" />
              <h5>{locale.recordedHours}</h5>
            </div>
            <div className={classes.trackItems}>
              {trackList.length == 0 ? (
                <div className={classes.emptyState}>
                 {locale.noWorkingTimeHasBeenRecorded}
                </div>
              ) : (
                trackList?.map((item, i) => (
                  <div className={classes.trackItem} key={i}>
                    <div className={classes.time}>
                      <div>
                        {item?.m >= 60
                          ? item?.timeDiff?.m
                          : "0" + item?.timeDiff?.h}
                      </div>
                      &nbsp;:&nbsp;
                      <div>
                        {item?.timeDiff?.s >= 60
                          ? item?.timeDiff?.s
                          : "0" + item?.timeDiff?.m}
                      </div>
                      &nbsp;:&nbsp;
                      <div>
                        {item?.timeDiff?.s >= 10
                          ? item?.timeDiff?.s
                          : "0" + item?.timeDiff?.s}
                      </div>
                    </div>
                    <div className={classes.actions}>
                      <Tooltip title={`${locale.cost}:  ${12000} ${locale.currency}`}>
                        <i>$</i>
                      </Tooltip>
                      <Tooltip title={locale.editWorkingHours}>
                        <Icon
                          onClick={() => handleEditTime(item)}
                          name="Edit"
                        />
                      </Tooltip>
                      <Tooltip title={locale.removeWorkingHours}>
                        <Icon
                          onClick={() => handleDeleteTime(i)}
                          name="Delete"
                        />
                      </Tooltip>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        <div className={classes.chart}>
          <h5 className={classes.bartitle}>{locale.attendanceChart}</h5>
          <BarChart timeRange={datepicker} data={barChart ? [barChart] : []} />
          <LineChart data={lineChart} />
        </div>
      </Col>
      <Col lg={8} xs={24} className={classes.wrapper}>
        <div className={classes.card}>
          <CountCard
            icon={"Notification"}
            description={`45000 ${locale.currency}`}
            title={locale.receivedThisMonth}
          />
        </div>
        <div className={classes.card}>
          <CountCard icon={"Packages"} description={"198"} title={locale.hoursOfWork} />
        </div>
        <div className={classes.calender}>
          <Calender onChange={setDatepicker} />
        </div>
      </Col>
      <Modal
        title={locale.removeWorkingHours}
        visible={visible}
        onCancel={handleCancel}
        footer={null}
        width={600}
      >
        <div className={classes.removeBody}>
         <p>{locale.are_you_sure_you_want_to_delete_this_timer}</p>
          <div className={classes.removeActions}>
            <button onClick={handleCancel} className={classes.cancelButton}>
              {locale.cancel}
            </button>
            <button onClick={handleRemove} className={classes.removeButton}>
              {locale.delete}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default style(Dashboard);
