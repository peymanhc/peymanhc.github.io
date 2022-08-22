import { get, post } from './api';

export default {
  getCalendar: (model: any) =>
    post({
      api: '/calendar/get-month',
      model,
    }),
};
