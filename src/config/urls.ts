/* eslint-disable import/no-anonymous-default-export */
import evn from './env';

const common = {
  neshanToekn: 'web.g2xE1B1jX1b5Mx1NrvuESX2e9zfaWgzZRSilz7S7',
};

const development = {
  endPointAdmin: 'https://api2.ippanel.com/api/v1',
};

const production = {
  endPointAdmin: 'https://api2.ippanel.com/api/v1',
};

export default {
  ...common,
  // @ts-ignore
  ...evn(
    () => production,
    () => development,
  ),
};
