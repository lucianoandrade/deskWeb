import { combineReducers } from 'redux';

import authReducer from './auth/reducer';
import boardReducer from './board/reducer';

export default combineReducers({
  authReducer,
  boardReducer,
})