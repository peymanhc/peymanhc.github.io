import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppConfig } from "store/app/app.reducer";
import { StateNetwork } from "store/index.reducer";
import style from "./style";
import ReactApexChart from "react-apexcharts";
import { timeDiffrenced } from "utils/timeDifference";
import dayjs from "dayjs";
const LineChart = ({ data, timeRange, classes }: any) => {
  const options = {
    chart: {
      type: "bar",
      height: 200,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "فروردین",
        "اردیبهشت",
        "خرداد",
        "تیر",
        "مرداد",
        "شهریور",
        "دی",
        "بهمن",
        "اسفند",
      ],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    colors: [
      function ({ value, seriesIndex, w }) {
        console.log(seriesIndex, value);
        if (seriesIndex == 0) {
          return "#b6ddb6";
        } else if (seriesIndex == 1) {
          return "#FEB019";
        } else {
          return "#FF4560";
        }
      },
    ],
  };
  return (
    <div className={classes.root}>
      <ReactApexChart options={options} series={data} type="bar" height={250} />
    </div>
  );
};

export default style(LineChart);
