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

  switch (action.type) {
    case RECEIVE_LISTED_GAMES:
      console.log("GL reducer RLG caught", action);
      newState[action.category] = action.games;
    case RECEIVE_LISTED_USER:
      console.log("GL reducer RLU caught", action);
      return merge(newState, {user: action.user});
    default:
      console.log("GL Reducer default caught", action);
      return newState;
  }
};
