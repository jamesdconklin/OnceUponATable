import { combineReducers } from 'redux';
import SessionReducer from './session_reducer.js';
import BenchesReducer from './bench_reducer.js';

const RootReducer = combineReducers({
  session: SessionReducer,
  benches: BenchesReducer
});

export default RootReducer;
