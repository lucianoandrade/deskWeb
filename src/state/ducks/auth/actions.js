import types from './types';

export function signInRequest(username, password) {
  return {
    type: types.SIGN_IN_REQUEST,
    payload: { username, password }
  }
}

export function signInSuccess(token, user) {
  return {
    type: types.SIGN_IN_SUCCESS,
    payload: { token, user }
  }
}

export function signFailure(error) {
  return {
    type: types.SIGN_FAILURE,
    payload: { error },
  }
}

export function signOut(email, password) {
  return {
    type: types.SIGNOUT,
  }
}