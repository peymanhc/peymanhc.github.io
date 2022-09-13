import React, { useState } from "react";
import Table from "component/table";
import style from "./style";
import { locale } from "config/string";
import Icon from "component/icon";
import dayjs from "dayjs";

interface Props {
  classes: any;
}
function Hourly({ classes }: Props) {
  const keys = [
    {
      id: 1,
      data: "startTime",
      render(value: string, record: any) {
        return (
          <div className={classes.date} >
            {dayjs(value).calendar("jalali").format("YYYY/MM/DD , HH:mm:ss")}
          </div>
        )}
    },
    {
      id: 2,
      data: "endTime",
      render(value: string, record: any) {
        return (
          <div className={classes.date}> 
           {dayjs(value).calendar("jalali").format("YYYY/MM/DD , HH:mm:ss")}
          </div>
        )}
    },
    {
      id: 3,
      data: "userId",
    },
    {
      id: 4,
      data: "approvedBy",
    },
    {
      id: 5,
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
      id: 1,
      title: "زمان شروع",
    },
    {
      id: 2,
      title: "زمان پایان",
    },
    {
      id: 3,
      title: "کد کاربر",
    },
    {
      id: 4,
      title: "تایید شده توسط",
    },
    {
      id: 5,
      title: "وضعیت",
    },
  ];
  const data = [
    {
      id: 0,
      userId: "1Afs587q",
      endTime: "2022-09-03 , 16:18:00",
      startTime: "2022-09-03 , 14:20:00",
      approved: 1,
      approvedBy: "محمد مهدی منیری",
    },
  ];
  return (
    <div className={classes.root}>
      <Table
        columns={columns}
        dataItems={keys}
        data={data}
        description={["جدول مرخصی های ساعتی"]}
        columnsCountMobile={2}
        columnsCount={7}
      />
    </div>
  );
}

export default style(Hourly);
