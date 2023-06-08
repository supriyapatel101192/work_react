import { createStore, applyMiddleware } from 'redux';
import { RootAction, RootState, Services } from 'typesafe-actions';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './root-reducer';
import rootEpic from './root-epic';
import { composeEnhancers } from './utils';
import services from '../services';

export const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState, Services>({
  dependencies: services,
});

const middlewares = [epicMiddleware];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const initialState = {};

const store = createStore(rootReducer, initialState, enhancer);

epicMiddleware.run(rootEpic);

export default store;
