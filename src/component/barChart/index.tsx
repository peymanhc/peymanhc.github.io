import { ResponsiveBar } from "@nivo/bar";
import { useSelector } from "react-redux";
import { AppConfig } from "store/app/app.reducer";
import { StateNetwork } from "store/index.reducer";
import style from "./style";

const BarChart = ({ data, indexBy, keys }: any) => {
  const colors = ["#b6f4ec", "green", "#ffc9c9"];
  const { isMobile } = useSelector<StateNetwork, AppConfig>(
    (state) => state.appConfig
  );
  return (
    <ResponsiveBar
      data={data}
      enableLabel={false}
      layout={isMobile ? "vertical" : "horizontal"}
      keys={keys}
      groupMode={"stacked"}
      colors={colors}
      indexBy={`${indexBy}`}
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      axisBottom={{
        tickSize: 2,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 2,
        tickPadding: 50,
        tickRotation: 0,
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

export default style(BarChart);
