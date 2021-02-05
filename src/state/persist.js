import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer({
    key: 'webdesk-admin',
    storage,
    whitelist: ['authReducer'],
  }, reducers);

  return persistedReducer;
};
