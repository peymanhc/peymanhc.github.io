import React, { useState } from "react";
import { Tabs, Badge } from "antd";

import style from "./style";
import { locale } from "config/string";
import Table from "component/table";

const { TabPane } = Tabs;

interface Props {
  classes: any;
}
function Home({ classes }: Props) {
  const [tabKey, setTabKey] = useState<string>("Ticket");
  const generateComponent = () => {
    switch (tabKey) {
      case "Ticket":
        return (
          <div style={{marginTop:20}} >
            <Table
              columns={columns}
              dataItems={keys}
              data={data}
              description={["جدول محاسبات "]}
              columnsCountMobile={2}
              columnsCount={7}
            />
          </div>
        );
      default:
        return false;
    }
  };

  const keys = [
    {
      id: 0,
      data: "date",
    },
    {
      id: 1,
      data: "volume",
    },
    {
      id: 2,
      data: "price",
    },
    {
      id: 3,
      data: "val",
    },
    {
      id: 4,
      data: "as",
    },
  ];
  const columns = [
    {
      id: 0,
      title: "تاریخ",
    },
    {
      id: 1,
      title: "عنوان ۱",
    },
    {
      id: 2,
      title: "عنوان ۲",
    },
    {
      id: 3,
      title: "عنوان ۲۳",
    },
    {
      id: 4,
      title: "عنوان ۴",
    },
  ];
  const data = [
    {
      id: 1,
      date: "data 2",
      volume: "یک مقدار تستی",
      price: "item?.price",
      val: "price",
      as: "price",
    },
    {
      id: 2,
      date: "date",
      volume: "volume",
      price: "price",
      val: "price",
      as: "price",
    },
  ];
  return (
    <div className={classes.root}>
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
