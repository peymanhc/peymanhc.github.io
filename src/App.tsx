import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import Drawer from "component/drawer";
import { Layout } from "antd";
import styles from "./styles";
import AppBar from "component/appBar";
import Routes from "provider/routes";
import { Pages } from "provider/pages";
import { useState } from "react";

const App = (props: any) => {
  const { classes } = props;
  const [haslayout, setHaslayout] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <main className={classes.app}>
        {haslayout && <AppBar />}
        <Layout
          style={{
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          {haslayout && <Drawer />}
          <div className={classes.wrapper}>
            <Routes setLocation={setHaslayout} pages={Pages} />
          </div>
        </Layout>
      </main>
    </BrowserRouter>
  );
};

export default styles(App);
