import style from "./style";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "react-jss";
import { locale } from "config/string";
const LineChart = ({ data, timeRange, height, classes }: any) => {
  const theme = useTheme()
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
        locale.farvardin,
        locale.ordibehesht,
        locale.khordad,
        locale.tir,
        locale.mordad,
        locale.shahrivar,
        locale.mehr,
        locale.aban,
        locale.azar,
        locale.dai,
        locale.bahman,
        locale.esfand,
      ],
    },
    colors: [
      function ({ value, seriesIndex, w }) {
        if (seriesIndex == 0) {
          return theme.palette.first[25];
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
      <ReactApexChart
        options={options}
        series={data}
        type="bar"
        height={height ? height : 250}
      />
    </div>
  );
};

export default style(LineChart);
