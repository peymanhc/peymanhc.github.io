import React, { useState } from "react";
import { Tabs, Badge } from "antd";

import style from "./style";
import { locale } from "config/string";

const { TabPane } = Tabs;

interface Props {
  classes: any;
}
function Home({ classes }: Props) {
  const [tabKey, setTabKey] = useState<string>("Ticket");
  const generateComponent = () => {
    switch (tabKey) {
      case "Ticket":
        return <div></div>;
      default:
        return false;
    }
  };
  return (
    <div className={classes.root} >
      <Tabs
        defaultActiveKey="Ticket"
        className={classes.tabs}
        onTabClick={(activeKey) => setTabKey(activeKey)}
      >
        <TabPane tab={locale.appName} key="Ticket" />
        <TabPane tab={locale.appName} key="a" />
      </Tabs>
      <div>{generateComponent()}</div>
    </div>
  );
}

export default style(Home);
