import React, { useState } from "react";
import { Tabs } from "antd";
import style from "./style";
import { locale } from "config/string";
import Table from "component/table";
import Daily from "./containers/daily";
import Hourly from "./containers/hourly";

const { TabPane } = Tabs;

interface Props {
  classes: any;
}
function Contact({ classes }: Props) {
  const [tabKey, setTabKey] = useState<string>("Ticket");
  const generateComponent = () => {
    switch (tabKey) {
      case "daily":
        return <Daily />;
      case "hourly":
        return <Hourly />;
      default:
        return false;
    }
  };
  return (
    <div className={classes.root}>
      <Tabs
        defaultActiveKey="Ticket"
        className={classes.tabs}
        onTabClick={(activeKey) => setTabKey(activeKey)}
      >
        <TabPane tab={locale.daily} key="daily" />
        <TabPane tab={locale.hourly} key="hourly" />
      </Tabs>
      <div>{generateComponent()}</div>
    </div>
  );
}

export default style(Contact);
