import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppConfig } from "store/app/app.reducer";
import { StateNetwork } from "store/index.reducer";
import style from "./style";
import ReactApexChart from "react-apexcharts";
import { timeDiffrenced } from "utils/timeDifference";
import dayjs from "dayjs";
const BarChart = ({ data, timeRange, classes }: any) => {
  var day = 60 * 60 * 24 * 1000;
  let startDate = new Date(new Date(timeRange).setHours(3,30,0,0));
  let endDate = new Date(startDate?.getTime() + day).getTime();
  const options = {
    chart: {
      height: 120,
      type: "rangeBar",
      toolbar:{
        show:false
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "60%",
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.15,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [50, 0, 100, 100]
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function(val) {
        const fromTime = new Date(val[0]);
        const toTime = new Date(val[1]);
        const time = timeDiffrenced(fromTime, toTime);
        return `${time.h}:` + `${time.m}:` + time.s
      }
    },
    xaxis: {
      type: "datetime",
      min: Date.parse(startDate),
      max: endDate,
    },
    yaxis: {
      type: "datetime",
      opposite: true,
    },
    stroke: {
      width: 0
    },
    legend: {
      position: "top",
    },
    tooltip: {
      custom: function (opts) {
        const fromTime = new Date(opts.y1);
        const toTime = new Date(opts.y2);
        const startedDate = fromTime.setHours(fromTime.getHours() - 4);
        const lastDate = toTime.setHours(toTime.getHours() - 4);
        const time = timeDiffrenced(fromTime, toTime);
        const title = opts.ctx.data.twoDSeriesX[opts.dataPointIndex];
        return (
          "<div class='tooltip' >" +
          "<section>" +
          `<h4>${title}</h4>` +
          `<p>${dayjs(fromTime).calendar("jalali").format("YYYY-MM-DD")}</p>` +
          "</section>" +
          "<h5> <span>از:</span>" +
          dayjs(fromTime).calendar("jalali").format("HH:mm:ss") +
          "</h5>" +
          "<h5> <span>تا:</span>" +
          dayjs(toTime).calendar("jalali").format("HH:mm:ss") +
          "</h5>" +
          "<h5> <span>کل:</span>" +
          time.h +
          ":" +
          time.m +
          ":" +
          time.s +
          "</h5>" +
          "</div>"
        );
      },
    },
  };
  return (
    <div className={classes.root}>
      <ReactApexChart
        options={options}
        series={data}
        type="rangeBar"
        height={120}
      />
    </div>
  );
};

export default style(BarChart);
