import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import board from './board/saga';

export default function* rootSaga() {
  return yield all([
    auth,
    board,
  ]);
}