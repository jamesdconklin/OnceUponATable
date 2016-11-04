import { REQUEST_LISTED_GAMES, requestListedGames, receiveListedGames,
         REQUEST_LISTED_USER, requestListedUser, receiveListedUser}
  from '../actions/game_list_actions';
import { fetchGames } from '../util/game_api_util';
import { fetchUser } from '../util/user_api_util';

export default ({dispatch}) => next => action =>  {
  let requestGamesCB = (games) => (
    dispatch(receiveListedGames(action.category, games))
  );
  let requestUserCB = (user) => (
    dispatch(receiveListedUser(user))
  );
  switch (action.type) {
    case REQUEST_LISTED_USER:
      fetchUser(action.id)(requestUserCB);
    case REQUEST_LISTED_GAMES:
      if (action.category === "run") {
        fetchGames(`gm_id=${action.id}`)(requestGamesCB);
      } else if (action.category === "played") {
        fetchGames(`player_id=${action.id}`)(requestGamesCB);
      }
    default:
      return next(action);
  }
};
