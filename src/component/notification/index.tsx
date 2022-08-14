/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import { notification } from 'antd';
import './style.css';

const Notification = (
  model: 'error' | 'warning' | 'success',
  message?: string,
) => {
  notification.config({
    duration: 2,
    rtl: true,
    placement: 'bottomRight',
  });

  const successMessage = message && model === 'success' ? message : 'عملیات با موفقیت انجام شد';
  const errorMessage = message && model === 'error'
    ? message
    : 'خطایی رخ داده است دوباره تلاش کنید';
  const warningMessage = message && model === 'warning' ? message : 'این پیام اخطار است';

  const openNotification = (type = model) => {
    {
      model === 'success'
        && notification.open({
          className: 'notificationContainer',
          message: successMessage,
          style: {
            backgroundColor: '#03ad8c',
            display: 'flex',
            borderRadius: '50px',
            marginRight: '2rem',
            paddingRight: '2rem',
            width: 'fit-content',
          },
          bottom: 16,
        });
    }
    {
      model === 'error'
        && notification.open({
          message: errorMessage,
          style: {
            backgroundColor: '#e01028',
            color: 'white',
            display: 'flex',
            borderRadius: '50px',
            marginRight: '2rem',
            paddingRight: '2rem',
            width: 'fit-content',
          },
        });
    }
    {
      type === 'warning'
        && notification.open({
          message: warningMessage,
          style: {
            backgroundColor: '#ff9d26',
            color: 'white',
            display: 'flex',
            borderRadius: '50px',
            marginRight: '2rem',
            paddingRight: '2rem',
            width: 'fit-content',
          },
        });
    }
  };
  openNotification();
  return <div />;
};

export default Notification;
