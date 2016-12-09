import { createStore } from 'redux';
import RootReducer from 'RootReducer';
import RootMiddleware from 'RootMiddleware';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    RootMiddleware
  )
);

export default configureStore;
