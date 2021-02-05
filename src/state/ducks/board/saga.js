import { takeLatest, takeEvery, put, all } from 'redux-saga/effects';

import types from './types';
import {
  getNodeBoardByIdSuccess,
  getNodeBoardByIdFailure,
  getUserBoardByIdSuccess,
  getUserBoardByIdFailure,
  getServiceOrdersByUserIdSuccess,
  getServiceOrdersByUserIdFailure,
  getServiceOrdersByNodeIdSuccess,
  getServiceOrdersByNodeIdFailure,
  getServiceOrderByIdSuccess,
  getServiceOrderByIdFailure
} from './actions';

import { NodesService } from '../../../services/api/nodes.service';
import { UsersService } from '../../../services/api/users.service';
import { ServiceOrdersService } from '../../../services/api/serviceOrders.service';

export function* getNodeBoardById({ payload }) {
  const { id } = payload;

  const nodesService = new NodesService();

  const response = yield nodesService.getById(id);

  if (response.status === 200) {
    yield put(getNodeBoardByIdSuccess(response.data));
  } else {
    yield put(getNodeBoardByIdFailure(''));
  }
}

export function* getUserBoardById({ payload }) {
  const { id } = payload;

  const usersService = new UsersService();

  const response = yield usersService.getById(id);

  if (response.status === 200) {
    yield put(getUserBoardByIdSuccess(response.data));
  } else {
    yield put(getUserBoardByIdFailure(''));
  }
}

export function* getServiceOrdersByUserId({ payload }) {
  const { id } = payload;

  const userService = new UsersService();

  const response = yield userService.getServiceOrderByUserId(id);

  if (response.status === 200) {
    const serviceOrders = response.data.map((data) => {
      data.userId = id;
      return data;
    });

    yield put(getServiceOrdersByUserIdSuccess(serviceOrders));
  } else {
    yield put(getServiceOrdersByUserIdFailure(''));
  }
}

export function* getServiceOrdersByNodeId({ payload }) {
  const { id } = payload;

  const nodesService = new NodesService();

  const response = yield nodesService.getServiceOrdersByNodeId(id);

  if (response.status === 200) {
    yield put(getServiceOrdersByNodeIdSuccess(response.data));
  } else {
    yield put(getServiceOrdersByNodeIdFailure(''));
  }
}

export function* getServiceOrderById({ payload }) {
  const { id } = payload;

  const serviceOrdersService = new ServiceOrdersService();

  const response = yield serviceOrdersService.getById(id);

  if (response.status === 200) {
    yield put(getServiceOrderByIdSuccess(response.data));
  } else {
    yield put(getServiceOrderByIdFailure(''));
  }
}

export default all([
  takeLatest(types.GET_NODE_BOARD_BY_ID_REQUEST, getNodeBoardById),
  takeLatest(types.GET_USER_BOARD_BY_ID_REQUEST, getUserBoardById),
  takeEvery(types.GET_SERVICE_ORDERS_BY_USER_ID_REQUEST, getServiceOrdersByUserId),
  takeEvery(types.GET_SERVICE_ORDERS_BY_NODE_ID_REQUEST, getServiceOrdersByNodeId),
  takeEvery(types.GET_SERVICE_ORDER_BY_ID_REQUEST, getServiceOrderById),
]);
