import axios from 'axios';
import { takeLatest, put, all } from 'redux-saga/effects';

import { AuthenticationService } from '../../../services/api/authentication.service';

import types from './types';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  const { username, password } = payload;

  const authenticationService = new AuthenticationService();

  const response = yield authenticationService.signin({
    login: username,
    password,
  });
  if (response.status === 200) {
    const { token, user } = response.data;
    yield put(signInSuccess(token, user));
  } else {
    yield put(signFailure(response.data.message));
  }
}

export default all([
  takeLatest(types.SIGN_IN_REQUEST, signIn)
]);
