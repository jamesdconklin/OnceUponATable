import { combineReducers } from 'redux';
import SessionReducer from './session_reducer.js';
import GameListReducer from './game_list_reducer';
import GameDetailReducer from './game_detail_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  gamesList: GameListReducer,
  gameDetail: GameDetailReducer,
});

export default RootReducer;
