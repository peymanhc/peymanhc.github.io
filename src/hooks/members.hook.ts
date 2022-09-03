// Hooks
import MembersService from "services/members";

function useMembers() {
  function getMembers() {
    return MembersService.getMembers();
  }
  function getMemberChart() {
    return MembersService.getMemberChartInfo();
  }
  function getMemberInfo() {
    return MembersService.getMemberInfo();
  }
  return {
    getMembers,
    getMemberInfo,
    getMemberChart
  };
}

export default useMembers;
