import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { UsersService } from '../../services/api/users.service';
import { ServiceOrdersService } from '../../services/api/serviceOrders.service';

import {
  getNodeBoardById,
  clearBoard,
} from '../../state/ducks/board/actions';

import StaffBoardComponent from '../../components/StaffBoard';
import { NodesService } from '../../services/api/nodes.service';
import { DashboardService } from '../../services/api/dashboard.service';

const StaffBoardComposer = ({
  nodeId,
}) => {
  async function beginTreatment (userId, serviceOrderId){
    const nodesService = new NodesService();
    const result = await nodesService.startTreatment(userId, serviceOrderId)
    return result
  }

  async function stopTreatment(userId, serviceOrderId){
    const nodesService = new NodesService();
    const result = await nodesService.stopTreatment(userId, serviceOrderId)
    return result
  }
  const dispatch = useDispatch();

  const stateToProps = useSelector(
    ({ authReducer, boardReducer }) => ({
      authReducer,
      boardReducer,
    }),
  );

  const dispatchToProps = {
    getNodeBoard: useCallback(() => dispatch(
      getNodeBoardById(nodeId)
    ), [dispatch, nodeId]),
    clearBoard: useCallback(() => dispatch(
      clearBoard()
    ), [dispatch])
  };

  useEffect(() => {
    return () => {
      dispatchToProps.clearBoard();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getServiceOrdersByUserId(userId) {
    const userService = new UsersService();
    const serviceOrders = await userService.getServiceOrderByUserId(userId);
    return serviceOrders && serviceOrders.data;
  };

  async function getServiceOrderById(serviceOrderId) {
    const serviceOrdersService = new ServiceOrdersService();
    const serviceOrder = await serviceOrdersService.getById(serviceOrderId);
    return serviceOrder.data;
  }

  async function getServiceOrdersUnassigned() {
    const nodesService = new NodesService();
    const serviceOrder = await nodesService.getServiceOrdersUnassigned(nodeId);
    return serviceOrder.data;
  }

  async function getServiceOrdersAssigned() {
    const nodesService = new NodesService();
    const serviceOrder = await nodesService.getServiceOrdersAssigned(nodeId);
    return serviceOrder.data;
  }

  async function getDashboardCard(nodeId) {
    const dashboardService = new DashboardService();
    const dashboardApi = await dashboardService.getSpecificDashboard(nodeId);
    return dashboardApi;
  };

  async function confirmPrecification(data){
    const nodesService = new NodesService();
    const result = await nodesService.confirmPrecification(data)
    return result
  }
  
  async function checkIfIsInAttendant(userId){
    const nodesService = new NodesService();
    const result = await nodesService.getTreatmentStarted(userId)
    return result
  }

  async function levelOs(){
    const nodesService = new NodesService();
    const result = await nodesService.levelOs()
    return result
  }

  async function typeOs(){
    const nodesService = new NodesService();
    const result = await nodesService.typeOS()
    return result
  }

  async function orderHourPrice(customerId){
    const nodesService = new NodesService();
    const result = await nodesService.orderHourPrice(customerId)
    return result
  }

  async function confirmPrecification(data){
    const nodesService = new NodesService();
    const result = await nodesService.confirmPrecification(data)
    return result
  }

  return (
    <StaffBoardComponent
      {...stateToProps}
      {...dispatchToProps}
      beginTreatment={beginTreatment}
      stopTreatment={stopTreatment}
      getServiceOrdersByUserId={getServiceOrdersByUserId}
      getServiceOrderById={getServiceOrderById}
      getServiceOrdersUnassigned={getServiceOrdersUnassigned}
      getServiceOrdersAssigned={getServiceOrdersAssigned}
      getDashboardCard={getDashboardCard}
      confirmPrecification={confirmPrecification}
      checkIfIsInAttendant={checkIfIsInAttendant}
      levelOs={levelOs}
      typeOs={typeOs}
      orderHourPrice={orderHourPrice}
      confirmPrecification={confirmPrecification}
    />
  );
};

export default StaffBoardComposer;
