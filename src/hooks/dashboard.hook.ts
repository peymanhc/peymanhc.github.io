// Hooks

import DashboardService from "services/dashboard";

function useDashboard() {
  function getDataCalendar(data: any) {
    return DashboardService.getCalendar(data);
  }
  return {
    getDataCalendar,
  };
}

export default useDashboard;
