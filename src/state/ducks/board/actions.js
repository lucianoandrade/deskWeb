import types from './types';

export function getNodeBoardById(id) {
  return {
    type: types.GET_NODE_BOARD_BY_ID_REQUEST,
    payload: { id }
  }
}

export function getNodeBoardByIdSuccess(nodeBoard) {
  return {
    type: types.GET_NODE_BOARD_BY_ID_SUCCESS,
    payload: { nodeBoard }
  }
}

export function getNodeBoardByIdFailure(error) {
  return {
    type: types.GET_NODE_BOARD_BY_ID_FAILURE,
    payload: { error },
  }
}

export function getUserBoardById(id) {
  return {
    type: types.GET_USER_BOARD_BY_ID_REQUEST,
    payload: { id }
  }
}

export function getUserBoardByIdSuccess(userBoard) {
  return {
    type: types.GET_USER_BOARD_BY_ID_SUCCESS,
    payload: { userBoard }
  }
}

export function getUserBoardByIdFailure(error) {
  return {
    type: types.GET_USER_BOARD_BY_ID_FAILURE,
    payload: { error },
  }
}

export function getServiceOrdersByUserId(id) {
  return {
    type: types.GET_SERVICE_ORDERS_BY_USER_ID_REQUEST,
    payload: { id }
  }
}

export function getServiceOrdersByUserIdSuccess(serviceOrders) {
  return {
    type: types.GET_SERVICE_ORDERS_BY_USER_ID_SUCCESS,
    payload: { serviceOrders }
  }
}

export function getServiceOrdersByUserIdFailure(error) {
  return {
    type: types.GET_SERVICE_ORDERS_BY_USER_ID_FAILURE,
    payload: { error },
  }
}

export function getServiceOrdersByNodeId(id) {
  return {
    type: types.GET_SERVICE_ORDERS_BY_NODE_ID_REQUEST,
    payload: { id }
  }
}

export function getServiceOrdersByNodeIdSuccess(serviceOrders) {
  return {
    type: types.GET_SERVICE_ORDERS_BY_NODE_ID_SUCCESS,
    payload: { serviceOrders }
  }
}

export function getServiceOrdersByNodeIdFailure(error) {
  return {
    type: types.GET_SERVICE_ORDERS_BY_NODE_ID_FAILURE,
    payload: { error },
  }
}

export function getServiceOrderById(id) {
  return {
    type: types.GET_SERVICE_ORDER_BY_ID_REQUEST,
    payload: { id }
  }
}

export function getServiceOrderByIdSuccess(serviceOrders) {
  return {
    type: types.GET_SERVICE_ORDER_BY_ID_SUCCESS,
    payload: { serviceOrders }
  }
}

export function getServiceOrderByIdFailure(error) {
  return {
    type: types.GET_SERVICE_ORDER_BY_ID_FAILURE,
    payload: { error },
  }
}

export function clearBoard() {
  return {
    type: types.CLEAR,
  }
}
