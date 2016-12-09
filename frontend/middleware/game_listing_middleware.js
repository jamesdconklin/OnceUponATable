import { REQUEST_GAME_LISTING, receiveGameListing,
         ENLIST, DE_ENLIST, requestGameListing,
         CREATE_GAME, UPDATE_GAME, receiveGameErrors}
  from 'GameListingActions';
import { fetchGame, signUp, signOff, createGame, updateGame }
  from 'GameUtil';

import { hashHistory } from 'react-router';

export default ({dispatch}) => next => action => {
  // console.log("GDM caught", action);
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
        gameListing => dispatch(requestGameListing(action.game_id))
      );
      break;
    case DE_ENLIST:
      signOff(action.game_id, action.user_id)(
        gameListing => dispatch(requestGameListing(action.game_id))
      );
      break;
    case REQUEST_GAME_LISTING:
      fetchGame(action.id)(
        (game) => dispatch(receiveGameListing(game)),
        (errors) => hashHistory.push("/")
      );
      break;
  }
  return next(action);
};
