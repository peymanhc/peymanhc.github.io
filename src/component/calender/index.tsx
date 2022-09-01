import React, {  useState } from "react";
import { Typography } from "antd";
import { Calendar as CalendarJalali } from "antd-jalali";
import dayjs from "dayjs";
import { getBeautifulMonth } from "utils/persian-month";
import updateLocale from "dayjs/plugin/updateLocale";
import * as shamsi from "shamsi-date-converter";
import style from "./style";
import Icon from "component/icon";
import Holidays from "date-holidays";
import { getDate } from "helpers/date";

dayjs.extend(updateLocale);

const locales = {
  lang: {
    locale: "en",
    dayFormat: dayjs.updateLocale("fa", {
      weekdaysMin: [
        "یک شنبه",
        "دو شنبه",
        "سه شنبه",
        "چهار شنبه",
        "پنج شنبه",
        "جمعه",
        "شنبه",
      ],
    }),
  },
};

const Calender = (props: any) => {
  const { classes } = props;
  var hd = new Holidays("IR");
  const today = new Date();
  const date = dayjs(today).calendar("jalali");
  const [currentDate, setCurrentDate] = useState<any>(date);
  const [_year, _month] = dayjs(today)
    .calendar("jalali")
    .format("YYYY-MM-DD")
    .split("-");
  const [changeMonth, setChangeMonth] = useState(_month);

  // const dateCellRender = (value: any) => {
  //   console.log(value);
  // };

  const handleRange = () => {
    const firstDayYear = {
      year: +_year,
      month: 1,
      day: 1,
    };
    const lastDayYear = {
      year: +_year,
      month: 12,
      day: 30,
    };
    const firstDate: number[] = shamsi.jalaliToGregorian(
      firstDayYear.year,
      firstDayYear.month,
      firstDayYear.day
    );
    const isoFirstDay = dayjs(
      `${firstDate[0]}-${firstDate[1]}-${firstDate[2]}`
    ).calendar("jalali");
    const endDate: number[] = shamsi.jalaliToGregorian(
      lastDayYear.year,
      lastDayYear.month,
      lastDayYear.day
    );
    const isoLastDay = dayjs(
      `${endDate[0]}-${endDate[1]}-${endDate[2]}`
    ).calendar("jalali");
    return [isoFirstDay, isoLastDay];
  };

  const headerRender = ({ value }: any) => {
    const month = dayjs(value).calendar("jalali").format("MM");
    const year = value.year();
    setChangeMonth(month);
    const handleChangeMonth = (m: any) => {
      let nowDay = value.date();
      if (m > 5 && m !== 11 && nowDay > 30) {
        nowDay = 30;
      } else if (m === 11 && nowDay > 29) {
        nowDay = 29;
      }
      const startDay = dayjs()
        .calendar("jalali")
        .year(value.year())
        .month(1)
        .day(nowDay);
      const newValue = startDay.year(value.year()).month(m);
      setCurrentDate(newValue);
    };
    const generateArrowRight = () => {
      if (+month === 1) {
        return (
          <div className={classes.arrowMonth}>
            <Icon name="Arrow-Right" style={{ color: "#cccc" }} />
          </div>
        );
      }
      return (
        <div
          className={classes.arrowMonth}
          onClick={() => handleChangeMonth(value.month() - 1)}
        >
          <Icon name="Arrow-Right" />
        </div>
      );
    };
    const generateArrowLeft = () => {
      if (+month === 12) {
        return (
          <div className={classes.arrowMonth}>
            <Icon name="Arrow-Left" style={{ color: "#cccc" }} />
          </div>
        );
      }
      return (
        <div
          className={classes.arrowMonth}
          onClick={() => {
            handleChangeMonth(value.month() + 1);
          }}
        >
          <Icon name="Arrow-Left" />
        </div>
      );
    };

    return (
      <div className={classes.root}>
        {generateArrowRight()}
        <div className={classes.titleYearMonth}>
          <Typography variant="title" level={3}>
            {getBeautifulMonth(month)}
          </Typography>
          <Typography variant="text">{year}</Typography>
        </div>
        {generateArrowLeft()}
      </div>
    );
  };
  const disabledDate = (current: any) => {
    const holidays = hd.getHolidays(current["$y"]);
    const item = holidays.find((item: any) => {
      return (
        dayjs(item.date).calendar("jalali").format("YYYY-MM-DD") ===
        dayjs(current).calendar("jalali").format("YYYY-MM-DD")
      );
    });
    if (item || dayjs(current).day() === 5) {
      return true;
    }
    return false;
  };
  const handleChange = (value: any) => {
    setCurrentDate(value);
    props.onChange(value);
    console.log(value)
  }
  return (
    <div className={classes.calendarWrapper}>
      <CalendarJalali
        fullscreen={false}
        headerRender={headerRender}
        // monthFullCellRender={dateCellRender}
        className={classes.calendar}
        value={currentDate}
        locale={locales}
        disabledDate={(current: any) => disabledDate(current)}
        onChange={(current: number) => handleChange(current)}
        validRange={handleRange()}
      />
    </div>
  );
};

export default style(Calender);
