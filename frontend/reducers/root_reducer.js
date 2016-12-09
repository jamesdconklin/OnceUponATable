import { combineReducers } from 'redux';
import SessionReducer from 'SessionReducer';
import GameListingReducer from 'GameListingReducer';
import GameIndexReducer from 'GameIndexReducer';
import CanvasReducer from 'CanvasReducer';
import AssetReducer from 'AssetReducer';
import MessageReducer from 'MessageReducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  gameIndex: GameIndexReducer,
  gameListing: GameListingReducer,
  canvas: CanvasReducer,
  assetLibrary: AssetReducer,
  messages: MessageReducer
});

export default RootReducer;
