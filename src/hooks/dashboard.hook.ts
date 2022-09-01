// Hooks

import DashboardService from "services/dashboard";

function useDashboard() {
  function getBarChart() {
    return DashboardService.getbarChart();
  }
  function getLineChart() {
    return DashboardService.getLineChart();
  }
  return {
    getBarChart,
    getLineChart
  };
}

export default useDashboard;
