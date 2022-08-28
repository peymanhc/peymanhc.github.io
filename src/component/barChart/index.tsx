import { useState } from "react";
import { useSelector } from "react-redux";
import { AppConfig } from "store/app/app.reducer";
import { StateNetwork } from "store/index.reducer";
import style from "./style";
import ReactApexChart from "react-apexcharts";
import { timeDiffrenced } from "utils/timeDifference";
import dayjs from "dayjs";
const BarChart = ({ data, indexBy, keys, classes }: any) => {
  const colors = ["#b6f4ec", "green", "#ffc9c9"];
  const { isMobile } = useSelector<StateNetwork, AppConfig>(
    (state) => state.appConfig
  );
  const [state, setState] = useState({
    series: [
      {
        name: "نمودار حضور و غیاب",
        data: [
          {
            x: "غیبت",
            y: [
              new Date("2022-08-27 , 10:29:00").getTime(),
              new Date("2022-08-27 , 12:18:20").getTime(),
            ],
            fillColor: "#FF4560",
          },
          {
            x: "حضور",
            y: [
              new Date("2022-08-27 , 12:18:20").getTime(),
              new Date("2022-08-27 , 19:29:00").getTime(),
            ],
            fillColor: "#00E396",
          },
          {
            x: "مرخصی",
            y: [
              new Date("2022-08-27 , 08:00:00").getTime(),
              new Date("2022-08-27 , 10:30:00").getTime(),
            ],
            fillColor: "#FEB019",
          },
        ],
      },
    ],
    options: {
      chart: {
        height: 450,
        type: "rangeBar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "60%",
        },
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        type: "datetime",
        opposite: true,
      },
      stroke: {
        width: 1,
      },
      fill: {
        type: "solid",
        opacity: 0.6,
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
      },
      tooltip: {
        custom: function (opts) {
          const fromTime = new Date(opts.y1);
          const toTime = new Date(opts.y2);
          const time = timeDiffrenced(fromTime, toTime);
          const title = opts.ctx.data.twoDSeriesX[opts.dataPointIndex];
          return (
            "<div class='tooltip' >" +
            "<h4>" +
            title +
            "</h4>" +
            "<h5> <span>از:</span>" + dayjs(fromTime).calendar("jalali").format("HH:mm:ss") + "</h5>"+
            "<h5> <span>تا:</span>" + dayjs(toTime).calendar("jalali").format("HH:mm:ss") + "</h5>"+
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
    },
  });

  return (
    <div className={classes.root}>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="rangeBar"
        height={350}
      />
    </div>
  );
};

export default style(BarChart);
