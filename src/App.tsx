import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import Drawer from "component/drawer";
import { Layout } from "antd";
import styles from "./styles";
import AppBar from "component/appBar";
import Routes from "provider/routes";
import { Pages } from "provider/pages";
import { useState, useEffect } from "react";
import { read } from "storage";
import useApp from "hooks/app.hooks";
import { useSelector } from "react-redux";
import { StateNetwork } from "store/index.reducer";
import { AppConfig } from "store/app/app.reducer";
import BottomNavigationBar from "component/bottomNavigationBar";
const App = (props: any) => {
  const { classes } = props;
  const [haslayout, setHaslayout] = useState<boolean>(false);
  const [width, setwidth] = useState(
    typeof window !== "undefined" && window.innerWidth
  );

  const { isMobileView } = useApp();

  useEffect(() => {
    function handleResize() {
      setwidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (width < 992) {
      isMobileView(true);
    } else {
      isMobileView(false);
    }
  }, [width]);
  const { isMobile } = useSelector<StateNetwork, AppConfig>(
    (state) => state.appConfig
  );
  return (
    <BrowserRouter>
      <main className={classes.app}>
        {haslayout && (isMobile ? <BottomNavigationBar /> : <AppBar />)}
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
