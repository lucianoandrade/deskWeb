import instance from './instance';

export class DashboardService {
  async get(userId) {
    const dashboard = await instance.get(`/nodes/overview`);
    return dashboard.data;
  }
  async getSpecificDashboard(nodeId) {
    const dashboardSpecific = await instance.get(`/nodes/${nodeId}/overview`);
    return dashboardSpecific.data;
  } 
}
