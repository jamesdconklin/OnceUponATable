import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import GameListMiddleware from './game_list_middleware';

export default applyMiddleware(
  SessionMiddleware,
  GameListMiddleware
);
