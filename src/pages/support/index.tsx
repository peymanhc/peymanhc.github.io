import React, { useState } from "react";
import { Tabs} from "antd";
import style from "./style";
import { locale } from "config/string";

const { TabPane } = Tabs;

interface Props {
  classes: any;
}
function Support({ classes }: Props) {
  const [tabKey, setTabKey] = useState<string>("Ticket");
  const generateComponent = () => {
    switch (tabKey) {
      case "Ticket":
        return (
          <div style={{marginTop:20}} >
           
          </div>
        );
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
        <TabPane tab={locale.tickets} key="Ticket" />
      </Tabs>
      <div>{generateComponent()}</div>
    </div>
  );
}

export default style(Support);
