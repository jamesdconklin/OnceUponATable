import { REQUEST_LISTED_GAMES, requestListedGames, receiveListedGames,
         REQUEST_LISTED_USER, requestListedUser, receiveListedUser}
  from 'GameIndexActions';
import { fetchGames } from 'GameUtil';
import { fetchUser } from 'UserUtil';

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
