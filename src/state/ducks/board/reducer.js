import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
  nodeBoard: undefined,
  userBoard: undefined,
  serviceOrders: [],
  serviceOrder: undefined,
}

export default function board(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_NODE_BOARD_BY_ID_REQUEST:
      return { ...INITIAL_STATE };

    case types.GET_NODE_BOARD_BY_ID_SUCCESS:
      return { ...state, nodeBoard: action.payload.nodeBoard };

    case types.GET_USER_BOARD_BY_ID_REQUEST:
      return { ...INITIAL_STATE };

    case types.GET_USER_BOARD_BY_ID_SUCCESS:
      return { ...state, userBoard: action.payload.userBoard };

    case types.GET_SERVICE_ORDERS_BY_USER_ID_REQUEST:
      return { ...state };

    case types.GET_SERVICE_ORDERS_BY_USER_ID_SUCCESS:
      return { ...state, serviceOrders: state.serviceOrders.concat(action.payload.serviceOrders) };

    case types.GET_SERVICE_ORDERS_BY_NODE_ID_REQUEST:
      return { ...INITIAL_STATE, };

    case types.GET_SERVICE_ORDERS_BY_NODE_ID_SUCCESS:
      return { ...state, serviceOrders: state.serviceOrders.concat(action.payload.serviceOrders) };

    case types.GET_SERVICE_ORDER_BY_ID_REQUEST:
      return { ...INITIAL_STATE, };

    case types.GET_SERVICE_ORDER_BY_ID_SUCCESS:
      return { ...state, serviceOrders: state.serviceOrders.concat(action.payload.serviceOrders) };

    case types.CLEAR:
      return { ...INITIAL_STATE };

    default:
      return state;
  }
}