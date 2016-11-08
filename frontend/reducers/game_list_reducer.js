import { merge } from 'lodash';
import { RECEIVE_LISTED_GAMES , RECEIVE_LISTED_USER}
  from '../actions/game_list_actions';

const _defaultState = {
  user: null,
  run: [],
  played: []
};

export default (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  // console.log("GamesListL reducer caught", action);
  switch (action.type) {
    case RECEIVE_LISTED_GAMES:
      newState[action.category] = action.games;
    case RECEIVE_LISTED_USER:
      return merge(newState, {user: action.user});
    default:
      return newState;
  }
};
