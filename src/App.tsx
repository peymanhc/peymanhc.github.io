import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import Drawer from 'component/drawer';
import { Layout } from 'antd';
import styles from './styles';
import AppBar from 'component/appBar';
import Routes from 'provider/routes';
import { Pages } from 'provider/pages';


const App = (props: any) => {
  const { classes } = props;
  return (
    <BrowserRouter>
      <main className={classes.app}>
      <AppBar />
        <Layout
          style={{
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}
        >
           <Drawer />
          <div className={classes.wrapper}>
           <Routes pages={Pages}/>
          </div>
        </Layout>
      </main>
    </BrowserRouter>
  );
};

export default styles(App);
