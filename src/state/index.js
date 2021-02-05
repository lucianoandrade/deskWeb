import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import persistReducers from './persist';
import createStore from './createStore';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const reducers = persistReducers(rootReducer);

const store = createStore(reducers, middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
