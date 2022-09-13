// Hooks

import DashboardService from "services/support";

function useSupport() {
  function getMessage() {
    return DashboardService.getMessage()
  }
  function getChatList() {
    return DashboardService.getChatItems()
  }
  return {
    getMessage,
    getChatList
  };
}

export default useSupport;
