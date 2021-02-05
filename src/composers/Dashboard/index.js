import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { DashboardService } from '../../services/api/dashboard.service';
import DashboardComponent from '../../components/Dashboard';

const DashboardComposer = () => {
  
  const [dashboard, setDashboard] = useState([]);
  const stateToProps = useSelector(({ authReducer }) => ({authReducer}));

  const get = async () => {
    const dashboardService = new DashboardService();
    const dashboardApi = await dashboardService.get(stateToProps.authReducer.user.id);
    if (dashboardApi) {
      setDashboard(dashboardApi);
    }
  };

  return (
    <DashboardComponent get={get} dashboard={dashboard}/>
  );
};
export default DashboardComposer;