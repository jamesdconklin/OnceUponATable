import { REQUEST_GAME_DETAIL, receiveGameDetail,
         ENLIST, DE_ENLIST, requestGameDetail}
  from '../actions/game_detail_actions';
import { fetchGame, signUp, signOff } from '../util/game_api_util';

export default ({dispatch}) => next => action => {
  switch (action.type) {
    case ENLIST:
      signUp(action.game_id, action.user_id)(
        gameDetail => dispatch(requestGameDetail(action.game_id))
      );
      break;
    case DE_ENLIST:
      signOff(action.game_id, action.user_id)(
        gameDetail => dispatch(requestGameDetail(action.game_id))
      );
      break;
    case REQUEST_GAME_DETAIL:
      fetchGame(action.id)(
        (game) => dispatch(receiveGameDetail(game))
      );
      break;
  }
  return next(action);
};
