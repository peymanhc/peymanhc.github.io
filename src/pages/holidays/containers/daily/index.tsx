import React, { useState } from "react";
import Table from "component/table";
import style from "./style";
import { locale } from "config/string";
import Icon from "component/icon";
import dayjs from "dayjs";

interface Props {
  classes: any;
}
function Daily({ classes }: Props) {
  const keys = [
    {
      id: 0,
      data: "type",
      render(value: string, record: any) {
        return (
          <div>{value == 0 ? "استعلاجی" : value == 1 ? "تشویقی" : "کصشر"}</div>
        );
      },
    },
    {
      id: 1,
      data: "duration",
    },
    {
      id: 2,
      data: "startTime",
      render(value: string, record: any) {
        return (
          <div  className={classes.date}>
            {dayjs(value).calendar("jalali").format("YYYY/MM/DD")}
          </div>
        )}
    },
    {
      id: 3,
      data: "wholeDay",
    },
    {
      id: 4,
      data: "userId",
    },
    {
      id: 5,
      data: "approvedBy",
    },
    {
      id: 6,
      data: "approved",
      render(value: string, record: any) {
        return (
          <Icon
            className={value == 1 ? classes.successIcon : classes.rejectedIcon}
            name={value == 1 ? "Confirmed" : "Rejected"}
          />
        );
      },
    },
  ];
  const columns = [
    {
      id: 0,
      title: "نوع",
    },
    {
      id: 1,
      title: "مدت زمان",
    },
    {
      id: 2,
      title: "زمان شروع",
    },
    {
      id: 3,
      title: "تعداد روز",
    },
    {
      id: 4,
      title: "کد کاربر",
    },
    {
      id: 5,
      title: "تایید شده توسط",
    },
    {
      id: 6,
      title: "وضعیت",
    },
  ];
  const data = [
    {
      id: 0,
      type: 0,
      userId: "1Afs587q",
      duration: "8 ساعت",
      startTime: "2022-09-03",
      wholeDay: "1",
      approved: 1,
      approvedBy: "پیمان هادوی",
    },
    {
      id: 1,
      type: 0,
      userId: "1Afs587q",
      duration: "7 ساعت",
      startTime: "2022-08-24",
      wholeDay: "1",
      approved: 0,
      approvedBy: "رضا احمدی",
    },
    {
      id: 2,
      type: 1,
      userId: "14s5487q",
      duration: "16 ساعت",
      startTime: "2022-01-24",
      wholeDay: "2",
      approved: 1,
      approvedBy: "رضا احمدی",
    },
    {
      id: 3,
      type: 2,
      userId: "1aFqes41",
      duration: "8 ساعت",
      startTime: "2022-07-20",
      wholeDay: "1",
      approved: 1,
      approvedBy: "پیمان هادوی",
    },
  ];
  return (
    <div className={classes.root}>
      <Table
        columns={columns}
        dataItems={keys}
        data={data}
        description={["جدول مرخصی های روزانه"]}
        columnsCountMobile={2}
        columnsCount={7}
      />
    </div>
  );
}

export default style(Daily);
