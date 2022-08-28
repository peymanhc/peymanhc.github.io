import React, { useEffect, useState } from "react";
import Display from "./Display";
import Btn from "./btn";
import style from "./style";
import { timeDiffrenced } from "utils/timeDifference";

function TimeTracker({ classes, setTrackList, trackList }: any) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [time, setTime] = useState({
    id: 0,
    startDate: 0,
    endDate: 0,
  });

  const [status, setStatus] = useState(0);
  const [Id, setId] = useState(0);
  const start = () => {
    setId(Id + 1);
    setStatus(1);
    const date = new Date();
    setStartDate(date);
    setEndDate(date);
    setTime({
      ...time,
      id: Id,
      timeDiff: timeDiffrenced(new Date(), new Date()),
      startDate: date,
    });
  };
  const run = () => {
    return setTime({
      ...time,
      id: Id,
      timeDiff: timeDiffrenced(startDate, new Date()),
      startDate: startDate,
      endDate: endDate,
    });
  };
  const stop = () => {
    setStatus(0);
    setEndDate(new Date());
    let timeItem = {
      ...time,
      id: Id,
      timeDiff: timeDiffrenced(startDate, new Date()),
      endDate: new Date(),
    };
    setTime(timeItem);

    setTrackList([...trackList, timeItem]?.reverse());
  };
  useEffect(() => {
    if (status == 1) {
      const id = setInterval(() => {
        run();
      }, 1000);
      return () => clearInterval(id);
    }else{
      return setTime({
        ...time,
        timeDiff: timeDiffrenced(new Date(), new Date()),
      });
    }
  }, [status]);
  return (
    <div className={classes.mainTracker}>
      <Display status={status} time={time} />
      <Btn status={status} stop={stop} start={start} />
    </div>
  );
}
export default style(TimeTracker);
