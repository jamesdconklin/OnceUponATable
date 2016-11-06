import { REQUEST_GAME_DETAIL, receiveGameDetail,
         ENLIST, DE_ENLIST, requestGameDetail,
         CREATE_GAME, UPDATE_GAME, receiveGameErrors}
  from '../actions/game_detail_actions';
import { fetchGame, signUp, signOff, createGame, updateGame }
  from '../util/game_api_util';

import { hashHistory } from 'react-router';

export default ({dispatch}) => next => action => {
  switch (action.type) {
    case CREATE_GAME:
      createGame(action.game)(
        ({id}) => hashHistory.push(`/games/${id}`),
        (errors) => {
          dispatch(receiveGameErrors(errors.responseJSON));
        }
      );
      break;
    case UPDATE_GAME:
      updateGame(action.game)(
        ({id}) => hashHistory.push(`/games/${id}`),
        (errors) => dispatch(receiveGameErrors(errors.responseJSON))
      );
      break;
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
        (game) => dispatch(receiveGameDetail(game)),
        (errors) => hashHistory.push("/")
      );
      break;
  }
  return next(action);
};
