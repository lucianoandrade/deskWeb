import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
  token: null,
  user: {
    id: '',
    login: '',
    name: '',
    email: '',
  },
  error: '',
  signed: false,
  loading: false,
}

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SIGN_IN_REQUEST:
      return { ...INITIAL_STATE, loading: true };

    case types.SIGN_IN_SUCCESS:
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.user = action.payload.user;
        draft.signed = true;
        draft.loading = false;
      })

      case types.SIGN_FAILURE:
        return { ...INITIAL_STATE, error: action.payload.error, signed: false };

    case types.SIGNOUT:
      return { ...INITIAL_STATE, signed: false, token: '' };

    case 'PURGE':
      return INITIAL_STATE;
    default:
      return state;
  }
}