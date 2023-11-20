import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import {combineReducers} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import reducers from './features/reducers';
import sagas from './sagas';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const persistConfig = {key: 'root', storage: AsyncStorage};

const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware(), logger, sagaMiddleware];

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

sagaMiddleware.run(sagas);

export const persistor = persistStore(store);
