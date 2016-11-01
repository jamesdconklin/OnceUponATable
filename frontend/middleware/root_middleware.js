import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import BenchesMiddleware from './benches_middleware';

export default applyMiddleware(
  SessionMiddleware,
  BenchesMiddleware
);
