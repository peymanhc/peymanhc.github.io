export const timeDifference = (previous: any) => {
  const current: any = new Date();
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;
  if (elapsed < 0) {
    if (elapsed < msPerHour) {
      return Math.round((elapsed / msPerMinute) * -1) + ' دقیقه دیگر';
    } else if (elapsed < msPerDay) {
      return Math.round((elapsed / msPerHour) * -1) + ' ساعت دیگر';
    } else if (elapsed < msPerMonth) {
      return 'تقریبا ' + Math.round((elapsed / msPerDay) * -1) + ' روز دیگر';
    } else if (elapsed < msPerYear) {
      return 'تقریبا ' + Math.round((elapsed / msPerMonth) * -1) + ' ماه دیگر';
    }
  } else {
    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + ' ثانیه پیش';
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + ' دقیقه پیش';
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + ' ساعت پیش';
    } else if (elapsed < msPerMonth) {
      return 'تقریبا ' + Math.round(elapsed / msPerDay) + ' روز پیش';
    } else if (elapsed < msPerYear) {
      return 'تقریبا ' + Math.round(elapsed / msPerMonth) + ' ماه پیش';
    } else {
      return 'تقریبا ' + Math.round(elapsed / msPerYear) + ' سال پیش';
    }
  }
};
