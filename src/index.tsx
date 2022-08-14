import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import appStore from 'store';
// eslint-disable-next-line camelcase
import fa_IR from 'antd/lib/locale-provider/fa_IR';
// import en_US from 'antd/lib/locale-provider/en_US';
import 'antd/dist/antd.css';
import dayjs from 'dayjs';
import jalaliday from 'jalaliday';

import { Theme } from './provider/theme';
import App from './App';

dayjs.extend(jalaliday);

ReactDOM.render(
  <Provider store={appStore}>
    <Theme theme="dark" >
      <ConfigProvider locale={fa_IR} direction="rtl">
        <App />
      </ConfigProvider>
    </Theme>
  </Provider>,
  document.getElementById('root'),
);
