import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NodesService } from '../../services/api/nodes.service';
import { ServiceOrdersService } from '../../services/api/serviceOrders.service';

import { 
  getUserBoardById,
  clearBoard,
  getServiceOrdersByNodeIdSuccess,
} from '../../state/ducks/board/actions';


import NodeBoardComponent from '../../components/NodeBoard';

const NodeBoardComposer = () => {
  const dispatch = useDispatch();

  const stateToProps = useSelector(
    ({ authReducer, boardReducer }) => ({
      authReducer,
      boardReducer,
    }),
  );
  
  const dispatchToProps = {
    getUserBoard: useCallback(() => dispatch(
      getUserBoardById(stateToProps.authReducer.user.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ), [dispatch]),
    clearBoard: useCallback(() => dispatch(
      clearBoard()
    ), [dispatch]),
  };

  useEffect(() => {
    return () => {
      dispatchToProps.clearBoard();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getServiceOrdersByNodeId (nodeId) {
    const nodesService = new NodesService();

    const serviceOrders = await nodesService.getServiceOrdersByNodeId(nodeId);
    return serviceOrders.data;
  };

  async function getServiceOrdersAll () {
    const nodesService = new NodesService();

    const serviceOrders = await nodesService.getServiceOrdersAll();
    return serviceOrders.data;
  };

  async function getServiceOrderById (serviceOrderId) {
    const serviceOrdersService = new ServiceOrdersService();

    const serviceOrder = await serviceOrdersService.getById(serviceOrderId);
    return serviceOrder.data;
  }

  async function getUserByNode (nodeId) {
    const nodesService = new NodesService();

    const serviceOrders = await nodesService.getUsersByNode(nodeId);
    return serviceOrders.data;
  }

  async function beginTreatment (userId, serviceOrderId){
    const nodesService = new NodesService();
    const result = await nodesService.startTreatment(userId, serviceOrderId)
    return result
  }

  async function checkIfIsInAttendant(userId){
    const nodesService = new NodesService();
    const result = await nodesService.getTreatmentStarted(userId)
    return result
  }

  async function stopTreatment(userId, serviceOrderId){
    const nodesService = new NodesService();
    const result = await nodesService.stopTreatment(userId, serviceOrderId)
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
    <NodeBoardComponent 
      {...stateToProps}
      {...dispatchToProps}
      getServiceOrdersByNodeId={getServiceOrdersByNodeId}
      getServiceOrderById={getServiceOrderById}
      getServiceOrdersAll={getServiceOrdersAll}
      getUserByNode={getUserByNode}
      beginTreatment={beginTreatment}
      checkIfIsInAttendant={checkIfIsInAttendant}
      stopTreatment={stopTreatment}
      levelOs={levelOs}
      typeOs={typeOs}
      orderHourPrice={orderHourPrice}
      confirmPrecification={confirmPrecification}
    />
  );
};

export default NodeBoardComposer;
