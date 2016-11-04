import { REQUEST_LISTED_GAMES, requestListedGames, receiveListedGames }
  from '../actions/game_list_actions';
import { fetchGames } from '../util/game_api_util';

export default ({dispatch}) => next => action =>  {
  let requestCB = (games) => (
    dispatch(receiveListedGames(action.category, games))
  );
  switch (action.type) {
    case REQUEST_LISTED_GAMES:
      if (action.category === "run") {
        fetchGames(`gm_id=${action.id}`)(requestCB);
      } else if (action.category === "played") {
        fetchGames(`player_id=${action.id}`)(requestCB);
      }
    default:
      return next(action);
  }
};
