import { combineReducers } from 'redux';
import SessionReducer from './session_reducer.js';
import GameListReducer from './game_list_reducer';
import GameDetailReducer from './game_detail_reducer';
import CanvasReducer from './canvas_reducer';
import AssetReducer from './asset_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  gamesList: GameListReducer,
  gameDetail: GameDetailReducer,
  canvas: CanvasReducer,
  assetLibrary: AssetReducer
});

export default RootReducer;
