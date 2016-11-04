import { combineReducers } from 'redux';
import SessionReducer from './session_reducer.js';
import GameListRecucer from './game_list_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  gamesList: GameListRecucer
});

export default RootReducer;
