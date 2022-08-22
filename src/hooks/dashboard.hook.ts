// Hooks

import DashboardService from "services/dashboard";

function useDashboard() {
  function getBarChart() {
    return DashboardService.getbarChart();
  }
  return {
    getBarChart,
  };
}

export default useDashboard;
